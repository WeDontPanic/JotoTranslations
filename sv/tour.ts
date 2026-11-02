import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Sök åt alla håll",
            description:
                "Skriv på engelska, japanska, kana eller romaji. Förslag visas medan du skriver, och #taggar som #n5 begränsar resultaten.",
            descriptionVoice:
                "Skriv på engelska, japanska, kana eller romaji, eller tryck på mikrofonen för att söka med rösten. Förslag visas medan du skriver, och #taggar som #n5 begränsar resultaten.",
            shortcut: "Hoppa till sökfältet",
        },
        type: {
            title: "Välj vad du vill söka",
            description: "Menyn bredvid sökfältet växlar mellan ord, kanji, exempelmeningar och namn.",
            shortcut: "Byt på resultatsidor",
        },
        radicals: {
            title: "Hitta kanji via deras delar",
            description:
                "Kan du inte läsa ett kanji? Öppna 部, välj de radikaler du känner igen så listar Jotoba matchande kanji.",
        },
        reader: {
            title: "Läs hela meningar",
            description:
                "Sök på en hel japansk mening så delar Jotoba upp den i ord. Välj ett ord för att se dess grundform och hur det har böjts.",
        },
        wordMenu: {
            title: "Mer om varje resultat",
            description:
                "Öppna ⋮ bredvid ett ord för böjningar, exempelmeningar, en länk att dela och detaljsidan, där du kan bokmärka det.",
        },
        settings: {
            title: "Inställningar och hjälp",
            description:
                "I menyn finns dina bokmärken, inställningar, nyheter och hjälpsidan, där du kan läsa om alla funktioner och starta rundturen igen. Prova språkinställningarna här, ändringarna gäller direkt.",
            descriptionSearchOnly:
                "I menyn finns dina bokmärken, inställningar, nyheter och hjälpsidan, där du kan läsa om alla funktioner och starta rundturen igen. Prova sökspråket här, ändringarna gäller direkt.",
        },
    },
    languages: {
        group: "Språk",
    },
    progress: "{{current}} av {{total}}",
    announce: "Steg {{current}} av {{total}}. {{title}}. {{description}}",
    close: "Stäng rundturen",
    back: "Tillbaka",
    next: "Nästa",
    done: "Klar",
    preview: {
        types: {
            words: "Ord",
            kanji: "Kanji",
            sentences: "Meningar",
            names: "Namn",
        },
        gloss: "äta",
        form: "dåtid, artig",
        wordMenu: {
            conjugations: "Böjningar",
            sentenceSearch: "Meningssökning",
            copyLink: "Kopiera länk",
            details: "Detaljer",
        },
    },
} satisfies PartialDict<typeof en>;
