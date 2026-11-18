import type { Dict } from "../types";

// Short explanations of the dictionary tags, opened by tapping a tag. Each one has a `text` (one or two sentences,
// Japanese inside <jp></jp>) and, where the app shows a Japanese example with a meaning, its `example` translation.
// The keys are values of the dictionary data, spelled exactly as they come (typos included)

export default {
    /** Link to a search for all words with the tag */
    searchTag: "Show all words tagged #{{tag}}",
    /** Label of the te-form line of a Godan verb, e.g. "Te-form: 書く → 書いて" */
    teForm: "Te-form",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "An adverb that can take と, mostly sound or manner words. With と it describes how something is done.",
            example: "to laugh happily",
        },
        Auxilary: {
            text: "A word that attaches to another word and adds grammar, such as tense, politeness or negation. It can't stand alone.",
        },
        AuxilaryAdj: {
            text: "An ending that attaches to a verb or adjective and conjugates like an i-adjective.",
            example: "want to eat",
        },
        AuxilaryVerb: {
            text: "A verb that attaches to another verb, usually its te-form, and adds a meaning such as trying, finishing or doing in advance.",
            example: "to try eating",
        },
        Counter: {
            text: "Comes after a number and counts a kind of thing, like flat objects, machines or people. Japanese needs one for most counting.",
            example: "three sheets of paper",
        },
        Expr: {
            text: "A fixed phrase of several words that is learned as a whole.",
            example: "thank you very much",
        },
        Particle: {
            text: "A short word after a noun or phrase that marks its role in the sentence, such as subject, object, place or direction.",
            example: "go to school",
        },
        Prefix: {
            text: "Stands in front of another word and changes or adds to its meaning. It isn't used on its own.",
            example: "money (polite)",
        },
        Suffix: {
            text: "Attaches to the end of another word, for example a name or a noun. It isn't used on its own.",
            example: "Mr./Ms. Tanaka",
        },
    },

    noun: {
        Adverbial: {
            text: "A noun that can also be used as an adverb without a particle.",
            example: "I'm busy now.",
        },
        Temporal: {
            text: "A noun for a point in time. It is often used without a particle, like an adverb.",
            example: "I'll go tomorrow.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "A noun or verb that stands right before a noun to describe it, without な or の.",
        },
        Keiyoushi: {
            text: "Ends in <jp>い</jp> and conjugates itself: drop the <jp>い</jp> for endings like <jp>くない</jp> and <jp>かった</jp>. It can stand right before a noun.",
        },
        KeiyoushiYoiIi: {
            text: "The adjective <jp>いい</jp> (good). It conjugates from its older form <jp>よい</jp>: <jp>よくない</jp>, <jp>よかった</jp>, never <jp>いくない</jp>.",
        },
        Ku: {
            text: "A classical adjective of the ku type: <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. Today it lives on in set phrases and literary style.",
        },
        Na: {
            text: "Needs <jp>な</jp> before a noun and conjugates like a noun with <jp>だ</jp>. Some end in <jp>い</jp> anyway, like <jp>きれい</jp>.",
            example: "a quiet town",
        },
        Nari: {
            text: "The classical, formal form of a na-adjective. It ends in <jp>なる</jp> before nouns and is found in literary style.",
        },
        No: {
            text: "A noun that describes another noun when <jp>の</jp> follows it.",
            example: "a sick person",
        },
        PreNoun: {
            text: "Only stands directly before a noun and never conjugates.",
            example: "this book",
        },
        Shiku: {
            text: "A classical adjective of the shiku type: <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. Today it lives on in set phrases and literary style.",
        },
        Taru: {
            text: "A literary adjective: <jp>たる</jp> before a noun, <jp>と</jp> before a verb.",
        },
    },

    verb: {
        Transitive: {
            text: "Acts on a direct object, usually marked with <jp>を</jp>. Many have an intransitive partner without one.",
            example: "to open the window",
        },
        Intransitive: {
            text: "Takes no direct object: the subject does it or it happens to the subject, usually marked with <jp>が</jp>.",
            example: "the window opens",
        },
        Ichidan: {
            text: "Ends in -iru or -eru and keeps its stem: drop <jp>る</jp> and add the ending. Not every -iru/-eru verb is one: <jp>帰る</jp> is a Godan verb.",
        },
        IchidanZuru: {
            text: "A literary verb in <jp>ずる</jp>. It conjugates like the Ichidan verb in <jp>じる</jp> that replaced it.",
        },
        IchidanKureru: {
            text: "The verb <jp>くれる</jp> (to give to me or us). Its command form is <jp>くれ</jp>, not <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "The irregular verb <jp>来る</jp> (to come). Its stem changes: <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "The last kana changes through its row before endings: <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "A classical verb type. Most of these verbs are Godan verbs in modern Japanese.",
        },
        Nidan: {
            text: "A classical verb type with two stems (upper or lower). Most of these verbs are Ichidan verbs in modern Japanese.",
        },
        Irregular: {
            text: "Conjugates irregularly; check the conjugation table.",
        },
    },

    /** Notes of a Godan verb by its ending, below the Godan text */
    godanEnding: {
        tte: {
            text: "Verbs in <jp>う</jp>, <jp>つ</jp> and <jp>る</jp> form the te- and ta-form with <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "Verbs in <jp>む</jp>, <jp>ぶ</jp> and <jp>ぬ</jp> form the te- and ta-form with <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "Verbs in <jp>く</jp> form the te- and ta-form with <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "Verbs in <jp>ぐ</jp> form the te- and ta-form with <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "Verbs in <jp>す</jp> form the te- and ta-form with <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Careful: it ends in <jp>る</jp> like an Ichidan verb, but conjugates as Godan: <jp>ない</jp> comes after <jp>ら</jp>.",
        },
        Aru: {
            text: "Honorific verbs like <jp>いらっしゃる</jp> and <jp>なさる</jp>: the masu-form and the command end in <jp>い</jp> instead of <jp>り</jp>.",
        },
        USpecial: {
            text: "Verbs like <jp>問う</jp> and <jp>請う</jp> form the te-form with <jp>うて</jp>, not <jp>って</jp>.",
        },
        Uru: {
            text: "The literary verb <jp>得る</jp> read <jp>うる</jp>; outside of the dictionary form it conjugates like <jp>える</jp>.",
        },
        RuIrreg: {
            text: "The verb <jp>ある</jp> (to exist): its negative is <jp>ない</jp>, not <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "<jp>行く</jp> is the one verb in <jp>く</jp> with the te-form <jp>行って</jp> instead of <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "A classical verb in <jp>ぬ</jp>, like <jp>死ぬ</jp> in old texts. Today only a few set phrases use it.",
        },
        Ru: {
            text: "A classical irregular verb like <jp>あり</jp> (to be) or <jp>をり</jp>, whose plain form ends in <jp>り</jp>. Today it is only found in literary style.",
        },
        NounOrAuxSuru: {
            text: "A noun that becomes a verb with <jp>する</jp>.",
        },
        Suru: {
            text: "The verb <jp>する</jp> (to do) or a compound with it. It is irregular: <jp>しない</jp>, <jp>します</jp>, <jp>できる</jp> as potential.",
        },
        SuruSpecial: {
            text: "A compound with <jp>する</jp> after one kanji. It partly conjugates like a Godan verb in <jp>す</jp>.",
        },
        Su: {
            text: "The old form <jp>す</jp> of <jp>する</jp>. Today it is only found in literary style.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "A shortened form of a longer word. Japanese often clips loanwords to their first kana.",
            example: "personal computer",
        },
        Archaism: {
            text: "An old word or use. You'll find it in classical texts, historical drama or set phrases, but not in today's speech.",
        },
        ChildrensLanguage: {
            text: "Used by small children or when talking to them.",
            example: "doggy",
        },
        Colloquialism: {
            text: "Casual, spoken language. Fine among friends; in writing or polite speech another word fits better.",
        },
        DatedTerm: {
            text: "Sounds old-fashioned. Older people may still use it, younger ones rarely.",
        },
        Derogatory: {
            text: "Puts the person or thing down. It can offend.",
        },
        Euphemistic: {
            text: "A softer, indirect way to say something unpleasant or delicate.",
        },
        FamiliarLanguage: {
            text: "For family, friends and people of lower status. It can sound rude to anyone else.",
        },
        FemaleTermOrLanguage: {
            text: "Traditionally used by women. It is less common today and may sound soft or old-fashioned.",
        },
        HonorificLanguage: {
            text: "Sonkeigo: raises the person who acts, usually the listener or someone of higher status. Never use it for yourself.",
            example: "the teacher is coming",
        },
        HumbleLanguage: {
            text: "Kenjōgo: lowers yourself or your group to show respect to the other person. Use it only for your own actions.",
            example: "I'll go (humble)",
        },
        IdiomaticExpression: {
            text: "Its meaning can't be worked out from its words; learn it as a whole.",
        },
        InternetSlang: {
            text: "Slang from the internet and social media. It goes out of fashion fast.",
        },
        JocularHumorousTerm: {
            text: "Used jokingly or playfully, not in a serious context.",
        },
        LiteraryOrFormalTerm: {
            text: "Found in writing and formal speech, for example news, speeches or literature. It sounds stiff in conversation.",
        },
        MaleTermOrLanguage: {
            text: "Traditionally used by men. Coming from others it can sound rough or deliberate.",
        },
        MangaSlang: {
            text: "Mostly found in manga and anime, rarely in real life.",
        },
        ObscureTerm: {
            text: "Hardly known, even to many native speakers.",
        },
        ObsoleteTerm: {
            text: "No longer in use. You'll find it in old texts only.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Imitates a sound (giongo) or shows a state or feeling (gitaigo). Japanese uses many of them, often with <jp>と</jp> or <jp>する</jp>.",
            example: "to sparkle",
        },
        PoeticalTerm: {
            text: "Used in poems and song lyrics, rarely in conversation.",
        },
        PoliteLanguage: {
            text: "Teineigo: the polite style with <jp>です</jp> and <jp>ます</jp>, used with people you don't know well.",
            example: "there is, it is (polite)",
        },
        Proverb: {
            text: "A saying that passes on a piece of wisdom; it is usually quoted as a whole.",
        },
        Rare: {
            text: "Rarely used. Another word is more common for this meaning.",
        },
        RudeOrXRatedTerm: {
            text: "Rude or sexual. Avoid it unless you know the situation well.",
        },
        Sensitive: {
            text: "Touches a sensitive topic. Use it with care, or it can hurt people.",
        },
        Slang: {
            text: "Casual words of a group or generation. Fine among friends, out of place in formal situations.",
        },
        UsuallyWrittenInKana: {
            text: "Has a kanji spelling, but is normally written in kana. Learn the kana form.",
        },
        VulgarExpressionOrWord: {
            text: "Coarse or vulgar. It can offend.",
        },
        Yojijukugo: {
            text: "A compound of four kanji, often from Chinese classics. Many are set phrases with a moral or a lesson.",
            example: "once-in-a-lifetime encounter",
        },
    },

    dialect: {
        Brazilian: {
            text: "Used by the Japanese community in Brazil and mixed with Portuguese. Standard Japanese may use another word.",
        },
        Hokkaido: {
            text: "Spoken in Hokkaidō, the northernmost main island. Standard Japanese may use another word or form.",
        },
        Kansai: {
            text: "Spoken in the Kansai region around Osaka, Kyoto and Kobe, and often heard in comedy. Standard Japanese may use another word or form.",
            example: "no good (standard: だめ)",
        },
        Kantou: {
            text: "Spoken in the Kantō region around Tokyo, but not part of standard Japanese. Standard Japanese may use another word or form.",
        },
        Kyoto: {
            text: "Spoken in Kyoto, known for its soft and indirect style. Standard Japanese may use another word or form.",
        },
        Kyuushuu: {
            text: "Spoken on Kyūshū, the southern main island. Standard Japanese may use another word or form.",
        },
        Nagano: {
            text: "Spoken in Nagano Prefecture in central Japan. Standard Japanese may use another word or form.",
        },
        Osaka: {
            text: "Spoken in Osaka, the best known Kansai dialect. Standard Japanese may use another word or form.",
            example: "thank you (Osaka)",
        },
        Ryuukyuu: {
            text: "From the Ryūkyū languages of Okinawa and the islands around it. Standard Japanese may use another word.",
        },
        Touhoku: {
            text: "Spoken in Tōhoku, the north-east of Honshū. Standard Japanese may use another word or form.",
        },
        Tosa: {
            text: "Spoken in Kōchi Prefecture (old Tosa) on Shikoku. Standard Japanese may use another word or form.",
        },
        Tsugaru: {
            text: "Spoken in the west of Aomori Prefecture, known as hard to understand. Standard Japanese may use another word or form.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Says that something doesn't happen or isn't so: <jp>ない</jp> in plain speech, <jp>ません</jp> when polite.",
            example: "don't eat",
        },
        Polite: {
            text: "The masu-form: verb stem + <jp>ます</jp>, the polite style for people you don't know well.",
            example: "eat (polite)",
        },
        Present: {
            text: "The non-past: habits, facts and the future. Japanese has no separate future tense.",
        },
        Past: {
            text: "Something that happened or was so: <jp>た</jp> in plain speech, <jp>ました</jp> when polite.",
            example: "ate",
        },
        TeForm: {
            text: 'Links verbs and clauses ("and"), and is the base of many patterns like requests with <jp>ください</jp>.',
            example: "please eat",
        },
        Potential: {
            text: "Says that someone can do something. What can be done is often marked with <jp>が</jp>.",
            example: "can eat",
        },
        Passive: {
            text: "Says that something is done to the subject, often in an unwelcome way. The doer is marked with <jp>に</jp>.",
            example: "is eaten",
        },
        Causative: {
            text: "Says that someone makes or lets someone else do something.",
            example: "make/let eat",
        },
        PotentialOrPassive: {
            text: "Ichidan verbs use <jp>られる</jp> for both the potential and the passive; the context tells which one.",
            example: "can eat / is eaten",
        },
        CausativePassive: {
            text: "Says that someone is made to do something, usually against their will.",
            example: "is made to eat",
        },
        Imperative: {
            text: "A blunt command. It sounds rude in conversation; you'll hear it in shouts, signs or from superiors.",
            example: "Eat!",
        },
        Tai: {
            text: "Verb stem + <jp>たい</jp>: says what the speaker wants to do. It conjugates like an i-adjective.",
            example: "want to eat",
        },
        TeIru: {
            text: "Te-form + <jp>いる</jp>: an action in progress, or a state after a change. Casual speech often drops the <jp>い</jp>.",
            example: "is eating",
        },
        TeAru: {
            text: "Te-form + <jp>ある</jp>: something was done on purpose and the result is still there.",
            example: "the window has been opened",
        },
        TeMiru: {
            text: "Te-form + <jp>みる</jp>: to try something to see how it is.",
            example: "try eating",
        },
        TeOku: {
            text: "Te-form + <jp>おく</jp>: to do something in advance or leave it that way.",
            example: "eat beforehand",
        },
        Tara: {
            text: '"If" or "when": what follows happens after this. It is the most widely used conditional.',
            example: "when/if I eat",
        },
        Tari: {
            text: 'Lists actions as examples ("things like … and …"), usually closed with <jp>する</jp>.',
            example: "eat, and so on",
        },
        Ba: {
            text: 'A conditional: "if this happens, then …". It often stresses the condition itself.',
            example: "if I eat",
        },
        Shimau: {
            text: "Te-form + <jp>しまう</jp>: to finish doing something, or to do it by accident and regret it.",
            example: "end up eating",
        },
        Chau: {
            text: "Casual short form of te-form + <jp>しまう</jp>, mostly spoken.",
            example: "end up eating",
        },
        Naide: {
            text: '"Without doing", or with <jp>ください</jp> a polite "please don\'t".',
            example: "please don't eat",
        },
        Volitional: {
            text: '"Let\'s …" or "I\'ll …": suggests doing something together or expresses a decision.',
            example: "let's eat",
        },
        Nasai: {
            text: "Verb stem + <jp>なさい</jp>: a firm but not rude command, as used by parents and teachers.",
            example: "Eat!",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "One of the frequent words of Japanese, found in common word lists. A good one to learn early.",
        },
        wasei: {
            text: "Wasei-eigo: made in Japan from foreign words. It looks like a loanword, but people abroad may not know it.",
            example: 'office worker ("salary man")',
        },
    },
} as const satisfies Dict;
