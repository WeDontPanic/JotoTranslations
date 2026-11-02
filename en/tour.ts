import type { Dict } from "../types";

export default {
    steps: {
        search: {
            title: "Search in any direction",
            description:
                "Type English, Japanese, kana or romaji. Suggestions appear as you type, and #tags like #n5 narrow down the results.",
            descriptionVoice:
                "Type English, Japanese, kana or romaji, or tap the microphone to search by voice. Suggestions appear as you type, and #tags like #n5 narrow down the results.",
            shortcut: "Jump to the search bar",
        },
        type: {
            title: "Choose what to search",
            description: "The menu next to the search field switches between words, kanji, example sentences and names.",
            shortcut: "Switch on results pages",
        },
        radicals: {
            title: "Find kanji by their parts",
            description: "Can't read a kanji? Open 部, pick the radicals you recognize and Jotoba lists matching kanji.",
        },
        reader: {
            title: "Read whole sentences",
            description:
                "Search a full Japanese sentence and Jotoba splits it into words. Select a word to see its dictionary form and how it was conjugated.",
        },
        wordMenu: {
            title: "More on every result",
            description:
                "Open ⋮ next to a word for conjugations, example sentences, a link to share and its details page, where you can bookmark it.",
        },
        settings: {
            title: "Settings and help",
            description:
                "The menu holds your bookmarks, settings, news and the help page, where you can read about every feature and restart this tour. Try the language settings right here, changes apply right away.",
            descriptionSearchOnly:
                "The menu holds your bookmarks, settings, news and the help page, where you can read about every feature and restart this tour. Try the search language right here, changes apply right away.",
        },
    },
    languages: {
        group: "Languages",
    },
    progress: "{{current}} of {{total}}",
    announce: "Step {{current}} of {{total}}. {{title}}. {{description}}",
    close: "Close tour",
    back: "Back",
    next: "Next",
    done: "Done",
    preview: {
        types: {
            words: "Words",
            kanji: "Kanji",
            sentences: "Sentences",
            names: "Names",
        },
        gloss: "to eat",
        form: "past, polite",
        wordMenu: {
            conjugations: "Conjugations",
            sentenceSearch: "Sentence search",
            copyLink: "Copy link",
            details: "Details",
        },
    },
} as const satisfies Dict;
