import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "ニュース",
    description: "Jotobaの最新情報：新機能、データの更新、不具合の修正。",
    intro: "Jotobaのお知らせです。新しい順に表示しています。",
    error: {
        title: "ニュースを読み込めませんでした",
        text: "しばらくしてからもう一度お試しください。",
        retry: "再試行",
    },
    empty: {
        title: "まだニュースはありません",
        text: "Jotobaのお知らせはここに表示されます。",
    },
    new: "新着",
} satisfies PartialDict<typeof en>;
