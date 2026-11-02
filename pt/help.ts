import type en from "../en/help";
import type { PartialDict } from "../types";

export default {
  title: "Ajuda",
  description:
    "Como pesquisar no Jotoba em inglês, japonês ou romaji, ler frases inteiras, filtrar resultados com hashtags como #n5 e usar atalhos de teclado.",
  intro:
    "O Jotoba é um dicionário de palavras, kanji, frases de exemplo e nomes em japonês. Esta página mostra o que você pode fazer com ele, da sua primeira pesquisa aos atalhos que depois economizam tempo. Os exemplos são links, então você pode testar cada um na hora.",
  contents: "Nesta página",
  nav: {
    search: "Pesquisa",
    reading: "Leitura",
    hashtags: "Hashtags",
    results: "Resultados",
    shortcuts: "Atalhos",
    bookmarks: "Favoritos e configurações",
    flashcards: "Flashcards",
    offline: "Offline",
    moreHelp: "Mais ajuda",
  },
  tour: {
    title: "Prefere um tour guiado?",
    text: "O tour mostra a barra de pesquisa, os tipos de pesquisa, o seletor de radicais e o menu na página em que você está, e no caminho você já configura seus idiomas.",
    button: "Fazer o tour",
  },
  topic: {
    try: "Experimente",
  },
  queryLink: {
    searchFor: "Pesquisar ",
    in: " em ",
    types: {
      kanji: "Kanji",
      sentences: "Frases",
      names: "Nomes",
    },
  },
  search: {
    title: "Comece com uma pesquisa",
    lead: "Digite na barra de pesquisa o que você sabe. Não precisa ser em japonês.",
    directions: {
      title: "Pesquise em qualquer direção",
      text: "Pesquise em inglês, em japonês (kanji ou kana) ou em romaji, a escrita do japonês com letras latinas. Se você escolher outro idioma de pesquisa nas <link>configurações</link>, por exemplo alemão, também pode pesquisar nesse idioma.",
    },
    types: {
      title: "Escolha o que pesquisar",
      text: "O menu ao lado do campo de pesquisa alterna entre palavras, kanji, frases de exemplo e nomes. Ao mudá-lo, sua pesquisa é feita de novo. Se outro tipo tiver resultados para a sua pesquisa, a página de resultados avisa.",
    },
    wildcards: {
      title: "Preencha lacunas com curingas",
      text: "Só conhece parte de uma palavra? Numa pesquisa em japonês, * representa qualquer quantidade de caracteres: <ja>*車</ja> encontra palavras que terminam com <ja>車</ja>, <ja>車*</ja> palavras que começam com ele e <ja>*車*</ja> todas as palavras que o contêm. Um ? representa exatamente um caractere, então <ja>宇宙?行士</ja> encontra <ja>宇宙飛行士</ja>.",
      boundaries:
        "Se o leitor de frases dividir uma pesquisa assim em várias palavras, junte-as com “Editar divisão de palavras”. Os curingas funcionam com kanji e kana, não com inglês ou romaji.",
    },
    suggestions: {
      title: "Escolha entre as sugestões",
      text: "As sugestões aparecem enquanto você digita. Selecione uma para pesquisá-la. Quando você digita #, as sugestões passam a mostrar hashtags, explicadas <hashtags>mais abaixo</hashtags>. Com um teclado, você pode navegar por elas e abrir uma pesquisa em uma nova aba; veja os <shortcuts>atalhos de teclado</shortcuts>.",
    },
  },
  reading: {
    title: "Leia textos em japonês",
    lead: "Encontrou uma frase que ainda não consegue ler? O Jotoba pode dividi-la em palavras, reconhecer formas conjugadas e ajudar você a encontrar kanji que não conhece.",
    sentences: {
      title: "Leia frases inteiras",
      text: "Pesquise uma frase inteira em japonês e o Jotoba a divide em palavras. Selecione uma palavra para ver a forma de dicionário e como ela foi conjugada.",
      boundaries:
        "Se uma frase for dividida no lugar errado, use o botão de lápis para definir você mesmo onde as palavras se separam. A divisão fica salva no link, então você pode compartilhar a frase do jeito que a dividiu.",
    },
    conjugations: {
      title: "Consulte palavras conjugadas",
      text: "Você não precisa da forma de dicionário. Pesquise a palavra do jeito que a encontrou e o Jotoba mostra a palavra base junto com as formas que detectou, por exemplo negativa e passado.",
    },
    numbers: {
      title: "Leia números",
      text: "Pesquise um número escrito em japonês para ver o valor em algarismos.",
    },
    radicals: {
      title: "Encontre kanji pelas partes",
      text: "Não consegue ler um kanji? Abra <ja>部</ja> ao lado do campo de pesquisa e escolha os radicais que você reconhece, as partes de que um kanji é formado. As abas os organizam por número de traços. Cada radical que você adiciona restringe os kanji correspondentes, e as sugestões de pesquisa também seguem a sua seleção.",
      search:
        "Não sabe qual radical está vendo? Digite no campo de pesquisa dentro do seletor: um kanji mostra os radicais dele, kana mostram os radicais das palavras correspondentes, e inglês ou romaji encontram radicais pelo nome.",
    },
  },
  hashtags: {
    title: "Filtre com hashtags",
    lead: "As hashtags começam com # e vão na barra de pesquisa, antes ou depois do termo pesquisado. Elas mudam o tipo de pesquisa ou filtram os resultados, por exemplo para um nível do JLPT ou só para verbos.",
    how: {
      title: "Como as hashtags funcionam",
      suggest:
        "Digite # e a barra de pesquisa sugere hashtags, então você não precisa decorá-las.",
      case: "Maiúsculas e minúsculas não importam: #N5 e #n5 são a mesma coisa.",
      combine: "Você pode combiná-las: #n5 #verb encontra verbos do N5.",
      withoutTerm:
        "Os filtros funcionam sem termo de pesquisa: #n5 sozinho lista todas as palavras do N5.",
    },
    types: {
      title: "Mude o tipo de pesquisa",
      text: "#word, #kanji, #sentence e #name substituem o menu ao lado do campo de pesquisa. São práticas quando você prefere continuar digitando, ou num link que você manda para alguém.",
    },
    hidden: {
      title: "Pratique com traduções ocultas",
      text: "Adicione #hidden a uma pesquisa de frases e as traduções ficam ocultas até você revelá-las, uma frase por vez. Para ocultá-las em todas as pesquisas de frases, ative <link>{{setting}}</link> nas configurações.",
    },
    jlpt: {
      title: "Filtre por nível do JLPT",
      text: "#n5 a #n1 limitam palavras, kanji e frases a um nível do Japanese-Language Proficiency Test, sendo o N5 o mais fácil. #jlpt5 a #jlpt1 também funcionam.",
    },
    all: {
      title: "Todas as hashtags de filtro",
      text: "A maioria dos filtros vale para a pesquisa de palavras. Selecione uma hashtag para listar todas as palavras que a têm.",
    },
    list: "Hashtags: {{group}}",
    showAll: {
      one: "Mostrar {{count}} área",
      many: "Mostrar todas as {{count}} áreas",
      other: "Mostrar todas as {{count}} áreas",
    },
    showFewer: "Mostrar menos áreas",
    groups: {
      partOfSpeech: {
        title: "Classe gramatical",
        description: "Que tipo de palavra ela é.",
      },
      verbs: {
        title: "Verbos e escrita",
        description:
          "Classes de verbos, verbos suru e como uma palavra costuma ser escrita.",
      },
      register: {
        title: "Registro e tom",
        description:
          "O quanto uma palavra é formal, informal ou delicada, e quem costuma usá-la.",
      },
      old: {
        title: "Palavras antigas e raras",
        description:
          "Palavras antiquadas, históricas ou pouco usadas hoje em dia.",
      },
      sayings: {
        title: "Ditados e tipos de palavra",
        description:
          "Provérbios, expressões idiomáticas, compostos de quatro kanji, onomatopeias e abreviações.",
      },
      names: {
        title: "Nomes e coisas",
        description:
          "Nomes próprios no dicionário de palavras, como lugares, empresas ou obras. Para consultar o nome de uma pessoa, use a pesquisa de nomes.",
      },
      subjects: {
        title: "Áreas",
        description:
          "Palavras de uma área específica, como medicina, direito ou sumô.",
      },
      kanji: {
        title: "Kanji",
        description: "Kokuji são kanji criados no Japão.",
      },
    },
  },
  results: {
    title: "Aproveite mais os resultados",
    lead: "Cada entrada tem mais do que a primeira linha.",
    labels: {
      title: "O que as etiquetas significam",
      common: "Uma palavra comum",
      jlpt: "O nível do JLPT, de N5 (o mais fácil) a N1",
      sentenceFrom: "Uma frase de {{source}}",
      ownSentence: "Uma frase adicionada pela equipe do Jotoba",
      sources:
        "De onde vêm as palavras, as frases e os áudios está na <link>página Sobre</link>.",
    },
    words: {
      title: "Palavras",
      text: "Toque o áudio, confira o acento tonal e outras grafias, e selecione um bloco de kanji para abrir aquele kanji. Abaixo de um significado, você pode expandir uma frase de exemplo.",
      menu: "O menu ⋮ ao lado de uma palavra tem o resto: a tabela de conjugação, colocações, o par transitivo ou intransitivo, frases que usam a palavra, o download do áudio, “Editar no JMDict”, “Copiar link” e a página de detalhes.",
      furigana:
        "Clique duas vezes no furigana acima de uma palavra para copiar a leitura. “{{setting}}” nas <link>configurações</link> ativa ou desativa isso.",
    },
    kanji: {
      title: "Kanji",
      text: "Reproduza a ordem dos traços, avance passo a passo ou mude a velocidade. Selecione o kanji grande para ver as partes de que ele é formado. Os compostos são agrupados por leitura, e selecionar uma leitura lista as palavras que a usam. O radical, os componentes e os kanji parecidos são links, então você pode continuar explorando. As leituras em chinês, coreano e vietnamita também podem ser mostradas.",
    },
    sentences: {
      title: "Frases",
      text: "A etiqueta mostra de onde vem a frase. O menu dela abre a frase no leitor de frases para consultar as palavras, abre a frase no Tatoeba ou copia um link para ela.",
    },
    names: {
      title: "Nomes",
      text: "Os resultados de nomes mostram a leitura, uma transcrição e, quando conhecidos, o gênero e a origem do nome.",
    },
    sharing: {
      title: "Páginas de detalhes e links",
      pages:
        "Palavras e frases têm sua própria página de detalhes, com abas para kanji, frases, colocações e conjugações, e um botão de compartilhar.",
      links:
        "Os links de pesquisa guardam o tipo de pesquisa, a página, a palavra que você selecionou no leitor de frases e a sua divisão de palavras. Com “{{setting}}” ativado nas configurações, quem abrir o seu link vê o mesmo idioma de pesquisa que você usou.",
    },
  },
  shortcuts: {
    title: "Trabalhe mais rápido com o teclado",
    lead: "No computador, você pode usar quase todo o Jotoba sem mouse. Atalhos de uma tecla só não funcionam enquanto você digita em um campo de texto.",
    off: "Os atalhos de teclado estão desativados neste navegador. As teclas padrão continuam funcionando.",
    turnOn: "Ativar",
    anywhere: "Em qualquer lugar",
    results: "Nas páginas de resultados",
    searchBar: "Na barra de pesquisa",
    playAudio: "Tocar o primeiro áudio da página",
    pages: "Ir para a página 1 a 9",
    change:
      "Você pode alterar ou desativar estes atalhos em <link>{{page}}</link>. As alterações valem só para este navegador.",
    standard: {
      title: "Teclas padrão",
      text: "Estas teclas seguem as convenções comuns de teclado, então funcionam como em outros sites e não podem ser alteradas.",
    },
    list: {
      off: "Desativado",
      or: "ou",
      to: "a",
    },
  },
  bookmarks: {
    title: "Salve palavras e ajuste o Jotoba",
    lead: "Dois lugares no menu adaptam o Jotoba ao seu jeito de estudar.",
    bookmarks: {
      title: "Favoritos",
      text: "Salve palavras e frases em listas suas e adicione notas a elas. Sem conta, elas ficam neste navegador; com conta, são sincronizadas com todos os aparelhos em que você entrar. Use o botão de salvar numa página de detalhes e encontre suas listas em <link>{{menu}}</link> no menu.",
      textLocal:
        "Salve palavras e frases em listas suas e adicione notas a elas. Elas ficam neste navegador. Use o botão de salvar numa página de detalhes e encontre suas listas em <link>{{menu}}</link> no menu.",
    },
    settings: {
      title: "Configurações",
      intro: "Algumas opções que vale a pena conhecer:",
      language:
        "<link>{{setting}}</link>: pesquise e leia os significados em outro idioma, como alemão. “{{alwaysEnglish}}” adiciona também os significados em inglês.",
      hideTranslation:
        "<link>{{setting}}</link>: leia cada frase de exemplo antes de ver a tradução.",
      kanji:
        "<link>{{setting}}</link>: quais partes das palavras e dos kanji são mostradas, como leituras, acento tonal ou ordem dos traços, e como a animação da ordem dos traços é reproduzida.",
      theme:
        "<link>{{setting}}</link>: seguir o sistema, ou sempre claro ou escuro.",
      languageInLinks:
        "<link>{{setting}}</link>: os links que você compartilha abrem no mesmo idioma de pesquisa.",
    },
  },
  flashcards: {
    title: "Estude com flashcards",
    lead: "Qualquer lista de favoritos pode virar um baralho. O Jotoba planeja os cartões com o FSRS, para que cada um volte pouco antes de você esquecê-lo.",
    start: {
      title: "Começar uma lista",
      text: "Abra uma lista e escolha “Começar a estudar”. Você define quantos cartões novos entram por dia. O progresso pertence só àquela lista: uma palavra que está em duas listas é estudada em cada uma.",
      kinds:
        "Uma palavra tem até três tipos de cartão: significado, leitura e lembrar. O próximo tipo só começa depois que você acertou o anterior em um dia anterior.",
    },
    rating: {
      title: "Avaliar um cartão",
      text: "Pense na resposta e depois mostre-a. Escolha “De novo” se você não sabia, senão “Acertei”. Seja sincero: o tempo nos botões mostra quando o cartão volta. Os cartões que você esquece voltam alguns cartões depois na mesma rodada. Uma palavra nova que você já conhecia recebe “Já sabia”.",
      fine: "<link>{{setting}}</link> adiciona “Difícil” e “Fácil”. “Difícil” ainda conta como acerto.",
    },
    stages: {
      title: "Estágios e memória",
      text: "Cada palavra fica no estágio do seu tipo mais fraco já iniciado, e em “Novo” até você começar um: “Aprendendo” enquanto a duração da memória for menor que uma semana, “Familiar” até dois meses e “Dominado” depois disso.",
      memory:
        "Memória: a probabilidade de você saber o cartão agora. Ela cai um pouco a cada dia até você revisá-lo.",
      span: "Duração da memória: quantos dias levam até você só saber o cartão 9 em cada 10 vezes. Cada revisão em que você acerta a torna mais longa.",
      retention:
        "<link>{{setting}}</link>: os cartões voltam quando a sua memória deles cai para este valor. Quanto mais alto, mais revisões.",
    },
    fewer: {
      title: "Por que aparecem menos cartões",
      intro:
        "Às vezes uma lista mostra menos cartões pendentes ou novos do que você esperava. A visão geral diz os motivos:",
      resting:
        "Cada palavra aparece no máximo uma vez por dia de estudo. Os outros cartões pendentes dela descansam até amanhã. Um dia de estudo começa às 4h.",
      waiting:
        "Os cartões de leitura e de lembrar esperam até você acertar o tipo anterior em um dia anterior.",
      limit: "Os cartões novos param no limite diário da lista.",
      backlog:
        "Se houver mais revisões esperando do que cabem em duas rodadas, os cartões novos ficam pausados até você colocar tudo em dia. Os cartões que você provavelmente ainda sabe vêm primeiro. Mesmo assim, você pode deixar entrar cartões novos por um dia.",
    },
    practice: {
      title: "Quando não há nada pendente",
      ahead:
        "“Adiantar revisões” pega cartões que ainda não estão pendentes, os mais inseguros primeiro, mas nenhum que você já avaliou hoje. Conta como revisão: cartões acertados voltam um pouco depois, os esquecidos, antes.",
      browse: "“Só folhear” passa pelos cartões sem avaliá-los. Não muda nada.",
    },
    tricky: {
      title: "Palavras complicadas",
      text: "Uma palavra que você esqueceu três vezes (dá para mudar isso nas configurações de aprendizado) é marcada como complicada. Depois de oito vezes, a lista de palavras sugere escrever na nota o seu próprio truque de memória, o que costuma ajudar mais do que mais rodadas.",
      actions:
        "Nos detalhes de uma palavra, você pode pausá-la, para que fique fora das rodadas, ou redefini-la, para que recomece como cartão novo. O histórico dela continua.",
    },
  },
  offline: {
    title: "Pesquise sem internet",
    lead: "O app pode guardar o dicionário no seu aparelho, para você consultar palavras no metrô, no exterior ou em qualquer lugar sem conexão.",
    download: {
      title: "Baixe o dicionário",
      text: "Baixe-o uma vez em <link>Dicionário offline</link> no menu. Você vê o tamanho antes de começar e, com dados móveis, o app pergunta antes. Nada é baixado sozinho.",
    },
    works: {
      title: "O que funciona offline",
      intro:
        "Depois que ele estiver no seu aparelho, isto funciona sem conexão:",
      words: "Pesquisar palavras, com sugestões enquanto você digita",
      details: "Detalhes das palavras, sem pesquisa de frases e gravações",
      kanji: "Kanji, o seletor de radicais e a ordem dos traços",
      voice:
        "<link>{{setting}}</link>: onde não há gravação, a voz em japonês do seu aparelho lê palavras e frases em voz alta.",
    },
    needs: {
      title: "O que precisa de internet",
      intro: "Algumas coisas só funcionam online:",
      sentencesNames: "Pesquisa de frases e pesquisa de nomes",
      recordings: "Gravações de áudio",
      reader:
        "Dividir frases inteiras em palavras. Offline, pesquise uma palavra por vez.",
      query: "Curingas (* e ?), hashtags e aspas numa pesquisa",
    },
    now: {
      title: "Quando você está offline",
      chip: "Sem conexão, “Offline” aparece no topo da tela. Toque para ver o que funciona agora.",
      results:
        "Os resultados passam a vir do seu aparelho e são marcados como resultados offline. A ordem pode ser diferente da online, e erros de digitação não são corrigidos.",
      english: "Por enquanto, os significados offline estão só em inglês.",
    },
    updates: {
      title: "Atualizações e espaço",
      text: "O app nunca atualiza o dicionário sozinho. Quando há dados novos, a página inicial e a página do dicionário offline oferecem a atualização, e você decide quando baixar.",
      manage:
        "Em <link>Dicionário offline</link> no menu, você também pode verificar atualizações, conferir se os dados estão completos ou apagá-los para liberar espaço.",
    },
  },
  moreHelp: {
    title: "Mais ajuda",
    lead: "Tem uma pergunta que esta página não responde, ou algo não funciona como esperado?",
    ask: "Pergunte no <discord>Discord</discord> ou no <reddit>Reddit</reddit>. O <trello>roadmap no Trello</trello> mostra no que estamos trabalhando. Se uma entrada do dicionário estiver errada, use “Editar no JMDict” no menu ⋮ da palavra.",
    tour: "Você pode refazer o tour em “{{menu}}” no menu. O Jotoba também está disponível como <app>app para Android</app>.",
  },
} satisfies PartialDict<typeof en>;
