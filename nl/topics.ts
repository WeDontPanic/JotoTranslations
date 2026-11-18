import type en from "../en/topics";
import type { PartialDict } from "../types";

export default {
    title: "Thema's",
    intro: "Woordenlijsten om door te bladeren: de woordenschat van elk JLPT-niveau, gezegden en klankwoorden, en de drie vormen van keigo, de beleefdheidstaal van het Japans.",
    metaTitle: "Japanse woordenlijsten per thema",
    metaDescription: "Blader door Japanse woordenschat per JLPT-niveau of thema: uitdrukkingen van vier kanji, spreekwoorden, idiomen, klanknabootsingen en keigo.",
    back: "Thema's",
    groups: {
        jlpt: "JLPT-woordenschat",
        sayings: "Gezegden en klankwoorden",
        keigo: "Keigo (beleefdheidstaal)",
    },
    openSearch: "Openen als zoekopdracht",
    exampleLabel: "Voorbeeld",
    more: "Meer thema's",
    topWords: "De 1000 meest gebruikte woorden worden getoond.",
    notFound: "Dit thema bestaat niet.",
    allTopics: "Alle thema's",
    showTopic: "Alle woorden: {{name}}",
    items: {
        "jlpt-n5": {
            name: "JLPT-N5-woordenschat",
            short: "De eerste woorden: de basis voor elke dag.",
            intro: "Woorden van het makkelijkste niveau van de Japanese-Language Proficiency Test (JLPT): getallen, familie, eten en de werkwoorden van het dagelijks leven. Een goed begin zodra je hiragana en katakana kent.",
        },
        "jlpt-n4": {
            name: "JLPT-N4-woordenschat",
            short: "Basiswoorden voor eenvoudige gesprekken.",
            intro: "Woorden van het op één na makkelijkste JLPT-niveau. Hiermee vertel je in eenvoudige zinnen over je dag, je plannen en je gevoelens.",
        },
        "jlpt-n3": {
            name: "JLPT-N3-woordenschat",
            short: "Alledaags Japans tussen de basis en vloeiend spreken.",
            intro: "Woorden van het middelste JLPT-niveau. Daarmee volg je alledaagse teksten en gesprekken op natuurlijk tempo, met een beetje hulp.",
        },
        "jlpt-n2": {
            name: "JLPT-N2-woordenschat",
            short: "Woorden voor nieuws, werk en langere teksten.",
            intro: "Woorden van het op één na hoogste JLPT-niveau. Ze dekken het nieuws, werk en langere teksten over algemene onderwerpen.",
        },
        "jlpt-n1": {
            name: "JLPT-N1-woordenschat",
            short: "Gevorderde en formele woordenschat.",
            intro: "Woorden van het hoogste JLPT-niveau: abstracte, formele en literaire woordenschat voor complexe teksten.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Uitdrukkingen van vier kanji.",
            intro: "Samenstellingen van vier kanji, vaak afkomstig uit Chinese klassieken. Ze vangen een les of een beeld in vier tekens en zijn geliefd in toespraken, op school en in quizprogramma's.",
            example: "een ontmoeting die maar één keer in je leven voorkomt",
        },
        onomatopoeia: {
            name: "Klanknabootsingen",
            short: "Woorden die geluiden, toestanden en gevoelens nabootsen.",
            intro: "Het Japans kent duizenden klankwoorden (giongo) en woorden die laten zien hoe iets eruitziet of aanvoelt (gitaigo). Je komt ze overal tegen, in gesprekken en in manga, vaak met と of する.",
            example: "fonkelend, glinsterend",
        },
        proverbs: {
            name: "Spreekwoorden",
            short: "Gezegden die een levenswijsheid doorgeven.",
            intro: "Kotowaza zijn gezegden met een les, die je meestal in hun geheel aanhaalt. Veel hebben een Nederlandse tegenhanger, maar dan met Japanse beelden.",
            example: "Ook apen vallen weleens uit de boom.",
        },
        idioms: {
            name: "Idiomen",
            short: "Uitdrukkingen waarvan de betekenis niet in de woorden zit.",
            intro: "Kan'yōku zijn vaste uitdrukkingen, vaak met lichaamsdelen of dieren, waarvan je de betekenis niet woord voor woord kunt afleiden. Leer ze als geheel.",
            example: "zo druk dat je zelfs hulp van een kat zou aannemen",
        },
        sonkeigo: {
            name: "Sonkeigo (eerbiedige taal)",
            short: "Woorden die de handelende persoon verheffen.",
            intro: "Eerbiedige woorden verheffen degene die iets doet, meestal je gesprekspartner of iemand met een hogere positie. Gebruik ze nooit voor jezelf.",
            example: "komen, gaan, zijn (eerbiedig)",
        },
        kenjougo: {
            name: "Kenjōgo (bescheiden taal)",
            short: "Woorden waarmee je jezelf uit respect lager plaatst.",
            intro: "Bescheiden woorden plaatsen jou of je groep lager om respect te tonen voor de ander. Gebruik ze alleen voor je eigen handelingen.",
            example: "gaan, komen (bescheiden)",
        },
        teineigo: {
            name: "Teineigo (beleefde taal)",
            short: "De beleefde stijl voor mensen die je niet goed kent.",
            intro: "Beleefde woorden en vormen, zoals です en ます, voor onbekenden, klanten en collega's. De veilige keuze als je twijfelt.",
            example: "er is, het is (beleefd)",
        },
    },
} satisfies PartialDict<typeof en>;
