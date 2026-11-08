import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "Réessayer",
    cancel: "Annuler",
    newTab: "(s’ouvre dans un nouvel onglet)",

    meta: {
        page: "{{title}}, page {{page}}",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} en japonais",
            withTags: "Mots japonais avec {{query}}",
            forWritten: "Mots japonais pour {{query}} : {{list}}",
            meaning: "Signification de {{word}}",
            meaningOf: "Signification de {{word}} : {{meaning}}",
            queryMeaning: "Signification de {{query}} : {{word}}",
            queryMeaningOf: "Signification de {{query}} : {{word}}, {{meaning}}",
            translation: "{{query}} en japonais : {{word}}",
            description: "{{name}} : {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}} : {{text}}",
            leadLatin: "« {{query}} » en japonais : {{text}}",
            fallback: "Mots japonais pour « {{query}} » dans le dictionnaire Jotoba.",
        },
        facts: {
            common: "Mot courant.",
            commonJlpt: "Mot courant, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "Kanji {{kanji}} : {{meaning}}, lectures et ordre des traits",
            plain: "Kanji {{kanji}} : sens, lectures, ordre des traits",
            item: "{{kanji}} : {{meanings}}",
            description: "{{kanji}}. Lectures, radicaux, composants et animations de l’ordre des traits.",
        },
        sentences: {
            title: "Phrases d’exemple japonaises avec {{query}}",
            titleCount: {
                one: "{{count}} phrase d’exemple japonaise avec {{query}}",
                many: "{{count}} phrases d’exemple japonaises avec {{query}}",
                other: "{{count}} phrases d’exemple japonaises avec {{query}}",
            },
            description: "Phrases d’exemple japonaises avec {{query}}, avec furigana et traductions.",
        },
        names: {
            title: "{{query}} : noms japonais et lectures",
            titleReading: "{{query}} ({{reading}}) : noms japonais et lectures",
            description: "Noms japonais pour {{query}} : lectures, transcriptions et types de noms.",
        },
    },

    heading: {
        page: "page {{page}} sur {{pages}}",
        separator: ", ",
        words: {
            some: "Mots pour <query></query>",
            count: {
                one: "{{count}} mot pour <query></query>",
                many: "{{count}} mots pour <query></query>",
                other: "{{count}} mots pour <query></query>",
            },
            none: "Aucun mot pour <query></query>",
        },
        kanji: {
            some: "Kanji pour <query></query>",
            count: {
                one: "{{count}} kanji pour <query></query>",
                many: "{{count}} kanji pour <query></query>",
                other: "{{count}} kanji pour <query></query>",
            },
            none: "Aucun kanji pour <query></query>",
            someIn: "Kanji dans <query></query>",
            countIn: {
                one: "{{count}} kanji dans <query></query>",
                many: "{{count}} kanji dans <query></query>",
                other: "{{count}} kanji dans <query></query>",
            },
            noneIn: "Aucun kanji dans <query></query>",
            single: "Kanji <query></query> : {{meaning}}",
            singlePlain: "Kanji <query></query>",
        },
        sentences: {
            some: "Phrases pour <query></query>",
            count: {
                one: "{{count}} phrase pour <query></query>",
                many: "{{count}} phrases pour <query></query>",
                other: "{{count}} phrases pour <query></query>",
            },
            none: "Aucune phrase pour <query></query>",
        },
        names: {
            some: "Noms pour <query></query>",
            count: {
                one: "{{count}} nom pour <query></query>",
                many: "{{count}} noms pour <query></query>",
                other: "{{count}} noms pour <query></query>",
            },
            none: "Aucun nom pour <query></query>",
        },
    },

    announce: {
        otherWord: "Résultats pour {{query}}",
        results: {
            one: "{{count}} résultat, page {{page}} sur {{pages}}",
            many: "{{count}} résultats, page {{page}} sur {{pages}}",
            other: "{{count}} résultats, page {{page}} sur {{pages}}",
        },
        none: "Aucun résultat",
        reloaded: "Rechargé en ligne. {{results}}",
    },

    invalidSplits: "Le découpage personnalisé des mots n’était pas valide et a été réinitialisé",

    languageNotice: {
        text: "Résultats en {{language}} (d’après le lien)",
        switch: "Passer en {{language}}",
    },

    status: {
        loading: "Chargement des résultats…",
        jokes: {
            countingWords: "Comptage des mots",
            drawingKanji: "Dessin des kanji",
            infinity: "Comptage jusqu’à l’infini",
            features: "Planification de nouvelles fonctionnalités",
            sandwich: "Et si vous commandiez un sandwich ?",
            countToTen: "Comptez jusqu’à 10",
            wifiCable: "Recherche du câble Wi-Fi",
            pnp: "Démonstration de P=NP",
            misspelled: "Ajout de mots mal ortografiés au hazard",
            elevatorMusic: "TODO : insérer une musique d’ascenseur",
            premium: "Notre offre premium est plus rapide",
            ones: "On garde tous les 1 et on retire tous les 0",
            trapped: "À l’aide, je suis coincé dans un écran de chargement !",
            messages: "Ajout de messages de chargement inutiles",
            yoroshiku: "Traduction de 「よろしく」",
        },
    },

    message: {
        offline: {
            title: "Vous êtes hors ligne",
            text: "Vérifiez votre connexion et réessayez une fois de nouveau en ligne.",
        },
        invalid: {
            title: "Joto ne sait pas traiter cette recherche",
            text: "Essayez une recherche plus courte ou différente.",
        },
        error: {
            title: "On dirait que Joto est débordé en ce moment.",
            text: "Veuillez réessayer dans un instant.",
        },
        empty: {
            title: "Nous n’avons pas trouvé ce que vous cherchiez.",
            text: "Vérifiez l’orthographe, essayez une recherche plus courte ou changez de type de recherche.",
            otherResults: "Mais il y a des résultats dans d’autres catégories :",
        },
        number: {
            title: "En savoir plus sur ce nombre",
            text: "Cherchez-le dans les autres catégories :",
            empty: "Il n’y a aucune entrée de dictionnaire pour ce nombre.",
        },
    },

    easterEgg: {
        title: "Démasqué !",
        highlight: "On savait que notre nom vous intriguerait !",
        text: "<strong>Jotoba</strong> n’est pas un vrai mot. Il vient de <kotoba></kotoba>, dont le « K » a été remplacé par un « J » comme « japonais ».",
    },

    help: {
        otherCategory: "Rechercher « {{query}} » dans une autre catégorie :",
        otherResults: "Résultats dans d’autres catégories",
        otherLanguages: "Il y a des résultats dans d’autres langues :",
        count: {
            exact: { one: ", {{count}} résultat", many: ", {{count}} résultats", other: ", {{count}} résultats" },
            moreThan: {
                one: ", plus de {{count}} résultat",
                many: ", plus de {{count}} résultats",
                other: ", plus de {{count}} résultats",
            },
            fewerThan: {
                one: ", moins de {{count}} résultat",
                many: ", moins de {{count}} résultats",
                other: ", moins de {{count}} résultats",
            },
        },
    },

    sentences: {
        hidden: "Les traductions sont masquées",
        showAll: "Afficher toutes les traductions",
        hideAll: "Masquer toutes les traductions",
    },

    words: {
        customSplits: "Découpage personnalisé",
        resetSplits: "Réinitialiser",
        grammar: "Grammaire",
        inflection: "Flexion",
        inflectionText: {
            one: "Nous avons détecté la flexion suivante pour <query></query> (<lexeme></lexeme>) :",
            many: "Nous avons détecté les flexions suivantes pour <query></query> (<lexeme></lexeme>) :",
            other: "Nous avons détecté les flexions suivantes pour <query></query> (<lexeme></lexeme>) :",
        },
        number: "Nombre",
        numberText: "<query></query> vaut <value></value>",
    },

    reader: {
        title: "Analyse de phrase",
        words: "Mots de la phrase",
        selected: "Sélectionné : <word></word>",
        wrap: "Retour à la ligne",
        oneLine: "Sur une ligne",
        edit: "Modifier le découpage des mots",
    },

    splitEditor: {
        title: "Modifier le découpage des mots",
        help: "Touchez entre deux caractères pour séparer ou réunir des mots.",
        boundaries: "Découpage des mots",
        boundary: "Limite entre {{first}} et {{second}}",
        split: "Séparé après {{character}}",
        joined: "{{first}} et {{second}} réunis",
        save: "Enregistrer",
        reset: "Découpage automatique",
    },

    report: {
        question: "Ce n’est pas l’ordre attendu ?",
        title: "Signaler un problème de classement",
        sending: "Envoi…",
        send: "Envoyer le signalement",
        alreadyReported:
            "Vous avez déjà signalé cette recherche. N’envoyez un autre signalement que si un autre problème se pose.",
        context: {
            search: "Recherche",
            page: "Page",
            word: "Mot",
            position: "Position {{position}}",
        },
        reason: {
            label: "Quel est le problème ?",
            singleWord: "Pour signaler un seul mot, utilisez le menu à côté de celui-ci.",
        },
        reasons: {
            listMissing: "Un mot attendu manque ou est trop bas",
            listOther: "Autre chose concernant l’ordre",
            wordHigher: "Ce mot devrait être plus haut",
            wordLower: "Ce mot devrait être plus bas",
            wordNotRelevant: "Ce mot n’a rien à voir avec cette recherche",
            wordOther: "Autre chose",
        },
        expected: {
            label: "Mot attendu",
            subLabel: "Kanji, kana ou rōmaji",
        },
        comment: {
            label: "Commentaire",
            optional: "Commentaire (facultatif)",
            placeholder: "À quoi vous attendiez-vous ?",
            charsLeft: {
                one: "{{count}} caractère restant",
                many: "{{count}} caractères restants",
                other: "{{count}} caractères restants",
            },
        },
        errors: {
            reason: "Choisissez le problème",
            expected: "Saisissez le mot attendu",
            comment: "Décrivez le problème",
        },
        privacy:
            "Aucun compte requis. Le signalement contient cette recherche, l’ordre des résultats sur cette page et vos réponses, et n’est lu que pour améliorer la recherche. Merci de ne pas y inclure de données personnelles. <link>Politique de confidentialité</link>",
        privacyLocal:
            "Le signalement contient cette recherche, l’ordre des résultats sur cette page et vos réponses, et n’est lu que pour améliorer la recherche. Merci de ne pas y inclure de données personnelles. <link>Politique de confidentialité</link>",
        outcome: {
            rateLimited: "Trop de signalements en peu de temps. Réessayez dans quelques minutes.",
            rejected: "Impossible d’envoyer le signalement. Vérifiez vos réponses et réessayez.",
            queueFull: "Trop de signalements sont en attente d’envoi. Réessayez plus tard.",
            notStored:
                "Cet appareil ne peut pas enregistrer le signalement, il ne pourra donc pas être envoyé plus tard. Réessayez une fois en ligne.",
            sent: "Merci, votre signalement a été envoyé",
            queued: "Signalement enregistré sur cet appareil. Il sera envoyé dès que les signalements seront disponibles.",
            offline: "Vous êtes hors ligne. Le signalement sera envoyé dès que vous serez de nouveau en ligne.",
            duplicate: "Vous avez déjà envoyé ce signalement",
        },
    },

    details: {
        tabs: {
            word: "Mot",
            kanji: "Kanji",
            sentences: "Phrases",
            collocations: "Collocations",
            conjugations: "Conjugaisons",
            words: "Mots",
        },
        wordSections: "Sections du mot",
        sentenceSections: "Sections de la phrase",
        editInJmdict: "Modifier dans JMDict",
        conjugationsOf: "Conjugaisons de {{word}}",
        showTranslation: "Afficher la traduction",
        hideTranslation: "Masquer la traduction",
        analyze: "Analyser les mots",
        notFoundTitle: "Introuvable",
        notFound: {
            word: "Ce mot n’existe pas",
            sentence: "Cette phrase n’existe pas",
        },
        notFoundText: "Le lien est peut-être cassé, ou l’entrée a été supprimée.",
        loadFailed: {
            word: "Impossible de charger le mot",
            sentence: "Impossible de charger la phrase",
        },
        /** The app's offline dictionary has no answer for this page */
        offline: {
            word: "Ce mot ne figure pas dans le dictionnaire hors ligne",
            sentence: "Cette phrase nécessite Internet",
            text: "Elle se chargera dès que vous serez de nouveau en ligne.",
            back: "Retour",
        },
        sentences: {
            title: "Phrases avec {{word}}",
            failed: "Impossible de charger les phrases.",
            offline:
                "Les phrases d’exemple nécessitent Internet. Elles se chargeront dès que vous serez de nouveau en ligne.",
            none: "Aucune phrase d’exemple pour {{word}}.",
            all: "Toutes les phrases avec {{word}} ({{pages}} pages)",
            open: "Ouvrir dans la recherche de phrases",
        },
        meta: {
            wordTitle: "Signification de {{name}} : {{meaning}}",
            conjugationTitle: "Conjugaison de {{name}} : toutes les formes",
            conjugationDescription:
                "Comment conjuguer {{name}}, « {{meaning}} » : forme polie, négative, passée, forme en te, potentiel, passif, causatif et plus encore.",
            conjugationDescriptionPlain:
                "Comment conjuguer {{name}} : forme polie, négative, passée, forme en te, potentiel, passif, causatif et plus encore.",
            sentenceTitle: "{{text}} – « {{translation}} »",
            sentenceDescription: "{{text}} « {{translation}} » – les mots et les kanji de cette phrase japonaise.",
            sentenceDescriptionPlain: "{{text}} – les mots et les kanji de cette phrase japonaise.",
        },
    },

    summary: {
        sentence: "<name></name> est {{kind}} qui signifie « {{gloss}} ».",
        sentenceJlpt: "<name></name> est {{kind}} qui signifie « {{gloss}} » (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "un nom japonais",
            nounAndSuruVerb: "un nom japonais, aussi verbe en suru",
            adverb: "un adverbe japonais",
            auxiliary: "un auxiliaire japonais",
            auxiliaryAdjective: "un adjectif auxiliaire japonais",
            auxiliaryVerb: "un verbe auxiliaire japonais",
            conjunction: "une conjonction japonaise",
            counter: "un compteur japonais",
            expression: "une expression japonaise",
            interjection: "une interjection japonaise",
            numeral: "un numéral japonais",
            pronoun: "un pronom japonais",
            prefix: "un préfixe japonais",
            suffix: "un suffixe japonais",
            particle: "une particule japonaise",
            iAdjective: "un adjectif japonais en -i",
            naAdjective: "un adjectif japonais en -na",
            noAdjective: "un adjectif japonais en -no",
            preNounAdjectival: "un adnominal japonais",
            adjective: "un adjectif japonais",
            ichidanVerb: "un verbe ichidan japonais",
            godanVerb: "un verbe godan japonais",
            yodanVerb: "un verbe yodan japonais",
            nidanVerb: "un verbe nidan japonais",
            suruVerb: "un verbe japonais en suru",
            irregularVerb: "un verbe irrégulier japonais",
            verb: "un verbe japonais",
            word: "un mot japonais",
        },
        commonKinds: {
            noun: "un nom japonais courant",
            nounAndSuruVerb: "un nom japonais courant, aussi verbe en suru",
            adverb: "un adverbe japonais courant",
            auxiliary: "un auxiliaire japonais courant",
            auxiliaryAdjective: "un adjectif auxiliaire japonais courant",
            auxiliaryVerb: "un verbe auxiliaire japonais courant",
            conjunction: "une conjonction japonaise courante",
            counter: "un compteur japonais courant",
            expression: "une expression japonaise courante",
            interjection: "une interjection japonaise courante",
            numeral: "un numéral japonais courant",
            pronoun: "un pronom japonais courant",
            prefix: "un préfixe japonais courant",
            suffix: "un suffixe japonais courant",
            particle: "une particule japonaise courante",
            iAdjective: "un adjectif japonais courant en -i",
            naAdjective: "un adjectif japonais courant en -na",
            noAdjective: "un adjectif japonais courant en -no",
            preNounAdjectival: "un adnominal japonais courant",
            adjective: "un adjectif japonais courant",
            ichidanVerb: "un verbe ichidan japonais courant",
            godanVerb: "un verbe godan japonais courant",
            yodanVerb: "un verbe yodan japonais courant",
            nidanVerb: "un verbe nidan japonais courant",
            suruVerb: "un verbe japonais courant en suru",
            irregularVerb: "un verbe irrégulier japonais courant",
            verb: "un verbe japonais courant",
            word: "un mot japonais courant",
        },
    },
} satisfies PartialDict<typeof en>;
