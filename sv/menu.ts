import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Meny",
        unread: "Meny ({{count}} olästa nyheter)",
    },
    drawer: {
        title: "Meny",
        mainNav: "Huvudmeny",
        aboutNav: "Om Jotoba",
        development: "Utveckling",
        unread: "oläst",
        offlineUpdate: "(uppdatering tillgänglig)",
        offlineOutdated: "(behöver uppdateras)",
        offlineRemoved: "(inte längre på den här enheten)",
    },
    links: {
        bookmarks: "Bokmärken",
        settings: "Inställningar",
        history: "Senaste sökningar",
        offline: "Offlineordbok",
        news: "Nyheter",
        help: "Hjälp och rundtur",
        components: "Komponenter",
        apiTest: "API-test",
        about: "Om oss",
        licenses: "Licenser för öppen källkod",
        privacy: "Integritetspolicy",
        terms: "Användarvillkor",
        imprint: "Kontaktuppgifter",
        home: "Startsida",
        quit: "Avsluta appen",
    },
    news: {
        button: "Nyheter",
        buttonUnread: "Nyheter, {{count}} olästa",
        title: "Nyheter",
        freshCount: "{{count}} nya",
        new: "Ny",
        showAll: "Visa alla nyheter",
        close: "Stäng",
        empty: "Inga nyheter tillgängliga",
        error: "Nyheterna kan inte laddas just nu.",
        retry: "Försök igen",
        status: {
            fresh: { one: "{{count}} nytt inlägg", other: "{{count}} nya inlägg" },
            noneFresh: "Inga nya inlägg",
        },
    },
} satisfies PartialDict<typeof en>;
