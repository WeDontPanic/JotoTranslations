import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "O nas",
    description: "Kdo ustvarja Jotobo in od kod prihajajo slovarski podatki, primeri stavkov, zvok in vrstni red potez.",
    heading: "O Jotobi",
    intro: "Jotoba je brezplačen japonski slovar besed, kandžijev, primerov stavkov in imen. Temelji na virih, ki jih mnogi ljudje brezplačno delijo z drugimi. Ta stran se zahvaljuje njim in ljudem, ki stojijo za Jotobo.",
    team: {
        title: "Kdo ustvarja Jotobo",
        roles: {
            backend: "Zaledje",
            frontend: "Uporabniški vmesnik",
        },
    },
    jotoKun: "Joto-kuna, našega tanukija, je narisala naša dobra prijateljica, ki je pri oblikovanju prava čarovnica.",
    sources: {
        title: "Viri podatkov",
        intro: "Hvala vsem, ki te vire ustvarjajo in delijo. Vsak se uporablja pod svojo licenco. Oznake kažejo, kako je vir označen v rezultatih iskanja.",
        license: "Licenca: <link>{{name}}</link>",
        dictionary: {
            title: "Besede, kandži in imena",
            text: "Podatki o besedah, kandžijih in imenih prihajajo iz <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> in <jmnedict>JMnedict</jmnedict>. Te datoteke so last skupine <edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Primeri stavkov",
            tatoeba:
                "Stavki iz projekta <tatoeba>Tatoeba</tatoeba>, ki temelji na korpusu Tanaka prof. Jasuhita Tanake. Tudi primeri stavkov pri iskanju besed so iz korpusa Tanaka.",
            kevin: "Stavki, ki nam jih je neposredno priskrbel avtor projekta <kevin>Kevin Goes to Japan</kevin>.",
            own: "Stavki, ki jih je dodala ekipa Jotobe.",
        },
        audio: {
            title: "Zvok",
            tofugu: "Zvok s strani <wanikani>WaniKani</wanikani> za učenje kandžijev in besedišča podjetja <tofugu>Tofugu</tofugu> (<github>zvočne datoteke na GitHubu</github>).",
            kanjiAlive:
                "Zvok iz projekta <kanjialive>Kanji alive</kanjialive> (<github>zvočne datoteke na GitHubu</github>).",
        },
        strokeOrder: {
            title: "Vrstni red potez kandžijev",
            text: "Podatki o vrstnem redu potez prihajajo iz projekta <kanjivg>KanjiVG</kanjivg>, © 2009–2023 Ulrich Apel. V SVG jih pretvarjamo s <fork>prilagojeno različico</fork> orodja <original>kanjivg2svg</original> avtorja Kima Ahlströma, ki uporablja isto licenco.",
        },
        jlpt: {
            title: "Stopnje JLPT",
            text: "Stopnje JLPT temeljijo na <link>virih Jonathana Wallerja</link>.",
        },
        furigana: {
            title: "Furigana",
            text: "Furigana za besede in imena prihaja iz projekta <link>JmdictFurigana</link> pod isto licenco kot JMdict.",
        },
    },
    closing: "Programska oprema in pisave, ki jih uporablja Jotoba, so navedene pod <link>Odprtokodne licence</link>.",
} satisfies PartialDict<typeof en>;
