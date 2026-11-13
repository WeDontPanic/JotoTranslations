import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Pesquise em qualquer direção",
            description:
                "Digite em inglês, japonês, kana ou romaji. As sugestões aparecem enquanto você digita, e hashtags como #n5 filtram os resultados. Experimente com 猫 (gato).",
            descriptionVoice:
                "Digite em inglês, japonês, kana ou romaji, ou toque no microfone para pesquisar por voz. As sugestões aparecem enquanto você digita, e hashtags como #n5 filtram os resultados. Experimente com 猫 (gato).",
            shortcut: "Ir para a barra de pesquisa",
        },
        details: {
            title: "Cada palavra tem sua própria página",
            description:
                "Selecione uma palavra para abrir a página dela com todos os significados, os kanji, frases de exemplo e conjugações.",
            descriptionStatic:
                "Selecione uma palavra nos resultados para abrir a página dela com todos os significados, os kanji, frases de exemplo e conjugações.",
        },
        bookmark: {
            title: "Guarde palavras para depois",
            description:
                "O botão de favorito salva uma palavra em uma lista. Em ⋮ você encontra conjugações, frases de exemplo e um link para compartilhar.",
            descriptionMenu:
                "Abra ⋮ ao lado de uma palavra para salvá-la, ver as conjugações, encontrar frases de exemplo ou copiar um link.",
        },
        radicals: {
            title: "Encontre kanji pelas partes",
            description:
                "Não consegue ler um kanji? Abra 部, escolha os radicais que você reconhece e o Jotoba lista os kanji correspondentes.",
        },
        reader: {
            title: "Leia frases inteiras",
            description:
                "Pesquise uma frase inteira em japonês e o Jotoba a divide em palavras. Selecione uma palavra para ver a forma de dicionário e como ela foi conjugada.",
        },
        type: {
            title: "Escolha o que pesquisar",
            description:
                "O menu ao lado do campo de pesquisa alterna entre palavras, kanji, frases de exemplo e nomes. Aqui estão os kanji de 猫.",
            descriptionStatic:
                "O menu ao lado do campo de pesquisa alterna entre palavras, kanji, frases de exemplo e nomes.",
            shortcut: "Alternar nas páginas de resultados",
        },
        settings: {
            title: "Favoritos, configurações e ajuda",
            description:
                "Abra o menu para ver seus favoritos, as configurações, as novidades e a página de ajuda, onde você pode reiniciar este tour. Teste as configurações de idioma aqui mesmo, as mudanças valem na hora.",
            descriptionSearchOnly:
                "Abra o menu para ver seus favoritos, as configurações, as novidades e a página de ajuda, onde você pode reiniciar este tour. Teste o idioma de busca aqui mesmo, as mudanças valem na hora.",
        },
    },
    menuHint: {
        text: "As palavras que você salva ficam em Favoritos. Lá você também pode estudar cada lista com flashcards.",
        done: "Pronto",
    },
    languages: {
        group: "Idiomas",
    },
    progress: "{{current}} de {{total}}",
    announce: "Passo {{current}} de {{total}}. {{title}}. {{description}}",
    announceResumed: "De volta ao tour. Passo {{current}} de {{total}}.",
    close: "Fechar tour",
    back: "Voltar",
    next: "Próximo",
    done: "Concluir",
    searchExample: "Buscar {{query}}",
    searching: "Buscando…",
    loading: "Carregando…",
    openMenu: "Abrir menu",
    preview: {
        types: {
            words: "Palavras",
            kanji: "Kanji",
            sentences: "Frases",
            names: "Nomes",
        },
        gloss: "comer",
        form: "passado, forma polida",
        wordMenu: {
            bookmark: "Salvar",
            conjugations: "Conjugações",
            sentenceSearch: "Pesquisa de frases",
            copyLink: "Copiar link",
        },
    },
} satisfies PartialDict<typeof en>;
