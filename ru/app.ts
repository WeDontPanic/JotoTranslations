import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "Перейти к содержимому",
    header: {
        home: "Главная страница Jotoba",
        signIn: "Войти",
        signUp: "Регистрация",
    },
    account: {
        label: "Аккаунт",
        labelNamed: "Аккаунт, вы вошли как {{name}}",
        signedInAs: "Вы вошли как {{name}}",
        bookmarks: "Закладки",
        settings: "Настройки",
        signOut: "Выйти",
        signedOut: "Вы вышли из аккаунта",
        signOutFailed: "Не удалось выйти. Попробуйте ещё раз.",
    },
    footer: {
        label: "Подвал сайта",
        about: {
            title: "О проекте",
            credits:
                "Jotoba использует множество свободных источников данных. Основные из них — <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> и <jmnedict>JMnedict</jmnedict>. Они принадлежат <edrdg>Electronic Dictionary Research and Development Group</edrdg> и используются в соответствии с её <license>лицензией</license>.",
            contributors: "Список всех участников — на странице <link>О проекте</link>.",
        },
        links: {
            title: "Ссылки",
            androidApp: "Приложение для Android",
            about: "О проекте",
            privacy: "Политика конфиденциальности",
            terms: "Условия использования",
            imprint: "Выходные данные",
            licenses: "Лицензии открытого ПО",
        },
        support: {
            title: "Поддержать нас",
            paypal: "Пожертвования делятся между разработчиками",
        },
        socials: {
            title: "Соцсети",
            github: "Исходный код",
            trello: "Наши планы",
        },
    },
    cookieBanner: {
        title: "Всего один вопрос о cookie",
        text: "В Jotoba нет рекламы и отслеживающих cookie.",
        necessary: {
            label: "Необходимые",
            description: "Настройки, закладки, сочетания клавиш и вход в аккаунт",
            descriptionLocal: "Настройки, закладки и сочетания клавиш",
            badge: "Всегда включены",
        },
        optional: {
            label: "Быстрая загрузка",
            description: "Сохраняет файлы приложения на этом устройстве, чтобы Jotoba загружалась быстрее",
        },
        reject: "Отклонить необязательные",
        allow: "Разрешить необязательные",
        settingsLink: "Изменить можно в любой момент в настройках",
        privacyLink: "Политика конфиденциальности",
        saved: "Выбор сохранён. Изменить его можно в любой момент в настройках.",
        savedReject: "Выбор сохранён. «Быстрая загрузка» выключена. Изменить это можно в любой момент в настройках.",
        announce:
            "Вопрос о cookie: вы можете отклонить или разрешить сохранение файлов приложения для более быстрой загрузки.",
        pause: ".",
    },
    notFound: {
        title: "Такой страницы нет",
        text: "Возможно, ссылка неверна или запись была удалена.",
        home: "На главную",
        report: "Попали сюда по ссылке? <link>Сообщить о неработающей ссылке</link>",
    },
    tourHint: {
        newHere: "Впервые здесь?",
        start: "Пройти короткий тур",
        hide: "Скрыть подсказку о туре",
    },
    loadError: {
        offline: "Вы офлайн. Для этого нужен интернет.",
        unreachable: "Jotoba сейчас недоступна. Попробуйте ещё раз чуть позже.",
        failed: "Не удалось загрузить. Попробуйте ещё раз.",
        page: {
            offlineTitle: "Для этой страницы нужен интернет",
            offlineText:
                "Она не успела загрузиться до того, как пропала связь. Страница откроется, когда вы снова будете в сети.",
            title: "Не удалось загрузить страницу",
            text: "Обычно помогает перезагрузка.",
            reload: "Перезагрузить страницу",
        },
    },
    common: {
        close: "Закрыть",
        closeDialog: "Закрыть диалог",
        closeMessage: "Закрыть сообщение",
        loading: "Загрузка…",
        opensInNewTab: "(откроется в новой вкладке)",
        copyFailed: "Не удалось скопировать в буфер обмена",
        scrollBack: "Прокрутить назад",
        scrollForward: "Прокрутить вперёд",
        pages: {
            label: "Страницы",
            first: "Первая страница",
            previous: "Предыдущая страница",
            page: "Страница {{page}}",
            next: "Следующая страница",
            last: "Последняя страница",
        },
    },
} satisfies PartialDict<typeof en>;
