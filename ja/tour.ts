import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "どの方向からでも検索",
            description:
                "英語、日本語、かな、ローマ字で入力できます。入力中に検索候補が表示され、#n5のようなハッシュタグで検索結果を絞り込めます。",
            descriptionVoice:
                "英語、日本語、かな、ローマ字で入力するか、マイクで音声検索できます。入力中に検索候補が表示され、#n5のようなハッシュタグで検索結果を絞り込めます。",
            shortcut: "検索バーへ移動",
        },
        type: {
            title: "検索対象を選ぶ",
            description: "検索欄の横のメニューで、単語・漢字・例文・名前を切り替えられます。",
            shortcut: "検索結果ページで切り替え",
        },
        radicals: {
            title: "部首から漢字を探す",
            description: "読めない漢字がありますか？「部」を開いて分かる部首を選ぶと、Jotobaが当てはまる漢字を表示します。",
        },
        reader: {
            title: "文をまるごと読む",
            description:
                "日本語の文をそのまま検索すると、Jotobaが単語に分けます。単語を選ぶと、辞書形とどのように活用されたかが分かります。",
        },
        wordMenu: {
            title: "検索結果をもっと詳しく",
            description:
                "単語の横の⋮を開くと、活用、例文、共有用のリンク、詳細ページがあります。詳細ページではブックマークに保存できます。",
        },
        settings: {
            title: "設定とヘルプ",
            description:
                "メニューには、ブックマーク、設定、ニュース、ヘルプページがあります。ヘルプでは各機能の説明を読んだり、このツアーをもう一度始めたりできます。言語の設定はここで試せて、変更はすぐに反映されます。",
            descriptionSearchOnly:
                "メニューには、ブックマーク、設定、ニュース、ヘルプページがあります。ヘルプでは各機能の説明を読んだり、このツアーをもう一度始めたりできます。検索言語はここで試せて、変更はすぐに反映されます。",
        },
    },
    languages: {
        group: "言語",
    },
    progress: "{{current}}/{{total}}",
    announce: "ステップ{{current}}/{{total}}。{{title}}。{{description}}",
    close: "ツアーを閉じる",
    back: "戻る",
    next: "次へ",
    done: "完了",
    preview: {
        types: {
            words: "単語",
            kanji: "漢字",
            sentences: "例文",
            names: "名前",
        },
        gloss: "to eat",
        form: "過去・丁寧",
        wordMenu: {
            conjugations: "活用",
            sentenceSearch: "例文を検索",
            copyLink: "リンクをコピー",
            details: "詳細",
        },
    },
} satisfies PartialDict<typeof en>;
