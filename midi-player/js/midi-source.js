// Tone MIDI supplies note timings, but its Instrument defaults to program 0
// even when the source contains no Program Change. Read the source events too.
(function (global) {
    const PERCUSSION_CHANNEL = 9;
    const PERCUSSION_BANK = 128;
    const DRUM_BANK_SELECTS = new Set([120, 126, 127]);

    function readTrackVoices(bytes, midi) {
        const { header, tracks } = ReadMidiEvents(bytes);
        const splitTracks = [];
        const otherTrackPrograms = Array.from({ length: 16 }, () => []);
        tracks.forEach((events, sourceIndex) => {
            const firstIndex = splitTracks.length;
            const slots = new Map();
            const programs = Array(16).fill(null);
            const banks = Array(16).fill(null);
            let tick = 0;
            for (const event of events) {
                tick += event.deltaTime;
                const { channel } = event;
                if (channel === undefined) {
                    splitTracks[firstIndex] ??= {};
                    continue;
                }
                if (event.type === "controller" && event.controllerType === 0) {
                    banks[channel] = event.value;
                }
                if (event.type === "programChange") {
                    programs[channel] = event.programNumber;
                    otherTrackPrograms[channel].push({
                        tick, sourceIndex, program: programs[channel], bankSelect: banks[channel]
                    });
                }
                // Tone MIDI splits each source track by channel and program in
                // event order. Program 0 and an implicit program share a slot.
                const key = `${channel}:${programs[channel] ?? 0}`;
                if (!slots.has(key)) slots.set(key, firstIndex + slots.size);
                const index = slots.get(key);
                splitTracks[index] ??= {};
                if (event.type === "noteOn" && !splitTracks[index].firstNote) {
                    splitTracks[index].firstNote = {
                        tick, channel, sourceIndex, program: programs[channel], bankSelect: banks[channel]
                    };
                }
            }
        });
        if (header.format === 1 && splitTracks.length === midi.tracks.length + 1) splitTracks.shift();
        if (header.format === 1) {
            otherTrackPrograms.forEach(programs => programs.sort((a, b) => a.tick - b.tick).reverse());
        }
        return splitTracks.map(({ firstNote }) => {
            if (!firstNote) return null;
            const { channel, tick, sourceIndex } = firstNote;
            const inherited = header.format === 1 && firstNote.program === null
                ? otherTrackPrograms[channel].find(change => change.sourceIndex !== sourceIndex && change.tick <= tick)
                : null;
            return {
                program: firstNote.program ?? inherited?.program ?? null,
                bankSelect: firstNote.bankSelect ?? inherited?.bankSelect ?? null
            };
        });
    }

    function normalizeMidiSource(buffer) {
        const bytes = new Uint8Array(buffer);
        const midi = new Midi(bytes);
        const voices = readTrackVoices(bytes, midi);
        const tracks = midi.tracks.map((track, index) => {
            const channel = Number.isInteger(track.channel) ? track.channel : index % 16;
            const voice = voices[index];
            const program = voice ? voice.program : (track.instrument?.number || null);
            const bankSelect = voice?.bankSelect;
            const percussion = DRUM_BANK_SELECTS.has(bankSelect)
                || (bankSelect !== 121 && (channel === PERCUSSION_CHANNEL || (program === null && index === 9)));
            return {
                index,
                name: track.name?.trim() || `Track ${index + 1}`,
                program: program ?? 0,
                bank: percussion ? PERCUSSION_BANK : 0,
                channel,
                notes: track.notes
                    .filter(note => Number.isFinite(note.time) && Number.isFinite(note.duration))
                    .map(note => ({ time: note.time, duration: note.duration, midi: note.midi, velocity: note.velocity }))
            };
        }).filter(track => track.notes.length > 0);
        return {
            name: midi.name || "",
            duration: Number.isFinite(midi.duration) ? midi.duration : 0,
            durationTicks: midi.durationTicks,
            tracks,
            tempos: midi.header.tempos.filter(tempo => Number.isFinite(tempo.bpm) && Number.isFinite(tempo.time))
                .map(({ bpm, time }) => ({ bpm, time }))
        };
    }

    global.normalizeMidiSource = normalizeMidiSource;
})(globalThis);
