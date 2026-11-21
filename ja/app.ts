import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "本文へスキップ",
    header: {
        home: "Jotobaトップページ",
        signIn: "ログイン",
        signUp: "新規登録",
    },
    account: {
        label: "アカウント",
        labelNamed: "アカウント（{{name}}としてログイン中）",
        signedInAs: "{{name}}としてログイン中",
        bookmarks: "ブックマーク",
        settings: "設定",
        signOut: "ログアウト",
        signedOut: "ログアウトしました",
        signOutFailed: "ログアウトできませんでした。もう一度お試しください。",
    },
    footer: {
        label: "フッター",
        about: {
            title: "Jotobaについて",
            credits:
                "Jotobaは多くのフリーのデータソースを利用しています。主なものは<jmdict>JMdict</jmdict>、<kanjidic>KANJIDIC2</kanjidic>、<kradfile>KRADFILE</kradfile>、<jmnedict>JMnedict</jmnedict>で、これらは<edrdg>Electronic Dictionary Research and Development Group</edrdg>の所有物であり、同グループの<license>ライセンス</license>に従って使用しています。",
            contributors: "すべての貢献者の一覧は<link>Jotobaについて</link>のページをご覧ください。",
        },
        links: {
            title: "リンク",
            androidApp: "Androidアプリ",
            about: "Jotobaについて",
            privacy: "プライバシーポリシー",
            terms: "利用規約",
            imprint: "運営者情報",
            licenses: "オープンソースライセンス",
        },
        support: {
            title: "支援",
            paypal: "寄付は開発者の間で分配されます",
        },
        socials: {
            title: "SNS",
            github: "ソースコード",
            trello: "ロードマップ",
        },
    },
    cookieBanner: {
        title: "Cookieについてひとつだけ",
        text: "Jotobaには広告もトラッキングCookieもありません。",
        necessary: {
            label: "必要",
            description: "設定、ブックマーク、ショートカットキー、ログイン",
            descriptionLocal: "設定、ブックマーク、ショートカットキー",
            badge: "常にオン",
        },
        optional: {
            label: "高速読み込み",
            description: "アプリのファイルをこの端末に保存（高速表示）",
        },
        reject: "任意を拒否",
        allow: "任意を許可",
        settingsLink: "設定でいつでも変更",
        privacyLink: "プライバシーポリシー",
        saved: "選択を保存しました。設定でいつでも変更できます。",
        savedReject: "選択を保存しました。高速読み込みはオフです。設定でいつでも変更できます。",
        announce: "Cookieについての質問：高速読み込みのためのアプリファイルの保存を拒否または許可できます。",
        pause: "。",
    },
    notFound: {
        title: "このページは存在しません",
        text: "リンクが壊れているか、項目が削除された可能性があります。",
        home: "トップページへ",
        report: "リンクからここに来ましたか？<link>リンク切れを報告</link>",
    },
    tourHint: {
        newHere: "初めてですか？",
        start: "使い方ツアーを開始",
        hide: "ツアーの案内を非表示",
    },
    loadError: {
        offline: "オフラインです。インターネット接続が必要です。",
        unreachable: "現在Jotobaに接続できません。少し待ってからもう一度お試しください。",
        failed: "読み込めませんでした。もう一度お試しください。",
        page: {
            offlineTitle: "このページにはインターネット接続が必要です",
            offlineText: "オフラインになる前に読み込まれていませんでした。オンラインに戻ると開けます。",
            title: "このページを読み込めませんでした",
            text: "再読み込みすると表示されることがあります。",
            reload: "ページを再読み込み",
        },
    },
    common: {
        close: "閉じる",
        closeDialog: "ダイアログを閉じる",
        closeMessage: "メッセージを閉じる",
        loading: "読み込み中…",
        opensInNewTab: "（新しいタブで開きます）",
        copyFailed: "クリップボードにコピーできませんでした",
        scrollBack: "前へスクロール",
        scrollForward: "次へスクロール",
        pages: {
            label: "ページ",
            first: "最初のページ",
            previous: "前のページ",
            page: "{{page}}ページ",
            next: "次のページ",
            last: "最後のページ",
        },
    },
} satisfies PartialDict<typeof en>;
