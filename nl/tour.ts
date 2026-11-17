import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "In elke richting zoeken",
            description:
                "Typ Engels, Japans, kana of romaji. Tijdens het typen verschijnen suggesties, en hashtags zoals #n5 verfijnen de resultaten. Probeer het met 猫 (kat).",
            descriptionVoice:
                "Typ Engels, Japans, kana of romaji, of tik op de microfoon om met je stem te zoeken. Tijdens het typen verschijnen suggesties, en hashtags zoals #n5 verfijnen de resultaten. Probeer het met 猫 (kat).",
            shortcut: "Naar de zoekbalk springen",
        },
        details: {
            title: "Elk woord heeft een eigen pagina",
            description:
                "Kies een woord om de pagina te openen met alle betekenissen, de kanji, voorbeeldzinnen en vervoegingen.",
            descriptionStatic:
                "Kies een woord in de resultaten om de pagina te openen met alle betekenissen, de kanji, voorbeeldzinnen en vervoegingen.",
        },
        bookmark: {
            title: "Woorden bewaren voor later",
            description:
                "De bladwijzerknop bewaart een woord in een lijst. Onder ⋮ vind je vervoegingen, voorbeeldzinnen en een link om te delen.",
            descriptionMenu:
                "Open ⋮ naast een woord om het te bewaren, de vervoegingen te zien, voorbeeldzinnen te vinden of een link te kopiëren.",
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
        type: {
            title: "Kiezen wat je zoekt",
            description:
                "Het menu naast het zoekveld wisselt tussen woorden, kanji, voorbeeldzinnen en namen. Hier zie je de kanji van 猫.",
            descriptionStatic: "Het menu naast het zoekveld wisselt tussen woorden, kanji, voorbeeldzinnen en namen.",
            shortcut: "Wisselen op resultatenpagina’s",
        },
        settings: {
            title: "Bladwijzers, instellingen en hulp",
            description:
                "Open het menu voor je bladwijzers, de instellingen, het nieuws en de hulppagina, waar je deze rondleiding opnieuw kunt starten. Probeer de taalinstellingen meteen hier, wijzigingen gelden direct.",
            descriptionSearchOnly:
                "Open het menu voor je bladwijzers, de instellingen, het nieuws en de hulppagina, waar je deze rondleiding opnieuw kunt starten. Probeer de zoektaal meteen hier, wijzigingen gelden direct.",
        },
    },
    menuHint: {
        text: "Woorden die je bewaart, staan bij Bladwijzers. Daar kun je elke lijst ook met flashcards leren.",
        done: "Klaar",
    },
    languages: {
        group: "Talen",
    },
    progress: "{{current}} van {{total}}",
    announce: "Stap {{current}} van {{total}}. {{title}}. {{description}}",
    announceResumed: "Terug in de rondleiding. Stap {{current}} van {{total}}.",
    close: "Rondleiding sluiten",
    back: "Terug",
    next: "Volgende",
    done: "Klaar",
    searchExample: "{{query}} zoeken",
    searching: "Zoeken…",
    loading: "Laden…",
    openMenu: "Menu openen",
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
            bookmark: "Bewaren",
            conjugations: "Vervoegingen",
            sentenceSearch: "Zinnen zoeken",
            copyLink: "Link kopiëren",
        },
    },
} satisfies PartialDict<typeof en>;
