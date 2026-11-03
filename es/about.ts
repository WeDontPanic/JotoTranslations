import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "Acerca de",
    description:
        "Quién hace Jotoba y de dónde vienen sus datos de diccionario, oraciones de ejemplo, audios y órdenes de trazos.",
    heading: "Acerca de Jotoba",
    intro: "Jotoba es un diccionario de japonés gratuito para palabras, kanji, oraciones de ejemplo y nombres. Se basa en recursos que muchas personas comparten de forma gratuita. Esta página les da el crédito que merecen, a ellos y a las personas que hay detrás de Jotoba.",
    team: {
        title: "Quién hace Jotoba",
        roles: {
            backend: "Backend",
            frontend: "Frontend",
        },
    },
    jotoKun: "A Joto-kun, nuestro tanuki, lo dibujó una buena amiga nuestra que es una auténtica maga del diseño.",
    sources: {
        title: "Fuentes de datos",
        intro: "Gracias a todas las personas que crean y comparten estos recursos. Cada uno se usa bajo su propia licencia. Las etiquetas muestran cómo se marca una fuente en los resultados de búsqueda.",
        license: "Licencia: <link>{{name}}</link>",
        dictionary: {
            title: "Palabras, kanji y nombres",
            text: "Los datos de palabras, kanji y nombres proceden de <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> y <jmnedict>JMnedict</jmnedict>. Estos archivos son propiedad del <edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Oraciones de ejemplo",
            tatoeba:
                "Oraciones de <tatoeba>Tatoeba</tatoeba>, basadas en el Corpus Tanaka del profesor Yasuhito Tanaka. Las oraciones de ejemplo de la búsqueda de palabras también proceden del Corpus Tanaka.",
            kevin: "Oraciones cedidas directamente por el autor de <kevin>Kevin Goes to Japan</kevin>.",
            own: "Oraciones añadidas por el equipo de Jotoba.",
        },
        audio: {
            title: "Audio",
            tofugu: "Audio de <wanikani>WaniKani</wanikani>, el sitio de <tofugu>Tofugu</tofugu> para aprender kanji y vocabulario (<github>archivos de audio en GitHub</github>).",
            kanjiAlive:
                "Audio del proyecto <kanjialive>Kanji alive</kanjialive> (<github>archivos de audio en GitHub</github>).",
        },
        strokeOrder: {
            title: "Orden de trazos de los kanji",
            text: "Los datos del orden de trazos proceden de <kanjivg>KanjiVG</kanjivg>, © 2009–2026 Ulrich Apel. Los convertimos a SVG con una <fork>versión modificada</fork> de <original>kanjivg2svg</original> de Kim Ahlström, que usa la misma licencia.",
        },
        jlpt: {
            title: "Niveles del JLPT",
            text: "Los niveles del JLPT se basan en los <link>recursos de Jonathan Waller</link>.",
        },
        furigana: {
            title: "Furigana",
            text: "El furigana de palabras y nombres procede del proyecto <link>JmdictFurigana</link>, con la misma licencia que JMdict.",
        },
    },
    closing: "El software y las fuentes tipográficas que usa Jotoba aparecen en <link>Licencias de código abierto</link>.",
} satisfies PartialDict<typeof en>;
