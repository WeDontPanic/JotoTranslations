import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "Opnieuw proberen",
    cancel: "Annuleren",
    newTab: "(opent in een nieuw tabblad)",

    meta: {
        page: "{{title}}, pagina {{page}}",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} in het Japans",
            withTags: "Japanse woorden met {{query}}",
            forWritten: "Japanse woorden voor {{query}}: {{list}}",
            meaning: "{{word}} betekenis",
            meaningOf: "{{word}} betekenis: {{meaning}}",
            queryMeaning: "{{query}} betekenis: {{word}}",
            queryMeaningOf: "{{query}} betekenis: {{word}}, {{meaning}}",
            translation: "{{query}} in het Japans: {{word}}",
            description: "{{name}}: {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}}: {{text}}",
            leadLatin: "“{{query}}” in het Japans: {{text}}",
            fallback: "Japanse woorden voor “{{query}}” in het Jotoba-woordenboek.",
        },
        facts: {
            common: "Gangbaar woord.",
            commonJlpt: "Gangbaar woord, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "Kanji {{kanji}}: {{meaning}}, lezingen en streekvolgorde",
            plain: "Kanji {{kanji}}: betekenis, lezingen, streekvolgorde",
            item: "{{kanji}}: {{meanings}}",
            description: "{{kanji}}. Lezingen, radicalen, onderdelen en animaties van de streekvolgorde.",
        },
        sentences: {
            title: "Japanse voorbeeldzinnen met {{query}}",
            titleCount: {
                one: "{{count}} Japanse voorbeeldzin met {{query}}",
                other: "{{count}} Japanse voorbeeldzinnen met {{query}}",
            },
            description: "Japanse voorbeeldzinnen met {{query}}, met furigana en vertalingen.",
        },
        names: {
            title: "{{query}}: Japanse namen en lezingen",
            titleReading: "{{query}} ({{reading}}): Japanse namen en lezingen",
            description: "Japanse namen voor {{query}}: lezingen, transcripties en soorten namen.",
        },
    },

    heading: {
        page: "pagina {{page}} van {{pages}}",
        separator: ", ",
        words: {
            some: "Woorden voor <query></query>",
            count: { one: "{{count}} woord voor <query></query>", other: "{{count}} woorden voor <query></query>" },
            none: "Geen woorden voor <query></query>",
        },
        kanji: {
            some: "Kanji voor <query></query>",
            count: { one: "{{count}} kanji voor <query></query>", other: "{{count}} kanji voor <query></query>" },
            none: "Geen kanji voor <query></query>",
            someIn: "Kanji in <query></query>",
            countIn: { one: "{{count}} kanji in <query></query>", other: "{{count}} kanji in <query></query>" },
            noneIn: "Geen kanji in <query></query>",
            single: "Kanji <query></query>: {{meaning}}",
            singlePlain: "Kanji <query></query>",
        },
        sentences: {
            some: "Zinnen voor <query></query>",
            count: { one: "{{count}} zin voor <query></query>", other: "{{count}} zinnen voor <query></query>" },
            none: "Geen zinnen voor <query></query>",
        },
        names: {
            some: "Namen voor <query></query>",
            count: { one: "{{count}} naam voor <query></query>", other: "{{count}} namen voor <query></query>" },
            none: "Geen namen voor <query></query>",
        },
    },

    announce: {
        otherWord: "Resultaten voor {{query}}",
        results: {
            one: "{{count}} resultaat, pagina {{page}} van {{pages}}",
            other: "{{count}} resultaten, pagina {{page}} van {{pages}}",
        },
        none: "Geen resultaten",
        reloaded: "Online opnieuw geladen. {{results}}",
    },

    invalidSplits: "Je eigen woordgrenzen waren ongeldig en zijn teruggezet",

    languageNotice: {
        text: "Resultaten in het {{language}} (uit de link)",
        switch: "Naar {{language}} wisselen",
    },

    status: {
        loading: "Resultaten laden…",
        jokes: {
            countingWords: "Woorden tellen",
            drawingKanji: "Kanji tekenen",
            infinity: "Tot oneindig tellen",
            features: "Nieuwe functies plannen",
            sandwich: "Zin in een broodje?",
            countToTen: "Tel gewoon tot 10",
            wifiCable: "De wifikabel zoeken",
            pnp: "P=NP bewijzen",
            misspelled: "Willekeurig verkeerd gespeldde woorde toevoegen",
            elevatorMusic: "TODO: liftmuziek invoegen",
            premium: "Ons premium-abonnement is sneller",
            ones: "Alle enen houden en alle nullen weggooien",
            trapped: "Help, ik zit vast in een laadscherm!",
            messages: "Nutteloze laadberichten verzinnen",
            yoroshiku: "「よろしく」 vertalen",
        },
    },

    message: {
        offline: {
            title: "Je bent offline",
            text: "Controleer je verbinding en probeer het opnieuw zodra je weer online bent.",
        },
        invalid: {
            title: "Joto kan niets met deze zoekopdracht",
            text: "Probeer een kortere of andere zoekopdracht.",
        },
        error: {
            title: "Joto lijkt het op dit moment erg druk te hebben.",
            text: "Probeer het zo meteen opnieuw.",
        },
        empty: {
            title: "We konden niet vinden wat je zocht.",
            text: "Controleer de spelling, probeer een kortere zoekopdracht of kies een ander zoektype.",
            otherResults: "Maar er zijn resultaten in andere categorieën:",
        },
        number: {
            title: "Meer over dit getal",
            text: "Zoek het op in de andere categorieën:",
            empty: "Er zijn geen woordenboekitems voor dit getal.",
        },
    },

    easterEgg: {
        title: "Betrapt!",
        highlight: "We wisten wel dat je nieuwsgierig zou zijn naar onze naam!",
        text: "<strong>Jotoba</strong> is geen echt woord. Het is afgeleid van <kotoba></kotoba>, waarbij de “K” is vervangen door een “J”, die staat voor “Japans”.",
    },

    help: {
        otherCategory: "Zoeken naar “{{query}}” in een andere categorie:",
        otherResults: "Resultaten in andere categorieën",
        otherLanguages: "Er zijn resultaten in andere talen:",
        count: {
            exact: { one: ", {{count}} resultaat", other: ", {{count}} resultaten" },
            moreThan: { one: ", meer dan {{count}} resultaat", other: ", meer dan {{count}} resultaten" },
            fewerThan: { one: ", minder dan {{count}} resultaat", other: ", minder dan {{count}} resultaten" },
        },
    },

    sentences: {
        hidden: "Vertalingen zijn verborgen",
        showAll: "Alle vertalingen tonen",
        hideAll: "Alle vertalingen verbergen",
    },

    words: {
        customSplits: "Eigen woordgrenzen",
        resetSplits: "Terugzetten",
        grammar: "Grammatica",
        inflection: "Vervoeging",
        inflectionText: {
            one: "We hebben voor <query></query> (<lexeme></lexeme>) de volgende vervoeging herkend:",
            other: "We hebben voor <query></query> (<lexeme></lexeme>) de volgende vervoegingen herkend:",
        },
        number: "Getal",
        numberText: "<query></query> is <value></value>",
    },

    reader: {
        title: "Zinsontleding",
        words: "Woorden van de zin",
        selected: "Gekozen: <word></word>",
        wrap: "Afbreken",
        oneLine: "Eén regel",
        edit: "Woordgrenzen bewerken",
    },

    splitEditor: {
        title: "Woordgrenzen bewerken",
        help: "Tik tussen twee tekens om woorden te splitsen of samen te voegen.",
        boundaries: "Woordgrenzen",
        boundary: "Grens tussen {{first}} en {{second}}",
        split: "Gesplitst na {{character}}",
        joined: "{{first}} en {{second}} samengevoegd",
        save: "Opslaan",
        reset: "Terugzetten naar automatisch",
    },

    report: {
        question: "Niet de volgorde die je verwachtte?",
        title: "Probleem met volgorde melden",
        sending: "Versturen…",
        send: "Melding versturen",
        alreadyReported: "Je hebt deze zoekopdracht al gemeld. Stuur alleen nog een melding als er iets anders niet klopt.",
        context: {
            search: "Zoekopdracht",
            page: "Pagina",
            word: "Woord",
            position: "Positie {{position}}",
        },
        reason: {
            label: "Wat klopt er niet?",
            singleWord: "Gebruik het menu naast een woord om één woord te melden.",
        },
        reasons: {
            listMissing: "Een woord dat ik verwachtte ontbreekt of staat te ver naar beneden",
            listOther: "Iets anders aan de volgorde",
            wordHigher: "Dit woord hoort hoger te staan",
            wordLower: "Dit woord hoort lager te staan",
            wordNotRelevant: "Dit woord hoort niet bij deze zoekopdracht",
            wordOther: "Iets anders",
        },
        expected: {
            label: "Verwacht woord",
            subLabel: "Kanji, kana of romaji",
        },
        comment: {
            label: "Opmerking",
            optional: "Opmerking (optioneel)",
            placeholder: "Wat had je in plaats daarvan verwacht?",
            charsLeft: { one: "Nog {{count}} teken", other: "Nog {{count}} tekens" },
        },
        errors: {
            reason: "Kies wat er niet klopt",
            expected: "Voer het woord in dat je verwachtte",
            comment: "Beschrijf wat er niet klopt",
        },
        privacy:
            "Geen account nodig. De melding bevat deze zoekopdracht, de volgorde van de resultaten op deze pagina en je antwoorden, en wordt alleen gelezen om het zoeken te verbeteren. Voeg geen persoonsgegevens toe. <link>Privacyverklaring</link>",
        privacyLocal:
            "De melding bevat deze zoekopdracht, de volgorde van de resultaten op deze pagina en je antwoorden, en wordt alleen gelezen om het zoeken te verbeteren. Voeg geen persoonsgegevens toe. <link>Privacyverklaring</link>",
        outcome: {
            rateLimited: "Te veel meldingen in korte tijd. Probeer het over een paar minuten opnieuw.",
            rejected: "De melding kon niet worden verstuurd. Controleer je antwoorden en probeer het opnieuw.",
            queueFull: "Er wachten te veel meldingen om verstuurd te worden. Probeer het later opnieuw.",
            notStored:
                "Dit apparaat kan de melding niet opslaan, dus die kan later niet worden verstuurd. Probeer het opnieuw zodra je online bent.",
            sent: "Bedankt, je melding is verstuurd",
            queued: "Melding opgeslagen op dit apparaat. Ze wordt verstuurd zodra melden weer mogelijk is.",
            offline: "Je bent offline. De melding wordt verstuurd zodra je weer online bent.",
            duplicate: "Je hebt deze melding al verstuurd",
        },
    },

    details: {
        tabs: {
            word: "Woord",
            kanji: "Kanji",
            sentences: "Zinnen",
            collocations: "Collocaties",
            conjugations: "Vervoegingen",
            words: "Woorden",
        },
        wordSections: "Onderdelen van het woord",
        sentenceSections: "Onderdelen van de zin",
        editInJmdict: "Bewerken in JMDict",
        conjugationsOf: "Vervoegingen van {{word}}",
        showTranslation: "Vertaling tonen",
        hideTranslation: "Vertaling verbergen",
        analyze: "Woorden analyseren",
        notFoundTitle: "Niet gevonden",
        notFound: {
            word: "Dit woord bestaat niet",
            sentence: "Deze zin bestaat niet",
        },
        notFoundText: "De link werkt misschien niet meer, of het item is verwijderd.",
        loadFailed: {
            word: "Het woord kon niet worden geladen",
            sentence: "De zin kon niet worden geladen",
        },
        offline: {
            word: "Dit woord staat niet in het offline woordenboek",
            sentence: "Deze zin heeft internet nodig",
            text: "Het laadt zodra je weer online bent.",
            back: "Terug",
        },
        sentences: {
            title: "Zinnen met {{word}}",
            failed: "De zinnen konden niet worden geladen.",
            offline: "Voorbeeldzinnen hebben internet nodig. Ze laden zodra je weer online bent.",
            none: "Geen voorbeeldzinnen voor {{word}}.",
            all: "Alle zinnen met {{word}} ({{pages}} pagina’s)",
            open: "In de zinnenzoekfunctie openen",
        },
        meta: {
            wordTitle: "{{name}} betekenis: {{meaning}}",
            conjugationTitle: "{{name}} vervoegen: alle vormen",
            conjugationDescription:
                "Zo vervoeg je {{name}}, “{{meaning}}”: beleefd, ontkennend, verleden tijd, te-vorm, potentiaal, passief, causatief en meer.",
            conjugationDescriptionPlain:
                "Zo vervoeg je {{name}}: beleefd, ontkennend, verleden tijd, te-vorm, potentiaal, passief, causatief en meer.",
            sentenceTitle: "{{text}} – “{{translation}}”",
            sentenceDescription: "{{text}} “{{translation}}” – de woorden en kanji van deze Japanse zin.",
            sentenceDescriptionPlain: "{{text}} – de woorden en kanji van deze Japanse zin.",
        },
    },

    summary: {
        sentence: "<name></name> is {{kind}} met de betekenis “{{gloss}}”.",
        sentenceJlpt: "<name></name> is {{kind}} met de betekenis “{{gloss}}” (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "een Japans zelfstandig naamwoord",
            nounAndSuruVerb: "een Japans zelfstandig naamwoord en suru-werkwoord",
            adverb: "een Japans bijwoord",
            auxiliary: "een Japans hulpwoord",
            auxiliaryAdjective: "een Japans hulpadjectief",
            auxiliaryVerb: "een Japans hulpwerkwoord",
            conjunction: "een Japans voegwoord",
            counter: "een Japans telwoord",
            expression: "een Japanse uitdrukking",
            interjection: "een Japans tussenwerpsel",
            numeral: "een Japans getal",
            pronoun: "een Japans voornaamwoord",
            prefix: "een Japans prefix",
            suffix: "een Japans suffix",
            particle: "een Japans partikel",
            iAdjective: "een Japans i-adjectief",
            naAdjective: "een Japans na-adjectief",
            noAdjective: "een Japans no-adjectief",
            preNounAdjectival: "een Japans prenominaal adjectief",
            adjective: "een Japans adjectief",
            ichidanVerb: "een Japans ichidan-werkwoord",
            godanVerb: "een Japans godan-werkwoord",
            yodanVerb: "een Japans yodan-werkwoord",
            nidanVerb: "een Japans nidan-werkwoord",
            suruVerb: "een Japans suru-werkwoord",
            irregularVerb: "een Japans onregelmatig werkwoord",
            verb: "een Japans werkwoord",
            word: "een Japans woord",
        },
        commonKinds: {
            noun: "een gangbaar Japans zelfstandig naamwoord",
            nounAndSuruVerb: "een gangbaar Japans zelfstandig naamwoord en suru-werkwoord",
            adverb: "een gangbaar Japans bijwoord",
            auxiliary: "een gangbaar Japans hulpwoord",
            auxiliaryAdjective: "een gangbaar Japans hulpadjectief",
            auxiliaryVerb: "een gangbaar Japans hulpwerkwoord",
            conjunction: "een gangbaar Japans voegwoord",
            counter: "een gangbaar Japans telwoord",
            expression: "een gangbare Japanse uitdrukking",
            interjection: "een gangbaar Japans tussenwerpsel",
            numeral: "een gangbaar Japans getal",
            pronoun: "een gangbaar Japans voornaamwoord",
            prefix: "een gangbaar Japans prefix",
            suffix: "een gangbaar Japans suffix",
            particle: "een gangbaar Japans partikel",
            iAdjective: "een gangbaar Japans i-adjectief",
            naAdjective: "een gangbaar Japans na-adjectief",
            noAdjective: "een gangbaar Japans no-adjectief",
            preNounAdjectival: "een gangbaar Japans prenominaal adjectief",
            adjective: "een gangbaar Japans adjectief",
            ichidanVerb: "een gangbaar Japans ichidan-werkwoord",
            godanVerb: "een gangbaar Japans godan-werkwoord",
            yodanVerb: "een gangbaar Japans yodan-werkwoord",
            nidanVerb: "een gangbaar Japans nidan-werkwoord",
            suruVerb: "een gangbaar Japans suru-werkwoord",
            irregularVerb: "een gangbaar Japans onregelmatig werkwoord",
            verb: "een gangbaar Japans werkwoord",
            word: "een gangbaar Japans woord",
        },
    },
} satisfies PartialDict<typeof en>;
