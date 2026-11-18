import type en from "../en/topics";
import type { PartialDict } from "../types";

export default {
    title: "Teme",
    intro: "Seznami besed za brskanje: besedišče posameznih stopenj JLPT, reki in zvočnoposnemovalne besede ter tri oblike vljudne japonščine.",
    metaTitle: "Japonski seznami besed po temah",
    metaDescription: "Brskajte po japonskem besedišču po stopnjah JLPT ter po izrazih iz štirih kandžijev, pregovorih, frazemih, zvočnoposnemovalnih besedah in keigu.",
    back: "Teme",
    groups: {
        jlpt: "Besedišče JLPT",
        sayings: "Reki in zvočnoposnemovalne besede",
        keigo: "Keigo (vljudni jezik)",
    },
    openSearch: "Odpri kot iskanje",
    exampleLabel: "Primer",
    more: "Več tem",
    topWords: "Prikazanih je 1000 najpogostejših besed.",
    notFound: "Te teme ni.",
    allTopics: "Vse teme",
    showTopic: "Vse besede: {{name}}",
    items: {
        "jlpt-n5": {
            name: "Besedišče JLPT N5",
            short: "Prve besede: vsakdanje osnove.",
            intro: "Besede najlažje stopnje izpita iz japonskega jezika (JLPT): števila, družina, hrana in glagoli vsakdanjega življenja. Dober začetek, ko že poznate hiragano in katakano.",
        },
        "jlpt-n4": {
            name: "Besedišče JLPT N4",
            short: "Osnovne besede za preproste pogovore.",
            intro: "Besede druge stopnje izpita iz japonskega jezika. Z njimi lahko v preprostih stavkih govorite o svojem dnevu, načrtih in občutkih.",
        },
        "jlpt-n3": {
            name: "Besedišče JLPT N3",
            short: "Vsakdanja japonščina med osnovami in tekočim znanjem.",
            intro: "Besede srednje stopnje izpita iz japonskega jezika. Z njimi lahko ob nekaj pomoči sledite vsakdanjim besedilom in pogovorom v naravnem tempu.",
        },
        "jlpt-n2": {
            name: "Besedišče JLPT N2",
            short: "Besede za novice, delo in daljša besedila.",
            intro: "Besede druge najvišje stopnje izpita iz japonskega jezika. Pokrivajo novice, delo in daljša besedila o splošnih temah.",
        },
        "jlpt-n1": {
            name: "Besedišče JLPT N1",
            short: "Zahtevno in formalno besedišče.",
            intro: "Besede najvišje stopnje izpita iz japonskega jezika: abstraktno, formalno in književno besedišče za zahtevna besedila.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Izrazi iz štirih kandžijev.",
            intro: "Zloženke iz štirih kandžijev; mnoge izvirajo iz kitajskih klasičnih del. V štiri pismenke strnejo nauk ali podobo, zato so priljubljene v govorih, v šoli in v kvizih.",
            example: "enkratno, neponovljivo srečanje",
        },
        onomatopoeia: {
            name: "Zvočnoposnemovalne besede",
            short: "Besede, ki posnemajo zvoke, stanja in občutke.",
            intro: "Japonščina ima na tisoče besed, ki posnemajo zvoke (giongo), in besed, ki ponazarjajo, kako je nekaj videti ali kakšen občutek daje (gitaigo). Najdete jih povsod v govoru in mangi, pogosto s と ali する.",
            example: "bleščeč",
        },
        proverbs: {
            name: "Pregovori",
            short: "Reki, ki prenašajo modrost.",
            intro: "Kotowaza so reki z naukom, ki jih navadno navajamo v celoti. Mnogi imajo ustreznico v drugih jezikih, le z japonskimi podobami.",
            example: "Tudi opice padejo z drevesa.",
        },
        idioms: {
            name: "Frazemi",
            short: "Besedne zveze, katerih pomen ni razviden iz besed.",
            intro: "Kan'yōku so ustaljene besedne zveze, pogosto z deli telesa ali živalmi, katerih pomena ni mogoče razbrati besedo za besedo. Naučite se jih v celoti.",
            example: "tako zaposlen, da bi sprejel pomoč celo od mačke",
        },
        sonkeigo: {
            name: "Sonkeigo (spoštljivi jezik)",
            short: "Besede, ki povzdignejo vršilca dejanja.",
            intro: "Spoštljive besede povzdignejo osebo, ki deluje, navadno sogovornika ali nekoga na višjem položaju. Zase jih nikoli ne uporabljajte.",
            example: "priti, iti, biti (spoštljivo)",
        },
        kenjougo: {
            name: "Kenjōgo (ponižni jezik)",
            short: "Besede, s katerimi iz spoštovanja ponižate sebe.",
            intro: "Ponižne besede postavijo vas ali vašo skupino niže, da izkažete spoštovanje sogovorniku. Uporabljajte jih le za lastna dejanja.",
            example: "iti, priti (ponižno)",
        },
        teineigo: {
            name: "Teineigo (vljudni jezik)",
            short: "Vljudni slog za ljudi, ki jih ne poznate dobro.",
            intro: "Vljudne besede in oblike, kot sta です in ます, za neznance, stranke in sodelavce. Varna izbira, kadar niste prepričani.",
            example: "biti, obstajati (vljudno)",
        },
    },
} satisfies PartialDict<typeof en>;
