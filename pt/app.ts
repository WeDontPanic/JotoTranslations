import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
  skipLink: "Pular para o conteúdo",
  header: {
    home: "Página inicial do Jotoba",
    signIn: "Entrar",
    signUp: "Criar conta",
  },
  account: {
    label: "Conta",
    labelNamed: "Conta, conectado como {{name}}",
    signedInAs: "Conectado como {{name}}",
    bookmarks: "Favoritos",
    settings: "Configurações",
    signOut: "Sair",
    signedOut: "Você saiu da conta",
    signOutFailed: "Não foi possível sair. Tente de novo.",
  },
  footer: {
    label: "Rodapé",
    about: {
      title: "Sobre",
      credits:
        "O Jotoba usa muitas fontes de dados livres. Entre as principais estão <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> e <jmnedict>JMnedict</jmnedict>, que são propriedade do <edrdg>Electronic Dictionary Research and Development Group</edrdg> e são usadas de acordo com a <license>licença</license> do grupo.",
      contributors:
        "Veja a lista de todos os colaboradores na nossa <link>página Sobre</link>.",
    },
    links: {
      title: "Links",
      androidApp: "App para Android",
      about: "Página Sobre",
      privacy: "Política de privacidade",
      terms: "Termos de uso",
      imprint: "Informações legais",
      licenses: "Licenças de código aberto",
    },
    support: {
      title: "Apoie o Jotoba",
      paypal: "As doações são divididas entre os desenvolvedores",
    },
    socials: {
      title: "Redes sociais",
      github: "Código-fonte",
      trello: "Nosso roadmap",
    },
  },
  cookieBanner: {
    title: "Só uma pergunta sobre cookies",
    text: "O Jotoba não tem anúncios nem cookies de rastreamento.",
    necessary: {
      label: "Necessários",
      description: "Configurações, favoritos, atalhos e login",
      descriptionLocal: "Configurações, favoritos e atalhos",
      badge: "Sempre ativos",
    },
    optional: {
      label: "Carregamento mais rápido",
      description:
        "Salva os arquivos do app neste aparelho para o Jotoba carregar mais rápido",
    },
    reject: "Recusar opcionais",
    allow: "Permitir opcionais",
    settingsLink: "Altere quando quiser nas Configurações",
    privacyLink: "Política de privacidade",
    saved:
      "Escolha salva. Você pode alterá-la quando quiser nas Configurações.",
    savedReject:
      "Escolha salva. O carregamento mais rápido está desativado. Você pode alterar isso quando quiser nas Configurações.",
    announce:
      "Pergunta sobre cookies: você pode recusar ou permitir que os arquivos do app sejam salvos para carregar mais rápido.",
    pause: ".",
  },
  notFound: {
    title: "Esta página não existe",
    text: "O link pode estar quebrado ou a entrada foi removida.",
    home: "Ir para a página inicial",
    report: "Chegou aqui por um link? <link>Informar link quebrado</link>",
  },
  tourHint: {
    newHere: "Novo por aqui?",
    start: "Fazer um tour rápido",
    hide: "Ocultar dica do tour",
  },
  loadError: {
    offline: "Você está offline. Isto precisa de internet.",
    unreachable:
      "Não foi possível acessar o Jotoba agora. Tente de novo daqui a pouco.",
    failed: "Não foi possível carregar isto. Tente de novo.",
    page: {
      offlineTitle: "Esta página precisa de internet",
      offlineText:
        "Ela não foi carregada antes de você ficar offline. Ela abre assim que você voltar a ficar online.",
      title: "Não foi possível carregar esta página",
      text: "Recarregar costuma resolver.",
      reload: "Recarregar página",
    },
  },
  common: {
    close: "Fechar",
    closeDialog: "Fechar diálogo",
    closeMessage: "Fechar mensagem",
    loading: "Carregando…",
    opensInNewTab: "(abre em uma nova aba)",
    copyFailed: "Não foi possível copiar para a área de transferência",
    scrollBack: "Rolar para trás",
    scrollForward: "Rolar para frente",
    pages: {
      label: "Páginas",
      first: "Primeira página",
      previous: "Página anterior",
      page: "Página {{page}}",
      next: "Próxima página",
      last: "Última página",
    },
  },
} satisfies PartialDict<typeof en>;
