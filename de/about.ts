import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "Über uns",
    description: "Wer Jotoba macht und woher Wörterbuchdaten, Beispielsätze, Audio und Strichfolgen stammen.",
    heading: "Über Jotoba",
    intro: "Jotoba ist ein kostenloses Japanisch-Wörterbuch für Wörter, Kanji, Beispielsätze und Namen. Es baut auf Ressourcen auf, die viele Menschen kostenlos teilen. Diese Seite nennt sie und die Menschen hinter Jotoba.",
    team: {
        title: "Wer Jotoba macht",
        roles: {
            backend: "Backend",
            frontend: "Frontend",
        },
    },
    jotoKun: "Joto-kun, unseren Tanuki, hat eine gute Freundin von uns gezeichnet, die beim Design eine wahre Zauberin ist.",
    sources: {
        title: "Datenquellen",
        intro: "Danke an alle, die diese Ressourcen erstellen und teilen. Jede wird unter ihrer eigenen Lizenz genutzt. Die Labels zeigen, wie eine Quelle in den Suchergebnissen markiert ist.",
        license: "Lizenz: <link>{{name}}</link>",
        dictionary: {
            title: "Wörter, Kanji und Namen",
            text: "Die Daten zu Wörtern, Kanji und Namen stammen aus <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> und <jmnedict>JMnedict</jmnedict>. Diese Dateien sind Eigentum der <edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Beispielsätze",
            tatoeba:
                "Sätze von <tatoeba>Tatoeba</tatoeba>, basierend auf dem Tanaka-Korpus von Prof. Yasuhito Tanaka. Auch die Beispielsätze in der Wortsuche stammen aus dem Tanaka-Korpus.",
            kevin: "Sätze, die uns der Autor von <kevin>Kevin Goes to Japan</kevin> direkt zur Verfügung gestellt hat.",
            own: "Sätze, die das Jotoba-Team hinzugefügt hat.",
        },
        audio: {
            title: "Audio",
            tofugu: "Audio von der Kanji- und Vokabel-Lernseite <wanikani>WaniKani</wanikani> von <tofugu>Tofugu</tofugu> (<github>Audiodateien auf GitHub</github>).",
            kanjiAlive:
                "Audio aus dem Projekt <kanjialive>Kanji alive</kanjialive> (<github>Audiodateien auf GitHub</github>).",
        },
        strokeOrder: {
            title: "Strichfolge der Kanji",
            text: "Die Daten zur Strichfolge stammen von <kanjivg>KanjiVG</kanjivg>, © 2009–2026 Ulrich Apel. Wir wandeln sie mit einer <fork>angepassten Version</fork> von <original>kanjivg2svg</original> von Kim Ahlström in SVG um, die unter derselben Lizenz steht.",
        },
        jlpt: {
            title: "JLPT-Niveaus",
            text: "Die JLPT-Niveaus basieren auf den <link>Ressourcen von Jonathan Waller</link>.",
        },
        furigana: {
            title: "Furigana",
            text: "Die Furigana für Wörter und Namen stammen aus dem Projekt <link>JmdictFurigana</link> und stehen unter derselben Lizenz wie JMdict.",
        },
    },
    closing: "Software und Schriften, die Jotoba nutzt, findest du unter <link>Open-Source-Lizenzen</link>.",
} satisfies PartialDict<typeof en>;
