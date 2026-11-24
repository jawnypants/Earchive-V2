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
const rewindButton = document.getElementById("rewind");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const recordButton = document.getElementById("record");
const recordButtonLabel = recordButton.textContent;
const progressBar = document.getElementById("progress");
const progressElapsed = document.getElementById("progress-elapsed");
const progressRemaining = document.getElementById("progress-remaining");
const keyframePlace = document.getElementById("keyframe-place");
const keyframeMarkers = document.getElementById("keyframe-markers");
const keyframeConfirmation = document.getElementById("keyframe-confirmation");
const keyframeConfirm = document.getElementById("keyframe-confirm");
const keyframeStatus = document.getElementById("keyframe-status");
let arrangementKeyframes = [];
let activeKeyframe = null;
let keyframeCandidate = null;
let playbackRequest = 0;
let tuningSelectionRequest = 0;
const keyframeTuningRequests = new WeakMap();
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
const helpToggle = document.getElementById("help-toggle");
const helpToggleText = document.getElementById("help-toggle-text");
const controlHelpBubble = document.getElementById("control-help-bubble");
let helpTarget = null;
const infoToggle = document.getElementById("info-toggle");
const infoBubbles = document.getElementById("info-bubbles");
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
const saveArrangementTagsInput = document.getElementById("save-arrangement-tags");
const saveArrangementStatus = document.getElementById("save-arrangement-status");
const saveArrangementCancelButton = document.getElementById("save-arrangement-cancel");
const saveArrangementConfirmButton = document.getElementById("save-arrangement-confirm");
const pageTabs = Array.from(document.querySelectorAll(".app-tabs .tab[data-page]"));
const stationControlTab = document.getElementById("station-control-tab");
const tabsAuthRow = stationControlTab.closest(".tabs-auth-row");
const stationModeForm = document.getElementById("station-mode-form");
const stationModeSelect = document.getElementById("station-mode-select");
const stationIncludeTags = document.getElementById("station-include-tags");
const stationExcludeTags = document.getElementById("station-exclude-tags");
let stationModes = new Map();
const stationModeSave = document.getElementById("station-mode-save");
const stationModeStatus = document.getElementById("station-mode-status");
const stationNewsForm = document.getElementById("station-news-form");
const stationNewsTitle = document.getElementById("station-news-title");
const stationNewsBody = document.getElementById("station-news-body");
const stationNewsPublish = document.getElementById("station-news-publish");
const stationNewsRemove = document.getElementById("station-news-remove");
const stationNewsStatus = document.getElementById("station-news-status");
const stationMidiFolderForm = document.getElementById("station-midi-folder-form");
const stationMidiFolder = document.getElementById("station-midi-folder");
const stationMidiFolderSave = document.getElementById("station-midi-folder-save");
const stationMidiFolderStatus = document.getElementById("station-midi-folder-status");
const stationFolderTagForm = document.getElementById("station-folder-tag-form");
const stationTagFolder = document.getElementById("station-tag-folder");
const stationFolderTag = document.getElementById("station-folder-tag");
const stationFolderTagSave = document.getElementById("station-folder-tag-save");
const stationFolderTagStatus = document.getElementById("station-folder-tag-status");
let folderTags = new Map();
let sharedArrangementTags = [];
let saveArrangementTagRequest = 0;
const recomposerNews = document.getElementById("recomposer-news");
const recomposerNewsHeading = document.getElementById("recomposer-news-heading");
const recomposerNewsBody = document.getElementById("recomposer-news-body");
let stationOperatorId = null;
let recomposerNewsRequest = 0;
const pageViews = Array.from(document.querySelectorAll("[data-page-view]"));
const librarianPlayButton = document.getElementById("librarian-play");
const librarianPauseButton = document.getElementById("librarian-pause");
const librarianStopButton = document.getElementById("librarian-stop");
const librarianNowTitle = document.getElementById("librarian-now-title");
const librarianNowMeta = document.getElementById("librarian-now-meta");
const librarianStatus = document.getElementById("librarian-status");
const librarianLibraryList = document.getElementById("librarian-library-list");
const librarianEditTags = document.getElementById("librarian-edit-tags");
const librarianTagsDialog = document.getElementById("librarian-tags-dialog");
const librarianTagsInput = document.getElementById("librarian-tags-input");
const librarianTagsStatus = document.getElementById("librarian-tags-status");
const librarianTagsSave = document.getElementById("librarian-tags-save");
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
const radiographModeStatus = document.getElementById("radiograph-mode-status");
const radiographLiveLight = document.getElementById("radiograph-live-light");
const radiographLiveLabel = document.getElementById("radiograph-live-label");
const radiographListenerCount = document.getElementById("radiograph-listener-count");
const radiographSignal = document.querySelector(".radiograph-signal");
const radiographSignalBars = Array.from(document.querySelectorAll(".radiograph-signal > span"));
const radiographSignalCaption = document.getElementById("radiograph-signal-caption");
const radiographLoadArrangementButton = document.getElementById("radiograph-load-arrangement");
const radiographSubmitButton = document.getElementById("radiograph-submit");
const radiographBroadcastArrangement = document.getElementById("radiograph-broadcast-arrangement");
const radiographSubmitStatus = document.getElementById("radiograph-submit-status");
const radiographRatingStatus = document.getElementById("radiograph-rating-status");
const radiographRatingButtons = Array.from(document.querySelectorAll("[data-radiograph-rating]"));
const radiographSaveLibraryButton = document.getElementById("radiograph-save-library");
const radiographNowTitle = document.getElementById("radiograph-now-title");
const radiographNowMeta = document.getElementById("radiograph-now-meta");
const radiographRotationRank = document.getElementById("radiograph-rotation-rank");
const radiographQueueList = document.getElementById("radiograph-queue-list");
const radiographQueueCount = document.getElementById("radiograph-queue-count");
const radiographPublishedList = document.getElementById("radiograph-published-list");
const radiographPublishedStatus = document.getElementById("radiograph-published-status");
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
    if (!pageName || (pageName === "station-control" && !stationOperatorId)) {
        return;
    }
    const enteringStationControl = pageName === "station-control" && !stationControlTab.classList.contains("is-active");
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
    if (pageName === "radiograph") {
        setTimeout(refreshRadiographStationStatus, 0);
    }
    if (enteringStationControl) {
        loadStationControl();
    }
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
let radiographBroadcast = null;
let radiographMode = null;
let radiographSubmitting = false;
let radiographLatestStationStatus = null;
let radiographStationRequest = null;
let radiographPublishedSongs = [];
let radiographPublishedRequest = null;
let radiographPublishedLoaded = false;
let radiographPublishedError = false;
let radiographStreamUrl = "";
let radiographStatusUrl = "";
let radiographRecipeUrl = "";
let radiographHls = null;
let radiographStatusTimer = null;
let radiographCountdownTimer = null;
let radiographBoundaryPollAfter = 0;
let radiographRecoveryTimer = null;
let radiographAudioContext = null;
let radiographAnalyser = null;
let radiographAudioSource = null;
let radiographVolumeData = null;
let radiographMeterFrame = null;
let radiographDisplayedLevels = [];
let currentRadiographTrackId = null;
let currentRadiographFile = "";
let currentRadiographStartedAt = "";
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
        radiographPlayButton.setAttribute("aria-label", isLive ? "Pause live radio" : "Play live radio");
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

function getRadiographPlaybackTime() {
    if (!radiographAudio || radiographAudio.paused || radiographAudio.readyState < 2) return null;
    const playingDate = radiographHls?.playingDate?.getTime();
    if (Number.isFinite(playingDate)) return playingDate;
    const nativeStart = radiographAudio.getStartDate?.()?.getTime();
    if (Number.isFinite(nativeStart)) return nativeStart + radiographAudio.currentTime * 1000;

    const latency = radiographHls?.latency;
    return Number.isFinite(latency) && latency > 0 ? Date.now() - latency * 1000 : null;
}

function getAudibleRadiographTrack(status, playbackTime) {
    const current = status?.now_playing;
    if (playbackTime === null || !status?.playouts?.length) return current;
    for (let i = status.playouts.length - 1; i >= 0; i--) {
        const playout = status.playouts[i];
        if (Date.parse(playout.started_at) <= playbackTime) {
            return playout.started_at === current?.started_at ? { ...playout, ...current } : playout;
        }
    }
    return current;
}

function formatRadioTimeRemaining(now, timestamp = Date.now()) {
    const startedAt = Date.parse(now?.started_at || "");
    const duration = Number(now?.duration_sec);
    if (!Number.isFinite(startedAt) || !Number.isFinite(duration) || duration <= 0) {
        return "live broadcast";
    }
    const elapsed = Math.max(0, (timestamp - startedAt) / 1000);
    const remaining = Math.max(0, Math.ceil(duration - elapsed));
    const minutes = Math.floor(remaining / 60);
    const seconds = String(remaining % 60).padStart(2, "0");
    return `${minutes}:${seconds} remaining`;
}

function getRadiographTrackFile(track) {
    return typeof track === "string" ? track : track?.file;
}

function renderRadiographPublishedSongs() {
    const isSignedIn = Boolean(currentSupabaseUser?.id);
    const songs = radiographPublishedSongs;
    let message = "";
    if (!isSignedIn) {
        message = "Sign in to see your published songs.";
    } else if (radiographPublishedError) {
        message = "Published songs could not be refreshed. Retrying shortly.";
    } else if (!radiographPublishedLoaded) {
        message = "Loading your published songs…";
    } else if (!songs.length) {
        message = "Songs you submit to the station will appear here.";
    }
    if (radiographPublishedStatus.textContent !== message) {
        radiographPublishedStatus.textContent = message;
    }

    const station = radiographLatestStationStatus;
    const now = station?.now_playing;
    const upcoming = Array.isArray(station?.upcoming) ? station.upcoming : [];
    const filePositions = new Map();
    const submissionPositions = new Map();
    upcoming.forEach((track, index) => {
        const file = getRadiographTrackFile(track);
        const id = String(track?.submission_id ?? "");
        if (!id && file && !filePositions.has(file)) filePositions.set(file, index + 1);
        if (id && !submissionPositions.has(id)) submissionPositions.set(id, index + 1);
    });
    const rotation = Array.isArray(station?.tracks) ? station.tracks : [];
    const rotationFiles = new Set(rotation.filter(track => !track?.submission_id).map(getRadiographTrackFile));
    const rotationSubmissions = new Set(rotation.map(track => String(track?.submission_id ?? "")));
    const rows = songs.map(song => {
        const id = String(song.id);
        const renderedTracks = song.earb_radio_tracks || [];
        const files = renderedTracks.map(track => track.artifact_file).filter(Boolean);
        const isPlaying = now?.title && (now.submission_id
            ? String(now.submission_id) === id
            : files.includes(now.title));
        const position = Math.min(
            submissionPositions.get(id) ?? Infinity,
            ...files.map(file => filePositions.get(file) ?? Infinity)
        );
        const inRotation = rotationSubmissions.has(id) || files.some(file => rotationFiles.has(file));
        let status;
        if (isPlaying) {
            status = "On air now";
        } else if (Number.isFinite(position)) {
            status = position === 1 ? "Next up" : "In station queue";
        } else if (inRotation) {
            status = "In rotation · position unavailable";
        } else if (files.length) {
            status = Array.isArray(station?.upcoming)
                ? "Outside current rotation"
                : "Queue position unavailable";
        } else {
            status = ({
                submitted: "Submitted",
                validated: "Awaiting approval",
                approved: "Approved",
                rejected: "Rejected",
                render_queued: "Queued for rendering",
                rendering: "Rendering",
                render_done: "Rendered",
                publish_ready: "Ready to publish",
                published: "Published · position unavailable",
                failed: "Failed"
            })[song.status] || "Submitted";
        }
        const row = document.createElement("li");
        row.className = "radiograph-queue-item";
        row.classList.toggle("is-active", Boolean(isPlaying));
        const rank = document.createElement("span");
        rank.className = "radiograph-queue-index";
        if (!isPlaying && Number.isFinite(position)) {
            rank.textContent = `#${position}`;
            rank.setAttribute("aria-label", `Queue position ${position}`);
        }
        const details = document.createElement("span");
        const title = document.createElement("span");
        title.className = "radiograph-queue-title";
        title.textContent = song.title;
        const meta = document.createElement("span");
        meta.className = "radiograph-queue-meta";
        meta.textContent = status;
        details.append(title, meta);
        const tags = getArrangementTags(song.earb_user_midis);
        if (tags.length) {
            const tagList = document.createElement("span");
            tagList.className = "radiograph-queue-meta";
            tagList.textContent = tags.join(" · ");
            details.appendChild(tagList);
        }
        const scheduledFile = isPlaying ? now.title : getRadiographTrackFile(upcoming[position - 1]);
        const ratingTrack = renderedTracks.find(track => scheduledFile && track.artifact_file === scheduledFile)
            || renderedTracks[0];
        const score = Number(ratingTrack?.popularity_score);
        if (ratingTrack?.popularity_score != null && Number.isFinite(score)) {
            const rating = document.createElement("span");
            rating.className = "radiograph-queue-meta";
            rating.textContent = score > 0
                ? `Listener rating ${(score / 20).toFixed(1)} / 5`
                : "No listener ratings yet";
            details.appendChild(rating);
        }
        row.append(rank, details);
        return row;
    });
    radiographPublishedList.replaceChildren(...rows);
}

function refreshRadiographPublishedSongs() {
    const userId = currentSupabaseUser?.id;
    const isVisible = radiographPublishedList.closest("[data-page-view]")?.classList.contains("is-active");
    const mode = radiographMode;
    if (!isVisible || !supabaseClient || !userId || !mode || radiographPublishedRequest) return;

    const request = {};
    radiographPublishedRequest = request;
    (async () => {
        const songs = [];
        const pageSize = 200;
        let beforeId = null;
        while (true) {
            let query = supabaseClient
                .from("earb_radio_submissions")
                .select("id,title,status,earb_user_midis(tags:midi_meta->tags,category:midi_meta->>category),earb_radio_tracks(artifact_file,popularity_score)")
                .eq("user_id", userId)
                .order("id", { ascending: false })
                .order("id", { ascending: false, referencedTable: "earb_radio_tracks" })
                .limit(pageSize);
            if (beforeId !== null) query = query.lt("id", beforeId);
            const { data, error } = await query;
            if (radiographPublishedRequest !== request) return;
            if (error) throw error;
            songs.push(...data);
            if (data.length < pageSize) break;
            beforeId = data.at(-1).id;
        }
        radiographPublishedSongs = songs.filter(song => isArrangementEligibleForMode(song.earb_user_midis, mode));
        radiographPublishedLoaded = true;
        radiographPublishedError = false;
    })().catch((error) => {
        if (radiographPublishedRequest !== request) return;
        console.warn("RadioGraph published songs refresh failed:", error);
        radiographPublishedError = true;
    }).finally(() => {
        if (radiographPublishedRequest === request) {
            radiographPublishedRequest = null;
            renderRadiographPublishedSongs();
        }
    });
}

function getRadiographUpcoming(status, now) {
    const rotation = Array.isArray(status?.tracks) ? status.tracks : [];
    let upcoming = status?.upcoming;
    if (!Array.isArray(upcoming)) {
        const next = rotation.findIndex(track => getRadiographTrackFile(track) === status?.now_playing?.next_up);
        const current = rotation.findIndex(track => getRadiographTrackFile(track) === status?.now_playing?.title);
        const start = next >= 0 ? next : current + 1;
        upcoming = [...rotation.slice(start), ...rotation.slice(0, start)];
    }
    const playouts = status?.playouts || [];
    const current = playouts.findIndex(track => track.started_at === now?.started_at);
    if (current < 0 || current === playouts.length - 1) return upcoming;
    // The station queue is ahead of listeners who are playing buffered audio.
    const buffered = playouts.slice(current + 1).map(track => ({
        file: track.title,
        title: track.track_title
    }));
    return [...buffered, ...upcoming];
}

function renderRadiographQueue(status, now) {
    const tracks = getRadiographUpcoming(status, now).slice(0, 7);
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
        const file = getRadiographTrackFile(track);
        const title = typeof track === "string" ? formatRadioTrackName(track) : (track?.title || formatRadioTrackName(file));
        const row = document.createElement("div");
        row.className = "radiograph-queue-item";
        const meta = index === 0 ? "Next up" : "In rotation";
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
    radiographLatestStationStatus = status;
    setRadiographListenerCount(status?.listener_count);
    const now = getAudibleRadiographTrack(status, getRadiographPlaybackTime());
    renderRadiographNowPlaying(status, now);
    renderRadiographQueue(status, now);
    updateRadiographCountdown();
    renderRadiographPublishedSongs();
}

function renderRadiographNowPlaying(status, now) {
    currentRadiographStartedAt = now?.started_at || "";
    const currentFile = now?.title || "";
    const tracks = Array.isArray(status?.tracks) ? status.tracks : [];
    const currentTrack = tracks.find(track => getRadiographTrackFile(track) === currentFile);
    currentRadiographHasRecipe = Boolean(now?.has_recipe ?? currentTrack?.has_recipe);
    currentRadiographCreatorName = now?.creator_name ?? currentTrack?.creator_name ?? "";
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
        radiographNowTitle.textContent = currentFile
            ? now.track_title || currentTrack?.title || formatRadioTrackName(currentFile)
            : "Waiting for station status";
    }
    if (radiographRotationRank) {
        const index = tracks.findIndex(track => (typeof track === "string" ? track : track?.file) === currentFile);
        radiographRotationRank.textContent = index >= 0 ? `Rotation #${index + 1}` : "Rotation sync";
    }
}

function updateRadiographCountdown() {
    const status = radiographLatestStationStatus;
    const playbackTime = getRadiographPlaybackTime();
    const now = getAudibleRadiographTrack(status, playbackTime);
    if (status && ((now?.title || "") !== currentRadiographFile
        || (now?.started_at || "") !== currentRadiographStartedAt)) {
        renderRadiographNowPlaying(status, now);
        renderRadiographQueue(status, now);
    }
    const wallTime = Date.now();
    const countdown = formatRadioTimeRemaining(now, playbackTime ?? wallTime);
    if (radiographNowMeta) {
        const nextTrack = getRadiographUpcoming(status, now)[0];
        const nextFile = getRadiographTrackFile(nextTrack) || now?.next_up;
        const nextTitle = nextTrack?.title || formatRadioTrackName(nextFile);
        const next = nextFile ? `Next: ${nextTitle}` : "Next track pending";
        const creator = currentRadiographCreatorName ? `By ${currentRadiographCreatorName} - ` : "";
        const text = now?.title
            ? `${creator}${countdown} - ${next}`
            : "The live stream can play before metadata is available.";
        if (radiographNowMeta.textContent !== text) radiographNowMeta.textContent = text;
    }
    // Load the next track's metadata while the listener is still hearing buffered audio.
    const newest = status?.playouts?.at(-1) ?? status?.now_playing;
    const newestEnd = Date.parse(newest?.started_at || "") + Number(newest?.duration_sec) * 1000;
    if (playbackTime !== null && radiographNowMeta?.closest(".page-view.is-active")
        && playbackTime >= newestEnd - 2000 && wallTime >= radiographBoundaryPollAfter && !radiographStationRequest) {
        radiographBoundaryPollAfter = wallTime + 3000;
        refreshRadiographStationStatus();
    }
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

function normalizeArrangementTags(value) {
    const parts = Array.isArray(value) ? value : value.split(",");
    const tags = new Map();
    for (const part of parts) {
        if (typeof part !== "string") continue;
        const tag = Array.from(part.trim()).slice(0, 40).join("");
        const key = tag.toLowerCase();
        if (tag && !tags.has(key)) tags.set(key, tag);
        if (tags.size === 10) break;
    }
    return [...tags.values()];
}

function getArrangementTags(record) {
    const meta = record?.midi_meta || record;
    if (!meta) return [];
    return normalizeArrangementTags(Array.isArray(meta.tags) ? meta.tags : [meta.category]);
}

async function loadSharedArrangementTags() {
    if (!supabaseClient) return;
    const tags = [];
    const pageSize = 500;
    for (let offset = 0; ; offset += pageSize) {
        const { data, error } = await supabaseClient
            .from("earb_arrangement_tags")
            .select("tag")
            .order("tag_key")
            .range(offset, offset + pageSize - 1);
        if (error) throw error;
        tags.push(...data.map(row => row.tag));
        if (data.length < pageSize) break;
    }
    sharedArrangementTags = tags;
    updateSharedTagOptions(stationFolderTag);
    updateSharedTagOptions(saveArrangementTagsInput);
    updateSharedTagOptions(librarianTagsInput);
}

function updateSharedTagOptions(input) {
    const comma = input === stationFolderTag ? -1 : input.value.lastIndexOf(",");
    const previous = input.value.slice(0, comma + 1);
    const current = input.value.slice(comma + 1);
    const prefix = previous + current.match(/^\s*/)[0];
    const selected = new Set(normalizeArrangementTags(previous).map(tag => tag.toLowerCase()));
    const search = current.trim().toLowerCase();
    input.list.replaceChildren(...sharedArrangementTags
        .filter(tag => !selected.has(tag.toLowerCase()) && tag.toLowerCase().includes(search))
        .slice(0, 100)
        .map(tag => new Option(tag, prefix + tag)));
}

function getMidiSourceFolder(source) {
    const folder = source?.folder ?? includedMidiFolders.get(source?.sample_id);
    if (folder === "" || (folder == null && source?.source_type === "sample")) return ".";
    return folder ?? null;
}

async function readMidiFolderTag(folder) {
    const { data, error } = await supabaseClient
        .from("earb_midi_folder_tags")
        .select("earb_arrangement_tags(tag)")
        .eq("folder", folder)
        .maybeSingle();
    if (error) throw error;
    return data?.earb_arrangement_tags?.tag ?? "";
}

function getRadioTagFilters(mode) {
    return {
        included: mode?.include_tags ?? (mode?.required_tag ? [mode.required_tag] : []),
        excluded: mode?.exclude_tags ?? []
    };
}

function radioFilterKey(mode) {
    return mode && JSON.stringify([mode.id, getRadioTagFilters(mode)]);
}

function describeRadioTagFilters(mode) {
    const { included, excluded } = getRadioTagFilters(mode);
    if (included.length === 1 && !excluded.length) {
        return `playing arrangements tagged “${included[0]}”`;
    }
    return [
        included.length ? `includes ${included.join(", ")}` : "",
        excluded.length ? `excludes ${excluded.join(", ")}` : ""
    ].filter(Boolean).join(" · ");
}

function isArrangementEligibleForMode(record, mode) {
    if (!mode) return false;
    const { included, excluded } = getRadioTagFilters(mode);
    const tags = new Set(getArrangementTags(record).map(tag => tag.toLowerCase()));
    return (!included.length || included.some(tag => tags.has(tag.toLowerCase())))
        && !excluded.some(tag => tags.has(tag.toLowerCase()));
}

async function refreshRadiographMode() {
    if (!supabaseClient) {
        radiographModeStatus.textContent = "Broadcast mode unavailable in this preview.";
        return;
    }
    const { data: mode, error } = await supabaseClient
        .from("earb_radio_current_mode")
        .select("*")
        .maybeSingle();
    if (error || !mode) {
        if (!radiographMode) radiographModeStatus.textContent = "Broadcast mode unavailable.";
        return;
    }
    const previousMode = radiographMode;
    radiographMode = mode;
    radiographModeStatus.textContent = `${mode.label} · ${describeRadioTagFilters(mode) || "all broadcasts"}`;
    if (radioFilterKey(previousMode) === radioFilterKey(mode)) return;

    radiographBroadcast = null;
    radiographPublishedRequest = null;
    radiographPublishedSongs = [];
    radiographPublishedLoaded = false;
    radiographPublishedError = false;
    if (arrangementsForBroadcast) hideArrangementsModal();
    updateRadiographBroadcastPanel();
    renderRadiographStationStatus({ tracks: [], upcoming: [] });
    radiographLeaderboardRows = { all_time: [], week: [] };
    renderRadiographLeaderboard();
    refreshRadiographLeaderboard();
}

function refreshRadiographStationStatus() {
    if (radiographStationRequest) return;

    refreshRecomposerNews();
    radiographStationRequest = (async () => {
        await refreshRadiographMode();
        refreshRadiographPublishedSongs();
        if (!radiographStatusUrl) return;
        const response = await fetch(radiographStatusUrl, { cache: "no-store" });
        const status = await response.json();
        if (!response.ok || !status?.ok) {
            throw new Error(status?.error || `Station status failed (${response.status}).`);
        }
        const modeId = status.mode_id || "everything";
        if (modeId === (radiographMode?.id || "everything") &&
            (!status.include_tags || radioFilterKey({ ...status, id: modeId }) === radioFilterKey(radiographMode))) {
            renderRadiographStationStatus(status);
        }
    })().catch((error) => {
        console.warn("RadioGraph station status failed:", error);
        radiographLatestStationStatus = null;
        radiographQueueCount.textContent = "offline";
        renderRadiographPublishedSongs();
    }).finally(() => {
        radiographStationRequest = null;
    });
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
    refreshRadiographStationStatus();
    radiographStatusTimer = setInterval(refreshRadiographStationStatus, 15000);
    clearInterval(radiographCountdownTimer);
    radiographCountdownTimer = setInterval(updateRadiographCountdown, 1000);
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
    const filterKey = radioFilterKey(radiographMode);
    if (!supabaseClient || !filterKey) {
        renderRadiographLeaderboard();
        return;
    }
    try {
        const { data, error } = await supabaseClient.rpc("earb_radio_leaderboards");
        if (error) {
            throw error;
        }
        if (radioFilterKey(radiographMode) !== filterKey) return;
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
    if (radiographAudio.canPlayType("application/vnd.apple.mpegurl")) {
        destroyRadiographHls();
        if (radiographAudio.src !== radiographStreamUrl) radiographAudio.src = radiographStreamUrl;
        return true;
    }
    setRadiographStatus("This browser needs HLS.js, but the HLS player script did not load.", true);
    setRadiographLiveState("error");
    return false;
}

function updateRadiographBroadcastPanel({ preserveSubmitStatus = false } = {}) {
    const isLoaded = Boolean(radiographBroadcast);
    radiographBroadcastArrangement.hidden = !isLoaded;
    radiographBroadcastArrangement.textContent = radiographBroadcast?.title || "";
    radiographLoadArrangementButton.disabled = radiographSubmitting || isLoaded || !radiographMode;
    radiographSubmitButton.disabled = radiographSubmitting || !isLoaded || !currentSupabaseUser?.id;
    if (!radiographSubmitting && !preserveSubmitStatus) {
        radiographSubmitStatus.textContent = !currentSupabaseUser?.id
            ? "Sign in to load a saved arrangement for broadcast."
            : isLoaded
                ? "Ready to submit this arrangement to the station."
                : "Save your arrangement under a new name in Recomposer before loading it here.";
        radiographSubmitStatus.classList.remove("error");
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
        if (radiographAudio.paused) return;
        startRadiographVolumeMeter();
        setRadiographStatus("Live radio is playing.");
        setRadiographLiveState("live");
        updateRadiographCountdown();
    } catch (error) {
        if (error?.name === "AbortError" && radiographAudio.paused) return;
        console.warn("Radio stream playback failed:", error);
        setRadiographStatus("Browser blocked or lost the live stream. Use reconnect after audio is allowed.", true);
        setRadiographLiveState("error");
    }
}

function toggleRadiographPlayback() {
    if (!radiographAudio || radiographAudio.paused) {
        playRadiographStream();
        return;
    }
    clearTimeout(radiographRecoveryTimer);
    radiographRecoveryTimer = null;
    radiographAudio.pause();
    radiographHls?.stopLoad();
    setRadiographStatus("Live radio paused.");
    setRadiographLiveState("standby");
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

async function loadArrangementForBroadcast(id, userId, mode) {
    const { data: record, error } = await supabaseClient
        .from("earb_user_midis")
        .select("id,name,midi_payload,midi_meta,earb_radio_submissions(id)")
        .eq("id", id)
        .eq("user_id", userId)
        .single();
    if (error) throw error;
    const title = record?.name?.trim();
    if (!title || record.midi_meta?.saved_from === "radiograph") {
        throw new Error("Save this arrangement under a new name in Recomposer first.");
    }
    if (!isArrangementEligibleForMode(record, mode)) {
        throw new Error(`This arrangement’s tags don’t match the rules for ${mode.label}.`);
    }
    if (record.earb_radio_submissions?.length) {
        throw new Error("This arrangement was already submitted. Its tags determine which shows play it.");
    }

    const source = record.midi_payload;
    let buffer;
    if (source?.encoding === "base64" && source.midi_base64) {
        buffer = base64ToArrayBuffer(source.midi_base64);
    } else if (source?.source_type === "sample" && source.source_url) {
        const response = await fetch(source.source_url);
        if (!response.ok) throw new Error("The saved MIDI could not be loaded.");
        buffer = await response.arrayBuffer();
    } else {
        throw new Error("This arrangement does not contain saved MIDI data.");
    }

    const meta = { ...record.midi_meta };
    let recipe = meta.broadcast_recipe;
    delete meta.broadcast_recipe;
    delete meta.category;
    delete meta.tags;
    if (!recipe) {
        const settings = meta.arrangement_settings || {};
        const parsed = await parseMidiBuffer(buffer);
        const tuningId = resolveSavedTuningId(settings.tuning_id || DEFAULT_TUNING_ID);
        const tuning = tuningId === DEFAULT_TUNING_ID
            ? { id: DEFAULT_TUNING_ID, table: equalTemperamentTable }
            : await fetchScalaTuning(tuningId);
        const mode = MODE_ADJUSTMENTS[settings.mode] ? settings.mode : DEFAULT_MODE;
        const transpose = clampTransposeValue(Number(settings.transpose_semitones ?? 0));
        const trackOverrides = Array.isArray(settings.track_overrides) ? settings.track_overrides : [];
        const programOverrides = trackOverrides.map(({ channel, bank_msb, program }) => ({
            channel, bank_msb, bank_lsb: 0, program
        }));
        const tempoPercent = clampTempoPercent(Number(settings.tempo_percent ?? 100));
        const bpm = clampTempoBpm(detectDefaultTempo(parsed) * tempoPercent / 100);
        recipe = createMidiSettingsDraft({
            name: title, byteLength: buffer.byteLength, mode, transpose, bpm, programOverrides, trackOverrides,
            tuning: buildRadioTuningRecipe(tuning, mode, transpose, settings.scala_preference || "lite")
        });
    }

    let keyframes = readSavedKeyframes(recipe.keyframes);
    if (keyframes.length < 2) {
        const previousKeyframes = readSavedKeyframes(meta.arrangement_keyframes);
        if (previousKeyframes.length > 1) {
            const parsed = await parseMidiBuffer(buffer);
            keyframes = buildRadioKeyframes(previousKeyframes, detectDefaultTempo(parsed));
        }
    }
    const hasKeyframes = keyframes.length > 1;
    const usesEmbeddedVoices = ["xg", "gm2"].includes(recipe.midi_voice_bank_mode);
    if (hasKeyframes) {
        const midi = new Midi(buffer);
        midi.tracks = midi.tracks.filter(track => track.notes.length > 0);
        const initialTracks = new Map(keyframes[0].settings.track_overrides.map(track => [track.track_index, track]));
        midi.tracks.forEach((track, index) => {
            stripProgramAndBankEvents(track);
            track.channel = initialTracks.get(index)?.channel ?? track.channel;
        });
        buffer = encodeMidiVoices(midi.toArray());
        recipe = {
            ...recipe,
            midi: { ...recipe.midi, duration_ticks: midi.durationTicks },
            keyframes,
            midi_voice_bank_mode: "xg"
        };
        delete meta.arrangement_keyframes;
    } else if (usesEmbeddedVoices) {
        const midi = new Midi(buffer);
        midi.tracks = midi.tracks.filter(track => track.notes.length > 0);
        const overrides = new Map(recipe.track_overrides.map(override => [override.track_index, override]));
        const banks = midi.tracks.map((track, index) => {
            const override = overrides.get(index);
            if (!override) return getDefaultTrackBank({ index });
            track.channel = override.channel;
            track.instrument.number = override.program;
            delete track.controlChanges[0];
            delete track.controlChanges[32];
            return override.bank_msb;
        });
        buffer = encodeMidiVoices(midi.toArray(), banks);
        recipe = { ...recipe, midi_voice_bank_mode: "xg" };
    }

    return {
        id: record.id,
        modeId: mode.id,
        filterKey: radioFilterKey(mode),
        title,
        tags: getArrangementTags(record),
        recipe: { ...recipe, midi: { ...recipe.midi, name: title, byte_length: buffer.byteLength } },
        payload: source.encoding === "base64" && !hasKeyframes && !usesEmbeddedVoices ? source : buildMidiPayload({
            source_type: "upload", file_name: buildArrangementFileName(title)
        }, buffer),
        meta
    };
}

async function submitRadiographArrangement(arrangement, userId) {
    const { id, title, payload, recipe } = arrangement;
    const creatorName = getRadiographCreatorName();
    const meta = {
        ...arrangement.meta,
        submitted_from: "radiograph",
        creator_name: creatorName,
        creator_user_id: userId
    };
    const { data, error } = await supabaseClient
        .from("earb_radio_submissions")
        .insert({
            user_id: userId,
            source_user_midi_id: id,
            mode_id: arrangement.modeId,
            title,
            creator_name: creatorName,
            status: "submitted",
            recipe,
            midi_payload: payload,
            midi_meta: meta
        })
        .select("id,title,status")
        .single();
    if (error) {
        if (error.code === "23505") {
            if (radiographBroadcast === arrangement) radiographBroadcast = null;
            throw new Error("This arrangement was already submitted. Its tags determine which shows play it.");
        }
        throw error;
    }
    if (currentSupabaseUser?.id === userId && radioFilterKey(radiographMode) === arrangement.filterKey) {
        radiographBroadcast = null;
        radiographPublishedRequest = null;
        radiographPublishedSongs = [
            { ...data, earb_user_midis: { tags: arrangement.tags } },
            ...radiographPublishedSongs.filter(song => song.id !== data.id)
        ];
        renderRadiographPublishedSongs();
        radiographSubmitStatus.textContent = `“${title}” submitted. Track it in Published Songs.`;
    }
    let renderResult;
    try {
        renderResult = await renderRadiographSubmissionOnDroplet(data.id);
    } catch (error) {
        throw new Error(`“${title}” was submitted, but rendering failed. ${error.message}`);
    }
    if (renderResult?.track_file && currentSupabaseUser?.id === userId) {
        await registerRenderedRadiographTrack(data, renderResult, title);
    }
    return { submission: data, render: renderResult };
}

async function renderRadiographSubmissionOnDroplet(submissionId) {
    const submitUrl = typeof APP_CONFIG.radioSubmitUrl === "string" ? APP_CONFIG.radioSubmitUrl.trim() : "";
    if (!submitUrl) {
        return null;
    }
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    const accessToken = data.session?.access_token;
    if (!accessToken) throw new Error("Sign in again before rendering this submission.");
    const response = await fetch(submitUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ submission_id: submissionId })
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
        fluidRenderer.setLoopEnabled(true);
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
        button.dataset.help = "Choose which playlist appears in the queue. All Songs shows your full library.";
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
    librarianEditTags.disabled = !currentSupabaseUser?.id || !getActiveLibrarianItem()?.recordId;
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
        button.dataset.help = "Load this song and add it to the selected playlist if it isn’t already there.";
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

librarianEditTags.addEventListener("click", () => {
    const item = getActiveLibrarianItem();
    if (!item?.recordId || !currentSupabaseUser?.id) return;
    librarianTagsDialog.dataset.itemId = item.id;
    librarianTagsInput.value = getArrangementTags(item.record).join(", ");
    librarianTagsStatus.textContent = `Tags for “${item.title}”. Separate tags with commas.`;
    librarianTagsDialog.showModal();
    updateSharedTagOptions(librarianTagsInput);
    loadSharedArrangementTags().catch(error => console.warn("Could not load shared arrangement tags:", error));
});

document.getElementById("librarian-tags-cancel").addEventListener("click", () => {
    librarianTagsDialog.close();
});
librarianTagsDialog.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const item = librarianItems.find(row => row.id === librarianTagsDialog.dataset.itemId);
    const userId = currentSupabaseUser?.id;
    if (!item?.recordId || !userId || librarianTagsSave.disabled) return;
    const tags = normalizeArrangementTags(librarianTagsInput.value);
    librarianTagsSave.disabled = true;
    try {
        const { data, error } = await supabaseClient.rpc("earb_set_arrangement_tags", {
            arrangement_id: item.recordId,
            new_tags: tags
        });
        if (error) throw error;
        if (!data) throw new Error("The saved arrangement is no longer available.");
        if (currentSupabaseUser?.id !== userId) return;
        const index = librarianItems.findIndex(row => row.id === item.id);
        if (index >= 0) {
            const record = librarianItems[index].record;
            const updated = { ...record, midi_meta: { ...record.midi_meta, tags } };
            librarianItems[index] = buildLibrarianItemFromRecord(updated, index, item.source);
        }
        if (activeLoadedLibrarianItemId === item.id && currentMidiSource) currentMidiSource.tags = tags;
        setActiveLibrarianItem(activeLibrarianItemId, { queue: false });
        setLibrarianStatus(tags.length ? `Tags saved for ${item.title}.` : `Tags cleared for ${item.title}.`);
        librarianTagsDialog.close();
    } catch (error) {
        if (currentSupabaseUser?.id === userId) {
            librarianTagsStatus.textContent = error?.message || "Could not save these tags.";
        }
    } finally {
        librarianTagsSave.disabled = false;
    }
});

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
        row.dataset.help = "Select a song from this playlist.";
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
        remove.dataset.help = "Remove this song from the playlist. It stays in your library.";
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
        row.querySelector(".queue-item__handle").dataset.help = "Drag a song up or down to change the playback order.";
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
        getArrangementTags(meta).join(", "),
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
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey
        || event.isComposing || isTextEntryTarget(event.target)) return;
    const target = event.target instanceof Element ? event.target : null;
    if (event.code === "Space" || event.key === " ") {
        if (event.shiftKey || document.querySelector("dialog[open], .modal:not(.is-hidden)")) return;
        const button = target?.closest("button, a[href], [role='button']");
        if (button?.matches(":focus-visible") && !button.matches(
            "#play, #pause, #librarian-play, #librarian-pause, .tab.is-active, .library-item.is-active, .playlist-item.is-active"
        )) return;

        const page = pageViews.find(view => view.classList.contains("is-active"))?.dataset.pageView;
        if (page !== "recomposer" && page !== "librarian" && page !== "radiograph") return;
        event.preventDefault();
        if (event.repeat) return;
        if (page === "radiograph") {
            toggleRadiographPlayback();
        } else if (!recordingActive) {
            if (page === "librarian") queuePlayToggleButton.click();
            else (isPlaying ? pauseButton : playButton).click();
        }
        return;
    }
    if (infoBubbles.open || target?.closest("#info-toggle, #rewind, .track-mix__button")) return;
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
    radiographPlayButton.addEventListener("click", toggleRadiographPlayback);
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
        updateRadiographCountdown();
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

radiographLoadArrangementButton.addEventListener("click", () => {
    openArrangementsModal({ forBroadcast: true });
});

radiographSubmitButton.addEventListener("click", async () => {
    const arrangement = radiographBroadcast;
    const userId = currentSupabaseUser?.id;
    if (radiographSubmitting || !arrangement || !userId) return;

    radiographSubmitting = true;
    updateRadiographBroadcastPanel();
    radiographSubmitStatus.textContent = `Submitting “${arrangement.title}”…`;
    radiographSubmitStatus.classList.remove("error");
    try {
        const result = await submitRadiographArrangement(arrangement, userId);
        if (currentSupabaseUser?.id === userId && radioFilterKey(radiographMode) === arrangement.filterKey) {
            radiographSubmitStatus.textContent = result.render?.track_file
                ? `“${arrangement.title}” is ready. Follow its position in Published Songs.`
                : `“${arrangement.title}” submitted. Track it in Published Songs.`;
        }
    } catch (error) {
        console.warn("RadioGraph submission failed:", error);
        if (currentSupabaseUser?.id === userId && radioFilterKey(radiographMode) === arrangement.filterKey) {
            radiographSubmitStatus.textContent = error?.message || "RadioGraph submission failed.";
            radiographSubmitStatus.classList.add("error");
        }
    } finally {
        radiographSubmitting = false;
        updateRadiographBroadcastPanel({ preserveSubmitStatus: currentSupabaseUser?.id === userId && radioFilterKey(radiographMode) === arrangement.filterKey });
        refreshRadiographStationStatus();
    }
});

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
        refreshRadiographPublishedSongs();
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
    fluidsynthBaseUrl: "assets/vendor/fluidsynth/",
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

function resolveSavedTuningId(tuningId) {
    const legacyBase = "https://jawnypants.github.io/MidiTuningAssets/";
    const legacySources = [
        ["assets/ScalaLite/", "scalaLiteBaseUrl"],
        ["assets/Scala%20Archive/", "scalaFullBaseUrl"]
    ];
    for (const [legacyPath, configKey] of legacySources) {
        const legacyPrefix = legacyBase + legacyPath;
        if (tuningId.startsWith(legacyPrefix)) {
            const currentBase = normalizeBaseUrl(APP_CONFIG[configKey], DEFAULT_CONFIG[configKey]);
            return currentBase + tuningId.slice(legacyPrefix.length);
        }
    }
    return tuningId;
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

async function syncStationOperator(userId) {
    stationOperatorId = null;
    stationControlTab.classList.add("is-hidden");
    tabsAuthRow.classList.remove("has-station-control");
    if (stationControlTab.classList.contains("is-active")) setActivePage("recomposer");
    if (!supabaseClient || !userId) return;
    try {
        const { data, error } = await supabaseClient.rpc("earb_is_station_operator");
        if (error) throw error;
        if (currentSupabaseUser?.id === userId && data === true) {
            stationOperatorId = userId;
            stationControlTab.classList.remove("is-hidden");
            tabsAuthRow.classList.add("has-station-control");
        }
    } catch (error) {
        console.warn("Station operator access could not be checked:", error);
    }
}

async function refreshRecomposerNews() {
    if (!supabaseClient) return;
    const request = ++recomposerNewsRequest;
    try {
        const { data, error } = await supabaseClient
            .from("earb_recomposer_news")
            .select("title,body")
            .maybeSingle();
        if (error) throw error;
        if (request !== recomposerNewsRequest) return;
        recomposerNewsHeading.textContent = data?.title || "";
        recomposerNewsBody.textContent = data?.body || "";
        recomposerNews.classList.toggle("is-hidden", !data);
    } catch (error) {
        console.warn("Recomposer news could not be loaded:", error);
    }
}

function showStationModeFilters() {
    const { included, excluded } = getRadioTagFilters(stationModes.get(stationModeSelect.value));
    stationIncludeTags.value = included.join(", ");
    stationExcludeTags.value = excluded.join(", ");
}

stationModeSelect.addEventListener("change", showStationModeFilters);

async function loadStationControl() {
    const userId = stationOperatorId;
    if (!userId) return;
    loadStationMidiFolder(userId);
    loadStationFolderTags(userId);
    stationModeSelect.disabled = true;
    stationIncludeTags.disabled = true;
    stationExcludeTags.disabled = true;
    stationModeSave.disabled = true;
    stationNewsTitle.disabled = true;
    stationNewsBody.disabled = true;
    stationNewsPublish.disabled = true;
    stationNewsRemove.disabled = true;
    stationModeStatus.textContent = "Loading station settings…";
    try {
        const { data, error } = await supabaseClient.rpc("earb_station_control");
        if (error) throw error;
        if (stationOperatorId !== userId) return;
        stationModes = new Map(data.modes.map(mode => [mode.id, mode]));
        stationModeSelect.replaceChildren(...data.modes.map(mode => new Option(mode.label, mode.id)));
        stationModeSelect.value = data.active_mode_id;
        showStationModeFilters();
        stationNewsTitle.value = data.news.title;
        stationNewsBody.value = data.news.body;
        stationModeSelect.disabled = false;
        stationIncludeTags.disabled = false;
        stationExcludeTags.disabled = false;
        stationModeSave.disabled = false;
        stationNewsTitle.disabled = false;
        stationNewsBody.disabled = false;
        stationNewsPublish.disabled = false;
        stationNewsRemove.disabled = !data.news.published;
        stationModeStatus.textContent = "";
        stationNewsStatus.textContent = data.news.published ? "Published on Recomposer." : "";
    } catch (error) {
        if (stationOperatorId === userId) stationModeStatus.textContent = error?.message || "Could not load station settings.";
    }
}

stationModeForm.addEventListener("submit", async event => {
    event.preventDefault();
    const userId = stationOperatorId;
    if (!userId || stationModeSave.disabled) return;
    const newMode = stationModeSelect.value;
    const included = stationIncludeTags.value.split(",").map(tag => tag.trim()).filter(Boolean);
    const excluded = stationExcludeTags.value.split(",").map(tag => tag.trim()).filter(Boolean);
    stationModeSave.disabled = true;
    stationModeSelect.disabled = true;
    stationIncludeTags.disabled = true;
    stationExcludeTags.disabled = true;
    stationModeStatus.textContent = "Changing the active show…";
    try {
        const { data: show, error } = await supabaseClient.rpc("earb_station_save_mode_filters", {
            new_mode: newMode, included, excluded
        });
        if (error) throw error;
        if (stationOperatorId !== userId) return;
        stationModes.set(show.id, show);
        showStationModeFilters();
        stationModeStatus.textContent = `${show.label} is active and starts with the next track.`;
        await radiographStationRequest;
        refreshRadiographStationStatus();
    } catch (error) {
        if (stationOperatorId === userId) stationModeStatus.textContent = error?.message || "Could not change the active show.";
    } finally {
        if (stationOperatorId === userId) {
            stationModeSave.disabled = false;
            stationModeSelect.disabled = false;
            stationIncludeTags.disabled = false;
            stationExcludeTags.disabled = false;
        }
    }
});

async function saveStationNews(publish) {
    const userId = stationOperatorId;
    if (!userId || stationNewsPublish.disabled) return;
    const wasPublished = !stationNewsRemove.disabled;
    stationNewsPublish.disabled = true;
    stationNewsRemove.disabled = true;
    let isPublished = wasPublished;
    try {
        const { data, error } = await supabaseClient.rpc("earb_station_set_news", {
            news_title: stationNewsTitle.value,
            news_body: stationNewsBody.value,
            make_public: publish
        });
        if (error) throw error;
        if (stationOperatorId !== userId) return;
        isPublished = data;
        stationNewsStatus.textContent = isPublished ? "Published on Recomposer." : "Removed from Recomposer.";
        await refreshRecomposerNews();
    } catch (error) {
        if (stationOperatorId === userId) stationNewsStatus.textContent = error?.message || "Could not update the announcement.";
    } finally {
        if (stationOperatorId === userId) {
            stationNewsPublish.disabled = false;
            stationNewsRemove.disabled = !isPublished;
        }
    }
}

stationNewsForm.addEventListener("submit", event => {
    event.preventDefault();
    saveStationNews(true);
});
stationNewsRemove.addEventListener("click", () => saveStationNews(false));

async function readDefaultMidiFolder() {
    if (!supabaseClient) return null;
    const { data, error } = await supabaseClient
        .from("earb_recomposer_midi_browser")
        .select("default_folder")
        .maybeSingle();
    if (error) throw error;
    return data?.default_folder ?? null;
}

async function loadStationMidiFolder(userId) {
    stationMidiFolder.disabled = true;
    stationMidiFolderSave.disabled = true;
    stationMidiFolderStatus.textContent = "Loading MIDI folders…";
    try {
        const [manifest, folder] = await Promise.all([loadSampleManifest(), readDefaultMidiFolder()]);
        if (stationOperatorId !== userId) return;
        if (!manifest) throw new Error("The included MIDI folders could not be loaded.");
        stationMidiFolder.replaceChildren(...Array.from(sampleFolderSelect.options, option => option.cloneNode(true)));
        stationMidiFolder.value = getSampleFolderValue(folder);
        stationMidiFolder.disabled = false;
        stationMidiFolderSave.disabled = false;
        stationMidiFolderStatus.textContent = folder && stationMidiFolder.value !== folder
            ? "The saved folder is unavailable. Load MIDI File opens with All folders."
            : "";
    } catch (error) {
        if (stationOperatorId === userId) {
            stationMidiFolderStatus.textContent = error?.message || "Could not load the default MIDI folder.";
        }
    }
}

stationMidiFolderForm.addEventListener("submit", async event => {
    event.preventDefault();
    const userId = stationOperatorId;
    if (!userId || stationMidiFolderSave.disabled) return;
    const value = stationMidiFolder.value;
    if (!value) return;
    const label = stationMidiFolder.selectedOptions[0].textContent;
    stationMidiFolder.disabled = true;
    stationMidiFolderSave.disabled = true;
    stationMidiFolderStatus.textContent = "Saving the default MIDI folder…";
    try {
        const { data, error } = await supabaseClient.rpc("earb_station_set_default_midi_folder", {
            folder: value === "__all__" ? null : value
        });
        if (error) throw error;
        if (stationOperatorId !== userId) return;
        sampleModalRequest++;
        defaultMidiFolder = data;
        stationMidiFolderStatus.textContent = `Load MIDI File now opens with ${label}.`;
    } catch (error) {
        if (stationOperatorId === userId) {
            stationMidiFolderStatus.textContent = error?.message || "Could not save the default MIDI folder.";
        }
    } finally {
        if (stationOperatorId === userId) {
            stationMidiFolder.disabled = false;
            stationMidiFolderSave.disabled = false;
        }
    }
});

function showStationFolderTag() {
    stationFolderTag.value = folderTags.get(stationTagFolder.value) || "";
    updateSharedTagOptions(stationFolderTag);
    stationFolderTagStatus.textContent = "";
}

stationTagFolder.addEventListener("change", showStationFolderTag);
for (const input of [stationFolderTag, saveArrangementTagsInput, librarianTagsInput]) {
    input.addEventListener("input", () => updateSharedTagOptions(input));
    input.addEventListener("focus", () => updateSharedTagOptions(input));
}

async function loadStationFolderTags(userId) {
    stationTagFolder.disabled = true;
    stationFolderTag.disabled = true;
    stationFolderTagSave.disabled = true;
    stationFolderTagStatus.textContent = "Loading MIDI folder tags…";
    try {
        const [manifest, rules] = await Promise.all([
            loadSampleManifest(),
            supabaseClient.from("earb_midi_folder_tags").select("folder,earb_arrangement_tags(tag)"),
            loadSharedArrangementTags()
        ]);
        if (stationOperatorId !== userId) return;
        if (rules.error) throw rules.error;
        if (!manifest) throw new Error("The included MIDI folders could not be loaded.");
        const previous = stationTagFolder.value;
        const options = Array.from(sampleFolderSelect.options)
            .filter(option => option.value !== "__all__")
            .map(option => new Option(option.textContent, option.value === "__root__" ? "." : option.value));
        stationTagFolder.replaceChildren(...options);
        if (!options.length) throw new Error("There are no MIDI folders to configure.");
        if (options.some(option => option.value === previous)) stationTagFolder.value = previous;
        folderTags = new Map(rules.data.map(row => [row.folder, row.earb_arrangement_tags?.tag]));
        showStationFolderTag();
        stationTagFolder.disabled = false;
        stationFolderTag.disabled = false;
        stationFolderTagSave.disabled = false;
    } catch (error) {
        if (stationOperatorId === userId) {
            stationFolderTagStatus.textContent = error?.message || "Could not load default folder tags.";
        }
    }
}

stationFolderTagForm.addEventListener("submit", async event => {
    event.preventDefault();
    const userId = stationOperatorId;
    const folder = stationTagFolder.value;
    if (!userId || !folder || stationFolderTagSave.disabled) return;
    const tag = stationFolderTag.value.trim();
    if (Array.from(tag).length > 40 || tag.includes(",")) {
        stationFolderTagStatus.textContent = "Enter one tag of up to 40 characters.";
        return;
    }
    stationTagFolder.disabled = true;
    stationFolderTag.disabled = true;
    stationFolderTagSave.disabled = true;
    stationFolderTagStatus.textContent = "Saving the folder tag…";
    try {
        const { data, error } = await supabaseClient.rpc("earb_station_set_folder_tag", {
            folder_name: folder,
            default_tag: tag || null
        });
        if (error) throw error;
        if (stationOperatorId !== userId) return;
        if (data) folderTags.set(folder, data);
        else folderTags.delete(folder);
        showStationFolderTag();
        const label = stationTagFolder.selectedOptions[0].textContent;
        stationFolderTagStatus.textContent = data
            ? `${label} now suggests “${data}”.`
            : `Default tag cleared for ${label}.`;
        loadSharedArrangementTags().catch(error => console.warn("Could not refresh shared arrangement tags:", error));
    } catch (error) {
        if (stationOperatorId === userId) {
            stationFolderTagStatus.textContent = error?.message || "Could not save the folder tag.";
        }
    } finally {
        if (stationOperatorId === userId) {
            stationTagFolder.disabled = false;
            stationFolderTag.disabled = false;
            stationFolderTagSave.disabled = false;
        }
    }
});

function updateAuthUiForUser(user) {
    const previousUserId = currentSupabaseUser?.id;
    currentSupabaseUser = user || null;
    if (previousUserId !== currentSupabaseUser?.id) {
        syncStationOperator(currentSupabaseUser?.id);
        librarianTagsDialog.close();
        radiographBroadcast = null;
        if (arrangementsForBroadcast) hideArrangementsModal();
        radiographPublishedRequest = null;
        radiographPublishedSongs = [];
        radiographPublishedLoaded = false;
        radiographPublishedError = false;
        renderRadiographPublishedSongs();
        refreshRadiographPublishedSongs();
    }
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
        updateRadiographBroadcastPanel();
        syncRadiographCurrentTrackRating();
        updateLibrarianCommentControls();
        return;
    }
    if (currentSupabaseUser?.email) {
        setAuthStatus(`Signed in as ${currentSupabaseUser.email}. Cloud settings sync is active.`, false);
        setSaveArrangementEnabled(true);
        updateRadiographBroadcastPanel();
        syncRadiographCurrentTrackRating();
        updateLibrarianCommentControls();
        return;
    }
    setAuthStatus("Not signed in. Your cloud settings are currently unavailable.", false);
    setSaveArrangementEnabled(false);
    updateRadiographBroadcastPanel();
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
    arrangementsPickerRequest = null;
    arrangementsBusy = false;
}

function setSaveArrangementStatus(message, isError = false) {
    if (!saveArrangementStatus) {
        return;
    }
    saveArrangementStatus.textContent = message;
    saveArrangementStatus.classList.toggle("error", Boolean(isError));
}

async function showSaveArrangementModal(defaultName = "") {
    if (!saveArrangementModal) {
        return;
    }
    saveArrangementModal.classList.remove("is-hidden");
    if (saveArrangementNameInput) {
        saveArrangementNameInput.value = defaultName;
        saveArrangementNameInput.focus();
        saveArrangementNameInput.select();
    }
    const request = ++saveArrangementTagRequest;
    const source = currentMidiSource;
    const tags = Array.isArray(source?.tags) ? source.tags : null;
    const folder = getMidiSourceFolder(source);
    const status = "Use an existing name to overwrite, or a new name to save separately.";
    saveArrangementTagsInput.value = tags?.join(", ") || "";
    setSaveArrangementStatus(status, false);
    updateSharedTagOptions(saveArrangementTagsInput);
    loadSharedArrangementTags().catch(error => console.warn("Could not load shared arrangement tags:", error));
    saveArrangementConfirmButton.disabled = false;
    if (tags || !folder) return;
    let edited = false;
    const markEdited = () => { edited = true; };
    saveArrangementTagsInput.addEventListener("input", markEdited, { once: true });
    saveArrangementConfirmButton.disabled = true;
    try {
        const defaultTag = await withTimeout(readMidiFolderTag(folder), CLOUD_SAVE_TIMEOUT_MS, "The default folder tag could not be loaded.");
        if (request !== saveArrangementTagRequest || source !== currentMidiSource) return;
        if (!edited && defaultTag) {
            saveArrangementTagsInput.value = defaultTag;
            updateSharedTagOptions(saveArrangementTagsInput);
        }
    } catch (error) {
        if (request === saveArrangementTagRequest) setSaveArrangementStatus(`${status} The default folder tag could not be loaded.`, false);
    } finally {
        saveArrangementTagsInput.removeEventListener("input", markEdited);
        if (request === saveArrangementTagRequest) saveArrangementConfirmButton.disabled = false;
    }
}

function hideSaveArrangementModal() {
    if (!saveArrangementModal) {
        return;
    }
    saveArrangementTagRequest++;
    saveArrangementModal.classList.add("is-hidden");
}

function selectSavedArrangement(recordId) {
    if (arrangementsBusy) return;
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
    if (!arrangementsForBroadcast) mergeSavedSongRecordsIntoLibrarian(savedArrangementsCache);
    selectedArrangementId = null;
    if (!savedArrangementsCache.length) {
        const empty = document.createElement("div");
        empty.className = "arrangements-list__empty";
        empty.textContent = arrangementsForBroadcast ? "No arrangements available for broadcast" : "No stored arrangements yet";
        arrangementsList.appendChild(empty);
        arrangementsLoadButton.disabled = true;
        setArrangementsStatus(arrangementsForBroadcast
            ? describeRadioTagFilters(radiographMode)
                ? "Save an arrangement whose tags match the active show’s rules."
                : "Save an arrangement under a new name in Recomposer to submit it."
            : "There are no stored arrangements yet.", false);
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
        const meta = document.createElement("span");
        meta.className = "arrangements-list__meta";
        const tags = getArrangementTags(record).join(", ");
        meta.textContent = tags ? `${tags} · ${stamp}` : stamp;
        button.append(record.name || "Untitled arrangement", meta);
        button.setAttribute("role", "option");
        button.setAttribute("aria-selected", "false");
        button.addEventListener("click", () => {
            selectSavedArrangement(record.id || index);
        });
        arrangementsList.appendChild(button);
    });
    selectSavedArrangement(savedArrangementsCache[0]?.id ?? "0");
    setArrangementsStatus(arrangementsForBroadcast
        ? "Choose a saved arrangement to load for broadcast."
        : "Choose a saved arrangement to load.", false);
}

async function openArrangementsModal({ forBroadcast = false } = {}) {
    const user = await resolveCurrentSupabaseUser();
    if (!supabaseClient || !user?.id) {
        if (!forBroadcast) setStatus("Sign in to load saved arrangements.", true);
        showAuthModal();
        return;
    }
    const mode = radiographMode;
    if (forBroadcast && (radiographSubmitting || radiographBroadcast || !mode)) return;

    arrangementsForBroadcast = forBroadcast;
    const request = {};
    arrangementsPickerRequest = request;
    arrangementsBusy = false;
    document.getElementById("arrangements-modal-title").textContent =
        forBroadcast ? "Load Arrangement for Broadcast" : "Load Arrangement";
    arrangementsList.replaceChildren();
    arrangementsLoadButton.disabled = true;
    setArrangementsStatus("Loading saved arrangements…", false);
    showArrangementsModal();
    try {
        const { data, error } = await withTimeout(
            supabaseClient
                .from("earb_user_midis")
                .select(forBroadcast
                    ? "id,name,created_at,saved_from:midi_meta->>saved_from,tags:midi_meta->tags,category:midi_meta->>category,earb_radio_submissions(id)"
                    : "id,name,midi_payload,midi_meta,created_at")
                .eq("user_id", user.id)
                .order("created_at", { ascending: false })
                .limit(100),
            CLOUD_SAVE_TIMEOUT_MS,
            "Loading saved arrangements timed out. Refresh the page and try again."
        );
        if (arrangementsPickerRequest !== request) return;
        if (error) throw error;
        const records = Array.isArray(data) ? data : [];
        renderSavedArrangements(forBroadcast
            ? records.filter(record => record.name?.trim() && record.saved_from !== "radiograph"
                && isArrangementEligibleForMode(record, mode)
                && !record.earb_radio_submissions?.length)
            : records);
    } catch (error) {
        if (arrangementsPickerRequest !== request) return;
        console.warn("Failed to load saved arrangements:", error);
        setArrangementsStatus(error?.message || "Unable to load saved arrangements.", true);
    }
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
        const savedTuningId = typeof snapshot.tuning_id === "string" && snapshot.tuning_id
            ? snapshot.tuning_id
            : DEFAULT_TUNING_ID;
        const nextTuning = resolveSavedTuningId(savedTuningId);
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
            trackPrograms.set(slot, track.program);
            trackBanks.set(slot, track.bank);
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
            const program = clampProgram(override.program ?? trackPrograms.get(trackIndex));
            trackPrograms.set(trackIndex, program);
            trackBanks.set(
                trackIndex,
                Number.isFinite(override.bank_msb) ? override.bank_msb : getTrackBank(trackIndex, channel)
            );
            trackVolumes.set(trackIndex, clampTrackVolume(Number(override.volume)));
            trackTransposes.set(
                trackIndex,
                clampTrackTransposeValue(Number.parseInt(override.transpose_semitones, 10), 0)
            );
            const snapshotEntry = channelAssignmentsSnapshot.find(entry => entry.trackIndex === trackIndex);
            if (snapshotEntry) {
                snapshotEntry.program = program;
                snapshotEntry.bank = getTrackBank(trackIndex, channel);
            }
        });
        renderInstrumentMenus();
        applyAllProgramOverrides();
        applyAllChannelVolumes();
        if (activeKeyframe) Object.assign(activeKeyframe, captureKeyframe(activeKeyframe.position));
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

function getDefaultTrackBank(track) {
    return (track.index ?? track.slot) === 9 ? GM_PERCUSSION_BANK : GM_MELODIC_BANK;
}

function getPercussionProgramName(program) {
    return program ? `Percussion Set (program ${program})` : "Percussion Set";
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
let arrangementsForBroadcast = false;
let arrangementsPickerRequest = null;
let arrangementsBusy = false;
const trackVisualState = new Map();
const METER_WINDOW_SECONDS = 0.35;
const METER_DECAY = 0.78;
const METER_ATTACK = 0.45;
const sampleMidiMap = new Map();
const includedMidiFolders = new Map();
let openSampleModal = null;
let sampleManifestRequest = null;
let sampleManifest = [];
let defaultMidiFolder = null;
let sampleModalRequest = 0;
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
        if (Number.isFinite(channel) && (!sharedTrackChannels.has(channel) || isTrackAudible(trackIndex))) {
            fluidRenderer.programChange(channel, clampProgram(program), getTrackBank(trackIndex, channel));
        }
    });
    applyAllChannelVolumes();
    logProgramAssignments("applyAllProgramOverrides");
}

function isTrackAudible(slot) {
    return !mutedTracks.has(slot) && (!soloedTracks.size || soloedTracks.has(slot));
}

function applyAllChannelVolumes() {
    if (!fluidRenderer || typeof fluidRenderer.setChannelVolume !== "function") {
        return;
    }
    const channelVolumes = new Map();
    trackChannels.forEach((channel, slot) => {
        if (isTrackAudible(slot)) {
            channelVolumes.set(channel, clampTrackVolume(trackVolumes.get(slot) ?? 1));
        } else if (!channelVolumes.has(channel)) {
            channelVolumes.set(channel, 0);
        }
    });
    channelVolumes.forEach((volume, channel) => {
        fluidRenderer.setChannelVolume(channel, volume * 127);
        if (typeof fluidRenderer.setChannelExpression === "function") {
            fluidRenderer.setChannelExpression(channel, volume === 0 ? 0 : 127);
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
    workletUrl: "js/fluid-worklet.js?v=2",
    getSoundfontCandidates,
    defaultTempoBpm: DEFAULT_TEMPO_BPM
});
window.__fluidRenderer = fluidRenderer;
fluidRenderer.setProgressCallback(setStatusProgress);
function followPlaybackKeyframes(seconds, untilNextBlock) {
    if (isUserScrubbing || !fluidRenderer.songDuration) return;
    const frame = keyframeAt((seconds + untilNextBlock) / fluidRenderer.songDuration);
    if (frame && frame.position > activeKeyframe.position) applyKeyframe(frame);
}
fluidRenderer.onPlaybackLoop = () => {
    prepareKeyframesForPlayback(0);
    playbackStartTime = getAudioContext().currentTime;
    if (!isUserScrubbing) updateProgressUI(0);
};
fluidRenderer.onPlaybackComplete = async () => {
    if (recordingActive) await stopRecordingSession(true);
    stopPlayback(true);
};

let midiWorker = null;
let workerRequestId = 0;
const workerRequests = new Map();
let latestSelectionToken = 0;

if (typeof Worker !== "undefined") {
    try {
        midiWorker = new Worker("js/midi-worker.js?v=2");
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
const sharedTrackChannels = new Set();
const mutedTracks = new Set();
const soloedTracks = new Set();
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
helpToggle.addEventListener("change", () => {
    helpToggleText.textContent = helpToggle.checked ? "Hide Help Bubbles" : "Show Help Bubbles";
    if (helpToggle.checked) showControlHelp(helpToggle);
    else hideControlHelp();
});

document.addEventListener("pointerover", event => {
    if (helpToggle.checked && event.pointerType !== "touch" && event.target instanceof Element) {
        showControlHelp(event.target);
    }
});
document.addEventListener("pointerout", event => {
    if (helpTarget?.contains(event.target) && !helpTarget.contains(event.relatedTarget)) {
        hideControlHelp();
    }
});
document.addEventListener("focusin", event => {
    if (helpToggle.checked && event.target instanceof Element) showControlHelp(event.target);
});
document.addEventListener("focusout", event => {
    if (helpTarget?.contains(event.target)) hideControlHelp();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") hideControlHelp();
});
document.addEventListener("scroll", hideControlHelp, true);
window.addEventListener("resize", hideControlHelp);

infoToggle.addEventListener("click", () => setInfoVisibility(true));
infoBubbles.addEventListener("close", () => infoToggle.classList.remove("is-on"));
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
        const record = savedArrangementsCache.find(item => String(item.id) === selectedArrangementId);
        if (!record || arrangementsBusy) return;

        const request = arrangementsPickerRequest;
        const forBroadcast = arrangementsForBroadcast;
        const mode = radiographMode;
        const userId = currentSupabaseUser?.id;
        arrangementsBusy = true;
        arrangementsLoadButton.disabled = true;
        setArrangementsStatus(`Loading ${record.name || "arrangement"}…`, false);
        try {
            if (forBroadcast) {
                const arrangement = await withTimeout(
                    loadArrangementForBroadcast(record.id, userId, mode),
                    CLOUD_SAVE_TIMEOUT_MS,
                    "Loading this arrangement for broadcast timed out. Try again."
                );
                if (arrangementsPickerRequest !== request || currentSupabaseUser?.id !== userId) return;
                radiographBroadcast = arrangement;
                updateRadiographBroadcastPanel();
            } else {
                await withTimeout(
                    loadCloudMidiRecord(record, { statusMessage: `Arrangement loaded: ${record.name || "Saved arrangement"}` }),
                    CLOUD_SAVE_TIMEOUT_MS,
                    "Loading arrangement timed out. Refresh the page and try again."
                );
            }
            if (arrangementsPickerRequest === request) hideArrangementsModal();
        } catch (error) {
            if (arrangementsPickerRequest === request) {
                console.error("Failed to load arrangement:", error);
                setArrangementsStatus(error?.message || "Unable to load arrangement.", true);
            }
        } finally {
            if (arrangementsPickerRequest === request) {
                arrangementsBusy = false;
                arrangementsLoadButton.disabled = !selectedArrangementId;
            }
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
            await saveArrangementToLibrary(arrangementName, normalizeArrangementTags(saveArrangementTagsInput.value));
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
rewindButton.addEventListener("click", () => seekRecomposer(0));
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

progressBar.addEventListener("change", () => seekRecomposer(pauseOffset));

async function seekRecomposer(seconds) {
    if (!currentSong || !isPrepared || recordingActive) {
        return;
    }
    const request = ++playbackRequest;
    pauseOffset = seconds;
    try {
        if (isPlaying) {
            const success = await scheduleNotesFromOffset(seconds);
            if (request !== playbackRequest) return;
            if (success) {
                pauseOffset = 0;
                startProgressUpdates();
            } else {
                isPlaying = false;
                stopProgressUpdates(false);
            }
        } else {
            dismissKeyframePrompt();
            await fluidRenderer.seek(prepareKeyframesForPlayback(seconds));
        }
        if (request === playbackRequest) updateProgressUI(seconds, { overrideScrubLock: true });
    } catch (error) {
        if (request === playbackRequest) setStatus(error?.message || "Unable to seek.", true);
    } finally {
        if (request === playbackRequest) isUserScrubbing = false;
    }
}

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
    recordKeyframeSettings({ tempo_percent: currentTempoPercent });
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
        recordKeyframeSettings({ tempo_percent: currentTempoPercent });
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
        recordKeyframeSettings({ mode: currentMode });
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
    await initSupabaseAuth();
    startRadiographStatusPolling();
    startRadiographLeaderboardRotation();
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
    refreshDefaultMidiFolder(sampleModalRequest);
    updateRadiographBroadcastPanel();
}

bootstrapPromise = bootstrapApp().catch((error) => {
    console.error("App bootstrap failed:", error);
    throw error;
});

async function loadMidiFromBuffer(buffer, displayName = "MIDI file", source = null, selectionToken = ++latestSelectionToken) {
    if (selectionToken !== latestSelectionToken) return false;
    await ensureAudioReady().catch((error) => {
        console.warn("Audio context not ready yet:", error);
    });
    if (selectionToken !== latestSelectionToken) return false;
    resetPlaybackState();
    setStatus(`Parsing ${displayName}...`, false);
    try {
        const parsedSong = await parseMidiBuffer(buffer);
        if (selectionToken !== latestSelectionToken) return false;

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
        mutedTracks.clear();
        soloedTracks.clear();
        sharedTrackChannels.clear();
        trackChannels.clear();
        trackPrograms.clear();
        trackBanks.clear();
        trackVolumes.clear();
        trackTransposes.clear();
        const usedChannels = new Set();
        const sourceChannels = new Set(playableTracks.map(track => track.channel));
        const freeChannels = Array.from({ length: 16 }, (_, channel) => channel)
            .filter(channel => !sourceChannels.has(channel));
        const channelAssignments = [];
        playableTracks.forEach((track, idx) => {
            const slot = idx;
            track.slot = slot;
            let channel = Number.isFinite(track.channel)
                ? Math.max(0, Math.min(15, Math.round(track.channel)))
                : idx % 16;
            if (!Number.isFinite(track.channel)) {
                console.warn("Track has no MIDI channel. Falling back to channel", channel + 1);
            }
            if (usedChannels.has(channel)) {
                if (freeChannels.length) {
                    channel = freeChannels.shift();
                } else {
                    sharedTrackChannels.add(channel);
                }
            }
            usedChannels.add(channel);
            track.channelNumber = channel;
            trackChannels.set(slot, channel);
            const initialProgram = track.program;
            const initialBank = track.bank;
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
            targetBpm: currentTempoBpm,
            totalTicks: parsedSong.durationTicks
        };
        const playbackMidi = buildTransformedMidiBuffer(baseMidiBuffer);
        await fluidRenderer.loadMidi(
            encodeMidiVoices(playbackMidi),
            currentSongBaseDuration,
            channelAssignmentsSnapshot,
            tempoSnapshot
        );
        if (selectionToken !== latestSelectionToken) return false;
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
        arrangementKeyframes = [captureKeyframe(0)];
        activeKeyframe = arrangementKeyframes[0];
        dismissKeyframePrompt();
        setStatus("Loaded. Press Play to start.", false);
        setSaveArrangementEnabled(true);
        queueCloudSettingsSave();
        return true;
    } catch (error) {
        if (selectionToken !== latestSelectionToken) return false;
        console.error(error);
        setStatus(error && error.message ? error.message : "Failed to load MIDI file.", true);
        handleLoadFailure();
        return false;
    }
}

async function handleMidiSelection(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
        return;
    }

    const selectionToken = ++latestSelectionToken;
    hideSampleModal();
    setStatus(`Reading ${file.name}...`, false);
    try {
        const buffer = await file.arrayBuffer();
        await loadMidiFromBuffer(buffer, file.name, {
            source_type: "upload",
            file_name: file.name
        }, selectionToken);
    } catch (error) {
        if (selectionToken !== latestSelectionToken) return;
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
    return normalizeMidiSource(arrayBuffer);
}

function renderInstrumentMenus() {
    instrumentGrid.innerHTML = "";
    trackVisualState.clear();
    updateSongInstrumentSummary();
    playableTracks.forEach(track => {
        const channel = track.channelNumber ?? track.channel ?? trackChannels.get(track.slot) ?? 0;
        const trackLabelNumber = Number.isFinite(track.index) ? (track.index + 1) : (track.slot + 1);
        const card = document.createElement("div");
        card.className = "track-row";

        const meter = document.createElement("div");
        meter.className = "track-meter";
        meter.dataset.help = "Shows the track name, MIDI channel, and note activity during playback.";
        const meterFill = document.createElement("div");
        meterFill.className = "track-meter__fill";
        const meterLabel = document.createElement("div");
        meterLabel.className = "track-meter__label";
        meterLabel.textContent = `${track.name} (Track ${trackLabelNumber}, Ch ${channel + 1})`;
        meter.appendChild(meterFill);
        meter.appendChild(meterLabel);

        const select = document.createElement("select");
        select.dataset.help = "Choose the instrument/voice for this track. Select Percussion Set to use drum sounds.";
        const bank = getTrackBank(track.slot, channel);
        const program = trackPrograms.get(track.slot) ?? 0;
        select.appendChild(new Option("Percussion Set", buildInstrumentOptionValue(GM_PERCUSSION_BANK, 0)));
        if (bank === GM_PERCUSSION_BANK && program !== 0) {
            select.appendChild(new Option(getPercussionProgramName(program), buildInstrumentOptionValue(bank, program)));
        }
        GM_INSTRUMENTS.forEach((instrumentName, programNumber) => {
            const option = document.createElement("option");
            option.value = buildInstrumentOptionValue(GM_MELODIC_BANK, programNumber);
            option.textContent = `${programNumber.toString().padStart(3, "0")} - ${instrumentName}`;
            select.appendChild(option);
        });
        select.value = buildInstrumentOptionValue(bank, program);
        select.addEventListener("change", () => {
            const nextSelection = parseInstrumentOptionValue(select.value, channel);
            const previousBank = getTrackBank(track.slot);
            trackPrograms.set(track.slot, nextSelection.program);
            trackBanks.set(track.slot, nextSelection.bank);
            const assignment = channelAssignmentsSnapshot.find(item => item.trackIndex === track.slot);
            if (assignment) {
                Object.assign(assignment, nextSelection);
                if (!sharedTrackChannels.has(channel) || isTrackAudible(track.slot)) {
                    fluidRenderer.programChange(assignment.channel, assignment.program, assignment.bank);
                }
            }
            setStatus(`Instrument preference stored for ${track.name}`, false);
            updateSongInstrumentSummary();
            recordKeyframeTrackSettings(track.slot, { bank_msb: nextSelection.bank, program: nextSelection.program });
            if (arrangementKeyframes.length > 1 && previousBank !== nextSelection.bank && trackTransposes.get(track.slot)) {
                scheduleArrangementRefresh("Keyframe instrument updated.");
            }
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
        volumeInput.dataset.help = "Adjust this track’s loudness independently of the other tracks.";
        volumeInput.min = TRACK_VOLUME_RANGE.min.toString();
        volumeInput.max = TRACK_VOLUME_RANGE.max.toString();
        volumeInput.step = "0.01";
        volumeInput.value = initialVolume.toString();
        volumeInput.style.setProperty("--volume-fill", `${(initialVolume * 100).toFixed(0)}%`);
        volumeInput.addEventListener("input", () => {
            const nextValue = clampTrackVolume(Number(volumeInput.value));
            trackVolumes.set(track.slot, nextValue);
            recordKeyframeTrackSettings(track.slot, { volume: nextValue });
            volumeValue.textContent = formatTrackVolumeLabel(nextValue);
            volumeInput.style.setProperty("--volume-fill", `${(nextValue * 100).toFixed(0)}%`);
            applyAllChannelVolumes();
        });
        volumeInput.addEventListener("change", queueCloudSettingsSave);
        volumeWrap.appendChild(volumeInput);
        volumeWrap.appendChild(volumeLabel);
        volumeWrap.appendChild(volumeValue);

        const transposeWrap = document.createElement("div");
        transposeWrap.className = "track-transpose";
        transposeWrap.dataset.help = "Shift only this track. Each step moves the notes by one semitone, or selects neighboring drum sounds on a percussion track.";
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
            recordKeyframeTrackSettings(track.slot, { transpose_semitones: nextValue });
            trackTransposeInput.value = nextValue.toString();
            const statusMessage = `Track transpose updated: ${track.name} ${nextValue >= 0 ? "+" : ""}${nextValue}`;
            const channelNumber = track.channelNumber ?? track.channel ?? trackChannels.get(track.slot) ?? 0;
            if (getTrackBank(track.slot, channelNumber) === GM_PERCUSSION_BANK) {
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

        const mixControls = document.createElement("div");
        mixControls.className = "track-mix";
        const mixActions = [
            { label: "Mute", tracks: mutedTracks, help: "Silence this track without changing its volume setting." },
            { label: "Solo", tracks: soloedTracks, help: "Hear only the tracks marked Solo. You can solo several at once. Mute still takes priority." }
        ];
        for (const { label, tracks, help } of mixActions) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = `track-mix__button track-mix__button--${label.toLowerCase()}`;
            button.textContent = label;
            button.setAttribute("aria-label", `${label} ${track.name} (Track ${trackLabelNumber})`);
            button.setAttribute("aria-pressed", String(tracks.has(track.slot)));
            button.dataset.help = help;
            button.addEventListener("click", () => {
                const previouslySilenced = getSilencedSharedTracks();
                if (!tracks.delete(track.slot)) tracks.add(track.slot);
                button.setAttribute("aria-pressed", String(tracks.has(track.slot)));
                applyAllChannelVolumes();
                updateTrackActivityVisuals(isPlaying ? getElapsedPlaybackSeconds() : pauseOffset);
                const silenced = getSilencedSharedTracks();
                if (silenced.size !== previouslySilenced.size
                    || [...silenced].some(slot => !previouslySilenced.has(slot))) {
                    scheduleArrangementRefresh("Track mix updated.", { mixOnly: true });
                }
            });
            mixControls.appendChild(button);
        }
        const trackTools = document.createElement("div");
        trackTools.className = "track-stack";
        trackTools.append(transposeWrap, mixControls);

        const controlRow = document.createElement("div");
        controlRow.className = "track-controls";
        const controlStack = document.createElement("div");
        controlStack.className = "track-stack track-stack--instrument";
        controlStack.appendChild(meter);
        controlStack.appendChild(select);
        controlStack.appendChild(volumeWrap);
        controlRow.appendChild(controlStack);
        controlRow.appendChild(trackTools);
        card.appendChild(controlRow);
        instrumentGrid.appendChild(card);
    });
}

function updateSongInstrumentSummary() {
    if (!currentSong) return;
    songDisplay.value = summarizeMidi({
        ...currentSong,
        tracks: playableTracks.map(track => ({
            ...track,
            channel: trackChannels.get(track.slot),
            instrumentName: getTrackBank(track.slot) === GM_PERCUSSION_BANK
                ? getPercussionProgramName(trackPrograms.get(track.slot))
                : getInstrumentName(trackPrograms.get(track.slot))
        }))
    });
}

async function play() {
    if (!currentSong) {
        return;
    }
    const request = ++playbackRequest;
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

    if (request !== playbackRequest) return;
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
    isPlaying = true;
    pauseOffset = 0;
    startProgressUpdates();
    setStatus("Playing...", false);
}

function pausePlayback() {
    playbackRequest++;
    if (!isPlaying) {
        return;
    }
    const elapsed = getElapsedPlaybackSeconds();
    fluidRenderer.pause();
    const ctx = audioContext;
    const duration = getTimelineDuration();
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
    playbackRequest++;
    isPlaying = false;
    pauseOffset = 0;
    playbackStartTime = 0;
    isUserScrubbing = false;
    fluidRenderer.stop();
    dismissKeyframePrompt();
    prepareKeyframesForPlayback(0);
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

function readSavedKeyframes(frames) {
    if (!Array.isArray(frames) || frames[0]?.position !== 0) return [];
    const valid = frames.every((frame, index) =>
        Number.isFinite(frame?.position) && frame.position >= 0 && frame.position < 1
        && (index === 0 || frame.position > frames[index - 1]?.position)
        && Array.isArray(frame.settings?.track_overrides)
        && Array.isArray(frame.tuning?.table) && frame.tuning.table.length === 128
    );
    return valid ? structuredClone(frames) : [];
}

function getTimelineDuration() {
    return arrangementKeyframes.length > 1 ? currentSongBaseDuration : (currentSong?.duration || 0);
}

function keyframeAt(position) {
    const next = arrangementKeyframes.findIndex(frame => frame.position > position + 1e-8);
    return next < 0 ? arrangementKeyframes.at(-1) : arrangementKeyframes[Math.max(0, next - 1)];
}

function captureKeyframe(position) {
    return {
        position,
        settings: buildArrangementSettingsSnapshot(),
        tuning: structuredClone(activeTuning)
    };
}

function recordKeyframeSettings(settings) {
    if (activeKeyframe) Object.assign(activeKeyframe.settings, settings);
}

function recordKeyframeTrackSettings(slot, settings) {
    const track = activeKeyframe?.settings.track_overrides.find(override => override.track_index === slot);
    if (track) Object.assign(track, settings);
}

function applyKeyframe(frame, { restore = false } = {}) {
    if (!frame || (frame === activeKeyframe && !restore)) return;
    activeKeyframe = frame;
    const settings = frame.settings;
    currentMode = settings.mode;
    currentTranspose = settings.transpose_semitones;
    currentTempoPercent = settings.tempo_percent;
    activeTuning = structuredClone(frame.tuning);
    for (const override of settings.track_overrides) {
        const slot = override.track_index;
        if (!trackChannels.has(slot)) continue;
        trackPrograms.set(slot, override.program);
        trackBanks.set(slot, override.bank_msb);
        trackVolumes.set(slot, override.volume);
        trackTransposes.set(slot, override.transpose_semitones);
    }
    updateModeStatus();
    transposeInput.value = String(currentTranspose);
    updateTransposeStatus();
    if (!Array.from(tuningSelect.options).some(option => option.value === activeTuning.id)) {
        tuningSelect.add(new Option(activeTuning.name, activeTuning.id));
    }
    tuningResetButton.disabled = activeTuning.id === DEFAULT_TUNING_ID;
    applyTempoChange();
    applyActiveTuning();
    renderInstrumentMenus();
    updateKeyframeControls();
}

function prepareKeyframesForPlayback(seconds) {
    if (arrangementKeyframes.length < 2) return seconds;
    const position = seconds / (getTimelineDuration() || 1);
    applyKeyframe(keyframeAt(position), { restore: true });
    return position * fluidRenderer.songDuration;
}

function formatKeyframeTime(position) {
    const seconds = position * getTimelineDuration();
    const wholeSeconds = Math.floor(seconds);
    return `${formatDuration(wholeSeconds)}.${Math.floor((seconds - wholeSeconds) * 10)}`;
}

function updateKeyframeControls() {
    const available = arrangementKeyframes.length > 0 && !recordingActive;
    keyframePlace.disabled = !available;
    for (const [index, marker] of Array.from(keyframeMarkers.children).entries()) {
        marker.disabled = !available;
        if (arrangementKeyframes[index] === activeKeyframe) {
            marker.setAttribute("aria-current", "true");
        } else {
            marker.removeAttribute("aria-current");
        }
    }
    const hasCandidate = available && keyframeCandidate !== null && keyframeCandidate > 0;
    keyframeConfirmation.classList.toggle("is-hidden", !hasCandidate);
    keyframeConfirm.disabled = !hasCandidate;
    if (hasCandidate) {
        keyframeConfirm.checked = arrangementKeyframes.some(frame => frame.position === keyframeCandidate);
        const time = formatKeyframeTime(keyframeCandidate);
        keyframeStatus.textContent = keyframeConfirm.checked
            ? `Editing settings at ${time}. Uncheck to remove this keyframe.`
            : `Check Keyframe to store changes at ${time}.`;
    } else {
        const index = arrangementKeyframes.indexOf(activeKeyframe);
        keyframeStatus.textContent = index > 0
            ? `Keyframe ${index + 1} at ${formatKeyframeTime(activeKeyframe.position)}.`
            : "Keyframe 1 holds the starting settings.";
    }
}

function renderKeyframeLane() {
    fluidRenderer.onPlaybackPosition = arrangementKeyframes.length > 1 ? followPlaybackKeyframes : null;
    keyframeMarkers.replaceChildren(...arrangementKeyframes.map((frame, index) => {
        const marker = document.createElement("button");
        marker.type = "button";
        marker.className = "keyframe-marker";
        marker.textContent = String(index + 1);
        marker.style.setProperty("--keyframe-position", `${frame.position * 100}%`);
        marker.setAttribute("aria-label", `Keyframe ${index + 1} at ${formatKeyframeTime(frame.position)}`);
        marker.dataset.help = "Click a marker to jump to it and edit its settings. Keyframe 1 holds the starting settings and is restored when the song loops.";
        marker.addEventListener("click", () => editKeyframeAt(frame.position));
        return marker;
    }));
    updateKeyframeControls();
}

function dismissKeyframePrompt() {
    keyframeCandidate = null;
    renderKeyframeLane();
}

async function editKeyframeAt(position) {
    if (!isPrepared || recordingActive) return;
    pausePlayback();
    keyframeCandidate = position;
    pauseOffset = position * getTimelineDuration();
    try {
        await fluidRenderer.seek(prepareKeyframesForPlayback(pauseOffset));
        updateProgressUI(pauseOffset, { overrideScrubLock: true });
        updateKeyframeControls();
    } catch (error) {
        setStatus(error?.message || "Unable to seek to the keyframe.", true);
    }
}

keyframePlace.addEventListener("click", event => {
    const bounds = keyframeMarkers.getBoundingClientRect();
    const current = Number(progressBar.value) / (getTimelineDuration() || 1);
    const position = event.detail ? (event.clientX - bounds.left) / bounds.width : current;
    const ticks = currentSong.durationTicks || 1;
    const snapped = Math.max(0, Math.min(ticks - 1, Math.round(position * ticks))) / ticks;
    editKeyframeAt(snapped).then(() => {
        if (!event.detail && !keyframeConfirm.disabled) keyframeConfirm.focus();
    });
});

keyframeConfirm.addEventListener("change", async () => {
    if (keyframeCandidate === null || !isPrepared || recordingActive) return;
    const position = keyframeCandidate;
    if (keyframeConfirm.checked) {
        const frame = captureKeyframe(position);
        arrangementKeyframes.push(frame);
        arrangementKeyframes.sort((a, b) => a.position - b.position);
        activeKeyframe = frame;
    } else {
        arrangementKeyframes = arrangementKeyframes.filter(frame => frame.position !== position);
        applyKeyframe(keyframeAt(position));
    }
    pauseOffset = position * getTimelineDuration();
    renderKeyframeLane();
    clearTimeout(pendingArrangementRefresh?.timer);
    pendingArrangementRefresh = null;
    await rebuildTransformedPlayback("Keyframes updated.");
});

function resetPlaybackState() {
    playbackRequest++;
    clearTimeout(pendingArrangementRefresh?.timer);
    pendingArrangementRefresh = null;
    arrangementKeyframes = [];
    activeKeyframe = null;
    dismissKeyframePrompt();
    fluidRenderer.stop();
    stopProgressUpdates(true);
    isPlaying = false;
    pauseOffset = 0;
    isPrepared = false;
    lastProgressUpdateTime = 0;
}

function enableTransportButtons(enabled) {
    rewindButton.disabled = !enabled;
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
            const duration = getTimelineDuration();
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
    const duration = getTimelineDuration();
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
    keyframeMarkers.style.setProperty("--keyframe-playhead", `${(ratio * 100).toFixed(2)}%`);
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
    if (arrangementKeyframes.length > 1) {
        return Math.min(getTimelineDuration(), fluidRenderer.getCurrentSeconds()
            / (fluidRenderer.songDuration || 1) * getTimelineDuration());
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
    loadButton.disabled = !enabled;
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

function loadSampleManifest() {
    sampleManifestRequest ??= fetch(SAMPLE_MANIFEST_URL, { cache: "no-cache" })
        .then(async response => {
            if (!response.ok) throw new Error(`Manifest fetch failed (${response.status})`);
            const data = await response.json();
            sampleManifest = (Array.isArray(data) ? data : [])
                .filter(item => item?.url && item?.name)
                .map(item => ({ ...item, url: resolveMidiAssetUrl(item.url) }));
            sampleManifest.forEach(item => {
                if (item.id && typeof item.folder === "string") includedMidiFolders.set(item.id, item.folder);
            });
            populateSampleFolderSelect(sampleManifest);
            selectSampleFolder(defaultMidiFolder);
            setSampleButtonEnabled(audioReady);
            return sampleManifest;
        })
        .catch(error => {
            sampleManifestRequest = null;
            console.warn("Unable to load MIDI manifest:", error);
            setStatus("Included MIDI list unavailable.", true);
            return null;
        });
    return sampleManifestRequest;
}

function getSampleFolderValue(folder) {
    return Array.from(sampleFolderSelect.options).some(option => option.value === folder) ? folder : "__all__";
}

function selectSampleFolder(folder) {
    const selected = getSampleFolderValue(folder);
    sampleFolderSelect.value = selected;
    populateSampleMidiSelect(sampleManifest.filter(item => {
        const itemFolder = item.folder === "." ? "" : (item.folder || "");
        return selected === "__all__" || selected === (itemFolder || "__root__");
    }));
}

sampleFolderSelect.addEventListener("change", () => selectSampleFolder(sampleFolderSelect.value));
for (const select of [sampleFolderSelect, sampleMidiSelect]) {
    for (const event of ["pointerdown", "keydown", "change"]) {
        select.addEventListener(event, () => { sampleModalRequest++; });
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

function populateSampleMidiSelect(manifest) {
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

function hideControlHelp() {
    if (!helpTarget) return;
    const descriptions = (helpTarget.getAttribute("aria-describedby") || "").split(/\s+/)
        .filter(id => id && id !== controlHelpBubble.id);
    if (descriptions.length) {
        helpTarget.setAttribute("aria-describedby", descriptions.join(" "));
    } else {
        helpTarget.removeAttribute("aria-describedby");
    }
    helpTarget = null;
    controlHelpBubble.hidden = true;
}

function showControlHelp(origin) {
    const owner = origin.closest("[data-help]");
    const control = origin.closest("button, input, select, textarea, .radiograph-queue-item, .radiograph-popularity-item, .radiograph-comment");
    const target = owner?.contains(control) ? control : owner;
    const message = owner?.dataset.help;
    if (target === helpTarget && message === controlHelpBubble.textContent) return;
    hideControlHelp();
    if (!message) return;

    helpTarget = target;
    const layer = target.closest("dialog[open]") || document.body;
    if (controlHelpBubble.parentElement !== layer) layer.appendChild(controlHelpBubble);
    controlHelpBubble.textContent = message;
    controlHelpBubble.hidden = false;
    const description = target.getAttribute("aria-describedby");
    target.setAttribute("aria-describedby", [description, controlHelpBubble.id].filter(Boolean).join(" "));

    const bounds = target.getBoundingClientRect();
    const bubble = controlHelpBubble.getBoundingClientRect();
    const inset = 8;
    const arrow = parseFloat(getComputedStyle(controlHelpBubble).getPropertyValue("--bubble-arrow-size"));
    const center = bounds.left + bounds.width / 2;
    const left = Math.max(inset, Math.min(center - bubble.width / 2, window.innerWidth - bubble.width - inset));
    const roomBelow = window.innerHeight - bounds.bottom - inset;
    const roomAbove = bounds.top - inset;
    const above = roomBelow < bubble.height + arrow && roomAbove > roomBelow;
    controlHelpBubble.dataset.side = above ? "above" : "below";
    controlHelpBubble.style.left = `${left}px`;
    controlHelpBubble.style.top = `${above ? bounds.top - bubble.height - arrow : bounds.bottom + arrow}px`;
    controlHelpBubble.style.setProperty("--bubble-arrow-x", `${Math.max(inset, Math.min(center - left, bubble.width - inset))}px`);
}

function setInfoVisibility(show) {
    if (show && !infoBubbles.open) {
        infoBubbles.showModal();
        infoToggle.classList.add("is-on");
    } else if (!show && infoBubbles.open) {
        infoBubbles.close();
    }
}

async function loadSampleByRecord(sample) {
    const selectionToken = ++latestSelectionToken;
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
            folder: sample.folder,
            file_name: sample.name
        }, selectionToken);
    } catch (error) {
        if (selectionToken !== latestSelectionToken) return;
        console.error(error);
        setStatus(error?.message || "Failed to load sample MIDI.", true);
    }
}

async function refreshDefaultMidiFolder(request) {
    try {
        const folder = await readDefaultMidiFolder();
        if (request !== sampleModalRequest) return;
        defaultMidiFolder = folder;
        if (!sampleModal.classList.contains("is-hidden") && getSampleFolderValue(folder) !== sampleFolderSelect.value) {
            selectSampleFolder(folder);
        }
    } catch (error) {
        console.warn("The default MIDI folder could not be loaded:", error);
    }
}

function showSampleModal() {
    if (!sampleModal) return;
    const request = ++sampleModalRequest;
    selectSampleFolder(defaultMidiFolder);
    sampleModal.classList.remove("is-hidden");
    loadSampleManifest();
    refreshDefaultMidiFolder(request);
    if (sampleMidiSelect && !sampleMidiSelect.disabled) {
        sampleMidiSelect.focus();
    }
}

function hideSampleModal() {
    if (!sampleModal) return;
    sampleModalRequest++;
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

function handleLoadFailure() {
    currentSong = null;
    arrangementKeyframes = [];
    activeKeyframe = null;
    dismissKeyframePrompt();
    currentMidiBuffer = null;
    currentMidiSource = null;
    transformedMidiBuffer = null;
    arrangementDirty = false;
    playableTracks = [];
    mutedTracks.clear();
    soloedTracks.clear();
    sharedTrackChannels.clear();
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
        dismissKeyframePrompt();
        await fluidRenderer.playFrom(prepareKeyframesForPlayback(offsetSeconds));
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
    recordKeyframeSettings({ transpose_semitones: currentTranspose });
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
        if (sharedTrackChannels.has(channel) && !isTrackAudible(trackIndex)) return;
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
        ? Math.max(0, Math.min(getElapsedPlaybackSeconds(), getTimelineDuration()))
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

async function rebuildTransformedPlayback(message, { mixOnly = false } = {}) {
    if (!baseMidiBuffer || !channelAssignmentsSnapshot.length) {
        return;
    }
    setScaleControlsEnabled(false);
    setStatus("Updating arrangement...", false);
    const state = capturePlaybackState();
    try {
        const playbackMidi = buildTransformedMidiBuffer(baseMidiBuffer);
        if (!mixOnly) {
            transformedMidiBuffer = playbackMidi;
            arrangementDirty = true;
        }
        await fluidRenderer.loadMidi(
            encodeMidiVoices(playbackMidi, null, {
                silencedTracks: getSilencedSharedTracks(),
                durationTicks: currentSong.durationTicks
            }),
            currentSongBaseDuration,
            channelAssignmentsSnapshot,
            tempoSnapshot
        );
        await fluidRenderer.waitForTotalTicks?.();
        fluidRenderer.setLoopEnabled(loopToggle.checked);
        applyTempoChange();
        applyActiveTuning();
        applyAllProgramOverrides();
        applyAllChannelVolumes();
        isPrepared = true;

        if (state.wasPlaying) {
            // For active playback, seek then resume to avoid resetting to start.
            await fluidRenderer.seek(prepareKeyframesForPlayback(state.resumePoint));
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
            await fluidRenderer.seek(prepareKeyframesForPlayback(state.resumePoint));
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

function scheduleArrangementRefresh(label, { mixOnly = false } = {}) {
    if (pendingArrangementRefresh) {
        if (!mixOnly) {
            pendingArrangementRefresh.mixOnly = false;
            pendingArrangementRefresh.label = label;
        }
        return;
    }
    pendingArrangementRefresh = {
        label,
        mixOnly,
        timer: setTimeout(() => {
            const refresh = pendingArrangementRefresh;
            pendingArrangementRefresh = null;
            rebuildTransformedPlayback(refresh.label || "Arrangement updated", refresh);
        }, 50)
    };
}

function buildTransformedMidiBuffer(arrayBuffer) {
    if (typeof Midi === "undefined") {
        return arrayBuffer.slice(0);
    }
    try {
        const midi = new Midi(arrayBuffer);
        const keyed = arrangementKeyframes.length > 1;
        const totalTicks = currentSong?.durationTicks || midi.durationTicks || 1;
        midi.tracks = midi.tracks.filter(track => Array.isArray(track.notes) && track.notes.length > 0);
        midi.tracks.forEach((track, idx) => {
            stripProgramAndBankEvents(track);
            const assignment = channelAssignmentsSnapshot[idx];
            const slot = assignment?.trackIndex ?? idx;
            const assignedChannel = assignment?.channel ?? trackChannels.get(slot) ?? (slot % 16);
            const trackTranspose = trackTransposes.get(slot) ?? 0;
            const trackVolume = keyed ? 1 : clampTrackVolume(trackVolumes.get(slot) ?? 1);
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
                if (keyed) {
                    const frame = keyframeAt(note.ticks / totalTicks);
                    const override = frame.settings.track_overrides.find(item => item.track_index === slot);
                    if (override?.bank_msb === GM_PERCUSSION_BANK) {
                        note.midi = clampMidiValue(note.midi + override.transpose_semitones);
                    }
                } else {
                    note.midi = clampMidiValue(note.midi + trackTranspose);
                }
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

function getSilencedSharedTracks() {
    const slots = new Set();
    if (sharedTrackChannels.size) {
        trackChannels.forEach((channel, slot) => {
            if (sharedTrackChannels.has(channel) && !isTrackAudible(slot)) slots.add(slot);
        });
    }
    return slots;
}

function buildSilentMidiTrack(header, ticks) {
    // Preserve the timeline when a silenced track shares a synth channel.
    const delta = [ticks & 0x7f];
    for (ticks >>>= 7; ticks > 0; ticks >>>= 7) {
        delta.unshift((ticks & 0x7f) | 0x80);
    }
    const endOfTrack = Uint8Array.of(...delta, 0xff, 0x2f, 0);
    new DataView(header.buffer).setUint32(4, endOfTrack.length);
    return [header, endOfTrack];
}

function encodeMidiVoices(midi, banks = null, { silencedTracks, durationTicks } = {}) {
    const bytes = new Uint8Array(midi);
    const view = new DataView(bytes.buffer);
    // Tone MIDI writes a conductor track and then starts each instrument track
    // with its name and a tick-zero program change. Replace that program event.
    const headerEnd = 8 + view.getUint32(4);
    const conductorEnd = headerEnd + 8 + view.getUint32(headerEnd + 4);
    const chunks = [bytes.subarray(0, conductorEnd)];
    for (let offset = conductorEnd, index = 0; offset < bytes.length; index += 1) {
        const start = offset + 8;
        const end = start + view.getUint32(offset + 4);
        const trackHeader = bytes.slice(offset, start);
        if (silencedTracks?.has(index)) {
            chunks.push(...buildSilentMidiTrack(trackHeader, durationTicks));
            offset = end;
            continue;
        }
        let programOffset = start + 3;
        let nameLength = 0;
        let lengthByte;
        do {
            lengthByte = bytes[programOffset++];
            nameLength = (nameLength << 7) | (lengthByte & 0x7f);
        } while (lengthByte & 0x80);
        programOffset += nameLength;
        const programChange = bytes[programOffset + 1];
        if (bytes[start] !== 0 || bytes[start + 1] !== 0xff || bytes[start + 2] !== 0x03
            || bytes[programOffset] !== 0 || (programChange & 0xf0) !== 0xc0) {
            throw new Error("Unable to encode the MIDI instrument assignments.");
        }
        const channel = programChange & 0x0f;
        const program = banks ? bytes.subarray(programOffset, programOffset + 3) : new Uint8Array(0);
        const bankSelect = banks ? Uint8Array.of(
            0, 0xb0 | channel, 0, banks[index] === GM_PERCUSSION_BANK ? 127 : 0,
            0, 0xb0 | channel, 32, 0
        ) : new Uint8Array(0);
        new DataView(trackHeader.buffer).setUint32(
            4, end - start - 3 + bankSelect.length + program.length
        );
        chunks.push(trackHeader, bytes.subarray(start, programOffset), bankSelect, program,
            bytes.subarray(programOffset + 3, end));
        offset = end;
    }
    const output = new Uint8Array(chunks.reduce((length, chunk) => length + chunk.length, 0));
    let cursor = 0;
    for (const chunk of chunks) {
        output.set(chunk, cursor);
        cursor += chunk.length;
    }
    return output.buffer;
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
            if (tuningResetButton) tuningResetButton.disabled = activeTuning.id === DEFAULT_TUNING_ID;
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
    });
    tuningSelect.appendChild(fragment);
    if (!Array.from(tuningSelect.options).some(option => option.value === activeTuning.id)) {
        tuningSelect.add(new Option(activeTuning.name, activeTuning.id));
    }
    tuningSelect.value = activeTuning.id;
}

async function handleTuningSelection(value) {
    const request = ++tuningSelectionRequest;
    const frame = activeKeyframe;
    const preference = scalaPreference;
    if (frame) keyframeTuningRequests.set(frame, request);
    const isCurrentRequest = () => frame
        ? keyframeTuningRequests.get(frame) === request && arrangementKeyframes.includes(frame)
        : request === tuningSelectionRequest && !activeKeyframe;

    const isEqual = !value || value === DEFAULT_TUNING_ID;
    if (!isEqual) setTuningStatus("Loading tuning…", false);
    try {
        const tuning = isEqual
            ? { id: DEFAULT_TUNING_ID, name: "12-TET", table: equalTemperamentTable }
            : await fetchScalaTuning(value);
        if (!isCurrentRequest()) return;
        if (frame) {
            frame.tuning = structuredClone(tuning);
            frame.settings.tuning_id = tuning.id;
            frame.settings.scala_preference = preference;
        }
        if (frame !== activeKeyframe) return;
        activeTuning = tuning;
        applyActiveTuning();
        if (tuningResetButton) tuningResetButton.disabled = isEqual;
        queueCloudSettingsSave();
    } catch (error) {
        if (!isCurrentRequest() || frame !== activeKeyframe) return;
        console.error("Failed to load tuning:", error);
        setTuningStatus(error?.message || "Failed to load tuning.", true);
        if (tuningSelect) tuningSelect.value = activeTuning.id;
        if (tuningResetButton) tuningResetButton.disabled = activeTuning.id === DEFAULT_TUNING_ID;
    }
}

async function fetchScalaTuning(path) {
    if (tuningCache.has(path)) {
        return tuningCache.get(path);
    }
    const response = await fetch(path.replaceAll("#", "%23"));
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
        pauseOffset = Math.min(pauseOffset, getTimelineDuration() || pauseOffset);
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
    const ratio = (getTimelineDuration() || baseDuration) / baseDuration;
    const windowStart = nowSeconds - METER_WINDOW_SECONDS * 0.6;
    const windowEnd = nowSeconds + METER_WINDOW_SECONDS * 0.4;
    trackVisualState.forEach((state, slot) => {
        if (!state?.element || !state?.meterFill) {
            return;
        }
        if (!isTrackAudible(slot)) {
            state.level = 0;
            state.element.classList.remove("is-active");
            state.meterFill.style.transform = "scaleX(0)";
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
    dismissKeyframePrompt();
    recordButton.textContent = "STOP RECORDING";
    recordButton.dataset.help = "End the recording and save the audio captured so far.";
    if (helpTarget === recordButton) showControlHelp(recordButton);
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
    updateKeyframeControls();
    loopToggle.checked = previousLoopState;
    fluidRenderer.setLoopEnabled(loopToggle.checked);
    recordButton.textContent = recordButtonLabel;
    recordButton.dataset.help = "Record the arrangement from the beginning and save it as an audio file.";
    if (helpTarget === recordButton) showControlHelp(recordButton);
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
        [rewindButton, playButton, pauseButton, stopButton, loopToggle, fileInput].forEach(el => {
            if (el) {
                el.dataset.wasDisabled = el.disabled ? "1" : "0";
                el.disabled = true;
            }
        });
        progressBar.disabled = true;
    } else {
        [rewindButton, playButton, pauseButton, stopButton, loopToggle, fileInput].forEach(el => {
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

async function saveArrangementToLibrary(arrangementName, tags = currentMidiSource?.tags || []) {
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
    const sourceAtSave = currentMidiSource;
    try {
        if (pendingArrangementRefresh) {
            const refresh = pendingArrangementRefresh;
            clearTimeout(refresh.timer);
            pendingArrangementRefresh = null;
            await rebuildTransformedPlayback(refresh.label || "Arrangement updated.", refresh);
        }
        const midiToSave = arrangementKeyframes.length > 1
            ? baseMidiBuffer
            : (arrangementDirty && transformedMidiBuffer ? transformedMidiBuffer : currentMidiBuffer);
        const savedDisplayName = arrangementName;
        const savedSource = { source_type: "upload", file_name: buildArrangementFileName(arrangementName) };
        const savedRecord = await withTimeout(
            saveLoadedMidiToCloud(
                midiToSave,
                savedDisplayName,
                savedSource,
                currentSong,
                tags
            ),
            CLOUD_SAVE_TIMEOUT_MS,
            "Saving arrangement timed out. Check your Supabase table/policies and try again."
        );
        if (savedRecord) {
            if (sourceAtSave && currentMidiSource === sourceAtSave) sourceAtSave.tags = getArrangementTags(savedRecord);
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

async function saveLoadedMidiToCloud(arrayBuffer, displayName, source, parsedSong, tags) {
    if (!supabaseClient || !currentSupabaseUser?.id || !arrayBuffer) {
        return;
    }
    const payload = buildMidiPayload(source, arrayBuffer);
    const meta = {
        ...buildMidiMeta(parsedSong, displayName),
        arrangement_settings: arrangementKeyframes[0]
            ? structuredClone(arrangementKeyframes[0].settings)
            : buildArrangementSettingsSnapshot(),
        broadcast_recipe: buildMidiSettingsDraft(),
        source_sample_id: currentMidiSource?.sample_id || null,
        source_folder: getMidiSourceFolder(currentMidiSource),
        tags: normalizeArrangementTags(tags)
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
    const librarySource = {
        sample_id: record.midi_meta?.source_sample_id || payload.sample_id,
        folder: record.midi_meta?.source_folder,
        tags: getArrangementTags(record)
    };
    const displayName = record.name || payload.file_name || "MIDI file";
    const statusMessage = options.statusMessage || "Saved arrangement restored.";
    const selectionToken = ++latestSelectionToken;
    const userId = currentSupabaseUser?.id;
    let buffer;
    const source = {
        ...librarySource,
        file_name: payload.file_name || displayName
    };
    if (payload.source_type === "sample" && typeof payload.source_url === "string" && payload.source_url) {
        const response = await fetch(payload.source_url);
        if (!response.ok) {
            throw new Error(`Unable to load saved sample: ${displayName}`);
        }
        buffer = await response.arrayBuffer();
        source.source_type = "sample";
        source.source_url = payload.source_url;
    } else if (payload.encoding === "base64" && typeof payload.midi_base64 === "string" && payload.midi_base64) {
        buffer = base64ToArrayBuffer(payload.midi_base64);
        source.source_type = "upload";
    } else {
        return false;
    }
    if (userId !== currentSupabaseUser?.id) return false;
    const loaded = await loadMidiFromBuffer(buffer, displayName, source, selectionToken);
    if (!loaded || selectionToken !== latestSelectionToken) return false;
    const savedKeyframes = readSavedKeyframes(
        record.midi_meta?.broadcast_recipe?.keyframes
        ?? record.midi_meta?.radio_recipe?.keyframes
        ?? record.midi_meta?.arrangement_keyframes
    );
    if (savedKeyframes.length > 1) {
        arrangementKeyframes = savedKeyframes;
        applyKeyframe(arrangementKeyframes[0]);
        dismissKeyframePrompt();
        await rebuildTransformedPlayback(statusMessage);
    } else if (arrangementSettings && typeof arrangementSettings === "object") {
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
    const userId = currentSupabaseUser?.id;
    if (!supabaseClient || !userId || isRestoringCloudMidi || latestSelectionToken !== 0) return;

    isRestoringCloudMidi = true;
    try {
        const { data, error } = await withTimeout(
            supabaseClient
                .from("earb_user_midis")
                .select("id,name,midi_payload,midi_meta")
                .eq("user_id", userId)
                .order("created_at", { ascending: false })
                .limit(1)
                .maybeSingle(),
            CLOUD_SAVE_TIMEOUT_MS,
            "Restoring your latest saved arrangement timed out."
        );
        if (error) throw error;
        if (latestSelectionToken !== 0 || userId !== currentSupabaseUser?.id) return;
        await loadCloudMidiRecord(data, { statusMessage: "Saved arrangement restored." });
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

function buildRadioTuningRecipe(
    tuning = activeTuning, mode = currentMode, transpose = currentTranspose,
    archiveSource = activeScalaSource?.label || scalaPreference || "lite"
) {
    const baseTable = Array.isArray(tuning.table) ? tuning.table : equalTemperamentTable;
    const effectiveTable = buildEffectiveTuningTable(baseTable, mode, transpose);
    if (tuning.id === DEFAULT_TUNING_ID) {
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
        archive_source: archiveSource,
        id: tuning.id,
        name: tuning.name || tuning.id.split("/").pop(),
        base_note: BASE_TUNING_NOTE,
        scale_cents: serializeCentsArray(tuning.scaleCents),
        scala_text: typeof tuning.scalaText === "string" ? tuning.scalaText : null,
        effective_table_cents: serializeCentsArray(effectiveTable)
    };
}

function buildRadioKeyframes(frames, baseBpm) {
    return frames.map(frame => {
        const { settings, tuning } = frame;
        return {
            ...structuredClone(frame),
            bpm: clampTempoBpm(baseBpm * clampTempoPercent(settings.tempo_percent) / 100),
            effective_table_cents: serializeCentsArray(
                buildEffectiveTuningTable(tuning.table, settings.mode, settings.transpose_semitones)
            )
        };
    });
}

function buildMidiSettingsDraft() {
    if (!currentSong || !baseMidiBuffer) return null;
    const initialFrame = arrangementKeyframes.length > 1 ? arrangementKeyframes[0] : null;
    const settings = initialFrame?.settings || buildArrangementSettingsSnapshot();
    const trackOverrides = settings.track_overrides;
    const programOverrides = trackOverrides.map(({ channel, bank_msb, program }) => ({
        channel, bank_msb, bank_lsb: 0, program
    })).sort((a, b) => a.channel - b.channel);
    const recipe = createMidiSettingsDraft({
        name: currentSong.displayName || currentSong.name || "midi",
        byteLength: baseMidiBuffer.byteLength,
        tuning: buildRadioTuningRecipe(initialFrame?.tuning || activeTuning, settings.mode, settings.transpose_semitones),
        mode: settings.mode,
        transpose: settings.transpose_semitones,
        bpm: tempoPercentToBpm(settings.tempo_percent),
        programOverrides,
        trackOverrides
    });
    return {
        ...recipe,
        midi: { ...recipe.midi, duration_ticks: currentSong.durationTicks },
        ...(initialFrame ? { keyframes: buildRadioKeyframes(arrangementKeyframes, baseTempoBpm) } : {}),
        midi_voice_bank_mode: "xg"
    };
}

function createMidiSettingsDraft({ name, byteLength, tuning, mode, transpose, bpm, programOverrides, trackOverrides }) {
    return {
        schema_version: 1,
        midi: { source: "local", name, byte_length: byteLength, sha256: null },
        tuning,
        mode,
        transpose_semitones: transpose,
        tempo: { type: "bpm_override", bpm },
        gm_program_overrides: programOverrides,
        track_overrides: trackOverrides,
        output: { codec: "mp3", bitrate_kbps: 192, target_lufs: -16, true_peak_db: -1.0 }
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
