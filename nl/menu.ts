import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Menu",
        unread: "Menu ({{count}} ongelezen nieuwsberichten)",
    },
    drawer: {
        title: "Menu",
        mainNav: "Hoofdmenu",
        aboutNav: "Over Jotoba",
        development: "Ontwikkeling",
        unread: "ongelezen",
        offlineUpdate: "(update beschikbaar)",
        offlineOutdated: "(update nodig)",
        offlineRemoved: "(niet meer op dit apparaat)",
    },
    links: {
        bookmarks: "Bladwijzers",
        settings: "Instellingen",
        history: "Recente zoekopdrachten",
        offline: "Offline woordenboek",
        news: "Nieuws",
        help: "Hulp & rondleiding",
        components: "Componenten",
        apiTest: "API-test",
        about: "Over ons",
        licenses: "Opensourcelicenties",
        privacy: "Privacyverklaring",
        terms: "Gebruiksvoorwaarden",
        imprint: "Colofon",
        home: "Startpagina",
        quit: "App afsluiten",
    },
    news: {
        button: "Nieuws",
        buttonUnread: "Nieuws, {{count}} ongelezen",
        title: "Nieuws",
        freshCount: "{{count}} nieuw",
        new: "Nieuw",
        showAll: "Al het nieuws tonen",
        close: "Sluiten",
        empty: "Geen nieuws beschikbaar",
        error: "Het nieuws kan nu niet worden geladen.",
        retry: "Opnieuw proberen",
        status: {
            fresh: { one: "{{count}} nieuw bericht", other: "{{count}} nieuwe berichten" },
            noneFresh: "Geen nieuwe berichten",
        },
    },
} satisfies PartialDict<typeof en>;
