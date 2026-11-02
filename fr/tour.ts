import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Chercher dans les deux sens",
            description:
                "Tapez en anglais, en japonais, en kana ou en rōmaji. Des suggestions apparaissent pendant la saisie, et des #tags comme #n5 affinent les résultats.",
            descriptionVoice:
                "Tapez en anglais, en japonais, en kana ou en rōmaji, ou touchez le micro pour chercher à la voix. Des suggestions apparaissent pendant la saisie, et des #tags comme #n5 affinent les résultats.",
            shortcut: "Aller à la barre de recherche",
        },
        type: {
            title: "Choisir quoi chercher",
            description:
                "Le menu à côté du champ de recherche permet de passer des mots aux kanji, aux phrases d’exemple et aux noms.",
            shortcut: "Changer sur les pages de résultats",
        },
        radicals: {
            title: "Trouver des kanji par leurs composants",
            description:
                "Vous ne savez pas lire un kanji ? Ouvrez 部, choisissez les radicaux que vous reconnaissez et Jotoba liste les kanji correspondants.",
        },
        reader: {
            title: "Lire des phrases entières",
            description:
                "Cherchez une phrase japonaise complète et Jotoba la découpe en mots. Choisissez un mot pour voir sa forme du dictionnaire et la façon dont il a été conjugué.",
        },
        wordMenu: {
            title: "Plus d’infos sur chaque résultat",
            description:
                "Ouvrez ⋮ à côté d’un mot pour ses conjugaisons, des phrases d’exemple, un lien à partager et sa page de détails, où vous pouvez l’ajouter aux favoris.",
        },
        settings: {
            title: "Paramètres et aide",
            description:
                "Le menu contient vos favoris, les paramètres, les actualités et la page d’aide, où vous pouvez découvrir chaque fonction et relancer cette visite. Essayez les paramètres de langue ici même, les changements s’appliquent immédiatement.",
            descriptionSearchOnly:
                "Le menu contient vos favoris, les paramètres, les actualités et la page d’aide, où vous pouvez découvrir chaque fonction et relancer cette visite. Essayez la langue de recherche ici même, les changements s’appliquent immédiatement.",
        },
    },
    languages: {
        group: "Langues",
    },
    progress: "{{current}} sur {{total}}",
    announce: "Étape {{current}} sur {{total}}. {{title}}. {{description}}",
    close: "Fermer la visite",
    back: "Retour",
    next: "Suivant",
    done: "Terminé",
    preview: {
        types: {
            words: "Mots",
            kanji: "Kanji",
            sentences: "Phrases",
            names: "Noms",
        },
        gloss: "manger",
        form: "passé, poli",
        wordMenu: {
            conjugations: "Conjugaisons",
            sentenceSearch: "Recherche de phrases",
            copyLink: "Copier le lien",
            details: "Détails",
        },
    },
} satisfies PartialDict<typeof en>;
