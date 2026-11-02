import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "Újrapróbálás",
    cancel: "Mégse",
    newTab: "(új lapon nyílik meg)",

    meta: {
        page: "{{title}}, {{page}}. oldal",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} japánul",
            withTags: "Japán szavak ezzel: {{query}}",
            forWritten: "{{query}} japánul: {{list}}",
            meaning: "{{word}} jelentése",
            meaningOf: "{{word}} jelentése: {{meaning}}",
            queryMeaning: "{{query}} jelentése: {{word}}",
            queryMeaningOf: "{{query}} jelentése: {{word}}, {{meaning}}",
            translation: "{{query}} japánul: {{word}}",
            description: "{{name}}: {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}}: {{text}}",
            leadLatin: "„{{query}}” japánul: {{text}}",
            fallback: "„{{query}}” japánul a Jotoba szótárban.",
        },
        facts: {
            common: "Gyakori szó.",
            commonJlpt: "Gyakori szó, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "{{kanji}} kandzsi: {{meaning}}, olvasatok és vonássorrend",
            plain: "{{kanji}} kandzsi: jelentés, olvasatok, vonássorrend",
            item: "{{kanji}}: {{meanings}}",
            description: "{{kanji}}. Olvasatok, gyökök, részek és vonássorrend-animációk.",
        },
        sentences: {
            title: "Japán példamondatok ezzel: {{query}}",
            titleCount: {
                one: "{{count}} japán példamondat ezzel: {{query}}",
                other: "{{count}} japán példamondat ezzel: {{query}}",
            },
            description: "Japán példamondatok ezzel: {{query}}, furiganával és fordításokkal.",
        },
        names: {
            title: "{{query}}: japán nevek és olvasataik",
            titleReading: "{{query}} ({{reading}}): japán nevek és olvasataik",
            description: "Japán nevek – {{query}}: olvasatok, átírások és névfajták.",
        },
    },

    heading: {
        page: "{{page}}. oldal / {{pages}}",
        separator: ", ",
        words: {
            some: "Szavak erre: <query></query>",
            count: { one: "{{count}} szó erre: <query></query>", other: "{{count}} szó erre: <query></query>" },
            none: "Nincs szó erre: <query></query>",
        },
        kanji: {
            some: "Kandzsik erre: <query></query>",
            count: {
                one: "{{count}} kandzsi erre: <query></query>",
                other: "{{count}} kandzsi erre: <query></query>",
            },
            none: "Nincs kandzsi erre: <query></query>",
            someIn: "Kandzsik ebben: <query></query>",
            countIn: {
                one: "{{count}} kandzsi ebben: <query></query>",
                other: "{{count}} kandzsi ebben: <query></query>",
            },
            noneIn: "Nincs kandzsi ebben: <query></query>",
            single: "<query></query> kandzsi: {{meaning}}",
            singlePlain: "<query></query> kandzsi",
        },
        sentences: {
            some: "Mondatok erre: <query></query>",
            count: {
                one: "{{count}} mondat erre: <query></query>",
                other: "{{count}} mondat erre: <query></query>",
            },
            none: "Nincs mondat erre: <query></query>",
        },
        names: {
            some: "Nevek erre: <query></query>",
            count: { one: "{{count}} név erre: <query></query>", other: "{{count}} név erre: <query></query>" },
            none: "Nincs név erre: <query></query>",
        },
    },

    announce: {
        otherWord: "Találatok erre: {{query}}",
        results: {
            one: "{{count}} találat, {{page}}. oldal / {{pages}}",
            other: "{{count}} találat, {{page}}. oldal / {{pages}}",
        },
        none: "Nincs találat",
        reloaded: "Online újratöltve. {{results}}",
    },

    invalidSplits: "Az egyéni szóhatárok érvénytelenek voltak, ezért visszaálltak",

    languageNotice: {
        text: "Találatok {{language}} nyelven (a linkből)",
        switch: "Váltás {{language}} nyelvre",
    },

    status: {
        loading: "Találatok betöltése…",
        jokes: {
            countingWords: "Szavak számolása",
            drawingKanji: "Kandzsik rajzolása",
            infinity: "Számolás a végtelenig",
            features: "Új funkciók tervezése",
            sandwich: "Mit szólnál egy szendvicshez?",
            countToTen: "Számolj el 10-ig",
            wifiCable: "A wifikábel keresése",
            pnp: "P=NP bizonyítása",
            misspelled: "Véletlenszerüen elirt szavak hozáadása",
            elevatorMusic: "TODO: liftzene beillesztése",
            premium: "A prémium csomagunk gyorsabb",
            ones: "Az összes 1-es megtartása, az összes 0 kidobása",
            trapped: "Segítség, beragadtam egy töltőképernyőbe!",
            messages: "Haszontalan töltési üzenetek hozzáadása",
            yoroshiku: "A 「よろしく」 lefordítása",
        },
    },

    message: {
        offline: {
            title: "Offline vagy",
            text: "Ellenőrizd a kapcsolatot, és próbáld újra, amint újra online vagy.",
        },
        invalid: {
            title: "Ezzel a kereséssel Joto nem boldogul",
            text: "Próbálj rövidebb vagy másik keresést.",
        },
        error: {
            title: "Úgy tűnik, Joto most nagyon dolgozik.",
            text: "Próbáld újra egy kicsit később.",
        },
        empty: {
            title: "Nem találtuk, amit kerestél.",
            text: "Ellenőrizd a helyesírást, próbálj rövidebb keresést, vagy válts keresési típust.",
            otherResults: "Más kategóriákban viszont van találat:",
        },
        number: {
            title: "Tudj meg többet erről a számról",
            text: "Keresd meg a többi kategóriában:",
            empty: "Ehhez a számhoz nincsenek szótári bejegyzések.",
        },
    },

    easterEgg: {
        title: "Megvagy!",
        highlight: "Tudtuk, hogy kíváncsi leszel a nevünkre!",
        text: "A <strong>Jotoba</strong> nem valódi szó. A <kotoba></kotoba> szóból származik, amelyben a „K” helyére „J” került, ami a „japán” szóra utal.",
    },

    help: {
        otherCategory: "„{{query}}” keresése egy másik kategóriában:",
        otherResults: "Találatok más kategóriákban",
        otherLanguages: "Más nyelveken van találat:",
        count: {
            exact: { one: ", {{count}} találat", other: ", {{count}} találat" },
            moreThan: { one: ", több mint {{count}} találat", other: ", több mint {{count}} találat" },
            fewerThan: { one: ", kevesebb mint {{count}} találat", other: ", kevesebb mint {{count}} találat" },
        },
    },

    sentences: {
        hidden: "A fordítások el vannak rejtve",
        showAll: "Összes fordítás mutatása",
        hideAll: "Összes fordítás elrejtése",
    },

    words: {
        customSplits: "Egyéni szóhatárok",
        resetSplits: "Visszaállítás",
        grammar: "Nyelvtan",
        inflection: "Ragozás",
        inflectionText: {
            one: "<query></query> (<lexeme></lexeme>) esetében a következő ragozást ismertük fel:",
            other: "<query></query> (<lexeme></lexeme>) esetében a következő ragozásokat ismertük fel:",
        },
        number: "Szám",
        numberText: "<query></query> értéke: <value></value>",
    },

    reader: {
        title: "Mondatolvasó",
        words: "A mondat szavai",
        selected: "Kiválasztva: <word></word>",
        wrap: "Tördelés",
        oneLine: "Egy sor",
        edit: "Szóhatárok szerkesztése",
    },

    splitEditor: {
        title: "Szóhatárok szerkesztése",
        help: "Koppints két karakter közé a szavak szétválasztásához vagy összevonásához.",
        boundaries: "Szóhatárok",
        boundary: "Határ {{first}} és {{second}} között",
        split: "Szétválasztás ez után: {{character}}",
        joined: "{{first}} és {{second}} összevonva",
        save: "Mentés",
        reset: "Automatikus bontás",
    },

    report: {
        question: "Nem erre a sorrendre számítottál?",
        title: "Sorrendi hiba jelentése",
        sending: "Küldés…",
        send: "Jelentés küldése",
        alreadyReported: "Ezt a keresést már jelentetted. Csak akkor küldj újabb jelentést, ha valami más is hibás.",
        context: {
            search: "Keresés",
            page: "Oldal",
            word: "Szó",
            position: "{{position}}. hely",
        },
        reason: {
            label: "Mi a hiba?",
            singleWord: "Egyetlen szó jelentéséhez használd a mellette lévő menüt.",
        },
        reasons: {
            listMissing: "Egy várt szó hiányzik vagy túl lent van",
            listOther: "Valami más a sorrenddel",
            wordHigher: "Ennek a szónak feljebb kellene lennie",
            wordLower: "Ennek a szónak lejjebb kellene lennie",
            wordNotRelevant: "Ez a szó nem tartozik ehhez a kereséshez",
            wordOther: "Valami más",
        },
        expected: {
            label: "Várt szó",
            subLabel: "Kandzsi, kana vagy rómadzsi",
        },
        comment: {
            label: "Megjegyzés",
            optional: "Megjegyzés (nem kötelező)",
            placeholder: "Mire számítottál helyette?",
            charsLeft: { one: "{{count}} karakter maradt", other: "{{count}} karakter maradt" },
        },
        errors: {
            reason: "Válaszd ki, mi a hiba",
            expected: "Add meg a várt szót",
            comment: "Írd le, mi a hiba",
        },
        privacy:
            "Nem kell hozzá fiók. A jelentés tartalmazza ezt a keresést, az oldalon lévő találatok sorrendjét és a válaszaidat, és csak a keresés javítására használjuk. Kérjük, ne írj bele személyes adatokat. <link>Adatvédelmi tájékoztató</link>",
        privacyLocal:
            "A jelentés tartalmazza ezt a keresést, az oldalon lévő találatok sorrendjét és a válaszaidat, és csak a keresés javítására használjuk. Kérjük, ne írj bele személyes adatokat. <link>Adatvédelmi tájékoztató</link>",
        outcome: {
            rateLimited: "Túl sok jelentés rövid idő alatt. Próbáld újra néhány perc múlva.",
            rejected: "Nem sikerült elküldeni a jelentést. Ellenőrizd a válaszaidat, és próbáld újra.",
            queueFull: "Túl sok jelentés vár küldésre. Próbáld újra később.",
            sent: "Köszönjük, elküldtük a jelentésedet",
            queued: "Jelentés mentve ezen az eszközön. Elküldjük, amint a jelentéstétel elérhető lesz.",
            offline: "Offline vagy. A jelentést elküldjük, amint újra online vagy.",
            duplicate: "Ezt a jelentést már elküldted",
        },
    },

    details: {
        tabs: {
            word: "Szó",
            kanji: "Kandzsi",
            sentences: "Mondatok",
            collocations: "Szókapcsolatok",
            conjugations: "Ragozás",
            words: "Szavak",
        },
        wordSections: "A szó részei",
        sentenceSections: "A mondat részei",
        editInJmdict: "Szerkesztés a JMDictben",
        conjugationsOf: "{{word}} ragozása",
        showTranslation: "Fordítás mutatása",
        hideTranslation: "Fordítás elrejtése",
        analyze: "Szavak elemzése",
        notFoundTitle: "Nem található",
        notFound: {
            word: "Ez a szó nem létezik",
            sentence: "Ez a mondat nem létezik",
        },
        notFoundText: "Lehet, hogy hibás a link, vagy a bejegyzést eltávolították.",
        loadFailed: {
            word: "Nem sikerült betölteni a szót",
            sentence: "Nem sikerült betölteni a mondatot",
        },
        offline: {
            word: "Ez a szó nincs benne az offline szótárban",
            sentence: "Ehhez a mondathoz internet kell",
            text: "Betöltődik, amint újra online vagy.",
            back: "Vissza",
        },
        sentences: {
            title: "Mondatok ezzel: {{word}}",
            failed: "Nem sikerült betölteni a mondatokat.",
            offline: "A példamondatokhoz internet kell. Betöltődnek, amint újra online vagy.",
            none: "Nincsenek példamondatok ehhez: {{word}}.",
            all: "Összes mondat ezzel: {{word}} ({{pages}} oldal)",
            open: "Megnyitás a mondatkeresésben",
        },
        meta: {
            wordTitle: "{{name}} jelentése: {{meaning}}",
            conjugationTitle: "{{name}} ragozása: minden alak",
            conjugationDescription:
                "Hogyan ragozzuk: {{name}}, „{{meaning}}”: udvarias, tagadó, múlt idő, te-alak, potenciális, szenvedő, műveltető és még sok más.",
            conjugationDescriptionPlain:
                "Hogyan ragozzuk: {{name}}: udvarias, tagadó, múlt idő, te-alak, potenciális, szenvedő, műveltető és még sok más.",
            sentenceTitle: "{{text}} – „{{translation}}”",
            sentenceDescription: "{{text}} „{{translation}}” – ennek a japán mondatnak a szavai és kandzsijai.",
            sentenceDescriptionPlain: "{{text}} – ennek a japán mondatnak a szavai és kandzsijai.",
        },
    },

    summary: {
        sentence: "<name></name> {{kind}}, jelentése: „{{gloss}}”.",
        sentenceJlpt: "<name></name> {{kind}}, jelentése: „{{gloss}}” (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "egy japán főnév",
            nounAndSuruVerb: "egy japán főnév és suru ige",
            adverb: "egy japán határozószó",
            auxiliary: "egy japán segédszó",
            auxiliaryAdjective: "egy japán segédmelléknév",
            auxiliaryVerb: "egy japán segédige",
            conjunction: "egy japán kötőszó",
            counter: "egy japán számlálószó",
            expression: "egy japán kifejezés",
            interjection: "egy japán indulatszó",
            numeral: "egy japán számnév",
            pronoun: "egy japán névmás",
            prefix: "egy japán előtag",
            suffix: "egy japán utótag",
            particle: "egy japán partikula",
            iAdjective: "egy japán i-melléknév",
            naAdjective: "egy japán na-melléknév",
            noAdjective: "egy japán no-melléknév",
            preNounAdjectival: "egy japán főnév előtti jelző",
            adjective: "egy japán melléknév",
            ichidanVerb: "egy japán ichidan ige",
            godanVerb: "egy japán godan ige",
            yodanVerb: "egy japán yodan ige",
            nidanVerb: "egy japán nidan ige",
            suruVerb: "egy japán suru ige",
            irregularVerb: "egy japán rendhagyó ige",
            verb: "egy japán ige",
            word: "egy japán szó",
        },
        commonKinds: {
            noun: "egy gyakori japán főnév",
            nounAndSuruVerb: "egy gyakori japán főnév és suru ige",
            adverb: "egy gyakori japán határozószó",
            auxiliary: "egy gyakori japán segédszó",
            auxiliaryAdjective: "egy gyakori japán segédmelléknév",
            auxiliaryVerb: "egy gyakori japán segédige",
            conjunction: "egy gyakori japán kötőszó",
            counter: "egy gyakori japán számlálószó",
            expression: "egy gyakori japán kifejezés",
            interjection: "egy gyakori japán indulatszó",
            numeral: "egy gyakori japán számnév",
            pronoun: "egy gyakori japán névmás",
            prefix: "egy gyakori japán előtag",
            suffix: "egy gyakori japán utótag",
            particle: "egy gyakori japán partikula",
            iAdjective: "egy gyakori japán i-melléknév",
            naAdjective: "egy gyakori japán na-melléknév",
            noAdjective: "egy gyakori japán no-melléknév",
            preNounAdjectival: "egy gyakori japán főnév előtti jelző",
            adjective: "egy gyakori japán melléknév",
            ichidanVerb: "egy gyakori japán ichidan ige",
            godanVerb: "egy gyakori japán godan ige",
            yodanVerb: "egy gyakori japán yodan ige",
            nidanVerb: "egy gyakori japán nidan ige",
            suruVerb: "egy gyakori japán suru ige",
            irregularVerb: "egy gyakori japán rendhagyó ige",
            verb: "egy gyakori japán ige",
            word: "egy gyakori japán szó",
        },
    },
} satisfies PartialDict<typeof en>;
