import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Meni",
        unread: "Meni (neprebrane novice: {{count}})",
    },
    drawer: {
        title: "Meni",
        mainNav: "Glavni meni",
        aboutNav: "O Jotobi",
        development: "Razvoj",
        unread: "neprebrano",
        offlineUpdate: "(na voljo je posodobitev)",
        offlineOutdated: "(potrebna je posodobitev)",
        offlineRemoved: "(ni več v tej napravi)",
    },
    links: {
        bookmarks: "Zaznamki",
        settings: "Nastavitve",
        history: "Nedavna iskanja",
        offline: "Slovar brez povezave",
        news: "Novice",
        help: "Pomoč in ogled",
        components: "Komponente",
        apiTest: "Preizkus API-ja",
        about: "O nas",
        licenses: "Odprtokodne licence",
        privacy: "Politika zasebnosti",
        terms: "Pogoji uporabe",
        imprint: "Impresum",
        home: "Domov",
        quit: "Zapri aplikacijo",
    },
    news: {
        button: "Novice",
        buttonUnread: "Novice, neprebrane: {{count}}",
        title: "Novice",
        freshCount: "Novo: {{count}}",
        new: "Novo",
        showAll: "Prikaži vse novice",
        close: "Zapri",
        empty: "Ni novic",
        error: "Novic trenutno ni mogoče naložiti.",
        retry: "Poskusi znova",
        status: {
            fresh: {
                one: "{{count}} nov vnos",
                two: "{{count}} nova vnosa",
                few: "{{count}} novi vnosi",
                other: "{{count}} novih vnosov",
            },
            noneFresh: "Ni novih vnosov",
        },
    },
} satisfies PartialDict<typeof en>;
