import type en from "../en/scan";
import type { PartialDict } from "../types";

export default {
  page: {
    title: "Escanear texto",
    titleWeb: "Texto de imagem",
  },
  consent: {
    title: "Pesquisa com a câmera",
    intro: "O Jotoba reconhece o texto no seu aparelho com o Google ML Kit.",
    local: "As fotos e o texto reconhecido ficam no seu aparelho.",
    lookup:
      "Só a frase que você consulta é enviada ao Jotoba, como em qualquer pesquisa.",
    metrics:
      "O ML Kit envia dados de uso anônimos ao Google: tipo de aparelho, versão do app e o desempenho do reconhecimento.",
    camera:
      "Em seguida, o Android pede acesso à câmera. Fotos da galeria funcionam sem isso.",
    change:
      "Você pode alterar isso quando quiser em <settings>Configurações › Privacidade</settings>. <policy>Política de privacidade</policy>",
    decline: "Recusar",
    agree: "Aceitar",
    declined:
      "A pesquisa com a câmera continua desativada. Você pode ativá-la em Configurações › Privacidade.",
  },
  download: {
    title: "Baixar o reconhecimento de texto?",
    intro:
      "Para ler textos em imagens, o Jotoba baixa o reconhecimento de texto uma única vez (cerca de {{size}}).",
    stays:
      "Ele fica salvo neste navegador, então da próxima vez começa na hora.",
    local: "As imagens são lidas no seu aparelho e nunca saem dele.",
    server:
      "Ele vem do próprio servidor do Jotoba. Nenhum outro serviço participa.",
    note: "De preferência pelo Wi-Fi. Você pode apagá-lo quando quiser em <settings>Configurações › Privacidade</settings>. <policy>Política de privacidade</policy>",
    cellular:
      "Parece que você está usando dados móveis ou a economia de dados.",
    offline: "Você está offline. Conecte-se à internet para baixar.",
    later: "Agora não",
    start: "Baixar ({{size}})",
    progress: "Baixando o reconhecimento de texto",
    amount: "{{done}} de {{total}} · {{percent}}",
    pill: "Baixando o reconhecimento de texto · {{percent}}",
    preparing: "Preparando o reconhecimento de texto…",
    ready: "O reconhecimento de texto está pronto.",
    cancel: "Cancelar download",
    cancelled: "Download interrompido. O que já foi baixado continua salvo.",
    failed: "O download falhou. Verifique sua conexão e tente de novo.",
    resume: "Baixar o reconhecimento de texto ({{size}})",
    waiting: "Sua imagem será lida assim que o download terminar.",
  },
  drop: {
    title: "Ler texto de uma imagem",
    text: "Solte uma imagem aqui ou cole com {{keys}}.",
    textTouch: "Tire uma foto ou escolha uma do seu aparelho.",
    choose: "Escolher imagem",
    camera: "Usar câmera",
    active: "Solte para ler o texto",
    formats: "JPG, PNG, WebP ou GIF",
    notImage:
      "Este arquivo não é uma imagem. Escolha um arquivo JPG, PNG, WebP ou GIF.",
    onlyFirst: "Só a primeira imagem é lida.",
  },
  permission: {
    title: "Sem acesso à câmera",
    text: "Permita o acesso à câmera nas configurações do Android ou escolha uma foto.",
    textWeb:
      "Permita a câmera nas configurações do site no seu navegador ou escolha uma imagem.",
    retry: "Permitir câmera",
    settings: "Abrir configurações",
  },
  live: {
    starting: "Iniciando a câmera…",
    hint: "Aponte a câmera para um texto em japonês",
    found: "Toque em uma linha para consultá-la",
    shutter: "Escanear texto",
    gallery: "Escolher foto",
    flashlight: "Lanterna",
    zoom: "Zoom",
    zoomLevel: "Zoom {{level}}×",
    close: "Fechar câmera",
  },
  pick: {
    reading: "Lendo o texto…",
    found: {
      one: "1 frase encontrada. Toque nela para consultá-la.",
      many: "{{count}} frases encontradas. Toque em uma para consultá-la.",
      other: "{{count}} frases encontradas. Toque em uma para consultá-la.",
    },
    retake: "Tirar de novo",
    another: "Outra imagem",
    area: "Selecionar área",
    showText: "Mostrar texto",
    showPhoto: "Mostrar foto",
    sentence: "Frase {{n}}: {{text}}",
  },
  area: {
    title: "Selecione o texto que você quer",
    rotate: "Girar",
    cancel: "Cancelar",
    confirm: "Ler esta área",
  },
  result: {
    label: "Resultado",
    position: "Frase {{n}} de {{total}}",
    positionShort: "{{n}} / {{total}}",
    panel: "Painel de resultado",
    close: "Fechar resultado",
    closed: "Seleção removida",
    prev: "Frase anterior",
    next: "Próxima frase",
    edit: "Editar texto",
    lookUp: "Consultar",
    cancel: "Cancelar",
    copy: "Copiar",
    copyAll: "Copiar tudo",
    copied: "Copiado",
    search: "Pesquisar",
    again: "Escanear de novo",
    type: "Tipo de pesquisa",
    none: "Nenhum resultado para {{query}}.",
  },
  photo: {
    label: "Foto",
    hint: "Faça o gesto de pinça ou toque duas vezes para dar zoom. “{{showText}}” lista todas as frases.",
    fit: "Ajustar foto",
    zoomIn: "Aumentar zoom",
    zoomOut: "Diminuir zoom",
  },
  empty: {
    title: "Nenhum texto em japonês encontrado",
    text: "Chegue mais perto ou selecione a área com o texto.",
    retry: "Tentar de novo",
  },
  offline:
    "Você está offline. Você pode copiar o texto; as palavras carregam assim que você voltar a ficar online.",
  error: {
    camera: "Não foi possível iniciar a câmera",
    recognition: "Não foi possível ler o texto. Tente de novo.",
    lookup: "Não foi possível consultar a frase.",
    retry: "Tentar de novo",
  },
} satisfies PartialDict<typeof en>;
