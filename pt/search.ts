import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "Tentar de novo",
    cancel: "Cancelar",
    newTab: "(abre em uma nova aba)",

    meta: {
        page: "{{title}}, página {{page}}",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} em japonês",
            withTags: "Palavras japonesas com {{query}}",
            forWritten: "Palavras japonesas para {{query}}: {{list}}",
            meaning: "Significado de {{word}}",
            meaningOf: "Significado de {{word}}: {{meaning}}",
            queryMeaning: "Significado de {{query}}: {{word}}",
            queryMeaningOf: "Significado de {{query}}: {{word}}, {{meaning}}",
            translation: "{{query}} em japonês: {{word}}",
            description: "{{name}}: {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}}: {{text}}",
            leadLatin: "“{{query}}” em japonês: {{text}}",
            fallback: "Palavras japonesas para “{{query}}” no dicionário Jotoba.",
        },
        facts: {
            common: "Palavra comum.",
            commonJlpt: "Palavra comum, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "Kanji {{kanji}}: {{meaning}}, leituras e ordem dos traços",
            plain: "Kanji {{kanji}}: significado, leituras, ordem dos traços",
            item: "{{kanji}}: {{meanings}}",
            description: "{{kanji}}. Leituras, radicais, componentes e animações da ordem dos traços.",
        },
        sentences: {
            title: "Frases de exemplo em japonês com {{query}}",
            titleCount: {
                one: "{{count}} frase de exemplo em japonês com {{query}}",
                many: "{{count}} frases de exemplo em japonês com {{query}}",
                other: "{{count}} frases de exemplo em japonês com {{query}}",
            },
            description: "Frases de exemplo em japonês com {{query}}, com furigana e traduções.",
        },
        names: {
            title: "{{query}}: nomes japoneses e leituras",
            titleReading: "{{query}} ({{reading}}): nomes japoneses e leituras",
            description: "Nomes japoneses para {{query}}: leituras, transcrições e tipos de nome.",
        },
    },

    heading: {
        page: "página {{page}} de {{pages}}",
        separator: ", ",
        words: {
            some: "Palavras para <query></query>",
            count: {
                one: "{{count}} palavra para <query></query>",
                many: "{{count}} palavras para <query></query>",
                other: "{{count}} palavras para <query></query>",
            },
            none: "Nenhuma palavra para <query></query>",
        },
        kanji: {
            some: "Kanji para <query></query>",
            count: {
                one: "{{count}} kanji para <query></query>",
                many: "{{count}} kanji para <query></query>",
                other: "{{count}} kanji para <query></query>",
            },
            none: "Nenhum kanji para <query></query>",
            someIn: "Kanji em <query></query>",
            countIn: {
                one: "{{count}} kanji em <query></query>",
                many: "{{count}} kanji em <query></query>",
                other: "{{count}} kanji em <query></query>",
            },
            noneIn: "Nenhum kanji em <query></query>",
            single: "Kanji <query></query>: {{meaning}}",
            singlePlain: "Kanji <query></query>",
        },
        sentences: {
            some: "Frases para <query></query>",
            count: {
                one: "{{count}} frase para <query></query>",
                many: "{{count}} frases para <query></query>",
                other: "{{count}} frases para <query></query>",
            },
            none: "Nenhuma frase para <query></query>",
        },
        names: {
            some: "Nomes para <query></query>",
            count: {
                one: "{{count}} nome para <query></query>",
                many: "{{count}} nomes para <query></query>",
                other: "{{count}} nomes para <query></query>",
            },
            none: "Nenhum nome para <query></query>",
        },
    },

    announce: {
        otherWord: "Resultados para {{query}}",
        results: {
            one: "{{count}} resultado, página {{page}} de {{pages}}",
            many: "{{count}} resultados, página {{page}} de {{pages}}",
            other: "{{count}} resultados, página {{page}} de {{pages}}",
        },
        none: "Nenhum resultado",
        reloaded: "Recarregado online. {{results}}",
    },

    invalidSplits: "As divisões de palavras personalizadas eram inválidas e foram redefinidas",

    languageNotice: {
        text: "Resultados em {{language}} (do link)",
        switch: "Mudar para {{language}}",
    },

    status: {
        loading: "Carregando resultados…",
        jokes: {
            countingWords: "Contando palavras",
            drawingKanji: "Desenhando kanji",
            infinity: "Contando até o infinito",
            features: "Planejando novos recursos",
            sandwich: "Que tal pedir um sanduíche?",
            countToTen: "Conte até 10",
            wifiCable: "Procurando o cabo do Wi-Fi",
            pnp: "Provando que P=NP",
            misspelled: "Adicionando palavras escritas erado aleatóriamente",
            elevatorMusic: "TODO: inserir música de elevador",
            premium: "Nosso plano premium é mais rápido",
            ones: "Mantendo todos os uns e tirando todos os zeros",
            trapped: "Socorro, estou preso num carregamento!",
            messages: "Adicionando mensagens de carregamento inúteis",
            yoroshiku: "Traduzindo 「よろしく」",
        },
    },

    message: {
        offline: {
            title: "Você está offline",
            text: "Verifique sua conexão e tente de novo quando voltar a ficar online.",
        },
        invalid: {
            title: "O Joto não dá conta desta pesquisa",
            text: "Tente uma pesquisa mais curta ou diferente.",
        },
        error: {
            title: "Parece que o Joto está muito ocupado agora.",
            text: "Tente de novo daqui a pouco.",
        },
        empty: {
            title: "Não encontramos o que você estava procurando.",
            text: "Verifique a ortografia, tente uma pesquisa mais curta ou mude o tipo de pesquisa.",
            otherResults: "Mas há resultados em outras categorias:",
        },
        number: {
            title: "Saiba mais sobre este número",
            text: "Consulte nas outras categorias:",
            empty: "Não há entradas no dicionário para este número.",
        },
    },

    easterEgg: {
        title: "Te peguei!",
        highlight: "A gente sabia que você ia ficar curioso com o nosso nome!",
        text: "<strong>Jotoba</strong> não é uma palavra de verdade. Ela vem de <kotoba></kotoba>, com o “K” trocado por um “J” de “Japonês”.",
    },

    help: {
        otherCategory: "Pesquisar “{{query}}” em outra categoria:",
        otherResults: "Resultados em outras categorias",
        otherLanguages: "Há resultados em outros idiomas:",
        count: {
            exact: {
                one: ", {{count}} resultado",
                many: ", {{count}} resultados",
                other: ", {{count}} resultados",
            },
            moreThan: {
                one: ", mais de {{count}} resultado",
                many: ", mais de {{count}} resultados",
                other: ", mais de {{count}} resultados",
            },
            fewerThan: {
                one: ", menos de {{count}} resultado",
                many: ", menos de {{count}} resultados",
                other: ", menos de {{count}} resultados",
            },
        },
    },

    sentences: {
        hidden: "As traduções estão ocultas",
        showAll: "Mostrar todas as traduções",
        hideAll: "Ocultar todas as traduções",
    },

    words: {
        customSplits: "Divisão de palavras personalizada",
        resetSplits: "Redefinir",
        grammar: "Gramática",
        inflection: "Flexão",
        inflectionText: {
            one: "Detectamos a seguinte flexão em <query></query> (<lexeme></lexeme>):",
            many: "Detectamos as seguintes flexões em <query></query> (<lexeme></lexeme>):",
            other: "Detectamos as seguintes flexões em <query></query> (<lexeme></lexeme>):",
        },
        number: "Número",
        numberText: "<query></query> é <value></value>",
    },

    reader: {
        title: "Leitor de frases",
        words: "Palavras da frase",
        selected: "Selecionada: <word></word>",
        wrap: "Quebrar linhas",
        oneLine: "Uma linha",
        edit: "Editar divisão de palavras",
    },

    splitEditor: {
        title: "Editar divisão de palavras",
        help: "Toque entre dois caracteres para separar ou juntar palavras.",
        boundaries: "Divisões de palavras",
        boundary: "Divisão entre {{first}} e {{second}}",
        split: "Separado depois de {{character}}",
        joined: "{{first}} e {{second}} juntados",
        save: "Salvar",
        reset: "Voltar ao automático",
    },

    report: {
        question: "A ordem não é a que você esperava?",
        title: "Informar problema na ordem",
        sending: "Enviando…",
        send: "Enviar relato",
        alreadyReported: "Você já informou um problema nesta pesquisa. Envie outro só se houver algo diferente errado.",
        context: {
            search: "Pesquisa",
            page: "Página",
            word: "Palavra",
            position: "Posição {{position}}",
        },
        reason: {
            label: "O que está errado?",
            singleWord: "Para informar uma única palavra, use o menu ao lado dela.",
        },
        reasons: {
            listMissing: "Falta uma palavra que eu esperava, ou ela está muito embaixo",
            listOther: "Outro problema com a ordem",
            wordHigher: "Esta palavra deveria estar mais acima",
            wordLower: "Esta palavra deveria estar mais abaixo",
            wordNotRelevant: "Esta palavra não tem a ver com esta pesquisa",
            wordOther: "Outra coisa",
        },
        expected: {
            label: "Palavra esperada",
            subLabel: "Kanji, kana ou romaji",
        },
        comment: {
            label: "Comentário",
            optional: "Comentário (opcional)",
            placeholder: "O que você esperava ver?",
            charsLeft: {
                one: "Resta {{count}} caractere",
                many: "Restam {{count}} caracteres",
                other: "Restam {{count}} caracteres",
            },
        },
        errors: {
            reason: "Escolha o que está errado",
            expected: "Digite a palavra que você esperava",
            comment: "Descreva o que está errado",
        },
        privacy:
            "Não é preciso ter conta. O relato contém esta pesquisa, a ordem dos resultados nesta página e as suas respostas, e só é lido para melhorar a pesquisa. Não inclua dados pessoais. <link>Política de privacidade</link>",
        privacyLocal:
            "O relato contém esta pesquisa, a ordem dos resultados nesta página e as suas respostas, e só é lido para melhorar a pesquisa. Não inclua dados pessoais. <link>Política de privacidade</link>",
        outcome: {
            rateLimited: "Relatos demais em pouco tempo. Tente de novo em alguns minutos.",
            rejected: "Não foi possível enviar o relato. Confira suas respostas e tente de novo.",
            queueFull: "Há relatos demais esperando para ser enviados. Tente de novo mais tarde.",
            sent: "Obrigado, seu relato foi enviado",
            queued: "Relato salvo neste aparelho. Ele será enviado assim que for possível.",
            offline: "Você está offline. O relato será enviado assim que você voltar a ficar online.",
            duplicate: "Você já enviou este relato",
        },
    },

    details: {
        tabs: {
            word: "Palavra",
            kanji: "Kanji",
            sentences: "Frases",
            collocations: "Colocações",
            conjugations: "Conjugações",
            words: "Palavras",
        },
        wordSections: "Seções da palavra",
        sentenceSections: "Seções da frase",
        editInJmdict: "Editar no JMDict",
        conjugationsOf: "Conjugações de {{word}}",
        showTranslation: "Mostrar tradução",
        hideTranslation: "Ocultar tradução",
        analyze: "Analisar palavras",
        notFoundTitle: "Não encontrado",
        notFound: {
            word: "Esta palavra não existe",
            sentence: "Esta frase não existe",
        },
        notFoundText: "O link pode estar quebrado ou a entrada foi removida.",
        loadFailed: {
            word: "Não foi possível carregar a palavra",
            sentence: "Não foi possível carregar a frase",
        },
        offline: {
            word: "Esta palavra não está no dicionário offline",
            sentence: "Esta frase precisa de internet",
            text: "Ela carrega assim que você voltar a ficar online.",
            back: "Voltar",
        },
        sentences: {
            title: "Frases com {{word}}",
            failed: "Não foi possível carregar as frases.",
            offline: "As frases de exemplo precisam de internet. Elas carregam assim que você voltar a ficar online.",
            none: "Nenhuma frase de exemplo para {{word}}.",
            all: "Todas as frases com {{word}} ({{pages}} páginas)",
            open: "Abrir na pesquisa de frases",
        },
        meta: {
            wordTitle: "Significado de {{name}}: {{meaning}}",
            conjugationTitle: "Conjugação de {{name}}: todas as formas",
            conjugationDescription:
                "Como conjugar {{name}}, “{{meaning}}”: polida, negativa, passado, forma te, potencial, passiva, causativa e mais.",
            conjugationDescriptionPlain:
                "Como conjugar {{name}}: polida, negativa, passado, forma te, potencial, passiva, causativa e mais.",
            sentenceTitle: "{{text}} – “{{translation}}”",
            sentenceDescription: "{{text}} “{{translation}}” – as palavras e os kanji desta frase em japonês.",
            sentenceDescriptionPlain: "{{text}} – as palavras e os kanji desta frase em japonês.",
        },
    },

    summary: {
        sentence: "<name></name> é {{kind}} que significa “{{gloss}}”.",
        sentenceJlpt: "<name></name> é {{kind}} que significa “{{gloss}}” (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "um substantivo japonês",
            nounAndSuruVerb: "um substantivo e verbo suru japonês",
            adverb: "um advérbio japonês",
            auxiliary: "um auxiliar japonês",
            auxiliaryAdjective: "um adjetivo auxiliar japonês",
            auxiliaryVerb: "um verbo auxiliar japonês",
            conjunction: "uma conjunção japonesa",
            counter: "um contador japonês",
            expression: "uma expressão japonesa",
            interjection: "uma interjeição japonesa",
            numeral: "um numeral japonês",
            pronoun: "um pronome japonês",
            prefix: "um prefixo japonês",
            suffix: "um sufixo japonês",
            particle: "uma partícula japonesa",
            iAdjective: "um adjetivo-i japonês",
            naAdjective: "um adjetivo-na japonês",
            noAdjective: "um adjetivo-no japonês",
            preNounAdjectival: "um adnominal japonês",
            adjective: "um adjetivo japonês",
            ichidanVerb: "um verbo ichidan japonês",
            godanVerb: "um verbo godan japonês",
            yodanVerb: "um verbo yodan japonês",
            nidanVerb: "um verbo nidan japonês",
            suruVerb: "um verbo suru japonês",
            irregularVerb: "um verbo irregular japonês",
            verb: "um verbo japonês",
            word: "uma palavra japonesa",
        },
        commonKinds: {
            noun: "um substantivo japonês comum",
            nounAndSuruVerb: "um substantivo e verbo suru japonês comum",
            adverb: "um advérbio japonês comum",
            auxiliary: "um auxiliar japonês comum",
            auxiliaryAdjective: "um adjetivo auxiliar japonês comum",
            auxiliaryVerb: "um verbo auxiliar japonês comum",
            conjunction: "uma conjunção japonesa comum",
            counter: "um contador japonês comum",
            expression: "uma expressão japonesa comum",
            interjection: "uma interjeição japonesa comum",
            numeral: "um numeral japonês comum",
            pronoun: "um pronome japonês comum",
            prefix: "um prefixo japonês comum",
            suffix: "um sufixo japonês comum",
            particle: "uma partícula japonesa comum",
            iAdjective: "um adjetivo-i japonês comum",
            naAdjective: "um adjetivo-na japonês comum",
            noAdjective: "um adjetivo-no japonês comum",
            preNounAdjectival: "um adnominal japonês comum",
            adjective: "um adjetivo japonês comum",
            ichidanVerb: "um verbo ichidan japonês comum",
            godanVerb: "um verbo godan japonês comum",
            yodanVerb: "um verbo yodan japonês comum",
            nidanVerb: "um verbo nidan japonês comum",
            suruVerb: "um verbo suru japonês comum",
            irregularVerb: "um verbo irregular japonês comum",
            verb: "um verbo japonês comum",
            word: "uma palavra japonesa comum",
        },
    },
} satisfies PartialDict<typeof en>;
