import type en from "../en/topics";
import type { PartialDict } from "../types";

export default {
    title: "Témák",
    intro: "Böngészhető szólisták: az egyes JLPT-szintek szókincse, szólások és hangutánzó szavak, valamint a japán udvarias nyelv három formája.",
    metaTitle: "Japán szólisták témák szerint",
    metaDescription: "Böngészd a japán szókincset JLPT-szint szerint, vagy fedezd fel a négykandzsis kifejezéseket, a közmondásokat, a szólásokat, a hangutánzó szavakat és a keigót.",
    back: "Témák",
    groups: {
        jlpt: "JLPT-szókincs",
        sayings: "Szólások és hangutánzó szavak",
        keigo: "Keigo (udvarias nyelv)",
    },
    openSearch: "Megnyitás keresésként",
    exampleLabel: "Példa",
    more: "További témák",
    topWords: "A lista az 1000 leggyakoribb szót mutatja.",
    notFound: "Ilyen téma nincs.",
    allTopics: "Összes téma",
    showTopic: "Összes szó: {{name}}",
    items: {
        "jlpt-n5": {
            name: "JLPT N5 szókincs",
            short: "Az első szavak: a mindennapok alapjai.",
            intro: "A japán nyelvvizsga (JLPT) legkönnyebb szintjének szavai: számok, család, ételek és a mindennapi élet igéi. Jó kiindulópont, ha már ismered a hiraganát és a katakanát.",
        },
        "jlpt-n4": {
            name: "JLPT N4 szókincs",
            short: "Alapszavak egyszerű beszélgetésekhez.",
            intro: "A japán nyelvvizsga második szintjének szavai. Segítségükkel egyszerű mondatokban mesélhetsz a napodról, a terveidről és az érzéseidről.",
        },
        "jlpt-n3": {
            name: "JLPT N3 szókincs",
            short: "Hétköznapi japán az alapok és a folyékony nyelvtudás között.",
            intro: "A japán nyelvvizsga középső szintjének szavai. Velük némi segítséggel már természetes tempóban is követheted a hétköznapi szövegeket és beszélgetéseket.",
        },
        "jlpt-n2": {
            name: "JLPT N2 szókincs",
            short: "Szavak hírekhez, munkához és hosszabb szövegekhez.",
            intro: "A japán nyelvvizsga második legmagasabb szintjének szavai. Lefedik a híreket, a munka világát és az általános témájú hosszabb szövegeket.",
        },
        "jlpt-n1": {
            name: "JLPT N1 szókincs",
            short: "Haladó és választékos szókincs.",
            intro: "A japán nyelvvizsga legmagasabb szintjének szavai: elvont, hivatalos és irodalmi kifejezések összetett szövegekhez.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Négy kandzsiból álló kifejezések.",
            intro: "Négy kandzsiból álló összetételek, sokuk kínai klasszikus művekből ered. Négy írásjegybe sűrítenek egy tanulságot vagy képet, ezért kedveltek beszédekben, az iskolában és a kvízműsorokban.",
            example: "egyszeri, megismételhetetlen találkozás",
        },
        onomatopoeia: {
            name: "Hangutánzó szavak",
            short: "Hangokat, állapotokat és érzéseket utánzó szavak.",
            intro: "A japánban több ezer hangutánzó szó (giongo) és hangulatfestő szó (gitaigo) van; utóbbiak azt fejezik ki, milyennek látszik vagy érződik valami. Mindenütt ott vannak a beszédben és a mangában, gyakran と vagy する kíséretében.",
            example: "csillogó",
        },
        proverbs: {
            name: "Közmondások",
            short: "Mondások, amelyek bölcsességet adnak tovább.",
            intro: "A kotowazák tanulságot hordozó mondások, amelyeket általában egészben idéznek. Soknak van megfelelője más nyelvekben is, csak japán képekkel.",
            example: "A majom is leesik a fáról.",
        },
        idioms: {
            name: "Szólások",
            short: "Kifejezések, amelyek jelentése nem olvasható ki a szavaikból.",
            intro: "A kan'yōku állandósult szókapcsolat, gyakran testrészekkel vagy állatokkal, amelynek jelentését nem lehet szóról szóra kikövetkeztetni. Tanuld meg őket egészben.",
            example: "olyan elfoglalt, hogy még egy macska segítségét is elfogadná",
        },
        sonkeigo: {
            name: "Sonkeigo (tiszteleti nyelv)",
            short: "Szavak, amelyek a cselekvő személyt emelik.",
            intro: "A tiszteleti szavak a cselekvő személyt emelik, rendszerint a beszélgetőtársat vagy egy magasabb rangú személyt. Magadra soha ne használd őket.",
            example: "jön, megy, van (tiszteleti)",
        },
        kenjougo: {
            name: "Kenjōgo (szerénységi nyelv)",
            short: "Szavak, amelyekkel tiszteletből szerényebbnek mutatod magad.",
            intro: "A szerénységi szavak téged vagy a csoportodat helyezik lejjebb, hogy tiszteletet fejezz ki a másik fél iránt. Csak a saját cselekvéseidre használd őket.",
            example: "megy, jön (szerénységi)",
        },
        teineigo: {
            name: "Teineigo (udvarias nyelv)",
            short: "Udvarias stílus azokkal, akiket nem ismersz jól.",
            intro: "Udvarias szavak és formák, például a です és a ます, idegenekkel, ügyfelekkel és kollégákkal szemben. Ez a biztos választás, ha bizonytalan vagy.",
            example: "van, létezik (udvarias)",
        },
    },
} satisfies PartialDict<typeof en>;
