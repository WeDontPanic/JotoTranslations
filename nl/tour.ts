import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "In elke richting zoeken",
            description:
                "Typ Engels, Japans, kana of romaji. Tijdens het typen verschijnen suggesties, en hashtags zoals #n5 verfijnen de resultaten.",
            descriptionVoice:
                "Typ Engels, Japans, kana of romaji, of tik op de microfoon om met je stem te zoeken. Tijdens het typen verschijnen suggesties, en hashtags zoals #n5 verfijnen de resultaten.",
            shortcut: "Naar de zoekbalk springen",
        },
        type: {
            title: "Kiezen wat je zoekt",
            description: "Het menu naast het zoekveld wisselt tussen woorden, kanji, voorbeeldzinnen en namen.",
            shortcut: "Wisselen op resultatenpagina’s",
        },
        radicals: {
            title: "Kanji vinden via hun onderdelen",
            description:
                "Kun je een kanji niet lezen? Open 部, kies de radicalen die je herkent en Jotoba toont passende kanji.",
        },
        reader: {
            title: "Hele zinnen lezen",
            description:
                "Zoek op een hele Japanse zin en Jotoba deelt hem op in woorden. Kies een woord om de woordenboekvorm te zien en hoe het vervoegd is.",
        },
        wordMenu: {
            title: "Meer bij elk resultaat",
            description:
                "Open ⋮ naast een woord voor vervoegingen, voorbeeldzinnen, een link om te delen en de detailpagina, waar je het als bladwijzer kunt bewaren.",
        },
        settings: {
            title: "Instellingen en hulp",
            description:
                "In het menu vind je je bladwijzers, de instellingen, het nieuws en de hulppagina, waar je over elke functie kunt lezen en deze rondleiding opnieuw kunt starten. Probeer de taalinstellingen hier meteen uit, wijzigingen gelden direct.",
            descriptionSearchOnly:
                "In het menu vind je je bladwijzers, de instellingen, het nieuws en de hulppagina, waar je over elke functie kunt lezen en deze rondleiding opnieuw kunt starten. Probeer de zoektaal hier meteen uit, wijzigingen gelden direct.",
        },
    },
    languages: {
        group: "Talen",
    },
    progress: "{{current}} van {{total}}",
    announce: "Stap {{current}} van {{total}}. {{title}}. {{description}}",
    close: "Rondleiding sluiten",
    back: "Terug",
    next: "Volgende",
    done: "Klaar",
    preview: {
        types: {
            words: "Woorden",
            kanji: "Kanji",
            sentences: "Zinnen",
            names: "Namen",
        },
        gloss: "eten",
        form: "verleden tijd, beleefd",
        wordMenu: {
            conjugations: "Vervoegingen",
            sentenceSearch: "Zinnen zoeken",
            copyLink: "Link kopiëren",
            details: "Details",
        },
    },
} satisfies PartialDict<typeof en>;
