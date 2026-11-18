import type en from "../en/topics";
import type { PartialDict } from "../types";

export default {
    title: "Thèmes",
    intro: "Des listes de mots à parcourir : le vocabulaire de chaque niveau du JLPT, des expressions, des onomatopées et les trois registres du japonais poli.",
    metaTitle: "Listes de vocabulaire japonais par thème",
    metaDescription: "Parcourez le vocabulaire japonais par niveau JLPT, ainsi que les yojijukugo (expressions en quatre kanji), proverbes, expressions idiomatiques, onomatopées et le keigo.",
    back: "Thèmes",
    groups: {
        jlpt: "Vocabulaire du JLPT",
        sayings: "Expressions et onomatopées",
        keigo: "Keigo (formes de politesse)",
    },
    openSearch: "Ouvrir dans la recherche",
    exampleLabel: "Exemple",
    more: "Autres thèmes",
    topWords: "Seuls les 1 000 mots les plus courants sont affichés.",
    notFound: "Ce thème n’existe pas.",
    allTopics: "Tous les thèmes",
    showTopic: "Tous les mots : {{name}}",
    items: {
        "jlpt-n5": {
            name: "Vocabulaire JLPT N5",
            short: "Les premiers mots : les bases du quotidien.",
            intro: "Le vocabulaire du niveau le plus facile du test d’aptitude en japonais (JLPT) : chiffres, famille, nourriture et verbes de la vie courante. Un bon point de départ une fois les hiragana et les katakana maîtrisés.",
        },
        "jlpt-n4": {
            name: "Vocabulaire JLPT N4",
            short: "Des mots de base pour converser simplement.",
            intro: "Le vocabulaire du deuxième niveau du JLPT. Avec ces mots, vous pouvez parler de votre journée, de vos projets et de vos sentiments en phrases simples.",
        },
        "jlpt-n3": {
            name: "Vocabulaire JLPT N3",
            short: "Le japonais du quotidien, entre les bases et l’aisance.",
            intro: "Le vocabulaire du niveau intermédiaire du JLPT. Il vous permet de suivre, avec un peu d’aide, des textes et des conversations de tous les jours à vitesse naturelle.",
        },
        "jlpt-n2": {
            name: "Vocabulaire JLPT N2",
            short: "Des mots pour l’actualité, le travail et les textes longs.",
            intro: "Le vocabulaire de l’avant-dernier niveau du JLPT. Il couvre l’actualité, le monde du travail et des textes plus longs sur des sujets généraux.",
        },
        "jlpt-n1": {
            name: "Vocabulaire JLPT N1",
            short: "Vocabulaire avancé et soutenu.",
            intro: "Le vocabulaire du niveau le plus élevé du JLPT : des mots abstraits, soutenus et littéraires pour aborder des textes complexes.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Expressions en quatre kanji.",
            intro: "Des composés de quatre kanji, souvent issus des classiques chinois. En quatre caractères, ils condensent une leçon ou une image ; on les retrouve dans les discours, à l’école et dans les jeux télévisés.",
            example: "rencontre unique dans une vie",
        },
        onomatopoeia: {
            name: "Onomatopées",
            short: "Des mots qui imitent les sons, les états et les sensations.",
            intro: "Le japonais compte des milliers de mots qui imitent des sons (giongo) ou décrivent l’aspect et la sensation des choses (gitaigo). Omniprésents à l’oral comme dans les mangas, ils s’emploient souvent avec と ou する.",
            example: "scintillant",
        },
        proverbs: {
            name: "Proverbes",
            short: "Des dictons qui transmettent une sagesse.",
            intro: "Les kotowaza sont des dictons porteurs d’une leçon, généralement cités en entier. Beaucoup ont un équivalent en français, mais avec des images bien japonaises.",
            example: "Même les singes tombent des arbres.",
        },
        idioms: {
            name: "Expressions idiomatiques",
            short: "Des tournures dont le sens ne se déduit pas des mots.",
            intro: "Les kan’yōku sont des locutions figées, souvent construites autour de parties du corps ou d’animaux, dont le sens ne se devine pas mot à mot. Apprenez-les en bloc.",
            example: "si occupé qu’on accepterait l’aide d’un chat",
        },
        sonkeigo: {
            name: "Sonkeigo (langage honorifique)",
            short: "Des mots qui élèvent la personne qui agit.",
            intro: "Le langage honorifique élève la personne qui agit, en général votre interlocuteur ou quelqu’un de rang supérieur. Ne l’employez jamais pour vous-même.",
            example: "venir, aller, être (honorifique)",
        },
        kenjougo: {
            name: "Kenjōgo (langage humble)",
            short: "Des mots qui vous abaissent par respect.",
            intro: "Le langage humble abaisse votre personne ou votre groupe pour marquer le respect envers l’autre. Réservez-le à vos propres actions.",
            example: "aller, venir (humble)",
        },
        teineigo: {
            name: "Teineigo (langage poli)",
            short: "Le registre poli pour les personnes que vous connaissez peu.",
            intro: "Des mots et des formes polis, comme です et ます, pour s’adresser aux inconnus, aux clients et aux collègues. Le choix sûr en cas de doute.",
            example: "il y a, c’est (poli)",
        },
    },
} satisfies PartialDict<typeof en>;
