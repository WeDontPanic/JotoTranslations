import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "Pesquisa por voz",
        title: "Pesquisa por voz",
        language: "Idioma",
        japanese: "Japonês",
        start: "Começar a ouvir",
        stop: "Parar de ouvir",
        engine: {
            device: "Reconhecido no seu celular",
            online: "Reconhecido online pelo Android",
            browser: "Reconhecido pelo seu navegador",
            info: "O que isso significa?",
            about: {
                device: "O seu próprio celular transforma a sua fala em texto, offline: o áudio nunca sai dele, o Jotoba só recebe o texto. Para usar o serviço online do Android em vez disso, desative “Entrada de voz no aparelho” em Configurações › Geral.",
                online: "O Android envia o áudio para o serviço de fala dele (na maioria dos celulares, o do Google) e recebe o texto de volta; o Jotoba só recebe o texto. O seu celular também pode fazer isso offline: baixe o idioma em Configurações › Geral.",
                browser:
                    "O seu navegador envia o áudio para o serviço de fala dele (no Chrome: Google) e recebe o texto de volta; o Jotoba só recebe o texto. No app do Jotoba para Android, o seu celular pode fazer isso offline.",
            },
        },
        status: {
            idle: "Toque no microfone e diga uma palavra.",
            listening: "Ouvindo… diga uma palavra.",
            "no-speech": "Não entendi. Tente de novo.",
            blocked:
                "O acesso ao microfone está bloqueado. Permita nas configurações do site no seu navegador e tente de novo.",
            "no-microphone": "Nenhum microfone encontrado.",
            "no-language":
                "Este idioma não está disponível para entrada de voz aqui. No celular, instale-o nas configurações do sistema (Idiomas › Fala).",
            unsupported: "A pesquisa por voz não está disponível neste navegador.",
            failed: "A pesquisa por voz parou de forma inesperada. Tente de novo.",
        },
    },
    handwriting: {
        mode: {
            label: "Método de entrada",
            radicals: "Radicais",
            write: "Escrita à mão",
        },
        pad: {
            label: "Área de desenho",
            placeholder: "Escreva aqui",
            hint: "Escreva uma palavra ou um kanji com um dedo. As sugestões aparecem acima. Prefere tocar? Mude para Radicais.",
        },
        candidates: {
            label: "Reconhecido",
            empty: "As sugestões aparecem aqui",
            busy: "Reconhecendo…",
        },
        undo: "Desfazer",
        delete: "Apagar caractere",
        clear: "Limpar desenho",
        announce: {
            added: "{{text}} adicionado à pesquisa",
            removed: "{{text}} removido da pesquisa",
            stroke: "Traço removido",
            candidates: "{{count}} sugestões, a primeira é {{text}}",
        },
        model: {
            intro: "A escrita à mão precisa de um download único do Google (cerca de {{size}}). Depois disso, funciona offline.",
            download: "Baixar ({{size}})",
            loading: "Baixando a escrita à mão (cerca de {{size}})… Você já pode escrever.",
            ready: "A escrita à mão está pronta",
            failed: "O download não deu certo. Verifique sua conexão.",
            retry: "Tentar de novo",
            cellular: "Parece que você está usando dados móveis ou a economia de dados.",
            offline: "Você está offline. Conecte-se à internet para baixar.",
        },
        consent: {
            intro: "O Jotoba reconhece a sua escrita à mão no seu aparelho com o Google ML Kit.",
            local: "O seu desenho fica no seu aparelho. Só o que você pesquisa é enviado ao Jotoba.",
            metrics:
                "O ML Kit envia dados de uso anônimos ao Google: tipo de aparelho, versão do app e o desempenho do reconhecimento.",
            download: "O modelo de escrita à mão (cerca de {{size}}) é baixado do Google uma única vez.",
            change: "Você pode alterar isso quando quiser em <settings>Configurações › Privacidade</settings>. <policy>Política de privacidade</policy>",
            decline: "Recusar",
            agree: "Aceitar e baixar",
            declined: "A escrita à mão continua desativada. Você pode ativá-la em Configurações › Privacidade.",
        },
    },
} satisfies PartialDict<typeof en>;
