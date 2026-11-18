import type en from "../en/tagInfo";
import type { PartialDict } from "../types";

export default {
    searchTag: "Mostrar todas as palavras com #{{tag}}",
    teForm: "Forma te",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "Advérbio que pode receber と, geralmente uma palavra de som ou de modo. Com と, ele descreve como algo é feito.",
            example: "rir alegremente",
        },
        Auxilary: {
            text: "Palavra que se junta a outra e acrescenta gramática, como tempo, polidez ou negação. Não pode ser usada sozinha.",
        },
        AuxilaryAdj: {
            text: "Terminação que se junta a um verbo ou adjetivo e se conjuga como um adjetivo-i.",
            example: "querer comer",
        },
        AuxilaryVerb: {
            text: "Verbo que se junta a outro verbo, geralmente à forma te dele, e acrescenta um sentido como tentar, terminar ou fazer algo de antemão.",
            example: "experimentar comer",
        },
        Counter: {
            text: "Vem depois de um número e conta um tipo de coisa, como objetos planos, máquinas ou pessoas. Em japonês, é preciso um para contar quase tudo.",
            example: "três folhas de papel",
        },
        Expr: {
            text: "Expressão fixa de várias palavras, aprendida como um todo.",
            example: "muito obrigado",
        },
        Particle: {
            text: "Palavra curta depois de um substantivo ou de uma frase que marca a função dele na oração, como sujeito, objeto, lugar ou direção.",
            example: "ir à escola",
        },
        Prefix: {
            text: "Fica antes de outra palavra e muda ou complementa o sentido dela. Não é usado sozinho.",
            example: "dinheiro (polido)",
        },
        Suffix: {
            text: "Junta-se ao fim de outra palavra, por exemplo um nome de pessoa ou um substantivo. Não é usado sozinho.",
            example: "Sr./Sra. Tanaka",
        },
    },

    noun: {
        Adverbial: {
            text: "Substantivo que também pode ser usado como advérbio, sem partícula.",
            example: "Agora estou ocupado.",
        },
        Temporal: {
            text: "Substantivo que indica um momento no tempo. Muitas vezes é usado sem partícula, como um advérbio.",
            example: "Vou amanhã.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "Substantivo ou verbo que fica logo antes de um substantivo para qualificá-lo, sem な nem の.",
        },
        Keiyoushi: {
            text: "Termina em <jp>い</jp> e se conjuga sozinho: tire o <jp>い</jp> para terminações como <jp>くない</jp> e <jp>かった</jp>. Pode ficar logo antes de um substantivo.",
        },
        KeiyoushiYoiIi: {
            text: "O adjetivo <jp>いい</jp> (bom). Ele se conjuga a partir da forma antiga <jp>よい</jp>: <jp>よくない</jp>, <jp>よかった</jp>, nunca <jp>いくない</jp>.",
        },
        Ku: {
            text: "Adjetivo clássico do tipo ku: <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. Hoje ele sobrevive em expressões fixas e no estilo literário.",
        },
        Na: {
            text: "Precisa de <jp>な</jp> antes de um substantivo e se conjuga como um substantivo com <jp>だ</jp>. Alguns terminam em <jp>い</jp> mesmo assim, como <jp>きれい</jp>.",
            example: "uma cidade tranquila",
        },
        Nari: {
            text: "A forma clássica e formal de um adjetivo-na. Termina em <jp>なる</jp> antes de substantivos e aparece no estilo literário.",
        },
        No: {
            text: "Substantivo que qualifica outro substantivo quando é seguido de <jp>の</jp>.",
            example: "uma pessoa doente",
        },
        PreNoun: {
            text: "Só fica logo antes de um substantivo e nunca se conjuga.",
            example: "este livro",
        },
        Shiku: {
            text: "Adjetivo clássico do tipo shiku: <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. Hoje ele sobrevive em expressões fixas e no estilo literário.",
        },
        Taru: {
            text: "Adjetivo literário: <jp>たる</jp> antes de um substantivo, <jp>と</jp> antes de um verbo.",
        },
    },

    verb: {
        Transitive: {
            text: "Age sobre um objeto direto, geralmente marcado com <jp>を</jp>. Muitos têm um par intransitivo sem objeto.",
            example: "abrir a janela",
        },
        Intransitive: {
            text: "Não tem objeto direto: o sujeito, geralmente marcado com <jp>が</jp>, faz a ação ou passa por ela.",
            example: "a janela se abre",
        },
        Ichidan: {
            text: "Termina em -iru ou -eru e mantém o radical: tire o <jp>る</jp> e acrescente a terminação. Nem todo verbo em -iru/-eru é ichidan: <jp>帰る</jp> é um verbo godan.",
        },
        IchidanZuru: {
            text: "Verbo literário em <jp>ずる</jp>. Ele se conjuga como o verbo ichidan em <jp>じる</jp> que o substituiu.",
        },
        IchidanKureru: {
            text: "O verbo <jp>くれる</jp> (dar a mim ou a nós). O imperativo dele é <jp>くれ</jp>, não <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "O verbo irregular <jp>来る</jp> (vir). O radical muda: <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "O último kana muda de vogal dentro da sua linha antes das terminações: <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "Tipo de verbo clássico. No japonês moderno, a maioria desses verbos é godan.",
        },
        Nidan: {
            text: "Tipo de verbo clássico com dois radicais (superior ou inferior). No japonês moderno, a maioria desses verbos é ichidan.",
        },
        Irregular: {
            text: "Tem conjugação irregular; confira a tabela de conjugação.",
        },
    },

    godanEnding: {
        tte: {
            text: "Verbos em <jp>う</jp>, <jp>つ</jp> e <jp>る</jp> fazem a forma te e a forma ta com <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "Verbos em <jp>む</jp>, <jp>ぶ</jp> e <jp>ぬ</jp> fazem a forma te e a forma ta com <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "Verbos em <jp>く</jp> fazem a forma te e a forma ta com <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "Verbos em <jp>ぐ</jp> fazem a forma te e a forma ta com <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "Verbos em <jp>す</jp> fazem a forma te e a forma ta com <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Atenção: termina em <jp>る</jp> como um verbo ichidan, mas se conjuga como godan: <jp>ない</jp> vem depois de <jp>ら</jp>.",
        },
        Aru: {
            text: "Verbos honoríficos como <jp>いらっしゃる</jp> e <jp>なさる</jp>: a forma masu e o imperativo terminam em <jp>い</jp> em vez de <jp>り</jp>.",
        },
        USpecial: {
            text: "Verbos como <jp>問う</jp> e <jp>請う</jp> fazem a forma te com <jp>うて</jp>, não com <jp>って</jp>.",
        },
        Uru: {
            text: "O verbo literário <jp>得る</jp> lido como <jp>うる</jp>; fora da forma de dicionário, ele se conjuga como <jp>える</jp>.",
        },
        RuIrreg: {
            text: "O verbo <jp>ある</jp> (existir, haver): a negativa dele é <jp>ない</jp>, não <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "<jp>行く</jp> é o único verbo em <jp>く</jp> com a forma te <jp>行って</jp> em vez de <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "Verbo clássico em <jp>ぬ</jp>, como <jp>死ぬ</jp> em textos antigos. Hoje, só algumas expressões fixas o usam.",
        },
        Ru: {
            text: "Verbo irregular clássico como <jp>あり</jp> (existir, estar) ou <jp>をり</jp>, cuja forma básica termina em <jp>り</jp>. Hoje só aparece no estilo literário.",
        },
        NounOrAuxSuru: {
            text: "Substantivo que vira verbo com <jp>する</jp>.",
        },
        Suru: {
            text: "O verbo <jp>する</jp> (fazer) ou um composto com ele. É irregular: <jp>しない</jp>, <jp>します</jp> e <jp>できる</jp> como potencial.",
        },
        SuruSpecial: {
            text: "Composto de um só kanji com <jp>する</jp>. Em parte, ele se conjuga como um verbo godan em <jp>す</jp>.",
        },
        Su: {
            text: "A forma antiga <jp>す</jp> de <jp>する</jp>. Hoje só aparece no estilo literário.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "Forma encurtada de uma palavra mais longa. O japonês costuma reduzir estrangeirismos aos primeiros kana.",
            example: "computador pessoal",
        },
        Archaism: {
            text: "Palavra ou uso antigo. Aparece em textos clássicos, dramas históricos ou expressões fixas, mas não na fala de hoje.",
        },
        ChildrensLanguage: {
            text: "Usado por crianças pequenas ou ao falar com elas.",
            example: "au-au",
        },
        Colloquialism: {
            text: "Linguagem informal e falada. Tudo bem entre amigos; na escrita ou na fala polida, outra palavra cai melhor.",
        },
        DatedTerm: {
            text: "Soa antiquado. Pessoas mais velhas ainda podem usar; as mais jovens, raramente.",
        },
        Derogatory: {
            text: "Rebaixa a pessoa ou a coisa. Pode ofender.",
        },
        Euphemistic: {
            text: "Um jeito mais suave e indireto de dizer algo desagradável ou delicado.",
        },
        FamiliarLanguage: {
            text: "Para família, amigos e pessoas de status inferior. Com outras pessoas, pode soar rude.",
        },
        FemaleTermOrLanguage: {
            text: "Tradicionalmente usado por mulheres. Hoje é menos comum e pode soar suave ou antiquado.",
        },
        HonorificLanguage: {
            text: "Sonkeigo: eleva quem faz a ação, geralmente o ouvinte ou alguém de status superior. Nunca use para si mesmo.",
            example: "o professor vem",
        },
        HumbleLanguage: {
            text: "Kenjōgo: rebaixa você ou o seu grupo para mostrar respeito à outra pessoa. Use só para as suas próprias ações.",
            example: "eu vou (humilde)",
        },
        IdiomaticExpression: {
            text: "O sentido não se deduz das palavras; aprenda a expressão como um todo.",
        },
        InternetSlang: {
            text: "Gíria da internet e das redes sociais. Sai de moda rápido.",
        },
        JocularHumorousTerm: {
            text: "Usado de brincadeira, não em um contexto sério.",
        },
        LiteraryOrFormalTerm: {
            text: "Aparece na escrita e na fala formal, por exemplo em noticiários, discursos ou literatura. Soa rígido numa conversa.",
        },
        MaleTermOrLanguage: {
            text: "Tradicionalmente usado por homens. Na boca de outras pessoas, pode soar rude ou forçado.",
        },
        MangaSlang: {
            text: "Aparece sobretudo em mangá e anime, raramente na vida real.",
        },
        ObscureTerm: {
            text: "Pouco conhecido, até para muitos falantes nativos.",
        },
        ObsoleteTerm: {
            text: "Não é mais usado. Você só vai encontrá-lo em textos antigos.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Imita um som (giongo) ou mostra um estado ou sentimento (gitaigo). O japonês usa muitas dessas palavras, muitas vezes com <jp>と</jp> ou <jp>する</jp>.",
            example: "brilhar",
        },
        PoeticalTerm: {
            text: "Usado em poemas e letras de música, raramente na conversa.",
        },
        PoliteLanguage: {
            text: "Teineigo: o estilo polido com <jp>です</jp> e <jp>ます</jp>, usado com pessoas que você não conhece bem.",
            example: "há, é (polido)",
        },
        Proverb: {
            text: "Um ditado que transmite um ensinamento; geralmente é citado por inteiro.",
        },
        Rare: {
            text: "Pouco usado. Outra palavra é mais comum para este sentido.",
        },
        RudeOrXRatedTerm: {
            text: "Grosseiro ou sexual. Evite, a não ser que você conheça bem a situação.",
        },
        Sensitive: {
            text: "Toca em um tema delicado. Use com cuidado, ou pode magoar as pessoas.",
        },
        Slang: {
            text: "Palavras informais de um grupo ou de uma geração. Tudo bem entre amigos, fora de lugar em situações formais.",
        },
        UsuallyWrittenInKana: {
            text: "Tem grafia em kanji, mas normalmente é escrito em kana. Aprenda a forma em kana.",
        },
        VulgarExpressionOrWord: {
            text: "Chulo ou vulgar. Pode ofender.",
        },
        Yojijukugo: {
            text: "Composto de quatro kanji, muitas vezes vindo dos clássicos chineses. Muitos são expressões fixas com uma moral ou lição.",
            example: "um encontro único na vida",
        },
    },

    dialect: {
        Brazilian: {
            text: "Usado pela comunidade japonesa no Brasil, misturado com português. O japonês padrão pode usar outra palavra.",
        },
        Hokkaido: {
            text: "Falado em Hokkaido, a ilha principal mais ao norte. O japonês padrão pode usar outra palavra ou forma.",
        },
        Kansai: {
            text: "Falado na região de Kansai, em torno de Osaka, Kyoto e Kobe, e muito ouvido na comédia. O japonês padrão pode usar outra palavra ou forma.",
            example: "não dá (padrão: だめ)",
        },
        Kantou: {
            text: "Falado na região de Kantō, em torno de Tóquio, mas não faz parte do japonês padrão. O japonês padrão pode usar outra palavra ou forma.",
        },
        Kyoto: {
            text: "Falado em Kyoto, conhecido pelo estilo suave e indireto. O japonês padrão pode usar outra palavra ou forma.",
        },
        Kyuushuu: {
            text: "Falado em Kyūshū, a ilha principal do sul. O japonês padrão pode usar outra palavra ou forma.",
        },
        Nagano: {
            text: "Falado na província de Nagano, no centro do Japão. O japonês padrão pode usar outra palavra ou forma.",
        },
        Osaka: {
            text: "Falado em Osaka, é o dialeto de Kansai mais conhecido. O japonês padrão pode usar outra palavra ou forma.",
            example: "obrigado (Osaka)",
        },
        Ryuukyuu: {
            text: "Vem das línguas de Ryūkyū, faladas em Okinawa e nas ilhas ao redor. O japonês padrão pode usar outra palavra.",
        },
        Touhoku: {
            text: "Falado em Tōhoku, o nordeste de Honshū. O japonês padrão pode usar outra palavra ou forma.",
        },
        Tosa: {
            text: "Falado na província de Kōchi (antiga Tosa), em Shikoku. O japonês padrão pode usar outra palavra ou forma.",
        },
        Tsugaru: {
            text: "Falado no oeste da província de Aomori, conhecido por ser difícil de entender. O japonês padrão pode usar outra palavra ou forma.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Diz que algo não acontece ou não é assim: <jp>ない</jp> na fala simples, <jp>ません</jp> na fala polida.",
            example: "não comer",
        },
        Polite: {
            text: "A forma masu: radical do verbo + <jp>ます</jp>, o estilo polido para pessoas que você não conhece bem.",
            example: "comer (polido)",
        },
        Present: {
            text: "O não passado: hábitos, fatos e o futuro. O japonês não tem um tempo futuro separado.",
        },
        Past: {
            text: "Algo que aconteceu ou que foi assim: <jp>た</jp> na fala simples, <jp>ました</jp> na fala polida.",
            example: "comi",
        },
        TeForm: {
            text: "Liga verbos e orações (“e”) e é a base de muitas estruturas, como pedidos com <jp>ください</jp>.",
            example: "coma, por favor",
        },
        Potential: {
            text: "Diz que alguém consegue fazer algo. O que pode ser feito costuma ser marcado com <jp>が</jp>.",
            example: "conseguir comer",
        },
        Passive: {
            text: "Diz que algo é feito ao sujeito, muitas vezes de forma indesejada. Quem faz a ação é marcado com <jp>に</jp>.",
            example: "ser comido",
        },
        Causative: {
            text: "Diz que alguém faz ou deixa outra pessoa fazer algo.",
            example: "fazer comer / deixar comer",
        },
        PotentialOrPassive: {
            text: "Os verbos ichidan usam <jp>られる</jp> tanto para o potencial quanto para a passiva; o contexto mostra qual é.",
            example: "conseguir comer / ser comido",
        },
        CausativePassive: {
            text: "Diz que alguém é obrigado a fazer algo, geralmente contra a vontade.",
            example: "ser obrigado a comer",
        },
        Imperative: {
            text: "Uma ordem seca. Soa rude na conversa; você vai ouvi-la em gritos, placas ou da boca de superiores.",
            example: "Come!",
        },
        Tai: {
            text: "Radical do verbo + <jp>たい</jp>: diz o que quem fala quer fazer. Ele se conjuga como um adjetivo-i.",
            example: "querer comer",
        },
        TeIru: {
            text: "Forma te + <jp>いる</jp>: uma ação em andamento ou um estado depois de uma mudança. Na fala informal, o <jp>い</jp> costuma cair.",
            example: "estar comendo",
        },
        TeAru: {
            text: "Forma te + <jp>ある</jp>: algo foi feito de propósito e o resultado continua lá.",
            example: "deixaram a janela aberta",
        },
        TeMiru: {
            text: "Forma te + <jp>みる</jp>: tentar algo para ver como é.",
            example: "experimentar comer",
        },
        TeOku: {
            text: "Forma te + <jp>おく</jp>: fazer algo de antemão ou deixar assim.",
            example: "comer antes",
        },
        Tara: {
            text: "“Se” ou “quando”: o que vem depois acontece depois disso. É o condicional mais usado.",
            example: "quando/se eu comer",
        },
        Tari: {
            text: "Lista ações como exemplos (“coisas como … e …”), geralmente fechada com <jp>する</jp>.",
            example: "comer, entre outras coisas",
        },
        Ba: {
            text: "Um condicional: “se isso acontecer, então…”. Muitas vezes enfatiza a própria condição.",
            example: "se eu comer",
        },
        Shimau: {
            text: "Forma te + <jp>しまう</jp>: terminar de fazer algo, ou fazer sem querer e se arrepender.",
            example: "acabar comendo",
        },
        Chau: {
            text: "Forma curta e informal de forma te + <jp>しまう</jp>, usada sobretudo na fala.",
            example: "acabar comendo",
        },
        Naide: {
            text: "“Sem fazer”, ou, com <jp>ください</jp>, um “por favor, não” polido.",
            example: "por favor, não coma",
        },
        Volitional: {
            text: "“Vamos…” ou “vou…”: sugere fazer algo junto ou expressa uma decisão.",
            example: "vamos comer",
        },
        Nasai: {
            text: "Radical do verbo + <jp>なさい</jp>: uma ordem firme, mas não rude, como a de pais e professores.",
            example: "Coma!",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "Uma das palavras frequentes do japonês, presente nas listas de palavras comuns. Vale a pena aprender cedo.",
        },
        wasei: {
            text: "Wasei-eigo: criado no Japão a partir de palavras estrangeiras. Parece um estrangeirismo, mas no exterior talvez ninguém conheça.",
            example: "trabalhador de escritório (“salary man”)",
        },
    },
} satisfies PartialDict<typeof en>;
