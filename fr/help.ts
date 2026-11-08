import type en from "../en/help";
import type { PartialDict } from "../types";

export default {
    title: "Aide",
    description:
        "Comment chercher dans Jotoba en anglais, en japonais ou en rōmaji, lire des phrases entières, filtrer les résultats avec des hashtags comme #n5 et utiliser les raccourcis clavier.",
    intro: "Jotoba est un dictionnaire de mots japonais, de kanji, de phrases d’exemple et de noms. Cette page vous montre tout ce que vous pouvez en faire, de votre première recherche aux raccourcis qui vous feront gagner du temps. Les exemples sont des liens : vous pouvez les essayer tout de suite.",
    contents: "Sur cette page",
    nav: {
        search: "Recherche",
        reading: "Lecture",
        hashtags: "Hashtags",
        results: "Résultats",
        shortcuts: "Raccourcis",
        bookmarks: "Favoris et paramètres",
        flashcards: "Cartes mémoire",
        offline: "Hors ligne",
        moreHelp: "Plus d’aide",
    },
    tour: {
        title: "Vous préférez une visite guidée ?",
        text: "La visite vous montre la barre de recherche, les types de recherche, la recherche par radicaux et le menu de la page où vous êtes, et vous permet de régler vos langues au passage.",
        button: "Faire la visite",
    },
    topic: {
        try: "Essayer",
    },
    queryLink: {
        searchFor: "Rechercher ",
        in: " dans ",
        types: {
            kanji: "Kanji",
            sentences: "Phrases",
            names: "Noms",
        },
    },
    search: {
        title: "Commencer par une recherche",
        lead: "Tapez ce que vous savez dans la barre de recherche. Pas besoin que ce soit du japonais.",
        directions: {
            title: "Chercher dans les deux sens",
            text: "Cherchez en anglais, en japonais (kanji ou kana) ou en rōmaji, l’écriture latine du japonais. Si vous choisissez une autre langue de recherche dans les <link>paramètres</link>, par exemple le français, vous pouvez aussi chercher dans cette langue.",
        },
        types: {
            title: "Choisir quoi chercher",
            text: "Le menu à côté du champ de recherche permet de passer des mots aux kanji, aux phrases d’exemple et aux noms. Le changer relance votre recherche. Si un autre type a des résultats pour votre requête, la page de résultats vous l’indique.",
        },
        wildcards: {
            title: "Combler les trous avec des jokers",
            text: "Vous ne connaissez qu’une partie d’un mot ? Dans une recherche en japonais, * remplace un nombre quelconque de caractères : <ja>*車</ja> trouve les mots qui finissent par <ja>車</ja>, <ja>車*</ja> ceux qui commencent par lui et <ja>*車*</ja> tous les mots qui le contiennent. Un ? remplace exactement un caractère : <ja>宇宙?行士</ja> trouve donc <ja>宇宙飛行士</ja>.",
            boundaries:
                "Si l’analyse de phrase découpe une telle recherche en plusieurs mots, réunissez-les avec « Modifier le découpage des mots ». Les jokers fonctionnent avec les kanji et les kana, pas avec l’anglais ni le rōmaji.",
        },
        suggestions: {
            title: "Choisir parmi les suggestions",
            text: "Des suggestions apparaissent pendant la saisie. Choisissez-en une pour la rechercher. Quand vous tapez #, les suggestions passent aux hashtags, expliqués <hashtags>plus bas</hashtags>. Au clavier, vous pouvez les parcourir et ouvrir une recherche dans un nouvel onglet, voir les <shortcuts>raccourcis clavier</shortcuts>.",
        },
    },
    reading: {
        title: "Lire du japonais",
        lead: "Vous avez trouvé une phrase que vous ne savez pas encore lire ? Jotoba peut la découper en mots, reconnaître les formes conjuguées et vous aider à trouver les kanji que vous ne connaissez pas.",
        sentences: {
            title: "Lire des phrases entières",
            text: "Cherchez une phrase japonaise complète et Jotoba la découpe en mots. Choisissez un mot pour voir sa forme du dictionnaire et la façon dont il a été conjugué.",
            boundaries:
                "Si une phrase est coupée au mauvais endroit, utilisez le bouton crayon pour définir vous-même le découpage des mots. Il est enregistré dans le lien : vous pouvez donc partager la phrase telle que vous l’avez découpée.",
        },
        conjugations: {
            title: "Chercher des mots conjugués",
            text: "Pas besoin de la forme du dictionnaire. Cherchez un mot tel que vous l’avez trouvé et Jotoba affiche le mot de base ainsi que les formes détectées, par exemple le négatif et le passé.",
        },
        numbers: {
            title: "Lire les nombres",
            text: "Cherchez un nombre écrit en japonais pour voir sa valeur en chiffres.",
        },
        radicals: {
            title: "Trouver des kanji par leurs composants",
            text: "Vous ne savez pas lire un kanji ? Ouvrez <ja>部</ja> à côté du champ de recherche et choisissez les radicaux que vous reconnaissez, c’est-à-dire les éléments qui composent un kanji. Les onglets les classent par nombre de traits. Chaque radical ajouté affine la liste des kanji correspondants, et les suggestions de recherche suivent aussi votre sélection.",
            search: "Vous ne savez pas quel radical vous avez sous les yeux ? Tapez dans le champ de recherche du sélecteur : un kanji affiche ses radicaux, des kana affichent les radicaux des mots correspondants, et l’anglais ou le rōmaji trouvent les radicaux par leur nom.",
        },
    },
    hashtags: {
        title: "Affiner avec les hashtags",
        lead: "Les hashtags commencent par # et se placent dans la barre de recherche, avant ou après votre terme. Ils changent le type de recherche ou filtrent les résultats, par exemple sur un niveau du JLPT ou sur les verbes uniquement.",
        how: {
            title: "Comment fonctionnent les hashtags",
            suggest: "Tapez # et la barre de recherche vous propose des hashtags : inutile de les retenir.",
            case: "Majuscules et minuscules n’ont pas d’importance : #N5 et #n5 sont identiques.",
            combine: "Vous pouvez les combiner : #n5 #verb trouve les verbes du N5.",
            withoutTerm: "Les filtres fonctionnent sans terme de recherche : #n5 seul liste tous les mots du N5.",
        },
        types: {
            title: "Changer le type de recherche",
            text: "#word, #kanji, #sentence et #name remplacent le menu à côté du champ de recherche. C’est pratique quand vous préférez continuer à taper, ou dans un lien que vous envoyez à quelqu’un.",
        },
        hidden: {
            title: "S’entraîner avec les traductions masquées",
            text: "Ajoutez #hidden à une recherche de phrases et les traductions restent masquées jusqu’à ce que vous les révéliez, une phrase à la fois. Pour les masquer dans toutes les recherches de phrases, activez <link>{{setting}}</link> dans les paramètres.",
        },
        jlpt: {
            title: "Filtrer par niveau JLPT",
            text: "#n5 à #n1 limitent les mots, les kanji et les phrases à un niveau du Japanese-Language Proficiency Test (JLPT), N5 étant le plus facile. #jlpt5 à #jlpt1 fonctionnent aussi.",
        },
        all: {
            title: "Tous les hashtags de filtre",
            text: "La plupart des filtres s’appliquent à la recherche de mots. Choisissez un hashtag pour lister tous les mots qui l’ont.",
        },
        list: "Hashtags : {{group}}",
        showAll: {
            one: "Afficher les {{count}} domaines",
            many: "Afficher les {{count}} domaines",
            other: "Afficher les {{count}} domaines",
        },
        showFewer: "Afficher moins de domaines",
        groups: {
            partOfSpeech: {
                title: "Catégorie grammaticale",
                description: "Le type de mot.",
            },
            verbs: {
                title: "Verbes et graphie",
                description: "Classes de verbes, verbes en suru et façon dont un mot s’écrit habituellement.",
            },
            register: {
                title: "Registre et ton",
                description: "À quel point un mot est poli, familier ou sensible, et qui a tendance à l’employer.",
            },
            old: {
                title: "Mots anciens et rares",
                description: "Mots vieillis, historiques ou peu employés aujourd’hui.",
            },
            sayings: {
                title: "Expressions et types de mots",
                description: "Proverbes, expressions idiomatiques, composés de quatre kanji, onomatopées et abréviations.",
            },
            names: {
                title: "Noms et choses",
                description:
                    "Noms propres du dictionnaire de mots, comme des lieux, des entreprises ou des œuvres. Pour chercher le nom d’une personne, utilisez la recherche de noms.",
            },
            subjects: {
                title: "Domaines",
                description: "Mots d’un domaine particulier, comme la médecine, le droit ou le sumo.",
            },
            kanji: {
                title: "Kanji",
                description: "Les kokuji sont des kanji créés au Japon.",
            },
        },
    },
    results: {
        title: "Tirer le meilleur des résultats",
        lead: "Chaque entrée contient bien plus que sa première ligne.",
        labels: {
            title: "Ce que signifient les étiquettes",
            common: "Un mot courant",
            jlpt: "Le niveau JLPT, de N5 (le plus facile) à N1",
            sentenceFrom: "Une phrase issue de {{source}}",
            ownSentence: "Une phrase ajoutée par l’équipe de Jotoba",
            sources: "L’origine des mots, des phrases et de l’audio est indiquée sur la page <link>À propos</link>.",
        },
        words: {
            title: "Mots",
            text: "Écoutez l’audio, consultez l’accent de hauteur et les autres graphies, et choisissez une vignette de kanji pour ouvrir ce kanji. Sous un sens, vous pouvez déplier une phrase d’exemple.",
            menu: "Le menu ⋮ à côté d’un mot contient le reste : le tableau de conjugaison, les collocations, le pendant transitif ou intransitif, les phrases qui utilisent le mot, le téléchargement de l’audio, « Modifier dans JMDict », « Copier le lien » et la page de détails.",
            furigana:
                "Double-cliquez sur les furigana au-dessus d’un mot pour copier sa lecture. « {{setting}} » dans les <link>paramètres</link> active ou désactive cette fonction.",
        },
        kanji: {
            title: "Kanji",
            text: "Lancez l’ordre des traits, parcourez-le pas à pas ou changez sa vitesse. Choisissez le grand kanji pour voir les composants qui le forment. Les composés sont regroupés par lecture, et choisir une lecture liste les mots qui l’utilisent. Le radical, les composants et les kanji similaires sont des liens : vous pouvez continuer à explorer. Les lectures en chinois, en coréen et en vietnamien peuvent aussi être affichées.",
        },
        sentences: {
            title: "Phrases",
            text: "L’étiquette indique la provenance d’une phrase. Son menu ouvre la phrase dans l’analyse de phrase pour en chercher les mots, l’ouvre sur Tatoeba ou copie un lien vers elle.",
        },
        names: {
            title: "Noms",
            text:
                "Les résultats de noms affichent la lecture, une transcription et, s’ils sont connus, le genre et le type de nom.",
        },
        sharing: {
            title: "Pages de détails et liens",
            pages: "Les mots et les phrases ont leur propre page de détails, avec des onglets pour les kanji, les phrases, les collocations et les conjugaisons, ainsi qu’un bouton de partage.",
            links: "Les liens de recherche conservent le type de recherche, la page, le mot choisi dans l’analyse de phrase et votre découpage des mots. Si « {{setting}} » est activé dans les paramètres, les personnes qui ouvrent votre lien voient la même langue de recherche que vous.",
        },
    },
    shortcuts: {
        title: "Aller plus vite au clavier",
        lead: "Sur ordinateur, vous pouvez utiliser presque tout Jotoba sans souris. Les raccourcis à une seule touche ne fonctionnent pas pendant la saisie dans un champ de texte.",
        off: "Les raccourcis clavier sont désactivés dans ce navigateur. Les touches standard fonctionnent toujours.",
        turnOn: "Les activer",
        anywhere: "Partout",
        results: "Sur les pages de résultats",
        searchBar: "Dans la barre de recherche",
        playAudio: "Écouter le premier audio de la page",
        pages: "Aller aux pages 1 à 9",
        change: "Vous pouvez modifier ou désactiver ces raccourcis dans <link>{{page}}</link>. Les modifications ne s’appliquent qu’à ce navigateur.",
        standard: {
            title: "Touches standard",
            text: "Ces touches suivent les conventions habituelles du clavier : elles fonctionnent comme sur d’autres sites et ne peuvent pas être modifiées.",
        },
        list: {
            off: "Désactivé",
            or: "ou",
            to: "à",
        },
    },
    bookmarks: {
        title: "Enregistrer des mots et adapter Jotoba",
        lead: "Deux rubriques du menu adaptent Jotoba à votre façon d’étudier.",
        bookmarks: {
            title: "Favoris",
            text: "Enregistrez des mots et des phrases dans vos propres listes et ajoutez-y des notes. Sans compte, ils restent dans ce navigateur ; avec un compte, ils sont synchronisés sur tous les appareils où vous vous connectez. Utilisez le bouton favori d’une page de détails et retrouvez vos listes sous <link>{{menu}}</link> dans le menu.",
            textLocal:
                "Enregistrez des mots et des phrases dans vos propres listes et ajoutez-y des notes. Ils restent dans ce navigateur. Utilisez le bouton favori d’une page de détails et retrouvez vos listes sous <link>{{menu}}</link> dans le menu.",
        },
        settings: {
            title: "Paramètres",
            intro: "Quelques options à connaître :",
            language:
                "<link>{{setting}}</link> : chercher et lire les sens dans une autre langue, comme le français. « {{alwaysEnglish}} » ajoute aussi les sens en anglais.",
            hideTranslation: "<link>{{setting}}</link> : lire chaque phrase d’exemple avant de voir sa traduction.",
            kanji: "<link>{{setting}}</link> : quelles parties des mots et des kanji sont affichées, comme les lectures, l’accent de hauteur ou l’ordre des traits, et comment l’animation de l’ordre des traits se déroule.",
            theme: "<link>{{setting}}</link> : suivre le système, ou toujours clair ou sombre.",
            languageInLinks:
                "<link>{{setting}}</link> : les liens que vous partagez s’ouvrent dans la même langue de recherche.",
        },
    },
    flashcards: {
        title: "Réviser avec les cartes mémoire",
        lead: "Toute liste de favoris peut devenir un paquet de cartes. Jotoba planifie les cartes avec FSRS : chacune revient peu avant que vous ne l’oubliiez.",
        start: {
            title: "Lancer une liste",
            text: "Ouvrez une liste et choisissez « Commencer l’apprentissage ». Vous définissez combien de nouvelles cartes s’ajoutent par jour. La progression n’appartient qu’à cette liste : un mot présent dans deux listes s’étudie dans chacune.",
            kinds: "Un mot a jusqu’à trois types de cartes : sens, lecture et rappel. Le type suivant ne commence qu’une fois que vous avez su le précédent un jour antérieur.",
        },
        rating: {
            title: "Évaluer une carte",
            text: "Pensez à la réponse, puis affichez-la. Choisissez « À revoir » si vous ne la saviez pas, sinon « Je savais ». Soyez honnête : le délai sur les boutons indique quand la carte reviendra. Les cartes oubliées reviennent quelques cartes plus loin dans la même série. Un nouveau mot que vous connaissiez déjà reçoit « Déjà connu ».",
            fine: "<link>{{setting}}</link> ajoute « Difficile » et « Facile ». « Difficile » compte toujours comme su.",
        },
        stages: {
            title: "Étapes et mémoire",
            text: "Chaque mot se trouve à l’étape de son type commencé le plus faible, et reste « Nouveau » tant qu’aucun n’a commencé : « En cours » tant que sa durée de mémorisation est inférieure à une semaine, « Acquis » jusqu’à deux mois, « Maîtrisé » au-delà.",
            memory: "Mémoire : la probabilité que vous connaissiez la carte en ce moment. Elle baisse un peu chaque jour jusqu’à ce que vous la révisiez.",
            span: "Durée de mémorisation : le nombre de jours au bout duquel vous ne connaîtriez plus la carte que 9 fois sur 10. Chaque révision réussie l’allonge.",
            retention:
                "<link>{{setting}}</link> : les cartes reviennent quand votre mémoire de celles-ci tombe à cette valeur. Plus elle est élevée, plus il y a de révisions.",
        },
        fewer: {
            title: "Pourquoi moins de cartes apparaissent",
            intro: "Parfois, une liste affiche moins de cartes à réviser ou de nouvelles cartes que prévu. L’aperçu en donne les raisons :",
            resting:
                "Chaque mot revient au plus une fois par jour d’étude. Ses autres cartes à réviser attendent le lendemain. Un jour d’étude commence à 4 h.",
            waiting: "Les cartes de lecture et de rappel attendent que vous ayez su le type précédent un jour antérieur.",
            limit: "Les nouvelles cartes s’arrêtent à la limite quotidienne de la liste.",
            backlog:
                "Si plus de révisions attendent que ce que deux séries permettent, les nouvelles cartes sont mises en pause jusqu’à ce que vous ayez rattrapé votre retard. Les cartes que vous connaissez le plus probablement encore passent en premier. Vous pouvez tout de même accepter de nouvelles cartes pour une journée.",
        },
        practice: {
            title: "Quand rien n’est à réviser",
            ahead: "« Réviser en avance » prend des cartes qui ne sont pas encore à réviser, les plus fragiles d’abord, mais aucune que vous avez déjà évaluée aujourd’hui. Cela compte comme une révision : les cartes sues reviennent un peu plus tard, les oubliées plus tôt.",
            browse: "« Simplement parcourir » fait défiler les cartes sans les évaluer. Cela ne change rien.",
        },
        tricky: {
            title: "Mots coriaces",
            text: "Un mot oublié trois fois (modifiable dans les paramètres d’apprentissage) est marqué comme coriace. Au bout de huit fois, la liste de mots vous suggère d’écrire votre propre moyen mnémotechnique dans la note, ce qui aide souvent plus que des séries supplémentaires.",
            actions:
                "Dans les détails d’un mot, vous pouvez le mettre en pause pour qu’il ne revienne plus dans les séries, ou le réinitialiser pour qu’il reparte de zéro comme nouvelle carte. Son historique est conservé.",
        },
    },
    offline: {
        title: "Chercher sans Internet",
        lead: "L’application peut garder le dictionnaire sur votre appareil : vous pouvez ainsi chercher des mots dans le train, à l’étranger ou partout sans connexion.",
        download: {
            title: "Télécharger le dictionnaire",
            text: "Téléchargez-le une fois via <link>Dictionnaire hors ligne</link> dans le menu. Vous voyez sa taille avant de commencer, et en données mobiles l’application vous demande d’abord. Rien ne se télécharge tout seul.",
        },
        works: {
            title: "Ce qui fonctionne hors ligne",
            intro: "Une fois sur votre appareil, ceci fonctionne sans connexion :",
            words: "La recherche de mots, avec suggestions pendant la saisie",
            details: "Les détails des mots, sans recherche de phrases ni enregistrements",
            kanji: "Les kanji, la recherche par radicaux et l’ordre des traits",
            voice: "<link>{{setting}}</link> : quand il n’y a pas d’enregistrement, la voix japonaise de votre appareil lit les mots et les phrases à voix haute.",
        },
        needs: {
            title: "Ce qui nécessite Internet",
            intro: "Certaines fonctions ne marchent qu’en ligne :",
            sentencesNames: "La recherche de phrases et la recherche de noms",
            recordings: "Les enregistrements audio",
            reader: "Le découpage de phrases entières en mots. Hors ligne, cherchez un mot à la fois.",
            query: "Les jokers (* et ?), les hashtags et les guillemets dans une recherche",
        },
        now: {
            title: "Quand vous êtes hors ligne",
            chip: "Sans connexion, « Hors ligne » apparaît en haut de l’écran. Touchez-le pour voir ce qui fonctionne en ce moment.",
            results:
                "Les résultats proviennent alors de votre appareil et sont marqués comme résultats hors ligne. Leur ordre peut différer de celui en ligne, et les fautes de frappe ne sont pas corrigées.",
            english:
                "Les sens en anglais sont toujours inclus. Pour certaines langues, vous pouvez télécharger un pack de langue avec leurs sens.",
        },
        updates: {
            title: "Mises à jour et stockage",
            text: "L’application ne met jamais le dictionnaire à jour d’elle-même. Quand de nouvelles données sont disponibles, la page d’accueil et la page du dictionnaire hors ligne vous les proposent, et vous décidez quand les télécharger.",
            manage: "Via <link>Dictionnaire hors ligne</link> dans le menu, vous pouvez aussi rechercher des mises à jour, vérifier que les données sont complètes ou les supprimer pour libérer de l’espace.",
        },
    },
    moreHelp: {
        title: "Obtenir plus d’aide",
        lead: "Une question à laquelle cette page ne répond pas, ou quelque chose qui ne fonctionne pas comme prévu ?",
        ask: "Posez votre question sur <discord>Discord</discord> ou <reddit>Reddit</reddit>. La <trello>feuille de route sur Trello</trello> montre ce sur quoi nous travaillons. Si une entrée du dictionnaire est elle-même erronée, utilisez « Modifier dans JMDict » dans le menu ⋮ du mot.",
        tour: "Vous pouvez relancer la visite depuis « {{menu}} » dans le menu. Jotoba existe aussi en <app>application Android</app>.",
    },
} satisfies PartialDict<typeof en>;
