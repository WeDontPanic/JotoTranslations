import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Menü",
        unread: "Menü ({{count}} ungelesene News)",
    },
    drawer: {
        title: "Menü",
        mainNav: "Hauptmenü",
        aboutNav: "Über Jotoba",
        development: "Entwicklung",
        unread: "ungelesen",
        offlineUpdate: "(Update verfügbar)",
        offlineOutdated: "(braucht ein Update)",
        offlineRemoved: "(nicht mehr auf diesem Gerät)",
    },
    links: {
        bookmarks: "Lesezeichen",
        settings: "Einstellungen",
        history: "Letzte Suchen",
        offline: "Offline-Wörterbuch",
        news: "News",
        help: "Hilfe & Tour",
        components: "Komponenten",
        apiTest: "API-Test",
        about: "Über uns",
        licenses: "Open-Source-Lizenzen",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen",
        imprint: "Impressum",
        home: "Startseite",
        quit: "App beenden",
    },
    news: {
        button: "News",
        buttonUnread: "News, {{count}} ungelesen",
        title: "News",
        freshCount: "{{count}} neu",
        new: "Neu",
        showAll: "Alle News anzeigen",
        close: "Schließen",
        empty: "Keine News vorhanden",
        error: "Die News können gerade nicht geladen werden.",
        retry: "Erneut versuchen",
        status: {
            fresh: { one: "{{count}} neuer Eintrag", other: "{{count}} neue Einträge" },
            noneFresh: "Keine neuen Einträge",
        },
    },
} satisfies PartialDict<typeof en>;
