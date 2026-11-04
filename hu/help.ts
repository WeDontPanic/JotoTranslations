import type en from "../en/help";
import type { PartialDict } from "../types";

export default {
    title: "Súgó",
    description:
        "Hogyan keress a Jotobán angolul, japánul vagy rómadzsival, hogyan olvass egész mondatokat, szűrd a találatokat hashtagekkel (pl. #n5), és használd a billentyűparancsokat.",
    intro: "A Jotoba szótár japán szavakhoz, kandzsikhoz, példamondatokhoz és nevekhez. Ez az oldal végigvezet azon, mire használhatod, az első keresésedtől az időt spóroló billentyűparancsokig. A példák linkek, így mindegyiket azonnal kipróbálhatod.",
    contents: "Ezen az oldalon",
    nav: {
        search: "Keresés",
        reading: "Olvasás",
        hashtags: "Hashtagek",
        results: "Találatok",
        shortcuts: "Billentyűparancsok",
        bookmarks: "Könyvjelzők és beállítások",
        flashcards: "Tanulókártyák",
        offline: "Offline",
        moreHelp: "További segítség",
    },
    tour: {
        title: "Inkább egy bemutatót néznél?",
        text: "A bemutató azon az oldalon, ahol éppen vagy, megmutatja a keresősávot, a keresési típusokat, a gyökválasztót és a menüt, és közben beállíthatod a nyelveidet is.",
        button: "Bemutató indítása",
    },
    topic: {
        try: "Próbáld ki",
    },
    queryLink: {
        searchFor: "Keresés: ",
        in: ", kategória: ",
        types: {
            kanji: "Kandzsi",
            sentences: "Mondatok",
            names: "Nevek",
        },
    },
    search: {
        title: "Kezdd egy kereséssel",
        lead: "Írd be a keresősávba, amit tudsz. Nem kell, hogy japánul legyen.",
        directions: {
            title: "Keress bármelyik irányba",
            text: "Kereshetsz angolul, japánul (kandzsival vagy kanával) vagy rómadzsival, vagyis a japán latin betűs írásmódjával. Ha a <link>beállításokban</link> másik keresési nyelvet választasz, például a magyart, azon a nyelven is kereshetsz.",
        },
        types: {
            title: "Válaszd ki, mit keresel",
            text: "A keresőmező melletti menüvel válthatsz a szavak, a kandzsik, a példamondatok és a nevek között. Váltáskor a keresés újra lefut. Ha egy másik típusban van találat a keresésedre, a találati oldal odairányít.",
        },
        wildcards: {
            title: "Hézagok kitöltése helyettesítő karakterekkel",
            text: "Csak egy szó részét ismered? Japán keresésben a * tetszőleges számú karaktert helyettesít: a <ja>*車</ja> a <ja>車</ja> végű szavakat találja meg, a <ja>車*</ja> az ezzel kezdődőeket, a <ja>*車*</ja> pedig minden szót, amelyben szerepel. A ? pontosan egy karaktert helyettesít, így a <ja>宇宙?行士</ja> megtalálja a <ja>宇宙飛行士</ja> szót.",
            boundaries:
                "Ha a mondatolvasó egy ilyen keresést több szóra bont, vond össze őket a Szóhatárok szerkesztése funkcióval. A helyettesítő karakterek kandzsival és kanával működnek, angollal és rómadzsival nem.",
        },
        suggestions: {
            title: "Válassz a javaslatok közül",
            text: "Gépelés közben javaslatok jelennek meg. Válassz ki egyet, hogy rákeress. Ha #-et írsz, a javaslatok hashtagekre váltanak, ezekről <hashtags>lejjebb</hashtags> olvashatsz. Billentyűzettel lépkedhetsz köztük, és új lapon is megnyithatsz egy keresést, lásd a <shortcuts>billentyűparancsokat</shortcuts>.",
        },
    },
    reading: {
        title: "Japán szöveg olvasása",
        lead: "Találtál egy mondatot, amelyet még nem tudsz elolvasni? A Jotoba szavakra bontja, felismeri a ragozott alakokat, és segít megtalálni az ismeretlen kandzsikat.",
        sentences: {
            title: "Egész mondatok olvasása",
            text: "Keress rá egy teljes japán mondatra, és a Jotoba szavakra bontja. Válassz ki egy szót, hogy lásd a szótári alakját és a ragozását.",
            boundaries:
                "Ha egy mondat rossz helyen van felbontva, a toll gombbal magad állíthatod be a szóhatárokat. Ezek a linkben mentődnek, így a mondatot úgy oszthatod meg, ahogy felbontottad.",
        },
        conjugations: {
            title: "Ragozott szavak kikeresése",
            text: "Nem kell ismerned a szótári alakot. Keress rá a szóra úgy, ahogy találkoztál vele, és a Jotoba megmutatja az alapszót a felismert alakokkal együtt, például tagadó és múlt idő.",
        },
        numbers: {
            title: "Számok olvasása",
            text: "Keress rá egy japánul írt számra, hogy számjegyekkel lásd az értékét.",
        },
        radicals: {
            title: "Kandzsik keresése részeik alapján",
            text: "Nem tudsz elolvasni egy kandzsit? Nyisd meg a keresőmező melletti <ja>部</ja> gombot, és válaszd ki a felismert gyököket, vagyis azokat a részeket, amelyekből a kandzsi felépül. A fülek vonásszám szerint rendezik őket. Minden hozzáadott gyök tovább szűkíti az illeszkedő kandzsikat, és a keresési javaslatok is követik a választásodat.",
            search: "Nem vagy biztos benne, melyik gyököt látod? Írj a választó keresőmezőjébe: egy kandzsi megmutatja a gyökeit, a kana az illeszkedő szavak gyökeit, az angol vagy rómadzsi pedig név szerint keres gyököket.",
        },
    },
    hashtags: {
        title: "Szűkítés hashtagekkel",
        lead: "A hashtagek #-tel kezdődnek, és a keresősávba kerülnek, a keresett kifejezés elé vagy mögé. Váltják a keresési típust, vagy szűrik a találatokat, például egy JLPT-szintre vagy csak igékre.",
        how: {
            title: "Hogyan működnek a hashtagek",
            suggest: "Írj be egy #-et, és a keresősáv hashtageket javasol, így nem kell fejben tartanod őket.",
            case: "A kis- és nagybetű nem számít: a #N5 és a #n5 ugyanaz.",
            combine: "Kombinálhatod őket: a #n5 #verb az N5-ös igéket találja meg.",
            withoutTerm: "A szűrők keresett kifejezés nélkül is működnek: a #n5 önmagában az összes N5-ös szót kilistázza.",
        },
        types: {
            title: "Keresési típus váltása",
            text: "A #word, a #kanji, a #sentence és a #name felülírja a keresőmező melletti menüt. Akkor hasznosak, ha inkább tovább gépelnél, vagy ha linket küldesz valakinek.",
        },
        hidden: {
            title: "Gyakorlás rejtett fordításokkal",
            text: "Adj hozzá #hidden-t egy mondatkereséshez, és a fordítások rejtve maradnak, amíg mondatonként fel nem feded őket. Ha minden mondatkeresésben el akarod rejteni őket, kapcsold be a beállításokban ezt: <link>{{setting}}</link>.",
        },
        jlpt: {
            title: "Szűrés JLPT-szint szerint",
            text: "A #n5–#n1 a szavakat, kandzsikat és mondatokat a japán nyelvvizsga (Japanese-Language Proficiency Test) egy szintjére szűkíti; az N5 a legkönnyebb. A #jlpt5–#jlpt1 is működik.",
        },
        all: {
            title: "Az összes szűrő hashtag",
            text: "A legtöbb szűrő szókeresésre vonatkozik. Válassz ki egy hashtaget, hogy kilistázd az összes szót, amelyhez tartozik.",
        },
        list: "Hashtagek: {{group}}",
        showAll: {
            one: "Összes szakterület mutatása ({{count}})",
            other: "Összes szakterület mutatása ({{count}})",
        },
        showFewer: "Kevesebb szakterület mutatása",
        groups: {
            partOfSpeech: {
                title: "Szófaj",
                description: "Milyen fajta szó.",
            },
            verbs: {
                title: "Igék és írásmód",
                description: "Igeosztályok, suru igék, és hogyan szokás írni egy szót.",
            },
            register: {
                title: "Stílusréteg és hangnem",
                description: "Mennyire udvarias, közvetlen vagy kényes egy szó, és kik használják jellemzően.",
            },
            old: {
                title: "Régi és ritka szavak",
                description: "Elavult, történeti vagy ma már ritkán használt szavak.",
            },
            sayings: {
                title: "Szólások és szótípusok",
                description: "Közmondások, szólások, négykandzsis összetételek, hangutánzó szavak és rövidítések.",
            },
            names: {
                title: "Nevek és dolgok",
                description:
                    "Tulajdonnevek a szószótárban, például helyek, cégek vagy művek. Személynevek kikereséséhez használd a névkeresést.",
            },
            subjects: {
                title: "Szakterületek",
                description: "Egy-egy szakterület szavai, például orvoslás, jog vagy szumó.",
            },
            kanji: {
                title: "Kandzsi",
                description: "A kokuji Japánban alkotott kandzsik.",
            },
        },
    },
    results: {
        title: "Hozd ki a legtöbbet a találatokból",
        lead: "Minden bejegyzés többet rejt az első soránál.",
        labels: {
            title: "Mit jelentenek a címkék",
            common: "Gyakori szó",
            jlpt: "A JLPT-szint, N5-től (legkönnyebb) N1-ig",
            sentenceFrom: "Mondat innen: {{source}}",
            ownSentence: "A Jotoba csapata által hozzáadott mondat",
            sources:
                "Hogy honnan származnak a szavak, a mondatok és a hangfelvételek, azt a <link>Rólunk oldalon</link> találod.",
        },
        words: {
            title: "Szavak",
            text: "Játszd le a hangfelvételt, nézd meg a zenei hangsúlyt és a többi írásmódot, és válassz ki egy kandzsicsempét, hogy megnyisd azt a kandzsit. Egy jelentés alatt kibonthatsz egy példamondatot.",
            menu: "A szó melletti ⋮ menüben van minden más: a ragozási táblázat, a szókapcsolatok, a tárgyas vagy tárgyatlan párja, a szót használó mondatok, hangfelvétel letöltése, Szerkesztés a JMDictben, Link másolása és a részletes oldal.",
            furigana:
                "Dupla kattintással kimásolhatod egy szó feletti furigana olvasatát. A <link>beállításokban</link> ezzel kapcsolhatod be vagy ki: „{{setting}}”.",
        },
        kanji: {
            title: "Kandzsi",
            text: "Játszd le a vonássorrendet, lépkedj végig rajta, vagy állítsd a sebességét. Válaszd ki a nagy kandzsit, hogy lásd, milyen részekből áll. Az összetételek olvasat szerint vannak csoportosítva, és egy olvasatot kiválasztva kilistázódnak az azt használó szavak. A gyök, a részek és a hasonló kandzsik linkek, így tovább böngészhetsz. A kínai, koreai és vietnámi olvasatok is megjeleníthetők.",
        },
        sentences: {
            title: "Mondatok",
            text: "A címke mutatja, honnan származik egy mondat. A menüjéből megnyithatod a mondatot a mondatolvasóban a szavai kikereséséhez, megnyithatod a Tatoebán, vagy kimásolhatod a linkjét.",
        },
        names: {
            title: "Nevek",
            text: "A névtalálatok mutatják az olvasatot, egy átírást, és ha ismert, a név nemét és típusát.",
        },
        sharing: {
            title: "Részletes oldalak és linkek",
            pages: "A szavaknak és a mondatoknak saját részletes oldaluk van, kandzsi, mondatok, szókapcsolatok és ragozás fülekkel, valamint megosztás gombbal.",
            links: "A keresési linkek megőrzik a keresési típust, az oldalt, a mondatolvasóban kiválasztott szót és a szóhatáraidat. Ha a beállításokban bekapcsolod ezt: „{{setting}}”, akkor akik megnyitják a linkedet, ugyanazt a keresési nyelvet látják, amelyet te használtál.",
        },
    },
    shortcuts: {
        title: "Gyorsabb munka billentyűzettel",
        lead: "Számítógépen a Jotoba nagy része egér nélkül is használható. Az egybillentyűs parancsok nem működnek, amíg egy szövegmezőbe gépelsz.",
        off: "A billentyűparancsok ki vannak kapcsolva ebben a böngészőben. Az alapbillentyűk továbbra is működnek.",
        turnOn: "Bekapcsolás",
        anywhere: "Bárhol",
        results: "A találati oldalakon",
        searchBar: "A keresősávban",
        playAudio: "Az oldal első hangfelvételének lejátszása",
        pages: "Ugrás az 1–9. oldalra",
        change: "Ezeket a billentyűparancsokat itt módosíthatod vagy kapcsolhatod ki: <link>{{page}}</link>. A módosítások csak erre a böngészőre érvényesek.",
        standard: {
            title: "Alapbillentyűk",
            text: "Ezek a billentyűk a szokásos billentyűzetkonvenciókat követik, így ugyanúgy működnek, mint más oldalakon, és nem módosíthatók.",
        },
        list: {
            off: "Ki",
            or: "vagy",
            to: "–",
        },
    },
    bookmarks: {
        title: "Szavak mentése és a Jotoba testreszabása",
        lead: "A menü két helyén szabhatod a Jotobát a tanulási szokásaidhoz.",
        bookmarks: {
            title: "Könyvjelzők",
            text: "Mentsd a szavakat és mondatokat saját listákba, és fűzz hozzájuk jegyzeteket. Fiók nélkül ebben a böngészőben maradnak, fiókkal minden eszközre szinkronizálódnak, amelyen bejelentkezel. Használd a könyvjelző gombot egy részletes oldalon, a listáidat pedig a menü <link>{{menu}}</link> pontjában találod.",
            textLocal:
                "Mentsd a szavakat és mondatokat saját listákba, és fűzz hozzájuk jegyzeteket. Ebben a böngészőben maradnak. Használd a könyvjelző gombot egy részletes oldalon, a listáidat pedig a menü <link>{{menu}}</link> pontjában találod.",
        },
        settings: {
            title: "Beállítások",
            intro: "Néhány lehetőség, amelyről érdemes tudni:",
            language:
                "<link>{{setting}}</link>: keress és olvass jelentéseket egy másik nyelven, például magyarul. A „{{alwaysEnglish}}” opció az angol jelentéseket is hozzáadja.",
            hideTranslation: "<link>{{setting}}</link>: olvasd el a példamondatokat, mielőtt a fordításukat látnád.",
            kanji: "<link>{{setting}}</link>: a szavak és kandzsik mely részei látszanak, például olvasatok, zenei hangsúly vagy vonássorrend, és hogyan játszódjon le a vonássorrend-animáció.",
            theme: "<link>{{setting}}</link>: kövesse a rendszert, vagy legyen mindig világos vagy sötét.",
            languageInLinks: "<link>{{setting}}</link>: a megosztott linkek ugyanazzal a keresési nyelvvel nyílnak meg.",
        },
    },
    flashcards: {
        title: "Tanulás tanulókártyákkal",
        lead: "Bármelyik könyvjelzőlistából lehet pakli. A Jotoba az FSRS-sel tervezi a kártyákat, így mindegyik nem sokkal azelőtt jön vissza, hogy elfelejtenéd.",
        start: {
            title: "Egy lista elindítása",
            text: "Nyiss meg egy listát, és válaszd a Tanulás indítása lehetőséget. Beállíthatod, hány új kártya kerüljön be naponta. Az előrehaladás csak ahhoz a listához tartozik: egy két listában szereplő szót mindkettőben külön tanulsz.",
            kinds: "Egy szónak legfeljebb háromféle kártyája van: jelentés, olvasat és felidézés. A következő fajta csak akkor indul, ha az előzőt egy korábbi napon már tudtad.",
        },
        rating: {
            title: "Egy kártya értékelése",
            text: "Gondold végig a választ, majd fordítsd fel. Válaszd az Újra gombot, ha nem tudtad, különben a Tudtam gombot. Légy őszinte: a gombokon lévő idő mutatja, mikor jön vissza a kártya. Az elfelejtett kártyák néhány kártyával később visszajönnek ugyanabban a körben. Egy új szóra, amelyet már ismertél, a Már tudtam gomb való.",
            fine: "<link>{{setting}}</link>: a Nehéz és a Könnyű gombot is hozzáadja. A Nehéz is tudottnak számít.",
        },
        stages: {
            title: "Szakaszok és emlékezet",
            text: "Minden szó a leggyengébb elindított kártyafajtájának szakaszában van, és Új, amíg egyet sem indítasz el: Tanulás alatt, amíg az emlékezési ideje egy hétnél rövidebb, Ismerős két hónapig, utána Elsajátított.",
            memory: "Emlékezet: mennyire valószínű, hogy épp most tudod a kártyát. Minden nap kicsit csökken, amíg át nem ismétled.",
            span: "Emlékezési idő: hány nap telik el, amíg a kártyát már csak 10-ből 9 esetben tudnád. Minden helyes ismétlés meghosszabbítja.",
            retention:
                "<link>{{setting}}</link>: a kártyák akkor jönnek vissza, amikor az emlékezeted erre az értékre csökken. A magasabb érték több ismétlést jelent.",
        },
        fewer: {
            title: "Miért jön elő kevesebb kártya",
            intro: "Előfordul, hogy egy lista kevesebb esedékes vagy új kártyát mutat, mint várnád. Az áttekintés megnevezi az okokat:",
            resting:
                "Minden szó legfeljebb egyszer kerül elő egy tanulási napon. A többi esedékes kártyája holnapig pihen. A tanulási nap hajnali 4-kor kezdődik.",
            waiting: "Az olvasat- és felidézéskártyák addig várnak, amíg az előző fajtát egy korábbi napon már tudtad.",
            limit: "Az új kártyák a lista napi korlátjánál megállnak.",
            backlog:
                "Ha több ismétlés vár, mint amennyi két körbe belefér, az új kártyák szünetelnek, amíg utol nem éred magad. Azok a kártyák jönnek először, amelyeket a legvalószínűbb, hogy még tudsz. Egy napra így is beengedheted az új kártyákat.",
        },
        practice: {
            title: "Ha semmi sem esedékes",
            ahead: "Az Ismétlés előre a még nem esedékes kártyákat veszi elő, a legbizonytalanabbakat először, de a ma már értékelteket nem. Ismétlésnek számít: a tudott kártyák kicsit később, az elfelejtettek hamarabb jönnek vissza.",
            browse: "A Csak böngészés értékelés nélkül lapozza át a kártyákat. Semmit sem változtat.",
        },
        tricky: {
            title: "Trükkös szavak",
            text: "Az a szó, amelyet háromszor elfelejtettél (ezt a tanulási beállításokban módosíthatod), trükkösnek számít. Nyolc alkalom után a szólista azt javasolja, hogy írj saját emlékeztetőt a jegyzetbe, ami gyakran többet segít, mint a további körök.",
            actions:
                "Egy szó részleteinél szüneteltetheted, így kimarad a körökből, vagy visszaállíthatod, így új kártyaként kezdődik elölről. Az előzményei megmaradnak.",
        },
    },
    offline: {
        title: "Keresés internet nélkül",
        lead: "Az app az eszközödön tárolhatja a szótárat, így a vonaton, külföldön vagy bárhol kapcsolat nélkül is kikereshetsz szavakat.",
        download: {
            title: "A szótár letöltése",
            text: "Töltsd le egyszer a menü <link>Offline szótár</link> pontjában. Indítás előtt látod a méretét, mobiladatnál pedig az app előbb rákérdez. Semmi sem töltődik le magától.",
        },
        works: {
            title: "Mi működik offline",
            intro: "Ha már az eszközödön van, ezek kapcsolat nélkül is működnek:",
            words: "Szókeresés, gépelés közbeni javaslatokkal",
            details: "Szórészletek, mondatkeresés és hangfelvételek nélkül",
            kanji: "Kandzsik, a gyökválasztó és a vonássorrend",
            voice: "<link>{{setting}}</link>: ahol nincs hangfelvétel, az eszközöd japán hangja olvassa fel a szavakat és mondatokat.",
        },
        needs: {
            title: "Mihez kell internet",
            intro: "Néhány dolog csak online működik:",
            sentencesNames: "Mondatkeresés és névkeresés",
            recordings: "Hangfelvételek",
            reader: "Egész mondatok szavakra bontása. Offline egyszerre egy szóra keress.",
            query: "Helyettesítő karakterek (* és ?), hashtagek és idézőjelek a keresésben",
        },
        now: {
            title: "Amikor offline vagy",
            chip: "Kapcsolat nélkül a képernyő tetején megjelenik az Offline felirat. Koppints rá, hogy lásd, mi működik éppen.",
            results:
                "A találatok ilyenkor az eszközödről származnak, és offline találatként vannak jelölve. A sorrendjük eltérhet az online sorrendtől, és az elírásokat nem javítja.",
            english:
                "Az angol jelentések mindig benne vannak. Néhány nyelvhez letölthetsz egy nyelvi csomagot a jelentéseivel.",
        },
        updates: {
            title: "Frissítések és tárhely",
            text: "Az app sosem frissíti magától a szótárat. Ha új adatok érhetők el, a kezdőlap és az Offline szótár oldal felajánlja őket, és te döntöd el, mikor töltöd le.",
            manage: "A menü <link>Offline szótár</link> pontjában frissítéseket is kereshetsz, ellenőrizheted, hogy teljesek-e az adatok, vagy törölheted őket, hogy helyet szabadíts fel.",
        },
    },
    moreHelp: {
        title: "További segítség",
        lead: "Olyan kérdésed van, amelyre ez az oldal nem ad választ, vagy valami nem úgy működik, ahogy várnád?",
        ask: "Kérdezz a <discord>Discordon</discord> vagy a <reddit>Redditen</reddit>. A <trello>Trellón lévő ütemterv</trello> mutatja, min dolgozunk. Ha maga a szótári bejegyzés hibás, használd a szó ⋮ menüjében a Szerkesztés a JMDictben lehetőséget.",
        tour: "A bemutatót bármikor újraindíthatod a menü „{{menu}}” pontjából. A Jotoba <app>Android-appként</app> is elérhető.",
    },
} satisfies PartialDict<typeof en>;
