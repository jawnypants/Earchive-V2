(function (global) {
    const DEFAULT_TEMPO_BPM = 120;

    function buildEqualTemperamentTable(divisions = 12) {
        const table = new Array(128);
        for (let note = 0; note < 128; note++) {
            table[note] = note * 100;
        }
        return table;
    }

    class FluidSynthRenderer {
    constructor(options = {}) {
            this.initializationPromise = null;
            this.module = null;
            this.audioContext = null;
            this.settingsPtr = null;
            this.synthPtr = null;
            this.playerPtr = null;
            this.audioNode = null;
            this.audioGeneration = 0;
            this.outputGain = null;
            this.recordDestination = null;
            this.workletModulePromise = null;
            this.blockSize = 4096;
            this.leftPtr = null;
            this.rightPtr = null;
            this.leftView = null;
            this.rightView = null;
            this.silenceLeft = null;
            this.silenceRight = null;
            this.sfLoaded = false;
            this.songDuration = 0;
            this.totalTicks = 0;
            this.isRendering = false;
            this.onPlaybackComplete = null;
            this.onPlaybackLoop = null;
            this.onPlaybackPosition = null;
            this.channelPrograms = new Map();
            this.loopEnabled = false;
            this.baseSongDuration = 0;
            this.defaultTempoBpm = Number.isFinite(options.defaultTempoBpm)
                ? options.defaultTempoBpm
                : DEFAULT_TEMPO_BPM;
            this.baseBpm = this.defaultTempoBpm;
            this.currentBpm = this.defaultTempoBpm;
            this.currentTuningData = new Float64Array(128);
            this.currentTuningName = "12-TET";
            this.tuningPtr = null;
            this.tuningBuffer = null;
            this.tuningKeysPtr = null;
            this.tuningKeysBuffer = null;
            this.tuningBank = 1;
            this.tuningProg = 0;
            this.channelTuningAssignments = new Map();
        this.progressCallback = null;
        this.moduleUrl = options.moduleUrl || "";
        this.resolvePath = typeof options.resolvePath === "function"
            ? options.resolvePath
            : (path) => path;
        this.workletUrl = options.workletUrl || "js/fluid-worklet.js";
        this.getSoundfontCandidates = typeof options.getSoundfontCandidates === "function"
            ? options.getSoundfontCandidates
            : () => [];
        this.channelTuningBank = Number.isFinite(options.channelTuningBank)
            ? options.channelTuningBank
            : 2;
    }

        setProgressCallback(callback) {
            this.progressCallback = typeof callback === "function" ? callback : null;
        }

        reportProgress(fraction) {
            if (this.progressCallback) {
                this.progressCallback(fraction);
            }
        }

        async ensureInitialized(audioContext) {
            if (!audioContext) {
                return;
            }
            this.audioContext = audioContext;
            if (!this.initializationPromise) {
                this.initializationPromise = this.initializeAudio().catch(error => {
                    this.initializationPromise = null;
                    throw error;
                });
            }
            await this.initializationPromise;
        }

        async initializeAudio() {
            this.reportProgress(0.2);
            if (!this.module) {
                if (!this.moduleUrl) {
                    throw new Error("Fluidsynth module URL is not set.");
                }
                const { default: createModule } = await import(/* webpackIgnore: true */ this.moduleUrl);
                const module = await createModule({ locateFile: path => this.resolvePath(path) });
                await module.ready;
                this.module = module;
                this.reportProgress(0.5);
                this.setupApi();
                this.initializeSynth();
            }
            await this.loadSoundFont();
            if (!this.audioNode) {
                await this.createProcessor();
            }
            this.reportProgress(1);
        }

        setupApi() {
            const m = this.module;
            this._new_fluid_settings = m.cwrap("new_fluid_settings", "number", []);
            this._delete_fluid_settings = m.cwrap("delete_fluid_settings", null, ["number"]);
            this._fluid_settings_setnum = m.cwrap("fluid_settings_setnum", "number", ["number", "string", "number"]);
            this._fluid_settings_setstr = m.cwrap("fluid_settings_setstr", "number", ["number", "string", "string"]);
            this._fluid_settings_setint = m.cwrap("fluid_settings_setint", "number", ["number", "string", "number"]);
            this._new_fluid_synth = m.cwrap("new_fluid_synth", "number", ["number"]);
            this._delete_fluid_synth = m.cwrap("delete_fluid_synth", null, ["number"]);
            this._fluid_synth_sfload = m.cwrap("fluid_synth_sfload", "number", ["number", "string", "number"]);
            this._fluid_synth_write_float = m.cwrap("fluid_synth_write_float", "number", ["number", "number", "number", "number", "number", "number", "number", "number"]);
            this._fluid_synth_program_change = m.cwrap("fluid_synth_program_change", "number", ["number", "number", "number"]);
            this._new_fluid_player = m.cwrap("new_fluid_player", "number", ["number"]);
            this._delete_fluid_player = m.cwrap("delete_fluid_player", null, ["number"]);
            this._fluid_player_add = m.cwrap("fluid_player_add", "number", ["number", "string"]);
            this._fluid_player_play = m.cwrap("fluid_player_play", "number", ["number"]);
            this._fluid_player_stop = m.cwrap("fluid_player_stop", "number", ["number"]);
            this._fluid_player_seek = m.cwrap("fluid_player_seek", "number", ["number", "number"]);
            this._fluid_player_get_status = m.cwrap("fluid_player_get_status", "number", ["number"]);
            this._fluid_player_get_current_tick = m.cwrap("fluid_player_get_current_tick", "number", ["number"]);
            this._fluid_player_get_total_ticks = m.cwrap("fluid_player_get_total_ticks", "number", ["number"]);
            this._fluid_player_join = m.cwrap("fluid_player_join", "number", ["number"]);
            this._fluid_player_set_bpm = m.cwrap("fluid_player_set_bpm", "number", ["number", "number"]);
            this._fluid_player_set_tempo = m.cwrap("fluid_player_set_tempo", "number", ["number", "number", "number"]);
            this._fluid_synth_tune_notes = m.cwrap("fluid_synth_tune_notes", "number", ["number", "number", "number", "number", "number", "number", "number"]);
            this._fluid_synth_activate_tuning = m.cwrap("fluid_synth_activate_tuning", "number", ["number", "number", "number", "number", "number"]);
            this._fluid_player_set_loop = m.cwrap("fluid_player_set_loop", "number", ["number", "number"]);
            this._fluid_synth_all_notes_off = m.cwrap("fluid_synth_all_notes_off", "number", ["number", "number"]);
            this._fluid_synth_cc = m.cwrap("fluid_synth_cc", "number", ["number", "number", "number", "number"]);
        }

        initializeSynth() {
            if (this.settingsPtr) {
                return;
            }
            this.settingsPtr = this._new_fluid_settings();
            const sampleRate = this.audioContext.sampleRate;
            this._fluid_settings_setnum(this.settingsPtr, "synth.sample-rate", sampleRate);
            this._fluid_settings_setstr(this.settingsPtr, "player.timing-source", "sample");
            this._fluid_settings_setint(this.settingsPtr, "player.reset-synth", this.loopEnabled ? 0 : 1);
            this._fluid_settings_setstr(this.settingsPtr, "synth.midi-bank-select", "xg");
            this._fluid_settings_setint(this.settingsPtr, "synth.polyphony", 256);
            this.synthPtr = this._new_fluid_synth(this.settingsPtr);
        }

        async loadSoundFont() {
            if (this.sfLoaded) {
                return;
            }
            this.reportProgress(0.55);
            this.useLegacyProcessor = false;
            const candidates = this.getSoundfontCandidates();
            if (!candidates.length) {
                throw new Error("No soundfont sources configured.");
            }
            let lastError = null;
            for (const candidate of candidates) {
                const fontUrl = candidate.url;
                const fontLabel = candidate.label || fontUrl;
                try {
                    console.log(`[Audio] Loading soundfont: ${fontLabel}`);
                    const response = await fetch(fontUrl);
                    if (!response.ok) {
                        throw new Error(`Status ${response.status}`);
                    }
                    const contentLength = Number(response.headers.get("content-length"));
                    console.log(`[Audio] Soundfont size: ${contentLength} bytes`);
                    let data;
                    if (response.body && Number.isFinite(contentLength) && contentLength > 0) {
                        const reader = response.body.getReader();
                        const chunks = [];
                        let received = 0;
                        while (true) {
                            const { done, value } = await reader.read();
                            if (done) break;
                            chunks.push(value);
                            received += value.length;
                            const fraction = Math.min(received / contentLength, 1);
                            this.reportProgress(0.6 + fraction * 0.35);
                        }
                        data = new Uint8Array(received);
                        let offset = 0;
                        for (const chunk of chunks) {
                            data.set(chunk, offset);
                            offset += chunk.length;
                        }
                    } else {
                        const buffer = await response.arrayBuffer();
                        data = new Uint8Array(buffer);
                    }
                    const FS = this.module.FS;
                    if (!FS.analyzePath("/soundfonts").exists) {
                        FS.mkdir("/soundfonts");
                    }
                    const sfFilename = fontUrl.split("/").pop() || "soundfont.sf2";
                    const sfPath = `/soundfonts/${sfFilename}`;
                    try {
                        FS.unlink(sfPath);
                    } catch (error) {
                        // ignore
                    }
                    FS.writeFile(sfPath, data);
                    const sfLoadResult = this._fluid_synth_sfload(this.synthPtr, sfPath, 1);
                    if (sfLoadResult < 0) {
                        throw new Error("FluidSynth failed to load the GM soundfont.");
                    }
                    this.sfLoaded = true;
                    console.log(`[Audio] Soundfont ready: ${fontLabel}`);
                    return;
                } catch (error) {
                    console.warn(`[Audio] Failed to load soundfont ${fontLabel}:`, error);
                    lastError = error;
                }
            }
            throw new Error(lastError || "Unable to load any soundfont candidates.");
        }

        async loadMidi(arrayBuffer, durationSeconds, assignments = [], tempoOptions = {}) {
            await this.ensureInitialized(this.audioContext || getAudioContext());
            const FS = this.module.FS;
            if (!FS.analyzePath("/midi").exists) {
                FS.mkdir("/midi");
            }
            const midiPath = "/midi/current.mid";
            try {
                FS.unlink(midiPath);
            } catch (error) {
                // ignore
            }
            FS.writeFile(midiPath, new Uint8Array(arrayBuffer));
            if (this.playerPtr) {
                this._fluid_player_stop(this.playerPtr);
                this.waitForPlayerStop();
                this._delete_fluid_player(this.playerPtr);
            }
            this.playerPtr = this._new_fluid_player(this.synthPtr);
            this._fluid_player_set_loop(this.playerPtr, 0);
            const addResult = this._fluid_player_add(this.playerPtr, midiPath);
            if (addResult !== 0) {
                throw new Error("Fluidsynth could not load the MIDI data.");
            }
            this.totalTicks = tempoOptions.totalTicks || 0;
            this.refreshTotalTicks();
            this.baseSongDuration = durationSeconds || 0;
            this.songDuration = this.baseSongDuration;
            if (tempoOptions && Number.isFinite(tempoOptions.baseBpm) && tempoOptions.baseBpm > 0) {
                this.baseBpm = tempoOptions.baseBpm;
            }
            this.isRendering = false;
            this.resetAudioQueue();
            this.channelPrograms = new Map();
            assignments.forEach(({ channel, program, bank }) => {
                this.channelPrograms.set(channel, {
                    bank: Number.isFinite(bank) ? bank : 0,
                    program: Number.isFinite(program) ? program : 0
                });
            });
            this.applyProgramSnapshot();
            const startBpm = tempoOptions && Number.isFinite(tempoOptions.targetBpm) && tempoOptions.targetBpm > 0
                ? tempoOptions.targetBpm
                : this.baseBpm;
            this._applyTempo(startBpm);
            this._applyStoredTuning(true);
        }

        async playFrom(offsetSeconds) {
            await this.ensureInitialized(this.audioContext || getAudioContext());
            if (!this.playerPtr) {
                throw new Error("No MIDI data loaded.");
            }
            const tickPosition = this.seekPlayer(offsetSeconds);
            this._applyTempo(this.currentBpm || this.baseBpm || this.defaultTempoBpm);
            this._applyStoredTuning();
            this._fluid_player_play(this.playerPtr);
            this.applyProgramSnapshot();
            this.playbackStartTick = tickPosition;
            this.isRendering = true;
            this.resetAudioQueue();
            return true;
        }

        silence() {
            if (!this._fluid_synth_all_notes_off || !this.synthPtr) {
                return;
            }
            for (let channel = 0; channel < 16; channel++) {
                this._fluid_synth_all_notes_off(this.synthPtr, channel);
            }
        }

        pause() {
            if (!this.playerPtr) {
                return 0;
            }
            const currentTick = this._fluid_player_get_current_tick(this.playerPtr);
            const seconds = this.ticksToSeconds(currentTick);
            this._fluid_player_stop(this.playerPtr);
            this.waitForPlayerStop();
            this.silence();
            this.isRendering = false;
            this.resetAudioQueue();
            return seconds;
        }

        resumePlayback() {
            if (!this.playerPtr) {
                return;
            }
            this._fluid_player_play(this.playerPtr);
            this.applyProgramSnapshot();
            this.isRendering = true;
            this.resetAudioQueue();
        }

        stop() {
            if (this.playerPtr) {
                this.seekPlayer(0);
                this._sendBpmToPlayer();
                this.silence();
            }
            this.isRendering = false;
            this.resetAudioQueue();
        }

        async seek(seconds) {
            await this.ensureInitialized(this.audioContext || getAudioContext());
            if (!this.playerPtr) {
                return;
            }
            this.seekPlayer(seconds);
            this._sendBpmToPlayer();
            this._applyStoredTuning();
            this.applyProgramSnapshot();
            this.isRendering = false;
            this.resetAudioQueue();
        }

        seekPlayer(seconds) {
            // A newly loaded player accepts nonzero seeks while it is READY.
            // Stopping it first makes FluidSynth reject the seek until it has played.
            if (this._fluid_player_get_status(this.playerPtr) !== FluidSynthRenderer.PLAYER_READY) {
                this._fluid_player_stop(this.playerPtr);
                this.waitForPlayerStop();
            }
            this._fluid_player_set_loop(this.playerPtr, 0);
            const tick = this.secondsToTicks(seconds);
            if (this._fluid_player_seek(this.playerPtr, tick) !== 0) {
                throw new Error("Could not seek to that position in the MIDI file.");
            }
            return tick;
        }

        setLoopEnabled(flag) {
            this.loopEnabled = flag;
            if (this.settingsPtr) {
                // The Recomposer keeps its selected channel voices between repeats.
                this._fluid_settings_setint(this.settingsPtr, "player.reset-synth", flag ? 0 : 1);
            }
            if (this.playerPtr) {
                this._fluid_player_set_loop(this.playerPtr, 0);
            }
        }

        setTempoBpm(bpm, baseBpm, baseDuration) {
            if (Number.isFinite(baseBpm) && baseBpm > 0) {
                this.baseBpm = baseBpm;
            }
            if (Number.isFinite(baseDuration) && baseDuration > 0) {
                this.baseSongDuration = baseDuration;
            }
            this._applyTempo(bpm);
        }

        applyTuning(pitches, name) {
            if (!Array.isArray(pitches) || pitches.length !== 128) {
                return;
            }
            this.currentTuningData = new Float64Array(pitches);
            this.currentTuningName = name || "Custom Tuning";
            this._applyStoredTuning(true);
        }

        reapplyTuning() {
            this._applyStoredTuning(true);
        }

        resetTuning() {
            this.currentTuningData = buildEqualTemperamentTable(12);
            this.currentTuningName = "12-TET";
            this._applyStoredTuning(true);
        }

        _applyTempo(bpm) {
            const fallbackBpm = this.baseBpm > 0 ? this.baseBpm : this.defaultTempoBpm;
            const safeBpm = Number.isFinite(bpm) && bpm > 0 ? bpm : fallbackBpm;
            this.currentBpm = safeBpm;
            if (this.baseSongDuration > 0 && this.baseBpm > 0) {
                const ratio = this.baseBpm / this.currentBpm;
                this.songDuration = this.baseSongDuration * ratio;
            } else {
                this.songDuration = this.baseSongDuration;
            }
            this._sendBpmToPlayer();
        }

        _sendBpmToPlayer() {
            if (!this.playerPtr) {
                return;
            }
            const bpm = this.currentBpm || this.baseBpm || this.defaultTempoBpm;
            if (this._fluid_player_set_tempo) {
                this._fluid_player_set_tempo(this.playerPtr, FluidSynthRenderer.TEMPO_EXTERNAL, bpm);
            } else if (this._fluid_player_set_bpm) {
                this._fluid_player_set_bpm(this.playerPtr, bpm);
            }
        }

        _applyStoredTuning(forceApply = false) {
            if (!this.currentTuningData || !this._fluid_synth_tune_notes || !this.synthPtr) {
                return;
            }
            this.ensureTuningBuffer();
            this.tuningBuffer.set(this.currentTuningData);
            this._fluid_synth_tune_notes(this.synthPtr, this.tuningBank, this.tuningProg, 128, this.tuningKeysPtr, this.tuningPtr, forceApply ? 1 : 0);
            this._selectTuningOnAllChannels(forceApply);
        }

        ensureTuningBuffer() {
            if (!this.tuningPtr) {
                this.tuningPtr = this.module._malloc(128 * 8);
            }
            if (!this.tuningBuffer || this.tuningBuffer.buffer !== this.module.HEAPF64.buffer) {
                this.tuningBuffer = new Float64Array(this.module.HEAPF64.buffer, this.tuningPtr, 128);
            }
            if (!this.tuningKeysPtr) {
                this.tuningKeysPtr = this.module._malloc(128 * 4);
            }
            if (!this.tuningKeysBuffer || this.tuningKeysBuffer.buffer !== this.module.HEAP32.buffer) {
                this.tuningKeysBuffer = new Int32Array(this.module.HEAP32.buffer, this.tuningKeysPtr, 128);
                for (let i = 0; i < 128; i++) {
                    this.tuningKeysBuffer[i] = i;
                }
            }
        }

        _selectTuningOnAllChannels(forceApply = false) {
            if (!this._fluid_synth_activate_tuning || !this.synthPtr) {
                return;
            }
            for (let channel = 0; channel < 16; channel++) {
                this._fluid_synth_activate_tuning(this.synthPtr, channel, this.tuningBank, this.tuningProg, forceApply ? 1 : 0);
            }
        }

        _selectTuningOnChannel(channel) {
            if (!this._fluid_synth_activate_tuning || !this.synthPtr) {
                return;
            }
            const assignment = this.channelTuningAssignments.get(channel);
            const bank = Number.isFinite(assignment?.bank) ? assignment.bank : this.tuningBank;
            const prog = Number.isFinite(assignment?.prog) ? assignment.prog : this.tuningProg;
            this._fluid_synth_activate_tuning(this.synthPtr, channel, bank, prog, 0);
        }

        programChange(channel, program, bank = 0) {
            if (!this.module || !this.synthPtr) {
                return;
            }
            this._fluid_synth_cc(this.synthPtr, channel, 0, bank === 128 ? 127 : 0);
            this._fluid_synth_cc(this.synthPtr, channel, 32, 0);
            this._fluid_synth_program_change(this.synthPtr, channel, program);
            this.channelPrograms.set(channel, { bank, program });
            this._selectTuningOnChannel(channel);
        }

        setChannelVolume(channel, value) {
            if (!this._fluid_synth_cc || !this.synthPtr) {
                return false;
            }
            const clamped = Math.max(0, Math.min(127, Math.round(value)));
            this._fluid_synth_cc(this.synthPtr, channel, 7, clamped);
            return true;
        }

        setChannelExpression(channel, value) {
            if (!this._fluid_synth_cc || !this.synthPtr) {
                return false;
            }
            const clamped = Math.max(0, Math.min(127, Math.round(value)));
            this._fluid_synth_cc(this.synthPtr, channel, 11, clamped);
            return true;
        }

        applyTuningForChannel(channel, pitches, forceApply = false) {
            if (!Array.isArray(pitches) || pitches.length !== 128) {
                return false;
            }
            if (!this._fluid_synth_tune_notes || !this._fluid_synth_activate_tuning || !this.synthPtr) {
                return false;
            }
            this.ensureTuningBuffer();
            this.tuningBuffer.set(pitches);
            const bank = this.channelTuningBank;
            const prog = Math.max(0, Math.min(127, Math.round(channel)));
            this._fluid_synth_tune_notes(this.synthPtr, bank, prog, 128, this.tuningKeysPtr, this.tuningPtr, forceApply ? 1 : 0);
            this.channelTuningAssignments.set(channel, { bank, prog });
            this._fluid_synth_activate_tuning(this.synthPtr, channel, bank, prog, forceApply ? 1 : 0);
            return true;
        }

        applyProgramSnapshot() {
            if (!this.channelPrograms || !this.channelPrograms.size) {
                return;
            }
            this.channelPrograms.forEach(({ bank, program }, channel) => {
                this.programChange(channel, program, bank);
            });
        }

        getCurrentSeconds() {
            if (!this.playerPtr) {
                return 0;
            }
            const tick = this._fluid_player_get_current_tick(this.playerPtr);
            return this.ticksToSeconds(tick);
        }

        resetAudioQueue() {
            if (!this.audioNode?.port) return;
            this.audioGeneration++;
            this.audioNode.port.postMessage({ type: "reset", generation: this.audioGeneration });
        }

        handleWorkletRequest(frames, generation) {
            if (!this.audioNode || this.useLegacyProcessor || generation !== this.audioGeneration) {
                return;
            }
            const { left, right } = this.renderFrames(frames);
            this.audioNode.port.postMessage({
                type: "data",
                generation,
                left,
                right
            }, [left.buffer, right.buffer]);
        }

    refreshTotalTicks() {
        if (!this.playerPtr || !this._fluid_player_get_total_ticks) {
            return;
        }
        const ticks = this._fluid_player_get_total_ticks(this.playerPtr);
        if (ticks > 0) {
            this.totalTicks = ticks;
        }
    }

    async waitForTotalTicks(timeoutMs = 250) {
        const start = Date.now();
        while (Date.now() - start < timeoutMs) {
            this.refreshTotalTicks();
            if (this.totalTicks > 0) {
                return true;
            }
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        return this.totalTicks > 0;
    }

        waitForPlayerStop() {
            if (!this.playerPtr || !this._fluid_player_join) {
                return;
            }
            try {
                this._fluid_player_join(this.playerPtr);
            } catch (error) {
                // Joining can fail if the player thread is already inactive; ignore.
            }
        }

        ensureHeapViews(length) {
            if (!this.leftPtr || length > this.blockSize) {
                if (this.leftPtr) {
                    this.module._free(this.leftPtr);
                    this.module._free(this.rightPtr);
                }
                this.blockSize = length;
                this.leftPtr = this.module._malloc(this.blockSize * 4);
                this.rightPtr = this.module._malloc(this.blockSize * 4);
                this.leftView = new Float32Array(this.module.HEAPF32.buffer, this.leftPtr, this.blockSize);
                this.rightView = new Float32Array(this.module.HEAPF32.buffer, this.rightPtr, this.blockSize);
            } else if (this.leftView?.buffer !== this.module.HEAPF32.buffer) {
                this.leftView = new Float32Array(this.module.HEAPF32.buffer, this.leftPtr, this.blockSize);
                this.rightView = new Float32Array(this.module.HEAPF32.buffer, this.rightPtr, this.blockSize);
            }
        }

        ensureSilenceBuffers(length) {
            if (!this.silenceLeft || this.silenceLeft.length < length) {
                this.silenceLeft = new Float32Array(length);
                this.silenceRight = new Float32Array(length);
            }
        }

        renderFrames(frameCount) {
            const frames = Math.max(this.blockSize, Number(frameCount) || 0);
            if (!this.isRendering || !this.playerPtr) {
                this.ensureSilenceBuffers(frames);
                return {
                    left: this.silenceLeft.subarray(0, frames),
                    right: this.silenceRight.subarray(0, frames)
                };
            }
            this.ensureHeapViews(frames);
            if (this.onPlaybackPosition || this.loopEnabled) {
                // Check the MIDI position between FluidSynth's 64-sample blocks
                // so a loop can rewind within the current worklet buffer.
                for (let offset = 0; offset < frames; offset += 64) {
                    const length = Math.min(64, frames - offset);
                    this._fluid_synth_write_float(this.synthPtr, length,
                        this.leftPtr, offset, 1, this.rightPtr, offset, 1);
                    const tick = this._fluid_player_get_current_tick(this.playerPtr);
                    if (this.loopEnabled && tick >= this.totalTicks) this.refreshTotalTicks();
                    if (this.loopEnabled && this.totalTicks > 0 && tick >= this.totalTicks
                        && this._fluid_player_seek(this.playerPtr, 0) === 0) {
                        this.playbackStartTick = 0;
                        this.onPlaybackLoop?.();
                    } else if (this.onPlaybackPosition) {
                        this.onPlaybackPosition(this.ticksToSeconds(tick), length / this.audioContext.sampleRate);
                    }
                }
            } else {
                this._fluid_synth_write_float(this.synthPtr, frames,
                    this.leftPtr, 0, 1, this.rightPtr, 0, 1);
            }
            const leftCopy = new Float32Array(frames);
            leftCopy.set(this.leftView.subarray(0, frames));
            const rightCopy = new Float32Array(frames);
            rightCopy.set(this.rightView.subarray(0, frames));
            if (global.recorder?.isRecording) {
                global.recorder.addChunk(leftCopy, rightCopy);
            }
            const status = (this.isRendering && this.playerPtr)
                ? this._fluid_player_get_status(this.playerPtr)
                : null;
            if (this.isRendering && status === FluidSynthRenderer.PLAYER_DONE) {
                this.isRendering = false;
                if (typeof this.onPlaybackComplete === "function") {
                    this.onPlaybackComplete();
                }
            }
            return { left: leftCopy, right: rightCopy };
        }

        async createProcessor() {
            if (!this.audioContext) {
                return;
            }
            if (this.audioContext.audioWorklet && this.audioContext.audioWorklet.addModule) {
                if (!this.workletModulePromise) {
                    this.workletModulePromise = this.audioContext.audioWorklet.addModule(this.workletUrl);
                }
                try {
                    await this.workletModulePromise;
                } catch (error) {
                    throw new Error(`Failed to load audio worklet: ${error?.message || error}`);
                }
                this.audioNode = new AudioWorkletNode(this.audioContext, "fluidsynth-worklet", {
                    processorOptions: { blockSize: this.blockSize }
                });
                this.outputGain = this.audioContext.createGain();
                this.audioNode.port.onmessage = (event) => {
                    if (event.data?.type === "request") {
                        const frames = event.data.frames || this.blockSize;
                        this.handleWorkletRequest(frames, event.data.generation);
                    }
                };
                this.useLegacyProcessor = false;
                this.updateRouting();
                return;
            }

            // Legacy fallback: ScriptProcessorNode
            this.useLegacyProcessor = true;
            // ScriptProcessor buffer size must be power of two between 256-16384; choose 1024 for low latency.
            this.blockSize = 1024;
            const processor = this.audioContext.createScriptProcessor(this.blockSize, 0, 2);
            processor.onaudioprocess = (event) => {
                const outL = event.outputBuffer.getChannelData(0);
                const outR = event.outputBuffer.getChannelData(1);
                const { left, right } = this.renderFrames(outL.length);
                outL.set(left);
                outR.set(right);
            };
            this.audioNode = processor;
            this.outputGain = this.audioContext.createGain();
            this.updateRouting();
        }

        attachRecorderDestination(node) {
            this.recordDestination = node;
            this.updateRouting();
        }

        updateRouting() {
            if (!this.audioNode) {
                return;
            }
            if (!this.outputGain) {
                this.outputGain = this.audioContext.createGain();
            }
            try {
                this.audioNode.disconnect();
            } catch (e) {
                // ignore
            }
            this.audioNode.connect(this.outputGain);
            this.outputGain.connect(this.audioContext.destination);
            if (this.recordDestination) {
                this.outputGain.connect(this.recordDestination);
            }
        }

        secondsToTicks(seconds) {
            this.refreshTotalTicks();
            if (!this.totalTicks || !this.songDuration) {
                return 0;
            }
            const ratio = Math.max(0, Math.min(1, seconds / this.songDuration));
            return Math.floor(ratio * this.totalTicks + 1e-7);
        }

        ticksToSeconds(ticks) {
            this.refreshTotalTicks();
            if (!this.totalTicks || !this.songDuration) {
                return 0;
            }
            return (ticks / this.totalTicks) * this.songDuration;
        }
    }

    FluidSynthRenderer.PLAYER_READY = 0;
    FluidSynthRenderer.PLAYER_DONE = 3;
    FluidSynthRenderer.TEMPO_EXTERNAL = 1;

    global.EarBPlayerCore = Object.assign(global.EarBPlayerCore || {}, {
        FluidSynthRenderer,
        buildEqualTemperamentTable
    });
})(typeof window !== "undefined" ? window : globalThis);
