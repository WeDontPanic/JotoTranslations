import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Меню",
        unread: "Меню (непрочитанных новостей: {{count}})",
    },
    drawer: {
        title: "Меню",
        mainNav: "Главное меню",
        aboutNav: "О Jotoba",
        development: "Разработка",
        unread: "непрочитанных",
        offlineUpdate: "(есть обновление)",
        offlineOutdated: "(нужно обновить)",
        offlineRemoved: "(больше нет на этом устройстве)",
    },
    links: {
        bookmarks: "Закладки",
        settings: "Настройки",
        history: "Недавние запросы",
        offline: "Офлайн-словарь",
        news: "Новости",
        help: "Справка и тур",
        components: "Компоненты",
        apiTest: "Тест API",
        about: "О проекте",
        licenses: "Лицензии открытого ПО",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        imprint: "Выходные данные",
        home: "Главная",
        quit: "Выйти из приложения",
    },
    news: {
        button: "Новости",
        buttonUnread: "Новости, непрочитанных: {{count}}",
        title: "Новости",
        freshCount: "Новых: {{count}}",
        new: "Новое",
        showAll: "Все новости",
        close: "Закрыть",
        empty: "Новостей пока нет",
        error: "Сейчас не удаётся загрузить новости.",
        retry: "Повторить",
        status: {
            fresh: {
                one: "{{count}} новая запись",
                few: "{{count}} новые записи",
                many: "{{count}} новых записей",
                other: "{{count}} новой записи",
            },
            noneFresh: "Новых записей нет",
        },
    },
} satisfies PartialDict<typeof en>;
