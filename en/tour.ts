import type { Dict } from "../types";

export default {
    steps: {
        search: {
            title: "Search in any direction",
            description:
                "Type English, Japanese, kana or romaji. Suggestions appear as you type, and #tags like #n5 narrow down the results. Try it with 猫 (cat).",
            descriptionVoice:
                "Type English, Japanese, kana or romaji, or tap the microphone to search by voice. Suggestions appear as you type, and #tags like #n5 narrow down the results. Try it with 猫 (cat).",
            shortcut: "Jump to the search bar",
        },
        details: {
            title: "Every word has its own page",
            description: "Select a word to open its page with all meanings, its kanji, example sentences and conjugations.",
            descriptionStatic:
                "Select a word in the results to open its page with all meanings, its kanji, example sentences and conjugations.",
        },
        bookmark: {
            title: "Keep words for later",
            description:
                "The bookmark button saves a word to a list. ⋮ has conjugations, example sentences and a link to share.",
            descriptionMenu:
                "Open ⋮ next to a word to bookmark it, see its conjugations, find example sentences or copy a link.",
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
        type: {
            title: "Choose what to search",
            description:
                "The menu next to the search field switches between words, kanji, example sentences and names. Here are the kanji of 猫.",
            descriptionStatic:
                "The menu next to the search field switches between words, kanji, example sentences and names.",
            shortcut: "Switch on results pages",
        },
        settings: {
            title: "Bookmarks, settings and help",
            description:
                "Open the menu for your bookmarks, settings, news and the help page, where you can restart this tour. Try the language settings right here, changes apply right away.",
            descriptionSearchOnly:
                "Open the menu for your bookmarks, settings, news and the help page, where you can restart this tour. Try the search language right here, changes apply right away.",
        },
    },
    menuHint: {
        text: "Words you bookmark are kept in Bookmarks. You can also study each list as flashcards there.",
        done: "Done",
    },
    languages: {
        group: "Languages",
    },
    progress: "{{current}} of {{total}}",
    announce: "Step {{current}} of {{total}}. {{title}}. {{description}}",
    announceResumed: "Back in the tour. Step {{current}} of {{total}}.",
    close: "Close tour",
    back: "Back",
    next: "Next",
    done: "Done",
    searchExample: "Search {{query}}",
    searching: "Searching…",
    loading: "Loading…",
    openMenu: "Open menu",
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
            bookmark: "Bookmark",
            conjugations: "Conjugations",
            sentenceSearch: "Sentence search",
            copyLink: "Copy link",
        },
    },
} as const satisfies Dict;
