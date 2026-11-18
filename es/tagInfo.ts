import type en from "../en/tagInfo";
import type { PartialDict } from "../types";

export default {
    searchTag: "Mostrar todas las palabras con #{{tag}}",
    teForm: "Forma te",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "Adverbio que puede llevar と; suelen ser palabras de sonido o de modo. Con と describe cómo se hace algo.",
            example: "reír alegremente",
        },
        Auxilary: {
            text: "Palabra que se une a otra y le añade gramática, como el tiempo, la cortesía o la negación. No puede ir sola.",
        },
        AuxilaryAdj: {
            text: "Terminación que se une a un verbo o adjetivo y se conjuga como un adjetivo -i.",
            example: "querer comer",
        },
        AuxilaryVerb: {
            text: "Verbo que se une a otro verbo, normalmente a su forma te, y añade un sentido como intentar, terminar o hacer algo de antemano.",
            example: "probar a comer",
        },
        Counter: {
            text: "Va detrás de un número y cuenta un tipo de cosa, como objetos planos, máquinas o personas. En japonés hace falta uno para contar casi cualquier cosa.",
            example: "tres hojas de papel",
        },
        Expr: {
            text: "Frase hecha de varias palabras que se aprende como un todo.",
            example: "muchas gracias",
        },
        Particle: {
            text: "Palabra corta que va detrás de un sustantivo o una frase y marca su función en la oración, como sujeto, objeto, lugar o dirección.",
            example: "ir a la escuela",
        },
        Prefix: {
            text: "Va delante de otra palabra y cambia o amplía su significado. No se usa solo.",
            example: "dinero (cortés)",
        },
        Suffix: {
            text: "Se une al final de otra palabra, por ejemplo un nombre de persona o un sustantivo. No se usa solo.",
            example: "Sr./Sra. Tanaka",
        },
    },

    noun: {
        Adverbial: {
            text: "Sustantivo que también puede usarse como adverbio, sin partícula.",
            example: "Ahora estoy ocupado.",
        },
        Temporal: {
            text: "Sustantivo que indica un momento. A menudo se usa sin partícula, como un adverbio.",
            example: "Iré mañana.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "Sustantivo o verbo que va justo delante de un sustantivo para describirlo, sin な ni の.",
        },
        Keiyoushi: {
            text: "Termina en <jp>い</jp> y se conjuga por sí mismo: quita la <jp>い</jp> para terminaciones como <jp>くない</jp> y <jp>かった</jp>. Puede ir justo delante de un sustantivo.",
        },
        KeiyoushiYoiIi: {
            text: "El adjetivo <jp>いい</jp> (bueno). Se conjuga a partir de su forma antigua <jp>よい</jp>: <jp>よくない</jp>, <jp>よかった</jp>, nunca <jp>いくない</jp>.",
        },
        Ku: {
            text: "Adjetivo clásico del tipo ku: <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. Hoy sobrevive en frases hechas y en el estilo literario.",
        },
        Na: {
            text: "Necesita <jp>な</jp> delante de un sustantivo y se conjuga como un sustantivo con <jp>だ</jp>. Algunos terminan en <jp>い</jp> de todos modos, como <jp>きれい</jp>.",
            example: "un pueblo tranquilo",
        },
        Nari: {
            text: "La forma clásica y formal de un adjetivo -na. Termina en <jp>なる</jp> delante de sustantivos y aparece en el estilo literario.",
        },
        No: {
            text: "Sustantivo que describe a otro sustantivo cuando le sigue <jp>の</jp>.",
            example: "una persona enferma",
        },
        PreNoun: {
            text: "Solo va justo delante de un sustantivo y nunca se conjuga.",
            example: "este libro",
        },
        Shiku: {
            text: "Adjetivo clásico del tipo shiku: <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. Hoy sobrevive en frases hechas y en el estilo literario.",
        },
        Taru: {
            text: "Adjetivo literario: <jp>たる</jp> delante de un sustantivo, <jp>と</jp> delante de un verbo.",
        },
    },

    verb: {
        Transitive: {
            text: "Actúa sobre un objeto directo, normalmente marcado con <jp>を</jp>. Muchos tienen una pareja intransitiva sin objeto.",
            example: "abrir la ventana",
        },
        Intransitive: {
            text: "No lleva objeto directo: el sujeto, normalmente marcado con <jp>が</jp>, realiza la acción o la experimenta.",
            example: "la ventana se abre",
        },
        Ichidan: {
            text: "Termina en -iru o -eru y conserva su raíz: quita <jp>る</jp> y añade la terminación. No todos los verbos en -iru/-eru lo son: <jp>帰る</jp> es un verbo godan.",
        },
        IchidanZuru: {
            text: "Verbo literario en <jp>ずる</jp>. Se conjuga como el verbo ichidan en <jp>じる</jp> que lo sustituyó.",
        },
        IchidanKureru: {
            text: "El verbo <jp>くれる</jp> (darme o darnos). Su imperativo es <jp>くれ</jp>, no <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "El verbo irregular <jp>来る</jp> (venir). Su raíz cambia: <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "El último kana cambia de vocal dentro de su fila antes de las terminaciones: <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "Tipo de verbo clásico. La mayoría de estos verbos son verbos godan en el japonés moderno.",
        },
        Nidan: {
            text: "Tipo de verbo clásico con dos raíces (superior o inferior). La mayoría de estos verbos son verbos ichidan en el japonés moderno.",
        },
        Irregular: {
            text: "Se conjuga de forma irregular; consulta la tabla de conjugación.",
        },
    },

    godanEnding: {
        tte: {
            text: "Los verbos en <jp>う</jp>, <jp>つ</jp> y <jp>る</jp> hacen la forma te y la forma ta con <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "Los verbos en <jp>む</jp>, <jp>ぶ</jp> y <jp>ぬ</jp> hacen la forma te y la forma ta con <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "Los verbos en <jp>く</jp> hacen la forma te y la forma ta con <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "Los verbos en <jp>ぐ</jp> hacen la forma te y la forma ta con <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "Los verbos en <jp>す</jp> hacen la forma te y la forma ta con <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Cuidado: termina en <jp>る</jp> como un verbo ichidan, pero se conjuga como godan: <jp>ない</jp> va detrás de <jp>ら</jp>.",
        },
        Aru: {
            text: "Verbos honoríficos como <jp>いらっしゃる</jp> y <jp>なさる</jp>: la forma masu y el imperativo terminan en <jp>い</jp> en lugar de <jp>り</jp>.",
        },
        USpecial: {
            text: "Verbos como <jp>問う</jp> y <jp>請う</jp> hacen la forma te con <jp>うて</jp>, no con <jp>って</jp>.",
        },
        Uru: {
            text: "El verbo literario <jp>得る</jp> leído <jp>うる</jp>; fuera de la forma de diccionario se conjuga como <jp>える</jp>.",
        },
        RuIrreg: {
            text: "El verbo <jp>ある</jp> (existir, haber): su negativa es <jp>ない</jp>, no <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "<jp>行く</jp> es el único verbo en <jp>く</jp> cuya forma te es <jp>行って</jp> en lugar de <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "Verbo clásico en <jp>ぬ</jp>, como <jp>死ぬ</jp> en textos antiguos. Hoy solo se usa en algunas frases hechas.",
        },
        Ru: {
            text: "Verbo irregular clásico como <jp>あり</jp> (estar, existir) o <jp>をり</jp>, cuya forma básica termina en <jp>り</jp>. Hoy solo aparece en el estilo literario.",
        },
        NounOrAuxSuru: {
            text: "Sustantivo que se convierte en verbo con <jp>する</jp>.",
        },
        Suru: {
            text: "El verbo <jp>する</jp> (hacer) o un compuesto con él. Es irregular: <jp>しない</jp>, <jp>します</jp> y <jp>できる</jp> como potencial.",
        },
        SuruSpecial: {
            text: "Compuesto de un solo kanji con <jp>する</jp>. En parte se conjuga como un verbo godan en <jp>す</jp>.",
        },
        Su: {
            text: "La forma antigua <jp>す</jp> de <jp>する</jp>. Hoy solo aparece en el estilo literario.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "Forma abreviada de una palabra más larga. El japonés suele acortar los préstamos a sus primeros kana.",
            example: "ordenador personal",
        },
        Archaism: {
            text: "Palabra o uso antiguo. Aparece en textos clásicos, dramas históricos o frases hechas, pero no en el habla actual.",
        },
        ChildrensLanguage: {
            text: "Lo usan los niños pequeños o se usa al hablar con ellos.",
            example: "perrito",
        },
        Colloquialism: {
            text: "Lenguaje informal y hablado. Bien entre amigos; por escrito o al hablar con cortesía, es mejor otra palabra.",
        },
        DatedTerm: {
            text: "Suena anticuado. La gente mayor aún puede usarlo; los jóvenes, rara vez.",
        },
        Derogatory: {
            text: "Menosprecia a la persona o la cosa. Puede ofender.",
        },
        Euphemistic: {
            text: "Una forma más suave e indirecta de decir algo desagradable o delicado.",
        },
        FamiliarLanguage: {
            text: "Para la familia, los amigos y las personas de menor rango. Con cualquier otra persona puede sonar grosero.",
        },
        FemaleTermOrLanguage: {
            text: "Tradicionalmente lo usan las mujeres. Hoy es menos común y puede sonar suave o anticuado.",
        },
        HonorificLanguage: {
            text: "Sonkeigo: eleva a la persona que realiza la acción, normalmente el oyente o alguien de mayor rango. Nunca lo uses para ti.",
            example: "el profesor viene",
        },
        HumbleLanguage: {
            text: "Kenjōgo: te rebaja a ti o a tu grupo para mostrar respeto a la otra persona. Úsalo solo para tus propias acciones.",
            example: "voy (humilde)",
        },
        IdiomaticExpression: {
            text: "Su significado no se deduce de sus palabras; apréndela como un todo.",
        },
        InternetSlang: {
            text: "Jerga de internet y de las redes sociales. Pasa de moda rápido.",
        },
        JocularHumorousTerm: {
            text: "Se usa en broma o de forma juguetona, no en un contexto serio.",
        },
        LiteraryOrFormalTerm: {
            text: "Aparece en textos escritos y en el habla formal, por ejemplo en noticias, discursos o literatura. En una conversación suena rígido.",
        },
        MaleTermOrLanguage: {
            text: "Tradicionalmente lo usan los hombres. En boca de otras personas puede sonar brusco o forzado.",
        },
        MangaSlang: {
            text: "Aparece sobre todo en manga y anime, rara vez en la vida real.",
        },
        ObscureTerm: {
            text: "Poco conocido, incluso para muchos hablantes nativos.",
        },
        ObsoleteTerm: {
            text: "Ya no se usa. Solo lo encontrarás en textos antiguos.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Imita un sonido (giongo) o expresa un estado o un sentimiento (gitaigo). El japonés usa muchas, a menudo con <jp>と</jp> o <jp>する</jp>.",
            example: "centellear",
        },
        PoeticalTerm: {
            text: "Se usa en poemas y letras de canciones, rara vez en la conversación.",
        },
        PoliteLanguage: {
            text: "Teineigo: el estilo cortés con <jp>です</jp> y <jp>ます</jp>, que se usa con personas a las que no conoces bien.",
            example: "hay, es (cortés)",
        },
        Proverb: {
            text: "Refrán que transmite una enseñanza; normalmente se cita entero.",
        },
        Rare: {
            text: "Se usa poco. Para este significado es más común otra palabra.",
        },
        RudeOrXRatedTerm: {
            text: "Grosero o sexual. Evítalo salvo que conozcas bien la situación.",
        },
        Sensitive: {
            text: "Toca un tema delicado. Úsalo con cuidado o puede herir a la gente.",
        },
        Slang: {
            text: "Palabras informales de un grupo o una generación. Bien entre amigos, fuera de lugar en situaciones formales.",
        },
        UsuallyWrittenInKana: {
            text: "Tiene escritura en kanji, pero normalmente se escribe en kana. Aprende la forma en kana.",
        },
        VulgarExpressionOrWord: {
            text: "Basto o vulgar. Puede ofender.",
        },
        Yojijukugo: {
            text: "Compuesto de cuatro kanji, a menudo procedente de los clásicos chinos. Muchos son frases hechas con una moraleja o una enseñanza.",
            example: "un encuentro único en la vida",
        },
    },

    dialect: {
        Brazilian: {
            text: "Lo usa la comunidad japonesa de Brasil, mezclado con portugués. En japonés estándar puede usarse otra palabra.",
        },
        Hokkaido: {
            text: "Se habla en Hokkaidō, la isla principal más al norte. En japonés estándar puede usarse otra palabra u otra forma.",
        },
        Kansai: {
            text: "Se habla en la región de Kansai, en torno a Osaka, Kioto y Kobe, y se oye a menudo en la comedia. En japonés estándar puede usarse otra palabra u otra forma.",
            example: "no está bien (estándar: だめ)",
        },
        Kantou: {
            text: "Se habla en la región de Kantō, en torno a Tokio, pero no forma parte del japonés estándar. En japonés estándar puede usarse otra palabra u otra forma.",
        },
        Kyoto: {
            text: "Se habla en Kioto y es conocido por su estilo suave e indirecto. En japonés estándar puede usarse otra palabra u otra forma.",
        },
        Kyuushuu: {
            text: "Se habla en Kyūshū, la isla principal del sur. En japonés estándar puede usarse otra palabra u otra forma.",
        },
        Nagano: {
            text: "Se habla en la prefectura de Nagano, en el centro de Japón. En japonés estándar puede usarse otra palabra u otra forma.",
        },
        Osaka: {
            text: "Se habla en Osaka y es el dialecto de Kansai más conocido. En japonés estándar puede usarse otra palabra u otra forma.",
            example: "gracias (Osaka)",
        },
        Ryuukyuu: {
            text: "Procede de las lenguas de Ryūkyū, habladas en Okinawa y las islas de alrededor. En japonés estándar puede usarse otra palabra.",
        },
        Touhoku: {
            text: "Se habla en Tōhoku, el noreste de Honshū. En japonés estándar puede usarse otra palabra u otra forma.",
        },
        Tosa: {
            text: "Se habla en la prefectura de Kōchi (la antigua Tosa), en Shikoku. En japonés estándar puede usarse otra palabra u otra forma.",
        },
        Tsugaru: {
            text: "Se habla en el oeste de la prefectura de Aomori y tiene fama de ser difícil de entender. En japonés estándar puede usarse otra palabra u otra forma.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Dice que algo no ocurre o no es así: <jp>ない</jp> en el habla llana, <jp>ません</jp> en la cortés.",
            example: "no comer",
        },
        Polite: {
            text: "La forma masu: raíz del verbo + <jp>ます</jp>, el estilo cortés para personas a las que no conoces bien.",
            example: "comer (cortés)",
        },
        Present: {
            text: "El no pasado: hábitos, hechos y el futuro. El japonés no tiene un tiempo futuro propio.",
        },
        Past: {
            text: "Algo que ocurrió o que fue así: <jp>た</jp> en el habla llana, <jp>ました</jp> en la cortés.",
            example: "comí",
        },
        TeForm: {
            text: "Une verbos y oraciones («y») y es la base de muchas estructuras, como las peticiones con <jp>ください</jp>.",
            example: "come, por favor",
        },
        Potential: {
            text: "Dice que alguien puede hacer algo. Lo que se puede hacer suele marcarse con <jp>が</jp>.",
            example: "poder comer",
        },
        Passive: {
            text: "Dice que al sujeto se le hace algo, a menudo de forma no deseada. Quien realiza la acción se marca con <jp>に</jp>.",
            example: "ser comido",
        },
        Causative: {
            text: "Dice que alguien hace que otra persona haga algo o se lo permite.",
            example: "hacer comer / dejar comer",
        },
        PotentialOrPassive: {
            text: "Los verbos ichidan usan <jp>られる</jp> tanto para el potencial como para la pasiva; el contexto indica cuál es.",
            example: "poder comer / ser comido",
        },
        CausativePassive: {
            text: "Dice que a alguien le obligan a hacer algo, normalmente contra su voluntad.",
            example: "ser obligado a comer",
        },
        Imperative: {
            text: "Una orden brusca. En una conversación suena grosera; la oirás en gritos, carteles o de boca de superiores.",
            example: "¡Come!",
        },
        Tai: {
            text: "Raíz del verbo + <jp>たい</jp>: dice lo que quiere hacer el hablante. Se conjuga como un adjetivo -i.",
            example: "querer comer",
        },
        TeIru: {
            text: "Forma te + <jp>いる</jp>: una acción en curso o un estado tras un cambio. En el habla informal la <jp>い</jp> suele caer.",
            example: "estar comiendo",
        },
        TeAru: {
            text: "Forma te + <jp>ある</jp>: algo se hizo a propósito y el resultado sigue ahí.",
            example: "han dejado la ventana abierta",
        },
        TeMiru: {
            text: "Forma te + <jp>みる</jp>: intentar algo para ver qué tal.",
            example: "probar a comer",
        },
        TeOku: {
            text: "Forma te + <jp>おく</jp>: hacer algo de antemano o dejarlo así.",
            example: "comer de antemano",
        },
        Tara: {
            text: "«Si» o «cuando»: lo que sigue ocurre después de esto. Es el condicional más usado.",
            example: "cuando coma / si como",
        },
        Tari: {
            text: "Enumera acciones como ejemplos («cosas como … y …»), normalmente cerrada con <jp>する</jp>.",
            example: "comer, entre otras cosas",
        },
        Ba: {
            text: "Un condicional: «si pasa esto, entonces…». A menudo pone el énfasis en la propia condición.",
            example: "si como",
        },
        Shimau: {
            text: "Forma te + <jp>しまう</jp>: terminar de hacer algo, o hacerlo sin querer y lamentarlo.",
            example: "acabar comiendo",
        },
        Chau: {
            text: "Forma corta e informal de forma te + <jp>しまう</jp>, sobre todo hablada.",
            example: "acabar comiendo",
        },
        Naide: {
            text: "«Sin hacer», o con <jp>ください</jp>, un «por favor, no» cortés.",
            example: "no comas, por favor",
        },
        Volitional: {
            text: "«Vamos a…» o «voy a…»: propone hacer algo juntos o expresa una decisión.",
            example: "comamos",
        },
        Nasai: {
            text: "Raíz del verbo + <jp>なさい</jp>: una orden firme pero no grosera, como la de padres y maestros.",
            example: "¡Come!",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "Una de las palabras frecuentes del japonés, incluida en las listas de palabras comunes. Conviene aprenderla pronto.",
        },
        wasei: {
            text: "Wasei-eigo: creado en Japón a partir de palabras extranjeras. Parece un préstamo, pero fuera de Japón quizá no se entienda.",
            example: "oficinista («salary man»)",
        },
    },
} satisfies PartialDict<typeof en>;
