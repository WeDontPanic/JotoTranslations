import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "Over ons",
    description: "Wie Jotoba maakt en waar de woordenboekgegevens, voorbeeldzinnen, audio en streekvolgordes vandaan komen.",
    heading: "Over Jotoba",
    intro: "Jotoba is een gratis Japans woordenboek voor woorden, kanji, voorbeeldzinnen en namen. Het is gebouwd op bronnen die veel mensen gratis delen. Op deze pagina noemen we die bronnen en de mensen achter Jotoba.",
    team: {
        title: "Wie Jotoba maakt",
        roles: {
            backend: "Backend",
            frontend: "Frontend",
        },
    },
    jotoKun:
        "Joto-kun, onze tanuki, is getekend door een goede vriendin van ons, een echte tovenares als het om design gaat.",
    sources: {
        title: "Gegevensbronnen",
        intro: "Dank aan iedereen die deze bronnen maakt en deelt. Elke bron wordt gebruikt onder haar eigen licentie. De labels laten zien hoe een bron in de zoekresultaten wordt aangeduid.",
        license: "Licentie: <link>{{name}}</link>",
        dictionary: {
            title: "Woorden, kanji en namen",
            text: "De gegevens over woorden, kanji en namen komen uit <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> en <jmnedict>JMnedict</jmnedict>. Deze bestanden zijn eigendom van de <edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Voorbeeldzinnen",
            tatoeba:
                "Zinnen van <tatoeba>Tatoeba</tatoeba>, gebaseerd op het Tanaka-corpus van prof. Yasuhito Tanaka. Ook de voorbeeldzinnen in de woordzoekfunctie komen uit het Tanaka-corpus.",
            kevin: "Zinnen die de auteur van <kevin>Kevin Goes to Japan</kevin> ons rechtstreeks heeft gegeven.",
            own: "Zinnen die het Jotoba-team heeft toegevoegd.",
        },
        audio: {
            title: "Audio",
            tofugu: "Audio van <wanikani>WaniKani</wanikani>, de site van <tofugu>Tofugu</tofugu> om kanji en woordenschat te leren (<github>audiobestanden op GitHub</github>).",
            kanjiAlive:
                "Audio uit het project <kanjialive>Kanji alive</kanjialive> (<github>audiobestanden op GitHub</github>).",
        },
        strokeOrder: {
            title: "Streekvolgorde van kanji",
            text: "De gegevens over de streekvolgorde komen van <kanjivg>KanjiVG</kanjivg>, © 2009–2023 Ulrich Apel. We zetten ze om naar SVG met een <fork>aangepaste versie</fork> van <original>kanjivg2svg</original> van Kim Ahlström, die onder dezelfde licentie valt.",
        },
        jlpt: {
            title: "JLPT-niveaus",
            text: "De JLPT-niveaus zijn gebaseerd op de <link>bronnen van Jonathan Waller</link>.",
        },
        furigana: {
            title: "Furigana",
            text: "De furigana voor woorden en namen komen uit het project <link>JmdictFurigana</link>, onder dezelfde licentie als JMdict.",
        },
    },
    closing: "Software en lettertypen die Jotoba gebruikt, vind je onder <link>Opensourcelicenties</link>.",
} satisfies PartialDict<typeof en>;
