import type en from "../en/tagInfo";
import type { PartialDict } from "../types";

export default {
    searchTag: "Visa alla ord märkta #{{tag}}",
    teForm: "Te-form",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "Ett adverb som kan ta と, oftast ett ljud- eller sättsord. Med と beskriver det hur något görs.",
            example: "skratta glatt",
        },
        Auxilary: {
            text: "Ett ord som fäster vid ett annat ord och tillför grammatik, som tempus, artighet eller negation. Det kan inte stå ensamt.",
        },
        AuxilaryAdj: {
            text: "En ändelse som fäster vid ett verb eller adjektiv och böjs som ett i-adjektiv.",
            example: "vilja äta",
        },
        AuxilaryVerb: {
            text: "Ett verb som fäster vid ett annat verb, oftast vid dess te-form, och tillför en betydelse som att försöka, avsluta eller göra något i förväg.",
            example: "prova att äta",
        },
        Counter: {
            text: "Står efter ett tal och räknar en sorts saker, som platta föremål, maskiner eller människor. Japanskan behöver en räknare för det mesta som räknas.",
            example: "tre pappersark",
        },
        Expr: {
            text: "En fast fras av flera ord som du lär dig som en helhet.",
            example: "tack så mycket",
        },
        Particle: {
            text: "Ett kort ord efter ett substantiv eller en fras som visar dess roll i meningen, som subjekt, objekt, plats eller riktning.",
            example: "gå till skolan",
        },
        Prefix: {
            text: "Står framför ett annat ord och ändrar eller tillför något till dess betydelse. Det används inte ensamt.",
            example: "pengar (artigt)",
        },
        Suffix: {
            text: "Fäster vid slutet av ett annat ord, till exempel ett namn eller ett substantiv. Det används inte ensamt.",
            example: "herr/fru Tanaka",
        },
    },

    noun: {
        Adverbial: {
            text: "Ett substantiv som också kan användas som adverb utan partikel.",
            example: "Jag är upptagen nu.",
        },
        Temporal: {
            text: "Ett substantiv för en tidpunkt. Det används ofta utan partikel, som ett adverb.",
            example: "Jag åker i morgon.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "Ett substantiv eller verb som står direkt före ett substantiv och beskriver det, utan な eller の.",
        },
        Keiyoushi: {
            text: "Slutar på <jp>い</jp> och böjs själv: ta bort <jp>い</jp> för ändelser som <jp>くない</jp> och <jp>かった</jp>. Det kan stå direkt före ett substantiv.",
        },
        KeiyoushiYoiIi: {
            text: "Adjektivet <jp>いい</jp> (bra). Det böjs utifrån sin äldre form <jp>よい</jp>: <jp>よくない</jp>, <jp>よかった</jp>, aldrig <jp>いくない</jp>.",
        },
        Ku: {
            text: "Ett klassiskt adjektiv av ku-typ: <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. I dag lever det kvar i fasta uttryck och litterär stil.",
        },
        Na: {
            text: "Behöver <jp>な</jp> före ett substantiv och böjs som ett substantiv med <jp>だ</jp>. Vissa slutar ändå på <jp>い</jp>, som <jp>きれい</jp>.",
            example: "en lugn stad",
        },
        Nari: {
            text: "Den klassiska, formella formen av ett na-adjektiv. Före substantiv slutar det på <jp>なる</jp>, och det förekommer i litterär stil.",
        },
        No: {
            text: "Ett substantiv som beskriver ett annat substantiv när <jp>の</jp> följer efter.",
            example: "en sjuk person",
        },
        PreNoun: {
            text: "Står bara direkt före ett substantiv och böjs aldrig.",
            example: "den här boken",
        },
        Shiku: {
            text: "Ett klassiskt adjektiv av shiku-typ: <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. I dag lever det kvar i fasta uttryck och litterär stil.",
        },
        Taru: {
            text: "Ett litterärt adjektiv: <jp>たる</jp> före ett substantiv, <jp>と</jp> före ett verb.",
        },
    },

    verb: {
        Transitive: {
            text: "Verkar på ett direkt objekt, oftast markerat med <jp>を</jp>. Många har en intransitiv motsvarighet utan objekt.",
            example: "öppna fönstret",
        },
        Intransitive: {
            text: "Tar inget direkt objekt: subjektet gör det självt eller det händer subjektet, oftast markerat med <jp>が</jp>.",
            example: "fönstret går upp",
        },
        Ichidan: {
            text: "Slutar på -iru eller -eru och behåller sin stam: ta bort <jp>る</jp> och lägg till ändelsen. Inte alla verb på -iru/-eru hör hit: <jp>帰る</jp> är ett godan-verb.",
        },
        IchidanZuru: {
            text: "Ett litterärt verb på <jp>ずる</jp>. Det böjs som det ichidan-verb på <jp>じる</jp> som har ersatt det.",
        },
        IchidanKureru: {
            text: "Verbet <jp>くれる</jp> (ge till mig eller oss). Imperativen är <jp>くれ</jp>, inte <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "Det oregelbundna verbet <jp>来る</jp> (komma). Stammen ändras: <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "Det sista kanatecknet växlar inom sin rad före ändelser: <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "En klassisk verbtyp. De flesta av dessa verb är godan-verb i modern japanska.",
        },
        Nidan: {
            text: "En klassisk verbtyp med två stammar (övre eller nedre). De flesta av dessa verb är ichidan-verb i modern japanska.",
        },
        Irregular: {
            text: "Böjs oregelbundet; se böjningstabellen.",
        },
    },

    godanEnding: {
        tte: {
            text: "Verb på <jp>う</jp>, <jp>つ</jp> och <jp>る</jp> bildar te- och ta-form med <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "Verb på <jp>む</jp>, <jp>ぶ</jp> och <jp>ぬ</jp> bildar te- och ta-form med <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "Verb på <jp>く</jp> bildar te- och ta-form med <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "Verb på <jp>ぐ</jp> bildar te- och ta-form med <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "Verb på <jp>す</jp> bildar te- och ta-form med <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Se upp: det slutar på <jp>る</jp> som ett ichidan-verb, men böjs som godan: <jp>ない</jp> kommer efter <jp>ら</jp>.",
        },
        Aru: {
            text: "Hedersverb som <jp>いらっしゃる</jp> och <jp>なさる</jp>: masu-formen och imperativen slutar på <jp>い</jp> i stället för <jp>り</jp>.",
        },
        USpecial: {
            text: "Verb som <jp>問う</jp> och <jp>請う</jp> bildar te-form med <jp>うて</jp>, inte <jp>って</jp>.",
        },
        Uru: {
            text: "Det litterära verbet <jp>得る</jp> uttalat <jp>うる</jp>; utanför lexikonformen böjs det som <jp>える</jp>.",
        },
        RuIrreg: {
            text: "Verbet <jp>ある</jp> (finnas): den nekande formen är <jp>ない</jp>, inte <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "<jp>行く</jp> är det enda verbet på <jp>く</jp> med te-formen <jp>行って</jp> i stället för <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "Ett klassiskt verb på <jp>ぬ</jp>, som <jp>死ぬ</jp> i gamla texter. I dag används det bara i några få fasta uttryck.",
        },
        Ru: {
            text: "Ett klassiskt oregelbundet verb som <jp>あり</jp> (finnas) eller <jp>をり</jp>, vars grundform slutar på <jp>り</jp>. I dag förekommer det bara i litterär stil.",
        },
        NounOrAuxSuru: {
            text: "Ett substantiv som blir ett verb med <jp>する</jp>.",
        },
        Suru: {
            text: "Verbet <jp>する</jp> (göra) eller en sammansättning med det. Det är oregelbundet: <jp>しない</jp>, <jp>します</jp>, <jp>できる</jp> som potentialis.",
        },
        SuruSpecial: {
            text: "En sammansättning av ett kanjitecken och <jp>する</jp>. Den böjs delvis som ett godan-verb på <jp>す</jp>.",
        },
        Su: {
            text: "Den gamla formen <jp>す</jp> av <jp>する</jp>. I dag förekommer den bara i litterär stil.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "En förkortad form av ett längre ord. Japanskan kortar ofta lånord till deras första kana.",
            example: "persondator",
        },
        Archaism: {
            text: "Ett gammalt ord eller bruk. Du hittar det i klassiska texter, historiska dramer eller fasta uttryck, men inte i dagens språk.",
        },
        ChildrensLanguage: {
            text: "Används av små barn eller när man pratar med dem.",
            example: "vovve",
        },
        Colloquialism: {
            text: "Ledigt talspråk. Går bra bland vänner; i skrift eller artigt tal passar ett annat ord bättre.",
        },
        DatedTerm: {
            text: "Låter gammaldags. Äldre kan fortfarande använda det, yngre sällan.",
        },
        Derogatory: {
            text: "Nedvärderar personen eller saken. Det kan såra.",
        },
        Euphemistic: {
            text: "Ett mjukare, indirekt sätt att säga något obehagligt eller känsligt.",
        },
        FamiliarLanguage: {
            text: "För familj, vänner och personer med lägre status. Mot andra kan det låta oartigt.",
        },
        FemaleTermOrLanguage: {
            text: "Traditionellt använt av kvinnor. Det är mindre vanligt i dag och kan låta mjukt eller gammaldags.",
        },
        HonorificLanguage: {
            text: "Sonkeigo: upphöjer den som handlar, oftast lyssnaren eller någon med högre status. Använd det aldrig om dig själv.",
            example: "läraren kommer",
        },
        HumbleLanguage: {
            text: "Kenjōgo: sänker dig själv eller din grupp för att visa respekt för den andra. Använd det bara om dina egna handlingar.",
            example: "jag går (ödmjukt)",
        },
        IdiomaticExpression: {
            text: "Betydelsen går inte att lista ut från orden; lär dig uttrycket som en helhet.",
        },
        InternetSlang: {
            text: "Slang från internet och sociala medier. Den går snabbt ur modet.",
        },
        JocularHumorousTerm: {
            text: "Används skämtsamt eller lekfullt, inte i allvarliga sammanhang.",
        },
        LiteraryOrFormalTerm: {
            text: "Förekommer i skrift och formellt tal, till exempel i nyheter, tal eller litteratur. I samtal låter det stelt.",
        },
        MaleTermOrLanguage: {
            text: "Traditionellt använt av män. Från andra kan det låta grovt eller tillgjort.",
        },
        MangaSlang: {
            text: "Förekommer mest i manga och anime, sällan i verkliga livet.",
        },
        ObscureTerm: {
            text: "Knappt känt, inte ens för många som har japanska som modersmål.",
        },
        ObsoleteTerm: {
            text: "Används inte längre. Du hittar det bara i gamla texter.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Härmar ett ljud (giongo) eller visar ett tillstånd eller en känsla (gitaigo). Japanskan har väldigt många sådana, ofta med <jp>と</jp> eller <jp>する</jp>.",
            example: "glittra",
        },
        PoeticalTerm: {
            text: "Används i dikter och sångtexter, sällan i samtal.",
        },
        PoliteLanguage: {
            text: "Teineigo: den artiga stilen med <jp>です</jp> och <jp>ます</jp>, som används med människor du inte känner väl.",
            example: "det finns, det är (artigt)",
        },
        Proverb: {
            text: "Ett talesätt som för vidare en visdom; det citeras oftast i sin helhet.",
        },
        Rare: {
            text: "Används sällan. Ett annat ord är vanligare för den här betydelsen.",
        },
        RudeOrXRatedTerm: {
            text: "Grovt eller sexuellt. Undvik det om du inte känner situationen väl.",
        },
        Sensitive: {
            text: "Berör ett känsligt ämne. Använd det med försiktighet, annars kan det såra.",
        },
        Slang: {
            text: "Lediga ord inom en grupp eller generation. Går bra bland vänner, malplacerat i formella situationer.",
        },
        UsuallyWrittenInKana: {
            text: "Har en kanjistavning men skrivs normalt med kana. Lär dig kanaformen.",
        },
        VulgarExpressionOrWord: {
            text: "Grovt eller vulgärt. Det kan såra.",
        },
        Yojijukugo: {
            text: "En sammansättning av fyra kanji, ofta från kinesiska klassiker. Många är fasta uttryck med en moral eller lärdom.",
            example: "ett möte som bara sker en gång i livet",
        },
    },

    dialect: {
        Brazilian: {
            text: "Används av den japanska gemenskapen i Brasilien och är blandat med portugisiska. Standardjapanskan kan använda ett annat ord.",
        },
        Hokkaido: {
            text: "Talas på Hokkaidō, den nordligaste huvudön. Standardjapanskan kan använda ett annat ord eller en annan form.",
        },
        Kansai: {
            text: "Talas i Kansai-regionen kring Osaka, Kyoto och Kobe och hörs ofta i komedi. Standardjapanskan kan använda ett annat ord eller en annan form.",
            example: "inte bra (standard: だめ)",
        },
        Kantou: {
            text: "Talas i Kantō-regionen kring Tokyo, men hör inte till standardjapanskan, som kan använda ett annat ord eller en annan form.",
        },
        Kyoto: {
            text: "Talas i Kyoto och är känd för sin mjuka och indirekta stil. Standardjapanskan kan använda ett annat ord eller en annan form.",
        },
        Kyuushuu: {
            text: "Talas på Kyūshū, den södra huvudön. Standardjapanskan kan använda ett annat ord eller en annan form.",
        },
        Nagano: {
            text: "Talas i prefekturen Nagano i centrala Japan. Standardjapanskan kan använda ett annat ord eller en annan form.",
        },
        Osaka: {
            text: "Talas i Osaka och är den mest kända Kansai-dialekten. Standardjapanskan kan använda ett annat ord eller en annan form.",
            example: "tack (Osaka)",
        },
        Ryuukyuu: {
            text: "Kommer från Ryūkyū-språken på Okinawa och öarna runt omkring. Standardjapanskan kan använda ett annat ord.",
        },
        Touhoku: {
            text: "Talas i Tōhoku, den nordöstra delen av Honshū. Standardjapanskan kan använda ett annat ord eller en annan form.",
        },
        Tosa: {
            text: "Talas i prefekturen Kōchi (förr Tosa) på Shikoku. Standardjapanskan kan använda ett annat ord eller en annan form.",
        },
        Tsugaru: {
            text: "Talas i västra delen av prefekturen Aomori och är känd för att vara svår att förstå. Standardjapanskan kan använda ett annat ord eller en annan form.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Säger att något inte händer eller inte är så: <jp>ない</jp> i enkel stil, <jp>ません</jp> i artig stil.",
            example: "äter inte",
        },
        Polite: {
            text: "Masu-formen: verbstam + <jp>ます</jp>, den artiga stilen för människor du inte känner väl.",
            example: "äter (artigt)",
        },
        Present: {
            text: "Icke-dåtid: vanor, fakta och framtid. Japanskan har inget eget futurum.",
        },
        Past: {
            text: "Något som hände eller var så: <jp>た</jp> i enkel stil, <jp>ました</jp> i artig stil.",
            example: "åt",
        },
        TeForm: {
            text: "Binder ihop verb och satser (”och”) och är grunden för många mönster, som uppmaningar med <jp>ください</jp>.",
            example: "var snäll och ät",
        },
        Potential: {
            text: "Säger att någon kan göra något. Det som kan göras markeras ofta med <jp>が</jp>.",
            example: "kunna äta",
        },
        Passive: {
            text: "Säger att något görs mot subjektet, ofta på ett ovälkommet sätt. Den som utför handlingen markeras med <jp>に</jp>.",
            example: "äts",
        },
        Causative: {
            text: "Säger att någon får eller låter någon annan göra något.",
            example: "få/låta någon äta",
        },
        PotentialOrPassive: {
            text: "Ichidan-verb använder <jp>られる</jp> både för potentialis och passiv; sammanhanget avgör vilket.",
            example: "kunna äta / äts",
        },
        CausativePassive: {
            text: "Säger att någon tvingas göra något, oftast mot sin vilja.",
            example: "tvingas äta",
        },
        Imperative: {
            text: "En rak order. I samtal låter den oartig; du hör den i rop, på skyltar eller från överordnade.",
            example: "Ät!",
        },
        Tai: {
            text: "Verbstam + <jp>たい</jp>: säger vad talaren vill göra. Den böjs som ett i-adjektiv.",
            example: "vilja äta",
        },
        TeIru: {
            text: "Te-form + <jp>いる</jp>: en pågående handling eller ett tillstånd efter en förändring. I vardagligt tal faller <jp>い</jp> ofta bort.",
            example: "håller på att äta",
        },
        TeAru: {
            text: "Te-form + <jp>ある</jp>: något har gjorts med avsikt och resultatet finns kvar.",
            example: "fönstret har öppnats",
        },
        TeMiru: {
            text: "Te-form + <jp>みる</jp>: pröva något för att se hur det är.",
            example: "prova att äta",
        },
        TeOku: {
            text: "Te-form + <jp>おく</jp>: göra något i förväg eller låta det vara så.",
            example: "äta i förväg",
        },
        Tara: {
            text: "”Om” eller ”när”: det som följer händer efter detta. Det är den mest använda villkorsformen.",
            example: "när/om jag äter",
        },
        Tari: {
            text: "Räknar upp handlingar som exempel (”sådant som … och …”), oftast avslutat med <jp>する</jp>.",
            example: "äta och så vidare",
        },
        Ba: {
            text: "En villkorsform: ”om detta händer, så …”. Den betonar ofta själva villkoret.",
            example: "om jag äter",
        },
        Shimau: {
            text: "Te-form + <jp>しまう</jp>: göra något färdigt, eller råka göra något och ångra det.",
            example: "råka äta upp",
        },
        Chau: {
            text: "Vardaglig kortform av te-form + <jp>しまう</jp>, mest i tal.",
            example: "råka äta upp",
        },
        Naide: {
            text: "”Utan att göra”, eller med <jp>ください</jp> ett artigt ”var snäll och låt bli”.",
            example: "var snäll och ät inte",
        },
        Volitional: {
            text: "”Låt oss …” eller ”jag ska …”: föreslår att göra något tillsammans eller uttrycker ett beslut.",
            example: "låt oss äta",
        },
        Nasai: {
            text: "Verbstam + <jp>なさい</jp>: en bestämd men inte oartig uppmaning, som föräldrar och lärare använder.",
            example: "Ät!",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "Ett av de vanliga orden i japanskan, med i listor över vanliga ord. Bra att lära sig tidigt.",
        },
        wasei: {
            text: "Wasei-eigo: skapat i Japan av utländska ord. Det ser ut som ett lånord, men utomlands känner man kanske inte till det.",
            example: "kontorsanställd (”salary man”)",
        },
    },
} satisfies PartialDict<typeof en>;
