import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "Zum Inhalt springen",
    header: {
        home: "Jotoba-Startseite",
        signIn: "Anmelden",
        signUp: "Registrieren",
    },
    account: {
        label: "Konto",
        labelNamed: "Konto, angemeldet als {{name}}",
        signedInAs: "Angemeldet als {{name}}",
        bookmarks: "Lesezeichen",
        settings: "Einstellungen",
        signOut: "Abmelden",
        signedOut: "Abgemeldet",
        signOutFailed: "Abmelden hat nicht geklappt. Bitte versuche es noch einmal.",
    },
    footer: {
        label: "Fußzeile",
        about: {
            title: "Über uns",
            credits:
                "Jotoba nutzt viele freie Datenquellen. Zu den wichtigsten gehören <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> und <jmnedict>JMnedict</jmnedict>. Sie sind Eigentum der <edrdg>Electronic Dictionary Research and Development Group</edrdg> und werden gemäß ihrer <license>Lizenz</license> verwendet.",
            contributors: "Alle Mitwirkenden findest du auf unserer <link>Über-uns-Seite</link>.",
        },
        links: {
            title: "Links",
            androidApp: "Android-App",
            about: "Über uns",
            privacy: "Datenschutzerklärung",
            terms: "Nutzungsbedingungen",
            imprint: "Impressum",
            licenses: "Open-Source-Lizenzen",
        },
        support: {
            title: "Unterstütze uns",
            paypal: "Spenden werden unter den Entwicklern aufgeteilt",
        },
        socials: {
            title: "Soziale Medien",
            github: "Quellcode",
            trello: "Unsere Roadmap",
        },
    },
    cookieBanner: {
        title: "Nur eine kurze Cookie-Frage",
        text: "Jotoba hat keine Werbung und keine Tracking-Cookies.",
        necessary: {
            label: "Notwendig",
            description: "Einstellungen, Lesezeichen, Tastenkürzel und Anmeldung",
            descriptionLocal: "Einstellungen, Lesezeichen und Tastenkürzel",
            badge: "Immer an",
        },
        optional: {
            label: "Schneller laden",
            description: "Speichert die Dateien der App auf diesem Gerät, damit Jotoba schneller lädt",
        },
        reject: "Optionale ablehnen",
        allow: "Optionale erlauben",
        settingsLink: "Jederzeit in den Einstellungen ändern",
        privacyLink: "Datenschutzerklärung",
        saved: "Auswahl gespeichert. Du kannst sie jederzeit in den Einstellungen ändern.",
        savedReject: "Auswahl gespeichert. „Schneller laden“ ist aus. Du kannst das jederzeit in den Einstellungen ändern.",
        announce: "Cookie-Frage: Du kannst das Speichern der App-Dateien zum schnelleren Laden ablehnen oder erlauben.",
        pause: ".",
    },
    notFound: {
        title: "Diese Seite gibt es nicht",
        text: "Der Link ist vielleicht kaputt oder der Eintrag wurde entfernt.",
        home: "Zur Startseite",
        report: "Über einen Link hierhergekommen? <link>Defekten Link melden</link>",
    },
    tourHint: {
        newHere: "Neu hier?",
        start: "Kurze Tour starten",
        hide: "Tour-Hinweis ausblenden",
    },
    loadError: {
        offline: "Du bist offline. Dafür brauchst du Internet.",
        unreachable: "Jotoba ist gerade nicht erreichbar. Versuch es gleich noch mal.",
        failed: "Das konnte nicht geladen werden. Versuch es noch mal.",
        page: {
            offlineTitle: "Diese Seite braucht Internet",
            offlineText: "Sie war noch nicht geladen, als du offline gegangen bist. Sobald du wieder online bist, geht's.",
            title: "Diese Seite konnte nicht geladen werden",
            text: "Neu laden hilft meistens.",
            reload: "Seite neu laden",
        },
    },
    common: {
        close: "Schließen",
        closeDialog: "Dialog schließen",
        closeMessage: "Meldung schließen",
        loading: "Wird geladen…",
        opensInNewTab: "(öffnet in neuem Tab)",
        copyFailed: "Kopieren in die Zwischenablage fehlgeschlagen",
        scrollBack: "Zurückscrollen",
        scrollForward: "Weiterscrollen",
        pages: {
            label: "Seiten",
            first: "Erste Seite",
            previous: "Vorherige Seite",
            page: "Seite {{page}}",
            next: "Nächste Seite",
            last: "Letzte Seite",
        },
    },
} satisfies PartialDict<typeof en>;
