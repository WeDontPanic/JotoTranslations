import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Keress bármelyik irányba",
            description:
                "Írj angolul, japánul, kanával vagy rómadzsival. Gépelés közben javaslatok jelennek meg, a hashtagek, például a #n5, pedig szűkítik a találatokat. Próbáld ki a 猫 (macska) szóval.",
            descriptionVoice:
                "Írj angolul, japánul, kanával vagy rómadzsival, vagy koppints a mikrofonra a hangalapú kereséshez. Gépelés közben javaslatok jelennek meg, a hashtagek, például a #n5, pedig szűkítik a találatokat. Próbáld ki a 猫 (macska) szóval.",
            shortcut: "Ugrás a keresősávra",
        },
        details: {
            title: "Minden szónak saját oldala van",
            description:
                "Válassz ki egy szót, és megnyílik az oldala az összes jelentésével, a kandzsijaival, példamondatokkal és ragozással.",
            descriptionStatic:
                "Válassz ki egy szót a találatok közül, és megnyílik az oldala az összes jelentésével, a kandzsijaival, példamondatokkal és ragozással.",
        },
        bookmark: {
            title: "Szavak mentése későbbre",
            description:
                "A könyvjelző gomb listába menti a szót. A ⋮ alatt ragozás, példamondatok és megosztható link is van.",
            descriptionMenu:
                "Nyisd meg a szó melletti ⋮ menüt, hogy könyvjelzőzd, megnézd a ragozását, példamondatokat keress vagy linket másolj.",
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
        type: {
            title: "Válaszd ki, mit keresel",
            description:
                "A keresőmező melletti menüvel válthatsz a szavak, a kandzsik, a példamondatok és a nevek között. Itt a 猫 kandzsijai láthatók.",
            descriptionStatic:
                "A keresőmező melletti menüvel válthatsz a szavak, a kandzsik, a példamondatok és a nevek között.",
            shortcut: "Váltás a találati oldalakon",
        },
        settings: {
            title: "Könyvjelzők, beállítások és súgó",
            description:
                "Nyisd meg a menüt a könyvjelzőidért, a beállításokért, a hírekért és a súgóért, ahol újraindíthatod ezt a bemutatót. A nyelvi beállításokat itt is kipróbálhatod, a változások azonnal érvénybe lépnek.",
            descriptionSearchOnly:
                "Nyisd meg a menüt a könyvjelzőidért, a beállításokért, a hírekért és a súgóért, ahol újraindíthatod ezt a bemutatót. A keresési nyelvet itt is kipróbálhatod, a változások azonnal érvénybe lépnek.",
        },
    },
    menuHint: {
        text: "A könyvjelzővel mentett szavakat a Könyvjelzők között találod. Ott minden listát szókártyákkal is tanulhatsz.",
        done: "Kész",
    },
    languages: {
        group: "Nyelvek",
    },
    progress: "{{current}} / {{total}}",
    announce: "{{current}}. lépés / {{total}}. {{title}}. {{description}}",
    announceResumed: "Vissza a bemutatóhoz. {{current}}. lépés / {{total}}.",
    close: "Bemutató bezárása",
    back: "Vissza",
    next: "Tovább",
    done: "Kész",
    searchExample: "{{query}} keresése",
    searching: "Keresés…",
    loading: "Betöltés…",
    openMenu: "Menü megnyitása",
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
            bookmark: "Könyvjelző",
            conjugations: "Ragozás",
            sentenceSearch: "Mondatkeresés",
            copyLink: "Link másolása",
        },
    },
} satisfies PartialDict<typeof en>;
