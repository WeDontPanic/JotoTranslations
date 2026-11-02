import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "再試行",
    cancel: "キャンセル",
    newTab: "（新しいタブで開きます）",

    meta: {
        page: "{{title}}（{{page}}ページ目）",
        join: "{{first}}{{second}}",
        listSeparator: "、",
        words: {
            inJapanese: "{{query}}を日本語で",
            withTags: "{{query}}の日本語の単語",
            forWritten: "「{{query}}」の単語：{{list}}",
            meaning: "{{word}}の意味",
            meaningOf: "{{word}}の意味：{{meaning}}",
            queryMeaning: "{{query}}の意味：{{word}}",
            queryMeaningOf: "{{query}}の意味：{{word}}、{{meaning}}",
            translation: "{{query}}は日本語で{{word}}",
            description: "{{name}}：{{meanings}}。",
            descriptionPlain: "{{name}}。",
            leadJapanese: "{{query}}：{{text}}",
            leadLatin: "「{{query}}」の日本語：{{text}}",
            fallback: "Jotoba辞書で見つかる「{{query}}」の日本語の単語。",
        },
        facts: {
            common: "よく使われる語。",
            commonJlpt: "よく使われる語、JLPT N{{level}}。",
            jlpt: "JLPT N{{level}}。",
        },
        kanji: {
            withMeaning: "漢字「{{kanji}}」：{{meaning}}、読み方と筆順",
            plain: "漢字「{{kanji}}」：意味、読み方、筆順",
            item: "{{kanji}}：{{meanings}}",
            description: "{{kanji}}。読み方、部首、構成要素、筆順アニメーション。",
        },
        sentences: {
            title: "{{query}}を含む日本語の例文",
            titleCount: {
                other: "{{query}}を含む日本語の例文{{count}}件",
            },
            description: "{{query}}を含む日本語の例文（ふりがな・訳付き）。",
        },
        names: {
            title: "{{query}}：日本の名前と読み方",
            titleReading: "{{query}}（{{reading}}）：日本の名前と読み方",
            description: "{{query}}に当たる日本の名前：読み方、ローマ字表記、名前の種類。",
        },
    },

    heading: {
        page: "{{page}}/{{pages}}ページ",
        separator: "、",
        words: {
            some: "「<query></query>」の単語",
            count: { other: "「<query></query>」の単語{{count}}件" },
            none: "「<query></query>」の単語はありません",
        },
        kanji: {
            some: "「<query></query>」の漢字",
            count: { other: "「<query></query>」の漢字{{count}}字" },
            none: "「<query></query>」の漢字はありません",
            someIn: "「<query></query>」に含まれる漢字",
            countIn: { other: "「<query></query>」に含まれる漢字{{count}}字" },
            noneIn: "「<query></query>」に含まれる漢字はありません",
            single: "漢字「<query></query>」：{{meaning}}",
            singlePlain: "漢字「<query></query>」",
        },
        sentences: {
            some: "「<query></query>」の例文",
            count: { other: "「<query></query>」の例文{{count}}件" },
            none: "「<query></query>」の例文はありません",
        },
        names: {
            some: "「<query></query>」の名前",
            count: { other: "「<query></query>」の名前{{count}}件" },
            none: "「<query></query>」の名前はありません",
        },
    },

    announce: {
        otherWord: "{{query}}の検索結果",
        results: {
            other: "検索結果{{count}}件、{{page}}/{{pages}}ページ",
        },
        none: "検索結果はありません",
        reloaded: "オンラインで再読み込みしました。{{results}}",
    },

    invalidSplits: "指定した単語の区切りが無効だったため、リセットしました",

    languageNotice: {
        text: "{{language}}の検索結果（リンクの指定）",
        switch: "{{language}}に切り替え",
    },

    status: {
        loading: "検索結果を読み込み中…",
        jokes: {
            countingWords: "単語を数えています",
            drawingKanji: "漢字を書いています",
            infinity: "無限まで数えています",
            features: "新機能を考えています",
            sandwich: "おにぎりでも買ってきませんか？",
            countToTen: "10まで数えてください",
            wifiCable: "Wi-Fiケーブルを探しています",
            pnp: "P=NPを証明しています",
            misspelled: "わざと誤字をまぜています",
            elevatorMusic: "TODO：エレベーター音楽を流す",
            premium: "プレミアムプランならもっと速いです",
            ones: "1だけ残して0を全部捨てています",
            trapped: "助けて、読み込み画面に閉じ込められました！",
            messages: "役に立たない読み込みメッセージを考えています",
            yoroshiku: "「よろしく」を翻訳しています",
        },
    },

    message: {
        offline: {
            title: "オフラインです",
            text: "接続を確認し、オンラインに戻ったらもう一度お試しください。",
        },
        invalid: {
            title: "Jotoくんにはこの検索を処理できません",
            text: "短くするか、別の言葉で検索してみてください。",
        },
        error: {
            title: "Jotoくんは今、一生懸命働いているようです。",
            text: "しばらくしてからもう一度お試しください。",
        },
        empty: {
            title: "検索に一致する結果は見つかりませんでした。",
            text: "表記を確認するか、短い言葉や別の検索タイプで試してみてください。",
            otherResults: "ただし、他のカテゴリーには結果があります：",
        },
        number: {
            title: "この数字についてもっと知る",
            text: "ほかのカテゴリーで調べてみましょう：",
            empty: "この数字の項目はありません。",
        },
    },

    easterEgg: {
        title: "見つかっちゃった！",
        highlight: "名前が気になると思っていました！",
        text: "<strong>Jotoba</strong>は実在する単語ではありません。<kotoba></kotoba>の「K」を「Japanese」の「J」に置き換えた造語です。",
    },

    help: {
        otherCategory: "「{{query}}」を他のカテゴリーで検索：",
        otherResults: "他のカテゴリーの検索結果",
        otherLanguages: "他の言語には検索結果があります：",
        count: {
            exact: { other: "、{{count}}件" },
            moreThan: { other: "、{{count}}件以上" },
            fewerThan: { other: "、{{count}}件未満" },
        },
    },

    sentences: {
        hidden: "訳は非表示です",
        showAll: "すべての訳を表示",
        hideAll: "すべての訳を非表示",
    },

    words: {
        customSplits: "単語の区切りを手動で指定中",
        resetSplits: "リセット",
        grammar: "文法",
        inflection: "活用",
        inflectionText: {
            other: "<query></query>は<lexeme></lexeme>の活用形です。検出した活用：",
        },
        number: "数",
        numberText: "<query></query>は<value></value>です",
    },

    reader: {
        title: "文の解析",
        words: "文の単語",
        selected: "選択中：<word></word>",
        wrap: "折り返す",
        oneLine: "1行で表示",
        edit: "単語の区切りを編集",
    },

    splitEditor: {
        title: "単語の区切りを編集",
        help: "文字と文字の間をタップすると、単語を分けたりつなげたりできます。",
        boundaries: "単語の区切り",
        boundary: "{{first}}と{{second}}の間の区切り",
        split: "{{character}}の後で区切りました",
        joined: "{{first}}と{{second}}をつなげました",
        save: "保存",
        reset: "自動に戻す",
    },

    report: {
        question: "並び順がおかしいですか？",
        title: "並び順の問題を報告",
        sending: "送信中…",
        send: "報告を送信",
        alreadyReported: "この検索はすでに報告済みです。別の問題がある場合のみ、もう一度報告してください。",
        context: {
            search: "検索",
            page: "ページ",
            word: "単語",
            position: "{{position}}番目",
        },
        reason: {
            label: "どのような問題ですか？",
            singleWord: "単語ごとに報告するには、その単語の横のメニューを使ってください。",
        },
        reasons: {
            listMissing: "探している単語がない、または下のほうにある",
            listOther: "並び順に関するその他の問題",
            wordHigher: "この単語はもっと上にあるべき",
            wordLower: "この単語はもっと下にあるべき",
            wordNotRelevant: "この単語はこの検索に関係ない",
            wordOther: "その他",
        },
        expected: {
            label: "探している単語",
            subLabel: "漢字、かな、またはローマ字",
        },
        comment: {
            label: "コメント",
            optional: "コメント（任意）",
            placeholder: "本来どうなるべきだと思いますか？",
            charsLeft: { other: "残り{{count}}文字" },
        },
        errors: {
            reason: "問題の種類を選んでください",
            expected: "探している単語を入力してください",
            comment: "問題の内容を入力してください",
        },
        privacy:
            "アカウントは不要です。報告にはこの検索、このページの検索結果の並び順、回答内容が含まれ、検索の改善のためにのみ使われます。個人情報は書かないでください。<link>プライバシーポリシー</link>",
        privacyLocal:
            "報告にはこの検索、このページの検索結果の並び順、回答内容が含まれ、検索の改善のためにのみ使われます。個人情報は書かないでください。<link>プライバシーポリシー</link>",
        outcome: {
            rateLimited: "短時間に報告が多すぎます。数分後にもう一度お試しください。",
            rejected: "報告を送信できませんでした。回答を確認して、もう一度お試しください。",
            queueFull: "送信待ちの報告が多すぎます。しばらくしてからもう一度お試しください。",
            sent: "報告を送信しました。ありがとうございます",
            queued: "報告をこのデバイスに保存しました。報告を受け付けられるようになったら送信します。",
            offline: "オフラインです。オンラインに戻ったら報告を送信します。",
            duplicate: "この報告はすでに送信済みです",
        },
    },

    details: {
        tabs: {
            word: "単語",
            kanji: "漢字",
            sentences: "例文",
            collocations: "コロケーション",
            conjugations: "活用",
            words: "単語",
        },
        wordSections: "単語の項目",
        sentenceSections: "例文の項目",
        editInJmdict: "JMDictで編集",
        conjugationsOf: "{{word}}の活用",
        showTranslation: "訳を表示",
        hideTranslation: "訳を非表示",
        analyze: "単語を解析",
        notFoundTitle: "見つかりません",
        notFound: {
            word: "この単語は存在しません",
            sentence: "この例文は存在しません",
        },
        notFoundText: "リンクが壊れているか、項目が削除された可能性があります。",
        loadFailed: {
            word: "単語を読み込めませんでした",
            sentence: "例文を読み込めませんでした",
        },
        /** The app's offline dictionary has no answer for this page */
        offline: {
            word: "この単語はオフライン辞書にありません",
            sentence: "この例文にはインターネット接続が必要です",
            text: "オンラインに戻ると表示されます。",
            back: "戻る",
        },
        sentences: {
            title: "{{word}}を含む例文",
            failed: "例文を読み込めませんでした。",
            offline: "例文にはインターネット接続が必要です。オンラインに戻ると表示されます。",
            none: "{{word}}の例文はありません。",
            all: "{{word}}を含むすべての例文（{{pages}}ページ）",
            open: "例文検索で開く",
        },
        meta: {
            wordTitle: "{{name}}の意味：{{meaning}}",
            conjugationTitle: "{{name}}の活用：すべての活用形",
            conjugationDescription:
                "{{name}}（{{meaning}}）の活用：丁寧形、否定形、過去形、て形、可能形、受身形、使役形など。",
            conjugationDescriptionPlain: "{{name}}の活用：丁寧形、否定形、過去形、て形、可能形、受身形、使役形など。",
            sentenceTitle: "{{text}}（{{translation}}）",
            sentenceDescription: "{{text}}（{{translation}}）：この日本語の文に含まれる単語と漢字。",
            sentenceDescriptionPlain: "{{text}}：この日本語の文に含まれる単語と漢字。",
        },
    },

    summary: {
        sentence: "<name></name>は「{{gloss}}」という意味の{{kind}}です。",
        sentenceJlpt: "<name></name>は「{{gloss}}」という意味の{{kind}}です（JLPT N{{level}}）。",
        name: {
            readingRomaji: "<written></written>（<reading></reading>、<romaji></romaji>）",
            reading: "<written></written>（<reading></reading>）",
            romaji: "<written></written>（<romaji></romaji>）",
        },
        kinds: {
            noun: "名詞",
            nounAndSuruVerb: "名詞・する動詞",
            adverb: "副詞",
            auxiliary: "補助語",
            auxiliaryAdjective: "補助形容詞",
            auxiliaryVerb: "助動詞",
            conjunction: "接続詞",
            counter: "助数詞",
            expression: "表現",
            interjection: "感動詞",
            numeral: "数詞",
            pronoun: "代名詞",
            prefix: "接頭辞",
            suffix: "接尾辞",
            particle: "助詞",
            iAdjective: "い形容詞",
            naAdjective: "な形容詞",
            noAdjective: "の形容詞",
            preNounAdjectival: "連体詞",
            adjective: "形容詞",
            ichidanVerb: "一段動詞",
            godanVerb: "五段動詞",
            yodanVerb: "四段動詞",
            nidanVerb: "二段動詞",
            suruVerb: "する動詞",
            irregularVerb: "不規則動詞",
            verb: "動詞",
            word: "語",
        },
        commonKinds: {
            noun: "よく使われる名詞",
            nounAndSuruVerb: "よく使われる名詞・する動詞",
            adverb: "よく使われる副詞",
            auxiliary: "よく使われる補助語",
            auxiliaryAdjective: "よく使われる補助形容詞",
            auxiliaryVerb: "よく使われる助動詞",
            conjunction: "よく使われる接続詞",
            counter: "よく使われる助数詞",
            expression: "よく使われる表現",
            interjection: "よく使われる感動詞",
            numeral: "よく使われる数詞",
            pronoun: "よく使われる代名詞",
            prefix: "よく使われる接頭辞",
            suffix: "よく使われる接尾辞",
            particle: "よく使われる助詞",
            iAdjective: "よく使われるい形容詞",
            naAdjective: "よく使われるな形容詞",
            noAdjective: "よく使われるの形容詞",
            preNounAdjectival: "よく使われる連体詞",
            adjective: "よく使われる形容詞",
            ichidanVerb: "よく使われる一段動詞",
            godanVerb: "よく使われる五段動詞",
            yodanVerb: "よく使われる四段動詞",
            nidanVerb: "よく使われる二段動詞",
            suruVerb: "よく使われるする動詞",
            irregularVerb: "よく使われる不規則動詞",
            verb: "よく使われる動詞",
            word: "よく使われる語",
        },
    },
} satisfies PartialDict<typeof en>;
