import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "Этот текст доступен только на английском языке.",
    imprint: {
        title: "Выходные данные",
        description: "Выходные данные и юридическая информация о Jotoba.",
        contact: "Контактная информация",
        email: "Эл. почта: <link>{{email}}</link>",
    },
    privacy: {
        title: "Политика конфиденциальности",
        heading: "Политика конфиденциальности Jotoba.de",
        description: "Какие данные хранит Jotoba, зачем и как их изменить или удалить.",
        lastUpdated: "Последнее обновление: {{date}}",
    },
    terms: {
        title: "Условия использования",
        heading: "Условия использования",
        description: "Условия использования словаря Jotoba и его данных.",
        lastUpdated: "Последнее обновление: {{date}}",
    },
} satisfies PartialDict<typeof en>;
