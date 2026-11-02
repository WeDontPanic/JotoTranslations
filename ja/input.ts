import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "音声検索",
        title: "音声検索",
        language: "言語",
        japanese: "日本語",
        start: "音声入力を開始",
        stop: "音声入力を停止",
        engine: {
            device: "スマホ上で認識",
            online: "Androidがオンラインで認識",
            browser: "ブラウザが認識",
            info: "これはどういう意味？",
            about: {
                device: "音声はスマホ上でオフラインで文字に変換され、端末の外に出ません。Jotobaが受け取るのは文字だけです。Androidのオンラインサービスを使う場合は、設定 › 一般 の「端末で音声入力」をオフにしてください。",
                online: "Androidが音声を音声認識サービス（多くの端末ではGoogle）に送り、文字を受け取ります。Jotobaが受け取るのは文字だけです。スマホ上でオフラインでも認識できます：設定 › 一般 で言語をダウンロードしてください。",
                browser:
                    "ブラウザが音声を音声認識サービス（Chromeの場合はGoogle）に送り、文字を受け取ります。Jotobaが受け取るのは文字だけです。Android版Jotobaアプリなら、スマホ上でオフラインで認識できます。",
            },
        },
        status: {
            idle: "マイクを押して、単語を話してください。",
            listening: "聞き取り中です…単語を話してください。",
            "no-speech": "聞き取れませんでした。もう一度お試しください。",
            blocked:
                "マイクへのアクセスがブロックされています。ブラウザのサイト設定で許可してから、もう一度お試しください。",
            "no-microphone": "マイクが見つかりませんでした。",
            "no-language":
                "この言語はここでは音声入力に使えません。スマホでは、システム設定（言語 › 音声認識）でインストールできます。",
            unsupported: "このブラウザでは音声検索を利用できません。",
            failed: "音声検索が予期せず停止しました。もう一度お試しください。",
        },
    },
    handwriting: {
        mode: {
            label: "入力方法",
            radicals: "部首",
            write: "手書き",
        },
        pad: {
            label: "手書きエリア",
            placeholder: "ここに書く",
            hint: "指で単語や漢字を書いてください。候補は上に表示されます。タップで探す場合は「部首」に切り替えてください。",
        },
        candidates: {
            label: "認識候補",
            empty: "ここに候補が表示されます",
            busy: "認識中…",
        },
        undo: "元に戻す",
        delete: "1文字削除",
        clear: "書いた文字を消す",
        announce: {
            added: "{{text}}を検索に追加しました",
            removed: "{{text}}を検索から削除しました",
            stroke: "1画取り消しました",
            candidates: "候補{{count}}件、最初は{{text}}",
        },
        model: {
            intro: "手書き入力には、Googleからの一度だけのダウンロード（約{{size}}）が必要です。その後はオフラインで使えます。",
            download: "ダウンロード（{{size}}）",
            loading: "手書きモデルをダウンロード中（約{{size}}）… もう書き始められます。",
            ready: "手書き入力の準備ができました",
            failed: "ダウンロードできませんでした。接続を確認してください。",
            retry: "再試行",
            cellular: "モバイルデータ通信またはデータセーバーを使用中のようです。",
            offline: "オフラインです。ダウンロードするにはインターネットに接続してください。",
        },
        consent: {
            intro: "Jotobaは端末上でGoogle ML Kitを使って手書き文字を認識します。",
            local: "書いた内容は端末に残ります。Jotobaに送られるのは検索した語だけです。",
            metrics: "ML Kitは匿名の利用データ（端末の種類、アプリのバージョン、認識の性能）をGoogleに送信します。",
            download: "手書きモデル（約{{size}}）はGoogleから一度だけダウンロードされます。",
            change: "<settings>設定 › プライバシー</settings>でいつでも変更できます。<policy>プライバシーポリシー</policy>",
            decline: "同意しない",
            agree: "同意してダウンロード",
            declined: "手書き入力はオフのままです。設定 › プライバシーでオンにできます。",
        },
    },
} satisfies PartialDict<typeof en>;
