import type en from "../en/about";
import type { PartialDict } from "../types";

export default {
    title: "Jotobaについて",
    description: "Jotobaの制作者と、辞書データ・例文・音声・筆順の出典。",
    heading: "Jotobaについて",
    intro: "Jotobaは、単語・漢字・例文・名前を調べられる無料の日本語辞書です。多くの人が無料で公開しているリソースをもとに作られています。このページでは、そのリソースとJotobaを作っている人たちを紹介します。",
    team: {
        title: "Jotobaを作っている人",
        roles: {
            backend: "バックエンド",
            frontend: "フロントエンド",
        },
    },
    jotoKun: "私たちのたぬき、Jotoくんは、デザインの達人である友人が描いてくれました。",
    sources: {
        title: "データの出典",
        intro: "これらのリソースを作成し、公開しているすべての方に感謝します。それぞれのリソースは、そのライセンスに従って利用しています。ラベルは、検索結果での出典の表示を示しています。",
        license: "ライセンス：<link>{{name}}</link>",
        dictionary: {
            title: "単語・漢字・名前",
            text: "単語・漢字・名前のデータは、<jmdict>JMdict</jmdict>、<kanjidic>KANJIDIC2</kanjidic>、<kradfile>KRADFILE</kradfile>、<jmnedict>JMnedict</jmnedict>を利用しています。これらのファイルは<edrdg>Electronic Dictionary Research and Development Group</edrdg>の所有物です。",
        },
        sentences: {
            title: "例文",
            tatoeba:
                "<tatoeba>Tatoeba</tatoeba>の例文です。田中康仁教授による田中コーパスをもとにしています。単語検索の例文も田中コーパスのものです。",
            kevin: "<kevin>Kevin Goes to Japan</kevin>の著者から直接提供していただいた例文です。",
            own: "Jotobaチームが追加した例文です。",
        },
        audio: {
            title: "音声",
            tofugu: "<tofugu>Tofugu</tofugu>の漢字・語彙学習サイト<wanikani>WaniKani</wanikani>の音声です（<github>GitHubの音声ファイル</github>）。",
            kanjiAlive:
                "<kanjialive>Kanji alive</kanjialive>プロジェクトの音声です（<github>GitHubの音声ファイル</github>）。",
        },
        strokeOrder: {
            title: "漢字の筆順",
            text: "筆順のデータは<kanjivg>KanjiVG</kanjivg>（© 2009–2023 Ulrich Apel）のものです。Kim Ahlströmによる<original>kanjivg2svg</original>の<fork>改変版</fork>でSVGに変換しています。改変版も同じライセンスです。",
        },
        jlpt: {
            title: "JLPTのレベル",
            text: "JLPTのレベルは<link>Jonathan Wallerによるリソース</link>をもとにしています。",
        },
        furigana: {
            title: "ふりがな",
            text: "単語と名前のふりがなは<link>JmdictFurigana</link>プロジェクトのもので、JMdictと同じライセンスです。",
        },
    },
    closing: "Jotobaで使っているソフトウェアとフォントは<link>オープンソースライセンス</link>に掲載しています。",
} satisfies PartialDict<typeof en>;
