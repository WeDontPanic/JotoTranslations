import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "Försök igen",
    cancel: "Avbryt",
    newTab: "(öppnas i en ny flik)",

    meta: {
        page: "{{title}}, sida {{page}}",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} på japanska",
            withTags: "Japanska ord med {{query}}",
            forWritten: "Japanska ord för {{query}}: {{list}}",
            meaning: "{{word}} betydelse",
            meaningOf: "{{word}} betydelse: {{meaning}}",
            queryMeaning: "{{query}} betydelse: {{word}}",
            queryMeaningOf: "{{query}} betydelse: {{word}}, {{meaning}}",
            translation: "{{query}} på japanska: {{word}}",
            description: "{{name}}: {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}}: {{text}}",
            leadLatin: "”{{query}}” på japanska: {{text}}",
            fallback: "Japanska ord för ”{{query}}” i Jotobas ordbok.",
        },
        facts: {
            common: "Vanligt ord.",
            commonJlpt: "Vanligt ord, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "Kanjit {{kanji}}: {{meaning}}, läsningar och streckordning",
            plain: "Kanjit {{kanji}}: betydelse, läsningar, streckordning",
            item: "{{kanji}}: {{meanings}}",
            description: "{{kanji}}. Läsningar, radikaler, delar och animationer av streckordningen.",
        },
        sentences: {
            title: "Japanska exempelmeningar med {{query}}",
            titleCount: {
                one: "{{count}} japansk exempelmening med {{query}}",
                other: "{{count}} japanska exempelmeningar med {{query}}",
            },
            description: "Japanska exempelmeningar med {{query}}, med furigana och översättningar.",
        },
        names: {
            title: "{{query}}: japanska namn och läsningar",
            titleReading: "{{query}} ({{reading}}): japanska namn och läsningar",
            description: "Japanska namn för {{query}}: läsningar, transkriptioner och typer av namn.",
        },
    },

    heading: {
        page: "sida {{page}} av {{pages}}",
        separator: ", ",
        words: {
            some: "Ord för <query></query>",
            count: { one: "{{count}} ord för <query></query>", other: "{{count}} ord för <query></query>" },
            none: "Inga ord för <query></query>",
        },
        kanji: {
            some: "Kanji för <query></query>",
            count: { one: "{{count}} kanji för <query></query>", other: "{{count}} kanji för <query></query>" },
            none: "Inga kanji för <query></query>",
            someIn: "Kanji i <query></query>",
            countIn: { one: "{{count}} kanji i <query></query>", other: "{{count}} kanji i <query></query>" },
            noneIn: "Inga kanji i <query></query>",
            single: "Kanjit <query></query>: {{meaning}}",
            singlePlain: "Kanjit <query></query>",
        },
        sentences: {
            some: "Meningar för <query></query>",
            count: { one: "{{count}} mening för <query></query>", other: "{{count}} meningar för <query></query>" },
            none: "Inga meningar för <query></query>",
        },
        names: {
            some: "Namn för <query></query>",
            count: { one: "{{count}} namn för <query></query>", other: "{{count}} namn för <query></query>" },
            none: "Inga namn för <query></query>",
        },
    },

    announce: {
        otherWord: "Resultat för {{query}}",
        results: {
            one: "{{count}} resultat, sida {{page}} av {{pages}}",
            other: "{{count}} resultat, sida {{page}} av {{pages}}",
        },
        none: "Inga resultat",
        reloaded: "Laddades om online. {{results}}",
    },

    invalidSplits: "Egna ordgränser var ogiltiga och har återställts",

    languageNotice: {
        text: "Resultat på {{language}} (från länken)",
        switch: "Byt till {{language}}",
    },

    status: {
        loading: "Laddar resultat…",
        jokes: {
            countingWords: "Räknar ord",
            drawingKanji: "Ritar kanji",
            infinity: "Räknar till oändligheten",
            features: "Planerar nya funktioner",
            sandwich: "Varför inte beställa en macka?",
            countToTen: "Räkna bara till 10",
            wifiCable: "Letar efter wifi-kabeln",
            pnp: "Bevisar att P=NP",
            misspelled: "Lägger till slumpmässigt felstavde ord",
            elevatorMusic: "TODO: Lägg in hissmusik",
            premium: "Vår premiumplan är snabbare",
            ones: "Behåller alla ettor och tar bort alla nollor",
            trapped: "Hjälp, jag sitter fast i en laddningsskärm!",
            messages: "Lägger till föga hjälpsamma laddningsmeddelanden",
            yoroshiku: "Översätter 「よろしく」",
        },
    },

    message: {
        offline: {
            title: "Du är offline",
            text: "Kontrollera anslutningen och försök igen när du är online.",
        },
        invalid: {
            title: "Joto klarar inte den här sökningen",
            text: "Prova en kortare eller annan sökning.",
        },
        error: {
            title: "Det verkar som att Joto har fullt upp just nu.",
            text: "Försök igen om en stund.",
        },
        empty: {
            title: "Vi hittade inte det du letade efter.",
            text: "Kontrollera stavningen, prova en kortare sökning eller byt söktyp.",
            otherResults: "Men det finns resultat i andra kategorier:",
        },
        number: {
            title: "Läs mer om det här talet",
            text: "Slå upp det i de andra kategorierna:",
            empty: "Det finns inga ordboksposter för det här talet.",
        },
    },

    easterEgg: {
        title: "Där fick vi dig!",
        highlight: "Vi visste att du skulle bli nyfiken på vårt namn!",
        text: "<strong>Jotoba</strong> är inget riktigt ord. Det kommer från <kotoba></kotoba>, där ett ”K” har bytts ut mot ett ”J” som står för ”Japanese” (japanska).",
    },

    help: {
        otherCategory: "Sök efter ”{{query}}” i en annan kategori:",
        otherResults: "Resultat i andra kategorier",
        otherLanguages: "Det finns resultat på andra språk:",
        count: {
            exact: { one: ", {{count}} resultat", other: ", {{count}} resultat" },
            moreThan: { one: ", fler än {{count}} resultat", other: ", fler än {{count}} resultat" },
            fewerThan: { one: ", färre än {{count}} resultat", other: ", färre än {{count}} resultat" },
        },
    },

    sentences: {
        hidden: "Översättningarna är dolda",
        showAll: "Visa alla översättningar",
        hideAll: "Dölj alla översättningar",
    },

    words: {
        customSplits: "Egna ordgränser",
        resetSplits: "Återställ",
        grammar: "Grammatik",
        inflection: "Böjning",
        inflectionText: {
            one: "Vi har identifierat följande böjning av <query></query> (<lexeme></lexeme>):",
            other: "Vi har identifierat följande böjningar av <query></query> (<lexeme></lexeme>):",
        },
        number: "Tal",
        numberText: "<query></query> är <value></value>",
    },

    reader: {
        title: "Meningsläsare",
        words: "Meningens ord",
        selected: "Valt: <word></word>",
        wrap: "Radbryt",
        oneLine: "En rad",
        edit: "Redigera ordgränser",
    },

    splitEditor: {
        title: "Redigera ordgränser",
        help: "Tryck mellan två tecken för att dela eller slå ihop ord.",
        boundaries: "Ordgränser",
        boundary: "Gräns mellan {{first}} och {{second}}",
        split: "Dela efter {{character}}",
        joined: "{{first}} och {{second}} har slagits ihop",
        save: "Spara",
        reset: "Återställ till automatiskt",
    },

    report: {
        question: "Inte den ordning du väntade dig?",
        title: "Rapportera fel i rangordningen",
        sending: "Skickar…",
        send: "Skicka rapport",
        alreadyReported: "Du har redan rapporterat den här sökningen. Skicka en ny rapport bara om något annat är fel.",
        context: {
            search: "Sökning",
            page: "Sida",
            word: "Ord",
            position: "Plats {{position}}",
        },
        reason: {
            label: "Vad är fel?",
            singleWord: "Använd menyn bredvid ett ord för att rapportera just det ordet.",
        },
        reasons: {
            listMissing: "Ett ord jag väntade mig saknas eller hamnar för långt ned",
            listOther: "Något annat med ordningen",
            wordHigher: "Det här ordet borde stå högre upp",
            wordLower: "Det här ordet borde stå längre ned",
            wordNotRelevant: "Det här ordet hör inte till den här sökningen",
            wordOther: "Något annat",
        },
        expected: {
            label: "Förväntat ord",
            subLabel: "Kanji, kana eller romaji",
        },
        comment: {
            label: "Kommentar",
            optional: "Kommentar (valfritt)",
            placeholder: "Vad hade du väntat dig i stället?",
            charsLeft: { one: "{{count}} tecken kvar", other: "{{count}} tecken kvar" },
        },
        errors: {
            reason: "Välj vad som är fel",
            expected: "Ange ordet du väntade dig",
            comment: "Beskriv vad som är fel",
        },
        privacy:
            "Inget konto behövs. Rapporten innehåller den här sökningen, ordningen på resultaten på den här sidan och dina svar, och läses bara för att förbättra sökningen. Skriv inga personuppgifter. <link>Integritetspolicy</link>",
        privacyLocal:
            "Rapporten innehåller den här sökningen, ordningen på resultaten på den här sidan och dina svar, och läses bara för att förbättra sökningen. Skriv inga personuppgifter. <link>Integritetspolicy</link>",
        outcome: {
            rateLimited: "För många rapporter på kort tid. Försök igen om några minuter.",
            rejected: "Det gick inte att skicka rapporten. Kontrollera dina svar och försök igen.",
            queueFull: "För många rapporter väntar på att skickas. Försök igen senare.",
            sent: "Tack, din rapport har skickats",
            queued: "Rapporten har sparats på den här enheten. Den skickas när rapportering är tillgänglig.",
            offline: "Du är offline. Rapporten skickas när du är online igen.",
            duplicate: "Du har redan skickat den här rapporten",
        },
    },

    details: {
        tabs: {
            word: "Ord",
            kanji: "Kanji",
            sentences: "Meningar",
            collocations: "Kollokationer",
            conjugations: "Böjningar",
            words: "Ord",
        },
        wordSections: "Avsnitt om ordet",
        sentenceSections: "Avsnitt om meningen",
        editInJmdict: "Redigera i JMDict",
        conjugationsOf: "Böjningar av {{word}}",
        showTranslation: "Visa översättning",
        hideTranslation: "Dölj översättning",
        analyze: "Analysera orden",
        notFoundTitle: "Hittades inte",
        notFound: {
            word: "Det här ordet finns inte",
            sentence: "Den här meningen finns inte",
        },
        notFoundText: "Länken kan vara trasig eller så har posten tagits bort.",
        loadFailed: {
            word: "Det gick inte att ladda ordet",
            sentence: "Det gick inte att ladda meningen",
        },
        offline: {
            word: "Det här ordet finns inte i offlineordboken",
            sentence: "Den här meningen kräver internet",
            text: "Den laddas när du är online igen.",
            back: "Gå tillbaka",
        },
        sentences: {
            title: "Meningar med {{word}}",
            failed: "Det gick inte att ladda meningarna.",
            offline: "Exempelmeningar kräver internet. De laddas när du är online igen.",
            none: "Inga exempelmeningar för {{word}}.",
            all: "Alla meningar med {{word}} ({{pages}} sidor)",
            open: "Öppna i meningssökningen",
        },
        meta: {
            wordTitle: "{{name}} betydelse: {{meaning}}",
            conjugationTitle: "{{name}} böjning: alla former",
            conjugationDescription:
                "Så böjer du {{name}}, ”{{meaning}}”: artig form, nekande, dåtid, te-form, potentialis, passiv, kausativ och mer.",
            conjugationDescriptionPlain:
                "Så böjer du {{name}}: artig form, nekande, dåtid, te-form, potentialis, passiv, kausativ och mer.",
            sentenceTitle: "{{text}} – ”{{translation}}”",
            sentenceDescription: "{{text}} ”{{translation}}” – orden och kanjin i den här japanska meningen.",
            sentenceDescriptionPlain: "{{text}} – orden och kanjin i den här japanska meningen.",
        },
    },

    summary: {
        sentence: "<name></name> är {{kind}} som betyder ”{{gloss}}”.",
        sentenceJlpt: "<name></name> är {{kind}} som betyder ”{{gloss}}” (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "ett japanskt substantiv",
            nounAndSuruVerb: "ett japanskt substantiv och suru-verb",
            adverb: "ett japanskt adverb",
            auxiliary: "ett japanskt hjälpord",
            auxiliaryAdjective: "ett japanskt hjälpadjektiv",
            auxiliaryVerb: "ett japanskt hjälpverb",
            conjunction: "en japansk konjunktion",
            counter: "en japansk räknare",
            expression: "ett japanskt uttryck",
            interjection: "en japansk interjektion",
            numeral: "ett japanskt räkneord",
            pronoun: "ett japanskt pronomen",
            prefix: "ett japanskt prefix",
            suffix: "ett japanskt suffix",
            particle: "en japansk partikel",
            iAdjective: "ett japanskt i-adjektiv",
            naAdjective: "ett japanskt na-adjektiv",
            noAdjective: "ett japanskt no-adjektiv",
            preNounAdjectival: "ett japanskt prenominalt adjektiv",
            adjective: "ett japanskt adjektiv",
            ichidanVerb: "ett japanskt ichidan-verb",
            godanVerb: "ett japanskt godan-verb",
            yodanVerb: "ett japanskt yodan-verb",
            nidanVerb: "ett japanskt nidan-verb",
            suruVerb: "ett japanskt suru-verb",
            irregularVerb: "ett japanskt oregelbundet verb",
            verb: "ett japanskt verb",
            word: "ett japanskt ord",
        },
        commonKinds: {
            noun: "ett vanligt japanskt substantiv",
            nounAndSuruVerb: "ett vanligt japanskt substantiv och suru-verb",
            adverb: "ett vanligt japanskt adverb",
            auxiliary: "ett vanligt japanskt hjälpord",
            auxiliaryAdjective: "ett vanligt japanskt hjälpadjektiv",
            auxiliaryVerb: "ett vanligt japanskt hjälpverb",
            conjunction: "en vanlig japansk konjunktion",
            counter: "en vanlig japansk räknare",
            expression: "ett vanligt japanskt uttryck",
            interjection: "en vanlig japansk interjektion",
            numeral: "ett vanligt japanskt räkneord",
            pronoun: "ett vanligt japanskt pronomen",
            prefix: "ett vanligt japanskt prefix",
            suffix: "ett vanligt japanskt suffix",
            particle: "en vanlig japansk partikel",
            iAdjective: "ett vanligt japanskt i-adjektiv",
            naAdjective: "ett vanligt japanskt na-adjektiv",
            noAdjective: "ett vanligt japanskt no-adjektiv",
            preNounAdjectival: "ett vanligt japanskt prenominalt adjektiv",
            adjective: "ett vanligt japanskt adjektiv",
            ichidanVerb: "ett vanligt japanskt ichidan-verb",
            godanVerb: "ett vanligt japanskt godan-verb",
            yodanVerb: "ett vanligt japanskt yodan-verb",
            nidanVerb: "ett vanligt japanskt nidan-verb",
            suruVerb: "ett vanligt japanskt suru-verb",
            irregularVerb: "ett vanligt japanskt oregelbundet verb",
            verb: "ett vanligt japanskt verb",
            word: "ett vanligt japanskt ord",
        },
    },
} satisfies PartialDict<typeof en>;
