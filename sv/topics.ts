import type en from "../en/topics";
import type { PartialDict } from "../types";

export default {
    title: "Teman",
    intro: "Ordlistor att bläddra i: ordförrådet för varje JLPT-nivå, talesätt och ljudord, och de tre formerna av keigo, japanskans artighetsspråk.",
    metaTitle: "Japanska ordlistor efter tema",
    metaDescription: "Bläddra i japanskt ordförråd efter JLPT-nivå eller tema: fyrteckensuttryck, ordspråk, idiom, ljudhärmande ord och keigo.",
    back: "Teman",
    groups: {
        jlpt: "JLPT-ordförråd",
        sayings: "Talesätt och ljudord",
        keigo: "Keigo (artighetsspråk)",
    },
    openSearch: "Öppna som sökning",
    exampleLabel: "Exempel",
    more: "Fler teman",
    topWords: "De 1000 vanligaste orden visas.",
    notFound: "Det temat finns inte.",
    allTopics: "Alla teman",
    showTopic: "Alla ord: {{name}}",
    items: {
        "jlpt-n5": {
            name: "Ordförråd för JLPT N5",
            short: "De första orden: vardagens grunder.",
            intro: "Ord från den lättaste nivån av Japanese-Language Proficiency Test (JLPT): siffror, familj, mat och vardagens verb. En bra start när du kan hiragana och katakana.",
        },
        "jlpt-n4": {
            name: "Ordförråd för JLPT N4",
            short: "Grundord för enkla samtal.",
            intro: "Ord från den näst lättaste JLPT-nivån. Med dem kan du berätta om din dag, dina planer och känslor med enkla meningar.",
        },
        "jlpt-n3": {
            name: "Ordförråd för JLPT N3",
            short: "Vardagsjapanska mellan grunderna och flytande språk.",
            intro: "Ord från JLPT:s mellannivå. Med dem kan du följa vardagliga texter och samtal i naturligt tempo, med lite hjälp.",
        },
        "jlpt-n2": {
            name: "Ordförråd för JLPT N2",
            short: "Ord för nyheter, arbete och längre texter.",
            intro: "Ord från den näst högsta JLPT-nivån. De täcker nyheter, arbetsliv och längre texter om allmänna ämnen.",
        },
        "jlpt-n1": {
            name: "Ordförråd för JLPT N1",
            short: "Avancerat och formellt ordförråd.",
            intro: "Ord från den högsta JLPT-nivån: abstrakt, formellt och litterärt ordförråd för komplexa texter.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Uttryck med fyra kanji.",
            intro: "Sammansättningar av fyra kanji, många från kinesiska klassiker. De rymmer en lärdom eller en bild i fyra tecken och är populära i tal, i skolan och i frågesporter.",
            example: "ett möte som bara sker en gång i livet",
        },
        onomatopoeia: {
            name: "Ljudhärmande ord",
            short: "Ord som härmar ljud, tillstånd och känslor.",
            intro: "Japanskan har tusentals ljudord (giongo) och ord som visar hur något ser ut eller känns (gitaigo). De finns överallt i tal och manga, ofta med と eller する.",
            example: "gnistrande, glittrande",
        },
        proverbs: {
            name: "Ordspråk",
            short: "Talesätt som för vidare en livsvisdom.",
            intro: "Kotowaza är talesätt med en lärdom, som oftast citeras i sin helhet. Många har en svensk motsvarighet, fast med japanska bilder.",
            example: "Även apor faller ner från träd.",
        },
        idioms: {
            name: "Idiom",
            short: "Fraser vars betydelse inte syns i orden.",
            intro: "Kan'yōku är fasta fraser, ofta med kroppsdelar eller djur, vars betydelse inte går att räkna ut ord för ord. Lär dig dem som en helhet.",
            example: "så upptagen att man skulle ta hjälp även av en katt",
        },
        sonkeigo: {
            name: "Sonkeigo (hedersspråk)",
            short: "Ord som upphöjer den som handlar.",
            intro: "Hedrande ord upphöjer den som utför handlingen, oftast den du talar med eller någon med högre status. Använd dem aldrig om dig själv.",
            example: "komma, gå, vara (hedrande)",
        },
        kenjougo: {
            name: "Kenjōgo (ödmjukt språk)",
            short: "Ord som sänker dig själv av respekt.",
            intro: "Ödmjuka ord sänker dig själv eller din grupp för att visa respekt för den andra. Använd dem bara om dina egna handlingar.",
            example: "gå, komma (ödmjukt)",
        },
        teineigo: {
            name: "Teineigo (artigt språk)",
            short: "Den artiga stilen för personer du inte känner väl.",
            intro: "Artiga ord och former, som です och ます, för främlingar, kunder och kollegor. Det säkra valet när du är osäker.",
            example: "det finns, det är (artigt)",
        },
    },
} satisfies PartialDict<typeof en>;
