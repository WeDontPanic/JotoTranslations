import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "どの方向からでも検索",
            description:
                "英語、日本語、かな、ローマ字で入力できます。入力中に検索候補が表示され、#n5のようなハッシュタグで検索結果を絞り込めます。猫（ねこ）で試してみましょう。",
            descriptionVoice:
                "英語、日本語、かな、ローマ字で入力するか、マイクで音声検索できます。入力中に検索候補が表示され、#n5のようなハッシュタグで検索結果を絞り込めます。猫（ねこ）で試してみましょう。",
            shortcut: "検索バーへ移動",
        },
        details: {
            title: "単語ごとに専用ページ",
            description: "単語を選ぶと、すべての意味、漢字、例文、活用が載ったページが開きます。",
            descriptionStatic: "検索結果の単語を選ぶと、すべての意味、漢字、例文、活用が載ったページが開きます。",
        },
        bookmark: {
            title: "単語をあとで見返す",
            description: "ブックマークボタンで単語をリストに保存できます。⋮には活用、例文、共有用のリンクがあります。",
            descriptionMenu: "単語の横の⋮を開くと、ブックマークの保存、活用の確認、例文の検索、リンクのコピーができます。",
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
        type: {
            title: "検索対象を選ぶ",
            description:
                "検索欄の横のメニューで、単語・漢字・例文・名前を切り替えられます。ここでは猫の漢字を表示しています。",
            descriptionStatic: "検索欄の横のメニューで、単語・漢字・例文・名前を切り替えられます。",
            shortcut: "検索結果ページで切り替え",
        },
        settings: {
            title: "ブックマーク、設定、ヘルプ",
            description:
                "メニューを開くと、ブックマーク、設定、ニュース、ヘルプページがあります。ヘルプではこのツアーをもう一度始められます。言語の設定はここで試せて、変更はすぐに反映されます。",
            descriptionSearchOnly:
                "メニューを開くと、ブックマーク、設定、ニュース、ヘルプページがあります。ヘルプではこのツアーをもう一度始められます。検索言語はここで試せて、変更はすぐに反映されます。",
        },
    },
    menuHint: {
        text: "ブックマークした単語は「ブックマーク」に保存されます。各リストは単語カードで学習することもできます。",
        done: "完了",
    },
    languages: {
        group: "言語",
    },
    progress: "{{current}}/{{total}}",
    announce: "ステップ{{current}}/{{total}}。{{title}}。{{description}}",
    announceResumed: "ツアーに戻りました。ステップ{{current}}/{{total}}。",
    close: "ツアーを閉じる",
    back: "戻る",
    next: "次へ",
    done: "完了",
    searchExample: "{{query}}を検索",
    searching: "検索中…",
    loading: "読み込み中…",
    openMenu: "メニューを開く",
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
            bookmark: "ブックマーク",
            conjugations: "活用",
            sentenceSearch: "例文を検索",
            copyLink: "リンクをコピー",
        },
    },
} satisfies PartialDict<typeof en>;
