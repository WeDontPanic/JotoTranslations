import type en from "../en/help";
import type { PartialDict } from "../types";

export default {
    title: "Pomoč",
    description:
        "Kako v Jotobi iskati v angleščini, japonščini ali romadžiju, brati cele stavke, filtrirati rezultate s ključniki, kot je #n5, in uporabljati bližnjice na tipkovnici.",
    intro: "Jotoba je slovar japonskih besed, kandžijev, primerov stavkov in imen. Ta stran vas popelje skozi vse, kar lahko z njim počnete, od prvega iskanja do bližnjic, ki vam pozneje prihranijo čas. Primeri so povezave, zato lahko vsakega takoj preizkusite.",
    contents: "Na tej strani",
    nav: {
        search: "Iskanje",
        reading: "Branje",
        hashtags: "Ključniki",
        results: "Rezultati",
        shortcuts: "Bližnjice",
        bookmarks: "Zaznamki in nastavitve",
        flashcards: "Učne kartice",
        offline: "Brez povezave",
        moreHelp: "Več pomoči",
    },
    tour: {
        title: "Bi raje, da vam vse pokažemo?",
        text: "Ogled vam na strani, kjer ste, pokaže iskalno vrstico, vrste iskanja, iskanje po radikalih in meni, spotoma pa lahko nastavite tudi svoje jezike.",
        button: "Začni ogled",
    },
    topic: {
        try: "Preizkusite",
    },
    queryLink: {
        searchFor: "Išči ",
        in: ", vrsta: ",
        types: {
            kanji: "Kandži",
            sentences: "Stavki",
            names: "Imena",
        },
    },
    search: {
        title: "Začnite z iskanjem",
        lead: "V iskalno vrstico vnesite, kar veste. Ni nujno, da je v japonščini.",
        directions: {
            title: "Iščite v obe smeri",
            text: "Iščite v angleščini, japonščini (s kandžiji ali kano) ali v romadžiju, latiničnem zapisu japonščine. Če v <link>nastavitvah</link> izberete drug jezik iskanja, na primer nemščino, lahko iščete tudi v tem jeziku.",
        },
        types: {
            title: "Izberite, kaj iščete",
            text: "Meni ob iskalnem polju preklaplja med besedami, kandžiji, primeri stavkov in imeni. Ko ga spremenite, se iskanje znova izvede. Če ima za vaše iskanje zadetke druga vrsta, vas stran z rezultati opozori nanjo.",
        },
        wildcards: {
            title: "Zapolnite vrzeli z nadomestnimi znaki",
            text: "Poznate samo del besede? Pri japonskem iskanju * pomeni poljubno število znakov: <ja>*車</ja> najde besede, ki se končajo na <ja>車</ja>, <ja>車*</ja> besede, ki se z njim začnejo, in <ja>*車*</ja> vsako besedo, ki ga vsebuje. ? pomeni natanko en znak, zato <ja>宇宙?行士</ja> najde <ja>宇宙飛行士</ja>.",
            boundaries:
                "Če bralnik stavkov tako iskanje razdeli na več besed, jih združite z ukazom „Uredi meje besed“. Nadomestni znaki delujejo s kandžiji in kano, ne pa z angleščino ali romadžijem.",
        },
        suggestions: {
            title: "Izbirajte med predlogi",
            text: "Med tipkanjem se prikazujejo predlogi. Izberite enega, da ga poiščete. Ko vnesete #, predlogi preklopijo na ključnike, ki so razloženi <hashtags>v nadaljevanju</hashtags>. S tipkovnico se lahko premikate po njih in odprete iskanje v novem zavihku, glejte <shortcuts>bližnjice na tipkovnici</shortcuts>.",
        },
    },
    reading: {
        title: "Berite japonsko besedilo",
        lead: "Ste našli stavek, ki ga še ne znate prebrati? Jotoba ga razdeli na besede, prepozna spregane oblike in vam pomaga najti kandžije, ki jih ne poznate.",
        sentences: {
            title: "Berite cele stavke",
            text: "Poiščite cel japonski stavek in Jotoba ga razdeli na besede. Izberite besedo, da vidite njeno slovarsko obliko in kako je bila spregana.",
            boundaries:
                "Če je stavek razdeljen na napačnem mestu, z gumbom s svinčnikom sami določite meje besed. Shranijo se v povezavo, zato lahko stavek delite tako, kot ste ga razdelili.",
        },
        conjugations: {
            title: "Poiščite spregane besede",
            text: "Slovarske oblike ne potrebujete. Poiščite besedo tako, kot ste jo našli, in Jotoba prikaže osnovno besedo skupaj z oblikami, ki jih je prepoznala, na primer nikalnico in preteklik.",
        },
        numbers: {
            title: "Berite števila",
            text: "Poiščite število, zapisano v japonščini, da vidite njegovo vrednost s števkami.",
        },
        radicals: {
            title: "Iščite kandžije po delih",
            text: "Kandžija ne znate prebrati? Odprite <ja>部</ja> ob iskalnem polju in izberite radikale, ki jih prepoznate, torej dele, iz katerih je kandži sestavljen. Zavihki jih razvrščajo po številu potez. Vsak dodan radikal zoži nabor ustreznih kandžijev, vaši izbiri pa sledijo tudi predlogi iskanja.",
            search: "Niste prepričani, kateri radikal je pred vami? Tipkajte v iskalno polje v iskanju po radikalih: kandži pokaže svoje radikale, kana pokaže radikale ustreznih besed, angleščina ali romadži pa najdeta radikale po imenu.",
        },
    },
    hashtags: {
        title: "Zožite iskanje s ključniki",
        lead: "Ključniki (hashtagi) se začnejo z # in jih vnesete v iskalno vrstico, pred iskalni niz ali za njim. Preklopijo vrsto iskanja ali filtrirajo rezultate, na primer na eno stopnjo JLPT ali samo na glagole.",
        how: {
            title: "Kako delujejo ključniki",
            suggest: "Vnesite # in iskalna vrstica vam predlaga ključnike, zato si jih ni treba zapomniti.",
            case: "Velike in male črke niso pomembne: #N5 in #n5 sta enaka.",
            combine: "Lahko jih kombinirate: #n5 #verb najde glagole stopnje N5.",
            withoutTerm: "Filtri delujejo tudi brez iskalnega niza: #n5 sam našteje vse besede stopnje N5.",
        },
        types: {
            title: "Preklopite vrsto iskanja",
            text: "#word, #kanji, #sentence in #name preglasijo meni ob iskalnem polju. Pridejo prav, ko raje tipkate naprej, ali v povezavi, ki jo nekomu pošljete.",
        },
        hidden: {
            title: "Vadite s skritimi prevodi",
            text: "Iskanju stavkov dodajte #hidden in prevodi ostanejo skriti, dokler jih ne razkrijete, stavek za stavkom. Če jih želite skriti pri vsakem iskanju stavkov, v nastavitvah vklopite <link>{{setting}}</link>.",
        },
        jlpt: {
            title: "Filtrirajte po stopnji JLPT",
            text: "#n5 do #n1 omejijo besede, kandžije in stavke na eno stopnjo japonskega jezikovnega izpita (Japanese-Language Proficiency Test), pri čemer je N5 najlažja. Delujejo tudi #jlpt5 do #jlpt1.",
        },
        all: {
            title: "Vsi ključniki za filtriranje",
            text: "Večina filtrov velja za iskanje besed. Izberite ključnik, da se prikažejo vse besede, ki ga imajo.",
        },
        list: "Ključniki: {{group}}",
        showAll: {
            one: "Prikaži {{count}} področje",
            two: "Prikaži obe {{count}} področji",
            few: "Prikaži vsa {{count}} področja",
            other: "Prikaži vseh {{count}} področij",
        },
        showFewer: "Prikaži manj področij",
        groups: {
            partOfSpeech: {
                title: "Besedna vrsta",
                description: "Za kakšno besedo gre.",
            },
            verbs: {
                title: "Glagoli in zapis",
                description: "Glagolski razredi, glagoli suru in kako se beseda običajno piše.",
            },
            register: {
                title: "Zvrst in ton",
                description: "Kako vljudna, pogovorna ali občutljiva je beseda in kdo jo navadno uporablja.",
            },
            old: {
                title: "Stare in redke besede",
                description: "Besede, ki so zastarele, zgodovinske ali se danes redko uporabljajo.",
            },
            sayings: {
                title: "Reki in vrste besed",
                description: "Pregovori, frazemi, zloženke iz štirih kandžijev, zvočnoposnemovalne besede in krajšave.",
            },
            names: {
                title: "Imena in stvari",
                description:
                    "Lastna imena v slovarju besed, na primer kraji, podjetja ali dela. Osebno ime poiščite z iskanjem imen.",
            },
            subjects: {
                title: "Področja",
                description: "Besede z določenega področja, na primer medicine, prava ali sumoja.",
            },
            kanji: {
                title: "Kandži",
                description: "Kokuji so kandžiji, ki so nastali na Japonskem.",
            },
        },
    },
    results: {
        title: "Kako kar najbolje izkoristiti rezultate",
        lead: "Vsak vnos vsebuje več kot le prvo vrstico.",
        labels: {
            title: "Kaj pomenijo oznake",
            common: "Pogosta beseda",
            jlpt: "Stopnja JLPT, od N5 (najlažja) do N1",
            sentenceFrom: "Stavek iz vira {{source}}",
            ownSentence: "Stavek, ki ga je dodala ekipa Jotobe",
            sources: "Od kod prihajajo besede, stavki in zvok, je navedeno na strani <link>O nas</link>.",
        },
        words: {
            title: "Besede",
            text: "Predvajajte zvok, preverite tonski naglas in druge zapise ter izberite ploščico kandžija, da ga odprete. Pod pomenom lahko razširite primer stavka.",
            menu: "Meni ⋮ ob besedi vsebuje vse drugo: tabelo spregatev, kolokacije, prehodni ali neprehodni par, stavke s to besedo, prenos zvoka, „Uredi v JMDict“, „Kopiraj povezavo“ in stran s podrobnostmi.",
            furigana:
                "Dvokliknite furigano nad besedo, da kopirate njeno branje. To vklopite ali izklopite z nastavitvijo „{{setting}}“ v <link>nastavitvah</link>.",
        },
        kanji: {
            title: "Kandži",
            text: "Predvajajte vrstni red potez, pojdite skozenj korak za korakom ali spremenite hitrost. Izberite velik kandži, da vidite dele, iz katerih je sestavljen. Zloženke so razvrščene po branju, izbira branja pa našteje besede, ki ga uporabljajo. Radikal, deli in podobni kandžiji so povezave, zato lahko raziskujete naprej. Prikažete lahko tudi kitajska, korejska in vietnamska branja.",
        },
        sentences: {
            title: "Stavki",
            text: "Oznaka pokaže, od kod je stavek. Njegov meni odpre stavek v bralniku stavkov, kjer lahko poiščete njegove besede, ga odpre na Tatoebi ali kopira povezavo nanj.",
        },
        names: {
            title: "Imena",
            text: "Rezultati imen pokažejo branje, prečrkovanje in, kjer je znano, spol in vrsto imena.",
        },
        sharing: {
            title: "Strani s podrobnostmi in povezave",
            pages: "Besede in stavki imajo svojo stran s podrobnostmi, z zavihki za kandžije, stavke, kolokacije in spregatve ter gumbom za deljenje.",
            links: "Povezave iskanja ohranijo vrsto iskanja, stran, besedo, izbrano v bralniku stavkov, in vaše meje besed. Če je v nastavitvah vklopljeno „{{setting}}“, vsi, ki odprejo vašo povezavo, vidijo isti jezik iskanja kot vi.",
        },
    },
    shortcuts: {
        title: "S tipkovnico hitreje",
        lead: "Na računalniku lahko večino Jotobe uporabljate brez miške. Bližnjice z eno tipko ne delujejo, medtem ko tipkate v besedilno polje.",
        off: "Bližnjice na tipkovnici so v tem brskalniku izklopljene. Standardne tipke še vedno delujejo.",
        turnOn: "Vklopi jih",
        anywhere: "Povsod",
        results: "Na straneh z rezultati",
        searchBar: "V iskalni vrstici",
        playAudio: "Predvajaj prvi zvok na strani",
        pages: "Pojdi na stran 1 do 9",
        change: "Te bližnjice lahko spremenite ali izklopite na strani <link>{{page}}</link>. Spremembe veljajo samo za ta brskalnik.",
        standard: {
            title: "Standardne tipke",
            text: "Te tipke sledijo običajnim dogovorom za tipkovnico, zato delujejo kot na drugih spletnih mestih in jih ni mogoče spremeniti.",
        },
        list: {
            off: "Izklopljeno",
            or: "ali",
            to: "do",
        },
    },
    bookmarks: {
        title: "Shranjujte besede in prilagodite Jotobo",
        lead: "Dve mesti v meniju prilagodita Jotobo vašemu načinu učenja.",
        bookmarks: {
            title: "Zaznamki",
            text: "Besede in stavke shranite na svoje sezname in jim dodajte opombe. Brez računa ostanejo v tem brskalniku, z računom pa se sinhronizirajo z vsemi napravami, v katerih se prijavite. Uporabite gumb za zaznamek na strani s podrobnostmi, svoje sezname pa najdete pod <link>{{menu}}</link> v meniju.",
            textLocal:
                "Besede in stavke shranite na svoje sezname in jim dodajte opombe. Ostanejo v tem brskalniku. Uporabite gumb za zaznamek na strani s podrobnostmi, svoje sezname pa najdete pod <link>{{menu}}</link> v meniju.",
        },
        settings: {
            title: "Nastavitve",
            intro: "Nekaj možnosti, ki jih je vredno poznati:",
            language:
                "<link>{{setting}}</link>: iščite in berite pomene v drugem jeziku, na primer v nemščini. „{{alwaysEnglish}}“ doda še angleške pomene.",
            hideTranslation: "<link>{{setting}}</link>: vsak primer stavka preberite, preden vidite njegov prevod.",
            kanji: "<link>{{setting}}</link>: kateri deli besed in kandžijev so prikazani, na primer branja, tonski naglas ali vrstni red potez, in kako se predvaja animacija vrstnega reda potez.",
            theme: "<link>{{setting}}</link>: sledi sistemu ali je vedno svetla oziroma temna.",
            languageInLinks: "<link>{{setting}}</link>: povezave, ki jih delite, se odprejo v istem jeziku iskanja.",
        },
    },
    flashcards: {
        title: "Učite se z učnimi karticami",
        lead: "Vsak seznam zaznamkov lahko postane komplet kartic. Jotoba kartice načrtuje z algoritmom FSRS, tako da se vsaka vrne tik preden bi jo pozabili.",
        start: {
            title: "Začetek seznama",
            text: "Odprite seznam in izberite „Začni učenje“. Nastavite, koliko novih kartic na dan doda. Napredek velja samo za ta seznam: besedo na dveh seznamih se učite na vsakem posebej.",
            kinds: "Beseda ima do tri vrste kartic: pomen, branje in priklic. Naslednja vrsta se začne šele, ko ste prejšnjo znali na enem od prejšnjih dni.",
        },
        rating: {
            title: "Ocenjevanje kartice",
            text: "Pomislite na odgovor in ga nato prikažite. Izberite „Znova“, če ga niste vedeli, sicer „Znam“. Bodite iskreni: čas na gumbih pokaže, kdaj se kartica vrne. Pozabljene kartice se vrnejo nekaj kartic pozneje v istem krogu. Nova beseda, ki ste jo že poznali, dobi „Že znano“.",
            fine: "<link>{{setting}}</link> doda „Težko“ in „Lahko“. „Težko“ še vedno šteje kot znano.",
        },
        stages: {
            title: "Stopnje in spomin",
            text: "Vsaka beseda je na stopnji svoje najšibkejše začete vrste; dokler ne začnete nobene, je „Nova“. „V učenju“ je, dokler je trajanje spomina krajše od tedna, „Poznana“ do dveh mesecev, nato pa „Obvladana“.",
            memory: "Spomin: kako verjetno kartico zdaj znate. Vsak dan malo upade, dokler je ne ponovite.",
            span: "Trajanje spomina: koliko dni mine, dokler kartice ne znate le še 9-krat od 10. Vsako pravilno ponavljanje ga podaljša.",
            retention:
                "<link>{{setting}}</link>: kartice se vrnejo, ko vaš spomin nanje pade na to vrednost. Višja vrednost pomeni več ponavljanj.",
        },
        fewer: {
            title: "Zakaj pride manj kartic",
            intro: "Včasih seznam pokaže manj kartic na vrsti ali novih kartic, kot bi pričakovali. Pregled navede razloge:",
            resting:
                "Vsaka beseda pride na vrsto največ enkrat na učni dan. Njene druge kartice na vrsti počivajo do jutri. Učni dan se začne ob 4. uri zjutraj.",
            waiting: "Kartice za branje in priklic čakajo, dokler prejšnje vrste ne znate na enem od prejšnjih dni.",
            limit: "Nove kartice se ustavijo pri dnevni omejitvi seznama.",
            backlog:
                "Če čaka več ponavljanj, kot jih zmoreta dva kroga, se nove kartice ustavijo, dokler ne nadoknadite zaostanka. Najprej pridejo kartice, ki jih najverjetneje še znate. Za en dan lahko nove kartice vseeno dovolite.",
        },
        practice: {
            title: "Ko ni nič na vrsti",
            ahead: "„Ponovi vnaprej“ vzame kartice, ki še niso na vrsti, najbolj negotove najprej, vendar nobene, ki ste jo danes že ocenili. Šteje kot ponavljanje: znane kartice se vrnejo nekoliko pozneje, pozabljene prej.",
            browse: "„Samo prelistaj“ prelista kartice brez ocenjevanja. Ne spremeni ničesar.",
        },
        tricky: {
            title: "Zahtevne besede",
            text: "Beseda, ki ste jo pozabili trikrat (to lahko spremenite v nastavitvah učenja), je označena kot zahtevna. Po osmih pozabah seznam besed predlaga, da v opombo zapišete svoj mnemotehnični pripomoček, kar pogosto pomaga bolj kot dodatni krogi.",
            actions:
                "V podrobnostih besede jo lahko ustavite, da ne pride več v kroge, ali ponastavite, da začne znova kot nova kartica. Njena zgodovina ostane.",
        },
    },
    offline: {
        title: "Iskanje brez interneta",
        lead: "Aplikacija lahko slovar hrani v vaši napravi, tako da lahko besede iščete na vlaku, v tujini ali kjer koli brez povezave.",
        download: {
            title: "Prenesite slovar",
            text: "Enkrat ga prenesite pod <link>Slovar brez povezave</link> v meniju. Velikost vidite, preden začnete, prek mobilnih podatkov pa aplikacija najprej vpraša. Samodejno se ne prenese nič.",
        },
        works: {
            title: "Kaj deluje brez povezave",
            intro: "Ko je slovar v vaši napravi, brez povezave deluje to:",
            words: "Iskanje besed s predlogi med tipkanjem",
            details: "Podrobnosti besed, brez iskanja stavkov in posnetkov",
            kanji: "Kandži, iskanje po radikalih in vrstni red potez",
            voice: "<link>{{setting}}</link>: kjer ni posnetka, besede in stavke prebere japonski glas vaše naprave.",
        },
        needs: {
            title: "Kaj potrebuje internet",
            intro: "Nekatere stvari delujejo samo s povezavo:",
            sentencesNames: "Iskanje stavkov in iskanje imen",
            recordings: "Zvočni posnetki",
            reader: "Razčlenjevanje celih stavkov na besede. Brez povezave iščite besedo za besedo.",
            query: "Nadomestni znaki (* in ?), ključniki in narekovaji v iskanju",
        },
        now: {
            title: "Ko niste povezani",
            chip: "Brez povezave se na vrhu zaslona prikaže „Brez povezave“. Tapnite ga, da vidite, kaj trenutno deluje.",
            results:
                "Rezultati takrat prihajajo iz vaše naprave in so označeni kot rezultati brez povezave. Njihov vrstni red se lahko razlikuje od tistega s povezavo, tipkarske napake pa se ne popravljajo.",
            english:
                "Angleški pomeni so vedno vključeni. Za nekatere jezike lahko prenesete jezikovni paket z njihovimi pomeni.",
        },
        updates: {
            title: "Posodobitve in prostor",
            text: "Aplikacija slovarja nikoli ne posodobi sama. Ko so na voljo novi podatki, jih ponudita začetna stran in stran slovarja brez povezave, vi pa se odločite, kdaj jih prenesete.",
            manage: "Pod <link>Slovar brez povezave</link> v meniju lahko tudi preverite posodobitve, preverite, ali so podatki popolni, ali jih izbrišete, da sprostite prostor.",
        },
    },
    moreHelp: {
        title: "Več pomoči",
        lead: "Imate vprašanje, na katero ta stran ne odgovori, ali kaj ne deluje, kot bi moralo?",
        ask: "Vprašajte na <discord>Discordu</discord> ali <reddit>Redditu</reddit>. <trello>Načrt razvoja na Trellu</trello> pokaže, na čem delamo. Če je napačno samo slovarsko geslo, uporabite „Uredi v JMDict“ v meniju ⋮ ob besedi.",
        tour: "Ogled lahko kadar koli znova začnete prek „{{menu}}“ v meniju. Jotoba je na voljo tudi kot <app>aplikacija za Android</app>.",
    },
} satisfies PartialDict<typeof en>;
