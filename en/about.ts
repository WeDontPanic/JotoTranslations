import type { Dict } from "../types";

export default {
    title: "About",
    description: "Who makes Jotoba and where its dictionary data, example sentences, audio and stroke orders come from.",
    heading: "About Jotoba",
    intro: "Jotoba is a free Japanese dictionary for words, kanji, example sentences and names. It is built on resources that many people share for free. This page credits them and the people behind Jotoba.",
    team: {
        title: "Who makes Jotoba",
        roles: {
            backend: "Backend",
            frontend: "Frontend",
        },
    },
    jotoKun: "Joto-kun, our tanuki, was drawn by a good friend of ours who is a true wizard when it comes to design.",
    sources: {
        title: "Data sources",
        intro: "Thank you to everyone who creates and shares these resources. Each one is used under its own license. The labels show how a source is marked in the search results.",
        license: "License: <link>{{name}}</link>",
        dictionary: {
            title: "Words, kanji and names",
            text: "Word, kanji and name data come from <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> and <jmnedict>JMnedict</jmnedict>. These files are the property of the <edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Example sentences",
            tatoeba:
                "Sentences from <tatoeba>Tatoeba</tatoeba>, based on the Tanaka Corpus by Prof. Yasuhito Tanaka. Example sentences in the word search also come from the Tanaka Corpus.",
            kevin: "Sentences provided directly by the author of <kevin>Kevin Goes to Japan</kevin>.",
            own: "Sentences added by the Jotoba team.",
        },
        audio: {
            title: "Audio",
            tofugu: "Audio from <tofugu>Tofugu</tofugu>'s kanji and vocabulary learning site <wanikani>WaniKani</wanikani> (<github>audio files on GitHub</github>).",
            kanjiAlive:
                "Audio from the <kanjialive>Kanji alive</kanjialive> project (<github>audio files on GitHub</github>).",
        },
        strokeOrder: {
            title: "Kanji stroke order",
            text: "Stroke order data comes from <kanjivg>KanjiVG</kanjivg>, © 2009–2023 Ulrich Apel. We convert it to SVG with a <fork>modified version</fork> of <original>kanjivg2svg</original> by Kim Ahlström, which uses the same license.",
        },
        jlpt: {
            title: "JLPT levels",
            text: "JLPT levels are based on the <link>resources by Jonathan Waller</link>.",
        },
        furigana: {
            title: "Furigana",
            text: "Furigana for words and names come from the <link>JmdictFurigana</link> project, under the same license as JMdict.",
        },
    },
    closing: "Software and fonts used by Jotoba are listed under <link>Open source licenses</link>.",
} as const satisfies Dict;
