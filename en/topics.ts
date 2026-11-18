import type { Dict } from "../types";

// Topic pages: word lists of the dictionary to browse, one hashtag of the dictionary data each (/topics/<slug>)

export default {
    title: "Topics",
    intro: "Word lists to browse: the vocabulary of each JLPT level, sayings and sound words, and the three forms of polite Japanese.",
    /** Title in the browser tab and for search engines */
    metaTitle: "Japanese word lists by topic",
    metaDescription:
        "Browse Japanese vocabulary by JLPT level, four-character idioms, proverbs, idioms, onomatopoeia and keigo.",
    back: "Topics",
    groups: {
        jlpt: "JLPT vocabulary",
        sayings: "Sayings and sound words",
        keigo: "Keigo (polite language)",
    },
    openSearch: "Open as search",
    /** Label above the example of a topic */
    exampleLabel: "Example",
    more: "More topics",
    /** The list is cut by the dictionary search */
    topWords: "The 1000 most common words are listed.",
    notFound: "There's no such topic.",
    allTopics: "All topics",
    /** Link at the end of a tag explanation */
    showTopic: "All words: {{name}}",
    items: {
        "jlpt-n5": {
            name: "JLPT N5 vocabulary",
            short: "The first words: everyday basics.",
            intro: "Words of the easiest level of the Japanese-Language Proficiency Test: numbers, family, food and the verbs of everyday life. A good start once you know hiragana and katakana.",
        },
        "jlpt-n4": {
            name: "JLPT N4 vocabulary",
            short: "Basic words for simple conversations.",
            intro: "Words of the second level of the Japanese-Language Proficiency Test. They let you talk about your day, plans and feelings in simple sentences.",
        },
        "jlpt-n3": {
            name: "JLPT N3 vocabulary",
            short: "Everyday Japanese between the basics and fluency.",
            intro: "Words of the middle level of the Japanese-Language Proficiency Test. With them you can follow everyday texts and conversations at natural speed, with some help.",
        },
        "jlpt-n2": {
            name: "JLPT N2 vocabulary",
            short: "Words for news, work and longer texts.",
            intro: "Words of the second-highest level of the Japanese-Language Proficiency Test. They cover news, work and longer texts on general topics.",
        },
        "jlpt-n1": {
            name: "JLPT N1 vocabulary",
            short: "Advanced and formal vocabulary.",
            intro: "Words of the highest level of the Japanese-Language Proficiency Test: abstract, formal and literary vocabulary for complex texts.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Idioms of four kanji.",
            intro: "Compounds of four kanji, many of them from Chinese classics. They pack a lesson or a picture into four characters and are popular in speeches, school and quiz shows.",
            example: "once-in-a-lifetime encounter",
        },
        onomatopoeia: {
            name: "Onomatopoeia",
            short: "Words that imitate sounds, states and feelings.",
            intro: "Japanese has thousands of sound words (giongo) and words that show how something looks or feels (gitaigo). They are everywhere in speech and manga, often with と or する.",
            example: "sparkling",
        },
        proverbs: {
            name: "Proverbs",
            short: "Sayings that pass on a piece of wisdom.",
            intro: "Kotowaza are sayings with a lesson, usually quoted as a whole. Many have a counterpart in other languages, but with Japanese pictures.",
            example: "Even monkeys fall from trees.",
        },
        idioms: {
            name: "Idioms",
            short: "Phrases whose meaning isn't in their words.",
            intro: "Kan'yōku are fixed phrases, often with body parts or animals, whose meaning can't be worked out word by word. Learn them as a whole.",
            example: "so busy you'd take help from a cat",
        },
        sonkeigo: {
            name: "Sonkeigo (honorific)",
            short: "Words that raise the person who acts.",
            intro: "Honorific words raise the person who acts, usually the listener or someone of higher status. Never use them for yourself.",
            example: "to come, to go, to be (honorific)",
        },
        kenjougo: {
            name: "Kenjōgo (humble)",
            short: "Words that lower yourself out of respect.",
            intro: "Humble words lower yourself or your group to show respect to the other person. Use them only for your own actions.",
            example: "to go, to come (humble)",
        },
        teineigo: {
            name: "Teineigo (polite)",
            short: "The polite style for people you don't know well.",
            intro: "Polite words and forms, like です and ます, for strangers, customers and colleagues. The safe choice when you aren't sure.",
            example: "there is, it is (polite)",
        },
    },
} as const satisfies Dict;
