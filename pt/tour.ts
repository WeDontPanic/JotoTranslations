import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
  steps: {
    search: {
      title: "Pesquise em qualquer direção",
      description:
        "Digite em inglês, japonês, kana ou romaji. As sugestões aparecem enquanto você digita, e hashtags como #n5 filtram os resultados.",
      descriptionVoice:
        "Digite em inglês, japonês, kana ou romaji, ou toque no microfone para pesquisar por voz. As sugestões aparecem enquanto você digita, e hashtags como #n5 filtram os resultados.",
      shortcut: "Ir para a barra de pesquisa",
    },
    type: {
      title: "Escolha o que pesquisar",
      description:
        "O menu ao lado do campo de pesquisa alterna entre palavras, kanji, frases de exemplo e nomes.",
      shortcut: "Alternar nas páginas de resultados",
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
    wordMenu: {
      title: "Mais sobre cada resultado",
      description:
        "Abra ⋮ ao lado de uma palavra para ver conjugações, frases de exemplo, um link para compartilhar e a página de detalhes, onde você pode salvá-la nos favoritos.",
    },
    settings: {
      title: "Configurações e ajuda",
      description:
        "No menu ficam seus favoritos, as configurações, as novidades e a página de ajuda, onde você pode ler sobre cada recurso e refazer este tour. Experimente as configurações de idioma aqui mesmo, as alterações valem na hora.",
      descriptionSearchOnly:
        "No menu ficam seus favoritos, as configurações, as novidades e a página de ajuda, onde você pode ler sobre cada recurso e refazer este tour. Experimente o idioma de pesquisa aqui mesmo, as alterações valem na hora.",
    },
  },
  languages: {
    group: "Idiomas",
  },
  progress: "{{current}} de {{total}}",
  announce: "Passo {{current}} de {{total}}. {{title}}. {{description}}",
  close: "Fechar tour",
  back: "Voltar",
  next: "Próximo",
  done: "Concluir",
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
      conjugations: "Conjugações",
      sentenceSearch: "Pesquisa de frases",
      copyLink: "Copiar link",
      details: "Detalhes",
    },
  },
} satisfies PartialDict<typeof en>;
