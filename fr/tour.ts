import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Chercher dans les deux sens",
            description:
                "Tapez en anglais, en japonais, en kana ou en rōmaji. Des suggestions apparaissent pendant la saisie, et des #tags comme #n5 affinent les résultats. Essaie avec 猫 (chat).",
            descriptionVoice:
                "Tapez en anglais, en japonais, en kana ou en rōmaji, ou touchez le micro pour chercher à la voix. Des suggestions apparaissent pendant la saisie, et des #tags comme #n5 affinent les résultats. Essaie avec 猫 (chat).",
            shortcut: "Aller à la barre de recherche",
        },
        details: {
            title: "Chaque mot a sa propre page",
            description:
                "Sélectionne un mot pour ouvrir sa page avec tous ses sens, ses kanji, des phrases d’exemple et ses conjugaisons.",
            descriptionStatic:
                "Sélectionne un mot dans les résultats pour ouvrir sa page avec tous ses sens, ses kanji, des phrases d’exemple et ses conjugaisons.",
        },
        bookmark: {
            title: "Garder des mots pour plus tard",
            description:
                "Le bouton favori enregistre un mot dans une liste. ⋮ propose les conjugaisons, des phrases d’exemple et un lien à partager.",
            descriptionMenu:
                "Ouvre ⋮ à côté d’un mot pour l’ajouter aux favoris, voir ses conjugaisons, trouver des phrases d’exemple ou copier un lien.",
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
        type: {
            title: "Choisir quoi chercher",
            description:
                "Le menu à côté du champ de recherche permet de passer des mots aux kanji, aux phrases d’exemple et aux noms. Voici les kanji de 猫.",
            descriptionStatic:
                "Le menu à côté du champ de recherche permet de passer des mots aux kanji, aux phrases d’exemple et aux noms.",
            shortcut: "Changer sur les pages de résultats",
        },
        settings: {
            title: "Favoris, paramètres et aide",
            description:
                "Ouvre le menu pour tes favoris, les paramètres, les actualités et la page d’aide, où tu peux relancer cette visite. Essaie les paramètres de langue ici même, les changements s’appliquent tout de suite.",
            descriptionSearchOnly:
                "Ouvre le menu pour tes favoris, les paramètres, les actualités et la page d’aide, où tu peux relancer cette visite. Essaie la langue de recherche ici même, les changements s’appliquent tout de suite.",
        },
    },
    menuHint: {
        text: "Les mots que tu ajoutes aux favoris se trouvent dans Favoris. Tu peux aussi y réviser chaque liste avec des cartes.",
        done: "Terminé",
    },
    languages: {
        group: "Langues",
    },
    progress: "{{current}} sur {{total}}",
    announce: "Étape {{current}} sur {{total}}. {{title}}. {{description}}",
    announceResumed: "De retour dans la visite. Étape {{current}} sur {{total}}.",
    close: "Fermer la visite",
    back: "Retour",
    next: "Suivant",
    done: "Terminé",
    searchExample: "Chercher {{query}}",
    searching: "Recherche…",
    loading: "Chargement…",
    openMenu: "Ouvrir le menu",
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
            bookmark: "Ajouter aux favoris",
            conjugations: "Conjugaisons",
            sentenceSearch: "Recherche de phrases",
            copyLink: "Copier le lien",
        },
    },
} satisfies PartialDict<typeof en>;
