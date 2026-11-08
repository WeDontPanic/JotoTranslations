import type { Dict } from "../types";

export default {
    retry: "Retry",
    cancel: "Cancel",
    newTab: "(opens in a new tab)",

    // Document titles and descriptions; " | Jotoba" is added by the app
    meta: {
        page: "{{title}}, page {{page}}",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} in Japanese",
            withTags: "Japanese words with {{query}}",
            forWritten: "Japanese words for {{query}}: {{list}}",
            meaning: "{{word}} meaning",
            meaningOf: "{{word}} meaning: {{meaning}}",
            queryMeaning: "{{query}} meaning: {{word}}",
            queryMeaningOf: "{{query}} meaning: {{word}}, {{meaning}}",
            translation: "{{query}} in Japanese: {{word}}",
            description: "{{name}}: {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}}: {{text}}",
            leadLatin: '"{{query}}" in Japanese: {{text}}',
            fallback: 'Japanese words for "{{query}}" in the Jotoba dictionary.',
        },
        facts: {
            common: "Common word.",
            commonJlpt: "Common word, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "{{kanji}} kanji: {{meaning}}, readings and stroke order",
            plain: "{{kanji}} kanji: meaning, readings, stroke order",
            item: "{{kanji}}: {{meanings}}",
            description: "{{kanji}}. Readings, radicals, parts and stroke order animations.",
        },
        sentences: {
            title: "Japanese example sentences with {{query}}",
            titleCount: {
                one: "{{count}} Japanese example sentence with {{query}}",
                other: "{{count}} Japanese example sentences with {{query}}",
            },
            description: "Japanese example sentences with {{query}}, with furigana and translations.",
        },
        names: {
            title: "{{query}}: Japanese names and readings",
            titleReading: "{{query}} ({{reading}}): Japanese names and readings",
            description: "Japanese names for {{query}}: readings, transcriptions and kinds of names.",
        },
    },

    // Heading of the results; <query></query> is replaced by the searched text
    heading: {
        page: "page {{page}} of {{pages}}",
        // Read before the page info (the visible dot comes from CSS)
        separator: ", ",
        words: {
            some: "Words for <query></query>",
            count: { one: "{{count}} word for <query></query>", other: "{{count}} words for <query></query>" },
            none: "No words for <query></query>",
        },
        kanji: {
            some: "Kanji for <query></query>",
            count: { one: "{{count}} kanji for <query></query>", other: "{{count}} kanji for <query></query>" },
            none: "No kanji for <query></query>",
            someIn: "Kanji in <query></query>",
            countIn: { one: "{{count}} kanji in <query></query>", other: "{{count}} kanji in <query></query>" },
            noneIn: "No kanji in <query></query>",
            single: "<query></query> kanji: {{meaning}}",
            singlePlain: "<query></query> kanji",
        },
        sentences: {
            some: "Sentences for <query></query>",
            count: { one: "{{count}} sentence for <query></query>", other: "{{count}} sentences for <query></query>" },
            none: "No sentences for <query></query>",
        },
        names: {
            some: "Names for <query></query>",
            count: { one: "{{count}} name for <query></query>", other: "{{count}} names for <query></query>" },
            none: "No names for <query></query>",
        },
    },

    announce: {
        otherWord: "Results for {{query}}",
        results: {
            one: "{{count}} result, page {{page}} of {{pages}}",
            other: "{{count}} results, page {{page}} of {{pages}}",
        },
        none: "No results",
        reloaded: "Reloaded online. {{results}}",
    },

    invalidSplits: "Custom word boundaries were invalid and have been reset",

    languageNotice: {
        text: "Results in {{language}} (from the link)",
        switch: "Switch to {{language}}",
    },

    status: {
        loading: "Loading results…",
        jokes: {
            countingWords: "Counting words",
            drawingKanji: "Drawing kanji",
            infinity: "Counting to infinity",
            features: "Planning new features",
            sandwich: "Why don't you order a sandwich?",
            countToTen: "Just count to 10",
            wifiCable: "Finding the Wifi cable",
            pnp: "Proving P=NP",
            misspelled: "Adding randomly mispeled words",
            elevatorMusic: "TODO: Insert elevator music",
            premium: "Our premium plan is faster",
            ones: "Keeping all the 1's and removing all the 0's",
            trapped: "Help, I'm trapped in a loader!",
            messages: "Adding non helpful loading messages",
            yoroshiku: "Translating 「よろしく」",
        },
    },

    message: {
        offline: {
            title: "You are offline",
            text: "Check your connection and try again once you are back online.",
        },
        invalid: {
            title: "Joto can't handle this search",
            text: "Try a shorter or different search.",
        },
        error: {
            title: "It looks like Joto is hard at work right now.",
            text: "Please try again in a moment.",
        },
        empty: {
            title: "We couldn't find what you were looking for.",
            text: "Check the spelling, try a shorter search, or switch the search type.",
            otherResults: "But there are results in other categories:",
        },
        number: {
            title: "Learn more about this number",
            text: "Look it up in the other categories:",
            empty: "There are no dictionary entries for this number.",
        },
    },

    easterEgg: {
        title: "Gotcha!",
        highlight: "We knew you'd be curious about our name!",
        text: '<strong>Jotoba</strong> is not a real word. It is derived from <kotoba></kotoba> where the "K" was replaced by a "J" which stands for "Japanese".',
    },

    help: {
        otherCategory: "Search for “{{query}}” in another category:",
        otherResults: "Results in other categories",
        otherLanguages: "There are results in other languages:",
        // Read after the visible "> 100" / "< 5"
        count: {
            exact: { one: ", {{count}} result", other: ", {{count}} results" },
            moreThan: { one: ", more than {{count}} result", other: ", more than {{count}} results" },
            fewerThan: { one: ", fewer than {{count}} result", other: ", fewer than {{count}} results" },
        },
    },

    sentences: {
        hidden: "Translations are hidden",
        showAll: "Show all translations",
        hideAll: "Hide all translations",
    },

    words: {
        customSplits: "Custom word boundaries",
        resetSplits: "Reset",
        grammar: "Grammar",
        inflection: "Inflection",
        inflectionText: {
            one: "We have detected the following inflection for <query></query> (<lexeme></lexeme>):",
            other: "We have detected the following inflections for <query></query> (<lexeme></lexeme>):",
        },
        number: "Number",
        numberText: "<query></query> is <value></value>",
    },

    reader: {
        title: "Sentence reader",
        words: "Sentence words",
        selected: "Selected: <word></word>",
        wrap: "Wrap",
        oneLine: "One line",
        edit: "Edit word boundaries",
    },

    splitEditor: {
        title: "Edit word boundaries",
        help: "Tap between two characters to split or join words.",
        boundaries: "Word boundaries",
        boundary: "Boundary between {{first}} and {{second}}",
        split: "Split after {{character}}",
        joined: "Joined {{first}} and {{second}}",
        save: "Save",
        reset: "Reset to automatic",
    },

    report: {
        question: "Not the order you expected?",
        title: "Report ranking issue",
        sending: "Sending…",
        send: "Send report",
        alreadyReported: "You already reported this search. Send another report only if something else is wrong.",
        context: {
            search: "Search",
            page: "Page",
            word: "Word",
            position: "Position {{position}}",
        },
        reason: {
            label: "What's wrong?",
            singleWord: "To report a single word, use the menu next to it.",
        },
        reasons: {
            listMissing: "A word I expected is missing or too far down",
            listOther: "Something else about the order",
            wordHigher: "This word should be further up",
            wordLower: "This word should be further down",
            wordNotRelevant: "This word doesn't belong to this search",
            wordOther: "Something else",
        },
        expected: {
            label: "Expected word",
            subLabel: "Kanji, kana or romaji",
        },
        comment: {
            label: "Comment",
            optional: "Comment (optional)",
            placeholder: "What would you expect instead?",
            charsLeft: { one: "{{count}} character left", other: "{{count}} characters left" },
        },
        errors: {
            reason: "Choose what's wrong",
            expected: "Enter the word you expected",
            comment: "Describe what's wrong",
        },
        privacy:
            "No account needed. The report contains this search, the order of the results on this page and your answers, and is only read to improve the search. Please don't include personal data. <link>Privacy policy</link>",
        privacyLocal:
            "The report contains this search, the order of the results on this page and your answers, and is only read to improve the search. Please don't include personal data. <link>Privacy policy</link>",
        outcome: {
            rateLimited: "Too many reports in a short time. Try again in a few minutes.",
            rejected: "Couldn't send the report. Check your answers and try again.",
            queueFull: "Too many reports are waiting to be sent. Try again later.",
            notStored: "This device can't store the report, so it can't be sent later. Try again once you're online.",
            sent: "Thanks, your report was sent",
            queued: "Report saved on this device. It will be sent once reporting is available.",
            offline: "You are offline. The report will be sent once you are back online.",
            duplicate: "You already sent this report",
        },
    },

    details: {
        tabs: {
            word: "Word",
            kanji: "Kanji",
            sentences: "Sentences",
            collocations: "Collocations",
            conjugations: "Conjugations",
            words: "Words",
        },
        wordSections: "Word sections",
        sentenceSections: "Sentence sections",
        editInJmdict: "Edit in JMDict",
        conjugationsOf: "Conjugations of {{word}}",
        showTranslation: "Show translation",
        hideTranslation: "Hide translation",
        analyze: "Analyze words",
        notFoundTitle: "Not found",
        notFound: {
            word: "This word doesn't exist",
            sentence: "This sentence doesn't exist",
        },
        notFoundText: "The link may be broken or the entry was removed.",
        loadFailed: {
            word: "Couldn't load the word",
            sentence: "Couldn't load the sentence",
        },
        /** The app's offline dictionary has no answer for this page */
        offline: {
            word: "This word isn't in the offline dictionary",
            sentence: "This sentence needs internet",
            text: "It loads once you're back online.",
            back: "Go back",
        },
        sentences: {
            title: "Sentences with {{word}}",
            failed: "Couldn't load the sentences.",
            offline: "Example sentences need internet. They load once you're back online.",
            none: "No example sentences for {{word}}.",
            all: "All sentences with {{word}} ({{pages}} pages)",
            open: "Open in the sentence search",
        },
        meta: {
            wordTitle: "{{name}} meaning: {{meaning}}",
            conjugationTitle: "{{name}} conjugation: all forms",
            conjugationDescription:
                'How to conjugate {{name}}, "{{meaning}}": polite, negative, past, te-form, potential, passive, causative and more.',
            conjugationDescriptionPlain:
                "How to conjugate {{name}}: polite, negative, past, te-form, potential, passive, causative and more.",
            sentenceTitle: '{{text}} – "{{translation}}"',
            sentenceDescription: '{{text}} "{{translation}}" – the words and kanji of this Japanese sentence.',
            sentenceDescriptionPlain: "{{text}} – the words and kanji of this Japanese sentence.",
        },
    },

    // One sentence about a word below its head; <name></name> is the word with reading and romaji
    summary: {
        sentence: "<name></name> is {{kind}} meaning “{{gloss}}”.",
        sentenceJlpt: "<name></name> is {{kind}} meaning “{{gloss}}” (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "a Japanese noun",
            nounAndSuruVerb: "a Japanese noun and suru verb",
            adverb: "a Japanese adverb",
            auxiliary: "a Japanese auxiliary",
            auxiliaryAdjective: "a Japanese auxiliary adjective",
            auxiliaryVerb: "a Japanese auxiliary verb",
            conjunction: "a Japanese conjunction",
            counter: "a Japanese counter",
            expression: "a Japanese expression",
            interjection: "a Japanese interjection",
            numeral: "a Japanese numeral",
            pronoun: "a Japanese pronoun",
            prefix: "a Japanese prefix",
            suffix: "a Japanese suffix",
            particle: "a Japanese particle",
            iAdjective: "a Japanese i-adjective",
            naAdjective: "a Japanese na-adjective",
            noAdjective: "a Japanese no-adjective",
            preNounAdjectival: "a Japanese pre-noun adjectival",
            adjective: "a Japanese adjective",
            ichidanVerb: "a Japanese Ichidan verb",
            godanVerb: "a Japanese Godan verb",
            yodanVerb: "a Japanese Yodan verb",
            nidanVerb: "a Japanese Nidan verb",
            suruVerb: "a Japanese suru verb",
            irregularVerb: "a Japanese irregular verb",
            verb: "a Japanese verb",
            word: "a Japanese word",
        },
        commonKinds: {
            noun: "a common Japanese noun",
            nounAndSuruVerb: "a common Japanese noun and suru verb",
            adverb: "a common Japanese adverb",
            auxiliary: "a common Japanese auxiliary",
            auxiliaryAdjective: "a common Japanese auxiliary adjective",
            auxiliaryVerb: "a common Japanese auxiliary verb",
            conjunction: "a common Japanese conjunction",
            counter: "a common Japanese counter",
            expression: "a common Japanese expression",
            interjection: "a common Japanese interjection",
            numeral: "a common Japanese numeral",
            pronoun: "a common Japanese pronoun",
            prefix: "a common Japanese prefix",
            suffix: "a common Japanese suffix",
            particle: "a common Japanese particle",
            iAdjective: "a common Japanese i-adjective",
            naAdjective: "a common Japanese na-adjective",
            noAdjective: "a common Japanese no-adjective",
            preNounAdjectival: "a common Japanese pre-noun adjectival",
            adjective: "a common Japanese adjective",
            ichidanVerb: "a common Japanese Ichidan verb",
            godanVerb: "a common Japanese Godan verb",
            yodanVerb: "a common Japanese Yodan verb",
            nidanVerb: "a common Japanese Nidan verb",
            suruVerb: "a common Japanese suru verb",
            irregularVerb: "a common Japanese irregular verb",
            verb: "a common Japanese verb",
            word: "a common Japanese word",
        },
    },
} as const satisfies Dict;
