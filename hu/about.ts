import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "Rólunk",
    description:
        "Kik készítik a Jotobát, és honnan származnak a szótári adatok, a példamondatok, a hangfelvételek és a vonássorrendek.",
    heading: "A Jotobáról",
    intro: "A Jotoba ingyenes japán szótár szavakhoz, kandzsikhoz, példamondatokhoz és nevekhez. Olyan forrásokra épül, amelyeket sokan ingyen osztanak meg. Ez az oldal őket és a Jotoba mögött álló embereket mutatja be.",
    team: {
        title: "Kik készítik a Jotobát",
        roles: {
            backend: "Backend",
            frontend: "Frontend",
        },
    },
    jotoKun: "Joto-kunt, a tanukinkat egy jó barátunk rajzolta, aki igazi varázsló, ha dizájnról van szó.",
    sources: {
        title: "Adatforrások",
        intro: "Köszönjük mindenkinek, aki ezeket a forrásokat létrehozza és megosztja. Mindegyiket a saját licence szerint használjuk. A címkék azt mutatják, hogyan van jelölve egy forrás a találatok között.",
        license: "Licenc: <link>{{name}}</link>",
        dictionary: {
            title: "Szavak, kandzsik és nevek",
            text: "A szavak, kandzsik és nevek adatai a <jmdict>JMdict</jmdict>, a <kanjidic>KANJIDIC2</kanjidic>, a <kradfile>KRADFILE</kradfile> és a <jmnedict>JMnedict</jmnedict> fájlokból származnak. Ezek a fájlok az <edrdg>Electronic Dictionary Research and Development Group</edrdg> tulajdonában vannak.",
        },
        sentences: {
            title: "Példamondatok",
            tatoeba:
                "Mondatok a <tatoeba>Tatoebáról</tatoeba>, Prof. Yasuhito Tanaka Tanaka-korpusza alapján. A szókeresés példamondatai szintén a Tanaka-korpuszból származnak.",
            kevin: "Mondatok, amelyeket a <kevin>Kevin Goes to Japan</kevin> szerzője közvetlenül bocsátott a rendelkezésünkre.",
            own: "A Jotoba csapata által hozzáadott mondatok.",
        },
        audio: {
            title: "Hangfelvételek",
            tofugu: "Hangfelvételek a <tofugu>Tofugu</tofugu> kandzsi- és szókincstanuló oldaláról, a <wanikani>WaniKaniról</wanikani> (<github>hangfájlok a GitHubon</github>).",
            kanjiAlive:
                "Hangfelvételek a <kanjialive>Kanji alive</kanjialive> projektből (<github>hangfájlok a GitHubon</github>).",
        },
        strokeOrder: {
            title: "A kandzsik vonássorrendje",
            text: "A vonássorrend adatai a <kanjivg>KanjiVG</kanjivg>-ből származnak, © 2009–2026 Ulrich Apel. SVG-vé Kim Ahlström <original>kanjivg2svg</original> eszközének <fork>módosított változatával</fork> alakítjuk őket, amely ugyanazt a licencet használja.",
        },
        jlpt: {
            title: "JLPT-szintek",
            text: "A JLPT-szintek <link>Jonathan Waller forrásain</link> alapulnak.",
        },
        furigana: {
            title: "Furigana",
            text: "A szavak és nevek furiganája a <link>JmdictFurigana</link> projektből származik, a JMdicttel azonos licenc alatt.",
        },
    },
    closing:
        "A Jotoba által használt szoftvereket és betűtípusokat a <link>Nyílt forráskódú licencek</link> oldalon találod.",
} satisfies PartialDict<typeof en>;
