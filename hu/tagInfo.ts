import type en from "../en/tagInfo";
import type { PartialDict } from "../types";

export default {
    searchTag: "Minden #{{tag}} címkéjű szó megjelenítése",
    teForm: "Te-alak",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "Határozószó, amely mellé と állhat; többnyire hangutánzó vagy módot kifejező szó. A と partikulával azt írja le, hogyan történik valami.",
            example: "vidáman nevetni",
        },
        Auxilary: {
            text: "Egy másik szóhoz kapcsolódó szó, amely nyelvtani jelentést ad hozzá, például időt, udvariasságot vagy tagadást. Önállóan nem állhat.",
        },
        AuxilaryAdj: {
            text: "Igéhez vagy melléknévhez kapcsolódó végződés, amely úgy ragozódik, mint egy i-melléknév.",
            example: "enni akar",
        },
        AuxilaryVerb: {
            text: "Egy másik igéhez, általában annak te-alakjához kapcsolódó ige, amely például próbálkozás, befejezés vagy előre elvégzés jelentését adja hozzá.",
            example: "megkóstolni",
        },
        Counter: {
            text: "Szám után áll, és egy bizonyos fajta dolgot számol, például lapos tárgyakat, gépeket vagy embereket. A japánban szinte minden számoláshoz kell egy.",
            example: "három lap papír",
        },
        Expr: {
            text: "Több szóból álló állandó kifejezés, amelyet egészben érdemes megtanulni.",
            example: "nagyon köszönöm",
        },
        Particle: {
            text: "Főnév vagy kifejezés után álló rövid szó, amely annak szerepét jelöli a mondatban, például alanyt, tárgyat, helyet vagy irányt.",
            example: "iskolába menni",
        },
        Prefix: {
            text: "Egy másik szó előtt áll, és módosítja vagy kiegészíti annak jelentését. Önállóan nem használatos.",
            example: "pénz (udvarias)",
        },
        Suffix: {
            text: "Egy másik szó végéhez kapcsolódik, például névhez vagy főnévhez. Önállóan nem használatos.",
            example: "Tanaka úr/asszony",
        },
    },

    noun: {
        Adverbial: {
            text: "Főnév, amely partikula nélkül határozószóként is használható.",
            example: "Most elfoglalt vagyok.",
        },
        Temporal: {
            text: "Időpontot jelölő főnév. Gyakran partikula nélkül, határozószóként használják.",
            example: "Holnap megyek.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "Főnév vagy ige, amely közvetlenül egy főnév előtt áll, és な vagy の nélkül jellemzi azt.",
        },
        Keiyoushi: {
            text: "<jp>い</jp>-re végződik, és maga ragozódik: a <jp>くない</jp>, <jp>かった</jp> és hasonló végződések előtt hagyd el az <jp>い</jp>-t. Közvetlenül főnév előtt is állhat.",
        },
        KeiyoushiYoiIi: {
            text: "Az <jp>いい</jp> (jó) melléknév. Régebbi alakja, a <jp>よい</jp> szerint ragozódik: <jp>よくない</jp>, <jp>よかった</jp>, sosem <jp>いくない</jp>.",
        },
        Ku: {
            text: "Ku típusú klasszikus melléknév: <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. Ma állandó kifejezésekben és irodalmi stílusban él tovább.",
        },
        Na: {
            text: "Főnév előtt <jp>な</jp> kell hozzá, és úgy ragozódik, mint egy főnév a <jp>だ</jp>-val. Némelyik mégis <jp>い</jp>-re végződik, például a <jp>きれい</jp>.",
            example: "csendes város",
        },
        Nari: {
            text: "A na-melléknév klasszikus, választékos alakja. Főnév előtt <jp>なる</jp>-ra végződik, és irodalmi stílusban fordul elő.",
        },
        No: {
            text: "Főnév, amely egy másik főnevet jellemez, ha <jp>の</jp> követi.",
            example: "beteg ember",
        },
        PreNoun: {
            text: "Csak közvetlenül főnév előtt áll, és sosem ragozódik.",
            example: "ez a könyv",
        },
        Shiku: {
            text: "Shiku típusú klasszikus melléknév: <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. Ma állandó kifejezésekben és irodalmi stílusban él tovább.",
        },
        Taru: {
            text: "Irodalmi melléknév: főnév előtt <jp>たる</jp>, ige előtt <jp>と</jp>.",
        },
    },

    verb: {
        Transitive: {
            text: "Közvetlen tárgyra irányul, amelyet általában <jp>を</jp> jelöl. Soknak van tárgy nélküli, tárgyatlan párja.",
            example: "kinyitni az ablakot",
        },
        Intransitive: {
            text: "Nincs közvetlen tárgya: az alany végzi a cselekvést, vagy vele történik valami; az alanyt általában <jp>が</jp> jelöli.",
            example: "kinyílik az ablak",
        },
        Ichidan: {
            text: "Végződése -iru vagy -eru, és megtartja a tövét: hagyd el a <jp>る</jp>-t, és tedd hozzá a végződést. Nem minden -iru/-eru végű ige ilyen: a <jp>帰る</jp> godan ige.",
        },
        IchidanZuru: {
            text: "Irodalmi, <jp>ずる</jp> végű ige. Úgy ragozódik, mint az őt felváltó, <jp>じる</jp> végű ichidan ige.",
        },
        IchidanKureru: {
            text: "A <jp>くれる</jp> ige (nekem vagy nekünk adni). Felszólító alakja <jp>くれ</jp>, nem <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "A rendhagyó <jp>来る</jp> ige (jönni). A töve változik: <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "Az utolsó kana a végződések előtt a saját során belül változik: <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "Klasszikus igetípus. Ezeknek az igéknek a többsége a mai japánban godan ige.",
        },
        Nidan: {
            text: "Klasszikus igetípus két tővel (felső vagy alsó). Ezeknek az igéknek a többsége a mai japánban ichidan ige.",
        },
        Irregular: {
            text: "Rendhagyóan ragozódik; nézd meg a ragozási táblázatot.",
        },
    },

    godanEnding: {
        tte: {
            text: "Az <jp>う</jp>, <jp>つ</jp> és <jp>る</jp> végű igék te- és ta-alakja <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "A <jp>む</jp>, <jp>ぶ</jp> és <jp>ぬ</jp> végű igék te- és ta-alakja <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "A <jp>く</jp> végű igék te- és ta-alakja <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "A <jp>ぐ</jp> végű igék te- és ta-alakja <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "A <jp>す</jp> végű igék te- és ta-alakja <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Vigyázz: <jp>る</jp>-ra végződik, mint egy ichidan ige, de godan igeként ragozódik: a <jp>ない</jp> a <jp>ら</jp> után áll.",
        },
        Aru: {
            text: "Tiszteleti igék, mint az <jp>いらっしゃる</jp> és a <jp>なさる</jp>: a masu-alak és a felszólító alak <jp>り</jp> helyett <jp>い</jp>-re végződik.",
        },
        USpecial: {
            text: "A <jp>問う</jp>-hoz és a <jp>請う</jp>-hoz hasonló igék te-alakja <jp>うて</jp>, nem <jp>って</jp>.",
        },
        Uru: {
            text: "Az irodalmi <jp>得る</jp> ige <jp>うる</jp> olvasattal; a szótári alakon kívül úgy ragozódik, mint az <jp>える</jp>.",
        },
        RuIrreg: {
            text: "Az <jp>ある</jp> ige (létezni, van): tagadó alakja <jp>ない</jp>, nem <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "Ez az egyetlen <jp>く</jp> végű ige (<jp>行く</jp>), amelynek te-alakja <jp>行って</jp>, és nem <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "Klasszikus, <jp>ぬ</jp> végű ige, mint régi szövegekben a <jp>死ぬ</jp>. Ma csak néhány állandó kifejezésben fordul elő.",
        },
        Ru: {
            text: "Klasszikus rendhagyó ige, például <jp>あり</jp> (van, létezik) vagy <jp>をり</jp>, amelynek alapalakja <jp>り</jp> végű. Ma csak irodalmi stílusban fordul elő.",
        },
        NounOrAuxSuru: {
            text: "Főnév, amelyből a <jp>する</jp>-val ige lesz.",
        },
        Suru: {
            text: "A <jp>する</jp> ige (csinálni) vagy egy vele alkotott összetétel. Rendhagyó: <jp>しない</jp>, <jp>します</jp>, potenciális alakja <jp>できる</jp>.",
        },
        SuruSpecial: {
            text: "Egyetlen kandzsiból és a <jp>する</jp>-ból álló összetétel. Részben úgy ragozódik, mint egy <jp>す</jp> végű godan ige.",
        },
        Su: {
            text: "A <jp>する</jp> régi, <jp>す</jp> alakja. Ma csak irodalmi stílusban fordul elő.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "Egy hosszabb szó rövidített alakja. A japán a jövevényszavakat gyakran az első néhány szótagjukra rövidíti.",
            example: "személyi számítógép",
        },
        Archaism: {
            text: "Régi szó vagy szóhasználat. Klasszikus szövegekben, történelmi drámákban vagy állandó kifejezésekben találkozhatsz vele, a mai beszédben nem.",
        },
        ChildrensLanguage: {
            text: "Kisgyerekek használják, vagy a hozzájuk beszélő felnőttek.",
            example: "kutyus",
        },
        Colloquialism: {
            text: "Laza, beszélt nyelv. Barátok között rendben van; írásban vagy udvarias beszédben jobb egy másik szó.",
        },
        DatedTerm: {
            text: "Régimódian hangzik. Az idősebbek még használhatják, a fiatalok ritkán.",
        },
        Derogatory: {
            text: "Lekicsinyli a személyt vagy a dolgot. Sértő lehet.",
        },
        Euphemistic: {
            text: "Kíméletesebb, közvetett mód valami kellemetlen vagy kényes dolog kifejezésére.",
        },
        FamiliarLanguage: {
            text: "Családtagokkal, barátokkal és alacsonyabb rangúakkal használják. Másokkal szemben durvának hathat.",
        },
        FemaleTermOrLanguage: {
            text: "Hagyományosan nők használják. Ma ritkább, és lágynak vagy régimódinak hathat.",
        },
        HonorificLanguage: {
            text: "Sonkeigo: felemeli a cselekvőt, általában a beszédpartnert vagy egy magasabb rangú személyt. Magadra sosem használd.",
            example: "jön a tanár",
        },
        HumbleLanguage: {
            text: "Kenjōgo: lealacsonyítja magadat vagy a csoportodat, hogy tiszteletet fejezz ki a másik iránt. Csak a saját cselekvéseidre használd.",
            example: "megyek (szerény)",
        },
        IdiomaticExpression: {
            text: "Jelentése nem vezethető le a szavaiból; egészben tanuld meg.",
        },
        InternetSlang: {
            text: "Az internet és a közösségi média szlengje. Gyorsan kimegy a divatból.",
        },
        JocularHumorousTerm: {
            text: "Tréfásan vagy játékosan használják, nem komoly helyzetben.",
        },
        LiteraryOrFormalTerm: {
            text: "Írásban és hivatalos beszédben fordul elő, például hírekben, beszédekben vagy az irodalomban. Társalgásban merevnek hat.",
        },
        MaleTermOrLanguage: {
            text: "Hagyományosan férfiak használják. Mások szájából nyersnek vagy erőltetettnek hathat.",
        },
        MangaSlang: {
            text: "Főleg mangában és animében fordul elő, a valóságban ritkán.",
        },
        ObscureTerm: {
            text: "Alig ismert, még sok anyanyelvi beszélő számára is.",
        },
        ObsoleteTerm: {
            text: "Már nem használatos. Csak régi szövegekben találkozhatsz vele.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Hangot utánoz (giongo), vagy állapotot, érzést fest le (gitaigo). A japán sok ilyen szót használ, gyakran <jp>と</jp>-val vagy <jp>する</jp>-val.",
            example: "csillogni",
        },
        PoeticalTerm: {
            text: "Versekben és dalszövegekben használják, beszélgetésben ritkán.",
        },
        PoliteLanguage: {
            text: "Teineigo: az udvarias stílus a <jp>です</jp> és <jp>ます</jp> alakokkal, amelyet kevéssé ismert emberekkel használsz.",
            example: "van, létezik (udvarias)",
        },
        Proverb: {
            text: "Bölcsességet továbbadó mondás; általában egészében idézik.",
        },
        Rare: {
            text: "Ritkán használják. Ebben a jelentésben egy másik szó gyakoribb.",
        },
        RudeOrXRatedTerm: {
            text: "Durva vagy szexuális. Kerüld, hacsak nem ismered jól a helyzetet.",
        },
        Sensitive: {
            text: "Kényes témát érint. Óvatosan használd, mert megbánthat másokat.",
        },
        Slang: {
            text: "Egy csoport vagy nemzedék laza szavai. Barátok között rendben van, hivatalos helyzetben nem illik.",
        },
        UsuallyWrittenInKana: {
            text: "Van kandzsis írásmódja, de általában kanával írják. A kanás alakot tanuld meg.",
        },
        VulgarExpressionOrWord: {
            text: "Durva vagy vulgáris. Sértő lehet.",
        },
        Yojijukugo: {
            text: "Négy kandzsiból álló összetétel, gyakran kínai klasszikusokból. Sok közülük erkölcsi tanulságot hordozó állandó kifejezés.",
            example: "egyszeri, megismételhetetlen találkozás",
        },
    },

    dialect: {
        Brazilian: {
            text: "A brazíliai japán közösség használja, portugál elemekkel keverve. A japán köznyelv más szót használhat.",
        },
        Hokkaido: {
            text: "Hokkaidón, a legészakibb fő szigeten beszélik. A japán köznyelv más szót vagy alakot használhat.",
        },
        Kansai: {
            text: "A Kanszai régióban, Oszaka, Kiotó és Kóbe környékén beszélik, és gyakran hallani komédiákban. A japán köznyelv más szót vagy alakot használhat.",
            example: "nem jó (köznyelvi: だめ)",
        },
        Kantou: {
            text: "A Kantó régióban, Tokió környékén beszélik, de nem része a köznyelvnek. A japán köznyelv más szót vagy alakot használhat.",
        },
        Kyoto: {
            text: "Kiotóban beszélik, és lágy, közvetett stílusáról ismert. A japán köznyelv más szót vagy alakot használhat.",
        },
        Kyuushuu: {
            text: "Kjúsún, a déli fő szigeten beszélik. A japán köznyelv más szót vagy alakot használhat.",
        },
        Nagano: {
            text: "Nagano prefektúrában, Japán középső részén beszélik. A japán köznyelv más szót vagy alakot használhat.",
        },
        Osaka: {
            text: "Oszakában beszélik; ez a legismertebb kanszai nyelvjárás. A japán köznyelv más szót vagy alakot használhat.",
            example: "köszönöm (oszakai)",
        },
        Ryuukyuu: {
            text: "Okinava és a környező szigetek rjúkjúi nyelveiből származik. A japán köznyelv más szót használhat.",
        },
        Touhoku: {
            text: "Tóhokuban, Honsú északkeleti részén beszélik. A japán köznyelv más szót vagy alakot használhat.",
        },
        Tosa: {
            text: "Kócsi prefektúrában (a régi Toszában) beszélik, Sikoku szigetén. A japán köznyelv más szót vagy alakot használhat.",
        },
        Tsugaru: {
            text: "Aomori prefektúra nyugati részén beszélik, és nehezen érthetőnek tartják. A japán köznyelv más szót vagy alakot használhat.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Azt fejezi ki, hogy valami nem történik meg vagy nem úgy van: egyszerű beszédben <jp>ない</jp>, udvariasan <jp>ません</jp>.",
            example: "nem eszik",
        },
        Polite: {
            text: "A masu-alak: igető + <jp>ます</jp>, az udvarias stílus kevéssé ismert emberekkel.",
            example: "eszik (udvarias)",
        },
        Present: {
            text: "A nem múlt idő: szokások, tények és a jövő. A japánban nincs külön jövő idő.",
        },
        Past: {
            text: "Ami megtörtént vagy úgy volt: egyszerű beszédben <jp>た</jp>, udvariasan <jp>ました</jp>.",
            example: "evett",
        },
        TeForm: {
            text: "Igéket és tagmondatokat kapcsol össze („és”), és sok szerkezet alapja, például a <jp>ください</jp>-val képzett kéréseké.",
            example: "kérem, egyen",
        },
        Potential: {
            text: "Azt fejezi ki, hogy valaki képes megtenni valamit. Amit meg lehet tenni, azt gyakran <jp>が</jp> jelöli.",
            example: "tud enni",
        },
        Passive: {
            text: "Azt fejezi ki, hogy az alannyal tesznek valamit, gyakran a kedve ellenére. A cselekvőt <jp>に</jp> jelöli.",
            example: "megeszik (valaki által)",
        },
        Causative: {
            text: "Azt fejezi ki, hogy valaki ráveszi vagy hagyja a másikat, hogy megtegyen valamit.",
            example: "megetet / enni hagy",
        },
        PotentialOrPassive: {
            text: "Az ichidan igék a <jp>られる</jp>-t használják a potenciális és a szenvedő alakhoz is; hogy melyikről van szó, a szövegkörnyezetből derül ki.",
            example: "tud enni / megeszik (valaki által)",
        },
        CausativePassive: {
            text: "Azt fejezi ki, hogy valakit rákényszerítenek valamire, általában akarata ellenére.",
            example: "enni kényszerül",
        },
        Imperative: {
            text: "Nyers parancs. Beszélgetésben durván hangzik; kiáltásokban, táblákon vagy feletteseidtől hallhatod.",
            example: "Egyél!",
        },
        Tai: {
            text: "Igető + <jp>たい</jp>: azt fejezi ki, mit szeretne tenni a beszélő. Úgy ragozódik, mint egy i-melléknév.",
            example: "enni akar",
        },
        TeIru: {
            text: "Te-alak + <jp>いる</jp>: folyamatban lévő cselekvés vagy változás utáni állapot. Laza beszédben az <jp>い</jp> gyakran kiesik.",
            example: "éppen eszik",
        },
        TeAru: {
            text: "Te-alak + <jp>ある</jp>: valamit szándékosan megcsináltak, és az eredménye még megvan.",
            example: "az ablak ki van nyitva",
        },
        TeMiru: {
            text: "Te-alak + <jp>みる</jp>: kipróbálni valamit, hogy kiderüljön, milyen.",
            example: "megkóstolni",
        },
        TeOku: {
            text: "Te-alak + <jp>おく</jp>: előre megtenni valamit, vagy úgy hagyni.",
            example: "előre enni",
        },
        Tara: {
            text: "„Ha” vagy „amikor”: ami utána jön, ezután történik. Ez a legszélesebb körben használt feltételes alak.",
            example: "ha/amikor eszem",
        },
        Tari: {
            text: "Cselekvéseket sorol fel példaként („többek között … és …”), általában <jp>する</jp> zárja.",
            example: "enni, meg ilyesmi",
        },
        Ba: {
            text: "Feltételes alak: „ha ez megtörténik, akkor …”. Gyakran magát a feltételt hangsúlyozza.",
            example: "ha eszem",
        },
        Shimau: {
            text: "Te-alak + <jp>しまう</jp>: befejezni valamit, vagy véletlenül megtenni és megbánni.",
            example: "végül megeszi",
        },
        Chau: {
            text: "A te-alak + <jp>しまう</jp> laza, rövid változata, főleg szóban.",
            example: "végül megeszi",
        },
        Naide: {
            text: "„Anélkül, hogy …”, a <jp>ください</jp>-val pedig udvarias „kérem, ne …”.",
            example: "kérem, ne egyen",
        },
        Volitional: {
            text: "„Csináljuk …” vagy „Megcsinálom …”: közös cselekvést javasol, vagy elhatározást fejez ki.",
            example: "együnk",
        },
        Nasai: {
            text: "Igető + <jp>なさい</jp>: határozott, de nem durva felszólítás, ahogy a szülők és a tanárok használják.",
            example: "Egyél!",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "A japán gyakori szavai közé tartozik, és megtalálható a gyakori szavak listáin. Érdemes korán megtanulni.",
        },
        wasei: {
            text: "Wasei-eigo: Japánban, idegen szavakból alkotott szó. Jövevényszónak tűnik, de külföldön nem biztos, hogy ismerik.",
            example: "irodai dolgozó („salary man”)",
        },
    },
} satisfies PartialDict<typeof en>;
