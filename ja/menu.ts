import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "メニュー",
        unread: "メニュー（未読のニュース{{count}}件）",
    },
    drawer: {
        title: "メニュー",
        mainNav: "メイン",
        aboutNav: "Jotobaについて",
        development: "開発",
        unread: "未読",
        offlineUpdate: "（更新あり）",
        offlineOutdated: "（更新が必要）",
        offlineRemoved: "（この端末にはもうありません）",
    },
    links: {
        bookmarks: "ブックマーク",
        settings: "設定",
        history: "最近の検索",
        offline: "オフライン辞書",
        news: "ニュース",
        help: "ヘルプとツアー",
        components: "コンポーネント",
        apiTest: "APIテスト",
        about: "Jotobaについて",
        licenses: "オープンソースライセンス",
        privacy: "プライバシーポリシー",
        terms: "利用規約",
        imprint: "運営者情報",
        home: "ホーム",
        quit: "アプリを終了",
    },
    news: {
        button: "ニュース",
        buttonUnread: "ニュース（未読{{count}}件）",
        title: "ニュース",
        freshCount: "新着{{count}}",
        new: "新着",
        showAll: "すべてのニュースを表示",
        close: "閉じる",
        empty: "ニュースはありません",
        error: "現在ニュースを読み込めません。",
        retry: "再試行",
        status: {
            fresh: { other: "新着{{count}}件" },
            noneFresh: "新着はありません",
        },
    },
} satisfies PartialDict<typeof en>;
