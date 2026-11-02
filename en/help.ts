import type { Dict } from "../types";

export default {
    title: "Help",
    description:
        "How to search Jotoba in English, Japanese or romaji, read whole sentences, filter results with hashtags like #n5 and use keyboard shortcuts.",
    intro: "Jotoba is a dictionary for Japanese words, kanji, example sentences and names. This page walks you through what you can do with it, from your first search to the shortcuts that save time later. The examples are links, so you can try each one right away.",
    contents: "On this page",
    nav: {
        search: "Search",
        reading: "Reading",
        hashtags: "Hashtags",
        results: "Results",
        shortcuts: "Shortcuts",
        bookmarks: "Bookmarks and settings",
        flashcards: "Flashcards",
        offline: "Offline",
        moreHelp: "More help",
    },
    tour: {
        title: "Prefer to be shown around?",
        text: "The tour points out the search bar, the search types, the radical picker and the menu on the page you are on, and lets you set your languages on the way.",
        button: "Take the tour",
    },
    topic: {
        try: "Try",
    },
    queryLink: {
        searchFor: "Search for ",
        in: " in ",
        types: {
            kanji: "Kanji",
            sentences: "Sentences",
            names: "Names",
        },
    },
    search: {
        title: "Start with a search",
        lead: "Type what you know into the search bar. It does not have to be Japanese.",
        directions: {
            title: "Search in any direction",
            text: "Search in English, in Japanese (kanji or kana) or in romaji, the Latin spelling of Japanese. If you choose another search language in the <link>settings</link>, for example German, you can search in that language too.",
        },
        types: {
            title: "Choose what to search",
            text: "The menu next to the search field switches between words, kanji, example sentences and names. Changing it runs your search again. If another type has results for your query, the results page points you there.",
        },
        wildcards: {
            title: "Fill gaps with wildcards",
            text: "Only know part of a word? In a Japanese search, * stands for any number of characters: <ja>*車</ja> finds words that end with <ja>車</ja>, <ja>車*</ja> words that start with it and <ja>*車*</ja> every word that contains it. A ? stands for exactly one character, so <ja>宇宙?行士</ja> finds <ja>宇宙飛行士</ja>.",
            boundaries:
                "If the sentence reader splits such a search into several words, join them with Edit word boundaries. Wildcards work with kanji and kana, not with English or romaji.",
        },
        suggestions: {
            title: "Pick from suggestions",
            text: "Suggestions appear as you type. Select one to search for it. When you type #, the suggestions switch to hashtags, which are explained <hashtags>further down</hashtags>. With a keyboard you can move through them and open a search in a new tab, see <shortcuts>keyboard shortcuts</shortcuts>.",
        },
    },
    reading: {
        title: "Read Japanese text",
        lead: "Found a sentence you cannot read yet? Jotoba can split it into words, recognize conjugated forms and help you find kanji you do not know.",
        sentences: {
            title: "Read whole sentences",
            text: "Search a full Japanese sentence and Jotoba splits it into words. Select a word to see its dictionary form and how it was conjugated.",
            boundaries:
                "If a sentence is split in the wrong place, use the pen button to set the word boundaries yourself. They are saved in the link, so you can share the sentence the way you split it.",
        },
        conjugations: {
            title: "Look up conjugated words",
            text: "You do not need the dictionary form. Search a word the way you found it and Jotoba shows the base word together with the forms it detected, for example negative and past.",
        },
        numbers: {
            title: "Read numbers",
            text: "Search a number written in Japanese to see its value in digits.",
        },
        radicals: {
            title: "Find kanji by their parts",
            text: "Cannot read a kanji? Open <ja>部</ja> next to the search field and pick the radicals you recognize, the parts a kanji is built from. The tabs sort them by stroke count. Each radical you add narrows down the matching kanji, and the search suggestions follow your selection too.",
            search: "Not sure which radical you are looking at? Type into the search field inside the picker: a kanji shows its radicals, kana show the radicals of matching words, and English or romaji find radicals by name.",
        },
    },
    hashtags: {
        title: "Narrow down with hashtags",
        lead: "Hashtags start with # and go into the search bar, before or after your search term. They switch the search type or filter the results, for example to one JLPT level or to verbs only.",
        how: {
            title: "How hashtags work",
            suggest: "Type # and the search bar suggests hashtags, so you do not have to remember them.",
            case: "Upper and lower case do not matter: #N5 and #n5 are the same.",
            combine: "You can combine them: #n5 #verb finds N5 verbs.",
            withoutTerm: "Filters work without a search term: #n5 on its own lists all N5 words.",
        },
        types: {
            title: "Switch the search type",
            text: "#word, #kanji, #sentence and #name override the menu next to the search field. They are handy when you would rather keep typing, or in a link you send to someone.",
        },
        hidden: {
            title: "Practice with hidden translations",
            text: "Add #hidden to a sentence search and the translations stay hidden until you reveal them, one sentence at a time. To hide them in every sentence search, turn on <link>{{setting}}</link> in the settings.",
        },
        jlpt: {
            title: "Filter by JLPT level",
            text: "#n5 to #n1 limit words, kanji and sentences to one level of the Japanese-Language Proficiency Test, with N5 as the easiest. #jlpt5 to #jlpt1 work as well.",
        },
        all: {
            title: "All filter hashtags",
            text: "Most filters apply to word searches. Select a hashtag to list every word that has it.",
        },
        list: "{{group}} hashtags",
        showAll: {
            one: "Show all {{count}} subjects",
            other: "Show all {{count}} subjects",
        },
        showFewer: "Show fewer subjects",
        groups: {
            partOfSpeech: {
                title: "Part of speech",
                description: "What kind of word it is.",
            },
            verbs: {
                title: "Verbs and spelling",
                description: "Verb classes, suru verbs and how a word is usually written.",
            },
            register: {
                title: "Register and tone",
                description: "How polite, casual or sensitive a word is, and who tends to use it.",
            },
            old: {
                title: "Old and rare words",
                description: "Words that are dated, historical or seldom used today.",
            },
            sayings: {
                title: "Sayings and word types",
                description: "Proverbs, idioms, four-kanji compounds, sound words and abbreviations.",
            },
            names: {
                title: "Names and things",
                description:
                    "Proper nouns in the word dictionary, such as places, companies or works. To look up a person's name, use the names search.",
            },
            subjects: {
                title: "Subjects",
                description: "Words from one field, such as medicine, law or sumo.",
            },
            kanji: {
                title: "Kanji",
                description: "Kokuji are kanji that were created in Japan.",
            },
        },
    },
    results: {
        title: "Get more out of results",
        lead: "Every entry holds more than its first line.",
        labels: {
            title: "What the labels mean",
            common: "A common word",
            jlpt: "The JLPT level, from N5 (easiest) to N1",
            sentenceFrom: "A sentence from {{source}}",
            ownSentence: "A sentence added by the Jotoba team",
            sources: "Where the words, sentences and audio come from is listed on the <link>About page</link>.",
        },
        words: {
            title: "Words",
            text: "Play the audio, check the pitch accent and other spellings, and select a kanji tile to open that kanji. Under a meaning you can expand an example sentence.",
            menu: "The ⋮ menu next to a word has the rest: the conjugation table, collocations, the transitive or intransitive partner, sentences that use the word, an audio download, Edit in JMdict, Copy link and the details page.",
            furigana:
                "Double-click the furigana above a word to copy its reading. {{setting}} in the <link>settings</link> turns this on or off.",
        },
        kanji: {
            title: "Kanji",
            text: "Play the stroke order, step through it or change its speed. Select the large kanji to see the parts it is made of. Compounds are grouped by reading, and selecting a reading lists the words that use it. The radical, the parts and similar kanji are links, so you can keep exploring. Readings in Chinese, Korean and Vietnamese can be shown as well.",
        },
        sentences: {
            title: "Sentences",
            text: "The label shows where a sentence comes from. Its menu opens the sentence in the sentence reader to look up its words, opens it on Tatoeba or copies a link to it.",
        },
        names: {
            title: "Names",
            text: "Name results show the reading, a transcription and, where known, the gender and origin of the name.",
        },
        sharing: {
            title: "Details pages and links",
            pages: "Words and sentences have their own details page, with tabs for kanji, sentences, collocations and conjugations, and a share button.",
            links: "Search links keep the search type, the page, the word you selected in the sentence reader and your word boundaries. With {{setting}} turned on in the settings, people who open your link see the same search language you used.",
        },
    },
    shortcuts: {
        title: "Work faster with the keyboard",
        lead: "On a computer you can use most of Jotoba without the mouse. Single-key shortcuts do not work while you are typing in a text field.",
        off: "Keyboard shortcuts are turned off in this browser. The standard keys still work.",
        turnOn: "Turn them on",
        anywhere: "Anywhere",
        results: "On results pages",
        searchBar: "In the search bar",
        playAudio: "Play the first audio on the page",
        pages: "Go to page 1 to 9",
        change: "You can change these shortcuts or turn them off in <link>{{page}}</link>. Changes apply to this browser only.",
        standard: {
            title: "Standard keys",
            text: "These keys follow common keyboard conventions, so they work like on other sites and can't be changed.",
        },
        list: {
            off: "Off",
            or: "or",
            to: "to",
        },
    },
    bookmarks: {
        title: "Save words and adjust Jotoba",
        lead: "Two places in the menu make Jotoba fit the way you study.",
        bookmarks: {
            title: "Bookmarks",
            text: "Save words and sentences to your own lists and add notes to them. Without an account they stay in this browser, with an account they are synced to every device you sign in on. Use the bookmark button on a details page and find your lists under <link>{{menu}}</link> in the menu.",
            textLocal:
                "Save words and sentences to your own lists and add notes to them. They stay in this browser. Use the bookmark button on a details page and find your lists under <link>{{menu}}</link> in the menu.",
        },
        settings: {
            title: "Settings",
            intro: "A few options worth knowing about:",
            language:
                "<link>{{setting}}</link>: search and read meanings in another language, such as German. {{alwaysEnglish}} adds the English meanings as well.",
            hideTranslation: "<link>{{setting}}</link>: read every example sentence before you see its translation.",
            kanji: "<link>{{setting}}</link>: which parts of words and kanji are shown, such as readings, pitch accent or the stroke order, and how the stroke order animation plays.",
            theme: "<link>{{setting}}</link>: follow your system, or always light or dark.",
            languageInLinks: "<link>{{setting}}</link>: links you share open in the same search language.",
        },
    },
    flashcards: {
        title: "Study with flashcards",
        lead: "Any bookmark list can become a deck. Jotoba plans the cards with FSRS, so each one comes back shortly before you would forget it.",
        start: {
            title: "Starting a list",
            text: "Open a list and choose Start learning. You set how many new cards a day it adds. Progress belongs to that list only: a word in two lists is studied in each.",
            kinds: "A word has up to three kinds of cards: meaning, reading and recall. The next kind only starts once you've known the one before on an earlier day.",
        },
        rating: {
            title: "Rating a card",
            text: "Think of the answer, then show it. Choose Again if you didn't know it, otherwise Got it. Be honest: the time on the buttons shows when the card comes back. Cards you forget come back a few cards later in the same round. A new word you already knew gets Knew it already.",
            fine: "<link>{{setting}}</link> adds Hard and Easy. Hard still counts as known.",
        },
        stages: {
            title: "Stages and memory",
            text: "Each word is in the stage of its weakest kind you've started, and New until you start one: Learning while its memory span is under a week, Familiar up to two months, Mastered after that.",
            memory: "Memory: how likely you are to know the card right now. It sinks a little every day until you review it.",
            span: "Memory span: how many days it takes until you'd only know the card 9 times out of 10. Every review you get right makes it longer.",
            retention:
                "<link>{{setting}}</link>: cards come back when your memory of them drops to this value. Higher means more reviews.",
        },
        fewer: {
            title: "Why fewer cards come up",
            intro: "Sometimes a list shows fewer due or new cards than you'd expect. The overview names the reasons:",
            resting:
                "Each word comes up once a study day at most. Its other due cards rest until tomorrow. A study day starts at 4 am.",
            waiting: "Reading and recall cards wait until you've known the kind before on an earlier day.",
            limit: "New cards stop at the daily limit of the list.",
            backlog:
                "If more reviews are waiting than two rounds take, new cards pause until you've caught up. The cards you most likely still know come first. You can still let new cards come along for a day.",
        },
        practice: {
            title: "When nothing is due",
            ahead: "Review ahead takes cards that aren't due yet, the shakiest first, but none you've already rated today. It counts like a review: known cards come back a bit later, forgotten ones sooner.",
            browse: "Just browse flips through the cards without rating them. It changes nothing.",
        },
        tricky: {
            title: "Tricky words",
            text: "A word you've forgotten three times (you can change this in the learning settings) is marked as tricky. After eight times the word list suggests writing your own memory aid into the note, which often helps more than more rounds.",
            actions:
                "In the details of a word you can pause it, so it stays out of rounds, or reset it, so it starts over as a new card. Its history stays.",
        },
    },
    offline: {
        title: "Search without internet",
        lead: "The app can keep the dictionary on your device, so you can look up words on the train, abroad or anywhere without a connection.",
        download: {
            title: "Download the dictionary",
            text: "Download it once under <link>Offline dictionary</link> in the menu. You see its size before you start, and over mobile data the app asks first. Nothing downloads by itself.",
        },
        works: {
            title: "What works offline",
            intro: "Once it's on your device, these work without a connection:",
            words: "Searching words, with suggestions as you type",
            details: "Word details, without sentence search and recordings",
            kanji: "Kanji, the radical picker and stroke order",
            voice: "<link>{{setting}}</link>: where there's no recording, your device's Japanese voice reads words and sentences aloud.",
        },
        needs: {
            title: "What needs internet",
            intro: "Some things only work online:",
            sentencesNames: "Sentence search and name search",
            recordings: "Audio recordings",
            reader: "Splitting whole sentences into words. Offline, search one word at a time.",
            query: "Wildcards (* and ?), hashtags and quotes in a search",
        },
        now: {
            title: "When you're offline",
            chip: "Without a connection, Offline appears at the top of the screen. Tap it to see what works right now.",
            results:
                "Results then come from your device and are marked as offline results. Their order can differ from online, and spelling mistakes aren't corrected.",
            english: "For now, offline meanings are in English only.",
        },
        updates: {
            title: "Updates and storage",
            text: "The app never updates the dictionary by itself. When new data is available, the start page and the offline dictionary page offer it, and you decide when to download it.",
            manage: "Under <link>Offline dictionary</link> in the menu you can also check for updates, verify that the data is complete or delete it to free up space.",
        },
    },
    moreHelp: {
        title: "Get more help",
        lead: "Have a question this page does not answer, or something does not work as expected?",
        ask: "Ask on <discord>Discord</discord> or <reddit>Reddit</reddit>. The <trello>roadmap on Trello</trello> shows what we are working on. If a dictionary entry itself is wrong, use Edit in JMdict in the ⋮ menu of the word.",
        tour: "You can start the tour again from {{menu}} in the menu. Jotoba is also available as an <app>Android app</app>.",
    },
} as const satisfies Dict;
