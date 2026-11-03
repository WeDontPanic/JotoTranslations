import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "Om oss",
    description: "Vilka som gör Jotoba och varifrån ordboksdata, exempelmeningar, ljud och streckordningar kommer.",
    heading: "Om Jotoba",
    intro: "Jotoba är en gratis japansk ordbok för ord, kanji, exempelmeningar och namn. Den bygger på resurser som många människor delar gratis. Den här sidan tackar dem och personerna bakom Jotoba.",
    team: {
        title: "Vilka som gör Jotoba",
        roles: {
            backend: "Backend",
            frontend: "Frontend",
        },
    },
    jotoKun: "Joto-kun, vår tanuki, ritades av en god vän till oss som är en riktig trollkarl när det gäller design.",
    sources: {
        title: "Datakällor",
        intro: "Tack till alla som skapar och delar de här resurserna. Var och en används under sin egen licens. Etiketterna visar hur en källa märks i sökresultaten.",
        license: "Licens: <link>{{name}}</link>",
        dictionary: {
            title: "Ord, kanji och namn",
            text: "Data om ord, kanji och namn kommer från <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> och <jmnedict>JMnedict</jmnedict>. Filerna ägs av <edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Exempelmeningar",
            tatoeba:
                "Meningar från <tatoeba>Tatoeba</tatoeba>, baserade på Tanaka-korpusen av professor Yasuhito Tanaka. Exempelmeningarna i ordsökningen kommer också från Tanaka-korpusen.",
            kevin: "Meningar som har tillhandahållits direkt av författaren till <kevin>Kevin Goes to Japan</kevin>.",
            own: "Meningar som Jotoba-teamet har lagt till.",
        },
        audio: {
            title: "Ljud",
            tofugu: "Ljud från <tofugu>Tofugus</tofugu> webbplats för kanji och ordförråd, <wanikani>WaniKani</wanikani> (<github>ljudfiler på GitHub</github>).",
            kanjiAlive: "Ljud från projektet <kanjialive>Kanji alive</kanjialive> (<github>ljudfiler på GitHub</github>).",
        },
        strokeOrder: {
            title: "Kanjins streckordning",
            text: "Streckordningsdata kommer från <kanjivg>KanjiVG</kanjivg>, © 2009–2026 Ulrich Apel. Vi konverterar dem till SVG med en <fork>modifierad version</fork> av <original>kanjivg2svg</original> av Kim Ahlström, som använder samma licens.",
        },
        jlpt: {
            title: "JLPT-nivåer",
            text: "JLPT-nivåerna bygger på <link>resurserna av Jonathan Waller</link>.",
        },
        furigana: {
            title: "Furigana",
            text: "Furigana för ord och namn kommer från projektet <link>JmdictFurigana</link>, under samma licens som JMdict.",
        },
    },
    closing: "Programvara och typsnitt som Jotoba använder listas under <link>Licenser för öppen källkod</link>.",
} satisfies PartialDict<typeof en>;
