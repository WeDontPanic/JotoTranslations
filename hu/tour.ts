import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Keress bármelyik irányba",
            description:
                "Írj angolul, japánul, kanával vagy rómadzsival. Gépelés közben javaslatok jelennek meg, a hashtagek, például a #n5, pedig szűkítik a találatokat.",
            descriptionVoice:
                "Írj angolul, japánul, kanával vagy rómadzsival, vagy koppints a mikrofonra a hangalapú kereséshez. Gépelés közben javaslatok jelennek meg, a hashtagek, például a #n5, pedig szűkítik a találatokat.",
            shortcut: "Ugrás a keresősávra",
        },
        type: {
            title: "Válaszd ki, mit keresel",
            description: "A keresőmező melletti menüvel válthatsz a szavak, a kandzsik, a példamondatok és a nevek között.",
            shortcut: "Váltás a találati oldalakon",
        },
        radicals: {
            title: "Kandzsik keresése részeik alapján",
            description:
                "Nem tudsz elolvasni egy kandzsit? Nyisd meg a 部 gombot, válaszd ki a felismert gyököket, és a Jotoba kilistázza a hozzájuk illő kandzsikat.",
        },
        reader: {
            title: "Egész mondatok olvasása",
            description:
                "Keress rá egy teljes japán mondatra, és a Jotoba szavakra bontja. Válassz ki egy szót, hogy lásd a szótári alakját és a ragozását.",
        },
        wordMenu: {
            title: "Még több minden találatnál",
            description:
                "A szó melletti ⋮ menüben ragozást, példamondatokat, megosztható linket és a szó részletes oldalát találod, ahol könyvjelzőzheted is.",
        },
        settings: {
            title: "Beállítások és súgó",
            description:
                "A menüben vannak a könyvjelzőid, a beállítások, a hírek és a súgóoldal, ahol minden funkcióról olvashatsz, és újraindíthatod ezt a bemutatót. Próbáld ki itt a nyelvi beállításokat, a módosítások azonnal érvényesek.",
            descriptionSearchOnly:
                "A menüben vannak a könyvjelzőid, a beállítások, a hírek és a súgóoldal, ahol minden funkcióról olvashatsz, és újraindíthatod ezt a bemutatót. Próbáld ki itt a keresési nyelvet, a módosítás azonnal érvényes.",
        },
    },
    languages: {
        group: "Nyelvek",
    },
    progress: "{{current}} / {{total}}",
    announce: "{{current}}. lépés / {{total}}. {{title}}. {{description}}",
    close: "Bemutató bezárása",
    back: "Vissza",
    next: "Tovább",
    done: "Kész",
    preview: {
        types: {
            words: "Szavak",
            kanji: "Kandzsi",
            sentences: "Mondatok",
            names: "Nevek",
        },
        gloss: "eszik",
        form: "múlt idő, udvarias",
        wordMenu: {
            conjugations: "Ragozás",
            sentenceSearch: "Mondatkeresés",
            copyLink: "Link másolása",
            details: "Részletek",
        },
    },
} satisfies PartialDict<typeof en>;
