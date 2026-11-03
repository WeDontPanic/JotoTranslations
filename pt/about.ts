import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "Sobre",
    description:
        "Quem faz o Jotoba e de onde vêm os dados do dicionário, as frases de exemplo, os áudios e as ordens dos traços.",
    heading: "Sobre o Jotoba",
    intro: "O Jotoba é um dicionário de japonês gratuito para palavras, kanji, frases de exemplo e nomes. Ele se baseia em recursos que muitas pessoas compartilham de graça. Esta página dá os créditos a eles e às pessoas por trás do Jotoba.",
    team: {
        title: "Quem faz o Jotoba",
        roles: {
            backend: "Back-end",
            frontend: "Front-end",
        },
    },
    jotoKun:
        "O Joto-kun, nosso tanuki, foi desenhado por uma grande amiga nossa, que é uma verdadeira maga quando o assunto é design.",
    sources: {
        title: "Fontes de dados",
        intro: "Obrigado a todos que criam e compartilham esses recursos. Cada um é usado sob sua própria licença. As etiquetas mostram como uma fonte é marcada nos resultados de pesquisa.",
        license: "Licença: <link>{{name}}</link>",
        dictionary: {
            title: "Palavras, kanji e nomes",
            text: "Os dados de palavras, kanji e nomes vêm de <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> e <jmnedict>JMnedict</jmnedict>. Esses arquivos são propriedade do <edrdg>Electronic Dictionary Research and Development Group</edrdg>.",
        },
        sentences: {
            title: "Frases de exemplo",
            tatoeba:
                "Frases do <tatoeba>Tatoeba</tatoeba>, baseadas no Corpus Tanaka do Prof. Yasuhito Tanaka. As frases de exemplo da pesquisa de palavras também vêm do Corpus Tanaka.",
            kevin: "Frases cedidas diretamente pelo autor de <kevin>Kevin Goes to Japan</kevin>.",
            own: "Frases adicionadas pela equipe do Jotoba.",
        },
        audio: {
            title: "Áudio",
            tofugu: "Áudios do <wanikani>WaniKani</wanikani>, o site de estudo de kanji e vocabulário da <tofugu>Tofugu</tofugu> (<github>arquivos de áudio no GitHub</github>).",
            kanjiAlive:
                "Áudios do projeto <kanjialive>Kanji alive</kanjialive> (<github>arquivos de áudio no GitHub</github>).",
        },
        strokeOrder: {
            title: "Ordem dos traços dos kanji",
            text: "Os dados da ordem dos traços vêm do <kanjivg>KanjiVG</kanjivg>, © 2009–2026 Ulrich Apel. Nós os convertemos para SVG com uma <fork>versão modificada</fork> do <original>kanjivg2svg</original> de Kim Ahlström, que usa a mesma licença.",
        },
        jlpt: {
            title: "Níveis do JLPT",
            text: "Os níveis do JLPT se baseiam nos <link>recursos de Jonathan Waller</link>.",
        },
        furigana: {
            title: "Furigana",
            text: "O furigana de palavras e nomes vem do projeto <link>JmdictFurigana</link>, sob a mesma licença do JMdict.",
        },
    },
    closing: "Os softwares e as fontes que o Jotoba usa estão listados em <link>Licenças de código aberto</link>.",
} satisfies PartialDict<typeof en>;
