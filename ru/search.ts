import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "Повторить",
    cancel: "Отмена",
    newTab: "(откроется в новой вкладке)",

    // Document titles and descriptions; " | Jotoba" is added by the app
    meta: {
        page: "{{title}}, страница {{page}}",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} по-японски",
            withTags: "Японские слова с {{query}}",
            forWritten: "Японские слова для {{query}}: {{list}}",
            meaning: "{{word}} — значение",
            meaningOf: "{{word}} — значение: {{meaning}}",
            queryMeaning: "{{query}} — значение: {{word}}",
            queryMeaningOf: "{{query}} — значение: {{word}}, {{meaning}}",
            translation: "{{query}} по-японски: {{word}}",
            description: "{{name}}: {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}}: {{text}}",
            leadLatin: "«{{query}}» по-японски: {{text}}",
            fallback: "Японские слова для «{{query}}» в словаре Jotoba.",
        },
        facts: {
            common: "Частое слово.",
            commonJlpt: "Частое слово, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "Кандзи {{kanji}}: {{meaning}}, чтения и порядок черт",
            plain: "Кандзи {{kanji}}: значение, чтения, порядок черт",
            item: "{{kanji}}: {{meanings}}",
            description: "{{kanji}}. Чтения, ключи, составные части и анимация порядка черт.",
        },
        sentences: {
            title: "Примеры японских предложений с {{query}}",
            titleCount: {
                one: "{{count}} пример японского предложения с {{query}}",
                few: "{{count}} примера японских предложений с {{query}}",
                many: "{{count}} примеров японских предложений с {{query}}",
                other: "{{count}} примера японских предложений с {{query}}",
            },
            description: "Примеры японских предложений с {{query}}, с фуриганой и переводами.",
        },
        names: {
            title: "{{query}}: японские имена и чтения",
            titleReading: "{{query}} ({{reading}}): японские имена и чтения",
            description: "Японские имена для {{query}}: чтения, транскрипции и виды имён.",
        },
    },

    // Heading of the results; <query></query> is replaced by the searched text
    heading: {
        page: "страница {{page}} из {{pages}}",
        // Read before the page info (the visible dot comes from CSS)
        separator: ", ",
        words: {
            some: "Слова по запросу <query></query>",
            count: {
                one: "{{count}} слово по запросу <query></query>",
                few: "{{count}} слова по запросу <query></query>",
                many: "{{count}} слов по запросу <query></query>",
                other: "{{count}} слова по запросу <query></query>",
            },
            none: "Нет слов по запросу <query></query>",
        },
        kanji: {
            some: "Кандзи по запросу <query></query>",
            count: {
                one: "{{count}} кандзи по запросу <query></query>",
                few: "{{count}} кандзи по запросу <query></query>",
                many: "{{count}} кандзи по запросу <query></query>",
                other: "{{count}} кандзи по запросу <query></query>",
            },
            none: "Нет кандзи по запросу <query></query>",
            someIn: "Кандзи в <query></query>",
            countIn: {
                one: "{{count}} кандзи в <query></query>",
                few: "{{count}} кандзи в <query></query>",
                many: "{{count}} кандзи в <query></query>",
                other: "{{count}} кандзи в <query></query>",
            },
            noneIn: "Нет кандзи в <query></query>",
            single: "Кандзи <query></query>: {{meaning}}",
            singlePlain: "Кандзи <query></query>",
        },
        sentences: {
            some: "Предложения по запросу <query></query>",
            count: {
                one: "{{count}} предложение по запросу <query></query>",
                few: "{{count}} предложения по запросу <query></query>",
                many: "{{count}} предложений по запросу <query></query>",
                other: "{{count}} предложения по запросу <query></query>",
            },
            none: "Нет предложений по запросу <query></query>",
        },
        names: {
            some: "Имена по запросу <query></query>",
            count: {
                one: "{{count}} имя по запросу <query></query>",
                few: "{{count}} имени по запросу <query></query>",
                many: "{{count}} имён по запросу <query></query>",
                other: "{{count}} имени по запросу <query></query>",
            },
            none: "Нет имён по запросу <query></query>",
        },
    },

    announce: {
        otherWord: "Результаты по запросу {{query}}",
        results: {
            one: "{{count}} результат, страница {{page}} из {{pages}}",
            few: "{{count}} результата, страница {{page}} из {{pages}}",
            many: "{{count}} результатов, страница {{page}} из {{pages}}",
            other: "{{count}} результата, страница {{page}} из {{pages}}",
        },
        none: "Нет результатов",
        reloaded: "Загружено онлайн. {{results}}",
    },

    invalidSplits: "Заданные вами границы слов были неверны и сброшены",

    languageNotice: {
        text: "Язык результатов: {{language}} (из ссылки)",
        switch: "Переключиться на {{language}}",
    },

    status: {
        loading: "Загрузка результатов…",
        jokes: {
            countingWords: "Считаем слова",
            drawingKanji: "Рисуем кандзи",
            infinity: "Считаем до бесконечности",
            features: "Планируем новые функции",
            sandwich: "Может, пока закажете бутерброд?",
            countToTen: "Просто посчитайте до 10",
            wifiCable: "Ищем кабель от Wi-Fi",
            pnp: "Доказываем, что P=NP",
            misspelled: "Добавляем случайные слова с ошипками",
            elevatorMusic: "TODO: вставить музыку из лифта",
            premium: "С премиум-подпиской быстрее",
            ones: "Оставляем все единицы и убираем все нули",
            trapped: "Помогите, я застрял в загрузке!",
            messages: "Придумываем бесполезные сообщения о загрузке",
            yoroshiku: "Переводим 「よろしく」",
        },
    },

    message: {
        offline: {
            title: "Вы не в сети",
            text: "Проверьте соединение и попробуйте снова, когда будете в сети.",
        },
        invalid: {
            title: "Joto не справляется с этим запросом",
            text: "Попробуйте запрос покороче или другой.",
        },
        error: {
            title: "Похоже, Joto сейчас очень занят.",
            text: "Попробуйте ещё раз чуть позже.",
        },
        empty: {
            title: "Мы не нашли то, что вы искали.",
            text: "Проверьте написание, попробуйте запрос покороче или смените тип поиска.",
            otherResults: "Но есть результаты в других категориях:",
        },
        number: {
            title: "Подробнее об этом числе",
            text: "Посмотрите в других категориях:",
            empty: "Для этого числа нет словарных статей.",
        },
    },

    easterEgg: {
        title: "Попались!",
        highlight: "Мы знали, что вам будет интересно наше название!",
        text: "<strong>Jotoba</strong> — не настоящее слово. Оно происходит от <kotoba></kotoba>, где «K» заменили на «J» — от «Japanese».",
    },

    help: {
        otherCategory: "Искать «{{query}}» в другой категории:",
        otherResults: "Результаты в других категориях",
        otherLanguages: "Есть результаты на других языках:",
        // Read after the visible "> 100" / "< 5"
        count: {
            exact: {
                one: ", {{count}} результат",
                few: ", {{count}} результата",
                many: ", {{count}} результатов",
                other: ", {{count}} результата",
            },
            moreThan: {
                one: ", больше {{count}} результата",
                few: ", больше {{count}} результатов",
                many: ", больше {{count}} результатов",
                other: ", больше {{count}} результата",
            },
            fewerThan: {
                one: ", меньше {{count}} результата",
                few: ", меньше {{count}} результатов",
                many: ", меньше {{count}} результатов",
                other: ", меньше {{count}} результата",
            },
        },
    },

    sentences: {
        hidden: "Переводы скрыты",
        showAll: "Показать все переводы",
        hideAll: "Скрыть все переводы",
    },

    words: {
        customSplits: "Свои границы слов",
        resetSplits: "Сбросить",
        grammar: "Грамматика",
        inflection: "Словоизменение",
        inflectionText: {
            one: "Для <query></query> (<lexeme></lexeme>) мы распознали следующую форму:",
            few: "Для <query></query> (<lexeme></lexeme>) мы распознали следующие формы:",
            many: "Для <query></query> (<lexeme></lexeme>) мы распознали следующие формы:",
            other: "Для <query></query> (<lexeme></lexeme>) мы распознали следующие формы:",
        },
        number: "Число",
        numberText: "<query></query> — это <value></value>",
    },

    reader: {
        title: "Разбор предложения",
        words: "Слова предложения",
        selected: "Выбрано: <word></word>",
        wrap: "Переносить",
        oneLine: "В одну строку",
        edit: "Изменить границы слов",
    },

    splitEditor: {
        title: "Изменить границы слов",
        help: "Нажмите между двумя символами, чтобы разделить или соединить слова.",
        boundaries: "Границы слов",
        boundary: "Граница между {{first}} и {{second}}",
        split: "Разделено после {{character}}",
        joined: "{{first}} и {{second}} соединены",
        save: "Сохранить",
        reset: "Разделить автоматически",
    },

    report: {
        question: "Не тот порядок, которого вы ждали?",
        title: "Сообщить о проблеме с порядком",
        sending: "Отправка…",
        send: "Отправить",
        alreadyReported: "Вы уже сообщали об этом поиске. Отправляйте ещё одно сообщение, только если не так что-то другое.",
        context: {
            search: "Поиск",
            page: "Страница",
            word: "Слово",
            position: "Позиция {{position}}",
        },
        reason: {
            label: "Что не так?",
            singleWord: "Чтобы сообщить об отдельном слове, используйте меню рядом с ним.",
        },
        reasons: {
            listMissing: "Нужного слова нет или оно слишком низко",
            listOther: "Что-то другое в порядке",
            wordHigher: "Это слово должно быть выше",
            wordLower: "Это слово должно быть ниже",
            wordNotRelevant: "Это слово не относится к этому поиску",
            wordOther: "Что-то другое",
        },
        expected: {
            label: "Ожидаемое слово",
            subLabel: "Кандзи, кана или ромадзи",
        },
        comment: {
            label: "Комментарий",
            optional: "Комментарий (необязательно)",
            placeholder: "Что вы ожидали увидеть?",
            charsLeft: {
                one: "Остался {{count}} символ",
                few: "Осталось {{count}} символа",
                many: "Осталось {{count}} символов",
                other: "Осталось {{count}} символа",
            },
        },
        errors: {
            reason: "Выберите, что не так",
            expected: "Введите ожидаемое слово",
            comment: "Опишите, что не так",
        },
        privacy:
            "Аккаунт не нужен. Сообщение содержит этот поиск, порядок результатов на этой странице и ваши ответы и читается только для улучшения поиска. Не указывайте личные данные. <link>Политика конфиденциальности</link>",
        privacyLocal:
            "Сообщение содержит этот поиск, порядок результатов на этой странице и ваши ответы и читается только для улучшения поиска. Не указывайте личные данные. <link>Политика конфиденциальности</link>",
        outcome: {
            rateLimited: "Слишком много сообщений за короткое время. Попробуйте через несколько минут.",
            rejected: "Не удалось отправить сообщение. Проверьте ответы и попробуйте ещё раз.",
            queueFull: "Слишком много сообщений ждут отправки. Попробуйте позже.",
            sent: "Спасибо, сообщение отправлено",
            queued: "Сообщение сохранено на этом устройстве. Оно будет отправлено, как только это станет возможно.",
            offline: "Вы не в сети. Сообщение будет отправлено, когда вы снова будете в сети.",
            duplicate: "Вы уже отправили это сообщение",
        },
    },

    details: {
        tabs: {
            word: "Слово",
            kanji: "Кандзи",
            sentences: "Предложения",
            collocations: "Сочетания",
            conjugations: "Спряжения",
            words: "Слова",
        },
        wordSections: "Разделы слова",
        sentenceSections: "Разделы предложения",
        editInJmdict: "Править в JMDict",
        conjugationsOf: "Спряжения {{word}}",
        showTranslation: "Показать перевод",
        hideTranslation: "Скрыть перевод",
        analyze: "Разобрать слова",
        notFoundTitle: "Не найдено",
        notFound: {
            word: "Такого слова нет",
            sentence: "Такого предложения нет",
        },
        notFoundText: "Возможно, ссылка неверна или запись была удалена.",
        loadFailed: {
            word: "Не удалось загрузить слово",
            sentence: "Не удалось загрузить предложение",
        },
        /** The app's offline dictionary has no answer for this page */
        offline: {
            word: "Этого слова нет в офлайн-словаре",
            sentence: "Для этого предложения нужен интернет",
            text: "Оно загрузится, когда вы снова будете в сети.",
            back: "Назад",
        },
        sentences: {
            title: "Предложения с {{word}}",
            failed: "Не удалось загрузить предложения.",
            offline: "Для примеров предложений нужен интернет. Они загрузятся, когда вы снова будете в сети.",
            none: "Нет примеров предложений с {{word}}.",
            all: "Все предложения с {{word}} (страниц: {{pages}})",
            open: "Открыть в поиске предложений",
        },
        meta: {
            wordTitle: "{{name}} — значение: {{meaning}}",
            conjugationTitle: "{{name}} — спряжение: все формы",
            conjugationDescription:
                "Как спрягается {{name}}, «{{meaning}}»: вежливая, отрицательная и прошедшая формы, тэ-форма, потенциальный, страдательный и побудительный залоги и не только.",
            conjugationDescriptionPlain:
                "Как спрягается {{name}}: вежливая, отрицательная и прошедшая формы, тэ-форма, потенциальный, страдательный и побудительный залоги и не только.",
            sentenceTitle: "{{text}} — «{{translation}}»",
            sentenceDescription: "{{text}} «{{translation}}» — слова и кандзи этого японского предложения.",
            sentenceDescriptionPlain: "{{text}} — слова и кандзи этого японского предложения.",
        },
    },

    // One sentence about a word below its head; <name></name> is the word with reading and romaji
    summary: {
        sentence: "<name></name> — {{kind}} со значением «{{gloss}}».",
        sentenceJlpt: "<name></name> — {{kind}} со значением «{{gloss}}» (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "японское существительное",
            nounAndSuruVerb: "японское существительное и суру-глагол",
            adverb: "японское наречие",
            auxiliary: "японское служебное слово",
            auxiliaryAdjective: "японское вспомогательное прилагательное",
            auxiliaryVerb: "японский вспомогательный глагол",
            conjunction: "японский союз",
            counter: "японский счётный суффикс",
            expression: "японское выражение",
            interjection: "японское междометие",
            numeral: "японское числительное",
            pronoun: "японское местоимение",
            prefix: "японский префикс",
            suffix: "японский суффикс",
            particle: "японская частица",
            iAdjective: "японское и-прилагательное",
            naAdjective: "японское на-прилагательное",
            noAdjective: "японское но-прилагательное",
            preNounAdjectival: "японское предыменное определение",
            adjective: "японское прилагательное",
            ichidanVerb: "японский итидан-глагол",
            godanVerb: "японский годан-глагол",
            yodanVerb: "японский ёдан-глагол",
            nidanVerb: "японский нидан-глагол",
            suruVerb: "японский суру-глагол",
            irregularVerb: "японский неправильный глагол",
            verb: "японский глагол",
            word: "японское слово",
        },
        commonKinds: {
            noun: "распространённое японское существительное",
            nounAndSuruVerb: "распространённое японское существительное и суру-глагол",
            adverb: "распространённое японское наречие",
            auxiliary: "распространённое японское служебное слово",
            auxiliaryAdjective: "распространённое японское вспомогательное прилагательное",
            auxiliaryVerb: "распространённый японский вспомогательный глагол",
            conjunction: "распространённый японский союз",
            counter: "распространённый японский счётный суффикс",
            expression: "распространённое японское выражение",
            interjection: "распространённое японское междометие",
            numeral: "распространённое японское числительное",
            pronoun: "распространённое японское местоимение",
            prefix: "распространённый японский префикс",
            suffix: "распространённый японский суффикс",
            particle: "распространённая японская частица",
            iAdjective: "распространённое японское и-прилагательное",
            naAdjective: "распространённое японское на-прилагательное",
            noAdjective: "распространённое японское но-прилагательное",
            preNounAdjectival: "распространённое японское предыменное определение",
            adjective: "распространённое японское прилагательное",
            ichidanVerb: "распространённый японский итидан-глагол",
            godanVerb: "распространённый японский годан-глагол",
            yodanVerb: "распространённый японский ёдан-глагол",
            nidanVerb: "распространённый японский нидан-глагол",
            suruVerb: "распространённый японский суру-глагол",
            irregularVerb: "распространённый японский неправильный глагол",
            verb: "распространённый японский глагол",
            word: "распространённое японское слово",
        },
    },
} satisfies PartialDict<typeof en>;
