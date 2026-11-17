import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Sök åt alla håll",
            description:
                "Skriv på engelska, japanska, kana eller romaji. Förslag visas medan du skriver, och #taggar som #n5 begränsar resultaten. Testa med 猫 (katt).",
            descriptionVoice:
                "Skriv på engelska, japanska, kana eller romaji, eller tryck på mikrofonen för att söka med rösten. Förslag visas medan du skriver, och #taggar som #n5 begränsar resultaten. Testa med 猫 (katt).",
            shortcut: "Hoppa till sökfältet",
        },
        details: {
            title: "Varje ord har en egen sida",
            description:
                "Välj ett ord för att öppna dess sida med alla betydelser, dess kanji, exempelmeningar och böjningar.",
            descriptionStatic:
                "Välj ett ord bland resultaten för att öppna dess sida med alla betydelser, dess kanji, exempelmeningar och böjningar.",
        },
        bookmark: {
            title: "Spara ord till senare",
            description:
                "Bokmärkesknappen sparar ett ord i en lista. Under ⋮ finns böjningar, exempelmeningar och en länk att dela.",
            descriptionMenu:
                "Öppna ⋮ bredvid ett ord för att bokmärka det, se dess böjningar, hitta exempelmeningar eller kopiera en länk.",
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
        type: {
            title: "Välj vad du vill söka",
            description: "Menyn bredvid sökfältet växlar mellan ord, kanji, exempelmeningar och namn. Här är kanjin i 猫.",
            descriptionStatic: "Menyn bredvid sökfältet växlar mellan ord, kanji, exempelmeningar och namn.",
            shortcut: "Byt på resultatsidor",
        },
        settings: {
            title: "Bokmärken, inställningar och hjälp",
            description:
                "Öppna menyn för dina bokmärken, inställningarna, nyheterna och hjälpsidan, där du kan starta om den här rundturen. Testa språkinställningarna direkt här, ändringar gäller med en gång.",
            descriptionSearchOnly:
                "Öppna menyn för dina bokmärken, inställningarna, nyheterna och hjälpsidan, där du kan starta om den här rundturen. Testa sökspråket direkt här, ändringar gäller med en gång.",
        },
    },
    menuHint: {
        text: "Ord du bokmärker hamnar under Bokmärken. Där kan du också plugga varje lista med flashcards.",
        done: "Klar",
    },
    languages: {
        group: "Språk",
    },
    progress: "{{current}} av {{total}}",
    announce: "Steg {{current}} av {{total}}. {{title}}. {{description}}",
    announceResumed: "Tillbaka i rundturen. Steg {{current}} av {{total}}.",
    close: "Stäng rundturen",
    back: "Tillbaka",
    next: "Nästa",
    done: "Klar",
    searchExample: "Sök {{query}}",
    searching: "Söker…",
    loading: "Laddar…",
    openMenu: "Öppna menyn",
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
            bookmark: "Bokmärk",
            conjugations: "Böjningar",
            sentenceSearch: "Meningssökning",
            copyLink: "Kopiera länk",
        },
    },
} satisfies PartialDict<typeof en>;
