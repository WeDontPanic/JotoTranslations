import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "À propos",
    description:
        "Qui fait Jotoba et d’où viennent ses données de dictionnaire, ses phrases d’exemple, son audio et ses ordres des traits.",
    heading: "À propos de Jotoba",
    intro: "Jotoba est un dictionnaire japonais gratuit pour les mots, les kanji, les phrases d’exemple et les noms. Il repose sur des ressources que de nombreuses personnes partagent gratuitement. Cette page les remercie, ainsi que les personnes derrière Jotoba.",
    team: {
        title: "Qui fait Jotoba",
        roles: {
            backend: "Backend",
            frontend: "Frontend",
        },
    },
    jotoKun: "Joto-kun, notre tanuki, a été dessiné par un bon ami à nous, un vrai magicien du design.",
    sources: {
        title: "Sources de données",
        intro: "Merci à toutes les personnes qui créent et partagent ces ressources. Chacune est utilisée selon sa propre licence. Les étiquettes indiquent comment une source est signalée dans les résultats de recherche.",
        license: "Licence : <link>{{name}}</link>",
        dictionary: {
            title: "Mots, kanji et noms",
            text: "Les données des mots, des kanji et des noms proviennent de <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> et <jmnedict>JMnedict</jmnedict>. Ces fichiers sont la propriété de l’<edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Phrases d’exemple",
            tatoeba:
                "Phrases issues de <tatoeba>Tatoeba</tatoeba>, d’après le corpus Tanaka du professeur Yasuhito Tanaka. Les phrases d’exemple de la recherche de mots proviennent elles aussi du corpus Tanaka.",
            kevin: "Phrases fournies directement par l’auteur de <kevin>Kevin Goes to Japan</kevin>.",
            own: "Phrases ajoutées par l’équipe de Jotoba.",
        },
        audio: {
            title: "Audio",
            tofugu: "Audio de <wanikani>WaniKani</wanikani>, le site d’apprentissage des kanji et du vocabulaire de <tofugu>Tofugu</tofugu> (<github>fichiers audio sur GitHub</github>).",
            kanjiAlive: "Audio du projet <kanjialive>Kanji alive</kanjialive> (<github>fichiers audio sur GitHub</github>).",
        },
        strokeOrder: {
            title: "Ordre des traits des kanji",
            text: "Les données d’ordre des traits proviennent de <kanjivg>KanjiVG</kanjivg>, © 2009–2026 Ulrich Apel. Nous les convertissons en SVG avec une <fork>version modifiée</fork> de <original>kanjivg2svg</original> de Kim Ahlström, sous la même licence.",
        },
        jlpt: {
            title: "Niveaux JLPT",
            text: "Les niveaux JLPT s’appuient sur les <link>ressources de Jonathan Waller</link>.",
        },
        furigana: {
            title: "Furigana",
            text: "Les furigana des mots et des noms proviennent du projet <link>JmdictFurigana</link>, sous la même licence que JMdict.",
        },
    },
    closing: "Les logiciels et les polices utilisés par Jotoba sont listés dans <link>Licences open source</link>.",
} satisfies PartialDict<typeof en>;
