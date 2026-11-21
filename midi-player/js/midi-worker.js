let parserLoadError = null;
try {
    self.importScripts(
        "../assets/vendor/tonejs/Midi.min.js",
        "../assets/vendor/midi-file/parse.js",
        "midi-source.js"
    );
} catch (error) {
    parserLoadError = error;
}

self.addEventListener("message", (event) => {
    const { id, buffer } = event.data || {};
    if (typeof id === "undefined" || !(buffer instanceof ArrayBuffer)) {
        self.postMessage({ id, ok: false, error: "Malformed worker request." });
        return;
    }
    if (parserLoadError) {
        self.postMessage({ id, ok: false, error: "MIDI parser unavailable in worker." });
        return;
    }
    try {
        self.postMessage({ id, ok: true, payload: normalizeMidiSource(buffer) });
    } catch (error) {
        self.postMessage({ id, ok: false, error: error?.message || "Unable to parse MIDI file." });
    }
});
