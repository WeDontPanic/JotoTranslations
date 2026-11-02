import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "О проекте",
    description: "Кто делает Jotoba и откуда берутся словарные данные, примеры предложений, аудио и порядок черт.",
    heading: "О Jotoba",
    intro: "Jotoba — бесплатный японский словарь слов, кандзи, примеров предложений и имён. Он построен на ресурсах, которыми многие люди делятся бесплатно. На этой странице мы благодарим их и рассказываем о тех, кто стоит за Jotoba.",
    team: {
        title: "Кто делает Jotoba",
        roles: {
            backend: "Бэкенд",
            frontend: "Фронтенд",
        },
    },
    jotoKun: "Joto-kun, нашего тануки, нарисовал наш хороший друг — настоящий волшебник в дизайне.",
    sources: {
        title: "Источники данных",
        intro: "Спасибо всем, кто создаёт эти ресурсы и делится ими. Каждый используется по своей лицензии. Метки показывают, как источник отмечен в результатах поиска.",
        license: "Лицензия: <link>{{name}}</link>",
        dictionary: {
            title: "Слова, кандзи и имена",
            text: "Данные о словах, кандзи и именах взяты из <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> и <jmnedict>JMnedict</jmnedict>. Эти файлы принадлежат <edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Примеры предложений",
            tatoeba:
                "Предложения из <tatoeba>Tatoeba</tatoeba> на основе корпуса Танаки (проф. Ясухито Танака). Примеры предложений в поиске слов тоже взяты из корпуса Танаки.",
            kevin: "Предложения, которые нам напрямую предоставил автор <kevin>Kevin Goes to Japan</kevin>.",
            own: "Предложения, добавленные командой Jotoba.",
        },
        audio: {
            title: "Аудио",
            tofugu: "Аудио с сайта <wanikani>WaniKani</wanikani> для изучения кандзи и слов от <tofugu>Tofugu</tofugu> (<github>аудиофайлы на GitHub</github>).",
            kanjiAlive: "Аудио из проекта <kanjialive>Kanji alive</kanjialive> (<github>аудиофайлы на GitHub</github>).",
        },
        strokeOrder: {
            title: "Порядок черт кандзи",
            text: "Данные о порядке черт взяты из <kanjivg>KanjiVG</kanjivg>, © 2009–2023 Ulrich Apel. Мы преобразуем их в SVG с помощью <fork>изменённой версии</fork> <original>kanjivg2svg</original> от Kim Ahlström, которая распространяется по той же лицензии.",
        },
        jlpt: {
            title: "Уровни JLPT",
            text: "Уровни JLPT основаны на <link>материалах Джонатана Уоллера</link>.",
        },
        furigana: {
            title: "Фуригана",
            text: "Фуригана для слов и имён взята из проекта <link>JmdictFurigana</link> и распространяется по той же лицензии, что и JMdict.",
        },
    },
    closing: "Программы и шрифты, которые использует Jotoba, перечислены в разделе <link>Лицензии открытого ПО</link>.",
} satisfies PartialDict<typeof en>;
