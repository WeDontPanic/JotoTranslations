import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "Ez a szöveg csak angolul érhető el.",
    imprint: {
        title: "Impresszum",
        description: "Impresszum és jogi információk a Jotobáról.",
        contact: "Elérhetőség",
        email: "E-mail: <link>{{email}}</link>",
    },
    privacy: {
        title: "Adatvédelmi tájékoztató",
        heading: "A Jotoba.de adatvédelmi tájékoztatója",
        description: "Milyen adatokat tárol a Jotoba, miért, és hogyan módosíthatod vagy törölheted őket.",
        lastUpdated: "Utolsó frissítés: {{date}}",
    },
    terms: {
        title: "Felhasználási feltételek",
        heading: "Felhasználási feltételek",
        description: "A Jotoba szótár és adatainak használati feltételei.",
        lastUpdated: "Utolsó frissítés: {{date}}",
    },
} satisfies PartialDict<typeof en>;
