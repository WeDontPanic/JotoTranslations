import type en from "../en/tagInfo";
import type { PartialDict } from "../types";

export default {
    searchTag: "Afficher tous les mots avec #{{tag}}",
    teForm: "Forme en -te",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "Adverbe qui peut prendre と, le plus souvent un mot de son ou de manière. Avec と, il décrit comment une action se fait.",
            example: "rire joyeusement",
        },
        Auxilary: {
            text: "Mot qui s’attache à un autre et lui ajoute une fonction grammaticale, comme le temps, la politesse ou la négation. Il ne s’emploie pas seul.",
        },
        AuxilaryAdj: {
            text: "Terminaison qui s’attache à un verbe ou à un adjectif et se conjugue comme un adjectif en -i.",
            example: "vouloir manger",
        },
        AuxilaryVerb: {
            text: "Verbe qui s’attache à un autre verbe, le plus souvent à sa forme en -te, et ajoute un sens comme essayer, terminer ou faire à l’avance.",
            example: "manger pour voir",
        },
        Counter: {
            text: "Se place après un nombre et compte un type de choses, comme les objets plats, les machines ou les personnes. En japonais, il en faut un pour compter presque tout.",
            example: "trois feuilles de papier",
        },
        Expr: {
            text: "Expression figée de plusieurs mots, à apprendre en bloc.",
            example: "merci beaucoup",
        },
        Particle: {
            text: "Petit mot placé après un nom ou un groupe de mots, qui marque son rôle dans la phrase, par exemple sujet, objet, lieu ou direction.",
            example: "aller à l’école",
        },
        Prefix: {
            text: "Se place devant un autre mot et en modifie ou complète le sens. Il ne s’emploie pas seul.",
            example: "argent (poli)",
        },
        Suffix: {
            text: "S’attache à la fin d’un autre mot, par exemple un nom de personne ou un nom commun. Il ne s’emploie pas seul.",
            example: "M./Mme Tanaka",
        },
    },

    noun: {
        Adverbial: {
            text: "Nom qui peut aussi s’employer comme adverbe, sans particule.",
            example: "Je suis occupé en ce moment.",
        },
        Temporal: {
            text: "Nom qui désigne un moment. Il s’emploie souvent sans particule, comme un adverbe.",
            example: "J’irai demain.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "Nom ou verbe placé juste devant un nom pour le qualifier, sans な ni の.",
        },
        Keiyoushi: {
            text: "Se termine par <jp>い</jp> et se conjugue lui-même : on retire le <jp>い</jp> pour des terminaisons comme <jp>くない</jp> et <jp>かった</jp>. Il peut se placer juste devant un nom.",
        },
        KeiyoushiYoiIi: {
            text: "L’adjectif <jp>いい</jp> (bon). Il se conjugue à partir de son ancienne forme <jp>よい</jp> : <jp>よくない</jp>, <jp>よかった</jp>, jamais <jp>いくない</jp>.",
        },
        Ku: {
            text: "Adjectif classique du type ku : <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. Il survit aujourd’hui dans des expressions figées et le style littéraire.",
        },
        Na: {
            text: "Demande <jp>な</jp> devant un nom et se conjugue comme un nom suivi de <jp>だ</jp>. Certains se terminent quand même par <jp>い</jp>, comme <jp>きれい</jp>.",
            example: "une ville calme",
        },
        Nari: {
            text: "Forme classique et soutenue d’un adjectif en -na. Elle se termine par <jp>なる</jp> devant un nom et se rencontre dans le style littéraire.",
        },
        No: {
            text: "Nom qui qualifie un autre nom lorsqu’il est suivi de <jp>の</jp>.",
            example: "une personne malade",
        },
        PreNoun: {
            text: "Se place uniquement juste devant un nom et ne se conjugue jamais.",
            example: "ce livre",
        },
        Shiku: {
            text: "Adjectif classique du type shiku : <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. Il survit aujourd’hui dans des expressions figées et le style littéraire.",
        },
        Taru: {
            text: "Adjectif littéraire : <jp>たる</jp> devant un nom, <jp>と</jp> devant un verbe.",
        },
    },

    verb: {
        Transitive: {
            text: "Agit sur un complément d’objet direct, généralement marqué par <jp>を</jp>. Beaucoup ont un équivalent intransitif sans complément.",
            example: "ouvrir la fenêtre",
        },
        Intransitive: {
            text: "N’a pas de complément d’objet direct : le sujet, généralement marqué par <jp>が</jp>, fait l’action ou la subit.",
            example: "la fenêtre s’ouvre",
        },
        Ichidan: {
            text: "Se termine par -iru ou -eru et garde son radical : on retire <jp>る</jp> et on ajoute la terminaison. Tous les verbes en -iru/-eru n’en sont pas : <jp>帰る</jp> est un verbe godan.",
        },
        IchidanZuru: {
            text: "Verbe littéraire en <jp>ずる</jp>. Il se conjugue comme le verbe ichidan en <jp>じる</jp> qui l’a remplacé.",
        },
        IchidanKureru: {
            text: "Le verbe <jp>くれる</jp> (me ou nous donner). Son impératif est <jp>くれ</jp>, et non <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "Le verbe irrégulier <jp>来る</jp> (venir). Son radical change : <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "Le dernier kana change de voyelle dans sa série devant les terminaisons : <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "Type de verbe classique. La plupart de ces verbes sont des verbes godan en japonais moderne.",
        },
        Nidan: {
            text: "Type de verbe classique à deux radicaux (supérieur ou inférieur). La plupart de ces verbes sont des verbes ichidan en japonais moderne.",
        },
        Irregular: {
            text: "Se conjugue de façon irrégulière ; consultez le tableau de conjugaison.",
        },
    },

    godanEnding: {
        tte: {
            text: "Les verbes en <jp>う</jp>, <jp>つ</jp> et <jp>る</jp> font leurs formes en -te et en -ta avec <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "Les verbes en <jp>む</jp>, <jp>ぶ</jp> et <jp>ぬ</jp> font leurs formes en -te et en -ta avec <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "Les verbes en <jp>く</jp> font leurs formes en -te et en -ta avec <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "Les verbes en <jp>ぐ</jp> font leurs formes en -te et en -ta avec <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "Les verbes en <jp>す</jp> font leurs formes en -te et en -ta avec <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Attention : il se termine par <jp>る</jp> comme un verbe ichidan, mais se conjugue comme un godan : <jp>ない</jp> vient après <jp>ら</jp>.",
        },
        Aru: {
            text: "Verbes honorifiques comme <jp>いらっしゃる</jp> et <jp>なさる</jp> : la forme en -masu et l’impératif se terminent par <jp>い</jp> au lieu de <jp>り</jp>.",
        },
        USpecial: {
            text: "Des verbes comme <jp>問う</jp> et <jp>請う</jp> font leur forme en -te avec <jp>うて</jp>, et non <jp>って</jp>.",
        },
        Uru: {
            text: "Le verbe littéraire <jp>得る</jp> lu <jp>うる</jp> ; en dehors de la forme du dictionnaire, il se conjugue comme <jp>える</jp>.",
        },
        RuIrreg: {
            text: "Le verbe <jp>ある</jp> (exister, y avoir) : sa forme négative est <jp>ない</jp>, et non <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "<jp>行く</jp> est le seul verbe en <jp>く</jp> dont la forme en -te est <jp>行って</jp> au lieu de <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "Verbe classique en <jp>ぬ</jp>, comme <jp>死ぬ</jp> dans les textes anciens. Aujourd’hui, seules quelques expressions figées l’emploient.",
        },
        Ru: {
            text: "Verbe irrégulier classique comme <jp>あり</jp> (être, exister) ou <jp>をり</jp>, dont la forme de base se termine par <jp>り</jp>. On ne le trouve plus aujourd’hui que dans le style littéraire.",
        },
        NounOrAuxSuru: {
            text: "Nom qui devient un verbe avec <jp>する</jp>.",
        },
        Suru: {
            text: "Le verbe <jp>する</jp> (faire) ou un composé formé avec lui. Il est irrégulier : <jp>しない</jp>, <jp>します</jp>, et <jp>できる</jp> comme potentiel.",
        },
        SuruSpecial: {
            text: "Composé d’un seul kanji suivi de <jp>する</jp>. Il se conjugue en partie comme un verbe godan en <jp>す</jp>.",
        },
        Su: {
            text: "<jp>す</jp>, l’ancienne forme de <jp>する</jp>. On ne la trouve plus aujourd’hui que dans le style littéraire.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "Forme raccourcie d’un mot plus long. Le japonais réduit souvent les mots d’emprunt à leurs premiers kana.",
            example: "ordinateur personnel",
        },
        Archaism: {
            text: "Mot ou emploi ancien. Vous le trouverez dans les textes classiques, les drames historiques ou des expressions figées, mais pas dans la langue parlée actuelle.",
        },
        ChildrensLanguage: {
            text: "Employé par les jeunes enfants ou quand on leur parle.",
            example: "toutou",
        },
        Colloquialism: {
            text: "Langue parlée et décontractée. Parfait entre amis ; à l’écrit ou en langage poli, un autre mot convient mieux.",
        },
        DatedTerm: {
            text: "Sonne vieilli. Les personnes âgées l’emploient parfois encore, les jeunes rarement.",
        },
        Derogatory: {
            text: "Rabaisse la personne ou la chose désignée. Il peut blesser.",
        },
        Euphemistic: {
            text: "Façon plus douce et indirecte de dire quelque chose de désagréable ou de délicat.",
        },
        FamiliarLanguage: {
            text: "Pour la famille, les amis et les personnes de rang inférieur. Avec les autres, il peut paraître impoli.",
        },
        FemaleTermOrLanguage: {
            text: "Traditionnellement employé par les femmes. Moins courant aujourd’hui, il peut paraître doux ou vieilli.",
        },
        HonorificLanguage: {
            text: "Sonkeigo : élève la personne qui agit, généralement l’interlocuteur ou une personne de rang supérieur. Ne l’employez jamais pour vous-même.",
            example: "le professeur vient",
        },
        HumbleLanguage: {
            text: "Kenjōgo : vous abaisse, vous ou votre groupe, pour montrer du respect à l’autre personne. Ne l’employez que pour vos propres actions.",
            example: "j’y vais (humble)",
        },
        IdiomaticExpression: {
            text: "Son sens ne se déduit pas des mots qui la composent ; apprenez-la en bloc.",
        },
        InternetSlang: {
            text: "Argot d’Internet et des réseaux sociaux. Il se démode vite.",
        },
        JocularHumorousTerm: {
            text: "Employé pour plaisanter ou par jeu, pas dans un contexte sérieux.",
        },
        LiteraryOrFormalTerm: {
            text: "Se rencontre à l’écrit et dans un registre soutenu, par exemple aux informations, dans les discours ou en littérature. Il paraît guindé dans la conversation.",
        },
        MaleTermOrLanguage: {
            text: "Traditionnellement employé par les hommes. Dans la bouche d’autres personnes, il peut paraître rude ou affecté.",
        },
        MangaSlang: {
            text: "Surtout présent dans les mangas et les animes, rarement dans la vie réelle.",
        },
        ObscureTerm: {
            text: "Peu connu, même de nombreux locuteurs natifs.",
        },
        ObsoleteTerm: {
            text: "N’est plus employé. Vous ne le trouverez que dans des textes anciens.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Imite un son (giongo) ou exprime un état ou un sentiment (gitaigo). Le japonais en emploie beaucoup, souvent avec <jp>と</jp> ou <jp>する</jp>.",
            example: "scintiller",
        },
        PoeticalTerm: {
            text: "Employé en poésie et dans les paroles de chansons, rarement dans la conversation.",
        },
        PoliteLanguage: {
            text: "Teineigo : le style poli avec <jp>です</jp> et <jp>ます</jp>, employé avec les personnes que vous connaissez peu.",
            example: "il y a, c’est (poli)",
        },
        Proverb: {
            text: "Dicton qui transmet une sagesse ; on le cite généralement en entier.",
        },
        Rare: {
            text: "Rarement employé. Un autre mot est plus courant pour ce sens.",
        },
        RudeOrXRatedTerm: {
            text: "Grossier ou sexuel. Évitez-le, sauf si vous connaissez bien la situation.",
        },
        Sensitive: {
            text: "Touche à un sujet sensible. Employez-le avec précaution, sinon il peut blesser.",
        },
        Slang: {
            text: "Mot familier propre à un groupe ou à une génération. Parfait entre amis, déplacé dans les situations formelles.",
        },
        UsuallyWrittenInKana: {
            text: "A une graphie en kanji, mais s’écrit normalement en kana. Apprenez la forme en kana.",
        },
        VulgarExpressionOrWord: {
            text: "Grossier ou vulgaire. Il peut choquer.",
        },
        Yojijukugo: {
            text: "Composé de quatre kanji, souvent tiré des classiques chinois. Beaucoup sont des expressions figées porteuses d’une morale ou d’une leçon.",
            example: "une rencontre unique dans une vie",
        },
    },

    dialect: {
        Brazilian: {
            text: "Employé par la communauté japonaise du Brésil et mêlé de portugais. Le japonais standard peut employer un autre mot.",
        },
        Hokkaido: {
            text: "Parlé à Hokkaidō, la grande île la plus au nord. Le japonais standard peut employer un autre mot ou une autre forme.",
        },
        Kansai: {
            text: "Parlé dans la région du Kansai, autour d’Ōsaka, Kyōto et Kōbe, et souvent entendu dans les spectacles comiques. Le japonais standard peut employer un autre mot ou une autre forme.",
            example: "ça ne va pas (standard : だめ)",
        },
        Kantou: {
            text: "Parlé dans la région du Kantō, autour de Tōkyō, mais ne fait pas partie du japonais standard. Le japonais standard peut employer un autre mot ou une autre forme.",
        },
        Kyoto: {
            text: "Parlé à Kyōto, connu pour son style doux et indirect. Le japonais standard peut employer un autre mot ou une autre forme.",
        },
        Kyuushuu: {
            text: "Parlé à Kyūshū, la grande île du sud. Le japonais standard peut employer un autre mot ou une autre forme.",
        },
        Nagano: {
            text: "Parlé dans la préfecture de Nagano, au centre du Japon. Le japonais standard peut employer un autre mot ou une autre forme.",
        },
        Osaka: {
            text: "Parlé à Ōsaka, c’est le plus connu des dialectes du Kansai. Le japonais standard peut employer un autre mot ou une autre forme.",
            example: "merci (Ōsaka)",
        },
        Ryuukyuu: {
            text: "Issu des langues ryūkyū d’Okinawa et des îles environnantes. Le japonais standard peut employer un autre mot.",
        },
        Touhoku: {
            text: "Parlé dans le Tōhoku, le nord-est de Honshū. Le japonais standard peut employer un autre mot ou une autre forme.",
        },
        Tosa: {
            text: "Parlé dans la préfecture de Kōchi (l’ancienne Tosa), sur Shikoku. Le japonais standard peut employer un autre mot ou une autre forme.",
        },
        Tsugaru: {
            text: "Parlé dans l’ouest de la préfecture d’Aomori, réputé difficile à comprendre. Le japonais standard peut employer un autre mot ou une autre forme.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Dit que quelque chose ne se produit pas ou n’est pas le cas : <jp>ない</jp> en style neutre, <jp>ません</jp> en style poli.",
            example: "ne pas manger",
        },
        Polite: {
            text: "La forme en -masu : radical du verbe + <jp>ます</jp>, le style poli pour les personnes que vous connaissez peu.",
            example: "manger (poli)",
        },
        Present: {
            text: "Le non-passé : habitudes, faits et futur. Le japonais n’a pas de temps futur distinct.",
        },
        Past: {
            text: "Ce qui s’est produit ou était le cas : <jp>た</jp> en style neutre, <jp>ました</jp> en style poli.",
            example: "avoir mangé",
        },
        TeForm: {
            text: "Relie des verbes et des propositions (« et ») et sert de base à de nombreuses tournures, comme les demandes avec <jp>ください</jp>.",
            example: "mangez, s’il vous plaît",
        },
        Potential: {
            text: "Dit que quelqu’un peut faire quelque chose. Ce qu’on peut faire est souvent marqué par <jp>が</jp>.",
            example: "pouvoir manger",
        },
        Passive: {
            text: "Dit que le sujet subit une action, souvent de façon fâcheuse. L’auteur de l’action est marqué par <jp>に</jp>.",
            example: "être mangé",
        },
        Causative: {
            text: "Dit que quelqu’un fait faire ou laisse faire quelque chose à quelqu’un d’autre.",
            example: "faire manger / laisser manger",
        },
        PotentialOrPassive: {
            text: "Les verbes ichidan emploient <jp>られる</jp> à la fois pour le potentiel et pour le passif ; le contexte indique lequel.",
            example: "pouvoir manger / être mangé",
        },
        CausativePassive: {
            text: "Dit que quelqu’un est obligé de faire quelque chose, généralement contre son gré.",
            example: "être obligé de manger",
        },
        Imperative: {
            text: "Ordre brusque. Il paraît impoli dans la conversation ; on l’entend dans les cris, sur les panneaux ou dans la bouche de supérieurs.",
            example: "Mange !",
        },
        Tai: {
            text: "Radical du verbe + <jp>たい</jp> : dit ce que le locuteur veut faire. Il se conjugue comme un adjectif en -i.",
            example: "vouloir manger",
        },
        TeIru: {
            text: "Forme en -te + <jp>いる</jp> : une action en cours, ou un état qui résulte d’un changement. À l’oral familier, le <jp>い</jp> tombe souvent.",
            example: "être en train de manger",
        },
        TeAru: {
            text: "Forme en -te + <jp>ある</jp> : quelque chose a été fait exprès et le résultat est toujours là.",
            example: "la fenêtre a été ouverte",
        },
        TeMiru: {
            text: "Forme en -te + <jp>みる</jp> : essayer quelque chose pour voir ce que ça donne.",
            example: "manger pour voir",
        },
        TeOku: {
            text: "Forme en -te + <jp>おく</jp> : faire quelque chose à l’avance, ou le laisser en l’état.",
            example: "manger à l’avance",
        },
        Tara: {
            text: "« Si » ou « quand » : ce qui suit se produit après. C’est la forme conditionnelle la plus employée.",
            example: "si je mange / quand j’aurai mangé",
        },
        Tari: {
            text: "Énumère des actions à titre d’exemple (« entre autres … et … »), généralement terminée par <jp>する</jp>.",
            example: "manger, entre autres",
        },
        Ba: {
            text: "Une forme conditionnelle : « si cela se produit, alors … ». Elle met souvent l’accent sur la condition elle-même.",
            example: "si je mange",
        },
        Shimau: {
            text: "Forme en -te + <jp>しまう</jp> : finir de faire quelque chose, ou le faire par mégarde et le regretter.",
            example: "finir par manger",
        },
        Chau: {
            text: "Forme courte et familière de la forme en -te + <jp>しまう</jp>, surtout à l’oral.",
            example: "finir par manger",
        },
        Naide: {
            text: "« Sans faire » ou, avec <jp>ください</jp>, un « ne … pas, s’il vous plaît » poli.",
            example: "ne mangez pas, s’il vous plaît",
        },
        Volitional: {
            text: "« Faisons … » ou « je vais … » : propose de faire quelque chose ensemble ou exprime une décision.",
            example: "mangeons",
        },
        Nasai: {
            text: "Radical du verbe + <jp>なさい</jp> : un ordre ferme mais pas impoli, comme en donnent les parents et les enseignants.",
            example: "Mange !",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "Un des mots fréquents du japonais, présent dans les listes de mots courants. À apprendre tôt.",
        },
        wasei: {
            text: "Wasei-eigo : créé au Japon à partir de mots étrangers. Il ressemble à un mot d’emprunt, mais à l’étranger, on ne le connaît pas forcément.",
            example: "employé de bureau (« salary man »)",
        },
    },
} satisfies PartialDict<typeof en>;
