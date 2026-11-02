import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "Новости",
    description: "Что нового в Jotoba: новые функции, обновления данных и исправления.",
    intro: "Новости Jotoba, сначала самые свежие.",
    error: {
        title: "Сейчас не удаётся загрузить новости",
        text: "Попробуйте ещё раз чуть позже.",
        retry: "Повторить",
    },
    empty: {
        title: "Новостей пока нет",
        text: "Здесь будут появляться новости о Jotoba.",
    },
    new: "Новое",
} satisfies PartialDict<typeof en>;
