import type en from "../en/tagInfo";
import type { PartialDict } from "../types";

export default {
    searchTag: "Pokaži vse besede z oznako #{{tag}}",
    teForm: "Te-oblika",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "Prislov, ki lahko dobi と, večinoma zvočnoposnemovalna beseda ali beseda načina. S と opisuje, kako se nekaj dogaja.",
            example: "veselo se smejati",
        },
        Auxilary: {
            text: "Beseda, ki se pripne k drugi besedi in doda slovnični pomen, na primer čas, vljudnost ali zanikanje. Samostojno se ne uporablja.",
        },
        AuxilaryAdj: {
            text: "Končnica, ki se pripne h glagolu ali pridevniku in se spreminja kot i-pridevnik.",
            example: "želeti jesti",
        },
        AuxilaryVerb: {
            text: "Glagol, ki se pripne k drugemu glagolu, navadno k njegovi te-obliki, in doda pomen, kot je poskus, dokončanje ali dejanje vnaprej.",
            example: "poskusiti jesti",
        },
        Counter: {
            text: "Stoji za številom in šteje določeno vrsto stvari, na primer ploščate predmete, stroje ali ljudi. Japonščina jo potrebuje pri večini štetja.",
            example: "trije listi papirja",
        },
        Expr: {
            text: "Ustaljena besedna zveza iz več besed, ki se je naučite kot celote.",
            example: "najlepša hvala",
        },
        Particle: {
            text: "Kratka beseda, ki stoji za samostalnikom ali besedno zvezo in označuje vlogo tega dela stavka, na primer osebek, predmet, kraj ali smer.",
            example: "iti v šolo",
        },
        Prefix: {
            text: "Stoji pred drugo besedo in spremeni ali dopolni njen pomen. Samostojno se ne uporablja.",
            example: "denar (vljudno)",
        },
        Suffix: {
            text: "Pripne se na konec druge besede, na primer imena ali samostalnika. Samostojno se ne uporablja.",
            example: "gospod/gospa Tanaka",
        },
    },

    noun: {
        Adverbial: {
            text: "Samostalnik, ki se lahko uporablja tudi kot prislov, brez členka.",
            example: "Zdaj sem zaposlen.",
        },
        Temporal: {
            text: "Samostalnik za časovno točko. Pogosto se uporablja brez členka, kot prislov.",
            example: "Jutri grem.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "Samostalnik ali glagol, ki stoji neposredno pred samostalnikom in ga opisuje brez な ali の.",
        },
        Keiyoushi: {
            text: "Konča se na <jp>い</jp> in se sam spreminja: <jp>い</jp> odpade pred končnicami, kot sta <jp>くない</jp> in <jp>かった</jp>. Lahko stoji neposredno pred samostalnikom.",
        },
        KeiyoushiYoiIi: {
            text: "Pridevnik <jp>いい</jp> (dober). Oblike tvori iz starejše oblike <jp>よい</jp>: <jp>よくない</jp>, <jp>よかった</jp>, nikoli <jp>いくない</jp>.",
        },
        Ku: {
            text: "Klasični pridevnik tipa ku: <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. Danes živi naprej v ustaljenih izrazih in knjižnem slogu.",
        },
        Na: {
            text: "Pred samostalnikom potrebuje <jp>な</jp> in se spreminja kot samostalnik z <jp>だ</jp>. Nekateri se kljub temu končajo na <jp>い</jp>, na primer <jp>きれい</jp>.",
            example: "mirno mesto",
        },
        Nari: {
            text: "Klasična, knjižna oblika na-pridevnika. Pred samostalniki se konča na <jp>なる</jp> in se pojavlja v knjižnem slogu.",
        },
        No: {
            text: "Samostalnik, ki opisuje drug samostalnik, kadar mu sledi <jp>の</jp>.",
            example: "bolan človek",
        },
        PreNoun: {
            text: "Stoji le neposredno pred samostalnikom in se nikoli ne spreminja.",
            example: "ta knjiga",
        },
        Shiku: {
            text: "Klasični pridevnik tipa shiku: <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. Danes živi naprej v ustaljenih izrazih in knjižnem slogu.",
        },
        Taru: {
            text: "Knjižni pridevnik: <jp>たる</jp> pred samostalnikom, <jp>と</jp> pred glagolom.",
        },
    },

    verb: {
        Transitive: {
            text: "Deluje na premi predmet, navadno označen z <jp>を</jp>. Mnogi imajo neprehodni par brez njega.",
            example: "odpreti okno",
        },
        Intransitive: {
            text: "Nima premega predmeta: dejanje izvaja osebek ali se osebku zgodi; osebek je navadno označen z <jp>が</jp>.",
            example: "okno se odpre",
        },
        Ichidan: {
            text: "Konča se na -iru ali -eru in ohrani osnovo: odstranite <jp>る</jp> in dodajte končnico. Ni pa vsak glagol na -iru/-eru tak: <jp>帰る</jp> je glagol godan.",
        },
        IchidanZuru: {
            text: "Knjižni glagol na <jp>ずる</jp>. Spreminja se kot glagol ichidan na <jp>じる</jp>, ki ga je nadomestil.",
        },
        IchidanKureru: {
            text: "Glagol <jp>くれる</jp> (dati meni ali nam). Njegov velelnik je <jp>くれ</jp>, ne <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "Nepravilni glagol <jp>来る</jp> (priti). Njegova osnova se spreminja: <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "Zadnja kana se pred končnicami spreminja znotraj svoje vrste: <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "Klasični tip glagolov. V sodobni japonščini se večina teh glagolov spreminja kot glagoli godan.",
        },
        Nidan: {
            text: "Klasični tip glagolov z dvema osnovama (zgornja ali spodnja vrsta). V sodobni japonščini se večina teh glagolov spreminja kot glagoli ichidan.",
        },
        Irregular: {
            text: "Spreminja se nepravilno; poglejte preglednico spreganja.",
        },
    },

    godanEnding: {
        tte: {
            text: "Glagoli na <jp>う</jp>, <jp>つ</jp> in <jp>る</jp> tvorijo te- in ta-obliko s <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "Glagoli na <jp>む</jp>, <jp>ぶ</jp> in <jp>ぬ</jp> tvorijo te- in ta-obliko z <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "Glagoli na <jp>く</jp> tvorijo te- in ta-obliko z <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "Glagoli na <jp>ぐ</jp> tvorijo te- in ta-obliko z <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "Glagoli na <jp>す</jp> tvorijo te- in ta-obliko s <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Pozor: konča se na <jp>る</jp> kot glagol ichidan, vendar se spreminja kot godan: <jp>ない</jp> stoji za <jp>ら</jp>.",
        },
        Aru: {
            text: "Spoštljivi glagoli, kot sta <jp>いらっしゃる</jp> in <jp>なさる</jp>: masu-oblika in velelnik se končata na <jp>い</jp> namesto na <jp>り</jp>.",
        },
        USpecial: {
            text: "Glagoli, kot sta <jp>問う</jp> in <jp>請う</jp>, tvorijo te-obliko z <jp>うて</jp>, ne s <jp>って</jp>.",
        },
        Uru: {
            text: "Knjižni glagol <jp>得る</jp> v branju <jp>うる</jp>; zunaj slovarske oblike se spreminja kot <jp>える</jp>.",
        },
        RuIrreg: {
            text: "Glagol <jp>ある</jp> (obstajati): njegova nikalna oblika je <jp>ない</jp>, ne <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "<jp>行く</jp> je edini glagol na <jp>く</jp> s te-obliko <jp>行って</jp> namesto <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "Klasični glagol na <jp>ぬ</jp>, kot <jp>死ぬ</jp> v starih besedilih. Danes ga najdemo le v nekaj ustaljenih izrazih.",
        },
        Ru: {
            text: "Klasični nepravilni glagol, kot sta <jp>あり</jp> (biti, obstajati) in <jp>をり</jp>, katerega osnovna oblika se konča na <jp>り</jp>. Danes ga najdemo le v knjižnem slogu.",
        },
        NounOrAuxSuru: {
            text: "Samostalnik, ki s <jp>する</jp> postane glagol.",
        },
        Suru: {
            text: "Glagol <jp>する</jp> (delati) ali zloženka z njim. Je nepravilen: <jp>しない</jp>, <jp>します</jp>, v možnostni obliki <jp>できる</jp>.",
        },
        SuruSpecial: {
            text: "Zloženka s <jp>する</jp> za enim kandžijem. Deloma se spreminja kot glagol godan na <jp>す</jp>.",
        },
        Su: {
            text: "Stara oblika <jp>す</jp> glagola <jp>する</jp>. Danes jo najdemo le v knjižnem slogu.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "Skrajšana oblika daljše besede. Japonščina prevzete besede pogosto skrajša na prve zloge.",
            example: "osebni računalnik",
        },
        Archaism: {
            text: "Stara beseda ali raba. Najdete jo v klasičnih besedilih, zgodovinskih dramah ali ustaljenih izrazih, ne pa v današnjem govoru.",
        },
        ChildrensLanguage: {
            text: "Uporabljajo jo majhni otroci ali odrasli v pogovoru z njimi.",
            example: "kuža",
        },
        Colloquialism: {
            text: "Sproščen govorjeni jezik. Med prijatelji je v redu; v pisnem ali vljudnem govoru bolj ustreza druga beseda.",
        },
        DatedTerm: {
            text: "Zveni staromodno. Starejši jo morda še uporabljajo, mlajši redko.",
        },
        Derogatory: {
            text: "Ponižuje osebo ali stvar. Lahko užali.",
        },
        Euphemistic: {
            text: "Mehkejši, posreden način, kako povedati nekaj neprijetnega ali občutljivega.",
        },
        FamiliarLanguage: {
            text: "Za družino, prijatelje in ljudi nižjega položaja. Drugim lahko zveni nevljudno.",
        },
        FemaleTermOrLanguage: {
            text: "Tradicionalno jo uporabljajo ženske. Danes je manj pogosta in lahko zveni mehko ali staromodno.",
        },
        HonorificLanguage: {
            text: "Sonkeigo: povzdigne osebo, ki deluje, navadno sogovornika ali nekoga višjega položaja. Nikoli ga ne uporabljajte zase.",
            example: "učitelj prihaja",
        },
        HumbleLanguage: {
            text: "Kenjōgo: poniža vas ali vašo skupino, da izrazi spoštovanje do drugega. Uporabljajte ga le za svoja dejanja.",
            example: "grem (ponižno)",
        },
        IdiomaticExpression: {
            text: "Pomena ni mogoče razbrati iz posameznih besed; naučite se ga kot celote.",
        },
        InternetSlang: {
            text: "Sleng z interneta in družbenih omrežij. Hitro gre iz mode.",
        },
        JocularHumorousTerm: {
            text: "Uporablja se v šali ali igrivo, ne v resnem kontekstu.",
        },
        LiteraryOrFormalTerm: {
            text: "Najdemo jo v pisnem jeziku in formalnem govoru, na primer v novicah, govorih ali književnosti. V pogovoru zveni togo.",
        },
        MaleTermOrLanguage: {
            text: "Tradicionalno jo uporabljajo moški. Iz ust drugih lahko zveni grobo ali hoteno.",
        },
        MangaSlang: {
            text: "Najdemo jo večinoma v mangah in animejih, redko v resničnem življenju.",
        },
        ObscureTerm: {
            text: "Komaj znana, celo mnogim naravnim govorcem.",
        },
        ObsoleteTerm: {
            text: "Ni več v rabi. Najdete jo le v starih besedilih.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Posnema zvok (giongo) ali izraža stanje ali občutek (gitaigo). Japonščina jih ima veliko, pogosto s <jp>と</jp> ali <jp>する</jp>.",
            example: "lesketati se",
        },
        PoeticalTerm: {
            text: "Uporablja se v poeziji in besedilih pesmi, v pogovoru redko.",
        },
        PoliteLanguage: {
            text: "Teineigo: vljudni slog z <jp>です</jp> in <jp>ます</jp>, ki ga uporabljate z ljudmi, ki jih ne poznate dobro.",
            example: "je, obstaja (vljudno)",
        },
        Proverb: {
            text: "Rek, ki prenaša življenjsko modrost; navadno ga navajamo v celoti.",
        },
        Rare: {
            text: "Redko v rabi. Za ta pomen je pogostejša druga beseda.",
        },
        RudeOrXRatedTerm: {
            text: "Nespodobno ali spolno. Izogibajte se mu, razen če dobro poznate okoliščine.",
        },
        Sensitive: {
            text: "Dotika se občutljive teme. Uporabljajte jo previdno, sicer lahko koga prizadene.",
        },
        Slang: {
            text: "Sproščeno izrazje neke skupine ali generacije. Med prijatelji je v redu, v formalnih okoliščinah ni primerno.",
        },
        UsuallyWrittenInKana: {
            text: "Ima zapis s kandžiji, vendar se navadno piše s kano. Naučite se zapisa s kano.",
        },
        VulgarExpressionOrWord: {
            text: "Grobo ali vulgarno. Lahko užali.",
        },
        Yojijukugo: {
            text: "Zloženka iz štirih kandžijev, pogosto iz kitajskih klasikov. Mnoge so ustaljeni izrazi z moralnim naukom.",
            example: "srečanje enkrat v življenju",
        },
    },

    dialect: {
        Brazilian: {
            text: "Raba japonske skupnosti v Braziliji, pomešana s portugalščino. V standardni japonščini je lahko druga beseda.",
        },
        Hokkaido: {
            text: "Govori se na Hokaidu, najsevernejšem glavnem otoku. V standardni japonščini je lahko druga beseda ali oblika.",
        },
        Kansai: {
            text: "Govori se v regiji Kansai okoli Osake, Kjota in Kobeja in se pogosto sliši v komediji. V standardni japonščini je lahko druga beseda ali oblika.",
            example: "ni dobro (standardno: だめ)",
        },
        Kantou: {
            text: "Govori se v regiji Kanto okoli Tokia, vendar ni del standardne japonščine. V standardni japonščini je lahko druga beseda ali oblika.",
        },
        Kyoto: {
            text: "Govori se v Kjotu, ki slovi po mehkem in posrednem načinu govora. V standardni japonščini je lahko druga beseda ali oblika.",
        },
        Kyuushuu: {
            text: "Govori se na Kjušuju, južnem glavnem otoku. V standardni japonščini je lahko druga beseda ali oblika.",
        },
        Nagano: {
            text: "Govori se v prefekturi Nagano v osrednji Japonski. V standardni japonščini je lahko druga beseda ali oblika.",
        },
        Osaka: {
            text: "Govori se v Osaki; to je najbolj znano narečje regije Kansai. V standardni japonščini je lahko druga beseda ali oblika.",
            example: "hvala (Osaka)",
        },
        Ryuukyuu: {
            text: "Iz rjukjujskih jezikov Okinave in okoliških otokov. V standardni japonščini je lahko druga beseda.",
        },
        Touhoku: {
            text: "Govori se v Tohokuju, na severovzhodu Honšuja. V standardni japonščini je lahko druga beseda ali oblika.",
        },
        Tosa: {
            text: "Govori se v prefekturi Koči (nekdanja Tosa) na Šikokuju. V standardni japonščini je lahko druga beseda ali oblika.",
        },
        Tsugaru: {
            text: "Govori se na zahodu prefekture Aomori in velja za težko razumljivo. V standardni japonščini je lahko druga beseda ali oblika.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Pove, da se nekaj ne zgodi ali ni tako: <jp>ない</jp> v navadnem govoru, <jp>ません</jp> v vljudnem.",
            example: "ne jesti",
        },
        Polite: {
            text: "Masu-oblika: glagolska osnova + <jp>ます</jp>, vljudni slog za ljudi, ki jih ne poznate dobro.",
            example: "jesti (vljudno)",
        },
        Present: {
            text: "Nepreteklik: navade, dejstva in prihodnost. Japonščina nima posebnega prihodnjika.",
        },
        Past: {
            text: "Nekaj, kar se je zgodilo ali je bilo tako: <jp>た</jp> v navadnem govoru, <jp>ました</jp> v vljudnem.",
            example: "jedel",
        },
        TeForm: {
            text: "Povezuje glagole in stavke („in“) ter je osnova mnogih vzorcev, na primer prošenj s <jp>ください</jp>.",
            example: "prosim, jejte",
        },
        Potential: {
            text: "Pove, da nekdo nekaj zmore. Kar je mogoče narediti, je pogosto označeno z <jp>が</jp>.",
            example: "lahko jem",
        },
        Passive: {
            text: "Pove, da je osebek deležen dejanja, pogosto neželenega. Vršilec je označen z <jp>に</jp>.",
            example: "biti pojeden",
        },
        Causative: {
            text: "Pove, da nekdo koga prisili ali mu dovoli, da nekaj naredi.",
            example: "prisiliti/pustiti jesti",
        },
        PotentialOrPassive: {
            text: "Glagoli ichidan uporabljajo <jp>られる</jp> za možnostno obliko in za trpnik; kaj je mišljeno, pove sobesedilo.",
            example: "lahko jem / biti pojeden",
        },
        CausativePassive: {
            text: "Pove, da je nekdo prisiljen nekaj narediti, navadno proti svoji volji.",
            example: "biti prisiljen jesti",
        },
        Imperative: {
            text: "Oster ukaz. V pogovoru zveni nevljudno; slišite ga v vzklikih, na napisih ali od nadrejenih.",
            example: "Jej!",
        },
        Tai: {
            text: "Glagolska osnova + <jp>たい</jp>: pove, kaj govorec želi narediti. Spreminja se kot i-pridevnik.",
            example: "želim jesti",
        },
        TeIru: {
            text: "Te-oblika + <jp>いる</jp>: dejanje, ki poteka, ali stanje po spremembi. V sproščenem govoru <jp>い</jp> pogosto odpade.",
            example: "(ravno) jé",
        },
        TeAru: {
            text: "Te-oblika + <jp>ある</jp>: nekdo je nekaj namerno naredil in rezultat je še vedno tu.",
            example: "okno je odprto (namenoma)",
        },
        TeMiru: {
            text: "Te-oblika + <jp>みる</jp>: nekaj poskusiti, da vidite, kakšno je.",
            example: "poskusiti jesti",
        },
        TeOku: {
            text: "Te-oblika + <jp>おく</jp>: nekaj narediti vnaprej ali tako pustiti.",
            example: "pojesti vnaprej",
        },
        Tara: {
            text: "„Če“ ali „ko“: kar sledi, se zgodi po tem. Je najpogosteje rabljena pogojna oblika.",
            example: "ko/če jem",
        },
        Tari: {
            text: "Našteva dejanja kot primere („med drugim … in …“), navadno s <jp>する</jp> na koncu.",
            example: "jesti in podobno",
        },
        Ba: {
            text: "Pogojna oblika: „če se to zgodi, potem …“. Pogosto poudari sam pogoj.",
            example: "če jem",
        },
        Shimau: {
            text: "Te-oblika + <jp>しまう</jp>: nekaj dokončati ali nehote narediti in obžalovati.",
            example: "na koncu pojesti",
        },
        Chau: {
            text: "Sproščena kratka oblika za te-obliko + <jp>しまう</jp>, predvsem v govoru.",
            example: "na koncu pojesti",
        },
        Naide: {
            text: "„Ne da bi“, s <jp>ください</jp> pa vljudni „prosim, ne …“.",
            example: "prosim, ne jejte",
        },
        Volitional: {
            text: "„Dajmo …“ ali „bom …“: predlaga skupno dejanje ali izraža odločitev.",
            example: "jejmo",
        },
        Nasai: {
            text: "Glagolska osnova + <jp>なさい</jp>: odločen, a ne nevljuden ukaz, kot ga uporabljajo starši in učitelji.",
            example: "Jej!",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "Ena od pogostih besed japonščine s seznamov pogostih besed. Splača se je naučiti zgodaj.",
        },
        wasei: {
            text: "Wasei-eigo: beseda, ustvarjena na Japonskem iz tujih besed. Videti je kot prevzeta beseda, a je v tujini morda ne poznajo.",
            example: "pisarniški uslužbenec („salary man“)",
        },
    },
} satisfies PartialDict<typeof en>;
