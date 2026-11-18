import type en from "../en/tagInfo";
import type { PartialDict } from "../types";

export default {
    searchTag: "Alle Wörter mit #{{tag}} anzeigen",
    teForm: "Te-Form",

    // -----------------------------------------------------------------
    // PARTS OF SPEECH
    // -----------------------------------------------------------------

    pos: {
        AdverbTo: {
            text: "Ein Adverb, das と annehmen kann, meist ein Laut- oder Art-und-Weise-Wort. Mit と beschreibt es, wie etwas geschieht.",
            example: "fröhlich lachen",
        },
        Auxilary: {
            text: "Ein Wort, das sich an ein anderes anhängt und Grammatik ergänzt, etwa Zeit, Höflichkeit oder Verneinung. Es kann nicht allein stehen.",
        },
        AuxilaryAdj: {
            text: "Eine Endung, die sich an ein Verb oder Adjektiv anhängt und wie ein i-Adjektiv konjugiert wird.",
            example: "essen wollen",
        },
        AuxilaryVerb: {
            text: "Ein Verb, das sich an ein anderes Verb anhängt, meist an dessen te-Form, und eine Bedeutung wie Versuchen, Beenden oder Vorbereiten ergänzt.",
            example: "probeweise essen",
        },
        Counter: {
            text: "Steht nach einer Zahl und zählt eine Art von Dingen, etwa flache Gegenstände, Maschinen oder Personen. Beim Zählen braucht das Japanische fast immer eins.",
            example: "drei Blatt Papier",
        },
        Expr: {
            text: "Eine feste Wendung aus mehreren Wörtern, die man als Ganzes lernt.",
            example: "vielen herzlichen Dank",
        },
        Particle: {
            text: "Ein kurzes Wort nach einem Nomen oder Satzteil, das dessen Rolle im Satz markiert, etwa Subjekt, Objekt, Ort oder Richtung.",
            example: "zur Schule gehen",
        },
        Prefix: {
            text: "Steht vor einem anderen Wort und verändert oder ergänzt dessen Bedeutung. Es wird nicht allein verwendet.",
            example: "Geld (höflich)",
        },
        Suffix: {
            text: "Hängt sich an das Ende eines anderen Wortes, etwa eines Namens oder Nomens. Es wird nicht allein verwendet.",
            example: "Herr/Frau Tanaka",
        },
    },

    noun: {
        Adverbial: {
            text: "Ein Nomen, das ohne Partikel auch als Adverb dienen kann.",
            example: "Ich bin gerade beschäftigt.",
        },
        Temporal: {
            text: "Ein Nomen für einen Zeitpunkt. Es steht oft ohne Partikel, wie ein Adverb.",
            example: "Ich gehe morgen hin.",
        },
    },

    adjective: {
        PreNounVerb: {
            text: "Ein Nomen oder Verb, das direkt vor einem Nomen steht und es beschreibt, ohne な oder の.",
        },
        Keiyoushi: {
            text: "Endet auf <jp>い</jp> und wird selbst konjugiert: Für Endungen wie <jp>くない</jp> und <jp>かった</jp> fällt das <jp>い</jp> weg. Es kann direkt vor einem Nomen stehen.",
        },
        KeiyoushiYoiIi: {
            text: "Das Adjektiv <jp>いい</jp> (gut). Es wird von seiner älteren Form <jp>よい</jp> aus konjugiert: <jp>よくない</jp>, <jp>よかった</jp>, nie <jp>いくない</jp>.",
        },
        Ku: {
            text: "Ein klassisches Adjektiv vom Typ ku: <jp>高く</jp>, <jp>高き</jp>, <jp>高し</jp>. Heute lebt es in festen Wendungen und im literarischen Stil weiter.",
        },
        Na: {
            text: "Braucht <jp>な</jp> vor einem Nomen und wird wie ein Nomen mit <jp>だ</jp> konjugiert. Manche enden trotzdem auf <jp>い</jp>, etwa <jp>きれい</jp>.",
            example: "eine ruhige Stadt",
        },
        Nari: {
            text: "Die klassische, formelle Form eines na-Adjektivs. Vor Nomen endet es auf <jp>なる</jp>; man findet es im literarischen Stil.",
        },
        No: {
            text: "Ein Nomen, das ein anderes Nomen beschreibt, wenn <jp>の</jp> folgt.",
            example: "ein kranker Mensch",
        },
        PreNoun: {
            text: "Steht nur direkt vor einem Nomen und wird nie konjugiert.",
            example: "dieses Buch",
        },
        Shiku: {
            text: "Ein klassisches Adjektiv vom Typ shiku: <jp>美しく</jp>, <jp>美しき</jp>, <jp>美し</jp>. Heute lebt es in festen Wendungen und im literarischen Stil weiter.",
        },
        Taru: {
            text: "Ein literarisches Adjektiv: <jp>たる</jp> vor einem Nomen, <jp>と</jp> vor einem Verb.",
        },
    },

    verb: {
        Transitive: {
            text: "Wirkt auf ein direktes Objekt, meist mit <jp>を</jp> markiert. Viele haben ein intransitives Gegenstück ohne Objekt.",
            example: "das Fenster öffnen",
        },
        Intransitive: {
            text: "Hat kein direktes Objekt: Das Subjekt tut es selbst, oder es geschieht mit ihm, meist mit <jp>が</jp> markiert.",
            example: "das Fenster geht auf",
        },
        Ichidan: {
            text: "Endet auf -iru oder -eru und behält seinen Stamm: <jp>る</jp> weglassen und die Endung anhängen. Nicht jedes Verb auf -iru/-eru ist eins: <jp>帰る</jp> ist ein Godan-Verb.",
        },
        IchidanZuru: {
            text: "Ein literarisches Verb auf <jp>ずる</jp>. Es wird wie das Ichidan-Verb auf <jp>じる</jp> konjugiert, das es abgelöst hat.",
        },
        IchidanKureru: {
            text: "Das Verb <jp>くれる</jp> (mir oder uns geben). Seine Befehlsform ist <jp>くれ</jp>, nicht <jp>くれろ</jp>.",
        },
        Kuru: {
            text: "Das unregelmäßige Verb <jp>来る</jp> (kommen). Sein Stamm ändert sich: <jp>こない</jp>, <jp>きます</jp>, <jp>こられる</jp>.",
        },
    },

    verbGroup: {
        Godan: {
            text: "Das letzte Kana wechselt vor Endungen durch seine Reihe: <jp>書かない</jp>, <jp>書きます</jp>, <jp>書けば</jp>, <jp>書こう</jp>.",
        },
        Yodan: {
            text: "Ein klassischer Verbtyp. Die meisten dieser Verben sind im modernen Japanisch Godan-Verben.",
        },
        Nidan: {
            text: "Ein klassischer Verbtyp mit zwei Stämmen (obere oder untere Reihe). Die meisten dieser Verben sind im modernen Japanisch Ichidan-Verben.",
        },
        Irregular: {
            text: "Wird unregelmäßig konjugiert; sieh in der Konjugationstabelle nach.",
        },
    },

    godanEnding: {
        tte: {
            text: "Verben auf <jp>う</jp>, <jp>つ</jp> und <jp>る</jp> bilden die te- und ta-Form mit <jp>って</jp>, <jp>った</jp>.",
        },
        nde: {
            text: "Verben auf <jp>む</jp>, <jp>ぶ</jp> und <jp>ぬ</jp> bilden die te- und ta-Form mit <jp>んで</jp>, <jp>んだ</jp>.",
        },
        ite: {
            text: "Verben auf <jp>く</jp> bilden die te- und ta-Form mit <jp>いて</jp>, <jp>いた</jp>.",
        },
        ide: {
            text: "Verben auf <jp>ぐ</jp> bilden die te- und ta-Form mit <jp>いで</jp>, <jp>いだ</jp>.",
        },
        shite: {
            text: "Verben auf <jp>す</jp> bilden die te- und ta-Form mit <jp>して</jp>, <jp>した</jp>.",
        },
        ru: {
            text: "Vorsicht: Es endet wie ein Ichidan-Verb auf <jp>る</jp>, wird aber als Godan-Verb konjugiert: <jp>ない</jp> folgt auf <jp>ら</jp>.",
        },
        Aru: {
            text: "Verben der Respektsprache wie <jp>いらっしゃる</jp> und <jp>なさる</jp>: Die masu-Form und die Befehlsform enden auf <jp>い</jp> statt <jp>り</jp>.",
        },
        USpecial: {
            text: "Verben wie <jp>問う</jp> und <jp>請う</jp> bilden die te-Form mit <jp>うて</jp>, nicht mit <jp>って</jp>.",
        },
        Uru: {
            text: "Das literarische Verb <jp>得る</jp> in der Lesung <jp>うる</jp>; außerhalb der Wörterbuchform wird es wie <jp>える</jp> konjugiert.",
        },
        RuIrreg: {
            text: "Das Verb <jp>ある</jp> (vorhanden sein): Seine Verneinung ist <jp>ない</jp>, nicht <jp>あらない</jp>.",
        },
        IkuYuku: {
            text: "<jp>行く</jp> ist das einzige Verb auf <jp>く</jp> mit der te-Form <jp>行って</jp> statt <jp>行いて</jp>.",
        },
    },

    irregular: {
        Nu: {
            text: "Ein klassisches Verb auf <jp>ぬ</jp>, wie <jp>死ぬ</jp> in alten Texten. Heute kommt es nur noch in wenigen festen Wendungen vor.",
        },
        Ru: {
            text: "Ein klassisches unregelmäßiges Verb wie <jp>あり</jp> (sein) oder <jp>をり</jp>, dessen Grundform auf <jp>り</jp> endet. Heute findet man es nur im literarischen Stil.",
        },
        NounOrAuxSuru: {
            text: "Ein Nomen, das mit <jp>する</jp> zum Verb wird.",
        },
        Suru: {
            text: "Das Verb <jp>する</jp> (tun) oder eine Zusammensetzung damit. Es ist unregelmäßig: <jp>しない</jp>, <jp>します</jp>, <jp>できる</jp> als Potential.",
        },
        SuruSpecial: {
            text: "Eine Zusammensetzung aus einem Kanji und <jp>する</jp>. Sie wird teilweise wie ein Godan-Verb auf <jp>す</jp> konjugiert.",
        },
        Su: {
            text: "Die alte Form <jp>す</jp> von <jp>する</jp>. Heute findet man sie nur im literarischen Stil.",
        },
    },

    // -----------------------------------------------------------------
    // USAGE
    // -----------------------------------------------------------------

    misc: {
        Abbreviation: {
            text: "Eine verkürzte Form eines längeren Wortes. Lehnwörter kürzt das Japanische oft auf ihre ersten Kana.",
            example: "Personal Computer",
        },
        Archaism: {
            text: "Ein altes Wort oder ein alter Gebrauch. Du findest es in klassischen Texten, historischen Dramen oder festen Wendungen, aber nicht in der heutigen Sprache.",
        },
        ChildrensLanguage: {
            text: "Wird von kleinen Kindern verwendet oder im Gespräch mit ihnen.",
            example: "Wauwau",
        },
        Colloquialism: {
            text: "Lockere, gesprochene Sprache. Unter Freunden passt sie; schriftlich oder in höflicher Rede passt ein anderes Wort besser.",
        },
        DatedTerm: {
            text: "Klingt altmodisch. Ältere Menschen verwenden es vielleicht noch, jüngere selten.",
        },
        Derogatory: {
            text: "Setzt die Person oder Sache herab. Es kann beleidigen.",
        },
        Euphemistic: {
            text: "Eine sanftere, indirekte Art, etwas Unangenehmes oder Heikles zu sagen.",
        },
        FamiliarLanguage: {
            text: "Für Familie, Freunde und rangniedrigere Personen. Allen anderen gegenüber kann es unhöflich klingen.",
        },
        FemaleTermOrLanguage: {
            text: "Traditionell von Frauen verwendet. Heute ist es seltener und kann weich oder altmodisch klingen.",
        },
        HonorificLanguage: {
            text: "Sonkeigo: erhöht die handelnde Person, meist dein Gegenüber oder jemand Höhergestellten. Verwende es nie für dich selbst.",
            example: "der Lehrer kommt",
        },
        HumbleLanguage: {
            text: "Kenjōgo: stellt dich oder deine Gruppe bescheiden dar, um dem Gegenüber Respekt zu zeigen. Verwende es nur für deine eigenen Handlungen.",
            example: "ich gehe (bescheiden)",
        },
        IdiomaticExpression: {
            text: "Die Bedeutung lässt sich nicht aus den einzelnen Wörtern ableiten; lern den Ausdruck als Ganzes.",
        },
        InternetSlang: {
            text: "Slang aus dem Internet und den sozialen Medien. Er kommt schnell aus der Mode.",
        },
        JocularHumorousTerm: {
            text: "Scherzhaft oder spielerisch gebraucht, nicht in ernstem Zusammenhang.",
        },
        LiteraryOrFormalTerm: {
            text: "Kommt in geschriebener Sprache und förmlicher Rede vor, etwa in Nachrichten, Reden oder Literatur. Im Gespräch klingt es steif.",
        },
        MaleTermOrLanguage: {
            text: "Traditionell von Männern verwendet. Aus dem Mund anderer kann es rau oder gewollt klingen.",
        },
        MangaSlang: {
            text: "Vor allem in Manga und Anime zu finden, im echten Leben selten.",
        },
        ObscureTerm: {
            text: "Kaum bekannt, selbst vielen Muttersprachlern nicht.",
        },
        ObsoleteTerm: {
            text: "Wird nicht mehr verwendet. Du findest es nur noch in alten Texten.",
        },
        OnomatopoeicOrMimeticWord: {
            text: "Ahmt ein Geräusch nach (Giongo) oder drückt einen Zustand oder ein Gefühl aus (Gitaigo). Das Japanische hat sehr viele davon, oft mit <jp>と</jp> oder <jp>する</jp>.",
            example: "funkeln",
        },
        PoeticalTerm: {
            text: "Wird in Gedichten und Liedtexten verwendet, im Gespräch selten.",
        },
        PoliteLanguage: {
            text: "Teineigo: der höfliche Stil mit <jp>です</jp> und <jp>ます</jp>, für Menschen, die du nicht gut kennst.",
            example: "es gibt, es ist (höflich)",
        },
        Proverb: {
            text: "Ein Spruch, der eine Lebensweisheit weitergibt; man zitiert ihn meist als Ganzes.",
        },
        Rare: {
            text: "Selten verwendet. Für diese Bedeutung ist ein anderes Wort üblicher.",
        },
        RudeOrXRatedTerm: {
            text: "Derb oder sexuell. Vermeide es, solange du die Situation nicht gut kennst.",
        },
        Sensitive: {
            text: "Berührt ein heikles Thema. Verwende es mit Bedacht, sonst kann es Menschen verletzen.",
        },
        Slang: {
            text: "Lockere Wörter einer Gruppe oder Generation. Unter Freunden passend, in förmlichen Situationen fehl am Platz.",
        },
        UsuallyWrittenInKana: {
            text: "Hat eine Kanji-Schreibung, wird aber normalerweise in Kana geschrieben. Lern die Kana-Form.",
        },
        VulgarExpressionOrWord: {
            text: "Grob oder vulgär. Es kann beleidigen.",
        },
        Yojijukugo: {
            text: "Eine Zusammensetzung aus vier Kanji, oft aus chinesischen Klassikern. Viele sind feste Wendungen mit einer Moral oder Lehre.",
            example: "eine einmalige Begegnung im Leben",
        },
    },

    dialect: {
        Brazilian: {
            text: "Wird von der japanischen Gemeinschaft in Brasilien verwendet und ist mit Portugiesisch vermischt. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort.",
        },
        Hokkaido: {
            text: "Wird auf Hokkaidō gesprochen, der nördlichsten Hauptinsel. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
        },
        Kansai: {
            text: "Wird in der Region Kansai um Osaka, Kyoto und Kobe gesprochen und ist oft in Comedy zu hören. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
            example: "geht nicht (Standard: だめ)",
        },
        Kantou: {
            text: "Wird in der Region Kantō um Tokio gesprochen, gehört aber nicht zum Standardjapanischen, das dafür eventuell ein anderes Wort oder eine andere Form verwendet.",
        },
        Kyoto: {
            text: "Wird in Kyoto gesprochen und ist für seine weiche, indirekte Art bekannt. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
        },
        Kyuushuu: {
            text: "Wird auf Kyūshū gesprochen, der südlichen Hauptinsel. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
        },
        Nagano: {
            text: "Wird in der Präfektur Nagano in Zentraljapan gesprochen. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
        },
        Osaka: {
            text: "Der bekannteste Kansai-Dialekt, gesprochen in Osaka. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
            example: "danke (Osaka)",
        },
        Ryuukyuu: {
            text: "Stammt aus den Ryūkyū-Sprachen von Okinawa und den umliegenden Inseln. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort.",
        },
        Touhoku: {
            text: "Wird in Tōhoku gesprochen, dem Nordosten von Honshū. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
        },
        Tosa: {
            text: "Wird in der Präfektur Kōchi (früher Tosa) auf Shikoku gesprochen. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
        },
        Tsugaru: {
            text: "Wird im Westen der Präfektur Aomori gesprochen und gilt als schwer verständlich. Im Standardjapanischen gibt es dafür eventuell ein anderes Wort oder eine andere Form.",
        },
    },

    // -----------------------------------------------------------------
    // INFLECTIONS
    // -----------------------------------------------------------------

    inflection: {
        Negative: {
            text: "Sagt, dass etwas nicht geschieht oder nicht so ist: <jp>ない</jp> in der einfachen Form, <jp>ません</jp> in der höflichen.",
            example: "nicht essen",
        },
        Polite: {
            text: "Die masu-Form: Verbstamm + <jp>ます</jp>, der höfliche Stil für Menschen, die du nicht gut kennst.",
            example: "essen (höflich)",
        },
        Present: {
            text: "Die Nicht-Vergangenheit: Gewohnheiten, Tatsachen und die Zukunft. Das Japanische hat keine eigene Zukunftsform.",
        },
        Past: {
            text: "Etwas, das geschehen ist oder so war: <jp>た</jp> in der einfachen Form, <jp>ました</jp> in der höflichen.",
            example: "aß",
        },
        TeForm: {
            text: "Verbindet Verben und Sätze („und“) und ist die Grundlage vieler Muster, etwa Bitten mit <jp>ください</jp>.",
            example: "iss bitte",
        },
        Potential: {
            text: "Sagt, dass jemand etwas tun kann. Was man tun kann, wird oft mit <jp>が</jp> markiert.",
            example: "essen können",
        },
        Passive: {
            text: "Sagt, dass dem Subjekt etwas angetan wird, oft auf unangenehme Weise. Wer es tut, wird mit <jp>に</jp> markiert.",
            example: "wird gegessen",
        },
        Causative: {
            text: "Sagt, dass jemand einen anderen etwas tun lässt oder dazu bringt.",
            example: "essen lassen",
        },
        PotentialOrPassive: {
            text: "Ichidan-Verben verwenden <jp>られる</jp> für Potential und Passiv; der Kontext zeigt, was gemeint ist.",
            example: "essen können / wird gegessen",
        },
        CausativePassive: {
            text: "Sagt, dass jemand zu etwas gebracht wird, meist gegen seinen Willen.",
            example: "zum Essen gezwungen werden",
        },
        Imperative: {
            text: "Ein schroffer Befehl. Im Gespräch klingt er unhöflich; du hörst ihn in Rufen, auf Schildern oder von Vorgesetzten.",
            example: "Iss!",
        },
        Tai: {
            text: "Verbstamm + <jp>たい</jp>: sagt, was der Sprecher tun möchte. Es wird wie ein i-Adjektiv konjugiert.",
            example: "essen wollen",
        },
        TeIru: {
            text: "Te-Form + <jp>いる</jp>: eine laufende Handlung oder ein Zustand nach einer Veränderung. Umgangssprachlich fällt das <jp>い</jp> oft weg.",
            example: "isst gerade",
        },
        TeAru: {
            text: "Te-Form + <jp>ある</jp>: Etwas wurde absichtlich getan, und das Ergebnis besteht noch.",
            example: "das Fenster ist geöffnet worden",
        },
        TeMiru: {
            text: "Te-Form + <jp>みる</jp>: etwas ausprobieren, um zu sehen, wie es ist.",
            example: "probeweise essen",
        },
        TeOku: {
            text: "Te-Form + <jp>おく</jp>: etwas im Voraus tun oder es so lassen.",
            example: "vorher essen",
        },
        Tara: {
            text: "„Wenn“ oder „falls“: Was folgt, geschieht erst danach. Es ist die am häufigsten verwendete Bedingungsform.",
            example: "wenn/falls ich esse",
        },
        Tari: {
            text: "Zählt Handlungen beispielhaft auf („Dinge wie … und …“), meist abgeschlossen mit <jp>する</jp>.",
            example: "unter anderem essen",
        },
        Ba: {
            text: "Eine Bedingungsform: „wenn das geschieht, dann …“. Sie betont oft die Bedingung selbst.",
            example: "wenn ich esse",
        },
        Shimau: {
            text: "Te-Form + <jp>しまう</jp>: etwas zu Ende tun, oder es versehentlich tun und bereuen.",
            example: "am Ende doch essen",
        },
        Chau: {
            text: "Lockere Kurzform von te-Form + <jp>しまう</jp>, vor allem gesprochen.",
            example: "am Ende doch essen",
        },
        Naide: {
            text: "„Ohne zu …“, oder mit <jp>ください</jp> ein höfliches „bitte nicht“.",
            example: "iss bitte nicht",
        },
        Volitional: {
            text: "„Lass uns …“ oder „ich werde …“: schlägt vor, etwas gemeinsam zu tun, oder drückt einen Entschluss aus.",
            example: "lass uns essen",
        },
        Nasai: {
            text: "Verbstamm + <jp>なさい</jp>: eine bestimmte, aber nicht unhöfliche Aufforderung, wie sie Eltern und Lehrkräfte verwenden.",
            example: "Iss!",
        },
    },

    // -----------------------------------------------------------------
    // MORE
    // -----------------------------------------------------------------

    word: {
        common: {
            text: "Eines der häufigen Wörter des Japanischen, zu finden in Listen gängiger Wörter. Es lohnt sich, es früh zu lernen.",
        },
        wasei: {
            text: "Wasei-eigo: in Japan aus fremdsprachigen Wörtern gebildet. Es sieht aus wie ein Lehnwort, ist im Ausland aber womöglich unbekannt.",
            example: "Büroangestellter („salary man“)",
        },
    },
} satisfies PartialDict<typeof en>;
