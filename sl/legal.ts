import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "To besedilo je na voljo samo v angleščini.",
    imprint: {
        title: "Impresum",
        description: "Impresum in pravni podatki o Jotobi.",
        contact: "Kontaktni podatki",
        email: "E-pošta: <link>{{email}}</link>",
    },
    privacy: {
        title: "Politika zasebnosti",
        heading: "Politika zasebnosti za Jotoba.de",
        description: "Katere podatke Jotoba shranjuje, zakaj in kako jih lahko spremenite ali izbrišete.",
        lastUpdated: "Zadnja posodobitev: {{date}}",
    },
    terms: {
        title: "Pogoji uporabe",
        heading: "Pogoji uporabe",
        description: "Pogoji za uporabo slovarja Jotoba in njegovih podatkov.",
        lastUpdated: "Zadnja posodobitev: {{date}}",
    },
} satisfies PartialDict<typeof en>;
