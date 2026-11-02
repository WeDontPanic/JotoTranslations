import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Menü",
        unread: "Menü ({{count}} olvasatlan hír)",
    },
    drawer: {
        title: "Menü",
        mainNav: "Főmenü",
        aboutNav: "A Jotobáról",
        development: "Fejlesztés",
        unread: "olvasatlan",
        offlineUpdate: "(frissítés érhető el)",
        offlineOutdated: "(frissíteni kell)",
        offlineRemoved: "(már nincs ezen az eszközön)",
    },
    links: {
        bookmarks: "Könyvjelzők",
        settings: "Beállítások",
        history: "Legutóbbi keresések",
        offline: "Offline szótár",
        news: "Hírek",
        help: "Súgó és bemutató",
        components: "Komponensek",
        apiTest: "API-teszt",
        about: "Rólunk",
        licenses: "Nyílt forráskódú licencek",
        privacy: "Adatvédelmi tájékoztató",
        terms: "Felhasználási feltételek",
        imprint: "Impresszum",
        home: "Kezdőlap",
        quit: "Kilépés az appból",
    },
    news: {
        button: "Hírek",
        buttonUnread: "Hírek, {{count}} olvasatlan",
        title: "Hírek",
        freshCount: "{{count}} új",
        new: "Új",
        showAll: "Összes hír",
        close: "Bezárás",
        empty: "Nincsenek hírek",
        error: "A hírek most nem tölthetők be.",
        retry: "Újrapróbálás",
        status: {
            fresh: { one: "{{count}} új bejegyzés", other: "{{count}} új bejegyzés" },
            noneFresh: "Nincsenek új bejegyzések",
        },
    },
} satisfies PartialDict<typeof en>;
