import type en from "../en/topics";
import type { PartialDict } from "../types";

export default {
    title: "Temas",
    intro: "Listas de palavras para explorar: o vocabulário de cada nível do JLPT, ditados e onomatopeias, e as três formas do keigo, a linguagem de respeito do japonês.",
    metaTitle: "Listas de palavras em japonês por tema",
    metaDescription: "Explore o vocabulário japonês por nível do JLPT ou por tema: expressões de quatro kanji, provérbios, expressões idiomáticas, onomatopeias e keigo.",
    back: "Temas",
    groups: {
        jlpt: "Vocabulário do JLPT",
        sayings: "Ditados e onomatopeias",
        keigo: "Keigo (linguagem de respeito)",
    },
    openSearch: "Abrir como pesquisa",
    exampleLabel: "Exemplo",
    more: "Mais temas",
    topWords: "Aparecem as 1000 palavras mais comuns.",
    notFound: "Este tema não existe.",
    allTopics: "Todos os temas",
    showTopic: "Todas as palavras: {{name}}",
    items: {
        "jlpt-n5": {
            name: "Vocabulário do JLPT N5",
            short: "As primeiras palavras: o básico do dia a dia.",
            intro: "Palavras do nível mais fácil do Exame de Proficiência em Língua Japonesa (JLPT): números, família, comida e os verbos do cotidiano. Um bom começo depois que você aprende hiragana e katakana.",
        },
        "jlpt-n4": {
            name: "Vocabulário do JLPT N4",
            short: "Palavras básicas para conversas simples.",
            intro: "Palavras do segundo nível mais fácil do JLPT. Com elas, você fala do seu dia, dos seus planos e sentimentos em frases simples.",
        },
        "jlpt-n3": {
            name: "Vocabulário do JLPT N3",
            short: "Japonês do dia a dia, entre o básico e a fluência.",
            intro: "Palavras do nível intermediário do JLPT. Com elas, você acompanha textos e conversas do cotidiano em velocidade natural, com alguma ajuda.",
        },
        "jlpt-n2": {
            name: "Vocabulário do JLPT N2",
            short: "Palavras para notícias, trabalho e textos mais longos.",
            intro: "Palavras do segundo nível mais alto do JLPT. Elas abrangem notícias, trabalho e textos mais longos sobre assuntos gerais.",
        },
        "jlpt-n1": {
            name: "Vocabulário do JLPT N1",
            short: "Vocabulário avançado e formal.",
            intro: "Palavras do nível mais alto do JLPT: vocabulário abstrato, formal e literário para textos complexos.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Expressões de quatro kanji.",
            intro: "Compostos de quatro kanji, muitos vindos de clássicos chineses. Eles condensam uma lição ou uma imagem em quatro caracteres e são populares em discursos, na escola e em programas de perguntas e respostas.",
            example: "encontro único na vida",
        },
        onomatopoeia: {
            name: "Onomatopeias",
            short: "Palavras que imitam sons, estados e sentimentos.",
            intro: "O japonês tem milhares de palavras que imitam sons (giongo) e palavras que mostram como algo parece ou se sente (gitaigo). Elas estão por toda parte na fala e nos mangás, muitas vezes com と ou する.",
            example: "brilhante, cintilante",
        },
        proverbs: {
            name: "Provérbios",
            short: "Ditados que transmitem uma lição de vida.",
            intro: "Kotowaza são ditados com uma lição, geralmente citados por inteiro. Muitos têm um equivalente em português, mas com imagens japonesas.",
            example: "Até os macacos caem das árvores.",
        },
        idioms: {
            name: "Expressões idiomáticas",
            short: "Frases cujo sentido não está nas palavras.",
            intro: "Kan'yōku são expressões fixas, muitas vezes com partes do corpo ou animais, cujo sentido não dá para deduzir palavra por palavra. Aprenda-as como um todo.",
            example: "tão ocupado que aceitaria até a ajuda de um gato",
        },
        sonkeigo: {
            name: "Sonkeigo (linguagem honorífica)",
            short: "Palavras que elevam quem pratica a ação.",
            intro: "As palavras honoríficas elevam quem faz a ação, geralmente a pessoa com quem você fala ou alguém de posição mais alta. Nunca as use para falar de si mesmo.",
            example: "vir, ir, estar (honorífico)",
        },
        kenjougo: {
            name: "Kenjōgo (linguagem humilde)",
            short: "Palavras com que você se rebaixa por respeito.",
            intro: "As palavras humildes rebaixam você ou o seu grupo para mostrar respeito à outra pessoa. Use-as só para as suas próprias ações.",
            example: "ir, vir (humilde)",
        },
        teineigo: {
            name: "Teineigo (linguagem polida)",
            short: "O estilo polido para quem você não conhece bem.",
            intro: "Palavras e formas polidas, como です e ます, para desconhecidos, clientes e colegas. A escolha segura quando você está em dúvida.",
            example: "há, é (polido)",
        },
    },
} satisfies PartialDict<typeof en>;
