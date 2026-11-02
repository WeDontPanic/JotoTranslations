import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Menu",
        unread: "Menu ({{count}} novidades não lidas)",
    },
    drawer: {
        title: "Menu",
        mainNav: "Principal",
        aboutNav: "Sobre o Jotoba",
        development: "Desenvolvimento",
        unread: "não lidas",
        offlineUpdate: "(atualização disponível)",
        offlineOutdated: "(precisa de atualização)",
        offlineRemoved: "(não está mais neste aparelho)",
    },
    links: {
        bookmarks: "Favoritos",
        settings: "Configurações",
        history: "Pesquisas recentes",
        offline: "Dicionário offline",
        news: "Novidades",
        help: "Ajuda e tour",
        components: "Componentes",
        apiTest: "Teste da API",
        about: "Sobre",
        licenses: "Licenças de código aberto",
        privacy: "Política de privacidade",
        terms: "Termos de uso",
        imprint: "Informações legais",
        home: "Início",
        quit: "Sair do app",
    },
    news: {
        button: "Novidades",
        buttonUnread: "Novidades, {{count}} não lidas",
        title: "Novidades",
        freshCount: "{{count}} novas",
        new: "Nova",
        showAll: "Ver todas as novidades",
        close: "Fechar",
        empty: "Nenhuma novidade disponível",
        error: "Não foi possível carregar as novidades agora.",
        retry: "Tentar de novo",
        status: {
            fresh: {
                one: "{{count}} entrada nova",
                many: "{{count}} entradas novas",
                other: "{{count}} entradas novas",
            },
            noneFresh: "Nenhuma entrada nova",
        },
    },
} satisfies PartialDict<typeof en>;
