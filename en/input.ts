import type { Dict } from "../types";

// Texts of the search bar's tools that load when they are used: voice input and handwriting
export default {
    voice: {
        button: "Voice search",
        title: "Voice search",
        language: "Language",
        japanese: "Japanese",
        start: "Start listening",
        stop: "Stop listening",
        engine: {
            device: "Recognized on your phone",
            online: "Recognized online by Android",
            browser: "Recognized by your browser",
            info: "What does this mean?",
            about: {
                device: "Your phone turns your speech into text itself, offline: the audio never leaves it, Jotoba only gets the text. To use Android's online service instead, turn off “Voice input on the device” in Settings › General.",
                online: "Android sends the audio to its speech service (on most phones Google's) and gets the text back; Jotoba only gets the text. Your phone can also do this offline: download the language in Settings › General.",
                browser:
                    "Your browser sends the audio to its speech service (in Chrome: Google) and gets the text back; Jotoba only gets the text. In the Jotoba app for Android, your phone can do this offline.",
            },
        },
        status: {
            idle: "Press the microphone and say a word.",
            listening: "Listening… say a word.",
            "no-speech": "Didn't catch that. Try again.",
            blocked: "Microphone access is blocked. Allow it in your browser's site settings, then try again.",
            "no-microphone": "No microphone found.",
            "no-language":
                "This language isn't available for voice input here. On a phone, install it in the system settings (Languages › Speech).",
            unsupported: "Voice search isn't available in this browser.",
            failed: "Voice search stopped unexpectedly. Try again.",
        },
    },
    handwriting: {
        mode: {
            label: "Input method",
            radicals: "Radicals",
            write: "Handwriting",
        },
        pad: {
            label: "Drawing area",
            placeholder: "Write here",
            hint: "Write a word or kanji with one finger. Candidates appear above. Prefer tapping? Switch to Radicals.",
        },
        candidates: {
            label: "Recognized",
            empty: "Candidates appear here",
            busy: "Recognizing…",
        },
        undo: "Undo",
        delete: "Delete character",
        clear: "Clear drawing",
        announce: {
            added: "{{text}} added to search",
            removed: "{{text}} removed from search",
            stroke: "Stroke removed",
            candidates: "{{count}} candidates, first {{text}}",
        },
        model: {
            intro: "Handwriting needs a one-time download from Google (about {{size}}). After that it works offline.",
            download: "Download ({{size}})",
            loading: "Downloading the handwriting model (about {{size}})… You can already write.",
            ready: "Handwriting is ready",
            failed: "The download didn't work. Check your connection.",
            retry: "Try again",
            cellular: "You seem to be on mobile data or data saver.",
            offline: "You're offline. Connect to the internet to download.",
        },
        consent: {
            intro: "Jotoba recognizes your handwriting on your device with Google ML Kit.",
            local: "Your drawing stays on your device. Only what you search is sent to Jotoba.",
            metrics:
                "ML Kit sends anonymous usage data to Google: device type, app version and how well the recognition performs.",
            download: "The handwriting model (about {{size}}) is downloaded from Google once.",
            change: "You can change this anytime in <settings>Settings › Privacy</settings>. <policy>Privacy policy</policy>",
            decline: "Decline",
            agree: "Agree and download",
            declined: "Handwriting stays off. You can turn it on in Settings › Privacy.",
        },
    },
} as const satisfies Dict;
