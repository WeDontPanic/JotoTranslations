import type en from "../en/help";
import type { PartialDict } from "../types";

export default {
    title: "Hjälp",
    description:
        "Så söker du i Jotoba på engelska, japanska eller romaji, läser hela meningar, filtrerar resultat med hashtaggar som #n5 och använder kortkommandon.",
    intro: "Jotoba är en ordbok för japanska ord, kanji, exempelmeningar och namn. Den här sidan visar vad du kan göra med den, från din första sökning till kortkommandona som sparar tid senare. Exemplen är länkar, så du kan prova varje exempel direkt.",
    contents: "På den här sidan",
    nav: {
        search: "Sökning",
        reading: "Läsa",
        hashtags: "Hashtaggar",
        results: "Resultat",
        shortcuts: "Kortkommandon",
        bookmarks: "Bokmärken och inställningar",
        flashcards: "Studiekort",
        offline: "Offline",
        moreHelp: "Mer hjälp",
    },
    tour: {
        title: "Vill du hellre bli visad runt?",
        text: "Rundturen visar sökfältet, söktyperna, radikalväljaren och menyn på sidan du är på, och låter dig ställa in dina språk på vägen.",
        button: "Ta rundturen",
    },
    topic: {
        try: "Prova",
    },
    queryLink: {
        searchFor: "Sök efter ",
        in: " i ",
        types: {
            kanji: "Kanji",
            sentences: "Meningar",
            names: "Namn",
        },
    },
    search: {
        title: "Börja med en sökning",
        lead: "Skriv det du vet i sökfältet. Det behöver inte vara på japanska.",
        directions: {
            title: "Sök åt alla håll",
            text: "Sök på engelska, på japanska (kanji eller kana) eller på romaji, den latinska stavningen av japanska. Om du väljer ett annat sökspråk i <link>inställningarna</link>, till exempel svenska, kan du även söka på det språket.",
        },
        types: {
            title: "Välj vad du vill söka",
            text: "Menyn bredvid sökfältet växlar mellan ord, kanji, exempelmeningar och namn. När du ändrar den körs sökningen igen. Om en annan typ har resultat för din sökning hänvisar resultatsidan dig dit.",
        },
        wildcards: {
            title: "Fyll luckor med jokertecken",
            text: "Kan du bara en del av ett ord? I en japansk sökning står * för valfritt antal tecken: <ja>*車</ja> hittar ord som slutar på <ja>車</ja>, <ja>車*</ja> ord som börjar med det och <ja>*車*</ja> alla ord som innehåller det. Ett ? står för exakt ett tecken, så <ja>宇宙?行士</ja> hittar <ja>宇宙飛行士</ja>.",
            boundaries:
                "Om meningsläsaren delar upp en sådan sökning i flera ord kan du slå ihop dem med ”Redigera ordgränser”. Jokertecken fungerar med kanji och kana, inte med engelska eller romaji.",
        },
        suggestions: {
            title: "Välj bland förslag",
            text: "Förslag visas medan du skriver. Välj ett för att söka efter det. När du skriver # växlar förslagen till hashtaggar, som förklaras <hashtags>längre ned</hashtags>. Med tangentbord kan du gå igenom dem och öppna en sökning i en ny flik, se <shortcuts>kortkommandon</shortcuts>.",
        },
    },
    reading: {
        title: "Läs japansk text",
        lead: "Har du hittat en mening som du inte kan läsa än? Jotoba kan dela upp den i ord, känna igen böjda former och hjälpa dig att hitta kanji som du inte kan.",
        sentences: {
            title: "Läs hela meningar",
            text: "Sök på en hel japansk mening så delar Jotoba upp den i ord. Välj ett ord för att se dess grundform och hur det har böjts.",
            boundaries:
                "Om en mening delas på fel ställe kan du sätta ordgränserna själv med pennknappen. De sparas i länken, så du kan dela meningen så som du har delat upp den.",
        },
        conjugations: {
            title: "Slå upp böjda ord",
            text: "Du behöver inte grundformen. Sök på ordet så som du hittade det, så visar Jotoba grundordet tillsammans med de former den har identifierat, till exempel nekande och dåtid.",
        },
        numbers: {
            title: "Läs tal",
            text: "Sök på ett tal skrivet på japanska för att se dess värde i siffror.",
        },
        radicals: {
            title: "Hitta kanji via deras delar",
            text: "Kan du inte läsa ett kanji? Öppna <ja>部</ja> bredvid sökfältet och välj de radikaler du känner igen, alltså delarna som ett kanji är uppbyggt av. Flikarna sorterar dem efter antal streck. Varje radikal du lägger till begränsar de matchande kanjina, och sökförslagen följer också ditt val.",
            search: "Osäker på vilken radikal du tittar på? Skriv i sökfältet i väljaren: ett kanji visar sina radikaler, kana visar radikalerna i matchande ord, och engelska eller romaji hittar radikaler efter namn.",
        },
    },
    hashtags: {
        title: "Begränsa med hashtaggar",
        lead: "Hashtaggar börjar med # och skrivs i sökfältet, före eller efter ditt sökord. De byter söktyp eller filtrerar resultaten, till exempel till en JLPT-nivå eller bara verb.",
        how: {
            title: "Så fungerar hashtaggar",
            suggest: "Skriv # så föreslår sökfältet hashtaggar, så du behöver inte komma ihåg dem.",
            case: "Stora och små bokstäver spelar ingen roll: #N5 och #n5 är samma sak.",
            combine: "Du kan kombinera dem: #n5 #verb hittar N5-verb.",
            withoutTerm: "Filter fungerar utan sökord: #n5 ensamt listar alla N5-ord.",
        },
        types: {
            title: "Byt söktyp",
            text: "#word, #kanji, #sentence och #name går före menyn bredvid sökfältet. De är praktiska när du hellre vill fortsätta skriva, eller i en länk som du skickar till någon.",
        },
        hidden: {
            title: "Öva med dolda översättningar",
            text: "Lägg till #hidden i en meningssökning så förblir översättningarna dolda tills du visar dem, en mening i taget. För att dölja dem i alla meningssökningar slår du på <link>{{setting}}</link> i inställningarna.",
        },
        jlpt: {
            title: "Filtrera efter JLPT-nivå",
            text: "#n5 till #n1 begränsar ord, kanji och meningar till en nivå av Japanese-Language Proficiency Test, där N5 är lättast. #jlpt5 till #jlpt1 fungerar också.",
        },
        all: {
            title: "Alla filterhashtaggar",
            text: "De flesta filter gäller ordsökningar. Välj en hashtagg för att lista alla ord som har den.",
        },
        list: "Hashtaggar: {{group}}",
        showAll: {
            one: "Visa alla {{count}} ämnen",
            other: "Visa alla {{count}} ämnen",
        },
        showFewer: "Visa färre ämnen",
        groups: {
            partOfSpeech: {
                title: "Ordklass",
                description: "Vilken sorts ord det är.",
            },
            verbs: {
                title: "Verb och stavning",
                description: "Verbklasser, suru-verb och hur ett ord oftast skrivs.",
            },
            register: {
                title: "Stilnivå och ton",
                description: "Hur artigt, vardagligt eller känsligt ett ord är, och vem som brukar använda det.",
            },
            old: {
                title: "Gamla och sällsynta ord",
                description: "Ord som är ålderdomliga, historiska eller sällan används i dag.",
            },
            sayings: {
                title: "Talesätt och ordtyper",
                description: "Ordspråk, idiom, sammansättningar med fyra kanji, ljudord och förkortningar.",
            },
            names: {
                title: "Namn och ting",
                description:
                    "Egennamn i ordboken, till exempel platser, företag eller verk. För att slå upp en persons namn använder du namnsökningen.",
            },
            subjects: {
                title: "Ämnen",
                description: "Ord från ett område, till exempel medicin, juridik eller sumo.",
            },
            kanji: {
                title: "Kanji",
                description: "Kokuji är kanji som har skapats i Japan.",
            },
        },
    },
    results: {
        title: "Få ut mer av resultaten",
        lead: "Varje post innehåller mer än sin första rad.",
        labels: {
            title: "Vad etiketterna betyder",
            common: "Ett vanligt ord",
            jlpt: "JLPT-nivån, från N5 (lättast) till N1",
            sentenceFrom: "En mening från {{source}}",
            ownSentence: "En mening som Jotoba-teamet har lagt till",
            sources: "Varifrån orden, meningarna och ljudet kommer står på <link>Om oss-sidan</link>.",
        },
        words: {
            title: "Ord",
            text: "Spela upp ljudet, kolla tonhöjdsaccenten och andra stavningar, och välj en kanjiruta för att öppna det kanjit. Under en betydelse kan du fälla ut en exempelmening.",
            menu: "Menyn ⋮ bredvid ett ord har resten: böjningstabellen, kollokationer, den transitiva eller intransitiva motsvarigheten, meningar som använder ordet, nedladdning av ljud, Redigera i JMdict, Kopiera länk och detaljsidan.",
            furigana:
                "Dubbelklicka på furiganan ovanför ett ord för att kopiera dess läsning. {{setting}} i <link>inställningarna</link> slår på eller av detta.",
        },
        kanji: {
            title: "Kanji",
            text: "Spela upp streckordningen, stega igenom den eller ändra hastigheten. Välj det stora kanjit för att se delarna det består av. Sammansättningar grupperas efter läsning, och om du väljer en läsning listas orden som använder den. Radikalen, delarna och liknande kanji är länkar, så du kan fortsätta utforska. Läsningar på kinesiska, koreanska och vietnamesiska kan också visas.",
        },
        sentences: {
            title: "Meningar",
            text: "Etiketten visar var en mening kommer ifrån. Dess meny öppnar meningen i meningsläsaren så att du kan slå upp orden, öppnar den på Tatoeba eller kopierar en länk till den.",
        },
        names: {
            title: "Namn",
            text: "Namnresultat visar läsningen, en transkription och, om det är känt, namnets kön och typ.",
        },
        sharing: {
            title: "Detaljsidor och länkar",
            pages: "Ord och meningar har en egen detaljsida, med flikar för kanji, meningar, kollokationer och böjningar, och en dela-knapp.",
            links: "Söklänkar behåller söktypen, sidan, ordet du valde i meningsläsaren och dina ordgränser. Om {{setting}} är påslaget i inställningarna ser de som öppnar din länk samma sökspråk som du använde.",
        },
    },
    shortcuts: {
        title: "Jobba snabbare med tangentbordet",
        lead: "På en dator kan du använda det mesta i Jotoba utan mus. Kortkommandon med en enda tangent fungerar inte medan du skriver i ett textfält.",
        off: "Kortkommandon är avstängda i den här webbläsaren. Standardtangenterna fungerar fortfarande.",
        turnOn: "Slå på dem",
        anywhere: "Överallt",
        results: "På resultatsidor",
        searchBar: "I sökfältet",
        playAudio: "Spela upp det första ljudet på sidan",
        pages: "Gå till sida 1 till 9",
        change: "Du kan ändra de här kortkommandona eller stänga av dem under <link>{{page}}</link>. Ändringarna gäller bara den här webbläsaren.",
        standard: {
            title: "Standardtangenter",
            text: "De här tangenterna följer vanliga tangentbordskonventioner, så de fungerar som på andra webbplatser och kan inte ändras.",
        },
        list: {
            off: "Av",
            or: "eller",
            to: "till",
        },
    },
    bookmarks: {
        title: "Spara ord och anpassa Jotoba",
        lead: "Två ställen i menyn får Jotoba att passa ditt sätt att plugga.",
        bookmarks: {
            title: "Bokmärken",
            text: "Spara ord och meningar i egna listor och lägg till anteckningar. Utan konto stannar de i den här webbläsaren, med konto synkas de till alla enheter där du loggar in. Använd bokmärkesknappen på en detaljsida och hitta dina listor under <link>{{menu}}</link> i menyn.",
            textLocal:
                "Spara ord och meningar i egna listor och lägg till anteckningar. De stannar i den här webbläsaren. Använd bokmärkesknappen på en detaljsida och hitta dina listor under <link>{{menu}}</link> i menyn.",
        },
        settings: {
            title: "Inställningar",
            intro: "Några alternativ som är bra att känna till:",
            language:
                "<link>{{setting}}</link>: sök och läs betydelser på ett annat språk, till exempel svenska. {{alwaysEnglish}} lägger även till de engelska betydelserna.",
            hideTranslation: "<link>{{setting}}</link>: läs varje exempelmening innan du ser översättningen.",
            kanji: "<link>{{setting}}</link>: vilka delar av ord och kanji som visas, till exempel läsningar, tonhöjdsaccent eller streckordning, och hur streckordningsanimationen spelas upp.",
            theme: "<link>{{setting}}</link>: följ ditt system, eller alltid ljust eller mörkt.",
            languageInLinks: "<link>{{setting}}</link>: länkar som du delar öppnas med samma sökspråk.",
        },
    },
    flashcards: {
        title: "Plugga med studiekort",
        lead: "Alla bokmärkeslistor kan bli en kortlek. Jotoba planerar korten med FSRS, så varje kort kommer tillbaka strax innan du skulle glömma det.",
        start: {
            title: "Börja med en lista",
            text: "Öppna en lista och välj Börja lära. Du ställer in hur många nya kort om dagen som läggs till. Framstegen hör bara till den listan: ett ord i två listor pluggas i båda.",
            kinds: "Ett ord har upp till tre typer av kort: betydelse, läsning och minnas. Nästa typ börjar först när du har kunnat den föregående en tidigare dag.",
        },
        rating: {
            title: "Bedöma ett kort",
            text: "Tänk ut svaret och visa det sedan. Välj Igen om du inte kunde det, annars Kunde det. Var ärlig: tiden på knapparna visar när kortet kommer tillbaka. Kort som du glömmer kommer tillbaka några kort senare i samma omgång. Ett nytt ord som du redan kunde får Kunde det redan.",
            fine: "<link>{{setting}}</link> lägger till Svårt och Lätt. Svårt räknas ändå som att du kunde det.",
        },
        stages: {
            title: "Nivåer och minne",
            text: "Varje ord ligger på nivån för den svagaste påbörjade typen, och är Ny tills du påbörjar en: Inlärning så länge minnesspannet är under en vecka, Bekant upp till två månader, Behärskad därefter.",
            memory: "Minne: hur troligt det är att du kan kortet just nu. Det sjunker lite varje dag tills du repeterar det.",
            span: "Minnesspann: hur många dagar det tar tills du bara skulle kunna kortet 9 gånger av 10. Varje repetition du klarar gör det längre.",
            retention:
                "<link>{{setting}}</link>: korten kommer tillbaka när ditt minne av dem sjunker till det här värdet. Högre betyder fler repetitioner.",
        },
        fewer: {
            title: "Varför färre kort kommer upp",
            intro: "Ibland visar en lista färre kort att repetera eller nya kort än du väntar dig. Översikten anger skälen:",
            resting:
                "Varje ord kommer upp högst en gång per studiedag. Dess andra kort som ska repeteras vilar till i morgon. En studiedag börjar kl. 4 på morgonen.",
            waiting: "Kort för läsning och minnas väntar tills du har kunnat den föregående typen en tidigare dag.",
            limit: "Nya kort stoppas vid listans dagliga gräns.",
            backlog:
                "Om fler repetitioner väntar än vad två omgångar hinner med pausas nya kort tills du är i fas. Korten som du troligen fortfarande kan kommer först. Du kan ändå låta nya kort komma med under en dag.",
        },
        practice: {
            title: "När inget ska repeteras",
            ahead: "Repetera i förväg tar kort som inte ska repeteras än, de osäkraste först, men inga som du redan har bedömt i dag. Det räknas som en repetition: kort du kan kommer tillbaka lite senare, glömda tidigare.",
            browse: "Bara bläddra bläddrar bland korten utan att bedöma dem. Det ändrar ingenting.",
        },
        tricky: {
            title: "Knepiga ord",
            text: "Ett ord som du har glömt tre gånger (det kan du ändra i inlärningsinställningarna) markeras som knepigt. Efter åtta gånger föreslår ordlistan att du skriver ett eget minnesstöd i anteckningen, vilket ofta hjälper mer än fler omgångar.",
            actions:
                "I detaljerna för ett ord kan du pausa det, så att det inte är med i omgångarna, eller återställa det, så att det börjar om som ett nytt kort. Dess historik finns kvar.",
        },
    },
    offline: {
        title: "Sök utan internet",
        lead: "Appen kan ha ordboken på din enhet, så att du kan slå upp ord på tåget, utomlands eller var som helst utan anslutning.",
        download: {
            title: "Ladda ned ordboken",
            text: "Ladda ned den en gång under <link>Offlineordbok</link> i menyn. Du ser storleken innan du börjar, och via mobildata frågar appen först. Inget laddas ned av sig självt.",
        },
        works: {
            title: "Det här fungerar offline",
            intro: "När den finns på din enhet fungerar det här utan anslutning:",
            words: "Ordsökning, med förslag medan du skriver",
            details: "Orddetaljer, utan meningssökning och inspelningar",
            kanji: "Kanji, radikalväljaren och streckordning",
            voice: "<link>{{setting}}</link>: där det inte finns någon inspelning läser enhetens japanska röst upp ord och meningar.",
        },
        needs: {
            title: "Det här kräver internet",
            intro: "Vissa saker fungerar bara online:",
            sentencesNames: "Meningssökning och namnsökning",
            recordings: "Ljudinspelningar",
            reader: "Att dela upp hela meningar i ord. Offline söker du ett ord i taget.",
            query: "Jokertecken (* och ?), hashtaggar och citattecken i en sökning",
        },
        now: {
            title: "När du är offline",
            chip: "Utan anslutning visas Offline högst upp på skärmen. Tryck på det för att se vad som fungerar just nu.",
            results:
                "Resultaten kommer då från din enhet och markeras som offlineresultat. Ordningen kan skilja sig från online, och stavfel rättas inte.",
            english:
                "Engelska betydelser finns alltid med. För vissa språk kan du ladda ner ett språkpaket med deras betydelser.",
        },
        updates: {
            title: "Uppdateringar och lagring",
            text: "Appen uppdaterar aldrig ordboken av sig själv. När ny data finns erbjuder startsidan och sidan för offlineordboken den, och du bestämmer när den ska laddas ned.",
            manage: "Under <link>Offlineordbok</link> i menyn kan du också söka efter uppdateringar, kontrollera att datan är komplett eller radera den för att frigöra utrymme.",
        },
    },
    moreHelp: {
        title: "Få mer hjälp",
        lead: "Har du en fråga som den här sidan inte besvarar, eller fungerar något inte som det ska?",
        ask: "Fråga på <discord>Discord</discord> eller <reddit>Reddit</reddit>. <trello>Färdplanen på Trello</trello> visar vad vi jobbar med. Om själva ordboksposten är fel använder du Redigera i JMdict i ordets meny ⋮.",
        tour: "Du kan starta rundturen igen via {{menu}} i menyn. Jotoba finns också som <app>Android-app</app>.",
    },
} satisfies PartialDict<typeof en>;
