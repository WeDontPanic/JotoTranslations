import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "Sprachsuche",
        title: "Sprachsuche",
        language: "Sprache",
        japanese: "Japanisch",
        start: "Zuhören starten",
        stop: "Zuhören beenden",
        engine: {
            device: "Erkannt auf deinem Handy",
            online: "Online erkannt von Android",
            browser: "Erkannt von deinem Browser",
            info: "Was bedeutet das?",
            about: {
                device: "Dein Handy wandelt deine Sprache selbst in Text um, offline: Der Ton verlässt es nicht, Jotoba bekommt nur den Text. Willst du stattdessen Androids Online-Dienst nutzen, schalte „Spracheingabe auf dem Gerät“ in Einstellungen › Allgemein aus.",
                online: "Android schickt den Ton an seinen Sprachdienst (auf den meisten Handys Googles) und bekommt den Text zurück; Jotoba bekommt nur den Text. Dein Handy kann das auch offline: Lade die Sprache in Einstellungen › Allgemein.",
                browser:
                    "Dein Browser schickt den Ton an seinen Sprachdienst (in Chrome: Google) und bekommt den Text zurück; Jotoba bekommt nur den Text. In der Jotoba-App für Android geht das offline auf dem Handy.",
            },
        },
        status: {
            idle: "Drück auf das Mikrofon und sag ein Wort.",
            listening: "Ich höre zu… Sag ein Wort.",
            "no-speech": "Das habe ich nicht verstanden. Versuch es noch einmal.",
            blocked:
                "Der Zugriff auf das Mikrofon ist blockiert. Erlaube ihn in den Website-Einstellungen deines Browsers und versuch es dann noch einmal.",
            "no-microphone": "Kein Mikrofon gefunden.",
            "no-language":
                "Diese Sprache ist hier für die Spracheingabe nicht verfügbar. Auf dem Handy kannst du sie in den Systemeinstellungen installieren (Sprachen › Spracherkennung).",
            unsupported: "Die Sprachsuche ist in diesem Browser nicht verfügbar.",
            failed: "Die Sprachsuche wurde unerwartet beendet. Versuch es noch einmal.",
        },
    },
    handwriting: {
        mode: {
            label: "Eingabeart",
            radicals: "Radikale",
            write: "Handschrift",
        },
        pad: {
            label: "Zeichenfläche",
            placeholder: "Hier schreiben",
            hint: "Schreib ein Wort oder Kanji mit einem Finger. Die Vorschläge erscheinen darüber. Lieber tippen? Wechsle zu Radikale.",
        },
        candidates: {
            label: "Erkannt",
            empty: "Hier erscheinen Vorschläge",
            busy: "Wird erkannt …",
        },
        undo: "Rückgängig",
        delete: "Zeichen löschen",
        clear: "Zeichnung löschen",
        announce: {
            added: "{{text}} zur Suche hinzugefügt",
            removed: "{{text}} aus der Suche entfernt",
            stroke: "Strich entfernt",
            candidates: "{{count}} Vorschläge, zuerst {{text}}",
        },
        model: {
            intro: "Für die Handschrift wird einmalig ein Modell von Google geladen (etwa {{size}}). Danach geht sie offline.",
            download: "Laden ({{size}})",
            loading: "Handschrift wird geladen (etwa {{size}}) … Du kannst schon schreiben.",
            ready: "Handschrift ist bereit",
            failed: "Der Download hat nicht geklappt. Prüf deine Verbindung.",
            retry: "Erneut versuchen",
            cellular: "Du nutzt anscheinend mobile Daten oder den Datensparmodus.",
            offline: "Du bist offline. Verbinde dich mit dem Internet, um zu laden.",
        },
        consent: {
            intro: "Jotoba erkennt deine Handschrift auf dem Gerät mit Google ML Kit.",
            local: "Deine Zeichnung bleibt auf dem Gerät. Nur was du suchst, geht an Jotoba.",
            metrics:
                "ML Kit sendet anonyme Nutzungsdaten an Google: Gerätetyp, App-Version und wie gut die Erkennung funktioniert.",
            download: "Das Handschrift-Modell (etwa {{size}}) wird einmalig von Google geladen.",
            change: "Du kannst das jederzeit in <settings>Einstellungen › Datenschutz</settings> ändern. <policy>Datenschutzerklärung</policy>",
            decline: "Ablehnen",
            agree: "Zustimmen und laden",
            declined: "Handschrift bleibt aus. Du kannst sie unter Einstellungen › Datenschutz einschalten.",
        },
    },
} satisfies PartialDict<typeof en>;
