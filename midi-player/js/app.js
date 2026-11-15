const fileInput = document.getElementById("midi-input");
const statusMessage = document.getElementById("status");
const statusProgressBar = document.getElementById("status-progress-bar");
const songPanel = document.getElementById("song-panel");
const songDisplay = document.getElementById("song-display");
const songTitle = document.getElementById("song-title");
const titleText = document.querySelector(".title-text");
const titleAudioProgress = document.getElementById("audio-enable-progress");
const controlsPanel = document.getElementById("controls-panel");
const instrumentPanel = document.getElementById("instrument-panel");
const instrumentGrid = document.getElementById("instrument-menus");
const enableAudioButton = document.getElementById("enable-audio");
const audioLaunchHint = document.getElementById("audio-launch-hint");
const loadButton = document.getElementById("load-button");
const loadArrangementButton = document.getElementById("load-arrangement");
const saveArrangementButton = document.getElementById("save-arrangement");
const loadSampleButton = document.getElementById("load-sample");
const sampleMidiSelect = document.getElementById("sample-midi-select");
const sampleFolderSelect = document.getElementById("sample-folder-select");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const recordButton = document.getElementById("record");
const progressBar = document.getElementById("progress");
const progressElapsed = document.getElementById("progress-elapsed");
const progressRemaining = document.getElementById("progress-remaining");
const loopToggle = document.getElementById("loop-toggle");
const tempoSlider = document.getElementById("tempo-slider");
const tempoValue = document.getElementById("tempo-value");
const tempoResetButton = document.getElementById("tempo-reset");
const tuningSelect = document.getElementById("tuning-select");
const tuningStatus = document.getElementById("tuning-status");
const tuningFolderSelect = document.getElementById("tuning-folder-select");
const tuningResetButton = document.getElementById("tuning-reset");
const tuningSourceToggle = document.getElementById("tuning-source-toggle");
const modeSelect = document.getElementById("mode-select");
const modeStatus = document.getElementById("mode-status");
const transposeInput = document.getElementById("transpose-input");
const transposeStatus = document.getElementById("transpose-status");
const transposeDecrement = document.getElementById("transpose-decrement");
const transposeIncrement = document.getElementById("transpose-increment");
const transposeResetButton = document.getElementById("transpose-reset");
const sampleModal = document.getElementById("sample-modal");
const sampleChooseButton = document.getElementById("sample-choose");
const sampleCancelButton = document.getElementById("sample-cancel");
const PROGRESS_MIN_INTERVAL_MS = 80;
const LOOP_DELAY_MS = 3000;
const helpToggle = document.getElementById("help-toggle");
const helpBubbles = document.getElementById("help-bubbles");
const helpDismiss = document.getElementById("help-dismiss");
const HELP_SEEN_KEY = "ear_help_seen_v1";
const infoToggle = document.getElementById("info-toggle");
const infoBubbles = document.getElementById("info-bubbles");
const infoDismiss = document.getElementById("info-dismiss");
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const contactLink = document.getElementById("contact-link");
const contactModal = document.getElementById("contact-modal");
const contactCancel = document.getElementById("contact-cancel");
const favoritesSelectScale = document.getElementById("favorites-select-scale");
const favoritesSelectInst = document.getElementById("favorites-select-inst");
const favoritesAddScale = document.getElementById("favorites-add-scale");
const favoritesAddInst = document.getElementById("favorites-add-inst");
const favoritesRemoveScale = document.getElementById("favorites-remove-scale");
const favoritesRemoveInst = document.getElementById("favorites-remove-inst");
const favoritesModal = document.getElementById("favorites-modal");
const favoriteNameInput = document.getElementById("favorite-name-input");
const favoriteSaveButton = document.getElementById("favorite-save");
const favoriteCancelButton = document.getElementById("favorite-cancel");
const favoritesDeleteModal = document.getElementById("favorites-delete-modal");
const favoriteDeleteMessage = document.getElementById("favorites-delete-message");
const favoriteDeleteConfirmButton = document.getElementById("favorite-delete-confirm");
const favoriteDeleteCancelButton = document.getElementById("favorite-delete-cancel");
const authLaunchButton = document.getElementById("auth-launch");
const authMiniStatus = document.getElementById("auth-mini-status");
const authModal = document.getElementById("auth-modal");
const authCloseButton = document.getElementById("auth-close");
const authEmailInput = document.getElementById("auth-email");
const authSignInButton = document.getElementById("auth-sign-in");
const authSignOutButton = document.getElementById("auth-sign-out");
const authStatus = document.getElementById("auth-status");
const arrangementsModal = document.getElementById("arrangements-modal");
const arrangementsList = document.getElementById("arrangements-list");
const arrangementsStatus = document.getElementById("arrangements-status");
const arrangementsCancelButton = document.getElementById("arrangements-cancel");
const arrangementsLoadButton = document.getElementById("arrangements-load");
const saveArrangementModal = document.getElementById("save-arrangement-modal");
const saveArrangementNameInput = document.getElementById("save-arrangement-name");
const saveArrangementStatus = document.getElementById("save-arrangement-status");
const saveArrangementCancelButton = document.getElementById("save-arrangement-cancel");
const saveArrangementConfirmButton = document.getElementById("save-arrangement-confirm");
const pageTabs = Array.from(document.querySelectorAll(".app-tabs .tab[data-page]"));
const pageViews = Array.from(document.querySelectorAll("[data-page-view]"));
const librarianSaveCurrentButton = document.getElementById("librarian-save-current");
const librarianImportButton = document.getElementById("librarian-import");
const librarianLoadCloudButton = document.getElementById("librarian-load-cloud");
const librarianPlayButton = document.getElementById("librarian-play");
const librarianPauseButton = document.getElementById("librarian-pause");
const librarianStopButton = document.getElementById("librarian-stop");
const librarianNowTitle = document.getElementById("librarian-now-title");
const librarianNowMeta = document.getElementById("librarian-now-meta");
const librarianStatus = document.getElementById("librarian-status");
const librarianLibraryList = document.getElementById("librarian-library-list");
const librarianQueue = document.getElementById("librarian-queue");
const librarianPlaylists = document.getElementById("librarian-playlists");
const librarianAddPlaylistButton = document.getElementById("librarian-add-playlist");
const librarianDeletePlaylistButton = document.getElementById("librarian-delete-playlist");
const playlistCreateModal = document.getElementById("playlist-create-modal");
const playlistCreateName = document.getElementById("playlist-create-name");
const playlistCreateStatus = document.getElementById("playlist-create-status");
const playlistCreateCancel = document.getElementById("playlist-create-cancel");
const playlistCreateConfirm = document.getElementById("playlist-create-confirm");
const playlistDeleteModal = document.getElementById("playlist-delete-modal");
const playlistDeleteMessage = document.getElementById("playlist-delete-message");
const playlistDeleteCancel = document.getElementById("playlist-delete-cancel");
const playlistDeleteConfirm = document.getElementById("playlist-delete-confirm");
const queuePreviousButton = document.getElementById("queue-previous");
const queuePlayToggleButton = document.getElementById("queue-play-toggle");
const queueNextButton = document.getElementById("queue-next");
const queueShuffleToggleButton = document.getElementById("queue-shuffle-toggle");
const librarianFilterButtons = Array.from(document.querySelectorAll("[data-library-filter]"));
const radiographAudio = document.getElementById("radiograph-audio");
const radiographPlayButton = document.getElementById("radiograph-play");
const radiographMuteButton = document.getElementById("radiograph-mute");
const radiographReconnectButton = document.getElementById("radiograph-reconnect");
const radiographStatus = document.getElementById("radiograph-status");
const radiographLiveLight = document.getElementById("radiograph-live-light");
const radiographLiveLabel = document.getElementById("radiograph-live-label");
const radiographListenerCount = document.getElementById("radiograph-listener-count");
const radiographSignal = document.querySelector(".radiograph-signal");
const radiographSignalBars = Array.from(document.querySelectorAll(".radiograph-signal > span"));
const radiographSignalCaption = document.getElementById("radiograph-signal-caption");
const radiographUseCurrentButton = document.getElementById("radiograph-use-current");
const radiographSubmitButton = document.getElementById("radiograph-submit");
const radiographDraftSummary = document.getElementById("radiograph-draft-summary");
const radiographSubmitStatus = document.getElementById("radiograph-submit-status");
const radiographRatingStatus = document.getElementById("radiograph-rating-status");
const radiographRatingButtons = Array.from(document.querySelectorAll("[data-radiograph-rating]"));
const radiographSaveLibraryButton = document.getElementById("radiograph-save-library");
const radiographNowTitle = document.getElementById("radiograph-now-title");
const radiographNowMeta = document.getElementById("radiograph-now-meta");
const radiographRotationRank = document.getElementById("radiograph-rotation-rank");
const radiographQueueList = document.getElementById("radiograph-queue-list");
const radiographQueueCount = document.getElementById("radiograph-queue-count");
const radiographPopularityList = document.getElementById("radiograph-popularity-list");
const radiographLeaderboardMode = document.getElementById("radiograph-leaderboard-mode");
const radiographCommentsList = document.getElementById("radiograph-comments-list");
const radiographCommentInput = document.getElementById("radiograph-comment-input");
const radiographCommentSubmit = document.getElementById("radiograph-comment-submit");
const radiographCommentStatus = document.getElementById("radiograph-comment-status");
const librarianCommentInput = document.getElementById("librarian-comment-input");
const librarianCommentSubmit = document.getElementById("librarian-comment-submit");
const librarianCommentStatus = document.getElementById("librarian-comment-status");

if (songTitle) {
    songTitle.classList.add("is-hidden");
}

function setActivePage(pageName) {
    if (!pageName) {
        return;
    }
    pageTabs.forEach((tab) => {
        const isActive = tab.dataset.page === pageName;
        tab.classList.toggle("is-active", isActive);
        if (isActive) {
            tab.setAttribute("aria-current", "page");
        } else {
            tab.removeAttribute("aria-current");
        }
    });
    pageViews.forEach((view) => {
        view.classList.toggle("is-active", view.dataset.pageView === pageName);
    });
    if (pageName === "librarian") {
        setTimeout(() => {
            loadLibrarianSavedSongs().catch((error) => {
                console.warn("Failed to auto-load Librarian songs:", error);
            });
        }, 0);
    }
}

if (pageTabs.length && pageViews.length) {
    pageTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            setActivePage(tab.dataset.page || "recomposer");
        });
    });
    const initiallyActiveTab = pageTabs.find(tab => tab.classList.contains("is-active"));
    setActivePage(initiallyActiveTab?.dataset.page || "recomposer");
}

let librarianItems = [];
const ALL_SONGS_PLAYLIST_ID = "playlist-all-songs";
let librarianPlaylistsState = [
    {
        id: ALL_SONGS_PLAYLIST_ID,
        name: "All Songs",
        songIds: [],
        isAllSongs: true,
        repeat: true
    },
    {
        id: "playlist-evening",
        name: "Evening Reassemblies",
        songIds: [],
        repeat: true
    }
];
let activePlaylistId = librarianPlaylistsState[0]?.id || null;
let activeLibrarianItemId = null;
let activeLibrarianFilter = "all";
let queueShuffleEnabled = false;
let draggedQueueIndex = null;
let lastQueuePreviousRestartAt = 0;
let librarianSongsLoading = false;
let librarianSongsLoadedForUserId = null;
let activeLibrarianLoadToken = 0;
let activeLoadedLibrarianItemId = null;
const QUEUE_PREVIOUS_SECOND_PRESS_MS = 2400;
let radiographRating = 0;
let radiographDraftReady = false;
let radiographStreamUrl = "";
let radiographStatusUrl = "";
let radiographRecipeUrl = "";
let radiographHls = null;
let radiographStatusTimer = null;
let radiographRecoveryTimer = null;
let radiographAudioContext = null;
let radiographAnalyser = null;
let radiographAudioSource = null;
let radiographVolumeData = null;
let radiographMeterFrame = null;
let radiographDisplayedLevels = [];
let currentRadiographTrackId = null;
let currentRadiographFile = "";
let currentRadiographHasRecipe = false;
let currentRadiographCreatorName = "";
let radiographRatingSyncToken = 0;
let radiographCommentsSyncToken = 0;
let radiographLeaderboardModeIndex = 0;
let radiographLeaderboardTimer = null;
let radiographLeaderboardRows = {
    all_time: [],
    week: []
};
let currentSupabaseUser = null;

function setRadiographStatus(message, isError = false) {
    if (radiographStatus) {
        radiographStatus.textContent = message;
        radiographStatus.classList.toggle("error", Boolean(isError));
    }
}

function setRadiographLiveState(state) {
    const isLive = state === "live";
    const isError = state === "error";
    if (radiographLiveLight) {
        radiographLiveLight.classList.toggle("is-live", isLive);
        radiographLiveLight.classList.toggle("is-error", isError);
    }
    if (radiographLiveLabel) {
        radiographLiveLabel.textContent = isLive ? "Live" : (isError ? "Needs reconnect" : "Standby");
    }
    if (radiographSignal) {
        radiographSignal.classList.toggle("is-playing", isLive);
    }
    if (radiographPlayButton) {
        radiographPlayButton.classList.toggle("is-playing", isLive);
    }
    if (!isLive) {
        stopRadiographVolumeMeter();
        resetRadiographVolumeBars();
    }
}

function resetRadiographVolumeBars() {
    const fallback = [34, 70, 48, 88, 58, 76];
    radiographDisplayedLevels = fallback.slice();
    radiographSignalBars.forEach((bar, index) => {
        bar.style.height = `${fallback[index] || 24}%`;
    });
}

function ensureRadiographAudioMeter() {
    if (!radiographAudio || !radiographSignalBars.length) {
        return false;
    }
    try {
        const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextConstructor) {
            return false;
        }
        if (!radiographAudioContext) {
            radiographAudioContext = new AudioContextConstructor();
        }
        if (!radiographAnalyser) {
            radiographAnalyser = radiographAudioContext.createAnalyser();
            radiographAnalyser.fftSize = 256;
            radiographAnalyser.smoothingTimeConstant = 0.72;
            radiographVolumeData = new Uint8Array(radiographAnalyser.frequencyBinCount);
        }
        if (!radiographAudioSource) {
            radiographAudioSource = radiographAudioContext.createMediaElementSource(radiographAudio);
            radiographAudioSource.connect(radiographAnalyser);
            radiographAnalyser.connect(radiographAudioContext.destination);
        }
        if (radiographAudioContext.state === "suspended") {
            radiographAudioContext.resume().catch(() => {});
        }
        return true;
    } catch (error) {
        console.warn("RadioGraph volume meter unavailable:", error);
        return false;
    }
}

function drawRadiographVolumeMeter() {
    if (!radiographAnalyser || !radiographVolumeData || !radiographSignalBars.length) {
        radiographMeterFrame = null;
        return;
    }
    radiographAnalyser.getByteFrequencyData(radiographVolumeData);
    const bandSize = Math.max(1, Math.floor(radiographVolumeData.length / radiographSignalBars.length));
    radiographSignalBars.forEach((bar, index) => {
        const start = index * bandSize;
        const end = Math.min(radiographVolumeData.length, start + bandSize);
        let sum = 0;
        for (let i = start; i < end; i += 1) {
            sum += radiographVolumeData[i];
        }
        const average = sum / Math.max(1, end - start);
        const target = Math.max(8, Math.min(100, 8 + (average / 255) * 92));
        const previous = radiographDisplayedLevels[index] ?? target;
        const next = previous + ((target - previous) * 0.38);
        radiographDisplayedLevels[index] = next;
        bar.style.height = `${next.toFixed(1)}%`;
    });
    radiographMeterFrame = requestAnimationFrame(drawRadiographVolumeMeter);
}

function startRadiographVolumeMeter() {
    if (!ensureRadiographAudioMeter()) {
        return;
    }
    if (!radiographMeterFrame) {
        radiographMeterFrame = requestAnimationFrame(drawRadiographVolumeMeter);
    }
}

function stopRadiographVolumeMeter() {
    if (radiographMeterFrame) {
        cancelAnimationFrame(radiographMeterFrame);
        radiographMeterFrame = null;
    }
}

function setRadiographListenerCount(count) {
    const number = Number(count);
    const label = Number.isFinite(number) && number >= 0
        ? `${number} listener${number === 1 ? "" : "s"}`
        : "listeners pending";
    if (radiographListenerCount) {
        radiographListenerCount.textContent = label;
    }
    if (radiographSignalCaption) {
        radiographSignalCaption.textContent = label;
    }
}

function formatRadioTrackName(name) {
    const text = String(name || "").replace(/\.[^.]+$/, "");
    return text
        .replace(/^radiograph-\d{8}-\d{6}-/, "")
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim() || "Untitled broadcast";
}

function getRadiographCreatorName() {
    const metadata = currentSupabaseUser?.user_metadata || {};
    const rawName = metadata.full_name
        || metadata.name
        || metadata.display_name
        || metadata.user_name
        || metadata.preferred_username
        || "";
    const name = String(rawName || "").trim();
    if (name) {
        return name.slice(0, 120);
    }
    const emailName = String(currentSupabaseUser?.email || "").split("@")[0].trim();
    return (emailName || "RadioGraph listener").slice(0, 120);
}

function formatCommentTimestamp(value) {
    const date = new Date(value || "");
    if (Number.isNaN(date.getTime())) {
        return "just now";
    }
    return date.toLocaleString([], {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });
}

function renderRadiographComments(rows = [], message = "") {
    if (!radiographCommentsList) {
        return;
    }
    radiographCommentsList.innerHTML = "";
    if (!Array.isArray(rows) || !rows.length) {
        const empty = document.createElement("div");
        empty.className = "radiograph-comment-empty";
        empty.textContent = message || "No comments yet.";
        radiographCommentsList.appendChild(empty);
        return;
    }
    rows.forEach((row) => {
        const comment = document.createElement("div");
        comment.className = "radiograph-comment";
        const meta = document.createElement("div");
        meta.className = "radiograph-comment-meta";
        meta.textContent = `${row.author_name || "Listener"} - ${formatCommentTimestamp(row.created_at)}`;
        const text = document.createElement("div");
        text.className = "radiograph-comment-text";
        text.textContent = row.comment_text || "";
        comment.append(meta, text);
        radiographCommentsList.appendChild(comment);
    });
}

function updateRadiographCommentControls() {
    if (radiographCommentSubmit) {
        radiographCommentSubmit.disabled = !currentRadiographTrackId || !currentSupabaseUser?.id;
    }
    if (radiographCommentInput) {
        radiographCommentInput.disabled = !currentRadiographTrackId || !currentSupabaseUser?.id;
    }
    if (radiographCommentStatus) {
        if (!currentSupabaseUser?.id) {
            radiographCommentStatus.textContent = "Sign in to comment on the current broadcast.";
        } else if (!currentRadiographTrackId) {
            radiographCommentStatus.textContent = "Comments are available once this broadcast is linked to RadioGraph.";
        } else {
            radiographCommentStatus.textContent = "Comments are shared with listeners while this song is playing.";
        }
        radiographCommentStatus.classList.remove("error");
    }
}

async function loadRadiographComments(trackId = currentRadiographTrackId) {
    const token = ++radiographCommentsSyncToken;
    if (!trackId || !supabaseClient || !currentSupabaseUser?.id) {
        renderRadiographComments([], currentSupabaseUser?.id ? "Comments are available once this song is linked." : "Sign in to read and post comments.");
        updateRadiographCommentControls();
        return;
    }
    try {
        const { data, error } = await supabaseClient
            .from("earb_radio_comments")
            .select("id,author_name,comment_text,created_at")
            .eq("track_id", trackId)
            .order("created_at", { ascending: false })
            .limit(8);
        if (token !== radiographCommentsSyncToken) {
            return;
        }
        if (error) {
            throw error;
        }
        renderRadiographComments(data || [], "No comments yet.");
        updateRadiographCommentControls();
    } catch (error) {
        console.warn("RadioGraph comments sync failed:", error);
        renderRadiographComments([], "Comments are not available for this song yet.");
        if (radiographCommentStatus) {
            radiographCommentStatus.textContent = "Comments could not be loaded.";
            radiographCommentStatus.classList.add("error");
        }
    }
}

async function postRadioGraphComment(trackId, commentText) {
    if (!supabaseClient || !currentSupabaseUser?.id) {
        showAuthModal();
        throw new Error("Sign in to comment.");
    }
    const cleanText = String(commentText || "").trim();
    if (!trackId) {
        throw new Error("This song is not linked to a RadioGraph track yet.");
    }
    if (!cleanText) {
        throw new Error("Write a comment before sending.");
    }
    if (cleanText.length > 500) {
        throw new Error("Comments must be 500 characters or less.");
    }
    const { error } = await supabaseClient
        .from("earb_radio_comments")
        .insert({
            track_id: trackId,
            user_id: currentSupabaseUser.id,
            author_name: getRadiographCreatorName(),
            comment_text: cleanText
        });
    if (error) {
        throw error;
    }
}

function formatRadioTimeRemaining(now) {
    const startedAt = Date.parse(now?.started_at || "");
    const duration = Number(now?.duration_sec);
    if (!Number.isFinite(startedAt) || !Number.isFinite(duration) || duration <= 0) {
        return "live broadcast";
    }
    const elapsed = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
    const remaining = Math.max(0, Math.round(duration - elapsed));
    const minutes = Math.floor(remaining / 60);
    const seconds = String(remaining % 60).padStart(2, "0");
    return `${minutes}:${seconds} remaining`;
}

function renderRadiographQueue(status) {
    const tracks = Array.isArray(status?.tracks) ? status.tracks : [];
    const now = status?.now_playing || {};
    const currentFile = now.title || "";
    if (radiographQueueCount) {
        radiographQueueCount.textContent = tracks.length ? `${tracks.length} tracks` : "empty";
    }
    if (!radiographQueueList) {
        return;
    }
    radiographQueueList.innerHTML = "";
    if (!tracks.length) {
        const row = document.createElement("div");
        row.className = "radiograph-queue-item";
        row.innerHTML = `
            <span class="radiograph-queue-index">--</span>
            <span>
                <span class="radiograph-queue-title">No station tracks found</span>
                <span class="radiograph-queue-meta">Rendered submissions will appear here.</span>
            </span>
        `;
        radiographQueueList.appendChild(row);
        return;
    }
    tracks.forEach((track, index) => {
        const file = typeof track === "string" ? track : track?.file;
        const title = typeof track === "string" ? formatRadioTrackName(track) : (track?.title || formatRadioTrackName(file));
        const isCurrent = file === currentFile;
        const row = document.createElement("div");
        row.className = "radiograph-queue-item";
        row.classList.toggle("is-active", isCurrent);
        const meta = isCurrent
            ? `Playing now - ${formatRadioTimeRemaining(now)}`
            : (file === now.next_up ? "Next up" : "In rotation");
        row.innerHTML = `
            <span class="radiograph-queue-index">${String(index + 1).padStart(2, "0")}</span>
            <span>
                <span class="radiograph-queue-title"></span>
                <span class="radiograph-queue-meta"></span>
            </span>
        `;
        row.querySelector(".radiograph-queue-title").textContent = title;
        row.querySelector(".radiograph-queue-meta").textContent = meta;
        radiographQueueList.appendChild(row);
    });
}

function renderRadiographStationStatus(status) {
    const now = status?.now_playing || {};
    const currentFile = now.title || "";
    setRadiographListenerCount(status?.listener_count);
    const tracks = Array.isArray(status?.tracks) ? status.tracks : [];
    const currentTrack = tracks.find(track => (typeof track === "string" ? track : track?.file) === currentFile);
    currentRadiographHasRecipe = Boolean(currentTrack && typeof currentTrack === "object" && currentTrack.has_recipe);
    currentRadiographCreatorName = currentTrack && typeof currentTrack === "object" ? (currentTrack.creator_name || "") : "";
    if (currentFile !== currentRadiographFile) {
        currentRadiographFile = currentFile;
        currentRadiographTrackId = null;
        radiographRating = 0;
        updateRadiographRatingButtons();
        updateRadiographCommentControls();
        syncRadiographCurrentTrackRating(currentFile);
    } else {
        updateRadiographSaveLibraryButton();
        updateRadiographCommentControls();
    }
    if (radiographNowTitle) {
        radiographNowTitle.textContent = currentFile ? formatRadioTrackName(currentFile) : "Waiting for station status";
    }
    if (radiographNowMeta) {
        const next = now.next_up ? `Next: ${formatRadioTrackName(now.next_up)}` : "Next track pending";
        const creator = currentRadiographCreatorName ? `By ${currentRadiographCreatorName} - ` : "";
        radiographNowMeta.textContent = currentFile
            ? `${creator}${formatRadioTimeRemaining(now)} - ${next}`
            : "The live stream can play before metadata is available.";
    }
    if (radiographRotationRank) {
        const index = tracks.findIndex(track => (typeof track === "string" ? track : track?.file) === currentFile);
        radiographRotationRank.textContent = index >= 0 ? `Rotation #${index + 1}` : "Rotation sync";
    }
    renderRadiographQueue(status);
}

function updateRadiographRatingButtons() {
    radiographRatingButtons.forEach((ratingButton) => {
        const value = Number.parseInt(ratingButton.dataset.radiographRating || "0", 10) || 0;
        ratingButton.classList.toggle("is-active", value <= radiographRating);
        ratingButton.disabled = !currentRadiographTrackId || !currentSupabaseUser?.id;
    });
    updateRadiographSaveLibraryButton();
}

function updateRadiographSaveLibraryButton() {
    if (!radiographSaveLibraryButton) {
        return;
    }
    const canSave = Boolean(currentRadiographFile && currentRadiographHasRecipe && currentSupabaseUser?.id);
    radiographSaveLibraryButton.disabled = !canSave;
}

async function syncRadiographCurrentTrackRating(fileName = currentRadiographFile) {
    const token = ++radiographRatingSyncToken;
    if (!fileName) {
        if (radiographRatingStatus) {
            radiographRatingStatus.textContent = "Ratings are available when station metadata is synced.";
        }
        updateRadiographRatingButtons();
        loadRadiographComments(null);
        return;
    }
    if (!supabaseClient || !currentSupabaseUser?.id) {
        if (radiographRatingStatus) {
            radiographRatingStatus.textContent = "Sign in to rate the current broadcast.";
        }
        updateRadiographRatingButtons();
        loadRadiographComments(null);
        return;
    }
    try {
        const { data: track, error: trackError } = await supabaseClient
            .from("earb_radio_tracks")
            .select("id,title,artifact_file")
            .eq("artifact_file", fileName)
            .maybeSingle();
        if (token !== radiographRatingSyncToken) {
            return;
        }
        if (trackError) {
            throw trackError;
        }
        currentRadiographTrackId = track?.id || null;
        if (!currentRadiographTrackId) {
            radiographRating = 0;
            if (radiographRatingStatus) {
                radiographRatingStatus.textContent = "This broadcast is not linked to a rating record yet.";
            }
            updateRadiographRatingButtons();
            loadRadiographComments(null);
            return;
        }
        updateRadiographCommentControls();
        loadRadiographComments(currentRadiographTrackId);
        const { data: rating, error: ratingError } = await supabaseClient
            .from("earb_radio_ratings")
            .select("rating")
            .eq("track_id", currentRadiographTrackId)
            .eq("user_id", currentSupabaseUser.id)
            .maybeSingle();
        if (token !== radiographRatingSyncToken) {
            return;
        }
        if (ratingError) {
            throw ratingError;
        }
        radiographRating = Number.parseInt(rating?.rating || "0", 10) || 0;
        if (radiographRatingStatus) {
            radiographRatingStatus.textContent = radiographRating
                ? `Your rating for this broadcast: ${radiographRating}/5.`
                : "Rate this broadcast. You can change your rating later.";
            radiographRatingStatus.classList.remove("error");
        }
        updateRadiographRatingButtons();
    } catch (error) {
        console.warn("RadioGraph rating sync failed:", error);
        currentRadiographTrackId = null;
        radiographRating = 0;
        if (radiographRatingStatus) {
            radiographRatingStatus.textContent = "Ratings are not available for this broadcast yet.";
        }
        updateRadiographRatingButtons();
        loadRadiographComments(null);
    }
}

async function refreshRadiographStationStatus() {
    if (!radiographStatusUrl) {
        return;
    }
    try {
        const response = await fetch(radiographStatusUrl, { cache: "no-store" });
        const status = await response.json();
        if (!response.ok || !status?.ok) {
            throw new Error(status?.error || `Station status failed (${response.status}).`);
        }
        renderRadiographStationStatus(status);
    } catch (error) {
        console.warn("RadioGraph station status failed:", error);
        if (radiographQueueCount) {
            radiographQueueCount.textContent = "offline";
        }
    }
}

function startRadiographStatusPolling() {
    if (radiographStatusTimer) {
        clearInterval(radiographStatusTimer);
        radiographStatusTimer = null;
    }
    const configured = typeof APP_CONFIG.radioStatusUrl === "string" ? APP_CONFIG.radioStatusUrl.trim() : "";
    const configuredRecipe = typeof APP_CONFIG.radioRecipeUrl === "string" ? APP_CONFIG.radioRecipeUrl.trim() : "";
    const submitUrl = typeof APP_CONFIG.radioSubmitUrl === "string" ? APP_CONFIG.radioSubmitUrl.trim() : "";
    const derived = /\/submit(?:\?.*)?$/.test(submitUrl) ? submitUrl.replace(/\/submit(?:\?.*)?$/, "/status") : "";
    const derivedRecipe = /\/submit(?:\?.*)?$/.test(submitUrl) ? submitUrl.replace(/\/submit(?:\?.*)?$/, "/recipe") : "";
    radiographStatusUrl = configured || derived;
    radiographRecipeUrl = configuredRecipe || derivedRecipe;
    if (!radiographStatusUrl) {
        return;
    }
    refreshRadiographStationStatus();
    radiographStatusTimer = setInterval(refreshRadiographStationStatus, 15000);
}

function getRadiographLeaderboardMode() {
    return radiographLeaderboardModeIndex % 2 === 0 ? "all_time" : "week";
}

function renderRadiographLeaderboard() {
    if (!radiographPopularityList) {
        return;
    }
    const mode = getRadiographLeaderboardMode();
    const rows = radiographLeaderboardRows[mode] || [];
    if (radiographLeaderboardMode) {
        radiographLeaderboardMode.textContent = mode === "week" ? "this week" : "all time";
    }
    radiographPopularityList.innerHTML = "";
    if (!rows.length) {
        const row = document.createElement("div");
        row.className = "radiograph-popularity-item";
        row.innerHTML = `
            <span>
                <span class="radiograph-popularity-title">No rated songs yet</span>
                <span class="radiograph-popularity-meta">Ratings will appear here after listeners vote.</span>
            </span>
            <meter min="0" max="100" value="0">0</meter>
        `;
        radiographPopularityList.appendChild(row);
        return;
    }
    rows.slice(0, 10).forEach((item) => {
        const row = document.createElement("div");
        row.className = "radiograph-popularity-item";
        const score = Number(item.score || 0);
        const avg = Number(item.average_rating || 0);
        const fiveStars = Number(item.five_star_count || 0);
        const ratingCount = Number(item.rating_count || 0);
        row.innerHTML = `
            <span>
                <span class="radiograph-popularity-title"></span>
                <span class="radiograph-popularity-meta"></span>
            </span>
            <meter min="0" max="100"></meter>
        `;
        row.querySelector(".radiograph-popularity-title").textContent = `${item.title || "Untitled"}${item.creator_name ? ` by ${item.creator_name}` : ""}`;
        row.querySelector(".radiograph-popularity-meta").textContent = `${fiveStars} five-star - ${avg.toFixed(1)} avg - ${ratingCount} ratings`;
        const meter = row.querySelector("meter");
        meter.value = Math.max(0, Math.min(100, score));
        meter.textContent = String(Math.round(score));
        radiographPopularityList.appendChild(row);
    });
}

async function refreshRadiographLeaderboard() {
    if (!supabaseClient) {
        renderRadiographLeaderboard();
        return;
    }
    try {
        const { data, error } = await supabaseClient.rpc("earb_radio_leaderboards");
        if (error) {
            throw error;
        }
        const rows = Array.isArray(data) ? data : [];
        radiographLeaderboardRows = {
            all_time: rows.filter(row => row.period === "all_time"),
            week: rows.filter(row => row.period === "week")
        };
        renderRadiographLeaderboard();
    } catch (error) {
        console.warn("RadioGraph leaderboard load failed:", error);
        renderRadiographLeaderboard();
    }
}

function startRadiographLeaderboardRotation() {
    if (radiographLeaderboardTimer) {
        clearInterval(radiographLeaderboardTimer);
        radiographLeaderboardTimer = null;
    }
    refreshRadiographLeaderboard();
    radiographLeaderboardTimer = setInterval(() => {
        radiographLeaderboardModeIndex += 1;
        renderRadiographLeaderboard();
        if (radiographLeaderboardModeIndex % 4 === 0) {
            refreshRadiographLeaderboard();
        }
    }, 12000);
}

function refreshRadiographAudioSource() {
    radiographStreamUrl = typeof APP_CONFIG.radioStreamUrl === "string" ? APP_CONFIG.radioStreamUrl.trim() : "";
    if (!radiographStreamUrl) {
        setRadiographStatus("Add radioStreamUrl to config.json when the public stream endpoint is ready.");
    }
}

function destroyRadiographHls() {
    if (radiographHls) {
        radiographHls.destroy();
        radiographHls = null;
    }
}

function setupRadiographStream() {
    refreshRadiographAudioSource();
    if (!radiographAudio || !radiographStreamUrl) {
        return false;
    }
    const canPlayNativeHls = typeof radiographAudio.canPlayType === "function"
        && radiographAudio.canPlayType("application/vnd.apple.mpegurl");
    if (canPlayNativeHls) {
        destroyRadiographHls();
        if (radiographAudio.src !== radiographStreamUrl) {
            radiographAudio.src = radiographStreamUrl;
        }
        return true;
    }
    const HlsConstructor = window.Hls;
    if (HlsConstructor?.isSupported?.()) {
        destroyRadiographHls();
        radiographHls = new HlsConstructor({
            liveDurationInfinity: true,
            lowLatencyMode: false
        });
        radiographHls.on(HlsConstructor.Events.ERROR, (_event, data) => {
            if (!data?.fatal) {
                return;
            }
            if (data.type === HlsConstructor.ErrorTypes.MEDIA_ERROR) {
                radiographHls.recoverMediaError();
                return;
            }
            setRadiographStatus("Live stream error. Reconnect to rebuild the HLS player.", true);
            setRadiographLiveState("error");
        });
        radiographHls.loadSource(radiographStreamUrl);
        radiographHls.attachMedia(radiographAudio);
        return true;
    }
    setRadiographStatus("This browser needs HLS.js, but the HLS player script did not load.", true);
    setRadiographLiveState("error");
    return false;
}

function updateRadiographDraftSummary() {
    const draft = buildMidiSettingsDraft();
    radiographDraftReady = Boolean(draft && baseMidiBuffer);
    if (radiographDraftSummary) {
        if (radiographDraftReady) {
            const midiName = draft.midi?.name || "Current MIDI";
            const tuning = draft.tuning?.id || "12-TET";
            const mode = draft.mode || "Ionian";
            const bpm = draft.tempo?.bpm ? `${Math.round(draft.tempo.bpm)} BPM` : "current tempo";
            radiographDraftSummary.textContent = `${midiName} - ${mode} - ${tuning} - ${bpm} - ${draft.gm_program_overrides.length} GM channel overrides`;
        } else {
            radiographDraftSummary.textContent = "Load a MIDI in Recomposer to prepare a submission.";
        }
    }
    if (radiographSubmitButton) {
        radiographSubmitButton.disabled = !radiographDraftReady || !currentSupabaseUser?.id;
    }
    if (radiographSubmitStatus) {
        if (!radiographDraftReady) {
            radiographSubmitStatus.textContent = "Load a MIDI before submitting to the station queue.";
            radiographSubmitStatus.classList.remove("error");
        } else if (!currentSupabaseUser?.id) {
            radiographSubmitStatus.textContent = "Sign in before submitting to the station queue.";
            radiographSubmitStatus.classList.remove("error");
        } else {
            radiographSubmitStatus.textContent = "Recipe is ready for the submission API.";
            radiographSubmitStatus.classList.remove("error");
        }
    }
}

async function playRadiographStream() {
    if (!setupRadiographStream()) {
        setRadiographStatus("Radio stream endpoint is not configured yet.", true);
        setRadiographLiveState("error");
        return;
    }
    try {
        await radiographAudio.play();
        startRadiographVolumeMeter();
        setRadiographStatus("Live radio is playing.");
        setRadiographLiveState("live");
    } catch (error) {
        console.warn("Radio stream playback failed:", error);
        setRadiographStatus("Browser blocked or lost the live stream. Use reconnect after audio is allowed.", true);
        setRadiographLiveState("error");
    }
}

function reconnectRadiographStream(message = "Reconnecting live radio...") {
    if (!radiographAudio) {
        setRadiographStatus("Radio stream endpoint is not configured yet.", true);
        return;
    }
    setRadiographStatus(message);
    radiographAudio.pause();
    destroyRadiographHls();
    radiographAudio.removeAttribute("src");
    radiographAudio.load();
    setRadiographLiveState("standby");
    playRadiographStream();
}

function scheduleRadiographRecovery(reason) {
    if (!radiographAudio || radiographAudio.paused) {
        return;
    }
    if (radiographRecoveryTimer) {
        clearTimeout(radiographRecoveryTimer);
    }
    radiographRecoveryTimer = setTimeout(() => {
        radiographRecoveryTimer = null;
        reconnectRadiographStream(reason || "Refreshing the live stream.");
    }, 2500);
}

async function submitRadiographDraft() {
    if (pendingArrangementRefresh) {
        clearTimeout(pendingArrangementRefresh);
        pendingArrangementRefresh = null;
        await rebuildTransformedPlayback("Arrangement updated.");
    }
    const draft = buildMidiSettingsDraft();
    if (!draft || !baseMidiBuffer || !currentSong) {
        updateRadiographDraftSummary();
        throw new Error("Load a MIDI before submitting to RadioGraph.");
    }
    if (!supabaseClient || !currentSupabaseUser?.id) {
        showAuthModal();
        throw new Error("Sign in before submitting to RadioGraph.");
    }
    const title = draft.midi?.name || currentSong.displayName || currentSong.name || "RadioGraph submission";
    const creatorName = getRadiographCreatorName();
    const source = currentMidiSource || {
        source_type: "upload",
        file_name: buildArrangementFileName(title)
    };
    const midiToSubmit = arrangementDirty && transformedMidiBuffer
        ? transformedMidiBuffer
        : baseMidiBuffer;
    const payload = buildMidiPayload(
        { source_type: "upload", file_name: buildArrangementFileName(title) },
        midiToSubmit
    );
    const meta = {
        ...buildMidiMeta(currentSong, title),
        submitted_from: "radiograph",
        creator_name: creatorName,
        creator_user_id: currentSupabaseUser.id,
        original_source: source,
        arrangement_settings: buildArrangementSettingsSnapshot()
    };
    const { data, error } = await supabaseClient
        .from("earb_radio_submissions")
        .insert({
            user_id: currentSupabaseUser.id,
            title,
            creator_name: creatorName,
            status: "submitted",
            recipe: draft,
            midi_payload: payload,
            midi_meta: meta
        })
        .select("id,status,submitted_at")
        .single();
    if (error) {
        throw error;
    }
    const renderResult = await renderRadiographSubmissionOnDroplet({
        title,
        recipe: draft,
        midi_payload: payload,
        midi_meta: meta,
        submission_id: data?.id || null,
        creator_name: creatorName,
        creator_user_id: currentSupabaseUser.id
    });
    if (renderResult?.track_file) {
        await registerRenderedRadiographTrack(data, renderResult, title);
    }
    return {
        submission: data,
        render: renderResult
    };
}

async function renderRadiographSubmissionOnDroplet(payload) {
    const submitUrl = typeof APP_CONFIG.radioSubmitUrl === "string" ? APP_CONFIG.radioSubmitUrl.trim() : "";
    if (!submitUrl) {
        return null;
    }
    const response = await fetch(submitUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result?.ok) {
        throw new Error(result?.error || `Radio renderer failed (${response.status}).`);
    }
    return result;
}

async function registerRenderedRadiographTrack(submission, renderResult, fallbackTitle) {
    if (!supabaseClient || !currentSupabaseUser?.id || !submission?.id || !renderResult?.track_file) {
        return null;
    }
    const title = fallbackTitle || renderResult.title || formatRadioTrackName(renderResult.track_file);
    const { data, error } = await supabaseClient
        .from("earb_radio_tracks")
        .insert({
            submission_id: submission.id,
            title,
            creator_name: getRadiographCreatorName(),
            status: "ready",
            artifact_file: renderResult.track_file,
            artifact_url: renderResult.track_file,
            duration_seconds: null,
            popularity_score: 0
        })
        .select("id,artifact_file")
        .single();
    if (error) {
        console.warn("RadioGraph track registration failed:", error);
        return null;
    }
    return data;
}

async function fetchRadiographRecipePayload(fileName) {
    if (!radiographRecipeUrl || !fileName) {
        throw new Error("RadioGraph recipe endpoint is not configured.");
    }
    const url = new URL(radiographRecipeUrl, window.location.href);
    url.searchParams.set("file", fileName);
    const response = await fetch(url.href, { cache: "no-store" });
    const result = await response.json().catch(() => null);
    if (!response.ok || !result?.ok) {
        throw new Error(result?.error || `RadioGraph recipe fetch failed (${response.status}).`);
    }
    return result;
}

async function saveCurrentRadiographToLibrary() {
    if (!supabaseClient || !currentSupabaseUser?.id) {
        showAuthModal();
        throw new Error("Sign in to save this broadcast to your Library.");
    }
    if (!currentRadiographFile) {
        throw new Error("No RadioGraph broadcast is selected.");
    }
    if (!currentRadiographFile.startsWith("radiograph-")) {
        throw new Error("This broadcast does not have a saved MIDI recipe.");
    }
    const recipeResult = await fetchRadiographRecipePayload(currentRadiographFile);
    const payload = recipeResult.payload || {};
    const recipe = payload.recipe || recipeResult.recipe || null;
    const midiPayload = payload.midi_payload || recipeResult.midi_payload || null;
    if (!midiPayload || midiPayload.encoding !== "base64" || !midiPayload.midi_base64) {
        throw new Error("This broadcast recipe does not include reusable MIDI data.");
    }
    const title = recipe?.midi?.name
        || payload.title
        || recipeResult.title
        || formatRadioTrackName(currentRadiographFile);
    const originalCreatorName = payload.creator_name
        || recipeResult.creator_name
        || payload.midi_meta?.creator_name
        || currentRadiographCreatorName
        || null;
    const savedCreatorName = getRadiographCreatorName();
    const midiMeta = {
        ...(payload.midi_meta || {}),
        saved_from: "radiograph",
        radio_track_file: currentRadiographFile,
        radio_track_id: currentRadiographTrackId,
        creator_name: savedCreatorName,
        creator_user_id: currentSupabaseUser.id,
        source_creator_name: originalCreatorName,
        radio_original_creator_name: originalCreatorName,
        radio_recipe: recipe,
        saved_at: new Date().toISOString()
    };
    const { data, error } = await supabaseClient
        .from("earb_user_midis")
        .insert({
            user_id: currentSupabaseUser.id,
            name: title,
            midi_payload: midiPayload,
            midi_meta: midiMeta
        })
        .select("id,name")
        .single();
    if (error) {
        throw error;
    }
    await loadLibrarianSavedSongs({ force: true, showStatus: false });
    return data;
}

function setLibrarianStatus(message, isError = false) {
    if (!librarianStatus) {
        return;
    }
    librarianStatus.textContent = message;
    librarianStatus.classList.toggle("error", Boolean(isError));
}

function getActiveLibrarianItem() {
    return librarianItems.find(item => item.id === activeLibrarianItemId) || null;
}

function getLibrarianRadioTrackMeta(item = getActiveLibrarianItem()) {
    const meta = item?.record?.midi_meta && typeof item.record.midi_meta === "object" ? item.record.midi_meta : {};
    return {
        trackId: Number.isFinite(Number(meta.radio_track_id)) ? Number(meta.radio_track_id) : null,
        trackFile: typeof meta.radio_track_file === "string" ? meta.radio_track_file : ""
    };
}

function updateLibrarianCommentControls() {
    const { trackId, trackFile } = getLibrarianRadioTrackMeta();
    const canComment = Boolean(currentSupabaseUser?.id && (trackId || trackFile));
    if (librarianCommentInput) {
        librarianCommentInput.disabled = !canComment;
    }
    if (librarianCommentSubmit) {
        librarianCommentSubmit.disabled = !canComment;
    }
    if (librarianCommentStatus) {
        if (!currentSupabaseUser?.id) {
            librarianCommentStatus.textContent = "Sign in to comment on RadioGraph saves.";
        } else if (!trackId && !trackFile) {
            librarianCommentStatus.textContent = "Select a RadioGraph save to comment.";
        } else {
            librarianCommentStatus.textContent = "Comment will appear with the song on RadioGraph.";
        }
        librarianCommentStatus.classList.remove("error");
    }
}

async function resolveLibrarianRadioTrackId(item = getActiveLibrarianItem()) {
    const { trackId, trackFile } = getLibrarianRadioTrackMeta(item);
    if (trackId) {
        return trackId;
    }
    if (!trackFile || !supabaseClient) {
        return null;
    }
    const { data, error } = await supabaseClient
        .from("earb_radio_tracks")
        .select("id")
        .eq("artifact_file", trackFile)
        .maybeSingle();
    if (error) {
        throw error;
    }
    return data?.id || null;
}

function getActivePlaylist() {
    return librarianPlaylistsState.find(item => item.id === activePlaylistId) || null;
}

function getQueueItems() {
    const playlist = getActivePlaylist();
    if (!playlist) {
        return [];
    }
    if (playlist.isAllSongs) {
        return librarianItems.slice();
    }
    return playlist.songIds
        .map(songId => librarianItems.find(item => item.id === songId))
        .filter(Boolean);
}

function serializeLibrarianPlaylists() {
    return librarianPlaylistsState
        .filter(playlist => !playlist.isAllSongs)
        .map(playlist => ({
            id: playlist.id,
            name: playlist.name,
            song_ids: Array.isArray(playlist.songIds) ? playlist.songIds.slice() : [],
            repeat: playlist.repeat !== false
        }));
}

function buildLibrarianSettingsPayload() {
    return {
        schema_version: 1,
        active_playlist_id: activePlaylistId || ALL_SONGS_PLAYLIST_ID,
        all_songs_order: librarianItems.map(item => item.id),
        queue_shuffle_enabled: Boolean(queueShuffleEnabled),
        playlists: serializeLibrarianPlaylists()
    };
}

function queueLibrarianPlaylistSave() {
    if (!isApplyingCloudSettings) {
        queueCloudSettingsSave();
    }
}

function applyLibrarianPlaylistSettings(settings) {
    const librarianSettings = settings?.librarian && typeof settings.librarian === "object"
        ? settings.librarian
        : null;
    if (!librarianSettings) {
        renderLibrarianPlaylists();
        renderLibrarianQueue();
        return;
    }
    const storedPlaylists = Array.isArray(librarianSettings.playlists)
        ? librarianSettings.playlists
            .filter(item => item && typeof item === "object")
            .map((item) => ({
                id: typeof item.id === "string" && item.id ? item.id : `playlist-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
                name: typeof item.name === "string" && item.name.trim() ? item.name.trim() : "Untitled Playlist",
                songIds: Array.isArray(item.song_ids)
                    ? item.song_ids.filter(songId => typeof songId === "string")
                    : [],
                repeat: item.repeat !== false
            }))
        : [];
    librarianPlaylistsState = [
        {
            id: ALL_SONGS_PLAYLIST_ID,
            name: "All Songs",
            songIds: [],
            isAllSongs: true,
            repeat: true
        },
        ...storedPlaylists
    ];
    const allSongsOrder = Array.isArray(librarianSettings.all_songs_order)
        ? librarianSettings.all_songs_order.filter(songId => typeof songId === "string")
        : [];
    if (allSongsOrder.length && librarianItems.length) {
        const order = new Map(allSongsOrder.map((id, index) => [id, index]));
        librarianItems.sort((a, b) => {
            const aIndex = order.has(a.id) ? order.get(a.id) : Number.MAX_SAFE_INTEGER;
            const bIndex = order.has(b.id) ? order.get(b.id) : Number.MAX_SAFE_INTEGER;
            return aIndex - bIndex;
        });
    }
    queueShuffleEnabled = Boolean(librarianSettings.queue_shuffle_enabled);
    activePlaylistId = librarianPlaylistsState.some(playlist => playlist.id === librarianSettings.active_playlist_id)
        ? librarianSettings.active_playlist_id
        : ALL_SONGS_PLAYLIST_ID;
    if (librarianSongsLoadedForUserId === currentSupabaseUser?.id) {
        prunePlaylistsToSavedSongs();
    }
    updateQueueTransportControls();
    renderLibrarianPlaylists();
    renderLibrarianQueue();
    renderLibrarianLibrary();
}

function setActivePlaylist(playlistId) {
    activePlaylistId = playlistId;
    const playlist = getActivePlaylist();
    const firstSongId = getQueueItems()[0]?.id || null;
    if (firstSongId) {
        activeLibrarianItemId = firstSongId;
    }
    if (loopToggle) {
        loopToggle.checked = true;
    }
    renderLibrarianPlaylists();
    renderLibrarianQueue();
    renderLibrarianLibrary();
    if (playlist) {
        setLibrarianStatus(`${playlist.name} selected. Playlist repeat is on.`);
    }
    queueLibrarianPlaylistSave();
}

function escapeLibrarianText(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#39;"
        }[char];
    });
}

function setActiveLibrarianItem(itemId, options = {}) {
    activeLibrarianItemId = itemId;
    const item = getActiveLibrarianItem();
    if (item) {
        if (librarianNowTitle) {
            librarianNowTitle.textContent = item.title;
        }
        if (librarianNowMeta) {
            librarianNowMeta.textContent = item.meta;
        }
        if (options.queue !== false) {
            const playlist = getActivePlaylist();
            if (playlist && !playlist.isAllSongs && !playlist.songIds.includes(item.id)) {
                playlist.songIds.push(item.id);
                queueLibrarianPlaylistSave();
            }
            renderLibrarianQueue();
        }
        setLibrarianStatus(`${item.title} selected.`);
    }
    updateLibrarianCommentControls();
    renderLibrarianLibrary();
    renderLibrarianQueue();
}

async function loadLibrarianItemRecord(item, options = {}) {
    if (!item?.record) {
        setLibrarianStatus("This song does not have a saved MIDI record yet.", true);
        return false;
    }
    const token = ++activeLibrarianLoadToken;
    const wasPlaying = Boolean(options.playAfterLoad || isPlaying);
    setLibrarianStatus(`Loading ${item.title}...`);
    try {
        const loaded = await loadCloudMidiRecord(item.record, {
            statusMessage: `Loaded ${item.title}.`
        });
        if (token !== activeLibrarianLoadToken) {
            return false;
        }
        if (!loaded) {
            setLibrarianStatus(`Unable to load ${item.title}.`, true);
            return false;
        }
        activeLoadedLibrarianItemId = item.id;
        setLibrarianStatus(`${item.title} loaded.`);
        updateQueueTransportControls();
        if (wasPlaying) {
            playButton?.click();
        }
        return true;
    } catch (error) {
        if (token === activeLibrarianLoadToken) {
            console.warn("Unable to load Librarian song:", error);
            setLibrarianStatus(error?.message || `Unable to load ${item.title}.`, true);
        }
        return false;
    }
}

async function activateLibrarianSong(itemId, options = {}) {
    setActiveLibrarianItem(itemId, { queue: options.queue });
    const item = getActiveLibrarianItem();
    if (!item) {
        return false;
    }
    return loadLibrarianItemRecord(item, {
        playAfterLoad: Boolean(options.playAfterLoad)
    });
}

function renderLibrarianPlaylists() {
    if (!librarianPlaylists) {
        return;
    }
    librarianPlaylists.innerHTML = "";
    const activePlaylist = getActivePlaylist();
    if (librarianDeletePlaylistButton) {
        librarianDeletePlaylistButton.disabled = Boolean(activePlaylist?.isAllSongs);
        librarianDeletePlaylistButton.title = activePlaylist?.isAllSongs ? "All Songs cannot be deleted." : "Delete playlist";
    }
    librarianPlaylistsState.forEach((playlist) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "playlist-item";
        button.classList.toggle("is-active", playlist.id === activePlaylistId);
        const songCount = playlist.isAllSongs ? librarianItems.length : playlist.songIds.length;
        button.innerHTML = `
            <span>
                <span class="playlist-item__title">${escapeLibrarianText(playlist.name)}</span>
                <span class="playlist-item__meta">${songCount} song${songCount === 1 ? "" : "s"}</span>
            </span>
            <span class="playlist-item__repeat">loop</span>
        `;
        button.addEventListener("click", () => setActivePlaylist(playlist.id));
        librarianPlaylists.appendChild(button);
    });
}

function renderLibrarianLibrary() {
    if (!librarianLibraryList) {
        return;
    }
    librarianLibraryList.innerHTML = "";
    const visibleItems = librarianItems.filter((item) => {
        return activeLibrarianFilter === "all" || item.source === activeLibrarianFilter;
    });
    if (!visibleItems.length) {
        const empty = document.createElement("div");
        empty.className = "playlist-empty";
        empty.textContent = "Saved songs will appear here.";
        librarianLibraryList.appendChild(empty);
        return;
    }
    visibleItems.forEach((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "library-item";
        button.classList.toggle("is-active", item.id === activeLibrarianItemId);
        button.innerHTML = `
            <span>
                <span class="library-item__title">${escapeLibrarianText(item.title)}</span>
                <span class="library-item__meta">${escapeLibrarianText(item.meta)}</span>
            </span>
            <span class="library-item__tag">${escapeLibrarianText(item.source)}</span>
        `;
        button.addEventListener("click", () => {
            activateLibrarianSong(item.id);
        });
        librarianLibraryList.appendChild(button);
    });
}

function renderLibrarianQueue() {
    if (!librarianQueue) {
        return;
    }
    librarianQueue.innerHTML = "";
    const queueItems = getQueueItems();
    if (!queueItems.length) {
        const empty = document.createElement("div");
        empty.className = "playlist-empty";
        empty.textContent = "Saved songs will appear here.";
        librarianQueue.appendChild(empty);
        return;
    }
    const playlist = getActivePlaylist();
    queueItems.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "queue-item";
        row.draggable = true;
        row.dataset.queueIndex = String(index);
        row.classList.toggle("is-active", item.id === activeLibrarianItemId);
        row.innerHTML = `
            <span class="queue-item__handle" aria-hidden="true">::</span>
            <span class="queue-item__index">${String(index + 1).padStart(2, "0")}</span>
            <span>
                <span class="queue-item__title">${escapeLibrarianText(item.title)}</span>
                <span class="queue-item__meta">${escapeLibrarianText(item.meta)}</span>
            </span>
            <span class="queue-item__repeat"></span>
        `;
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "queue-item__remove";
        remove.setAttribute("aria-label", `Remove ${item.title} from playlist`);
        remove.textContent = "-";
        remove.disabled = Boolean(playlist?.isAllSongs);
        remove.title = playlist?.isAllSongs ? "All Songs cannot remove songs from your library." : "Remove from playlist";
        remove.addEventListener("click", () => {
            const playlist = getActivePlaylist();
            if (playlist && !playlist.isAllSongs) {
                playlist.songIds.splice(index, 1);
                queueLibrarianPlaylistSave();
            }
            renderLibrarianQueue();
            setLibrarianStatus(`${item.title} removed from playlist.`);
        });
        row.addEventListener("click", (event) => {
            if (event.target === remove) {
                return;
            }
            activateLibrarianSong(item.id, { queue: false });
        });
        row.addEventListener("dragstart", (event) => {
            draggedQueueIndex = index;
            row.classList.add("is-dragging");
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", String(index));
        });
        row.addEventListener("dragover", (event) => {
            event.preventDefault();
            row.classList.add("is-drop-target");
            event.dataTransfer.dropEffect = "move";
        });
        row.addEventListener("dragleave", () => {
            row.classList.remove("is-drop-target");
        });
        row.addEventListener("drop", (event) => {
            event.preventDefault();
            row.classList.remove("is-drop-target");
            const fromIndex = Number.isFinite(draggedQueueIndex)
                ? draggedQueueIndex
                : Number(event.dataTransfer.getData("text/plain"));
            moveQueueItem(fromIndex, index);
        });
        row.addEventListener("dragend", () => {
            draggedQueueIndex = null;
            row.classList.remove("is-dragging");
            Array.from(librarianQueue.querySelectorAll(".queue-item")).forEach(itemRow => itemRow.classList.remove("is-drop-target"));
        });
        row.appendChild(remove);
        librarianQueue.appendChild(row);
    });
}

function moveQueueItem(fromIndex, toIndex) {
    const playlist = getActivePlaylist();
    if (!playlist || fromIndex === toIndex || !Number.isFinite(fromIndex) || !Number.isFinite(toIndex)) {
        return;
    }
    const ids = playlist.isAllSongs ? librarianItems.map(item => item.id) : playlist.songIds;
    if (fromIndex < 0 || fromIndex >= ids.length || toIndex < 0 || toIndex >= ids.length) {
        return;
    }
    const [moved] = ids.splice(fromIndex, 1);
    ids.splice(toIndex, 0, moved);
    if (playlist.isAllSongs) {
        const order = new Map(ids.map((id, index) => [id, index]));
        librarianItems.sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0));
    } else {
        playlist.songIds = ids;
    }
    queueLibrarianPlaylistSave();
    renderLibrarianQueue();
    renderLibrarianLibrary();
    renderLibrarianPlaylists();
    setLibrarianStatus("Queue order updated.");
}

function buildLibrarianItemFromRecord(record, index = 0, source = "saved") {
    const meta = record?.midi_meta && typeof record.midi_meta === "object" ? record.midi_meta : {};
    const payload = record?.midi_payload && typeof record.midi_payload === "object" ? record.midi_payload : {};
    const title = record?.name || meta.name || payload.file_name || "Untitled song";
    const creatorName = typeof meta.creator_name === "string" ? meta.creator_name.trim() : "";
    const duration = Number.isFinite(Number(meta.duration_seconds))
        ? formatDuration(Number(meta.duration_seconds))
        : "";
    const trackCount = Number.isFinite(Number(meta.track_count)) ? Number(meta.track_count) : 0;
    const details = [
        source === "broadcast" ? "Radiograph save" : "Recomposer save",
        creatorName ? `by ${creatorName}` : "",
        duration,
        trackCount ? `${trackCount} track${trackCount === 1 ? "" : "s"}` : "",
        meta.arrangement_settings ? "arranged MIDI" : "MIDI"
    ].filter(Boolean);
    return {
        id: `saved-${record?.id || title || index}`,
        recordId: record?.id || null,
        title,
        source,
        meta: details.join(" - "),
        record
    };
}

function mergeSavedSongRecordsIntoLibrarian(records, source = "saved") {
    if (!Array.isArray(records) || !records.length) {
        return;
    }
    const savedItems = records.map((record, index) => buildLibrarianItemFromRecord(record, index, source));
    const savedIds = new Set(savedItems.map(item => item.id));
    librarianItems = savedItems.concat(librarianItems.filter(item => !savedIds.has(item.id)));
    if (!activeLibrarianItemId && librarianItems.length) {
        activeLibrarianItemId = librarianItems[0].id;
    }
    renderLibrarianLibrary();
    renderLibrarianPlaylists();
    renderLibrarianQueue();
    setLibrarianStatus(`${savedItems.length} saved song${savedItems.length === 1 ? "" : "s"} indexed in the Librarian.`);
}

function prunePlaylistsToSavedSongs() {
    const savedIds = new Set(librarianItems.map(item => item.id));
    librarianPlaylistsState.forEach((playlist) => {
        if (!playlist.isAllSongs) {
            playlist.songIds = playlist.songIds.filter(songId => savedIds.has(songId));
        }
    });
}

function clearLibrarianSavedSongs() {
    librarianItems = [];
    activeLibrarianItemId = null;
    librarianSongsLoadedForUserId = null;
    prunePlaylistsToSavedSongs();
    renderLibrarianLibrary();
    renderLibrarianPlaylists();
    renderLibrarianQueue();
}

async function loadLibrarianSavedSongs(options = {}) {
    if (!supabaseClient || !currentSupabaseUser?.id) {
        if (options.showSignedOutStatus) {
            setLibrarianStatus("Sign in to load saved songs.", true);
        }
        return [];
    }
    if (librarianSongsLoading) {
        return librarianItems;
    }
    if (!options.force && librarianSongsLoadedForUserId === currentSupabaseUser.id && librarianItems.length) {
        return librarianItems;
    }
    librarianSongsLoading = true;
    if (options.showStatus !== false) {
        setLibrarianStatus("Loading saved songs...");
    }
    try {
        const { data, error } = await withTimeout(
            supabaseClient
                .from("earb_user_midis")
                .select("id,name,midi_payload,midi_meta,created_at")
                .eq("user_id", currentSupabaseUser.id)
                .order("created_at", { ascending: false })
                .limit(500),
            CLOUD_SAVE_TIMEOUT_MS,
            "Loading saved songs timed out."
        );
        if (error) {
            throw error;
        }
        librarianItems = [];
        activeLibrarianItemId = null;
        mergeSavedSongRecordsIntoLibrarian(Array.isArray(data) ? data : []);
        prunePlaylistsToSavedSongs();
        renderLibrarianPlaylists();
        renderLibrarianQueue();
        librarianSongsLoadedForUserId = currentSupabaseUser.id;
        if (!Array.isArray(data) || !data.length) {
            renderLibrarianLibrary();
            renderLibrarianPlaylists();
            renderLibrarianQueue();
            setLibrarianStatus("No saved songs yet.");
        }
        return librarianItems;
    } catch (error) {
        console.warn("Unable to load Librarian songs:", error);
        setLibrarianStatus(error?.message || "Unable to load saved songs.", true);
        return librarianItems;
    } finally {
        librarianSongsLoading = false;
    }
}

if (librarianFilterButtons.length) {
    librarianFilterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            activeLibrarianFilter = button.dataset.libraryFilter || "all";
            librarianFilterButtons.forEach(item => item.classList.toggle("is-active", item === button));
            renderLibrarianLibrary();
            setLibrarianStatus(`${button.textContent} library filter selected.`);
        });
    });
}

function showPlaylistCreateModal() {
    if (!playlistCreateModal) {
        return;
    }
    playlistCreateModal.classList.remove("is-hidden");
    if (playlistCreateName) {
        playlistCreateName.value = "";
        playlistCreateName.focus();
    }
    if (playlistCreateStatus) {
        playlistCreateStatus.textContent = "Name the playlist to add it to the Librarian.";
        playlistCreateStatus.classList.remove("error");
    }
}

function hidePlaylistCreateModal() {
    playlistCreateModal?.classList.add("is-hidden");
}

function showPlaylistDeleteModal() {
    if (!playlistDeleteModal) {
        return;
    }
    const playlist = getActivePlaylist();
    if (!playlist) {
        setLibrarianStatus("No playlist is selected.", true);
        return;
    }
    if (playlist.isAllSongs) {
        setLibrarianStatus("All Songs cannot be deleted.", true);
        return;
    }
    if (playlistDeleteMessage) {
        playlistDeleteMessage.textContent = `Delete "${playlist.name}"? Songs will stay in your library.`;
    }
    playlistDeleteModal.classList.remove("is-hidden");
}

function hidePlaylistDeleteModal() {
    playlistDeleteModal?.classList.add("is-hidden");
}

function createPlaylistFromDialog() {
    const name = (playlistCreateName?.value || "").trim();
    if (!name) {
        if (playlistCreateStatus) {
            playlistCreateStatus.textContent = "Enter a playlist name first.";
            playlistCreateStatus.classList.add("error");
        }
        return;
    }
    const playlist = {
        id: `playlist-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        name,
        songIds: [],
        repeat: true
    };
    librarianPlaylistsState.push(playlist);
    hidePlaylistCreateModal();
    setActivePlaylist(playlist.id);
    queueLibrarianPlaylistSave();
    setLibrarianStatus(`${name} added. Playlist repeat is on.`);
}

function deleteActivePlaylist() {
    const playlist = getActivePlaylist();
    if (!playlist) {
        hidePlaylistDeleteModal();
        return;
    }
    if (playlist.isAllSongs) {
        hidePlaylistDeleteModal();
        setLibrarianStatus("All Songs cannot be deleted.", true);
        return;
    }
    librarianPlaylistsState = librarianPlaylistsState.filter(item => item.id !== playlist.id);
    activePlaylistId = ALL_SONGS_PLAYLIST_ID;
    hidePlaylistDeleteModal();
    renderLibrarianPlaylists();
    renderLibrarianQueue();
    renderLibrarianLibrary();
    queueLibrarianPlaylistSave();
    setLibrarianStatus(`${playlist.name} deleted. Songs remain in the Songs list.`);
}

function getActiveQueueIndex() {
    return getQueueItems().findIndex(item => item.id === activeLibrarianItemId);
}

function getNextQueueIndex(offset) {
    const queueItems = getQueueItems();
    if (!queueItems.length) {
        return -1;
    }
    const currentIndex = getActiveQueueIndex();
    const baseIndex = currentIndex >= 0 ? currentIndex : 0;
    if (queueShuffleEnabled && offset > 0 && queueItems.length > 1) {
        let randomIndex = baseIndex;
        while (randomIndex === baseIndex) {
            randomIndex = Math.floor(Math.random() * queueItems.length);
        }
        return randomIndex;
    }
    return (baseIndex + offset + queueItems.length) % queueItems.length;
}

async function selectQueueIndex(index, options = {}) {
    const queueItems = getQueueItems();
    if (!queueItems.length || index < 0 || index >= queueItems.length) {
        setLibrarianStatus("No queued songs are available.", true);
        return null;
    }
    const item = queueItems[index];
    await activateLibrarianSong(item.id, {
        queue: false,
        playAfterLoad: Boolean(options.playAfterLoad)
    });
    return item;
}

function restartLoadedSongFromBeginning() {
    if (!currentSong) {
        return false;
    }
    const wasPlaying = isPlaying;
    stopPlayback(false);
    pauseOffset = 0;
    updateProgressUI(0);
    if (wasPlaying) {
        play();
    }
    setTimeout(updateQueueTransportControls, 0);
    return true;
}

async function selectQueueOffset(offset, options = {}) {
    const nextIndex = getNextQueueIndex(offset);
    const item = await selectQueueIndex(nextIndex, {
        playAfterLoad: Boolean(options.playAfterLoad)
    });
    if (!item) {
        return;
    }
    const direction = offset < 0 ? "Previous" : queueShuffleEnabled ? "Shuffle next" : "Next";
    setLibrarianStatus(`${direction}: ${item.title}`);
}

async function handleQueuePrevious() {
    const now = Date.now();
    const shouldStepBack = now - lastQueuePreviousRestartAt <= QUEUE_PREVIOUS_SECOND_PRESS_MS;
    if (shouldStepBack) {
        lastQueuePreviousRestartAt = 0;
        await selectQueueOffset(-1, { playAfterLoad: isPlaying });
        return;
    }
    lastQueuePreviousRestartAt = now;
    const restarted = restartLoadedSongFromBeginning();
    const item = getActiveLibrarianItem();
    setLibrarianStatus(restarted
        ? `${item?.title || "Song"} restarted. Press previous again for the previous song.`
        : "Previous armed. Press again for the previous song.");
}

async function handleQueueNext() {
    lastQueuePreviousRestartAt = 0;
    await selectQueueOffset(1, { playAfterLoad: isPlaying });
}

function updateQueueTransportControls() {
    if (!queuePlayToggleButton) {
        return;
    }
    queuePlayToggleButton.classList.toggle("is-playing", Boolean(isPlaying));
    queuePlayToggleButton.setAttribute("aria-label", isPlaying ? "Pause queue" : "Play queue");
    if (queueShuffleToggleButton) {
        queueShuffleToggleButton.classList.toggle("is-shuffle", queueShuffleEnabled);
        queueShuffleToggleButton.setAttribute("aria-label", queueShuffleEnabled ? "Shuffle mode" : "Play next mode");
        queueShuffleToggleButton.setAttribute("aria-pressed", queueShuffleEnabled ? "true" : "false");
    }
}

function toggleQueueShuffleMode() {
    queueShuffleEnabled = !queueShuffleEnabled;
    updateQueueTransportControls();
    queueLibrarianPlaylistSave();
    setLibrarianStatus(queueShuffleEnabled ? "Shuffle mode is on." : "Play next mode is on.");
}

function triggerQueuePlayToggle() {
    const item = getActiveLibrarianItem();
    if (!currentSong) {
        if (item?.record) {
            activateLibrarianSong(item.id, { queue: false, playAfterLoad: true });
            return;
        }
        setLibrarianStatus(item ? `${item.title} cannot be loaded.` : "Select a saved song to play.", true);
        return;
    }
    if (item?.record && item.id !== activeLoadedLibrarianItemId) {
        activateLibrarianSong(item.id, { queue: false, playAfterLoad: true });
        return;
    }
    if (isPlaying) {
        pauseButton?.click();
    } else {
        playButton?.click();
    }
    setTimeout(updateQueueTransportControls, 0);
}

function flashQueueTransportButton(button) {
    if (!button) {
        return;
    }
    button.classList.remove("is-flashing");
    void button.offsetWidth;
    button.classList.add("is-flashing");
    setTimeout(() => {
        button.classList.remove("is-flashing");
    }, 180);
}

function isTextEntryTarget(target) {
    if (!target || !(target instanceof Element)) {
        return false;
    }
    const tagName = target.tagName.toLowerCase();
    return target.isContentEditable
        || tagName === "input"
        || tagName === "textarea"
        || tagName === "select";
}

function handleGlobalPlaybackKeys(event) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey || isTextEntryTarget(event.target)) {
        return;
    }
    if (event.code === "Space") {
        event.preventDefault();
        flashQueueTransportButton(queuePlayToggleButton);
        triggerQueuePlayToggle();
        return;
    }
    if (event.code === "ArrowLeft") {
        event.preventDefault();
        flashQueueTransportButton(queuePreviousButton);
        handleQueuePrevious();
        return;
    }
    if (event.code === "ArrowRight") {
        event.preventDefault();
        flashQueueTransportButton(queueNextButton);
        handleQueueNext();
    }
}

if (librarianAddPlaylistButton) {
    librarianAddPlaylistButton.addEventListener("click", showPlaylistCreateModal);
}

if (librarianDeletePlaylistButton) {
    librarianDeletePlaylistButton.addEventListener("click", showPlaylistDeleteModal);
}

if (playlistCreateCancel) {
    playlistCreateCancel.addEventListener("click", hidePlaylistCreateModal);
}

if (playlistCreateConfirm) {
    playlistCreateConfirm.addEventListener("click", createPlaylistFromDialog);
}

if (playlistCreateName) {
    playlistCreateName.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            createPlaylistFromDialog();
        }
    });
}

if (playlistDeleteCancel) {
    playlistDeleteCancel.addEventListener("click", hidePlaylistDeleteModal);
}

if (playlistDeleteConfirm) {
    playlistDeleteConfirm.addEventListener("click", deleteActivePlaylist);
}

if (queuePreviousButton) {
    queuePreviousButton.addEventListener("click", () => {
        flashQueueTransportButton(queuePreviousButton);
        handleQueuePrevious();
    });
}

if (queuePlayToggleButton) {
    queuePlayToggleButton.addEventListener("click", () => {
        flashQueueTransportButton(queuePlayToggleButton);
        triggerQueuePlayToggle();
    });
}

if (queueNextButton) {
    queueNextButton.addEventListener("click", () => {
        flashQueueTransportButton(queueNextButton);
        handleQueueNext();
    });
}

if (queueShuffleToggleButton) {
    queueShuffleToggleButton.addEventListener("click", () => {
        flashQueueTransportButton(queueShuffleToggleButton);
        toggleQueueShuffleMode();
    });
}

document.addEventListener("keydown", handleGlobalPlaybackKeys);

if (librarianImportButton) {
    librarianImportButton.addEventListener("click", () => {
        showSampleModal();
    });
}

if (librarianLoadCloudButton) {
    librarianLoadCloudButton.addEventListener("click", () => {
        openArrangementsModal();
    });
}

if (librarianSaveCurrentButton) {
    librarianSaveCurrentButton.addEventListener("click", () => {
        if (!currentSong || !currentMidiBuffer) {
            setLibrarianStatus("Load a MIDI before saving it to the Librarian.", true);
            setActivePage("recomposer");
            setStatus("Load a MIDI before saving arrangement.", true);
            return;
        }
        if (!currentSupabaseUser?.id) {
            setLibrarianStatus("Sign in to save this composition to your cloud library.", true);
            showAuthModal();
            return;
        }
        showSaveArrangementModal(currentSong.displayName || "Saved composition");
    });
}

if (librarianPlayButton) {
    librarianPlayButton.addEventListener("click", () => {
        if (!currentSong) {
            const item = getActiveLibrarianItem();
            setLibrarianStatus(item ? `${item.title} is selected. Load a MIDI file to play audio.` : "Load a MIDI file to play audio.", true);
            return;
        }
        playButton?.click();
        setTimeout(updateQueueTransportControls, 0);
    });
}

if (librarianPauseButton) {
    librarianPauseButton.addEventListener("click", () => {
        pauseButton?.click();
        setTimeout(updateQueueTransportControls, 0);
    });
}

if (librarianStopButton) {
    librarianStopButton.addEventListener("click", () => {
        stopButton?.click();
        setTimeout(updateQueueTransportControls, 0);
    });
}

if (librarianCommentSubmit) {
    librarianCommentSubmit.addEventListener("click", async () => {
        const item = getActiveLibrarianItem();
        const commentText = librarianCommentInput?.value || "";
        librarianCommentSubmit.disabled = true;
        if (librarianCommentStatus) {
            librarianCommentStatus.textContent = "Sending comment to RadioGraph...";
            librarianCommentStatus.classList.remove("error");
        }
        try {
            const trackId = await resolveLibrarianRadioTrackId(item);
            await postRadioGraphComment(trackId, commentText);
            if (librarianCommentInput) {
                librarianCommentInput.value = "";
            }
            if (librarianCommentStatus) {
                librarianCommentStatus.textContent = "Comment posted to RadioGraph.";
                librarianCommentStatus.classList.remove("error");
            }
            if (trackId === currentRadiographTrackId) {
                await loadRadiographComments(trackId);
            }
        } catch (error) {
            console.warn("Librarian RadioGraph comment failed:", error);
            if (librarianCommentStatus) {
                librarianCommentStatus.textContent = error?.message || "Comment could not be posted.";
                librarianCommentStatus.classList.add("error");
            }
        } finally {
            updateLibrarianCommentControls();
        }
    });
}

if (librarianCommentInput) {
    librarianCommentInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            librarianCommentSubmit?.click();
        }
    });
}

if (radiographPlayButton) {
    radiographPlayButton.addEventListener("click", () => {
        if (radiographAudio && !radiographAudio.paused) {
            setRadiographStatus("Live radio is already playing. Use mute or reconnect for recovery.");
            return;
        }
        playRadiographStream();
    });
}

if (radiographMuteButton) {
    radiographMuteButton.addEventListener("click", () => {
        if (!radiographAudio) {
            return;
        }
        radiographAudio.muted = !radiographAudio.muted;
        radiographMuteButton.classList.toggle("is-muted", radiographAudio.muted);
        radiographMuteButton.setAttribute("aria-pressed", radiographAudio.muted ? "true" : "false");
        setRadiographStatus(radiographAudio.muted ? "Live radio muted." : "Live radio unmuted.");
    });
}

if (radiographReconnectButton) {
    radiographReconnectButton.addEventListener("click", () => {
        reconnectRadiographStream("Reconnecting live radio...");
    });
}

if (radiographAudio) {
    radiographAudio.addEventListener("playing", () => {
        if (radiographRecoveryTimer) {
            clearTimeout(radiographRecoveryTimer);
            radiographRecoveryTimer = null;
        }
        startRadiographVolumeMeter();
        setRadiographStatus("Live radio is playing.");
        setRadiographLiveState("live");
    });
    radiographAudio.addEventListener("pause", () => {
        setRadiographLiveState("standby");
    });
    radiographAudio.addEventListener("error", () => {
        setRadiographStatus("Live stream error. Reconnect when the endpoint is available.", true);
        setRadiographLiveState("error");
    });
    radiographAudio.addEventListener("ended", () => {
        reconnectRadiographStream("Track boundary reached. Rejoining the live stream...");
    });
    radiographAudio.addEventListener("stalled", () => {
        scheduleRadiographRecovery("Live stream stalled. Rejoining the broadcast...");
    });
    radiographAudio.addEventListener("waiting", () => {
        scheduleRadiographRecovery("Live stream is waiting. Rejoining the broadcast...");
    });
}

if (radiographUseCurrentButton) {
    radiographUseCurrentButton.addEventListener("click", () => {
        updateRadiographDraftSummary();
        if (!radiographDraftReady) {
            setActivePage("recomposer");
            setStatus("Load a MIDI before preparing a RadioGraph submission.", true);
        }
    });
}

if (radiographSubmitButton) {
    radiographSubmitButton.addEventListener("click", async () => {
        updateRadiographDraftSummary();
        if (!radiographDraftReady) {
            return;
        }
        if (!currentSupabaseUser?.id) {
            showAuthModal();
            return;
        }
        radiographSubmitButton.disabled = true;
        if (radiographSubmitStatus) {
            radiographSubmitStatus.textContent = "Submitting recipe to RadioGraph queue...";
            radiographSubmitStatus.classList.remove("error");
        }
        try {
            const result = await submitRadiographDraft();
            if (radiographSubmitStatus) {
                const submissionId = result?.submission?.id;
                const trackFile = result?.render?.track_file;
                radiographSubmitStatus.textContent = trackFile
                    ? `Submission #${submissionId} rendered to radio playlist: ${trackFile}`
                    : `Submission #${submissionId} queued for moderation.`;
                radiographSubmitStatus.classList.remove("error");
            }
        } catch (error) {
            console.warn("RadioGraph submission failed:", error);
            if (radiographSubmitStatus) {
                radiographSubmitStatus.textContent = error?.message || "RadioGraph submission failed.";
                radiographSubmitStatus.classList.add("error");
            }
        } finally {
            updateRadiographDraftSummary();
        }
    });
}

if (radiographSaveLibraryButton) {
    radiographSaveLibraryButton.addEventListener("click", async () => {
        radiographSaveLibraryButton.disabled = true;
        if (radiographRatingStatus) {
            radiographRatingStatus.textContent = "Saving broadcast to your Library...";
            radiographRatingStatus.classList.remove("error");
        }
        try {
            const saved = await saveCurrentRadiographToLibrary();
            if (radiographRatingStatus) {
                radiographRatingStatus.textContent = `${saved?.name || "Broadcast"} saved to your Library.`;
                radiographRatingStatus.classList.remove("error");
            }
        } catch (error) {
            console.warn("RadioGraph library save failed:", error);
            if (radiographRatingStatus) {
                radiographRatingStatus.textContent = error?.message || "Unable to save this broadcast to your Library.";
                radiographRatingStatus.classList.add("error");
            }
        } finally {
            updateRadiographSaveLibraryButton();
        }
    });
}

if (radiographCommentSubmit) {
    radiographCommentSubmit.addEventListener("click", async () => {
        const commentText = radiographCommentInput?.value || "";
        radiographCommentSubmit.disabled = true;
        if (radiographCommentStatus) {
            radiographCommentStatus.textContent = "Posting comment...";
            radiographCommentStatus.classList.remove("error");
        }
        try {
            await postRadioGraphComment(currentRadiographTrackId, commentText);
            if (radiographCommentInput) {
                radiographCommentInput.value = "";
            }
            await loadRadiographComments(currentRadiographTrackId);
            if (radiographCommentStatus) {
                radiographCommentStatus.textContent = "Comment posted.";
                radiographCommentStatus.classList.remove("error");
            }
        } catch (error) {
            console.warn("RadioGraph comment failed:", error);
            if (radiographCommentStatus) {
                radiographCommentStatus.textContent = error?.message || "Comment could not be posted.";
                radiographCommentStatus.classList.add("error");
            }
        } finally {
            updateRadiographCommentControls();
        }
    });
}

if (radiographCommentInput) {
    radiographCommentInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            radiographCommentSubmit?.click();
        }
    });
}

radiographRatingButtons.forEach((button) => {
    button.addEventListener("click", async () => {
        const nextRating = Number.parseInt(button.dataset.radiographRating || "0", 10) || 0;
        if (!supabaseClient || !currentSupabaseUser?.id) {
            showAuthModal();
            if (radiographRatingStatus) {
                radiographRatingStatus.textContent = "Sign in to rate the current broadcast.";
            }
            return;
        }
        if (!currentRadiographTrackId) {
            if (radiographRatingStatus) {
                radiographRatingStatus.textContent = "This broadcast is not linked to a rating record yet.";
            }
            syncRadiographCurrentTrackRating();
            return;
        }
        radiographRating = nextRating;
        updateRadiographRatingButtons();
        if (radiographRatingStatus) {
            radiographRatingStatus.textContent = "Saving rating...";
        }
        const { error } = await supabaseClient
            .from("earb_radio_ratings")
            .upsert(
                {
                    user_id: currentSupabaseUser.id,
                    track_id: currentRadiographTrackId,
                    rating: nextRating,
                    updated_at: new Date().toISOString()
                },
                { onConflict: "user_id,track_id" }
            );
        if (error) {
            console.warn("RadioGraph rating save failed:", error);
            if (radiographRatingStatus) {
                radiographRatingStatus.textContent = "Rating could not be saved.";
                radiographRatingStatus.classList.add("error");
            }
            syncRadiographCurrentTrackRating();
            return;
        }
        if (radiographRatingStatus) {
            radiographRatingStatus.textContent = `Your rating for this broadcast: ${nextRating}/5.`;
            radiographRatingStatus.classList.remove("error");
        }
        refreshRadiographLeaderboard();
    });
});

renderLibrarianPlaylists();
renderLibrarianLibrary();
renderLibrarianQueue();
setActiveLibrarianItem(activeLibrarianItemId, { queue: false });

const {
    GM_INSTRUMENTS,
    clampProgram,
    getInstrumentName,
    formatDuration,
    summarizeMidi
} = window.MidiHelpers;
const { FluidSynthRenderer, buildEqualTemperamentTable } = window.EarBPlayerCore || {};
if (!FluidSynthRenderer || !buildEqualTemperamentTable) {
    throw new Error("Missing player-core.js (EarBPlayerCore).");
}
const DEBUG_PROGRAM_LOG = false;
const GM_PERCUSSION_CHANNEL = 9;
const GM_PERCUSSION_BANK = 128;
const GM_MELODIC_BANK = 0;
const CLOUD_SAVE_TIMEOUT_MS = 15000;
const DEFAULT_CONFIG = {
    fluidsynthBaseUrl: "../assets/fluidsynth/",
    soundfontBaseUrl: "assets/soundfonts/",
    soundfontFallbacksEnabled: false,
    midiBaseUrl: "assets/midi/",
    sampleMidiManifestUrl: "assets/midi/manifest.json",
    scalaLiteBaseUrl: "assets/ScalaLite/",
    scalaFullBaseUrl: "assets/Scala Archive/",
    scalaLiteManifestUrl: "assets/scala-lite-manifest.json",
    scalaFullManifestUrl: "assets/scala-manifest.json",
    supabaseUrl: "",
    supabasePublishableKey: "",
    radioStreamUrl: "",
    radioSubmitUrl: "",
    radioStatusUrl: "",
    radioRecipeUrl: ""
};

function isAbsoluteUrl(value) {
    return /^[a-z][a-z0-9+.-]*:/i.test(value);
}

function normalizeBaseUrl(value, fallback) {
    const raw = typeof value === "string" && value.trim() ? value.trim() : fallback;
    if (!raw) {
        return new URL("/", window.location.href).href;
    }
    const resolved = new URL(raw, window.location.href).href;
    return resolved.endsWith("/") ? resolved : `${resolved}/`;
}

function resolveConfigUrl(value, fallback) {
    const raw = typeof value === "string" && value.trim() ? value.trim() : fallback;
    if (!raw) {
        return new URL("/", window.location.href).href;
    }
    return new URL(raw, window.location.href).href;
}

function escapeCssValue(value) {
    if (window.CSS && typeof window.CSS.escape === "function") {
        return window.CSS.escape(value);
    }
    return String(value).replace(/["\\]/g, "\\$&");
}

function arrayBufferToBase64(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    const chunkSize = 0x8000;
    let binary = "";
    for (let i = 0; i < bytes.length; i += chunkSize) {
        const slice = bytes.subarray(i, i + chunkSize);
        binary += String.fromCharCode(...slice);
    }
    return window.btoa(binary);
}

function base64ToArrayBuffer(base64Value) {
    const binary = window.atob(base64Value);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}

function buildSoundfontSources(baseUrl) {
    const root = normalizeBaseUrl(baseUrl, DEFAULT_CONFIG.soundfontBaseUrl);
    const primarySource = [
        { file: "LiteGM_v1.03.sf2", label: "LiteGM_v1.03.sf2 (GM-lite)" },
    ];
    const fallbackSources = [
        { file: "FluidR3MonoMed.sf2", label: "FluidR3MonoMed.sf2 (compact SF2 fallback)" },
        { file: "FluidR3_GM.sf2", label: "FluidR3_GM.sf2 (full SF2 fallback)" }
    ];
    const allowFallbacks = APP_CONFIG?.soundfontFallbacksEnabled === true;
    const sources = allowFallbacks ? primarySource.concat(fallbackSources) : primarySource;
    return {
        mobile: sources.map(item => ({ url: new URL(item.file, root).href, label: item.label })),
        desktop: sources.map(item => ({ url: new URL(item.file, root).href, label: item.label }))
    };
}

function buildScalaSources(config) {
    const liteBase = normalizeBaseUrl(config.scalaLiteBaseUrl, DEFAULT_CONFIG.scalaLiteBaseUrl);
    const fullBase = normalizeBaseUrl(config.scalaFullBaseUrl, DEFAULT_CONFIG.scalaFullBaseUrl);
    return [
        {
            manifestUrl: resolveConfigUrl(config.scalaLiteManifestUrl, DEFAULT_CONFIG.scalaLiteManifestUrl),
            rootPrefix: liteBase,
            label: "lite"
        },
        {
            manifestUrl: resolveConfigUrl(config.scalaFullManifestUrl, DEFAULT_CONFIG.scalaFullManifestUrl),
            rootPrefix: fullBase,
            label: "full"
        }
    ];
}

function resolveAssetPath(entryPath, rootPrefix, defaultPrefix) {
    if (!entryPath || typeof entryPath !== "string") {
        return entryPath;
    }
    if (isAbsoluteUrl(entryPath)) {
        return entryPath;
    }
    const cleaned = entryPath.replace(/^\.\//, "");
    if (defaultPrefix && cleaned.startsWith(defaultPrefix)) {
        return `${rootPrefix}${cleaned.slice(defaultPrefix.length)}`;
    }
    if (rootPrefix) {
        return new URL(cleaned, rootPrefix).href;
    }
    return new URL(cleaned, window.location.href).href;
}

function resolveMidiAssetUrl(entryUrl) {
    if (!entryUrl || typeof entryUrl !== "string") {
        return entryUrl;
    }
    if (isAbsoluteUrl(entryUrl)) {
        return entryUrl;
    }
    const cleaned = entryUrl.replace(/^\.\//, "");
    if (cleaned.startsWith(DEFAULT_CONFIG.midiBaseUrl)) {
        return `${MIDI_BASE_URL}${cleaned.slice(DEFAULT_CONFIG.midiBaseUrl.length)}`;
    }
    return new URL(cleaned, MIDI_BASE_URL).href;
}

let APP_CONFIG = { ...DEFAULT_CONFIG };
let MIDI_BASE_URL = normalizeBaseUrl(DEFAULT_CONFIG.midiBaseUrl, DEFAULT_CONFIG.midiBaseUrl);
let FLUID_DIST_BASE = normalizeBaseUrl(DEFAULT_CONFIG.fluidsynthBaseUrl, DEFAULT_CONFIG.fluidsynthBaseUrl);
let FLUID_MODULE_URL = new URL("fluidsynth.js", FLUID_DIST_BASE).href;
let SOUNDFONT_SOURCES = buildSoundfontSources(DEFAULT_CONFIG.soundfontBaseUrl);
let SAMPLE_MANIFEST_URL = resolveConfigUrl(DEFAULT_CONFIG.sampleMidiManifestUrl, DEFAULT_CONFIG.sampleMidiManifestUrl);
let SCALA_SOURCES = buildScalaSources(DEFAULT_CONFIG);

async function loadAppConfig() {
    try {
        const response = await fetch("config.json", { cache: "no-cache" });
        if (!response.ok) {
            if (response.status === 404) {
                return { ...DEFAULT_CONFIG };
            }
            throw new Error(`Config fetch failed (${response.status})`);
        }
        const data = await response.json();
        return {
            ...DEFAULT_CONFIG,
            ...(data && typeof data === "object" ? data : {})
        };
    } catch (error) {
        console.warn("Unable to load config.json, using defaults.", error);
        return { ...DEFAULT_CONFIG };
    }
}

function applyAppConfig(config) {
    APP_CONFIG = {
        ...DEFAULT_CONFIG,
        ...(config && typeof config === "object" ? config : {})
    };
    FLUID_DIST_BASE = normalizeBaseUrl(APP_CONFIG.fluidsynthBaseUrl, DEFAULT_CONFIG.fluidsynthBaseUrl);
    FLUID_MODULE_URL = new URL("fluidsynth.js", FLUID_DIST_BASE).href;
    SOUNDFONT_SOURCES = buildSoundfontSources(APP_CONFIG.soundfontBaseUrl);
    SAMPLE_MANIFEST_URL = resolveConfigUrl(APP_CONFIG.sampleMidiManifestUrl, DEFAULT_CONFIG.sampleMidiManifestUrl);
    SCALA_SOURCES = buildScalaSources(APP_CONFIG);
    MIDI_BASE_URL = normalizeBaseUrl(APP_CONFIG.midiBaseUrl, DEFAULT_CONFIG.midiBaseUrl);
    if (fluidRenderer) {
        fluidRenderer.moduleUrl = FLUID_MODULE_URL;
        fluidRenderer.getSoundfontCandidates = getSoundfontCandidates;
    }
}

function setAuthStatus(message, isError = false) {
    if (authStatus) {
        authStatus.textContent = message;
        authStatus.classList.toggle("error", Boolean(isError));
    }
    if (authMiniStatus) {
        authMiniStatus.textContent = message;
        authMiniStatus.classList.toggle("error", Boolean(isError));
    }
}

function updateAuthUiForUser(user) {
    currentSupabaseUser = user || null;
    if (authSignOutButton) {
        authSignOutButton.disabled = !currentSupabaseUser;
    }
    if (authSignInButton) {
        authSignInButton.disabled = !supabaseClient;
    }
    if (authLaunchButton) {
        authLaunchButton.textContent = currentSupabaseUser ? "Account" : "Sign In";
    }
    if (!supabaseClient) {
        setAuthStatus("Cloud login is disabled. Add Supabase keys in config.json.", true);
        setSaveArrangementEnabled(false);
        updateRadiographDraftSummary();
        syncRadiographCurrentTrackRating();
        updateLibrarianCommentControls();
        return;
    }
    if (currentSupabaseUser?.email) {
        setAuthStatus(`Signed in as ${currentSupabaseUser.email}. Cloud settings sync is active.`, false);
        setSaveArrangementEnabled(true);
        updateRadiographDraftSummary();
        syncRadiographCurrentTrackRating();
        updateLibrarianCommentControls();
        return;
    }
    setAuthStatus("Not signed in. Your cloud settings are currently unavailable.", false);
    setSaveArrangementEnabled(false);
    updateRadiographDraftSummary();
    syncRadiographCurrentTrackRating();
    updateLibrarianCommentControls();
}

async function initSupabaseAuth() {
    const supabaseUrl = (APP_CONFIG.supabaseUrl || "").trim();
    const supabaseKey = (APP_CONFIG.supabasePublishableKey || "").trim();
    if (!supabaseUrl || !supabaseKey) {
        updateAuthUiForUser(null);
        return;
    }
    const supabaseApi = window.supabase;
    if (!supabaseApi?.createClient) {
        setAuthStatus("Supabase client library failed to load.", true);
        return;
    }
    supabaseClient = supabaseApi.createClient(supabaseUrl, supabaseKey, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    });
    const { data, error } = await supabaseClient.auth.getUser();
    if (error) {
        console.warn("Unable to fetch Supabase user:", error);
    }
    updateAuthUiForUser(data?.user || null);
    if (data?.user) {
        loadLibrarianSavedSongs({ showStatus: false }).catch((songsError) => {
            console.warn("Failed to load Librarian songs during auth init:", songsError);
        });
        loadCloudSettings().catch((settingsError) => {
            console.warn("Failed to load cloud settings during auth init:", settingsError);
        });
        restoreLatestCloudMidi().catch((restoreError) => {
            console.warn("Failed to restore latest cloud MIDI during auth init:", restoreError);
        });
    }
    supabaseClient.auth.onAuthStateChange(async (_event, session) => {
        updateAuthUiForUser(session?.user || null);
        if (session?.user) {
            loadLibrarianSavedSongs({ force: true, showStatus: false }).catch((songsError) => {
                console.warn("Failed to load Librarian songs after auth change:", songsError);
            });
            loadCloudSettings().catch((settingsError) => {
                console.warn("Failed to load cloud settings after auth change:", settingsError);
            });
        } else {
            pendingCloudSettings = null;
            clearLibrarianSavedSongs();
        }
    });
}

async function requestEmailSignIn() {
    if (!supabaseClient || !authEmailInput) {
        return;
    }
    const email = (authEmailInput.value || "").trim();
    if (!email) {
        setAuthStatus("Enter an email address first.", true);
        return;
    }
    const redirectTo = window.location.href.split("#")[0];
    const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo }
    });
    if (error) {
        console.error("Supabase sign-in failed:", error);
        setAuthStatus(error.message || "Unable to send sign-in link.", true);
        return;
    }
    setAuthStatus(`Check ${email} for your sign-in link.`, false);
}

async function signOutSupabaseUser() {
    if (!supabaseClient) {
        return;
    }
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error("Supabase sign-out failed:", error);
        setAuthStatus(error.message || "Unable to sign out.", true);
    }
}

async function resolveCurrentSupabaseUser() {
    if (!supabaseClient) {
        updateAuthUiForUser(null);
        return null;
    }
    if (currentSupabaseUser?.id) {
        return currentSupabaseUser;
    }
    try {
        const { data: sessionData, error: sessionError } = await withTimeout(
            supabaseClient.auth.getSession(),
            5000,
            "Timed out while checking your sign-in session."
        );
        if (sessionError) {
            console.warn("Unable to fetch Supabase session:", sessionError);
        }
        const sessionUser = sessionData?.session?.user || null;
        if (sessionUser) {
            updateAuthUiForUser(sessionUser);
            return sessionUser;
        }
        const { data: userData, error: userError } = await withTimeout(
            supabaseClient.auth.getUser(),
            8000,
            "Timed out while verifying your account."
        );
        if (userError) {
            console.warn("Unable to fetch Supabase user:", userError);
        }
        updateAuthUiForUser(userData?.user || null);
        return userData?.user || null;
    } catch (error) {
        console.warn("Unable to resolve Supabase user:", error);
        return currentSupabaseUser;
    }
}

function showAuthModal() {
    if (!authModal) {
        return;
    }
    authModal.classList.remove("is-hidden");
    if (authEmailInput) {
        authEmailInput.focus();
    }
}

function hideAuthModal() {
    if (!authModal) {
        return;
    }
    authModal.classList.add("is-hidden");
}

function setArrangementsStatus(message, isError = false) {
    if (!arrangementsStatus) {
        return;
    }
    arrangementsStatus.textContent = message;
    arrangementsStatus.classList.toggle("error", Boolean(isError));
}

function showArrangementsModal() {
    if (!arrangementsModal) {
        return;
    }
    arrangementsModal.classList.remove("is-hidden");
}

function hideArrangementsModal() {
    if (!arrangementsModal) {
        return;
    }
    arrangementsModal.classList.add("is-hidden");
}

function setSaveArrangementStatus(message, isError = false) {
    if (!saveArrangementStatus) {
        return;
    }
    saveArrangementStatus.textContent = message;
    saveArrangementStatus.classList.toggle("error", Boolean(isError));
}

function showSaveArrangementModal(defaultName = "") {
    if (!saveArrangementModal) {
        return;
    }
    saveArrangementModal.classList.remove("is-hidden");
    if (saveArrangementNameInput) {
        saveArrangementNameInput.value = defaultName;
        saveArrangementNameInput.focus();
        saveArrangementNameInput.select();
    }
    setSaveArrangementStatus("Use an existing name to overwrite, or a new name to save separately.", false);
}

function hideSaveArrangementModal() {
    if (!saveArrangementModal) {
        return;
    }
    saveArrangementModal.classList.add("is-hidden");
}

function selectSavedArrangement(recordId) {
    selectedArrangementId = recordId === null || recordId === undefined ? null : String(recordId);
    if (!arrangementsList) {
        return;
    }
    Array.from(arrangementsList.querySelectorAll(".arrangements-list__item")).forEach((button) => {
        const isSelected = button.dataset.arrangementId === selectedArrangementId;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-selected", isSelected ? "true" : "false");
    });
    if (arrangementsLoadButton) {
        arrangementsLoadButton.disabled = !selectedArrangementId;
    }
}

function renderSavedArrangements(records) {
    if (!arrangementsList || !arrangementsLoadButton) {
        return;
    }
    arrangementsList.innerHTML = "";
    savedArrangementsCache = Array.isArray(records) ? records.slice() : [];
    mergeSavedSongRecordsIntoLibrarian(savedArrangementsCache);
    selectedArrangementId = null;
    if (!savedArrangementsCache.length) {
        const empty = document.createElement("div");
        empty.className = "arrangements-list__empty";
        empty.textContent = "No stored arrangements yet";
        arrangementsList.appendChild(empty);
        arrangementsLoadButton.disabled = true;
        setArrangementsStatus("There are no stored arrangements yet.", false);
        return;
    }
    savedArrangementsCache.forEach((record, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "button arrangements-list__item";
        button.dataset.arrangementId = String(record.id || index);
        const createdAt = record.created_at ? new Date(record.created_at) : null;
        const stamp = createdAt && !Number.isNaN(createdAt.getTime())
            ? createdAt.toLocaleString()
            : "Saved arrangement";
        button.innerHTML = `${record.name || "Untitled arrangement"}<span class="arrangements-list__meta">${stamp}</span>`;
        button.setAttribute("role", "option");
        button.setAttribute("aria-selected", "false");
        button.addEventListener("click", () => {
            selectSavedArrangement(record.id || index);
        });
        arrangementsList.appendChild(button);
    });
    selectSavedArrangement(savedArrangementsCache[0]?.id ?? "0");
    setArrangementsStatus("Choose a saved arrangement to load.", false);
}

async function openArrangementsModal() {
    const user = await resolveCurrentSupabaseUser();
    if (!supabaseClient || !user?.id) {
        setStatus("Sign in to load saved arrangements.", true);
        showAuthModal();
        return;
    }
    if (arrangementsList) {
        arrangementsList.innerHTML = "";
    }
    if (arrangementsLoadButton) {
        arrangementsLoadButton.disabled = true;
    }
    setArrangementsStatus("Loading saved arrangements...", false);
    showArrangementsModal();
    const { data, error } = await withTimeout(
        supabaseClient
            .from("earb_user_midis")
            .select("id,name,midi_payload,midi_meta,created_at")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false })
            .limit(100),
        CLOUD_SAVE_TIMEOUT_MS,
        "Loading saved arrangements timed out. Refresh the page and try again."
    );
    if (error) {
        console.warn("Failed to load saved arrangements:", error);
        renderSavedArrangements([]);
        setArrangementsStatus(error?.message || "Unable to load saved arrangements.", true);
        return;
    }
    renderSavedArrangements(Array.isArray(data) ? data : []);
}

function showFavoritesModal() {
    if (!favoritesModal) {
        return;
    }
    favoritesModal.classList.remove("is-hidden");
    if (favoriteNameInput) {
        favoriteNameInput.value = "";
        favoriteNameInput.focus();
    }
}

function hideFavoritesModal() {
    if (!favoritesModal) {
        return;
    }
    favoritesModal.classList.add("is-hidden");
}

function showFavoriteDeleteModal(favoriteId) {
    if (!favoritesDeleteModal) {
        return;
    }
    const favorite = getFavoriteById(favoriteId);
    if (!favorite || favorite.id === "__default__") {
        setStatus("Default preset cannot be deleted.", true);
        return;
    }
    pendingFavoriteDeleteId = favorite.id;
    if (favoriteDeleteMessage) {
        favoriteDeleteMessage.textContent = `Delete favorite "${favorite.name}"?`;
    }
    favoritesDeleteModal.classList.remove("is-hidden");
}

function hideFavoriteDeleteModal() {
    if (!favoritesDeleteModal) {
        return;
    }
    favoritesDeleteModal.classList.add("is-hidden");
    pendingFavoriteDeleteId = null;
}

function deleteFavoriteById(favoriteId) {
    if (!favoriteId || favoriteId === "__default__") {
        setStatus("Default preset cannot be deleted.", true);
        return;
    }
    const beforeLength = presetFavorites.length;
    presetFavorites = presetFavorites.filter(item => item.id !== favoriteId);
    if (presetFavorites.length === beforeLength) {
        return;
    }
    refreshFavoritesMenus();
    syncFavoriteSelection("__default__");
    queueCloudSettingsSave();
    setStatus("Favorite deleted.", false);
}

function buildFavoriteSnapshot(name = "default") {
    return {
        id: `fav_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        name: name || "favorite",
        mode: currentMode,
        transpose_semitones: currentTranspose,
        tempo_percent: clampTempoPercent(currentTempoPercent),
        tuning_id: activeTuning?.id || DEFAULT_TUNING_ID,
        scala_preference: scalaPreference === "full" ? "full" : "lite",
        track_overrides: buildTrackOverrides()
    };
}

function getFavoriteById(id) {
    if (!id || id === "__default__") {
        return currentSongDefaultPreset;
    }
    return presetFavorites.find(item => item.id === id) || null;
}

function refreshFavoritesMenus() {
    const targets = [favoritesSelectScale, favoritesSelectInst].filter(Boolean);
    targets.forEach((select) => {
        const previous = select.value || "__default__";
        select.innerHTML = "";
        const baseOption = document.createElement("option");
        baseOption.value = "__default__";
        baseOption.textContent = "default";
        select.appendChild(baseOption);
        presetFavorites.forEach((fav) => {
            const option = document.createElement("option");
            option.value = fav.id;
            option.textContent = fav.name || "favorite";
            select.appendChild(option);
        });
        const nextValue = getFavoriteById(previous) ? previous : "__default__";
        select.value = nextValue;
    });
}

function syncFavoriteSelection(value) {
    activeFavoriteSelectionId = value || "__default__";
    if (favoritesSelectScale && favoritesSelectScale.value !== activeFavoriteSelectionId) {
        favoritesSelectScale.value = activeFavoriteSelectionId;
    }
    if (favoritesSelectInst && favoritesSelectInst.value !== activeFavoriteSelectionId) {
        favoritesSelectInst.value = activeFavoriteSelectionId;
    }
}

async function applyFavoriteById(favoriteId) {
    if (!currentSong) {
        syncFavoriteSelection("__default__");
        return;
    }
    const favorite = getFavoriteById(favoriteId);
    if (!favorite) {
        syncFavoriteSelection("__default__");
        return;
    }
    await applyArrangementSettingsSnapshot(favorite, {
        statusMessage: `Favorite applied: ${favorite.name}`,
        persistSelection: true
    });
}

async function applyArrangementSettingsSnapshot(snapshot, options = {}) {
    if (!currentSong || !snapshot || typeof snapshot !== "object") {
        return;
    }
    const {
        statusMessage = "Arrangement applied.",
        persistSelection = false,
        skipCloudSave = false
    } = options;
    isApplyingCloudSettings = true;
    try {
        if (snapshot.scala_preference) {
            setScalaPreference(snapshot.scala_preference === "full" ? "full" : "lite");
        }
        currentMode = typeof snapshot.mode === "string" && MODE_ADJUSTMENTS[snapshot.mode]
            ? snapshot.mode
            : DEFAULT_MODE;
        updateModeStatus();
        applyTransposeChange(Number(snapshot.transpose_semitones ?? 0));
        currentTempoPercent = clampTempoPercent(Number(snapshot.tempo_percent ?? 100));
        currentTempoBpm = tempoPercentToBpm(currentTempoPercent);
        customTempoActive = currentTempoPercent !== 100;
        applyTempoChange();
        const nextTuning = snapshot.tuning_id || DEFAULT_TUNING_ID;
        if (tuningSelect) {
            const option = tuningSelect.querySelector(`option[value="${escapeCssValue(nextTuning)}"]`);
            if (option) {
                tuningSelect.value = nextTuning;
                await handleTuningSelection(nextTuning);
            } else {
                tuningSelect.value = DEFAULT_TUNING_ID;
                await handleTuningSelection(DEFAULT_TUNING_ID);
            }
        }
        trackPrograms.clear();
        trackBanks.clear();
        trackVolumes.clear();
        trackTransposes.clear();
        playableTracks.forEach((track) => {
            const slot = track.slot;
            const channel = track.channelNumber ?? track.channel ?? trackChannels.get(slot) ?? 0;
            trackPrograms.set(slot, clampProgram(track.program ?? 0));
            trackBanks.set(slot, getDefaultBankForChannel(channel));
            trackVolumes.set(slot, 1);
            trackTransposes.set(slot, 0);
        });
        const overrides = Array.isArray(snapshot.track_overrides) ? snapshot.track_overrides : [];
        overrides.forEach((override) => {
            const trackIndex = Number.parseInt(override.track_index, 10);
            if (!Number.isFinite(trackIndex) || !trackChannels.has(trackIndex)) {
                return;
            }
            const channel = trackChannels.get(trackIndex) ?? 0;
            trackPrograms.set(trackIndex, clampProgram(override.program ?? 0));
            trackBanks.set(
                trackIndex,
                Number.isFinite(override.bank_msb) ? Number(override.bank_msb) : getDefaultBankForChannel(channel)
            );
            trackVolumes.set(trackIndex, clampTrackVolume(Number(override.volume)));
            trackTransposes.set(
                trackIndex,
                clampTrackTransposeValue(Number.parseInt(override.transpose_semitones, 10), 0)
            );
            const snapshotEntry = channelAssignmentsSnapshot.find(entry => entry.trackIndex === trackIndex);
            if (snapshotEntry) {
                snapshotEntry.program = clampProgram(override.program ?? snapshotEntry.program);
                snapshotEntry.bank = getTrackBank(trackIndex, channel);
            }
        });
        renderInstrumentMenus();
        applyAllProgramOverrides();
        applyAllChannelVolumes();
        scheduleArrangementRefresh(statusMessage);
        setStatus(statusMessage, false);
    } finally {
        isApplyingCloudSettings = false;
    }
    if (persistSelection && typeof snapshot.id === "string") {
        syncFavoriteSelection(snapshot.id);
    }
    if (!skipCloudSave) {
        queueCloudSettingsSave();
    }
}

function resetFavoriteStateForNewSong() {
    currentSongDefaultPreset = buildFavoriteSnapshot("default");
    currentSongDefaultPreset.id = "__default__";
    syncFavoriteSelection("__default__");
    refreshFavoritesMenus();
}

function getDefaultBankForChannel(channel) {
    return channel === GM_PERCUSSION_CHANNEL ? GM_PERCUSSION_BANK : GM_MELODIC_BANK;
}

function getTrackBank(trackIndex, channel = trackChannels.get(trackIndex) ?? 0) {
    const storedBank = trackBanks.get(trackIndex);
    if (Number.isFinite(storedBank)) {
        return storedBank;
    }
    return getDefaultBankForChannel(channel);
}

function buildInstrumentOptionValue(bank, program) {
    return `${Number(bank)}:${clampProgram(program)}`;
}

function parseInstrumentOptionValue(value, fallbackChannel = 0) {
    const [bankToken, programToken] = String(value || "").split(":");
    const bank = Number.parseInt(bankToken, 10);
    const program = clampProgram(Number.parseInt(programToken, 10));
    return {
        bank: Number.isFinite(bank) ? bank : getDefaultBankForChannel(fallbackChannel),
        program
    };
}

// Detect mobile device for soundfont selection
function isMobileDevice() {
    // Use UA detection only to avoid treating narrow desktop windows as mobile.
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        navigator.userAgent.toLowerCase()
    );
}

// Soundfont options are hydrated from config.json (defaults to local assets).
const SAMPLE_MIDIS = [];

let audioContext = null;
let progressFrame = null;
let lastProgressUpdateTime = 0;
let audioReady = false;
let playbackStartTime = 0;
let pauseOffset = 0;
let isPlaying = false;
const trackChannels = new Map();
let fluidRenderer;
let suppressProgressEvents = false;
let isUserScrubbing = false;
const DEFAULT_TEMPO_BPM = 120;
const TEMPO_RANGE_BPM = { min: 40, max: 240 };
const TEMPO_PERCENT_RANGE = { min: 25, max: 200 };
let baseTempoBpm = DEFAULT_TEMPO_BPM;
let currentTempoBpm = DEFAULT_TEMPO_BPM;
let currentSongBaseDuration = 0;
let customTempoActive = false;
let currentTempoPercent = 100;
// Scala sources are hydrated from config.json (defaults to local assets).
const DEFAULT_TUNING_ID = "__equal__";
const BASE_TUNING_NOTE = 69;
const equalTemperamentTable = buildEqualTemperamentTable(12);
const DEFAULT_MODE = "Ionian";
const SCALA_PREF_KEY = "ear_scala_pref_v1";
const MODE_ADJUSTMENTS = {
    Ionian: {},
    Dorian: { 4: -1, 11: -1 },
    Phrygian: { 2: -1, 4: -1, 9: -1, 11: -1 },
    Lydian: { 5: 1 },
    Mixolydian: { 11: -1 },
    Aeolian: { 4: -1, 9: -1, 11: -1 },
    Locrian: { 2: -1, 4: -1, 7: -1, 9: -1, 11: -1 }
};
const TRANSPOSE_LIMITS = { min: -24, max: 24 };
const TRACK_VOLUME_RANGE = { min: 0, max: 1 };
let tuningManifest = [];
let tuningCache = new Map();
let activeTuning = {
    id: DEFAULT_TUNING_ID,
    name: "12-TET",
    table: equalTemperamentTable
};
let activeScalaSource = null;
let scalaPreference = null;
let currentMode = DEFAULT_MODE;
let currentTranspose = 0;
const pendingProgramUpdates = new Map();
let programFlushHandle = null;
let baseMidiBuffer = null;
let transformedMidiBuffer = null;
let arrangementDirty = false;
let channelAssignmentsSnapshot = [];
let tempoSnapshot = { baseBpm: DEFAULT_TEMPO_BPM, targetBpm: DEFAULT_TEMPO_BPM };
let lastProgramLogSignature = "";
let pendingArrangementRefresh = null;
let recorder = null;
let recordingHandle = null;
let recordingActive = false;
let previousLoopState = false;
let savedArrangementsCache = [];
let selectedArrangementId = null;
const trackVisualState = new Map();
const METER_WINDOW_SECONDS = 0.35;
const METER_DECAY = 0.78;
const METER_ATTACK = 0.45;
const sampleMidiMap = new Map();
let openSampleModal = null;
let sampleManifestLoaded = false;
let supabaseClient = null;
let cloudSettingsSaveTimer = null;
let pendingCloudSettings = null;
let isApplyingCloudSettings = false;
let isRestoringCloudMidi = false;
let presetFavorites = [];
let currentSongDefaultPreset = null;
let activeFavoriteSelectionId = "__default__";
let pendingFavoriteDeleteId = null;
let bootstrapPromise = null;

class PcmRecorder {
    constructor() {
        this.reset();
    }

    reset() {
        this.sampleRate = 44100;
        this.leftBuffers = [];
        this.rightBuffers = [];
        this.length = 0;
        this.isRecording = false;
        this.compressedRecorder = null;
        this.compressedChunks = [];
        this.compressedMime = "";
        this.compressedPromise = null;
        this._compressedResolve = null;
        this._compressedReject = null;
        this.desiredMime = "audio/wav";
        this.desiredExt = "wav";
        this.mediaRecorder = null;
    }

    start(sampleRate) {
        this.reset();
        if (Number.isFinite(sampleRate) && sampleRate > 0) {
            this.sampleRate = sampleRate;
        }
        this.isRecording = true;
    }

    addChunk(left, right) {
        if (!this.isRecording || !left || !right) {
            return;
        }
        // Clone to avoid retaining large buffers unnecessarily.
        this.leftBuffers.push(new Float32Array(left));
        this.rightBuffers.push(new Float32Array(right));
        this.length += left.length;
    }

    stop() {
        this.isRecording = false;
        if (!this.length) {
            return null;
        }
        const interleaved = new Float32Array(this.length * 2);
        let offset = 0;
        for (let i = 0; i < this.leftBuffers.length; i++) {
            const l = this.leftBuffers[i];
            const r = this.rightBuffers[i];
            for (let frame = 0; frame < l.length; frame++) {
                interleaved[offset++] = l[frame];
                interleaved[offset++] = r[frame] ?? l[frame];
            }
        }
        const wavBuffer = this.encodeWav(interleaved, this.sampleRate);
        this.reset();
        return new Blob([wavBuffer], { type: "audio/wav" });
    }

    encodeWav(samples, sampleRate) {
        const buffer = new ArrayBuffer(44 + samples.length * 2);
        const view = new DataView(buffer);
        /* RIFF identifier */
        this.writeString(view, 0, "RIFF");
        /* file length */
        view.setUint32(4, 36 + samples.length * 2, true);
        /* RIFF type */
        this.writeString(view, 8, "WAVE");
        /* format chunk identifier */
        this.writeString(view, 12, "fmt ");
        /* format chunk length */
        view.setUint32(16, 16, true);
        /* sample format (raw) */
        view.setUint16(20, 1, true);
        /* channel count */
        view.setUint16(22, 2, true);
        /* sample rate */
        view.setUint32(24, sampleRate, true);
        /* byte rate (sample rate * block align) */
        view.setUint32(28, sampleRate * 4, true);
        /* block align (channel count * bytes per sample) */
        view.setUint16(32, 4, true);
        /* bits per sample */
        view.setUint16(34, 16, true);
        /* data chunk identifier */
        this.writeString(view, 36, "data");
        /* data chunk length */
        view.setUint32(40, samples.length * 2, true);
        this.floatTo16BitPCM(view, 44, samples);
        return buffer;
    }

    floatTo16BitPCM(output, offset, input) {
        for (let i = 0; i < input.length; i++, offset += 2) {
            let s = Math.max(-1, Math.min(1, input[i]));
            output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
        }
    }

    writeString(view, offset, string) {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }
}

function applyAllProgramOverrides() {
    if (!fluidRenderer || !trackPrograms.size || !trackChannels.size) {
        return;
    }
    trackPrograms.forEach((program, trackIndex) => {
        const channel = trackChannels.get(trackIndex);
        if (Number.isFinite(channel)) {
            fluidRenderer.programChange(channel, clampProgram(program), getTrackBank(trackIndex, channel));
        }
    });
    applyAllChannelVolumes();
    logProgramAssignments("applyAllProgramOverrides");
}

function applyAllChannelVolumes() {
    if (!fluidRenderer || typeof fluidRenderer.setChannelVolume !== "function") {
        return;
    }
    trackChannels.forEach((channel, trackIndex) => {
        if (!Number.isFinite(channel)) {
            return;
        }
        const volume = clampTrackVolume(trackVolumes.get(trackIndex) ?? 1);
        fluidRenderer.setChannelVolume(channel, volume * 127);
        if (typeof fluidRenderer.setChannelExpression === "function") {
            fluidRenderer.setChannelExpression(channel, 127);
        }
    });
}

function logProgramAssignments(reason) {
    if (!DEBUG_PROGRAM_LOG) {
        return;
    }
    const rows = [];
    trackChannels.forEach((channel, trackIndex) => {
        const assignment = fluidRenderer?.channelPrograms?.get(channel);
        const bank = Number.isFinite(assignment?.bank) ? assignment.bank : "n/a";
        const program = Number.isFinite(assignment?.program) ? assignment.program : null;
        rows.push({
            track: trackIndex + 1,
            channel: channel + 1,
            bank,
            program: Number.isFinite(program) ? program : "n/a",
            instrument: bank === GM_PERCUSSION_BANK ? "Percussion" : getInstrumentName(program ?? 0)
        });
    });
    const signature = JSON.stringify(rows);
    if (signature === lastProgramLogSignature) {
        return;
    }
    lastProgramLogSignature = signature;
    console.table(rows, ["track", "channel", "bank", "program", "instrument"]);
    if (reason) {
        console.log(`[Programs] ${reason}`);
    }
}

// Expose for manual inspection in console.
window.__logPrograms = (label = "manual") => logProgramAssignments(label);

function resolveFluidPath(relative) {
    return new URL(relative, FLUID_DIST_BASE).href;
}
function getSoundfontCandidates() {
    return isMobileDevice() ? SOUNDFONT_SOURCES.mobile : SOUNDFONT_SOURCES.desktop;
}

fluidRenderer = new FluidSynthRenderer({
    moduleUrl: FLUID_MODULE_URL,
    resolvePath: resolveFluidPath,
    workletUrl: "js/fluid-worklet.js",
    getSoundfontCandidates,
    defaultTempoBpm: DEFAULT_TEMPO_BPM
});
window.__fluidRenderer = fluidRenderer;
fluidRenderer.setProgressCallback(setStatusProgress);
fluidRenderer.onPlaybackComplete = async () => {
    if (recordingActive) {
        await stopRecordingSession(true);
        stopPlayback(true);
        return;
    }
    if (loopToggle.checked && currentSong) {
        isPlaying = false;
        pauseOffset = 0;
        playbackStartTime = getAudioContext().currentTime;
        isUserScrubbing = false;
        stopProgressUpdates(true);
        applyTempoChange();
        fluidRenderer.reapplyTuning();
        applyAllProgramOverrides();
        setStatus("Looping in 3s...", false);
        setTimeout(async () => {
            if (!loopToggle.checked || !currentSong) {
                return;
            }
            const scheduled = await scheduleNotesFromOffset(0);
            if (scheduled) {
                applyAllProgramOverrides();
                if (typeof fluidRenderer.scheduleProgramRefresh === "function") {
                    fluidRenderer.scheduleProgramRefresh();
                }
                setTimeout(() => {
                    applyAllProgramOverrides();
                    if (typeof fluidRenderer.scheduleProgramRefresh === "function") {
                        fluidRenderer.scheduleProgramRefresh();
                    }
                }, 50);
                isPlaying = true;
                startProgressUpdates();
                setStatus("Playing...", false);
                logProgramAssignments("loop restart");
                return;
            }
            stopPlayback(true);
        }, LOOP_DELAY_MS);
        return;
    }
    stopPlayback(true);
};

let midiWorker = null;
let workerRequestId = 0;
const workerRequests = new Map();
let latestSelectionToken = 0;

if (typeof Worker !== "undefined") {
    try {
        midiWorker = new Worker("js/midi-worker.js");
    } catch (error) {
        console.warn("Falling back to main-thread MIDI parsing:", error);
        midiWorker = null;
    }
} else {
    console.warn("Web Workers are not supported in this browser. MIDI parsing will run on the main thread.");
}

let currentSong = null;
let playableTracks = [];
let trackPrograms = new Map();
let trackBanks = new Map();
let trackVolumes = new Map();
let trackTransposes = new Map();
let currentMidiBuffer = null;
let currentMidiSource = null;
let isPrepared = false;

if (midiWorker) {
    midiWorker.addEventListener("message", (event) => {
        const { id, ok, payload, error } = event.data || {};
        const callbacks = workerRequests.get(id);
        if (!callbacks) {
            return;
        }
        workerRequests.delete(id);
        if (ok) {
            callbacks.resolve(payload);
        } else {
            callbacks.reject(new Error(error || "Unable to parse MIDI file."));
        }
    });

    midiWorker.addEventListener("error", (event) => {
        workerRequests.forEach(({ reject }) => {
            reject(event.message ? new Error(event.message) : event);
        });
        workerRequests.clear();
        setStatus("Background MIDI parser failed. Falling back to in-page parsing.", true);
        try {
            midiWorker.terminate();
        } catch (error) {
            console.warn("Unable to terminate MIDI worker:", error);
        }
        midiWorker = null;
    });
}

fileInput.addEventListener("change", handleMidiSelection);
if (loadButton) {
    loadButton.addEventListener("click", () => {
        showSampleModal();
    });
}
if (loadArrangementButton) {
    loadArrangementButton.addEventListener("click", () => {
        openArrangementsModal();
    });
}
if (saveArrangementButton) {
    saveArrangementButton.addEventListener("click", () => {
        if (!currentSong || !currentMidiBuffer) {
            setStatus("Load a MIDI before saving arrangement.", true);
            return;
        }
        if (!supabaseClient || !currentSupabaseUser?.id) {
            setStatus("Sign in to save arrangement to your library.", true);
            showAuthModal();
            return;
        }
        showSaveArrangementModal(buildDefaultArrangementName());
    });
}
enableAudioButton.addEventListener("click", async () => {
    if (audioLaunchHint) {
        audioLaunchHint.classList.add("is-hidden");
    }
    try {
        setLoadButtonEnabled(false);
        setSampleButtonEnabled(false);
        setStatusProgress(0.2);
        await ensureAudioReady();
        setStatus("Audio enabled. Load a MIDI file to begin.", false);
        setAudioEnabledState(true);
        setStatusProgress(1);
        playConfirmationClick();
        console.log("[Audio] Context resumed:", getAudioContext().state);
    } catch (error) {
        console.error(error);
        const reason = error && error.message ? ` (${error.message})` : "";
        setStatus(`Click blocked by browser. Try again.${reason}`, true);
        setStatusProgress(0);
        setLoadButtonEnabled(false);
        setSampleButtonEnabled(false);
    }
});
if (loadSampleButton && sampleMidiSelect) {
    loadSampleButton.addEventListener("click", () => {
        showSampleModal();
    });
    sampleMidiSelect.addEventListener("change", async (event) => {
        const chosenId = event.target.value;
        const sample = sampleMidiMap.get(chosenId);
        if (!sample) {
            return;
        }
        setStatus(`Ready to load ${sample.name}.`, false);
    });
}
if (sampleChooseButton && sampleMidiSelect) {
    sampleChooseButton.addEventListener("click", () => {
        const chosenId = sampleMidiSelect.value;
        const sample = sampleMidiMap.get(chosenId);
        if (!sample) {
            setStatus("Select a sample MIDI to load.", true);
            return;
        }
        hideSampleModal();
        loadSampleByRecord(sample);
    });
}
if (sampleCancelButton) {
    sampleCancelButton.addEventListener("click", () => {
        hideSampleModal();
        setStatus("Sample load canceled.", false);
    });
}
if (helpToggle) {
    helpToggle.addEventListener("click", () => {
        const isHidden = helpBubbles?.classList.contains("is-hidden");
        setHelpVisibility(Boolean(isHidden), false);
    });
}
if (helpDismiss) {
    helpDismiss.addEventListener("click", () => {
        setHelpVisibility(false, true);
    });
}
if (infoToggle) {
    infoToggle.addEventListener("click", () => {
        const isHidden = infoBubbles?.classList.contains("is-hidden");
        setInfoVisibility(Boolean(isHidden));
    });
}
if (infoDismiss) {
    infoDismiss.addEventListener("click", () => {
        setInfoVisibility(false);
    });
}
if (contactLink) {
    contactLink.addEventListener("click", (event) => {
        event.preventDefault();
        setInfoVisibility(false);
        showContactModal();
    });
}
if (contactCancel) {
    contactCancel.addEventListener("click", () => {
        hideContactModal();
    });
}
if (authSignInButton) {
    authSignInButton.addEventListener("click", () => {
        requestEmailSignIn();
    });
}
if (authLaunchButton) {
    authLaunchButton.addEventListener("click", () => {
        showAuthModal();
    });
}
if (authSignOutButton) {
    authSignOutButton.addEventListener("click", () => {
        signOutSupabaseUser();
    });
}
if (authCloseButton) {
    authCloseButton.addEventListener("click", () => {
        hideAuthModal();
    });
}
if (authEmailInput) {
    authEmailInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            requestEmailSignIn();
        }
    });
}
if (favoritesAddScale) {
    favoritesAddScale.addEventListener("click", () => {
        if (!currentSong) {
            setStatus("Load a MIDI before saving favorites.", true);
            return;
        }
        showFavoritesModal();
    });
}
if (favoritesAddInst) {
    favoritesAddInst.addEventListener("click", () => {
        if (!currentSong) {
            setStatus("Load a MIDI before saving favorites.", true);
            return;
        }
        showFavoritesModal();
    });
}
if (favoritesRemoveScale) {
    favoritesRemoveScale.addEventListener("click", () => {
        if (!currentSong) {
            setStatus("Load a MIDI before deleting favorites.", true);
            return;
        }
        const selected = favoritesSelectScale?.value || activeFavoriteSelectionId || "__default__";
        showFavoriteDeleteModal(selected);
    });
}
if (favoritesRemoveInst) {
    favoritesRemoveInst.addEventListener("click", () => {
        if (!currentSong) {
            setStatus("Load a MIDI before deleting favorites.", true);
            return;
        }
        const selected = favoritesSelectInst?.value || activeFavoriteSelectionId || "__default__";
        showFavoriteDeleteModal(selected);
    });
}
if (favoriteSaveButton) {
    favoriteSaveButton.addEventListener("click", () => {
        if (!currentSong) {
            hideFavoritesModal();
            return;
        }
        const rawName = (favoriteNameInput?.value || "").trim();
        const name = rawName || `favorite ${presetFavorites.length + 1}`;
        const snapshot = buildFavoriteSnapshot(name);
        presetFavorites.push(snapshot);
        refreshFavoritesMenus();
        syncFavoriteSelection(snapshot.id);
        queueCloudSettingsSave();
        hideFavoritesModal();
        setStatus(`Favorite saved: ${name}`, false);
    });
}
if (favoriteCancelButton) {
    favoriteCancelButton.addEventListener("click", () => {
        hideFavoritesModal();
    });
}
if (favoriteDeleteConfirmButton) {
    favoriteDeleteConfirmButton.addEventListener("click", () => {
        if (pendingFavoriteDeleteId) {
            deleteFavoriteById(pendingFavoriteDeleteId);
        }
        hideFavoriteDeleteModal();
    });
}
if (favoriteDeleteCancelButton) {
    favoriteDeleteCancelButton.addEventListener("click", () => {
        hideFavoriteDeleteModal();
    });
}
if (arrangementsCancelButton) {
    arrangementsCancelButton.addEventListener("click", () => {
        hideArrangementsModal();
    });
}
if (arrangementsLoadButton) {
    arrangementsLoadButton.addEventListener("click", async () => {
        const selectedId = selectedArrangementId || "";
        const record = savedArrangementsCache.find((item) => String(item.id) === selectedId);
        if (!record) {
            setArrangementsStatus("There are no stored arrangements yet.", false);
            return;
        }
        arrangementsLoadButton.disabled = true;
        setArrangementsStatus(`Loading ${record.name || "arrangement"}...`, false);
        try {
            await withTimeout(
                loadCloudMidiRecord(record, { statusMessage: `Arrangement loaded: ${record.name || "Saved arrangement"}` }),
                CLOUD_SAVE_TIMEOUT_MS,
                "Loading arrangement timed out. Refresh the page and try again."
            );
            hideArrangementsModal();
        } catch (error) {
            console.error("Failed to load arrangement:", error);
            setArrangementsStatus(error?.message || "Unable to load arrangement.", true);
        } finally {
            arrangementsLoadButton.disabled = !savedArrangementsCache.length;
        }
    });
}
if (saveArrangementCancelButton) {
    saveArrangementCancelButton.addEventListener("click", () => {
        hideSaveArrangementModal();
    });
}
if (saveArrangementConfirmButton) {
    saveArrangementConfirmButton.addEventListener("click", async () => {
        const arrangementName = (saveArrangementNameInput?.value || "").trim();
        if (!arrangementName) {
            setSaveArrangementStatus("Enter an arrangement name first.", true);
            return;
        }
        saveArrangementConfirmButton.disabled = true;
        hideSaveArrangementModal();
        setStatus(`Saving arrangement: ${arrangementName}...`, false);
        try {
            await saveArrangementToLibrary(arrangementName);
        } catch (error) {
            console.error("Unable to save arrangement:", error);
            setStatus(error?.message || "Unable to save arrangement to library.", true);
        } finally {
            saveArrangementConfirmButton.disabled = false;
        }
    });
}
if (favoritesSelectScale) {
    favoritesSelectScale.addEventListener("change", async () => {
        const value = favoritesSelectScale.value || "__default__";
        await applyFavoriteById(value);
    });
}
if (favoritesSelectInst) {
    favoritesSelectInst.addEventListener("change", async () => {
        const value = favoritesSelectInst.value || "__default__";
        await applyFavoriteById(value);
    });
}
if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
        }
        if (contactStatus) {
            contactStatus.textContent = "Sending...";
        }
        const formData = new FormData(contactForm);
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method || "POST",
                body: formData,
                headers: { Accept: "application/json" }
            });
            if (response.ok) {
                if (contactStatus) {
                    contactStatus.textContent = "Thanks! Your message was sent.";
                }
                contactForm.reset();
            } else {
                if (contactStatus) {
                    contactStatus.textContent = "There was a problem sending your message. Please try again.";
                }
            }
        } catch (error) {
            console.error("Error submitting contact form", error);
            if (contactStatus) {
                contactStatus.textContent = "Network error. Please try again.";
            }
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
            }
        }
    });
}

function showContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove("is-hidden");
}

function hideContactModal() {
    if (!contactModal) return;
    contactModal.classList.add("is-hidden");
}
if (sampleModal) {
    sampleModal.addEventListener("click", (event) => {
        if (event.target === sampleModal || event.target.classList.contains("modal__backdrop")) {
            hideSampleModal();
        }
    });
}
if (authModal) {
    authModal.addEventListener("click", (event) => {
        if (event.target === authModal || event.target.classList.contains("modal__backdrop")) {
            hideAuthModal();
        }
    });
}
if (favoritesModal) {
    favoritesModal.addEventListener("click", (event) => {
        if (event.target === favoritesModal || event.target.classList.contains("modal__backdrop")) {
            hideFavoritesModal();
        }
    });
}
if (favoritesDeleteModal) {
    favoritesDeleteModal.addEventListener("click", (event) => {
        if (event.target === favoritesDeleteModal || event.target.classList.contains("modal__backdrop")) {
            hideFavoriteDeleteModal();
        }
    });
}
if (arrangementsModal) {
    arrangementsModal.addEventListener("click", (event) => {
        if (event.target === arrangementsModal || event.target.classList.contains("modal__backdrop")) {
            hideArrangementsModal();
        }
    });
}
if (saveArrangementModal) {
    saveArrangementModal.addEventListener("click", (event) => {
        if (event.target === saveArrangementModal || event.target.classList.contains("modal__backdrop")) {
            hideSaveArrangementModal();
        }
    });
}
if (playlistCreateModal) {
    playlistCreateModal.addEventListener("click", (event) => {
        if (event.target === playlistCreateModal || event.target.classList.contains("modal__backdrop")) {
            hidePlaylistCreateModal();
        }
    });
}
if (playlistDeleteModal) {
    playlistDeleteModal.addEventListener("click", (event) => {
        if (event.target === playlistDeleteModal || event.target.classList.contains("modal__backdrop")) {
            hidePlaylistDeleteModal();
        }
    });
}
playButton.addEventListener("click", () => {
    play();
    setTimeout(updateQueueTransportControls, 0);
});
pauseButton.addEventListener("click", () => {
    pausePlayback();
    setTimeout(updateQueueTransportControls, 0);
});
stopButton.addEventListener("click", () => {
    stopPlayback(false);
    setTimeout(updateQueueTransportControls, 0);
});
loopToggle.addEventListener("change", () => {
    fluidRenderer.setLoopEnabled(loopToggle.checked);
});
if (recordButton) {
    recordButton.addEventListener("click", () => toggleRecording());
}

progressBar.addEventListener("input", (event) => {
    if (suppressProgressEvents || !currentSong) {
        return;
    }
    isUserScrubbing = true;
    const valueSeconds = Number.parseFloat(event.target.value);
    pauseOffset = Number.isFinite(valueSeconds) ? valueSeconds : 0;
    updateProgressUI(pauseOffset);
});

progressBar.addEventListener("change", async () => {
    if (!currentSong) {
        return;
    }
    if (isPlaying) {
        applyAllProgramOverrides();
        const success = await scheduleNotesFromOffset(pauseOffset);
        if (success) {
            pauseOffset = 0;
            startProgressUpdates();
            logProgramAssignments("post-scrub resume");
        }
    } else {
        await fluidRenderer.seek(pauseOffset);
        applyAllProgramOverrides();
        updateProgressUI(pauseOffset);
        logProgramAssignments("post-scrub paused");
    }
    isUserScrubbing = false;
});

progressBar.addEventListener("pointerdown", () => {
    if (!currentSong) {
        return;
    }
    isUserScrubbing = true;
});

progressBar.addEventListener("pointerup", () => {
    isUserScrubbing = false;
    if (!isPlaying) {
        updateProgressUI(pauseOffset);
    }
});

progressBar.addEventListener("pointercancel", () => {
    isUserScrubbing = false;
});

tempoSlider.addEventListener("input", () => {
    if (tempoSlider.disabled) {
        return;
    }
    const percent = clampTempoPercent(Number(tempoSlider.value));
    currentTempoPercent = percent;
    currentTempoBpm = tempoPercentToBpm(percent);
    customTempoActive = currentTempoPercent !== 100;
    applyTempoChange();
    queueCloudSettingsSave();
});
updateTempoControlsState(false);

if (tempoResetButton) {
    tempoResetButton.addEventListener("click", () => {
        if (tempoResetButton.disabled) {
            return;
        }
        currentTempoPercent = 100;
        currentTempoBpm = tempoPercentToBpm(currentTempoPercent);
        customTempoActive = false;
        applyTempoChange();
        queueCloudSettingsSave();
    });
}

if (tuningResetButton) {
    tuningResetButton.addEventListener("click", () => {
        if (tuningResetButton.disabled) {
            return;
        }
        if (tuningSelect) {
            tuningSelect.value = DEFAULT_TUNING_ID;
            handleTuningSelection(DEFAULT_TUNING_ID);
        }
    });
}

if (tuningSelect) {
    tuningSelect.addEventListener("change", () => {
        handleTuningSelection(tuningSelect.value);
    });
}
if (tuningFolderSelect) {
    tuningFolderSelect.addEventListener("change", () => {
        filterTuningsByFolder(tuningFolderSelect.value);
    });
}
if (modeSelect) {
    modeSelect.value = DEFAULT_MODE;
    modeSelect.addEventListener("change", () => {
        const requested = modeSelect.value || DEFAULT_MODE;
        if (requested === currentMode) {
            return;
        }
        currentMode = requested;
        updateModeStatus();
        applyActiveTuning();
        setStatus(`Mode applied: ${currentMode}`, false);
        queueCloudSettingsSave();
    });
}
if (transposeInput) {
    transposeInput.value = currentTranspose.toString();
    transposeInput.addEventListener("change", () => {
        const requested = Number.parseInt(transposeInput.value, 10);
        applyTransposeChange(Number.isFinite(requested) ? requested : currentTranspose);
    });
}
if (transposeDecrement) {
    transposeDecrement.addEventListener("click", () => {
        applyTransposeChange(currentTranspose - 1);
    });
}
if (transposeIncrement) {
    transposeIncrement.addEventListener("click", () => {
        applyTransposeChange(currentTranspose + 1);
    });
}
if (transposeResetButton) {
    transposeResetButton.addEventListener("click", () => {
        if (transposeResetButton.disabled) {
            return;
        }
        applyTransposeChange(0);
    });
}
async function bootstrapApp() {
    const config = await loadAppConfig();
    applyAppConfig(config);
    refreshRadiographAudioSource();
    startRadiographStatusPolling();
    startRadiographLeaderboardRotation();
    await initSupabaseAuth();
    refreshFavoritesMenus();
    syncFavoriteSelection("__default__");
    updateModeStatus();
    updateTransposeStatus();
    setScaleControlsEnabled(false);
    setFavoritesControlsEnabled(false);
    initializeScalaPreference();
    loadScalaManifest();
    applyActiveTuning();
    loadSampleManifest();
    updateRadiographDraftSummary();
}

bootstrapPromise = bootstrapApp().catch((error) => {
    console.error("App bootstrap failed:", error);
    throw error;
});

async function loadMidiFromBuffer(buffer, displayName = "MIDI file", source = null) {
    await ensureAudioReady().catch((error) => {
        console.warn("Audio context not ready yet:", error);
    });
    const selectionToken = ++latestSelectionToken;
    resetPlaybackState();
    setStatus(`Parsing ${displayName}...`, false);
    try {
        const parsedSong = await parseMidiBuffer(buffer);
        if (selectionToken !== latestSelectionToken) {
            return;
        }

        if (!parsedSong.tracks || !parsedSong.tracks.length) {
            throw new Error("This MIDI file does not contain any playable tracks.");
        }

        currentSong = parsedSong;
        currentSongBaseDuration = currentSong.duration || 0;
        currentSong.baseDuration = currentSongBaseDuration;
        const detectedTempo = detectDefaultTempo(parsedSong);
        activeTuning = {
            id: DEFAULT_TUNING_ID,
            name: "12-TET",
            table: equalTemperamentTable
        };
        if (tuningSelect) {
            tuningSelect.value = DEFAULT_TUNING_ID;
        }
        if (tuningResetButton) {
            tuningResetButton.disabled = true;
        }
        currentMode = DEFAULT_MODE;
        currentTranspose = 0;
        baseTempoBpm = detectedTempo;
        currentTempoBpm = detectedTempo;
        currentTempoPercent = 100;
        customTempoActive = false;
        playableTracks = parsedSong.tracks;
        console.log("[MIDI] Loaded. Duration:", currentSong.duration, "Tracks:", playableTracks.length);
        trackChannels.clear();
        trackPrograms.clear();
        trackBanks.clear();
        trackVolumes.clear();
        trackTransposes.clear();
        const channelAssignments = [];
        playableTracks.forEach((track, idx) => {
            const slot = channelAssignments.length;
            track.slot = slot;
            let channel = Number.isFinite(track.channel)
                ? Math.max(0, Math.min(15, Math.round(track.channel)))
                : idx % 16;
            if (!Number.isFinite(track.channel)) {
                console.warn("Track has no MIDI channel. Falling back to channel", channel + 1);
            }
            track.channelNumber = channel;
            trackChannels.set(slot, channel);
            const initialProgram = clampProgram(track.program ?? 0);
            const initialBank = getDefaultBankForChannel(channel);
            trackPrograms.set(slot, initialProgram);
            trackBanks.set(slot, initialBank);
            trackVolumes.set(slot, 1);
            trackTransposes.set(slot, 0);
            channelAssignments.push({ trackIndex: slot, channel, bank: initialBank, program: initialProgram });
        });
        baseMidiBuffer = buffer.slice(0);
        transformedMidiBuffer = buffer.slice(0);
        arrangementDirty = false;
        channelAssignmentsSnapshot = channelAssignments.map(item => ({ ...item }));
        tempoSnapshot = {
            baseBpm: baseTempoBpm,
            targetBpm: currentTempoBpm
        };
        await fluidRenderer.loadMidi(baseMidiBuffer.slice(0), currentSongBaseDuration, [], tempoSnapshot);
        fluidRenderer.setLoopEnabled(loopToggle.checked);
        applyActiveTuning();
        applyAllChannelVolumes();
        setTimeout(() => {
            applyAllChannelVolumes();
        }, 60);
        currentSong.duration = fluidRenderer.songDuration || currentSong.duration;
        updateTempoControlsState(true);
        isPrepared = true;
        pauseOffset = 0;
        currentMidiBuffer = buffer.slice(0);
        currentMidiSource = source && typeof source === "object" ? { ...source } : null;
        logProgramAssignments("after load");

        currentSong.displayName = displayName;
        setSongTitle(displayName);
        songDisplay.value = summarizeMidi(parsedSong);
        songPanel.classList.remove("is-hidden");
        controlsPanel.classList.remove("is-hidden");
        instrumentPanel.classList.remove("is-hidden");
        renderInstrumentMenus();
        resetTransportUi();
        enableTransportButtons(true);
        setScaleControlsEnabled(true);
        setFavoritesControlsEnabled(true);
        updateModeStatus();
        updateTransposeStatus();
        resetFavoriteStateForNewSong();
        setStatus("Loaded. Press Play to start.", false);
        setSaveArrangementEnabled(true);
        updateRadiographDraftSummary();
        queueCloudSettingsSave();
    } catch (error) {
        if (selectionToken !== latestSelectionToken) {
            return;
        }
        console.error(error);
        setStatus(error && error.message ? error.message : "Failed to load MIDI file.", true);
        handleLoadFailure();
    }
}

async function handleMidiSelection(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
        return;
    }

    hideSampleModal();
    setStatus(`Reading ${file.name}...`, false);
    try {
        const buffer = await file.arrayBuffer();
        await loadMidiFromBuffer(buffer, file.name, {
            source_type: "upload",
            file_name: file.name
        });
    } catch (error) {
        console.error(error);
        setStatus(error && error.message ? error.message : "Failed to load MIDI file.", true);
        handleLoadFailure();
    }
}

function parseMidiBuffer(arrayBuffer) {
    if (midiWorker) {
        return parseMidiWithWorker(arrayBuffer).catch((error) => {
            console.warn("Worker parsing failed. Retrying on main thread.", error);
            try {
                midiWorker.terminate();
            } catch (terminateError) {
                console.warn("Unable to terminate failing MIDI worker:", terminateError);
            }
            midiWorker = null;
            return parseMidiOnMainThread(arrayBuffer);
        });
    }
    return parseMidiOnMainThread(arrayBuffer);
}

function parseMidiWithWorker(arrayBuffer) {
    return new Promise((resolve, reject) => {
        if (!midiWorker) {
            reject(new Error("Background MIDI parser is unavailable."));
            return;
        }
        const id = ++workerRequestId;
        workerRequests.set(id, { resolve, reject });
        try {
            // Send a copy of the buffer so the original remains available for fallback parsing.
            const workerBuffer = arrayBuffer.slice(0);
            midiWorker.postMessage({ id, buffer: workerBuffer }, [workerBuffer]);
        } catch (error) {
            workerRequests.delete(id);
            reject(error);
        }
    });
}

async function parseMidiOnMainThread(arrayBuffer) {
    if (typeof Midi === "undefined") {
        throw new Error("The @tonejs/midi script failed to load.");
    }
    await new Promise((resolve) => setTimeout(resolve, 0));
    const midi = new Midi(arrayBuffer);
    return normalizeMidiData(midi);
}

function normalizeMidiData(midi) {
    let derivedDuration = 0;
    const tracks = midi.tracks.map((track, index) => {
        const instrument = track.instrument || {};
        const noteChannels = Array.isArray(track.notes)
            ? track.notes
                .map(note => Number.isFinite(note?.channel) ? Math.max(0, Math.min(15, Math.round(note.channel))) : null)
                .filter(channel => channel !== null)
            : [];
        const inferredNoteChannel = noteChannels.length
            ? noteChannels.reduce((counts, channel) => {
                counts.set(channel, (counts.get(channel) || 0) + 1);
                return counts;
            }, new Map())
            : null;
        const dominantNoteChannel = inferredNoteChannel
            ? Array.from(inferredNoteChannel.entries()).sort((a, b) => b[1] - a[1])[0]?.[0]
            : null;
        const channel = Number.isFinite(track.channel)
            ? Math.max(0, Math.min(15, Math.round(track.channel)))
            : (Number.isFinite(instrument.channel)
                ? Math.max(0, Math.min(15, Math.round(instrument.channel)))
                : (Number.isFinite(dominantNoteChannel) ? dominantNoteChannel : index));

        const notes = track.notes
            .filter(note => Number.isFinite(note.time) && Number.isFinite(note.duration))
            .map(note => ({
                time: note.time,
                duration: note.duration,
                midi: note.midi,
                velocity: Number.isFinite(note.velocity) ? note.velocity : 0.8
            }));

        if (notes.length) {
            const lastEvent = notes[notes.length - 1];
            derivedDuration = Math.max(derivedDuration, lastEvent.time + lastEvent.duration);
        }

        return {
            index,
            name: track.name && track.name.trim() ? track.name.trim() : `Track ${index + 1}`,
            program: clampProgram(instrument.number),
            instrumentName: instrument.name || "",
            channel,
            notes
        };
    }).filter(track => track.notes.length > 0);

    const tempos = Array.isArray(midi.header?.tempos)
        ? midi.header.tempos.map((tempo) => ({
            bpm: Number.isFinite(tempo.bpm) ? tempo.bpm : null,
            time: Number.isFinite(tempo.time) ? tempo.time : null
        })).filter(item => item.bpm !== null && item.time !== null)
        : [];

    const songDuration = Number.isFinite(midi.duration) && midi.duration > 0
        ? midi.duration
        : derivedDuration;

    return {
        name: midi.name || "",
        duration: songDuration,
        tracks,
        tempos
    };
}

function renderInstrumentMenus() {
    instrumentGrid.innerHTML = "";
    trackVisualState.clear();
    playableTracks.forEach(track => {
        const channel = track.channelNumber ?? track.channel ?? trackChannels.get(track.slot) ?? 0;
        const trackLabelNumber = Number.isFinite(track.index) ? (track.index + 1) : (track.slot + 1);
        const card = document.createElement("div");
        card.className = "track-row";

        const meter = document.createElement("div");
        meter.className = "track-meter";
        const meterFill = document.createElement("div");
        meterFill.className = "track-meter__fill";
        const meterLabel = document.createElement("div");
        meterLabel.className = "track-meter__label";
        meterLabel.textContent = `${track.name} (Track ${trackLabelNumber}, Ch ${channel + 1})`;
        meter.appendChild(meterFill);
        meter.appendChild(meterLabel);

        const select = document.createElement("select");
        if (channel === GM_PERCUSSION_CHANNEL) {
            const percussionOption = document.createElement("option");
            percussionOption.value = buildInstrumentOptionValue(GM_PERCUSSION_BANK, 0);
            percussionOption.textContent = "128:000 - Percussion";
            select.appendChild(percussionOption);
        }
        GM_INSTRUMENTS.forEach((instrumentName, programNumber) => {
            const option = document.createElement("option");
            option.value = buildInstrumentOptionValue(GM_MELODIC_BANK, programNumber);
            option.textContent = `${programNumber.toString().padStart(3, "0")} - ${instrumentName}`;
            select.appendChild(option);
        });
        select.value = buildInstrumentOptionValue(
            getTrackBank(track.slot, channel),
            trackPrograms.get(track.slot) ?? 0
        );
        select.addEventListener("change", () => {
            const nextSelection = parseInstrumentOptionValue(select.value, channel);
            trackPrograms.set(track.slot, nextSelection.program);
            trackBanks.set(track.slot, nextSelection.bank);
            const channelNumber = trackChannels.get(track.slot);
            if (channelNumber !== undefined) {
                queueProgramChange(track.slot, channelNumber, nextSelection.program, nextSelection.bank);
            }
            setStatus(`Instrument preference stored for ${track.name}`, false);
            if (pendingArrangementRefresh) {
                clearTimeout(pendingArrangementRefresh);
                pendingArrangementRefresh = null;
            }
            applyAllProgramOverrides();
            queueCloudSettingsSave();
        });

        const volumeWrap = document.createElement("div");
        volumeWrap.className = "track-volume";
        const volumeLabel = document.createElement("span");
        volumeLabel.className = "track-volume__label";
        volumeLabel.textContent = "Volume";
        const volumeValue = document.createElement("span");
        volumeValue.className = "track-volume__value";
        const initialVolume = clampTrackVolume(trackVolumes.get(track.slot) ?? 1);
        volumeValue.textContent = formatTrackVolumeLabel(initialVolume);
        const volumeInput = document.createElement("input");
        volumeInput.type = "range";
        volumeInput.min = TRACK_VOLUME_RANGE.min.toString();
        volumeInput.max = TRACK_VOLUME_RANGE.max.toString();
        volumeInput.step = "0.01";
        volumeInput.value = initialVolume.toString();
        volumeInput.style.setProperty("--volume-fill", `${(initialVolume * 100).toFixed(0)}%`);
        let pendingVolumeRefresh = false;
        volumeInput.addEventListener("input", () => {
            const nextValue = clampTrackVolume(Number(volumeInput.value));
            trackVolumes.set(track.slot, nextValue);
            volumeValue.textContent = formatTrackVolumeLabel(nextValue);
            volumeInput.style.setProperty("--volume-fill", `${(nextValue * 100).toFixed(0)}%`);
            const channelNumber = trackChannels.get(track.slot);
            const liveOk = Number.isFinite(channelNumber)
                && typeof fluidRenderer?.setChannelVolume === "function"
                && fluidRenderer.setChannelVolume(channelNumber, nextValue * 127);
            if (!liveOk) {
                pendingVolumeRefresh = true;
                setStatus("Live volume not available; change will apply next render.", true);
            } else {
                pendingVolumeRefresh = false;
                applyAllChannelVolumes();
            }
        });
        volumeInput.addEventListener("change", () => {
            pendingVolumeRefresh = false;
            queueCloudSettingsSave();
        });
        volumeWrap.appendChild(volumeInput);
        volumeWrap.appendChild(volumeLabel);
        volumeWrap.appendChild(volumeValue);

        const transposeWrap = document.createElement("div");
        transposeWrap.className = "track-transpose";
        const initialTranspose = clampTrackTransposeValue(trackTransposes.get(track.slot) ?? 0, 0);
        const transposeDown = document.createElement("button");
        transposeDown.type = "button";
        transposeDown.title = "Transpose down";
        transposeDown.className = "track-transpose__button";
        transposeDown.textContent = "-";
        const trackTransposeInput = document.createElement("input");
        trackTransposeInput.type = "number";
        trackTransposeInput.min = TRANSPOSE_LIMITS.min.toString();
        trackTransposeInput.max = TRANSPOSE_LIMITS.max.toString();
        trackTransposeInput.step = "1";
        trackTransposeInput.value = initialTranspose.toString();
        const transposeUp = document.createElement("button");
        transposeUp.type = "button";
        transposeUp.title = "Transpose up";
        transposeUp.className = "track-transpose__button";
        transposeUp.textContent = "+";
        const applyTrackTranspose = (nextValue) => {
            trackTransposes.set(track.slot, nextValue);
            trackTransposeInput.value = nextValue.toString();
            const statusMessage = `Track transpose updated: ${track.name} ${nextValue >= 0 ? "+" : ""}${nextValue}`;
            const channelNumber = track.channelNumber ?? track.channel ?? trackChannels.get(track.slot) ?? 0;
            if (channelNumber === GM_PERCUSSION_CHANNEL) {
                scheduleArrangementRefresh(statusMessage);
            } else {
                applyActiveTuning();
                setStatus(statusMessage, false);
            }
            queueCloudSettingsSave();
        };
        trackTransposeInput.addEventListener("change", () => {
            const nextValue = clampTrackTransposeValue(Number.parseInt(trackTransposeInput.value, 10), initialTranspose);
            applyTrackTranspose(nextValue);
        });
        transposeUp.addEventListener("click", () => {
            const nextValue = clampTrackTransposeValue((trackTransposes.get(track.slot) ?? 0) + 1, initialTranspose);
            applyTrackTranspose(nextValue);
        });
        transposeDown.addEventListener("click", () => {
            const nextValue = clampTrackTransposeValue((trackTransposes.get(track.slot) ?? 0) - 1, initialTranspose);
            applyTrackTranspose(nextValue);
        });
        transposeWrap.appendChild(transposeDown);
        transposeWrap.appendChild(trackTransposeInput);
        transposeWrap.appendChild(transposeUp);

        trackVisualState.set(track.slot, {
            notes: Array.isArray(track.notes) ? track.notes : [],
            element: card,
            meterFill,
            level: 0
        });

        const controlRow = document.createElement("div");
        controlRow.className = "track-controls";
        const controlStack = document.createElement("div");
        controlStack.className = "track-stack track-stack--instrument";
        controlStack.appendChild(meter);
        controlStack.appendChild(select);
        controlStack.appendChild(volumeWrap);
        controlRow.appendChild(controlStack);
        controlRow.appendChild(transposeWrap);
        card.appendChild(controlRow);
        instrumentGrid.appendChild(card);
    });
}

async function play() {
    if (!currentSong) {
        return;
    }
    isUserScrubbing = false;
    console.log("[Play] Clicked");
    try {
        await ensureAudioReady();
        console.log("[Play] Audio context state:", getAudioContext().state);
    } catch (error) {
        console.error("Unable to start audio context:", error);
        setStatus("Browser blocked audio playback. Click the page and try again.", true);
        return;
    }

    console.log("[Play] isPrepared:", isPrepared);
    if (!isPrepared) {
        setStatus("Load a MIDI file to begin.", true);
        return;
    }

    if (isPlaying) {
        return;
    }

    const offsetToUse = pauseOffset;
    applyAllProgramOverrides();
    const scheduled = await scheduleNotesFromOffset(offsetToUse);
    if (!scheduled) {
        console.warn("[Play] No schedulable notes");
        return;
    }
    setTimeout(() => {
        applyAllProgramOverrides();
        applyAllChannelVolumes();
    }, 60);
    isPlaying = true;
    pauseOffset = 0;
    startProgressUpdates();
    setStatus("Playing...", false);
}

function pausePlayback() {
    if (!isPlaying) {
        return;
    }
    fluidRenderer.pause();
    const ctx = audioContext;
    const duration = currentSong?.duration || 0;
    const elapsed = ctx ? Math.max(0, ctx.currentTime - playbackStartTime) : pauseOffset;
    pauseOffset = Math.min(duration, elapsed);
    playbackStartTime = ctx ? ctx.currentTime - pauseOffset : 0;
    stopProgressUpdates(false);
    isPlaying = false;
    setStatus("Paused", false);
}

function stopPlayback(autoTriggered) {
    if (!currentSong) {
        return;
    }
    isPlaying = false;
    pauseOffset = 0;
    playbackStartTime = 0;
    isUserScrubbing = false;
    fluidRenderer.stop();
    fluidRenderer.reapplyTuning();
    applyTempoChange();
    stopProgressUpdates(true);
    resetTransportUi();
    if (recordingActive) {
        stopRecordingSession(true);
    }
    console.log(autoTriggered ? "[Play] Auto stop" : "[Play] Stop requested");
    setStatus(autoTriggered ? "Playback complete" : "Stopped", false);
}

function resetPlaybackState() {
    fluidRenderer.stop();
    stopProgressUpdates(true);
    isPlaying = false;
    pauseOffset = 0;
    isPrepared = false;
    lastProgressUpdateTime = 0;
}

function enableTransportButtons(enabled) {
    playButton.disabled = !enabled;
    pauseButton.disabled = !enabled;
    stopButton.disabled = !enabled;
    if (recordButton) {
        recordButton.disabled = !enabled;
    }
}

function resetTransportUi() {
    updateProgressUI(0, { overrideScrubLock: true });
}

function startProgressUpdates() {
    cancelAnimationFrame(progressFrame);
    lastProgressUpdateTime = 0;
    const update = () => {
        if (!currentSong) {
            return;
        }
        const now = performance.now();
        if (now - lastProgressUpdateTime >= PROGRESS_MIN_INTERVAL_MS) {
            lastProgressUpdateTime = now;
            const duration = currentSong.duration || 0;
            const elapsed = isPlaying
                ? getElapsedPlaybackSeconds()
                : pauseOffset;
            updateProgressUI(Math.min(duration, elapsed));
        }
        if (isPlaying) {
            progressFrame = requestAnimationFrame(update);
        }
    };
    update();
}

function stopProgressUpdates(resetToStart) {
    cancelAnimationFrame(progressFrame);
    progressFrame = null;
    updateProgressUI(resetToStart ? 0 : pauseOffset, {
        overrideScrubLock: Boolean(resetToStart)
    });
}

function updateProgressUI(seconds, options = {}) {
    const { overrideScrubLock = false } = options;
    const duration = currentSong?.duration || 0;
    progressBar.min = "0";
    progressBar.max = duration.toString();
    progressBar.step = Math.max(0.01, duration / 2000 || 0.01).toString();
    if (overrideScrubLock) {
        isUserScrubbing = false;
    }
    if (!isUserScrubbing) {
        suppressProgressEvents = true;
        progressBar.value = Number.isFinite(seconds) ? seconds.toString() : "0";
        suppressProgressEvents = false;
    }
    const ratio = duration > 0 ? Math.max(0, Math.min(1, seconds / duration)) : 0;
    progressBar.style.setProperty("--progress-fill", `${(ratio * 100).toFixed(2)}%`);
    if (progressElapsed) {
        progressElapsed.textContent = formatDuration(seconds);
    }
    if (progressRemaining) {
        progressRemaining.textContent = `-${formatDuration(Math.max(0, duration - seconds))}`;
    }
    updateTrackActivityVisuals(seconds);
}

function getElapsedPlaybackSeconds() {
    if (!currentSong || !audioContext || !Number.isFinite(playbackStartTime)) {
        return 0;
    }
    const elapsed = Math.max(0, audioContext.currentTime - playbackStartTime);
    const duration = currentSong.duration || 0;
    return Math.min(duration, elapsed);
}

function setStatus(message, isError) {
    statusMessage.textContent = message;
    statusMessage.classList.toggle("error", Boolean(isError));
}

function setStatusProgress(fraction) {
    const clamped = Math.max(0, Math.min(1, Number.isFinite(fraction) ? fraction : 0));
    const widthValue = `${(clamped * 100).toFixed(0)}%`;
    if (statusProgressBar) {
        statusProgressBar.style.width = widthValue;
    }
    if (titleAudioProgress) {
        titleAudioProgress.style.width = widthValue;
    }
}

function setLoadButtonEnabled(enabled) {
    if (!fileInput || !loadButton) {
        return;
    }
    fileInput.disabled = !enabled;
    loadButton.classList.toggle("is-disabled", !enabled);
    loadButton.setAttribute("aria-disabled", enabled ? "false" : "true");
}

setLoadButtonEnabled(false);
setStatus("Click Audio to begin.", false);
setStatusProgress(0);

function setSaveArrangementEnabled(enabled) {
    if (!saveArrangementButton) {
        return;
    }
    const canSave = Boolean(enabled && currentSong && currentMidiBuffer && currentSupabaseUser?.id && supabaseClient);
    saveArrangementButton.disabled = !canSave;
    saveArrangementButton.title = canSave
        ? "Save MIDI + settings to your account library"
        : "Sign in to enable arrangement saving";
}

function setSampleButtonEnabled(enabled) {
    if (!loadSampleButton) {
        return;
    }
    const allow = enabled && sampleMidiMap.size > 0;
    loadSampleButton.classList.toggle("is-disabled", !allow);
    loadSampleButton.setAttribute("aria-disabled", allow ? "false" : "true");
    loadSampleButton.disabled = !allow;
    if (sampleMidiSelect) {
        sampleMidiSelect.disabled = !allow;
    }
}

setSampleButtonEnabled(false);

async function loadSampleManifest() {
    if (sampleManifestLoaded) return;
    try {
        const response = await fetch(SAMPLE_MANIFEST_URL, { cache: "no-cache" });
        if (!response.ok) {
            throw new Error(`Manifest fetch failed (${response.status})`);
        }
        const data = await response.json();
        const resolved = (Array.isArray(data) ? data : []).map(item => ({
            ...item,
            url: resolveMidiAssetUrl(item?.url)
        }));
        populateSampleFolderSelect(resolved);
        populateSampleMidiSelect(resolved);
        sampleManifestLoaded = true;
        setSampleButtonEnabled(audioReady);
        if (sampleFolderSelect) {
            sampleFolderSelect.addEventListener("change", () => {
                const selected = sampleFolderSelect.value;
                const filtered = resolved.filter(item => {
                    const itemFolder = item.folder === "." ? "" : (item.folder || "");
                    if (selected === "__all__") return true;
                    if (selected === "__root__") return !itemFolder;
                    return itemFolder === selected;
                });
                populateSampleMidiSelect(filtered);
            });
        }
    } catch (error) {
        console.warn("Unable to load MIDI manifest:", error);
        setStatus("Included MIDI list unavailable.", true);
    }
}

function populateSampleFolderSelect(manifest) {
    if (!sampleFolderSelect) return;
    const folderSet = new Set();
    manifest.forEach(item => {
        const folder = item.folder === "." ? "" : (item.folder || "");
        folderSet.add(folder);
    });
    const folders = Array.from(folderSet).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    sampleFolderSelect.innerHTML = "";
    const allOption = document.createElement("option");
    allOption.value = "__all__";
    allOption.textContent = "All folders";
    sampleFolderSelect.appendChild(allOption);
    folders.forEach(folder => {
        const opt = document.createElement("option");
        opt.value = folder || "__root__";
        opt.textContent = folder ? folder.replace(/\//g, " / ") : "Root";
        sampleFolderSelect.appendChild(opt);
    });
    sampleFolderSelect.value = "__all__";
}

function populateSampleMidiSelect(manifest = SAMPLE_MIDIS) {
    if (!sampleMidiSelect) return;
    sampleMidiSelect.innerHTML = "";
    sampleMidiMap.clear();
    let firstValue = "";
    manifest.forEach((item) => {
        if (!item?.url || !item?.name) return;
        sampleMidiMap.set(item.id || item.url, item);
        const option = document.createElement("option");
        option.value = item.id || item.url;
        option.textContent = item.name;
        sampleMidiSelect.appendChild(option);
        if (!firstValue) {
            firstValue = option.value;
        }
    });
    if (firstValue) {
        sampleMidiSelect.value = firstValue;
    }
}

function setHelpVisibility(show, markSeen) {
    if (!helpBubbles) return;
    helpBubbles.classList.toggle("is-hidden", !show);
    helpBubbles.classList.toggle("is-shown", show);
    if (helpToggle) {
        helpToggle.classList.toggle("is-on", Boolean(show));
    }
    if (markSeen) {
        try {
            localStorage.setItem(HELP_SEEN_KEY, "1");
        } catch (_) {
            // ignore
        }
    }
}

function setInfoVisibility(show) {
    if (!infoBubbles) return;
    infoBubbles.classList.toggle("is-hidden", !show);
    infoBubbles.classList.toggle("is-shown", show);
}

// Show tips on first visit.
try {
    const seen = localStorage.getItem(HELP_SEEN_KEY);
    if (!seen) {
        setTimeout(() => setHelpVisibility(true, true), 300);
    }
} catch (_) {
    // ignore
}

async function loadSampleByRecord(sample) {
    setStatus(`Loading ${sample.name}...`, false);
    try {
        const response = await fetch(sample.url);
        if (!response.ok) {
            throw new Error(`Unable to load ${sample.name}.`);
        }
        const buffer = await response.arrayBuffer();
        await loadMidiFromBuffer(buffer, sample.name, {
            source_type: "sample",
            source_url: sample.url,
            sample_id: sample.id || sample.url,
            file_name: sample.name
        });
    } catch (error) {
        console.error(error);
        setStatus(error?.message || "Failed to load sample MIDI.", true);
    }
}

function showSampleModal() {
    if (!sampleModal) return;
    sampleModal.classList.remove("is-hidden");
    if (sampleMidiSelect && !sampleMidiSelect.disabled) {
        sampleMidiSelect.focus();
    }
}

function hideSampleModal() {
    if (!sampleModal) return;
    sampleModal.classList.add("is-hidden");
}

function setAudioEnabledState(enabled) {
    if (!enableAudioButton) {
        return;
    }
    const isEnabled = Boolean(enabled);
    enableAudioButton.classList.toggle("is-on", isEnabled);
    enableAudioButton.setAttribute("aria-pressed", isEnabled ? "true" : "false");
    if (titleText) {
        titleText.classList.toggle("is-audio-enabled", isEnabled);
    }
    if (enabled) {
        enableAudioButton.title = "Audio enabled";
    }
}

function queueProgramChange(trackIndex, channel, program, bank = getDefaultBankForChannel(channel)) {
    if (!Number.isFinite(channel)) {
        return;
    }
    pendingProgramUpdates.set(trackIndex, { channel, program, bank });
    const snapshotEntry = channelAssignmentsSnapshot.find(item => item.trackIndex === trackIndex);
    if (snapshotEntry) {
        snapshotEntry.program = program;
        snapshotEntry.bank = bank;
    }
    if (!programFlushHandle) {
        programFlushHandle = requestAnimationFrame(() => {
            programFlushHandle = null;
            pendingProgramUpdates.forEach(({ channel: queuedChannel, program: queuedProgram, bank: queuedBank }) => {
                fluidRenderer.programChange(queuedChannel, queuedProgram, queuedBank);
            });
            pendingProgramUpdates.clear();
            applyActiveTuning();
            applyAllChannelVolumes();
        });
    }
}

function handleLoadFailure() {
    currentSong = null;
    currentMidiBuffer = null;
    currentMidiSource = null;
    transformedMidiBuffer = null;
    arrangementDirty = false;
    playableTracks = [];
    trackPrograms.clear();
    trackBanks.clear();
    trackChannels.clear();
    trackVolumes.clear();
    trackTransposes.clear();
    trackVisualState.clear();
    pauseOffset = 0;
    isPlaying = false;
    isPrepared = false;
    baseTempoBpm = DEFAULT_TEMPO_BPM;
    currentTempoBpm = DEFAULT_TEMPO_BPM;
    currentTempoPercent = 100;
    currentSongBaseDuration = 0;
    updateTempoControlsState(false);
    stopProgressUpdates(true);
    fluidRenderer.stop();
    enableTransportButtons(false);
    songDisplay.value = "";
    setSongTitle("");
    instrumentGrid.innerHTML = "";
    setTuningStatus("12-TET active", false);
    setScaleControlsEnabled(false);
    setFavoritesControlsEnabled(false);
    currentSongDefaultPreset = null;
    syncFavoriteSelection("__default__");
    setSaveArrangementEnabled(false);
}

function setSongTitle(titleText) {
    if (!songTitle) return;
    const text = titleText || "";
    songTitle.textContent = text;
    songTitle.classList.toggle("is-hidden", text.length === 0);
}

function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function ensureAudioReady() {
    const pendingBootstrap = bootstrapPromise || Promise.resolve();
    const ctx = getAudioContext();
    if (audioReady && ctx.state === "running") {
        return pendingBootstrap.then(() => fluidRenderer.ensureInitialized(ctx)).then(() => {
            setStatusProgress(1);
            setLoadButtonEnabled(true);
            setSampleButtonEnabled(true);
        });
    }
    setStatus("Preparing audio...", false);
    setStatusProgress(0.35);
    const resumePromises = [ctx.resume()];
    return Promise.all(resumePromises).then(() => pendingBootstrap).then(() => {
        audioReady = true;
        setAudioEnabledState(true);
        return fluidRenderer.ensureInitialized(ctx);
    }).then(() => {
        setStatusProgress(1);
        setLoadButtonEnabled(true);
        setSampleButtonEnabled(true);
    });
}

function playConfirmationClick() {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.gain.value = 0.0001;
    osc.frequency.value = 880;
    osc.connect(gain).connect(ctx.destination);
    const now = ctx.currentTime;
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.25);
}

async function scheduleNotesFromOffset(offsetSeconds) {
    try {
        await fluidRenderer.playFrom(offsetSeconds);
        const ctx = getAudioContext();
        playbackStartTime = ctx.currentTime - offsetSeconds;
        logProgramAssignments(`playFrom offset ${offsetSeconds.toFixed(2)}`);
        return true;
    } catch (error) {
        console.error(error);
        setStatus(error.message || "Unable to start playback.", true);
        return false;
    }
}

function applyActiveTuning() {
    if (!fluidRenderer) {
        return;
    }
    const baseTable = Array.isArray(activeTuning.table) ? activeTuning.table : equalTemperamentTable;
    const effectiveTable = buildEffectiveTuningTable(baseTable, currentMode, currentTranspose);
    fluidRenderer.applyTuning(effectiveTable, activeTuning.name || "Custom Tuning");
    applyAllChannelTunings(effectiveTable, true);
    applyAllProgramOverrides();
    setTimeout(() => {
        applyAllChannelTunings(effectiveTable, true);
        applyAllProgramOverrides();
        applyAllChannelVolumes();
    }, 60);
    const statusLabel = activeTuning.id === DEFAULT_TUNING_ID ? "12-TET" : (activeTuning.name || "Custom");
    setTuningStatus(`${statusLabel} (${currentMode}, ${currentTranspose >= 0 ? "+" : ""}${currentTranspose})`, false);
    if (tuningSelect && tuningSelect.value !== activeTuning.id) {
        tuningSelect.value = activeTuning.id;
    }
}


function applyTransposeChange(value) {
    const clamped = clampTransposeValue(value);
    if (clamped === currentTranspose) {
        transposeInput.value = currentTranspose.toString();
        return;
    }
    currentTranspose = clamped;
    if (transposeInput) {
        transposeInput.value = clamped.toString();
    }
    updateTransposeStatus();
    applyActiveTuning();
    setStatus(`Transpose applied: ${clamped >= 0 ? "+" : ""}${clamped}`, false);
    queueCloudSettingsSave();
}

function updateModeStatus() {
    if (modeStatus) {
        modeStatus.textContent = `Mode: ${currentMode}`;
    }
    if (modeSelect && modeSelect.value !== currentMode) {
        modeSelect.value = currentMode;
    }
}

function updateTransposeStatus() {
    if (transposeStatus) {
        const sign = currentTranspose >= 0 ? "+" : "";
        transposeStatus.textContent = `${sign}${currentTranspose} semitone${Math.abs(currentTranspose) === 1 ? "" : "s"}`;
    }
}

function setScaleControlsEnabled(enabled) {
    if (modeSelect) {
        modeSelect.disabled = !enabled;
    }
    if (transposeInput) {
        transposeInput.disabled = !enabled;
    }
    if (transposeDecrement) {
        transposeDecrement.disabled = !enabled;
    }
    if (transposeIncrement) {
        transposeIncrement.disabled = !enabled;
    }
    if (transposeResetButton) {
        transposeResetButton.disabled = !enabled;
    }
}

function setFavoritesControlsEnabled(enabled) {
    const hasSong = Boolean(enabled && currentSong);
    if (favoritesSelectScale) {
        favoritesSelectScale.disabled = !hasSong;
    }
    if (favoritesSelectInst) {
        favoritesSelectInst.disabled = !hasSong;
    }
    if (favoritesAddScale) {
        favoritesAddScale.disabled = !hasSong;
    }
    if (favoritesAddInst) {
        favoritesAddInst.disabled = !hasSong;
    }
    if (favoritesRemoveScale) {
        favoritesRemoveScale.disabled = !hasSong;
    }
    if (favoritesRemoveInst) {
        favoritesRemoveInst.disabled = !hasSong;
    }
}

function clampTransposeValue(value) {
    const min = TRANSPOSE_LIMITS.min;
    const max = TRANSPOSE_LIMITS.max;
    if (!Number.isFinite(value)) {
        return currentTranspose;
    }
    return Math.max(min, Math.min(max, Math.round(value)));
}

function clampTrackTransposeValue(value, fallback = 0) {
    const min = TRANSPOSE_LIMITS.min;
    const max = TRANSPOSE_LIMITS.max;
    if (!Number.isFinite(value)) {
        return fallback;
    }
    return Math.max(min, Math.min(max, Math.round(value)));
}

function clampTrackVolume(value) {
    if (!Number.isFinite(value)) {
        return 1;
    }
    return Math.max(TRACK_VOLUME_RANGE.min, Math.min(TRACK_VOLUME_RANGE.max, value));
}

function clampVelocity(value) {
    if (!Number.isFinite(value)) {
        return 0;
    }
    return Math.max(0, Math.min(1, value));
}

function formatTrackVolumeLabel(value) {
    const percent = Math.round(clampTrackVolume(value) * 100);
    return ` ${percent}%`;
}

function formatTrackTransposeLabel(value) {
    const sign = value >= 0 ? "+" : "";
    return ` ${sign}${value}`;
}

function clampMidiValue(value) {
    return Math.max(0, Math.min(127, Math.round(value)));
}

function applyModeToMidiValue(midiValue, modeName) {
    const adjustments = MODE_ADJUSTMENTS[modeName] || MODE_ADJUSTMENTS[DEFAULT_MODE];
    let pitchClass = ((midiValue % 12) + 12) % 12;
    let octave = Math.floor(midiValue / 12);
    const adjustment = adjustments[pitchClass] ?? 0;
    pitchClass += adjustment;
    while (pitchClass < 0) {
        pitchClass += 12;
        octave -= 1;
    }
    while (pitchClass >= 12) {
        pitchClass -= 12;
        octave += 1;
    }
    return octave * 12 + pitchClass;
}

function buildEffectiveTuningTable(baseTable, modeName, transposeSemitones) {
    const table = new Array(128);
    const adjustments = MODE_ADJUSTMENTS[modeName] || MODE_ADJUSTMENTS[DEFAULT_MODE];
    const shiftCents = (Number.isFinite(transposeSemitones) ? transposeSemitones : 0) * 100;
    for (let note = 0; note < 128; note++) {
        const baseCents = baseTable[note] ?? note * 100;
        const pitchClass = ((note % 12) + 12) % 12;
        const modeShift = (adjustments[pitchClass] ?? 0) * 100;
        table[note] = baseCents + shiftCents + modeShift;
    }
    return table;
}

function buildShiftedTuningTable(baseTable, transposeSemitones) {
    if (!Number.isFinite(transposeSemitones) || transposeSemitones === 0) {
        return baseTable;
    }
    const shiftCents = transposeSemitones * 100;
    const table = new Array(128);
    for (let note = 0; note < 128; note++) {
        const baseCents = baseTable[note] ?? note * 100;
        table[note] = baseCents + shiftCents;
    }
    return table;
}

function applyAllChannelTunings(baseTable, forceApply = false) {
    if (!fluidRenderer || !trackChannels.size) {
        return;
    }
    const table = Array.isArray(baseTable) ? baseTable : equalTemperamentTable;
    trackChannels.forEach((channel, trackIndex) => {
        const trackTranspose = trackTransposes.get(trackIndex) ?? 0;
        const channelTable = buildShiftedTuningTable(table, trackTranspose);
        if (typeof fluidRenderer.applyTuningForChannel === "function") {
            fluidRenderer.applyTuningForChannel(channel, channelTable, forceApply);
        }
    });
}

function capturePlaybackState() {
    if (!currentSong) {
        return { wasPlaying: false, resumePoint: 0 };
    }
    const wasPlaying = isPlaying;
    const resumePoint = wasPlaying
        ? Math.max(0, Math.min(getElapsedPlaybackSeconds(), currentSong.duration || getElapsedPlaybackSeconds()))
        : pauseOffset;
    if (wasPlaying) {
        fluidRenderer.pause();
    }
    if (!wasPlaying) {
        fluidRenderer.silence();
    }
    isPlaying = false;
    pauseOffset = resumePoint;
    stopProgressUpdates(false);
    updateProgressUI(resumePoint, { overrideScrubLock: true });
    return { wasPlaying, resumePoint };
}

async function rebuildTransformedPlayback(message) {
    if (!baseMidiBuffer || !channelAssignmentsSnapshot.length) {
        return;
    }
    setScaleControlsEnabled(false);
    setStatus("Updating arrangement...", false);
    const state = capturePlaybackState();
    try {
        const playableBuffer = await buildTransformedMidiBuffer(baseMidiBuffer);
        transformedMidiBuffer = playableBuffer.slice(0);
        arrangementDirty = true;
        await fluidRenderer.loadMidi(playableBuffer, currentSongBaseDuration, channelAssignmentsSnapshot, tempoSnapshot);
        await fluidRenderer.waitForTotalTicks?.();
        fluidRenderer.setLoopEnabled(loopToggle.checked);
        applyActiveTuning();
        applyAllProgramOverrides();
        applyAllChannelVolumes();
        isPrepared = true;

        if (state.wasPlaying) {
            // For active playback, seek then resume to avoid resetting to start.
            await fluidRenderer.seek(state.resumePoint);
            applyAllProgramOverrides();
            applyAllChannelVolumes();
            fluidRenderer.resumePlayback();
            const ctx = getAudioContext();
            playbackStartTime = ctx.currentTime - state.resumePoint;
            isPlaying = true;
            pauseOffset = 0;
            updateProgressUI(state.resumePoint, { overrideScrubLock: true });
            startProgressUpdates();
        } else {
            // When paused, just seek and keep transport paused.
            await fluidRenderer.seek(state.resumePoint);
            pauseOffset = state.resumePoint;
            updateProgressUI(state.resumePoint, { overrideScrubLock: true });
            logProgramAssignments("post-seek (paused)");
        }
        setStatus(message || "Arrangement updated.", false);
    } catch (error) {
        console.error("Failed to rebuild arrangement:", error);
        setStatus("Unable to update arrangement.", true);
    } finally {
        setScaleControlsEnabled(Boolean(currentSong));
    }
}

function scheduleArrangementRefresh(label) {
    if (pendingArrangementRefresh) {
        return;
    }
    pendingArrangementRefresh = setTimeout(() => {
        pendingArrangementRefresh = null;
        rebuildTransformedPlayback(label || "Arrangement updated");
    }, 50);
}

async function sanitizeMidiForPlayback(arrayBuffer) {
    if (typeof Midi === "undefined") {
        return arrayBuffer;
    }
    try {
        const midi = new Midi(arrayBuffer);
        midi.tracks = midi.tracks.filter(track => Array.isArray(track.notes) && track.notes.length > 0);
        midi.tracks.forEach(stripProgramAndBankEvents);
        const sanitized = midi.toArray();
        try {
            // Double-check no program changes remain after serialization.
            const verify = new Midi(sanitized);
            verify.tracks = verify.tracks.filter(track => Array.isArray(track.notes) && track.notes.length > 0);
            verify.tracks.forEach(stripProgramAndBankEvents);
            return verify.toArray();
        } catch {
            return sanitized;
        }
    } catch (error) {
        console.warn("Failed to sanitize MIDI buffer:", error);
        return arrayBuffer;
    }
}

async function buildTransformedMidiBuffer(arrayBuffer) {
    if (typeof Midi === "undefined") {
        return arrayBuffer.slice(0);
    }
    try {
        const midi = new Midi(arrayBuffer);
        midi.tracks = midi.tracks.filter(track => Array.isArray(track.notes) && track.notes.length > 0);
        midi.tracks.forEach((track, idx) => {
            stripProgramAndBankEvents(track);
            const assignment = channelAssignmentsSnapshot[idx];
            const slot = assignment?.trackIndex ?? idx;
            const assignedChannel = assignment?.channel ?? trackChannels.get(slot) ?? (slot % 16);
            const trackTranspose = trackTransposes.get(slot) ?? 0;
            const trackVolume = clampTrackVolume(trackVolumes.get(slot) ?? 1);
            track.channel = assignedChannel;
            if (track.instrument && typeof track.instrument === "object") {
                track.instrument.channel = assignedChannel;
                const programOverride = trackPrograms.get(slot);
                if (Number.isFinite(programOverride)) {
                    track.instrument.number = programOverride;
                }
            }
            const notes = Array.isArray(track.notes) ? track.notes : [];
            notes.forEach(note => {
                if (!Number.isFinite(note?.midi)) {
                    return;
                }
                const remapped = clampMidiValue(note.midi + trackTranspose);
                note.midi = remapped;
                note.channel = assignedChannel;
                if (Number.isFinite(note.velocity)) {
                    note.velocity = clampVelocity(note.velocity * trackVolume);
                }
            });
            if (Array.isArray(track.events)) {
                track.events.forEach(event => {
                    if (!event || typeof event.type !== "string") {
                        return;
                    }
                    const type = event.type.toLowerCase();
                    event.channel = assignedChannel;
                    if (type === "noteon" || type === "noteoff") {
                        const original = Number.isFinite(event.noteNumber) ? event.noteNumber : event.midi;
                        if (Number.isFinite(original)) {
                            const remapped = clampMidiValue(original + trackTranspose);
                            event.noteNumber = remapped;
                            event.midi = remapped;
                        }
                        if (Number.isFinite(event.velocity)) {
                            event.velocity = clampVelocity(event.velocity * trackVolume);
                        }
                    }
                });
            }
        });
        return midi.toArray();
    } catch (error) {
        console.warn("Failed to transform MIDI buffer:", error);
        return arrayBuffer.slice(0);
    }
}

function stripProgramAndBankEvents(track) {
    if (!track) {
        return;
    }
    if (track.instrument && typeof track.instrument === "object") {
        track.instrument.number = 0;
        track.instrument.name = track.instrument.name || "";
        track.instrument.family = track.instrument.family || "";
    }
    if (Number.isFinite(track.program)) {
        track.program = 0;
    }
    if (Array.isArray(track.events)) {
        track.events = track.events.filter(event => {
            if (!event || typeof event.type !== "string") {
                return true;
            }
            const type = event.type.toLowerCase();
            const subtype = (event.subtype || event.subType || "").toLowerCase();
            if (type === "programchange" || type === "program_change" || subtype === "programchange" || Number.isFinite(event.programNumber)) {
                return false;
            }
            const isController = type === "controller"
                || type === "controlchange"
                || type === "control_change"
                || subtype === "controller"
                || subtype === "controlchange"
                || subtype === "control_change";
            if (isController) {
                const controller = [event.controllerType, event.controllerNumber, event.controller]
                    .find(value => Number.isFinite(value));
                if (controller === 0 || controller === 7 || controller === 11 || controller === 32) {
                    return false;
                }
            }
            return true;
        });
    }
    if (track.controlChanges && typeof track.controlChanges === "object") {
        ["0", "7", "11", "32"].forEach(key => {
            if (track.controlChanges[key]) {
                track.controlChanges[key] = [];
            }
        });
    }
    if (Array.isArray(track.programChanges)) {
        track.programChanges = [];
    }
}

async function loadScalaManifest() {
    if (!tuningSelect) {
        return;
    }
    const sources = getScalaSources();
    let lastError = null;
    setTuningStatus("Loading tuning list…", false);
    tuningSelect.disabled = true;
    if (tuningResetButton) tuningResetButton.disabled = true;
    for (const source of sources) {
        try {
            console.log("[Scala] Loading manifest", source.manifestUrl);
            const response = await fetch(source.manifestUrl);
            if (!response.ok) {
                throw new Error("Unable to load tuning manifest.");
            }
            const data = await response.json();
            const defaultPrefix = source?.label === "lite"
                ? DEFAULT_CONFIG.scalaLiteBaseUrl
                : DEFAULT_CONFIG.scalaFullBaseUrl;
            tuningManifest = (Array.isArray(data) ? data : []).map(entry => {
                const pathStr = entry.path || "";
                const resolvedPath = resolveAssetPath(pathStr, source.rootPrefix, defaultPrefix);
                const parts = pathStr.split("/");
                parts.pop();
                let computedFolder = parts.join("/");
                if (defaultPrefix && computedFolder.startsWith(defaultPrefix)) {
                    computedFolder = computedFolder.slice(defaultPrefix.length);
                }
                const folder = entry.folder ?? computedFolder;
                return { ...entry, path: resolvedPath, folder };
            });
            activeScalaSource = source;
            populateTuningFolderSelect();
            populateTuningOptions();
            const sourceLabel = source?.label ? ` (${source.label} Scala)` : "";
            setTuningStatus(`Choose a tuning or keep 12-TET.${sourceLabel}`, false);
            console.log("[Scala] Active source", source);
            tuningSelect.disabled = false;
            if (tuningFolderSelect) tuningFolderSelect.disabled = false;
            // Keep reset button disabled until a non-default tuning is selected
            if (tuningResetButton) tuningResetButton.disabled = true;
            return;
        } catch (error) {
            console.warn("Failed to load tuning source", source?.label || source?.manifestUrl, error);
            lastError = error;
        }
    }
    console.error("Failed to load tuning manifest:", lastError);
    setTuningStatus("Unable to load tuning list.", true);
    tuningSelect.disabled = true;
    if (tuningResetButton) tuningResetButton.disabled = true;
}

function populateTuningFolderSelect() {
    if (!tuningFolderSelect) return;
    const folderSet = new Set();
    tuningManifest.forEach(entry => folderSet.add(entry.folder || ""));
    const folders = Array.from(folderSet).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    tuningFolderSelect.innerHTML = "";
    const allOpt = document.createElement("option");
    allOpt.value = "__all__";
    allOpt.textContent = "All folders";
    tuningFolderSelect.appendChild(allOpt);
    folders.forEach(folder => {
        const opt = document.createElement("option");
        opt.value = folder || "__root__";
        let display = folder ? folder.replace(/\//g, " / ") : "Root";
        const activePrefix = getScalaRootPrefix();
        if (folder && activePrefix && folder.startsWith(activePrefix)) {
            const trimmed = folder.slice(activePrefix.length);
            display = trimmed ? trimmed.replace(/\//g, " / ") : "Root";
        }
        opt.textContent = display;
        tuningFolderSelect.appendChild(opt);
    });
    tuningFolderSelect.value = "__all__";
}

function populateTuningOptions() {
    filterTuningsByFolder(tuningFolderSelect?.value || "__all__");
}

function filterTuningsByFolder(folderValue) {
    if (!tuningSelect) return;
    const existing = tuningSelect.querySelectorAll("option[value]:not([value='__equal__'])");
    existing.forEach(option => option.remove());
    const fragment = document.createDocumentFragment();
    const selectedValue = tuningSelect.value;
    let nextSelection = selectedValue;
    tuningManifest.forEach(entry => {
        if (!entry?.path) {
            return;
        }
        const entryFolder = entry.folder || "";
        if (folderValue && folderValue !== "__all__") {
            if (folderValue === "__root__" && entryFolder) return;
            if (folderValue !== "__root__" && entryFolder !== folderValue) return;
        }
        const option = document.createElement("option");
        option.value = entry.path;
        option.textContent = entry.name || entry.path.split("/").pop();
        fragment.appendChild(option);
        if (selectedValue === entry.path) {
            nextSelection = selectedValue;
        }
    });
    tuningSelect.appendChild(fragment);
    if (nextSelection && tuningSelect.querySelector(`option[value="${nextSelection}"]`)) {
        tuningSelect.value = nextSelection;
    } else {
        tuningSelect.value = "__equal__";
        handleTuningSelection("__equal__");
    }
}

async function handleTuningSelection(value) {
    if (!value || value === DEFAULT_TUNING_ID) {
        activeTuning = {
            id: DEFAULT_TUNING_ID,
            name: "12-TET",
            table: equalTemperamentTable
        };
        applyActiveTuning();
        if (tuningResetButton) {
            tuningResetButton.disabled = true;
        }
        queueCloudSettingsSave();
        return;
    }
    setTuningStatus("Loading tuning…", false);
    try {
        const tuning = await fetchScalaTuning(value);
        activeTuning = tuning;
        applyActiveTuning();
        if (tuningResetButton) {
            tuningResetButton.disabled = false;
        }
        queueCloudSettingsSave();
    } catch (error) {
        console.error("Failed to load tuning:", error);
        setTuningStatus(error && error.message ? error.message : "Failed to load tuning.", true);
        if (tuningSelect) {
            tuningSelect.value = activeTuning.id;
        }
        if (tuningResetButton && activeTuning.id === DEFAULT_TUNING_ID) {
            tuningResetButton.disabled = true;
        }
    }
}

async function fetchScalaTuning(path) {
    if (tuningCache.has(path)) {
        return tuningCache.get(path);
    }
    const response = await fetch(encodeURI(path));
    if (!response.ok) {
        throw new Error(`Unable to load ${path}`);
    }
    const text = await response.text();
    const parsed = parseScala(text);
    const table = buildTuningTable(parsed.cents);
    const tuning = {
        id: path,
        name: parsed.name || parsed.description || path.split("/").pop(),
        table,
        scalaText: text,
        scaleCents: parsed.cents
    };
    tuningCache.set(path, tuning);
    return tuning;
}

function getScalaRootPrefix() {
    return activeScalaSource?.rootPrefix || normalizeBaseUrl(DEFAULT_CONFIG.scalaFullBaseUrl, DEFAULT_CONFIG.scalaFullBaseUrl);
}

function initializeScalaPreference() {
    const stored = (() => {
        try {
            return localStorage.getItem(SCALA_PREF_KEY);
        } catch (_) {
            return null;
        }
    })();
    scalaPreference = stored === "full" ? "full" : "lite";
    updateScalaToggleUI();
    if (tuningSourceToggle) {
        tuningSourceToggle.addEventListener("click", () => {
            setScalaPreference(scalaPreference === "full" ? "lite" : "full");
            loadScalaManifest();
        });
    }
}

function setScalaPreference(pref) {
    scalaPreference = pref === "full" ? "full" : "lite";
    try {
        localStorage.setItem(SCALA_PREF_KEY, scalaPreference);
    } catch (_) {
        // ignore storage failures
    }
    updateScalaToggleUI();
    queueCloudSettingsSave();
}

function updateScalaToggleUI() {
    if (!tuningSourceToggle) return;
    const isFull = scalaPreference === "full";
    tuningSourceToggle.textContent = isFull ? "Switch to Lite Archive" : "Switch to Full Archive";
    tuningSourceToggle.setAttribute("aria-pressed", isFull ? "true" : "false");
}

function getScalaSources() {
    const base = Array.isArray(SCALA_SOURCES) ? [...SCALA_SOURCES] : [];
    if (!base.length) {
        return [];
    }
    const lite = base.find(src => src.label === "lite");
    const full = base.find(src => src.label === "full");
    const others = base.filter(src => src.label !== "lite" && src.label !== "full");
    const ordered = [];
    if (scalaPreference === "full") {
        if (full) ordered.push(full);
        ordered.push(...others);
        if (lite) ordered.push(lite);
    } else {
        if (lite) ordered.push(lite);
        ordered.push(...others);
        if (full) ordered.push(full);
    }
    return ordered;
}

function parseScala(content) {
    if (content && content.charCodeAt(0) === 0xfeff) {
        content = content.slice(1);
    }
    const lines = content.split(/\r\n|\n|\r/);
    let description = "";
    let idx = 0;
    while (idx < lines.length) {
        const trimmed = lines[idx].trim();
        if (!trimmed) {
            idx++;
            continue;
        }
        if (trimmed.startsWith("!")) {
            if (!description && trimmed.length > 1) {
                description = trimmed.slice(1).trim();
            }
            idx++;
            continue;
        }
        break;
    }
    if (idx >= lines.length) {
        throw new Error("Invalid Scala file: missing pitch count.");
    }
    let countLine = "";
    while (idx < lines.length && !countLine) {
        countLine = stripScalaComment(lines[idx++]);
        if (countLine && countLine.charCodeAt(0) === 0xfeff) {
            countLine = countLine.slice(1);
        }
        if (countLine && countLine.length && Number.isFinite(Number.parseInt(countLine, 10))) {
            break;
        }
        if (countLine) {
            description = description || countLine;
            countLine = "";
        }
    }
    const countToken = countLine ? countLine.split(/\s+/)[0] : "";
    const count = Number.parseInt(countToken, 10);
    if (!Number.isFinite(count) || count <= 0) {
        throw new Error("Invalid Scala file: pitch count is not valid.");
    }
    const cents = [];
    while (idx < lines.length && cents.length < count) {
        const raw = stripScalaComment(lines[idx++]);
        if (!raw) {
            continue;
        }
        const token = raw.split(/[\s;]+/)[0];
        if (!token) {
            continue;
        }
        cents.push(parseScalaValue(token));
    }
    if (!cents.length) {
        throw new Error("Scala file does not contain pitch data.");
    }
    if (cents[0] !== 0) {
        cents.unshift(0);
    }
    if (cents.length < 2 || cents[cents.length - 1] <= 0) {
        cents.push(1200);
    }
    return { cents, description };
}

function stripScalaComment(line) {
    if (typeof line !== "string") {
        return "";
    }
    let trimmed = line;
    const bangIndex = trimmed.indexOf("!");
    if (bangIndex >= 0) {
        trimmed = trimmed.slice(0, bangIndex);
    }
    const semicolonIndex = trimmed.indexOf(";");
    if (semicolonIndex >= 0) {
        trimmed = trimmed.slice(0, semicolonIndex);
    }
    return trimmed.trim();
}

function parseScalaValue(token) {
    if (!token) {
        return 0;
    }
    if (token.includes("/")) {
        const [numStr, denStr] = token.split("/");
        const num = Number(numStr);
        const den = Number(denStr);
        if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) {
            return 0;
        }
        return 1200 * Math.log2(num / den);
    }
    const value = Number(token);
    if (Number.isFinite(value)) {
        return value;
    }
    return 0;
}

function buildTuningTable(scaleCents) {
    if (!Array.isArray(scaleCents) || scaleCents.length < 2) {
        return buildEqualTemperamentTable(12);
    }
    const period = scaleCents[scaleCents.length - 1] || 1200;
    const degrees = scaleCents.length - 1;
    const table = new Array(128);
    for (let note = 0; note < 128; note++) {
        const relative = note - BASE_TUNING_NOTE;
        const octave = Math.floor(relative / degrees);
        const degree = ((relative % degrees) + degrees) % degrees;
        table[note] = (BASE_TUNING_NOTE * 100) + octave * period + scaleCents[degree];
    }
    return table;
}

function setTuningStatus(message, isError) {
    if (!tuningStatus) {
        return;
    }
    tuningStatus.textContent = message;
    tuningStatus.classList.toggle("error", Boolean(isError));
}

function logActiveTuningTable(table) {
    if (!Array.isArray(table) || table.length < 128) {
        return;
    }
    const notes = [60, 62, 64, 67, 69]; // sample pitches (C4, D4, E4, G4, A4)
    notes.forEach(note => {
        const cents = table[note];
        const freq = 440 * Math.pow(2, (cents - 6900) / 1200);
        console.log(`[Tuning] Note ${note}: ${cents.toFixed(2)} cents -> ${freq.toFixed(3)} Hz (default ${ (440 * Math.pow(2, (note - 69) / 12)).toFixed(3)} Hz)`);
    });
}

function detectDefaultTempo(midiData) {
    const tempos = Array.isArray(midiData?.tempos) ? midiData.tempos : [];
    const primary = tempos.find(item => Number.isFinite(item?.bpm) && item.bpm > 0);
    return clampTempoBpm(primary?.bpm ?? DEFAULT_TEMPO_BPM);
}

function clampTempoBpm(value) {
    const numeric = Number.isFinite(value) ? value : DEFAULT_TEMPO_BPM;
    return Math.min(TEMPO_RANGE_BPM.max, Math.max(TEMPO_RANGE_BPM.min, Math.round(numeric)));
}

function clampTempoPercent(value) {
    if (!Number.isFinite(value)) {
        return 100;
    }
    return Math.min(TEMPO_PERCENT_RANGE.max, Math.max(TEMPO_PERCENT_RANGE.min, Math.round(value)));
}

function tempoPercentToBpm(percent) {
    const safePercent = clampTempoPercent(percent);
    return clampTempoBpm(baseTempoBpm * (safePercent / 100));
}

function refreshTempoDisplay() {
    if (!tempoSlider || !tempoValue) {
        return;
    }
    const percent = clampTempoPercent(currentTempoPercent);
    tempoSlider.min = TEMPO_PERCENT_RANGE.min.toString();
    tempoSlider.max = TEMPO_PERCENT_RANGE.max.toString();
    tempoSlider.step = "1";
    tempoSlider.value = percent.toString();
    tempoValue.textContent = `${percent}%`;
    if (tempoResetButton) {
        tempoResetButton.disabled = !customTempoActive;
    }
}

function updateTempoControlsState(enabled) {
    if (!tempoSlider) {
        return;
    }
    tempoSlider.disabled = !enabled;
    if (tempoResetButton) {
        tempoResetButton.disabled = !enabled || !customTempoActive;
    }
    refreshTempoDisplay();
}

function applyTempoChange() {
    const bpm = tempoPercentToBpm(clampTempoPercent(currentTempoPercent));
    currentTempoBpm = bpm;
    customTempoActive = currentTempoPercent !== 100;
    refreshTempoDisplay();
    if (!fluidRenderer) {
        return;
    }
    fluidRenderer.setTempoBpm(bpm, baseTempoBpm, currentSongBaseDuration);
    if (currentSong) {
        currentSong.duration = fluidRenderer.songDuration || currentSong.duration;
        pauseOffset = Math.min(pauseOffset, currentSong.duration || pauseOffset);
        if (!isPlaying) {
            updateProgressUI(pauseOffset);
        }
    }
}

function trackHasActiveNote(notes, nowSeconds, timeScale) {
    if (!Array.isArray(notes) || !notes.length) {
        return false;
    }
    const ratio = Number.isFinite(timeScale) && timeScale > 0 ? timeScale : 1;
    let lo = 0;
    let hi = notes.length - 1;
    let idx = -1;
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const start = notes[mid].time * ratio;
        if (start <= nowSeconds) {
            idx = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return idx >= 0;
}

function updateTrackActivityVisuals(nowSeconds) {
    if (!currentSong || !trackVisualState.size) {
        return;
    }
    const baseDuration = currentSongBaseDuration || currentSong.duration || 1;
    const ratio = (currentSong.duration && baseDuration) ? (currentSong.duration / baseDuration) : 1;
    const windowStart = nowSeconds - METER_WINDOW_SECONDS * 0.6;
    const windowEnd = nowSeconds + METER_WINDOW_SECONDS * 0.4;
    trackVisualState.forEach((state) => {
        if (!state?.element || !state?.meterFill) {
            return;
        }
        const notes = state.notes || [];
        const densityInfo = computeNoteDensity(notes, windowStart, windowEnd, ratio);
        const targetLevel = densityInfo.level;
        state.level = smoothLevel(state.level || 0, targetLevel);
        const clamped = Math.max(0, Math.min(1, state.level));
        const visualLevel = Math.min(1, clamped * 0.85 + (densityInfo.overdrive ? 0.15 : 0));
        state.element.classList.toggle("is-active", visualLevel > 0.08);
        state.meterFill.style.transform = `scaleX(${visualLevel.toFixed(3)})`;
        state.meterFill.style.opacity = visualLevel > 0.05 ? "1" : "0.12";
    });
}

function computeNoteDensity(notes, start, end, timeScale) {
    if (!Array.isArray(notes) || !notes.length) {
        return { level: 0, overdrive: false };
    }
    const ratio = Number.isFinite(timeScale) && timeScale > 0 ? timeScale : 1;
    const windowStart = Math.max(0, start);
    const windowEnd = Math.max(windowStart, end);
    let count = 0;
    let velocitySum = 0;
    let maxVel = 0;
    for (let i = 0; i < notes.length; i++) {
        const n = notes[i];
        const noteStart = n.time * ratio;
        const noteEnd = (n.time + n.duration) * ratio;
        if (noteEnd < windowStart) {
            continue;
        }
        if (noteStart > windowEnd) {
            break;
        }
        count++;
        const vel = Number.isFinite(n.velocity) ? n.velocity : 0.8;
        velocitySum += vel;
        if (vel > maxVel) {
            maxVel = vel;
        }
    }
    const windowLength = Math.max(0.001, windowEnd - windowStart);
    const density = count / (windowLength * 10); // heuristic scale
    const avgVel = count ? velocitySum / count : 0;
    // Normal max around 0.75, allow overdrive if density is very high.
    const base = Math.min(0.75, (avgVel * 0.6) + (maxVel * 0.4));
    const overdrive = count >= 15 && maxVel >= 1;
    const burst = Math.min(1, density * 0.12);
    const level = Math.min(1, base + burst + (overdrive ? 0.25 : 0));
    return { level, overdrive };
}

function smoothLevel(previous, target) {
    const up = Math.max(target, previous * METER_ATTACK + target * (1 - METER_ATTACK));
    return up * METER_DECAY + target * (1 - METER_DECAY);
}

async function toggleRecording() {
    if (!recordButton || !fluidRenderer) {
        return;
    }
    if (recordingActive) {
        await stopRecordingSession(false);
        return;
    }
    await startRecordingSession();
}

async function startRecordingSession() {
    if (!currentSong || !isPrepared) {
        setStatus("Load a song before recording.", true);
        return;
    }

    let wantsCompressed = true;
    let hiQRequested = false;
    const candidates = [
        "audio/mpeg",
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/ogg;codecs=opus",
        "audio/ogg"
    ];
    let targetMime = "audio/wav";
    let targetExt = "wav";
    let preflightCompressedSupported = false;
    if (wantsCompressed && window.MediaRecorder) {
        const supported = candidates.find(type => MediaRecorder.isTypeSupported(type));
        if (supported) {
            preflightCompressedSupported = true;
            targetMime = supported;
            if (supported.startsWith("audio/mpeg")) {
                targetExt = "mp3";
            } else if (supported.includes("webm")) {
                targetExt = "webm";
            } else if (supported.includes("ogg")) {
                targetExt = "ogg";
            }
        } else {
            console.warn("[Record] No compressed mime supported from candidates; falling back to WAV.");
        }
    } else if (hiQRequested) {
        console.log("[Record] Hi-Q requested; saving WAV.");
    } else if (wantsCompressed && !window.MediaRecorder) {
        console.warn("[Record] MediaRecorder not available; saving WAV.");
    }

    let pickedHandle = null;
    if (typeof showSaveFilePicker === "function") {
        try {
            pickedHandle = await showSaveFilePicker({
                suggestedName: "mixdown.mp3",
                types: [
                    {
                        description: "Compressed audio",
                        accept: {
                            "audio/mpeg": [".mp3"],
                            "audio/webm": [".webm"],
                            "audio/ogg": [".ogg"]
                        }
                    },
                    {
                        description: "Hi-Q WAV",
                        accept: { "audio/wav": [".wav"] }
                    }
                ]
            });
            const chosenName = (pickedHandle?.name || "").toLowerCase();
            if (chosenName.endsWith(".wav")) {
                wantsCompressed = false;
                hiQRequested = true;
                targetMime = "audio/wav";
                targetExt = "wav";
                preflightCompressedSupported = false;
            }
        } catch (error) {
            console.warn("Save picker unavailable, will download after capture:", error);
            pickedHandle = null;
            setStatus("Recording will download after capture.", false);
        }
    }

    try {
        await ensureAudioReady();
    } catch (error) {
        console.error("Unable to start recording:", error);
        setStatus("Audio context is not ready.", true);
        return;
    }

    // Reset playback to start and disable loop for the capture.
    previousLoopState = loopToggle.checked;
    loopToggle.checked = false;
    fluidRenderer.setLoopEnabled(false);
    stopPlayback(false);
    pauseOffset = 0;
    isUserScrubbing = false;

    recorder = recorder || new PcmRecorder();
    window.recorder = recorder;
    recorder.start(getAudioContext().sampleRate);
    recordingActive = true;
    recordingHandle = pickedHandle;

    const recordDestination = getAudioContext().createMediaStreamDestination();
    fluidRenderer.attachRecorderDestination(recordDestination);
    setRecorderMediaStream(recordDestination.stream);

    // Optional compressed capture via MediaRecorder (smaller file).
    recorder.compressedChunks = [];
    recorder.compressedMime = "";
    recorder.desiredMime = targetMime;
    recorder.desiredExt = targetExt;
    recorder.compressedRecorder = null;
    recorder.compressedPromise = null;
    recorder.wantsCompressed = wantsCompressed;
    if (wantsCompressed && window.MediaRecorder && preflightCompressedSupported) {
        console.log("[Record] Checking MediaRecorder support:", candidates);
        const supported = targetMime;
        if (supported) {
            recorder.compressedMime = supported;
            recorder.desiredMime = supported;
            try {
                recorder.compressedPromise = new Promise((resolve, reject) => {
                    recorder._compressedResolve = resolve;
                    recorder._compressedReject = reject;
                });
                recorder.compressedRecorder = new MediaRecorder(recordDestination.stream, { mimeType: supported });
                recorder.compressedRecorder.ondataavailable = (evt) => {
                    if (evt.data && evt.data.size) {
                        recorder.compressedChunks.push(evt.data);
                    }
                };
                recorder.compressedRecorder.onstop = () => {
                    if (recorder._compressedResolve) {
                        recorder._compressedResolve(recorder.compressedChunks.slice());
                    }
                };
                recorder.compressedRecorder.onerror = (err) => {
                    if (recorder._compressedReject) {
                        recorder._compressedReject(err);
                    }
                };
                recorder.compressedRecorder.start();
                console.log("[Record] Using compressed mime:", supported);
                setStatus(`Recording (compressed: ${supported})...`, false);
            } catch (error) {
                console.warn("Compressed recording unavailable:", error);
                recorder.compressedRecorder = null;
                recorder.compressedChunks = [];
                recorder.compressedMime = "";
                recorder.compressedPromise = null;
            }
        } else {
            console.warn("[Record] No compressed mime supported from candidates; falling back to WAV.");
            setStatus("Recording (compressed option not supported). Saving Hi-Q WAV.", false);
        }
    } else if (wantsCompressed && !window.MediaRecorder) {
        setStatus("Recording (browser lacks MediaRecorder). Saving Hi-Q WAV.", false);
    } else if (wantsCompressed && !preflightCompressedSupported) {
        setStatus("Recording (compressed option not supported). Saving Hi-Q WAV.", false);
    }
    disableControlsForRecording(true);
    recordButton.textContent = "STOP RECORDING";
    recordButton.classList.add("recording");
    recordButton.disabled = false;
    setStatus("Recording full song...", false);

    const scheduled = await scheduleNotesFromOffset(0);
    if (scheduled) {
        isPlaying = true;
        startProgressUpdates();
        applyAllProgramOverrides();
    } else {
        setStatus("Unable to start recording playback.", true);
        await stopRecordingSession(false);
    }
}

function setRecorderMediaStream(stream) {
    // MediaRecorder is optional; PCM capture is already handled.
    if (!stream) {
        return;
    }
    try {
        if (!recorder.mediaRecorder) {
            recorder.mediaRecorder = new MediaRecorder(stream);
            recorder.mediaRecorder.start();
        }
    } catch (error) {
        console.warn("MediaRecorder unavailable; proceeding with PCM capture only.", error);
    }
}

async function stopRecordingSession(autoTriggered) {
    if (!recordingActive || !recorder) {
        return;
    }
    recordingActive = false;
    if (recorder.mediaRecorder) {
        try {
            recorder.mediaRecorder.stop();
        } catch (error) {
            // ignore
        }
        recorder.mediaRecorder = null;
    }
    fluidRenderer.attachRecorderDestination(null);
    let compressedChunksCopy = [];
    const compressedMimeCopy = recorder.compressedMime;
    const desiredExtCopy = recorder.desiredExt;
    const desiredMimeCopy = recorder.desiredMime;
    let compressedFailed = false;
    if (recorder.compressedRecorder) {
        try {
            recorder.compressedRecorder.stop();
            if (recorder.compressedPromise) {
                compressedChunksCopy = await recorder.compressedPromise.catch((err) => {
                    console.warn("Compressed recorder error:", err);
                    compressedFailed = true;
                    return [];
                });
            }
        } catch (error) {
            console.warn("Unable to stop compressed recorder:", error);
            compressedFailed = true;
        }
    }
    const blob = recorder.stop();
    disableControlsForRecording(false);
    loopToggle.checked = previousLoopState;
    fluidRenderer.setLoopEnabled(loopToggle.checked);
    recordButton.textContent = "RECORD TO DESKTOP";
    recordButton.classList.remove("recording");
    let finalBlob = blob;
    let filename = "mixdown.wav";
    if (compressedChunksCopy && compressedChunksCopy.length && compressedMimeCopy) {
        try {
            finalBlob = new Blob(compressedChunksCopy, { type: compressedMimeCopy });
            if (compressedMimeCopy.startsWith("audio/mpeg")) {
                filename = `mixdown.${desiredExtCopy || "mp3"}`;
            } else if (compressedMimeCopy.includes("webm")) {
                filename = `mixdown.${desiredExtCopy || "webm"}`;
            } else if (compressedMimeCopy.includes("ogg")) {
                filename = `mixdown.${desiredExtCopy || "ogg"}`;
            }
        } catch (error) {
            console.warn("Falling back to WAV; unable to package compressed recording:", error);
            finalBlob = blob;
            filename = "mixdown.wav";
        }
    } else if (finalBlob && finalBlob.type) {
        if (finalBlob.type.startsWith("audio/mpeg")) {
            filename = "mixdown.mp3";
        } else if (finalBlob.type.includes("webm")) {
            filename = "mixdown.webm";
        } else if (finalBlob.type.includes("ogg")) {
            filename = "mixdown.ogg";
        }
    }
    if (!compressedChunksCopy.length && recorder.wantsCompressed && !compressedFailed) {
        setStatus("Compressed format not available; saved Hi-Q WAV instead.", true);
    }
    if (!finalBlob) {
        setStatus("No audio captured.", true);
        return;
    }
    const allowHandle = recordingHandle && recordingHandle.createWritable;
    try {
        if (allowHandle) {
            const writable = await recordingHandle.createWritable();
            await writable.write(finalBlob);
            await writable.close();
            setStatus("Recording saved.", false);
        } else {
            const url = URL.createObjectURL(finalBlob);
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                URL.revokeObjectURL(url);
                link.remove();
            }, 500);
            setStatus("Recording downloaded.", false);
        }
    } catch (error) {
        console.error("Failed to save recording:", error);
        setStatus("Unable to save recording.", true);
    }
}

function disableControlsForRecording(disabled) {
    if (disabled) {
        [playButton, pauseButton, stopButton, loopToggle, fileInput].forEach(el => {
            if (el) {
                el.dataset.wasDisabled = el.disabled ? "1" : "0";
                el.disabled = true;
            }
        });
        progressBar.disabled = true;
    } else {
        [playButton, pauseButton, stopButton, loopToggle, fileInput].forEach(el => {
            if (el) {
                el.disabled = el.dataset.wasDisabled === "1";
                delete el.dataset.wasDisabled;
            }
        });
        progressBar.disabled = false;
        updateTempoControlsState(isPrepared);
        setScaleControlsEnabled(isPrepared);
        enableTransportButtons(isPrepared);
    }
    if (recordButton) {
        recordButton.disabled = false;
    }
}

function buildMidiMeta(parsedSong, displayName) {
    const safeTracks = Array.isArray(parsedSong?.tracks) ? parsedSong.tracks : [];
    return {
        name: displayName || parsedSong?.name || "MIDI file",
        duration_seconds: Number.isFinite(parsedSong?.duration) ? parsedSong.duration : 0,
        track_count: safeTracks.length,
        saved_from: "recomposer",
        creator_name: getRadiographCreatorName(),
        creator_user_id: currentSupabaseUser?.id || null
    };
}

function buildEditedMidiFilename(displayName, source) {
    const fallbackName = source?.file_name || displayName || "midi.mid";
    const baseName = String(fallbackName || "midi.mid").trim() || "midi.mid";
    const dotIndex = baseName.lastIndexOf(".");
    const stem = dotIndex > 0 ? baseName.slice(0, dotIndex) : baseName;
    const extension = dotIndex > 0 ? baseName.slice(dotIndex) : ".mid";
    const now = new Date();
    const stamp = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
        "-",
        String(now.getHours()).padStart(2, "0"),
        String(now.getMinutes()).padStart(2, "0"),
        String(now.getSeconds()).padStart(2, "0")
    ].join("");
    return `${stem}-edited-${stamp}${extension.toLowerCase() === ".midi" ? ".mid" : extension}`;
}

function buildDefaultArrangementName() {
    const rawName = (currentSong?.displayName || currentSong?.name || currentMidiSource?.file_name || "Arrangement").trim();
    return rawName.replace(/\.(mid|midi)$/i, "") || "Arrangement";
}

function buildArrangementFileName(name) {
    const trimmed = String(name || "").trim() || "Arrangement";
    return /\.(mid|midi)$/i.test(trimmed) ? trimmed : `${trimmed}.mid`;
}

async function withTimeout(promise, timeoutMs, message) {
    let timeoutId = null;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error(message));
        }, timeoutMs);
    });
    try {
        return await Promise.race([promise, timeoutPromise]);
    } finally {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
    }
}

function buildMidiPayload(source, arrayBuffer) {
    const sourceType = source?.source_type === "sample" ? "sample" : "upload";
    if (sourceType === "sample" && source?.source_url) {
        return {
            source_type: "sample",
            source_url: source.source_url,
            sample_id: source.sample_id || source.source_url,
            file_name: source.file_name || ""
        };
    }
    return {
        source_type: "upload",
        file_name: source?.file_name || "upload.mid",
        encoding: "base64",
        midi_base64: arrayBufferToBase64(arrayBuffer)
    };
}

async function saveArrangementToLibrary(arrangementName) {
    if (!currentSong || !currentMidiBuffer) {
        setStatus("Load a MIDI before saving arrangement.", true);
        throw new Error("No MIDI loaded.");
    }
    if (!supabaseClient || !currentSupabaseUser?.id) {
        setStatus("Sign in to save arrangement to your library.", true);
        showAuthModal();
        throw new Error("Not signed in.");
    }
    if (saveArrangementButton) {
        saveArrangementButton.disabled = true;
    }
    try {
        if (pendingArrangementRefresh) {
            clearTimeout(pendingArrangementRefresh);
            pendingArrangementRefresh = null;
            await rebuildTransformedPlayback("Arrangement updated.");
        }
        const midiToSave = arrangementDirty && transformedMidiBuffer
            ? transformedMidiBuffer
            : currentMidiBuffer;
        const savedDisplayName = arrangementName;
        const savedSource = { source_type: "upload", file_name: buildArrangementFileName(arrangementName) };
        const savedRecord = await withTimeout(
            saveLoadedMidiToCloud(
                midiToSave,
                savedDisplayName,
                savedSource,
                currentSong
            ),
            CLOUD_SAVE_TIMEOUT_MS,
            "Saving arrangement timed out. Check your Supabase table/policies and try again."
        );
        if (savedRecord) {
            mergeSavedSongRecordsIntoLibrarian([savedRecord], "saved");
            setActiveLibrarianItem(`saved-${savedRecord.id || savedRecord.name || savedDisplayName}`, { queue: false });
        }
        await withTimeout(
            flushCloudSettingsSave(),
            CLOUD_SAVE_TIMEOUT_MS,
            "Cloud settings save timed out. Check your Supabase connection and try again."
        );
        setStatus(`Arrangement saved: ${savedDisplayName}`, false);
    } finally {
        setSaveArrangementEnabled(true);
    }
}

async function saveLoadedMidiToCloud(arrayBuffer, displayName, source, parsedSong) {
    if (!supabaseClient || !currentSupabaseUser?.id || !arrayBuffer) {
        return;
    }
    const payload = buildMidiPayload(source, arrayBuffer);
    const meta = {
        ...buildMidiMeta(parsedSong, displayName),
        arrangement_settings: buildArrangementSettingsSnapshot()
    };
    const { data: existingRows, error: lookupError } = await supabaseClient
        .from("earb_user_midis")
        .select("id")
        .eq("user_id", currentSupabaseUser.id)
        .eq("name", meta.name)
        .order("created_at", { ascending: false })
        .limit(1);
    if (lookupError) {
        throw lookupError;
    }
    const existingId = Array.isArray(existingRows) && existingRows.length ? existingRows[0].id : null;
    if (existingId) {
        const { data: updatedRows, error: updateError } = await supabaseClient
            .from("earb_user_midis")
            .update({
                midi_payload: payload,
                midi_meta: meta
            })
            .eq("id", existingId)
            .eq("user_id", currentSupabaseUser.id)
            .select("id,name,midi_payload,midi_meta,created_at");
        if (updateError) {
            throw updateError;
        }
        return Array.isArray(updatedRows) && updatedRows.length
            ? updatedRows[0]
            : {
                id: existingId,
                name: meta.name,
                midi_payload: payload,
                midi_meta: meta
            };
    }
    const { data: insertedRows, error: insertError } = await supabaseClient
        .from("earb_user_midis")
        .insert({
            user_id: currentSupabaseUser.id,
            name: meta.name,
            midi_payload: payload,
            midi_meta: meta
        })
        .select("id,name,midi_payload,midi_meta,created_at");
    if (insertError) {
        throw insertError;
    }
    return Array.isArray(insertedRows) && insertedRows.length
        ? insertedRows[0]
        : {
            name: meta.name,
            midi_payload: payload,
            midi_meta: meta
        };
}

async function loadCloudMidiRecord(record, options = {}) {
    if (!record?.midi_payload || typeof record.midi_payload !== "object") {
        return false;
    }
    const payload = record.midi_payload;
    const arrangementSettings = record?.midi_meta?.arrangement_settings;
    const displayName = record.name || payload.file_name || "MIDI file";
    const statusMessage = options.statusMessage || "Saved arrangement restored.";
    if (payload.source_type === "sample" && typeof payload.source_url === "string" && payload.source_url) {
        const response = await fetch(payload.source_url);
        if (!response.ok) {
            throw new Error(`Unable to load saved sample: ${displayName}`);
        }
        const buffer = await response.arrayBuffer();
        await loadMidiFromBuffer(buffer, displayName, {
            source_type: "sample",
            source_url: payload.source_url,
            sample_id: payload.sample_id || payload.source_url,
            file_name: payload.file_name || displayName
        });
    } else if (payload.encoding === "base64" && typeof payload.midi_base64 === "string" && payload.midi_base64) {
        const buffer = base64ToArrayBuffer(payload.midi_base64);
        await loadMidiFromBuffer(buffer, displayName, {
            source_type: "upload",
            file_name: payload.file_name || displayName
        });
    } else {
        return false;
    }
    if (arrangementSettings && typeof arrangementSettings === "object") {
        await applyArrangementSettingsSnapshot(arrangementSettings, {
            statusMessage,
            skipCloudSave: true
        });
    } else {
        setStatus(statusMessage, false);
    }
    return true;
}

async function restoreLatestCloudMidi() {
    if (!supabaseClient || !currentSupabaseUser?.id || isRestoringCloudMidi) {
        return;
    }
    const { data, error } = await withTimeout(
        supabaseClient
            .from("earb_user_midis")
            .select("id,name,midi_payload,midi_meta")
            .eq("user_id", currentSupabaseUser.id)
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle(),
        CLOUD_SAVE_TIMEOUT_MS,
        "Restoring your latest saved arrangement timed out."
    );
    if (error) {
        console.warn("Failed to restore latest cloud MIDI:", error);
        return;
    }
    if (!data?.midi_payload || typeof data.midi_payload !== "object") {
        return;
    }
    isRestoringCloudMidi = true;
    try {
        await loadCloudMidiRecord(data, { statusMessage: "Saved arrangement restored." });
    } catch (restoreError) {
        console.warn("Cloud MIDI restore failed:", restoreError);
    } finally {
        isRestoringCloudMidi = false;
    }
}

function buildCloudSettingsPayload() {
    return {
        schema_version: 1,
        favorite_presets: presetFavorites,
        ui: {
            scala_preference: scalaPreference === "full" ? "full" : "lite",
            mode: currentMode,
            transpose_semitones: currentTranspose,
            tempo_percent: clampTempoPercent(currentTempoPercent),
            active_tuning_id: activeTuning?.id || DEFAULT_TUNING_ID
        },
        track_overrides: buildTrackOverrides(),
        last_song_name: currentSong?.displayName || "",
        librarian: buildLibrarianSettingsPayload()
    };
}

function buildArrangementSettingsSnapshot() {
    return {
        schema_version: 1,
        mode: currentMode,
        transpose_semitones: currentTranspose,
        tempo_percent: clampTempoPercent(currentTempoPercent),
        tuning_id: activeTuning?.id || DEFAULT_TUNING_ID,
        scala_preference: scalaPreference === "full" ? "full" : "lite",
        track_overrides: buildTrackOverrides()
    };
}

function queueCloudSettingsSave() {
    if (isApplyingCloudSettings || !supabaseClient || !currentSupabaseUser?.id) {
        return;
    }
    if (cloudSettingsSaveTimer) {
        clearTimeout(cloudSettingsSaveTimer);
    }
    cloudSettingsSaveTimer = setTimeout(() => {
        cloudSettingsSaveTimer = null;
        flushCloudSettingsSave();
    }, 700);
}

async function flushCloudSettingsSave() {
    if (isApplyingCloudSettings || !supabaseClient || !currentSupabaseUser?.id) {
        return;
    }
    const payload = buildCloudSettingsPayload();
    const { error } = await supabaseClient
        .from("earb_user_settings")
        .upsert(
            {
                user_id: currentSupabaseUser.id,
                settings: payload
            },
            { onConflict: "user_id" }
        );
    if (error) {
        console.warn("Failed to save cloud settings:", error);
    }
}

async function loadCloudSettings() {
    if (!supabaseClient || !currentSupabaseUser?.id) {
        return;
    }
    const { data, error } = await supabaseClient
        .from("earb_user_settings")
        .select("settings")
        .eq("user_id", currentSupabaseUser.id)
        .maybeSingle();
    if (error) {
        console.warn("Failed to load cloud settings:", error);
        return;
    }
    const settings = data?.settings;
    if (!settings || typeof settings !== "object") {
        return;
    }
    await applyCloudSettings(settings);
}

async function applyCloudSettings(settings) {
    pendingCloudSettings = settings;
    const storedFavorites = Array.isArray(settings?.favorite_presets)
        ? settings.favorite_presets
            .filter(item => item && typeof item === "object")
            .map(item => ({
                id: typeof item.id === "string" && item.id ? item.id : `fav_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
                name: typeof item.name === "string" && item.name.trim() ? item.name.trim() : "favorite",
                mode: typeof item.mode === "string" ? item.mode : DEFAULT_MODE,
                transpose_semitones: Number.isFinite(Number(item.transpose_semitones)) ? Number(item.transpose_semitones) : 0,
                tempo_percent: clampTempoPercent(Number(item.tempo_percent ?? 100)),
                tuning_id: typeof item.tuning_id === "string" && item.tuning_id ? item.tuning_id : DEFAULT_TUNING_ID,
                scala_preference: item.scala_preference === "full" ? "full" : "lite",
                track_overrides: Array.isArray(item.track_overrides) ? item.track_overrides : []
            }))
        : [];
    presetFavorites = storedFavorites;
    refreshFavoritesMenus();
    syncFavoriteSelection("__default__");
    const ui = settings?.ui && typeof settings.ui === "object" ? settings.ui : null;
    if (ui?.scala_preference) {
        setScalaPreference(ui.scala_preference === "full" ? "full" : "lite");
    }
    applyLibrarianPlaylistSettings(settings);
    setAuthStatus(`Signed in as ${currentSupabaseUser?.email || "user"}. Favorites and playlists synced.`, false);
}

function buildProgramOverrides() {
    const overrides = [];
    trackChannels.forEach((channel, trackIndex) => {
        const program = clampProgram(trackPrograms.get(trackIndex) ?? 0);
        overrides.push({
            channel,
            bank_msb: getTrackBank(trackIndex, channel),
            bank_lsb: 0,
            program
        });
    });
    overrides.sort((a, b) => a.channel - b.channel);
    return overrides;
}

function buildTrackOverrides() {
    const overrides = [];
    trackChannels.forEach((channel, trackIndex) => {
        overrides.push({
            track_index: trackIndex,
            channel,
            bank_msb: getTrackBank(trackIndex, channel),
            program: clampProgram(trackPrograms.get(trackIndex) ?? 0),
            volume: Number(clampTrackVolume(trackVolumes.get(trackIndex) ?? 1).toFixed(3)),
            transpose_semitones: clampTrackTransposeValue(trackTransposes.get(trackIndex) ?? 0, 0)
        });
    });
    overrides.sort((a, b) => a.track_index - b.track_index);
    return overrides;
}

function serializeCentsArray(values) {
    if (!Array.isArray(values)) {
        return [];
    }
    return values.map(value => Number((Number(value) || 0).toFixed(6)));
}

function buildRadioTuningRecipe() {
    const baseTable = Array.isArray(activeTuning.table) ? activeTuning.table : equalTemperamentTable;
    const effectiveTable = buildEffectiveTuningTable(baseTable, currentMode, currentTranspose);
    if (activeTuning.id === DEFAULT_TUNING_ID) {
        return {
            source: "equal",
            id: DEFAULT_TUNING_ID,
            name: "12-TET",
            base_note: BASE_TUNING_NOTE,
            effective_table_cents: serializeCentsArray(effectiveTable)
        };
    }
    return {
        source: "embedded_scala",
        archive_source: activeScalaSource?.label || scalaPreference || "lite",
        id: activeTuning.id,
        name: activeTuning.name || activeTuning.id.split("/").pop(),
        base_note: BASE_TUNING_NOTE,
        scale_cents: serializeCentsArray(activeTuning.scaleCents),
        scala_text: typeof activeTuning.scalaText === "string" ? activeTuning.scalaText : null,
        effective_table_cents: serializeCentsArray(effectiveTable)
    };
}

function buildMidiSettingsDraft() {
    if (!currentSong || !baseMidiBuffer) {
        return null;
    }
    return {
        schema_version: 1,
        midi: {
            source: "local",
            name: currentSong.displayName || currentSong.name || "midi",
            byte_length: baseMidiBuffer.byteLength,
            sha256: null
        },
        tuning: buildRadioTuningRecipe(),
        mode: currentMode,
        transpose_semitones: currentTranspose,
        tempo: {
            type: "bpm_override",
            bpm: currentTempoBpm
        },
        gm_program_overrides: buildProgramOverrides(),
        track_overrides: buildTrackOverrides(),
        output: {
            codec: "mp3",
            bitrate_kbps: 192,
            target_lufs: -16,
            true_peak_db: -1.0
        }
    };
}

window.getEarBSubmissionDraft = () => {
    const recipe = buildMidiSettingsDraft();
    if (!recipe || !baseMidiBuffer) {
        return null;
    }
    return {
        recipe,
        midiBuffer: baseMidiBuffer.slice(0)
    };
};
