import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "このページは英語のみです。",
    imprint: {
        title: "運営者情報",
        description: "Jotobaの運営者情報と法的情報。",
        contact: "連絡先",
        email: "メール：<link>{{email}}</link>",
    },
    privacy: {
        title: "プライバシーポリシー",
        heading: "Jotoba.deのプライバシーポリシー",
        description: "Jotobaが保存するデータ、その理由、データの変更・削除の方法。",
        lastUpdated: "最終更新日：{{date}}",
    },
    terms: {
        title: "利用規約",
        heading: "利用規約",
        description: "Jotoba辞書とそのデータの利用に関する規約。",
        lastUpdated: "最終更新日：{{date}}",
    },
} satisfies PartialDict<typeof en>;
