import type en from "../en/tagInfo";
import type { PartialDict } from "../types";

export default {
    searchTag: "Alle woorden met #{{tag}} tonen",
    teForm: "Te-vorm",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "Een bijwoord dat と kan krijgen, meestal een klank- of manierwoord. Met と beschrijft het hoe iets gebeurt.",
            example: "vrolijk lachen",
        },
        Auxilary: {
            text: "Een woord dat zich aan een ander woord hecht en grammatica toevoegt, zoals tijd, beleefdheid of ontkenning. Het kan niet los staan.",
        },
        AuxilaryAdj: {
            text: "Een uitgang die zich aan een werkwoord of adjectief hecht en vervoegt als een i-adjectief.",
            example: "willen eten",
        },
        AuxilaryVerb: {
            text: "Een werkwoord dat zich aan een ander werkwoord hecht, meestal aan de te-vorm, en een betekenis toevoegt zoals proberen, afmaken of iets van tevoren doen.",
            example: "eens proberen te eten",
        },
        Counter: {
            text: "Volgt op een getal en telt een soort dingen, zoals platte voorwerpen, machines of mensen. Bij het tellen heeft het Japans er bijna altijd een nodig.",
            example: "drie vellen papier",
        },
        Expr: {
            text: "Een vaste uitdrukking van meerdere woorden die je als geheel leert.",
            example: "hartelijk bedankt",
        },
        Particle: {
            text: "Een kort woord na een substantief of zinsdeel dat de rol ervan in de zin aangeeft, zoals onderwerp, lijdend voorwerp, plaats of richting.",
            example: "naar school gaan",
        },
        Prefix: {
            text: "Staat voor een ander woord en verandert of vult de betekenis ervan aan. Het wordt niet los gebruikt.",
            example: "geld (beleefd)",
        },
        Suffix: {
            text: "Komt achter een ander woord, bijvoorbeeld een naam of een substantief. Het wordt niet los gebruikt.",
            example: "meneer/mevrouw Tanaka",
        },
    },

    noun: {
        Adverbial: {
            text: "Een substantief dat zonder partikel ook als bijwoord kan dienen.",
            example: "Ik heb het nu druk.",
        },
        Temporal: {
            text: "Een substantief voor een tijdstip. Het wordt vaak zonder partikel gebruikt, zoals een bijwoord.",
            example: "Ik ga morgen.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "Een substantief of werkwoord dat direct voor een substantief staat om het te beschrijven, zonder な of の.",
        },
        Keiyoushi: {
            text: "Eindigt op <jp>い</jp> en vervoegt zelf: laat de <jp>い</jp> vallen voor uitgangen als <jp>くない</jp> en <jp>かった</jp>. Het kan direct voor een substantief staan.",
        },
        KeiyoushiYoiIi: {
            text: "Het adjectief <jp>いい</jp> (goed). Het vervoegt vanuit de oudere vorm <jp>よい</jp>: <jp>よくない</jp>, <jp>よかった</jp>, nooit <jp>いくない</jp>.",
        },
        Ku: {
            text: "Een klassiek adjectief van het ku-type: <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. Tegenwoordig leeft het voort in vaste uitdrukkingen en literaire stijl.",
        },
        Na: {
            text: "Heeft <jp>な</jp> nodig voor een substantief en vervoegt als een substantief met <jp>だ</jp>. Sommige eindigen toch op <jp>い</jp>, zoals <jp>きれい</jp>.",
            example: "een rustige stad",
        },
        Nari: {
            text: "De klassieke, formele vorm van een na-adjectief. Voor een substantief eindigt het op <jp>なる</jp>; je komt het tegen in literaire stijl.",
        },
        No: {
            text: "Een substantief dat een ander substantief beschrijft als er <jp>の</jp> op volgt.",
            example: "een zieke",
        },
        PreNoun: {
            text: "Staat alleen direct voor een substantief en vervoegt nooit.",
            example: "dit boek",
        },
        Shiku: {
            text: "Een klassiek adjectief van het shiku-type: <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. Tegenwoordig leeft het voort in vaste uitdrukkingen en literaire stijl.",
        },
        Taru: {
            text: "Een literair adjectief: <jp>たる</jp> voor een substantief, <jp>と</jp> voor een werkwoord.",
        },
    },

    verb: {
        Transitive: {
            text: "Werkt op een lijdend voorwerp, meestal gemarkeerd met <jp>を</jp>. Veel hebben een onovergankelijke tegenhanger zonder lijdend voorwerp.",
            example: "het raam openen",
        },
        Intransitive: {
            text: "Heeft geen lijdend voorwerp: het onderwerp doet het zelf of het overkomt het onderwerp, meestal gemarkeerd met <jp>が</jp>.",
            example: "het raam gaat open",
        },
        Ichidan: {
            text: "Eindigt op -iru of -eru en behoudt de stam: laat <jp>る</jp> vallen en voeg de uitgang toe. Niet elk werkwoord op -iru/-eru is er een: <jp>帰る</jp> is een godan-werkwoord.",
        },
        IchidanZuru: {
            text: "Een literair werkwoord op <jp>ずる</jp>. Het vervoegt als het ichidan-werkwoord op <jp>じる</jp> dat het heeft vervangen.",
        },
        IchidanKureru: {
            text: "Het werkwoord <jp>くれる</jp> (aan mij of ons geven). De gebiedende wijs is <jp>くれ</jp>, niet <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "Het onregelmatige werkwoord <jp>来る</jp> (komen). De stam verandert: <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "De laatste kana verandert binnen zijn reeks voor een uitgang: <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "Een klassiek werkwoordtype. De meeste van deze werkwoorden zijn in het moderne Japans godan-werkwoorden.",
        },
        Nidan: {
            text: "Een klassiek werkwoordtype met twee stammen (bovenste of onderste reeks). De meeste van deze werkwoorden zijn in het moderne Japans ichidan-werkwoorden.",
        },
        Irregular: {
            text: "Vervoegt onregelmatig; kijk in de vervoegingstabel.",
        },
    },

    godanEnding: {
        tte: {
            text: "Werkwoorden op <jp>う</jp>, <jp>つ</jp> en <jp>る</jp> vormen de te- en ta-vorm met <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "Werkwoorden op <jp>む</jp>, <jp>ぶ</jp> en <jp>ぬ</jp> vormen de te- en ta-vorm met <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "Werkwoorden op <jp>く</jp> vormen de te- en ta-vorm met <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "Werkwoorden op <jp>ぐ</jp> vormen de te- en ta-vorm met <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "Werkwoorden op <jp>す</jp> vormen de te- en ta-vorm met <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Let op: het eindigt op <jp>る</jp> zoals een ichidan-werkwoord, maar vervoegt als godan: <jp>ない</jp> komt na <jp>ら</jp>.",
        },
        Aru: {
            text: "Eerbiedige werkwoorden zoals <jp>いらっしゃる</jp> en <jp>なさる</jp>: de masu-vorm en de gebiedende wijs eindigen op <jp>い</jp> in plaats van <jp>り</jp>.",
        },
        USpecial: {
            text: "Werkwoorden zoals <jp>問う</jp> en <jp>請う</jp> vormen de te-vorm met <jp>うて</jp>, niet met <jp>って</jp>.",
        },
        Uru: {
            text: "Het literaire werkwoord <jp>得る</jp>, gelezen als <jp>うる</jp>; buiten de woordenboekvorm vervoegt het als <jp>える</jp>.",
        },
        RuIrreg: {
            text: "Het werkwoord <jp>ある</jp> (er zijn, bestaan): de ontkenning is <jp>ない</jp>, niet <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "<jp>行く</jp> is het enige werkwoord op <jp>く</jp> met de te-vorm <jp>行って</jp> in plaats van <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "Een klassiek werkwoord op <jp>ぬ</jp>, zoals <jp>死ぬ</jp> in oude teksten. Tegenwoordig komt het alleen nog in een paar vaste uitdrukkingen voor.",
        },
        Ru: {
            text: "Een klassiek onregelmatig werkwoord zoals <jp>あり</jp> (zijn) of <jp>をり</jp>, waarvan de grondvorm op <jp>り</jp> eindigt. Tegenwoordig kom je het alleen in literaire stijl tegen.",
        },
        NounOrAuxSuru: {
            text: "Een substantief dat met <jp>する</jp> een werkwoord wordt.",
        },
        Suru: {
            text: "Het werkwoord <jp>する</jp> (doen) of een samenstelling ermee. Het is onregelmatig: <jp>しない</jp>, <jp>します</jp>, <jp>できる</jp> als potentiaal.",
        },
        SuruSpecial: {
            text: "Een samenstelling van één kanji met <jp>する</jp>. Die vervoegt deels als een godan-werkwoord op <jp>す</jp>.",
        },
        Su: {
            text: "De oude vorm <jp>す</jp> van <jp>する</jp>. Tegenwoordig kom je die alleen in literaire stijl tegen.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "Een verkorte vorm van een langer woord. Het Japans kort leenwoorden vaak in tot hun eerste kana.",
            example: "personal computer",
        },
        Archaism: {
            text: "Een oud woord of oud gebruik. Je vindt het in klassieke teksten, historische drama’s of vaste uitdrukkingen, maar niet in de hedendaagse taal.",
        },
        ChildrensLanguage: {
            text: "Gebruikt door kleine kinderen of als je tegen hen praat.",
            example: "woefje",
        },
        Colloquialism: {
            text: "Informele spreektaal. Prima onder vrienden; in geschreven of beleefde taal past een ander woord beter.",
        },
        DatedTerm: {
            text: "Klinkt ouderwets. Oudere mensen gebruiken het misschien nog, jongeren zelden.",
        },
        Derogatory: {
            text: "Kleineert de persoon of zaak. Het kan kwetsen.",
        },
        Euphemistic: {
            text: "Een zachtere, indirecte manier om iets onaangenaams of gevoeligs te zeggen.",
        },
        FamiliarLanguage: {
            text: "Voor familie, vrienden en mensen met een lagere status. Tegen anderen kan het onbeleefd klinken.",
        },
        FemaleTermOrLanguage: {
            text: "Van oudsher door vrouwen gebruikt. Het is tegenwoordig minder gangbaar en kan zacht of ouderwets klinken.",
        },
        HonorificLanguage: {
            text: "Sonkeigo: verheft de persoon die handelt, meestal de luisteraar of iemand met een hogere status. Gebruik het nooit voor jezelf.",
            example: "de leraar komt",
        },
        HumbleLanguage: {
            text: "Kenjōgo: maakt jezelf of je groep bescheiden om respect te tonen voor de ander. Gebruik het alleen voor je eigen handelingen.",
            example: "ik ga (bescheiden)",
        },
        IdiomaticExpression: {
            text: "De betekenis valt niet uit de losse woorden af te leiden; leer de uitdrukking als geheel.",
        },
        InternetSlang: {
            text: "Slang van internet en sociale media. Het raakt snel uit de mode.",
        },
        JocularHumorousTerm: {
            text: "Schertsend of speels gebruikt, niet in een serieuze context.",
        },
        LiteraryOrFormalTerm: {
            text: "Komt voor in geschreven taal en formele spreektaal, bijvoorbeeld in het nieuws, toespraken of literatuur. In een gesprek klinkt het stijf.",
        },
        MaleTermOrLanguage: {
            text: "Van oudsher door mannen gebruikt. Uit de mond van anderen kan het grof of geforceerd klinken.",
        },
        MangaSlang: {
            text: "Vooral te vinden in manga en anime, zelden in het echte leven.",
        },
        ObscureTerm: {
            text: "Nauwelijks bekend, zelfs bij veel moedertaalsprekers.",
        },
        ObsoleteTerm: {
            text: "Niet meer in gebruik. Je vindt het alleen nog in oude teksten.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Bootst een geluid na (giongo) of drukt een toestand of gevoel uit (gitaigo). Het Japans heeft er heel veel, vaak met <jp>と</jp> of <jp>する</jp>.",
            example: "fonkelen",
        },
        PoeticalTerm: {
            text: "Gebruikt in gedichten en liedteksten, zelden in een gesprek.",
        },
        PoliteLanguage: {
            text: "Teineigo: de beleefde stijl met <jp>です</jp> en <jp>ます</jp>, voor mensen die je niet goed kent.",
            example: "er is, het is (beleefd)",
        },
        Proverb: {
            text: "Een gezegde dat een levenswijsheid doorgeeft; het wordt meestal in zijn geheel aangehaald.",
        },
        Rare: {
            text: "Zelden gebruikt. Voor deze betekenis is een ander woord gangbaarder.",
        },
        RudeOrXRatedTerm: {
            text: "Grof of seksueel. Vermijd het, tenzij je de situatie goed kent.",
        },
        Sensitive: {
            text: "Raakt aan een gevoelig onderwerp. Gebruik het voorzichtig, anders kan het mensen kwetsen.",
        },
        Slang: {
            text: "Informele woorden van een groep of generatie. Prima onder vrienden, misplaatst in formele situaties.",
        },
        UsuallyWrittenInKana: {
            text: "Heeft een schrijfwijze in kanji, maar wordt normaal in kana geschreven. Leer de kana-vorm.",
        },
        VulgarExpressionOrWord: {
            text: "Grof of vulgair. Het kan kwetsen.",
        },
        Yojijukugo: {
            text: "Een samenstelling van vier kanji, vaak uit Chinese klassieken. Veel zijn vaste uitdrukkingen met een moraal of les.",
            example: "een eenmalige ontmoeting in je leven",
        },
    },

    dialect: {
        Brazilian: {
            text: "Gebruikt door de Japanse gemeenschap in Brazilië en vermengd met Portugees. Het Standaardjapans gebruikt misschien een ander woord.",
        },
        Hokkaido: {
            text: "Gesproken op Hokkaidō, het noordelijkste hoofdeiland. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
        },
        Kansai: {
            text: "Gesproken in de Kansai-regio rond Osaka, Kyoto en Kobe, en vaak te horen in comedy. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
            example: "niet goed (standaard: だめ)",
        },
        Kantou: {
            text: "Gesproken in de Kantō-regio rond Tokio, maar geen onderdeel van het Standaardjapans, dat misschien een ander woord of een andere vorm gebruikt.",
        },
        Kyoto: {
            text: "Gesproken in Kyoto, bekend om zijn zachte en indirecte stijl. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
        },
        Kyuushuu: {
            text: "Gesproken op Kyūshū, het zuidelijke hoofdeiland. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
        },
        Nagano: {
            text: "Gesproken in de prefectuur Nagano in Midden-Japan. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
        },
        Osaka: {
            text: "Gesproken in Osaka, het bekendste Kansai-dialect. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
            example: "dank je (Osaka)",
        },
        Ryuukyuu: {
            text: "Afkomstig uit de Ryūkyū-talen van Okinawa en de omliggende eilanden. Het Standaardjapans gebruikt misschien een ander woord.",
        },
        Touhoku: {
            text: "Gesproken in Tōhoku, het noordoosten van Honshū. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
        },
        Tosa: {
            text: "Gesproken in de prefectuur Kōchi (het vroegere Tosa) op Shikoku. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
        },
        Tsugaru: {
            text: "Gesproken in het westen van de prefectuur Aomori, bekend als moeilijk te verstaan. Het Standaardjapans gebruikt misschien een ander woord of een andere vorm.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Zegt dat iets niet gebeurt of niet zo is: <jp>ない</jp> in de gewone vorm, <jp>ません</jp> in de beleefde.",
            example: "niet eten",
        },
        Polite: {
            text: "De masu-vorm: werkwoordstam + <jp>ます</jp>, de beleefde stijl voor mensen die je niet goed kent.",
            example: "eten (beleefd)",
        },
        Present: {
            text: "De niet-verleden tijd: gewoontes, feiten en de toekomst. Het Japans heeft geen aparte toekomende tijd.",
        },
        Past: {
            text: "Iets wat gebeurd is of zo was: <jp>た</jp> in de gewone vorm, <jp>ました</jp> in de beleefde.",
            example: "at",
        },
        TeForm: {
            text: "Verbindt werkwoorden en zinsdelen (“en”) en is de basis van veel patronen, zoals verzoeken met <jp>ください</jp>.",
            example: "eet alsjeblieft",
        },
        Potential: {
            text: "Zegt dat iemand iets kan. Wat er gedaan kan worden, wordt vaak gemarkeerd met <jp>が</jp>.",
            example: "kunnen eten",
        },
        Passive: {
            text: "Zegt dat het onderwerp iets wordt aangedaan, vaak op een onwelkome manier. Wie het doet, wordt gemarkeerd met <jp>に</jp>.",
            example: "wordt gegeten",
        },
        Causative: {
            text: "Zegt dat iemand een ander iets laat doen of dwingt te doen.",
            example: "laten eten",
        },
        PotentialOrPassive: {
            text: "Ichidan-werkwoorden gebruiken <jp>られる</jp> voor zowel de potentiaal als het passief; de context maakt duidelijk welke.",
            example: "kunnen eten / wordt gegeten",
        },
        CausativePassive: {
            text: "Zegt dat iemand iets moet doen, meestal tegen zijn of haar wil.",
            example: "gedwongen worden te eten",
        },
        Imperative: {
            text: "Een bot bevel. In een gesprek klinkt het onbeleefd; je hoort het in uitroepen, op borden of van meerderen.",
            example: "Eet!",
        },
        Tai: {
            text: "Werkwoordstam + <jp>たい</jp>: zegt wat de spreker wil doen. Het vervoegt als een i-adjectief.",
            example: "willen eten",
        },
        TeIru: {
            text: "Te-vorm + <jp>いる</jp>: een handeling die bezig is, of een toestand na een verandering. In spreektaal valt de <jp>い</jp> vaak weg.",
            example: "is aan het eten",
        },
        TeAru: {
            text: "Te-vorm + <jp>ある</jp>: iets is bewust gedaan en het resultaat is er nog.",
            example: "het raam is opengezet",
        },
        TeMiru: {
            text: "Te-vorm + <jp>みる</jp>: iets proberen om te zien hoe het is.",
            example: "eens proberen te eten",
        },
        TeOku: {
            text: "Te-vorm + <jp>おく</jp>: iets van tevoren doen of het zo laten.",
            example: "van tevoren eten",
        },
        Tara: {
            text: "“Als” of “wanneer”: wat volgt, gebeurt hierna. Het is de meest gebruikte voorwaardelijke vorm.",
            example: "als/wanneer ik eet",
        },
        Tari: {
            text: "Somt handelingen op als voorbeelden (“dingen als … en …”), meestal afgesloten met <jp>する</jp>.",
            example: "onder andere eten",
        },
        Ba: {
            text: "Een voorwaardelijke vorm: “als dit gebeurt, dan …”. Het legt vaak de nadruk op de voorwaarde zelf.",
            example: "als ik eet",
        },
        Shimau: {
            text: "Te-vorm + <jp>しまう</jp>: iets afmaken, of iets per ongeluk doen en er spijt van hebben.",
            example: "uiteindelijk toch eten",
        },
        Chau: {
            text: "Informele korte vorm van te-vorm + <jp>しまう</jp>, vooral gesproken.",
            example: "uiteindelijk toch eten",
        },
        Naide: {
            text: "“Zonder te …”, of met <jp>ください</jp> een beleefd “alsjeblieft niet”.",
            example: "eet het alsjeblieft niet",
        },
        Volitional: {
            text: "“Laten we …” of “ik ga …”: stelt voor iets samen te doen of drukt een besluit uit.",
            example: "laten we eten",
        },
        Nasai: {
            text: "Werkwoordstam + <jp>なさい</jp>: een vastberaden maar niet onbeleefd bevel, zoals ouders en leraren het geven.",
            example: "Eet!",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "Een van de veelgebruikte woorden van het Japans, te vinden in lijsten met gangbare woorden. Goed om vroeg te leren.",
        },
        wasei: {
            text: "Wasei-eigo: in Japan gevormd uit buitenlandse woorden. Het lijkt een leenwoord, maar in het buitenland kent men het misschien niet.",
            example: "kantoormedewerker (“salary man”)",
        },
    },
} satisfies PartialDict<typeof en>;
