import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "Erneut versuchen",
    cancel: "Abbrechen",
    newTab: "(öffnet in neuem Tab)",

    meta: {
        page: "{{title}}, Seite {{page}}",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} auf Japanisch",
            withTags: "Japanische Wörter mit {{query}}",
            forWritten: "Japanische Wörter für {{query}}: {{list}}",
            meaning: "{{word}} Bedeutung",
            meaningOf: "{{word}} Bedeutung: {{meaning}}",
            queryMeaning: "{{query}} Bedeutung: {{word}}",
            queryMeaningOf: "{{query}} Bedeutung: {{word}}, {{meaning}}",
            translation: "{{query}} auf Japanisch: {{word}}",
            description: "{{name}}: {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}}: {{text}}",
            leadLatin: "„{{query}}“ auf Japanisch: {{text}}",
            fallback: "Japanische Wörter für „{{query}}“ im Jotoba-Wörterbuch.",
        },
        facts: {
            common: "Häufiges Wort.",
            commonJlpt: "Häufiges Wort, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "Kanji {{kanji}}: {{meaning}}, Lesungen und Strichfolge",
            plain: "Kanji {{kanji}}: Bedeutung, Lesungen, Strichfolge",
            item: "{{kanji}}: {{meanings}}",
            description: "{{kanji}}. Lesungen, Radikale, Bestandteile und Animationen der Strichfolge.",
        },
        sentences: {
            title: "Japanische Beispielsätze mit {{query}}",
            titleCount: {
                one: "{{count}} japanischer Beispielsatz mit {{query}}",
                other: "{{count}} japanische Beispielsätze mit {{query}}",
            },
            description: "Japanische Beispielsätze mit {{query}}, mit Furigana und Übersetzungen.",
        },
        names: {
            title: "{{query}}: japanische Namen und Lesungen",
            titleReading: "{{query}} ({{reading}}): japanische Namen und Lesungen",
            description: "Japanische Namen für {{query}}: Lesungen, Umschriften und Namensarten.",
        },
    },

    heading: {
        page: "Seite {{page}} von {{pages}}",
        separator: ", ",
        words: {
            some: "Wörter für <query></query>",
            count: { one: "{{count}} Wort für <query></query>", other: "{{count}} Wörter für <query></query>" },
            none: "Keine Wörter für <query></query>",
        },
        kanji: {
            some: "Kanji für <query></query>",
            count: { one: "{{count}} Kanji für <query></query>", other: "{{count}} Kanji für <query></query>" },
            none: "Keine Kanji für <query></query>",
            someIn: "Kanji in <query></query>",
            countIn: { one: "{{count}} Kanji in <query></query>", other: "{{count}} Kanji in <query></query>" },
            noneIn: "Keine Kanji in <query></query>",
            single: "Kanji <query></query>: {{meaning}}",
            singlePlain: "Kanji <query></query>",
        },
        sentences: {
            some: "Sätze für <query></query>",
            count: { one: "{{count}} Satz für <query></query>", other: "{{count}} Sätze für <query></query>" },
            none: "Keine Sätze für <query></query>",
        },
        names: {
            some: "Namen für <query></query>",
            count: { one: "{{count}} Name für <query></query>", other: "{{count}} Namen für <query></query>" },
            none: "Keine Namen für <query></query>",
        },
    },

    announce: {
        otherWord: "Ergebnisse für {{query}}",
        results: {
            one: "{{count}} Ergebnis, Seite {{page}} von {{pages}}",
            other: "{{count}} Ergebnisse, Seite {{page}} von {{pages}}",
        },
        none: "Keine Ergebnisse",
        reloaded: "Online neu geladen. {{results}}",
    },

    invalidSplits: "Die eigenen Wortgrenzen waren ungültig und wurden zurückgesetzt",

    languageNotice: {
        text: "Ergebnisse auf {{language}} (aus dem Link)",
        switch: "Zu {{language}} wechseln",
    },

    status: {
        loading: "Ergebnisse werden geladen …",
        jokes: {
            countingWords: "Zähle Wörter",
            drawingKanji: "Zeichne Kanji",
            infinity: "Zähle bis unendlich",
            features: "Plane neue Funktionen",
            sandwich: "Wie wär’s mit einem Butterbrot?",
            countToTen: "Zähl einfach bis 10",
            wifiCable: "Suche das WLAN-Kabel",
            pnp: "Beweise P=NP",
            misspelled: "Füge zufälig falsch geschribene Wörter hinzu",
            elevatorMusic: "TODO: Fahrstuhlmusik einfügen",
            premium: "Unser Premium-Abo ist schneller",
            ones: "Behalte alle Einsen und entferne alle Nullen",
            trapped: "Hilfe, ich stecke in einem Ladebalken fest!",
            messages: "Erfinde weitere nutzlose Ladesprüche",
            yoroshiku: "Übersetze 「よろしく」",
        },
    },

    message: {
        offline: {
            title: "Du bist offline",
            text: "Prüfe deine Verbindung und versuche es erneut, sobald du wieder online bist.",
        },
        invalid: {
            title: "Mit dieser Suche kommt Joto nicht klar",
            text: "Versuche es mit einer kürzeren oder anderen Suche.",
        },
        error: {
            title: "Joto scheint gerade schwer beschäftigt zu sein.",
            text: "Bitte versuche es gleich noch einmal.",
        },
        empty: {
            title: "Wir konnten nicht finden, wonach du suchst.",
            text: "Prüfe die Schreibweise, versuche eine kürzere Suche oder wechsle die Suchart.",
            otherResults: "Aber in anderen Kategorien gibt es Ergebnisse:",
        },
        number: {
            title: "Mehr über diese Zahl",
            text: "Schau in den anderen Kategorien nach:",
            empty: "Zu dieser Zahl gibt es keine Wörterbucheinträge.",
        },
    },

    easterEgg: {
        title: "Erwischt!",
        highlight: "Wir wussten, dass du neugierig auf unseren Namen wirst!",
        text: "<strong>Jotoba</strong> ist kein echtes Wort. Es leitet sich von <kotoba></kotoba> ab, wobei das „K“ durch ein „J“ für „Japanisch“ ersetzt wurde.",
    },

    help: {
        otherCategory: "Nach „{{query}}“ in einer anderen Kategorie suchen:",
        otherResults: "Ergebnisse in anderen Kategorien",
        otherLanguages: "In anderen Sprachen gibt es Ergebnisse:",
        count: {
            exact: { one: ", {{count}} Ergebnis", other: ", {{count}} Ergebnisse" },
            moreThan: { one: ", mehr als {{count}} Ergebnis", other: ", mehr als {{count}} Ergebnisse" },
            fewerThan: { one: ", weniger als {{count}} Ergebnis", other: ", weniger als {{count}} Ergebnisse" },
        },
    },

    sentences: {
        hidden: "Übersetzungen sind ausgeblendet",
        showAll: "Alle Übersetzungen anzeigen",
        hideAll: "Alle Übersetzungen ausblenden",
    },

    words: {
        customSplits: "Eigene Wortgrenzen",
        resetSplits: "Zurücksetzen",
        grammar: "Grammatik",
        inflection: "Flexion",
        inflectionText: {
            one: "Wir haben für <query></query> (<lexeme></lexeme>) folgende Flexion erkannt:",
            other: "Wir haben für <query></query> (<lexeme></lexeme>) folgende Flexionen erkannt:",
        },
        number: "Zahl",
        numberText: "<query></query> ist <value></value>",
    },

    reader: {
        title: "Satzzerlegung",
        words: "Wörter des Satzes",
        selected: "Ausgewählt: <word></word>",
        wrap: "Umbrechen",
        oneLine: "Eine Zeile",
        edit: "Wortgrenzen bearbeiten",
    },

    splitEditor: {
        title: "Wortgrenzen bearbeiten",
        help: "Tippe zwischen zwei Zeichen, um Wörter zu trennen oder zu verbinden.",
        boundaries: "Wortgrenzen",
        boundary: "Grenze zwischen {{first}} und {{second}}",
        split: "Nach {{character}} getrennt",
        joined: "{{first}} und {{second}} verbunden",
        save: "Speichern",
        reset: "Automatisch trennen",
    },

    report: {
        question: "Nicht die erwartete Reihenfolge?",
        title: "Problem mit der Reihenfolge melden",
        sending: "Wird gesendet …",
        send: "Meldung senden",
        alreadyReported:
            "Du hast diese Suche schon gemeldet. Sende nur dann eine weitere Meldung, wenn etwas anderes nicht stimmt.",
        context: {
            search: "Suche",
            page: "Seite",
            word: "Wort",
            position: "Position {{position}}",
        },
        reason: {
            label: "Was stimmt nicht?",
            singleWord: "Um ein einzelnes Wort zu melden, nutze das Menü daneben.",
        },
        reasons: {
            listMissing: "Ein erwartetes Wort fehlt oder steht zu weit unten",
            listOther: "Etwas anderes an der Reihenfolge",
            wordHigher: "Dieses Wort sollte weiter oben stehen",
            wordLower: "Dieses Wort sollte weiter unten stehen",
            wordNotRelevant: "Dieses Wort passt nicht zu dieser Suche",
            wordOther: "Etwas anderes",
        },
        expected: {
            label: "Erwartetes Wort",
            subLabel: "Kanji, Kana oder Romaji",
        },
        comment: {
            label: "Kommentar",
            optional: "Kommentar (optional)",
            placeholder: "Was hättest du stattdessen erwartet?",
            charsLeft: { one: "Noch {{count}} Zeichen", other: "Noch {{count}} Zeichen" },
        },
        errors: {
            reason: "Wähle aus, was nicht stimmt",
            expected: "Gib das erwartete Wort ein",
            comment: "Beschreibe, was nicht stimmt",
        },
        privacy:
            "Kein Konto nötig. Die Meldung enthält diese Suche, die Reihenfolge der Ergebnisse auf dieser Seite und deine Antworten und wird nur gelesen, um die Suche zu verbessern. Bitte gib keine persönlichen Daten an. <link>Datenschutzerklärung</link>",
        privacyLocal:
            "Die Meldung enthält diese Suche, die Reihenfolge der Ergebnisse auf dieser Seite und deine Antworten und wird nur gelesen, um die Suche zu verbessern. Bitte gib keine persönlichen Daten an. <link>Datenschutzerklärung</link>",
        outcome: {
            rateLimited: "Zu viele Meldungen in kurzer Zeit. Versuche es in ein paar Minuten erneut.",
            rejected: "Die Meldung konnte nicht gesendet werden. Prüfe deine Angaben und versuche es erneut.",
            queueFull: "Zu viele Meldungen warten auf das Senden. Versuche es später erneut.",
            sent: "Danke, deine Meldung wurde gesendet",
            queued: "Meldung auf diesem Gerät gespeichert. Sie wird gesendet, sobald Meldungen möglich sind.",
            offline: "Du bist offline. Die Meldung wird gesendet, sobald du wieder online bist.",
            duplicate: "Du hast diese Meldung schon gesendet",
        },
    },

    details: {
        tabs: {
            word: "Wort",
            kanji: "Kanji",
            sentences: "Sätze",
            collocations: "Kollokationen",
            conjugations: "Konjugationen",
            words: "Wörter",
        },
        wordSections: "Abschnitte des Worts",
        sentenceSections: "Abschnitte des Satzes",
        editInJmdict: "In JMDict bearbeiten",
        conjugationsOf: "Konjugationen von {{word}}",
        showTranslation: "Übersetzung anzeigen",
        hideTranslation: "Übersetzung ausblenden",
        analyze: "Wörter analysieren",
        notFoundTitle: "Nicht gefunden",
        notFound: {
            word: "Dieses Wort gibt es nicht",
            sentence: "Diesen Satz gibt es nicht",
        },
        notFoundText: "Der Link ist vielleicht fehlerhaft oder der Eintrag wurde entfernt.",
        loadFailed: {
            word: "Das Wort konnte nicht geladen werden",
            sentence: "Der Satz konnte nicht geladen werden",
        },
        /** The app's offline dictionary has no answer for this page */
        offline: {
            word: "Dieses Wort fehlt im Offline-Wörterbuch",
            sentence: "Dieser Satz braucht Internet",
            text: "Wird geladen, sobald du wieder online bist.",
            back: "Zurück",
        },
        sentences: {
            title: "Sätze mit {{word}}",
            failed: "Die Sätze konnten nicht geladen werden.",
            offline: "Beispielsätze brauchen Internet. Sie werden geladen, sobald du wieder online bist.",
            none: "Keine Beispielsätze für {{word}}.",
            all: "Alle Sätze mit {{word}} ({{pages}} Seiten)",
            open: "In der Satzsuche öffnen",
        },
        meta: {
            wordTitle: "{{name}} Bedeutung: {{meaning}}",
            conjugationTitle: "{{name}} Konjugation: alle Formen",
            conjugationDescription:
                "So konjugierst du {{name}}, „{{meaning}}“: höflich, verneint, Vergangenheit, te-Form, Potential, Passiv, Kausativ und mehr.",
            conjugationDescriptionPlain:
                "So konjugierst du {{name}}: höflich, verneint, Vergangenheit, te-Form, Potential, Passiv, Kausativ und mehr.",
            sentenceTitle: "{{text}} – „{{translation}}“",
            sentenceDescription: "{{text}} „{{translation}}“ – die Wörter und Kanji dieses japanischen Satzes.",
            sentenceDescriptionPlain: "{{text}} – die Wörter und Kanji dieses japanischen Satzes.",
        },
    },

    summary: {
        sentence: "<name></name> ist {{kind}} mit der Bedeutung „{{gloss}}“.",
        sentenceJlpt: "<name></name> ist {{kind}} mit der Bedeutung „{{gloss}}“ (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "ein japanisches Nomen",
            nounAndSuruVerb: "ein japanisches Nomen und suru-Verb",
            adverb: "ein japanisches Adverb",
            auxiliary: "ein japanisches Hilfswort",
            auxiliaryAdjective: "ein japanisches Hilfsadjektiv",
            auxiliaryVerb: "ein japanisches Hilfsverb",
            conjunction: "eine japanische Konjunktion",
            counter: "ein japanisches Zählwort",
            expression: "ein japanischer Ausdruck",
            interjection: "eine japanische Interjektion",
            numeral: "ein japanisches Zahlwort",
            pronoun: "ein japanisches Pronomen",
            prefix: "ein japanisches Präfix",
            suffix: "ein japanisches Suffix",
            particle: "eine japanische Partikel",
            iAdjective: "ein japanisches i-Adjektiv",
            naAdjective: "ein japanisches na-Adjektiv",
            noAdjective: "ein japanisches no-Adjektiv",
            preNounAdjectival: "ein japanisches pränominales Adjektiv",
            adjective: "ein japanisches Adjektiv",
            ichidanVerb: "ein japanisches Ichidan-Verb",
            godanVerb: "ein japanisches Godan-Verb",
            yodanVerb: "ein japanisches Yodan-Verb",
            nidanVerb: "ein japanisches Nidan-Verb",
            suruVerb: "ein japanisches suru-Verb",
            irregularVerb: "ein unregelmäßiges japanisches Verb",
            verb: "ein japanisches Verb",
            word: "ein japanisches Wort",
        },
        commonKinds: {
            noun: "ein häufiges japanisches Nomen",
            nounAndSuruVerb: "ein häufiges japanisches Nomen und suru-Verb",
            adverb: "ein häufiges japanisches Adverb",
            auxiliary: "ein häufiges japanisches Hilfswort",
            auxiliaryAdjective: "ein häufiges japanisches Hilfsadjektiv",
            auxiliaryVerb: "ein häufiges japanisches Hilfsverb",
            conjunction: "eine häufige japanische Konjunktion",
            counter: "ein häufiges japanisches Zählwort",
            expression: "ein häufiger japanischer Ausdruck",
            interjection: "eine häufige japanische Interjektion",
            numeral: "ein häufiges japanisches Zahlwort",
            pronoun: "ein häufiges japanisches Pronomen",
            prefix: "ein häufiges japanisches Präfix",
            suffix: "ein häufiges japanisches Suffix",
            particle: "eine häufige japanische Partikel",
            iAdjective: "ein häufiges japanisches i-Adjektiv",
            naAdjective: "ein häufiges japanisches na-Adjektiv",
            noAdjective: "ein häufiges japanisches no-Adjektiv",
            preNounAdjectival: "ein häufiges japanisches pränominales Adjektiv",
            adjective: "ein häufiges japanisches Adjektiv",
            ichidanVerb: "ein häufiges japanisches Ichidan-Verb",
            godanVerb: "ein häufiges japanisches Godan-Verb",
            yodanVerb: "ein häufiges japanisches Yodan-Verb",
            nidanVerb: "ein häufiges japanisches Nidan-Verb",
            suruVerb: "ein häufiges japanisches suru-Verb",
            irregularVerb: "ein häufiges unregelmäßiges japanisches Verb",
            verb: "ein häufiges japanisches Verb",
            word: "ein häufiges japanisches Wort",
        },
    },
} satisfies PartialDict<typeof en>;
