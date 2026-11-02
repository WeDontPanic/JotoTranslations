import type en from "../en/help";
import type { PartialDict } from "../types";

export default {
    title: "Hulp",
    description:
        "Zo zoek je in Jotoba in het Engels, Japans of romaji, lees je hele zinnen, filter je resultaten met hashtags zoals #n5 en gebruik je sneltoetsen.",
    intro: "Jotoba is een woordenboek voor Japanse woorden, kanji, voorbeeldzinnen en namen. Deze pagina laat zien wat je ermee kunt doen, van je eerste zoekopdracht tot de sneltoetsen die je later tijd besparen. De voorbeelden zijn links, dus je kunt ze meteen uitproberen.",
    contents: "Op deze pagina",
    nav: {
        search: "Zoeken",
        reading: "Lezen",
        hashtags: "Hashtags",
        results: "Resultaten",
        shortcuts: "Sneltoetsen",
        bookmarks: "Bladwijzers en instellingen",
        flashcards: "Flashcards",
        offline: "Offline",
        moreHelp: "Meer hulp",
    },
    tour: {
        title: "Liever een rondleiding?",
        text: "De rondleiding wijst je op de zoekbalk, de zoektypes, de radicalenkiezer en het menu op de pagina waar je nu bent, en onderweg stel je meteen je talen in.",
        button: "Rondleiding starten",
    },
    topic: {
        try: "Probeer",
    },
    queryLink: {
        searchFor: "Zoeken naar ",
        in: " in ",
        types: {
            kanji: "Kanji",
            sentences: "Zinnen",
            names: "Namen",
        },
    },
    search: {
        title: "Begin met een zoekopdracht",
        lead: "Typ in de zoekbalk wat je weet. Het hoeft geen Japans te zijn.",
        directions: {
            title: "Zoek in elke richting",
            text: "Zoek in het Engels, in het Japans (kanji of kana) of in romaji, de schrijfwijze van het Japans in het Latijnse alfabet. Kies je in de <link>instellingen</link> een andere zoektaal, bijvoorbeeld Nederlands, dan kun je ook in die taal zoeken.",
        },
        types: {
            title: "Kies wat je zoekt",
            text: "Het menu naast het zoekveld wisselt tussen woorden, kanji, voorbeeldzinnen en namen. Als je het wijzigt, wordt je zoekopdracht opnieuw uitgevoerd. Heeft een ander type resultaten voor je zoekopdracht, dan wijst de resultatenpagina je daarop.",
        },
        wildcards: {
            title: "Vul gaten met jokertekens",
            text: "Ken je maar een deel van een woord? In een Japanse zoekopdracht staat * voor een willekeurig aantal tekens: <ja>*車</ja> vindt woorden die eindigen op <ja>車</ja>, <ja>車*</ja> woorden die ermee beginnen en <ja>*車*</ja> elk woord dat het bevat. Een ? staat voor precies één teken, dus <ja>宇宙?行士</ja> vindt <ja>宇宙飛行士</ja>.",
            boundaries:
                "Splitst de zinsontleding zo’n zoekopdracht in meerdere woorden, voeg ze dan samen met “Woordgrenzen bewerken”. Jokertekens werken met kanji en kana, niet met Engels of romaji.",
        },
        suggestions: {
            title: "Kies uit suggesties",
            text: "Tijdens het typen verschijnen suggesties. Kies er een om ernaar te zoeken. Typ je #, dan tonen de suggesties hashtags, die <hashtags>verderop</hashtags> worden uitgelegd. Met een toetsenbord kun je erdoorheen bewegen en een zoekopdracht in een nieuw tabblad openen, zie <shortcuts>sneltoetsen</shortcuts>.",
        },
    },
    reading: {
        title: "Japanse tekst lezen",
        lead: "Een zin gevonden die je nog niet kunt lezen? Jotoba deelt hem op in woorden, herkent vervoegde vormen en helpt je kanji te vinden die je niet kent.",
        sentences: {
            title: "Hele zinnen lezen",
            text: "Zoek op een hele Japanse zin en Jotoba deelt hem op in woorden. Kies een woord om de woordenboekvorm te zien en hoe het vervoegd is.",
            boundaries:
                "Is een zin op de verkeerde plek gesplitst, stel de woordgrenzen dan zelf in met de pen-knop. Ze worden in de link opgeslagen, dus je kunt de zin delen zoals jij hem hebt gesplitst.",
        },
        conjugations: {
            title: "Vervoegde woorden opzoeken",
            text: "Je hebt de woordenboekvorm niet nodig. Zoek een woord zoals je het tegenkwam en Jotoba toont het grondwoord samen met de vormen die het herkende, bijvoorbeeld ontkennend en verleden tijd.",
        },
        numbers: {
            title: "Getallen lezen",
            text: "Zoek een in het Japans geschreven getal om de waarde in cijfers te zien.",
        },
        radicals: {
            title: "Kanji vinden via hun onderdelen",
            text: "Kun je een kanji niet lezen? Open <ja>部</ja> naast het zoekveld en kies de radicalen die je herkent, de onderdelen waaruit een kanji is opgebouwd. De tabbladen sorteren ze op aantal streken. Elke radicaal die je toevoegt, beperkt de passende kanji verder, en ook de zoeksuggesties volgen je keuze.",
            search: "Weet je niet welke radicaal je voor je hebt? Typ in het zoekveld van de radicalenkiezer: een kanji toont zijn radicalen, kana tonen de radicalen van passende woorden, en Engels of romaji vinden radicalen op naam.",
        },
    },
    hashtags: {
        title: "Verfijnen met hashtags",
        lead: "Hashtags beginnen met # en gaan in de zoekbalk, voor of na je zoekterm. Ze wisselen het zoektype of filteren de resultaten, bijvoorbeeld op één JLPT-niveau of alleen op werkwoorden.",
        how: {
            title: "Zo werken hashtags",
            suggest: "Typ # en de zoekbalk stelt hashtags voor, dus je hoeft ze niet te onthouden.",
            case: "Hoofdletters en kleine letters maken niet uit: #N5 en #n5 zijn hetzelfde.",
            combine: "Je kunt ze combineren: #n5 #verb vindt werkwoorden uit N5.",
            withoutTerm: "Filters werken zonder zoekterm: #n5 alleen toont alle woorden uit N5.",
        },
        types: {
            title: "Het zoektype wisselen",
            text: "#word, #kanji, #sentence en #name gaan voor op het menu naast het zoekveld. Handig als je liever doortypt, of in een link die je naar iemand stuurt.",
        },
        hidden: {
            title: "Oefenen met verborgen vertalingen",
            text: "Voeg #hidden toe aan een zoekopdracht naar zinnen en de vertalingen blijven verborgen tot je ze zin voor zin onthult. Om ze bij elke zoekopdracht naar zinnen te verbergen, zet je <link>{{setting}}</link> aan in de instellingen.",
        },
        jlpt: {
            title: "Filteren op JLPT-niveau",
            text: "#n5 tot #n1 beperken woorden, kanji en zinnen tot één niveau van de Japanese-Language Proficiency Test, waarbij N5 het makkelijkst is. #jlpt5 tot #jlpt1 werken ook.",
        },
        all: {
            title: "Alle filterhashtags",
            text: "De meeste filters gelden voor het zoeken naar woorden. Kies een hashtag om alle woorden te zien die hem hebben.",
        },
        list: "Hashtags: {{group}}",
        showAll: {
            one: "Alle {{count}} vakgebieden tonen",
            other: "Alle {{count}} vakgebieden tonen",
        },
        showFewer: "Minder vakgebieden tonen",
        groups: {
            partOfSpeech: {
                title: "Woordsoort",
                description: "Wat voor woord het is.",
            },
            verbs: {
                title: "Werkwoorden en spelling",
                description: "Werkwoordklassen, suru-werkwoorden en hoe een woord meestal wordt geschreven.",
            },
            register: {
                title: "Register en toon",
                description: "Hoe beleefd, informeel of gevoelig een woord is, en wie het vooral gebruikt.",
            },
            old: {
                title: "Oude en zeldzame woorden",
                description: "Woorden die verouderd of historisch zijn of tegenwoordig weinig worden gebruikt.",
            },
            sayings: {
                title: "Gezegden en woordtypes",
                description: "Spreekwoorden, idiomen, samenstellingen van vier kanji, klanknabootsingen en afkortingen.",
            },
            names: {
                title: "Namen en dingen",
                description:
                    "Eigennamen in het woordenboek, zoals plaatsen, bedrijven of werken. De naam van een persoon zoek je op via Namen zoeken.",
            },
            subjects: {
                title: "Vakgebieden",
                description: "Woorden uit één vakgebied, zoals geneeskunde, recht of sumo.",
            },
            kanji: {
                title: "Kanji",
                description: "Kokuji zijn kanji die in Japan zijn ontstaan.",
            },
        },
    },
    results: {
        title: "Haal meer uit de resultaten",
        lead: "Elk item bevat meer dan zijn eerste regel.",
        labels: {
            title: "Wat de labels betekenen",
            common: "Een gangbaar woord",
            jlpt: "Het JLPT-niveau, van N5 (makkelijkst) tot N1",
            sentenceFrom: "Een zin van {{source}}",
            ownSentence: "Een zin die het Jotoba-team heeft toegevoegd",
            sources: "Waar de woorden, zinnen en audio vandaan komen, staat op de pagina <link>Over ons</link>.",
        },
        words: {
            title: "Woorden",
            text: "Speel de audio af, bekijk het toonhoogteaccent en andere schrijfwijzen, en kies een kanjitegel om die kanji te openen. Onder een betekenis kun je een voorbeeldzin openklappen.",
            menu: "Het ⋮-menu naast een woord heeft de rest: de vervoegingstabel, collocaties, de overgankelijke of onovergankelijke tegenhanger, zinnen met het woord, een audiodownload, “Bewerken in JMDict”, “Link kopiëren” en de detailpagina.",
            furigana:
                "Dubbelklik op de furigana boven een woord om de lezing te kopiëren. “{{setting}}” in de <link>instellingen</link> zet dit aan of uit.",
        },
        kanji: {
            title: "Kanji",
            text: "Speel de streekvolgorde af, loop er stap voor stap doorheen of verander de snelheid. Kies de grote kanji om te zien uit welke onderdelen hij bestaat. Samenstellingen zijn gegroepeerd per lezing, en als je een lezing kiest, zie je de woorden die haar gebruiken. De radicaal, de onderdelen en vergelijkbare kanji zijn links, dus je kunt verder ontdekken. Lezingen in het Chinees, Koreaans en Vietnamees kunnen ook worden getoond.",
        },
        sentences: {
            title: "Zinnen",
            text: "Het label laat zien waar een zin vandaan komt. Via het menu open je de zin in de zinsontleding om de woorden op te zoeken, open je hem op Tatoeba of kopieer je een link ernaar.",
        },
        names: {
            title: "Namen",
            text: "Naamresultaten tonen de lezing, een transcriptie en, waar bekend, het geslacht en de herkomst van de naam.",
        },
        sharing: {
            title: "Detailpagina’s en links",
            pages: "Woorden en zinnen hebben een eigen detailpagina, met tabbladen voor kanji, zinnen, collocaties en vervoegingen, en een deelknop.",
            links: "Zoeklinks bewaren het zoektype, de pagina, het woord dat je in de zinsontleding hebt gekozen en je woordgrenzen. Staat “{{setting}}” aan in de instellingen, dan zien mensen die je link openen dezelfde zoektaal als jij.",
        },
    },
    shortcuts: {
        title: "Sneller werken met het toetsenbord",
        lead: "Op een computer kun je het meeste van Jotoba zonder muis gebruiken. Sneltoetsen met één toets werken niet terwijl je in een tekstveld typt.",
        off: "Sneltoetsen staan uit in deze browser. De standaardtoetsen werken nog wel.",
        turnOn: "Aanzetten",
        anywhere: "Overal",
        results: "Op resultatenpagina’s",
        searchBar: "In de zoekbalk",
        playAudio: "De eerste audio op de pagina afspelen",
        pages: "Naar pagina 1 tot 9",
        change: "Je kunt deze sneltoetsen wijzigen of uitzetten onder <link>{{page}}</link>. Wijzigingen gelden alleen voor deze browser.",
        standard: {
            title: "Standaardtoetsen",
            text: "Deze toetsen volgen gangbare toetsenbordconventies, dus ze werken zoals op andere sites en kunnen niet worden gewijzigd.",
        },
        list: {
            off: "Uit",
            or: "of",
            to: "tot",
        },
    },
    bookmarks: {
        title: "Woorden bewaren en Jotoba aanpassen",
        lead: "Twee plekken in het menu stemmen Jotoba af op hoe jij leert.",
        bookmarks: {
            title: "Bladwijzers",
            text: "Bewaar woorden en zinnen in je eigen lijsten en voeg er notities aan toe. Zonder account blijven ze in deze browser, met een account worden ze gesynchroniseerd met elk apparaat waarop je inlogt. Gebruik de bladwijzerknop op een detailpagina en vind je lijsten onder <link>{{menu}}</link> in het menu.",
            textLocal:
                "Bewaar woorden en zinnen in je eigen lijsten en voeg er notities aan toe. Ze blijven in deze browser. Gebruik de bladwijzerknop op een detailpagina en vind je lijsten onder <link>{{menu}}</link> in het menu.",
        },
        settings: {
            title: "Instellingen",
            intro: "Een paar opties die de moeite waard zijn:",
            language:
                "<link>{{setting}}</link>: betekenissen in een andere taal zoeken en lezen, zoals Nederlands. “{{alwaysEnglish}}” voegt ook de Engelse betekenissen toe.",
            hideTranslation: "<link>{{setting}}</link>: elke voorbeeldzin eerst lezen voordat je de vertaling ziet.",
            kanji: "<link>{{setting}}</link>: welke onderdelen van woorden en kanji worden getoond, zoals lezingen, toonhoogteaccent of de streekvolgorde, en hoe de streekvolgorde-animatie afspeelt.",
            theme: "<link>{{setting}}</link>: je systeem volgen, of altijd licht of donker.",
            languageInLinks: "<link>{{setting}}</link>: links die je deelt, openen in dezelfde zoektaal.",
        },
    },
    flashcards: {
        title: "Leren met flashcards",
        lead: "Elke bladwijzerlijst kan een stapel kaarten worden. Jotoba plant de kaarten met FSRS, zodat elke kaart terugkomt vlak voordat je hem zou vergeten.",
        start: {
            title: "Een lijst starten",
            text: "Open een lijst en kies “Beginnen met leren”. Je stelt in hoeveel nieuwe kaarten er per dag bijkomen. Voortgang hoort alleen bij die lijst: een woord in twee lijsten leer je in allebei.",
            kinds: "Een woord heeft tot drie soorten kaarten: betekenis, lezing en oproepen. De volgende soort begint pas als je de vorige op een eerdere dag hebt geweten.",
        },
        rating: {
            title: "Een kaart beoordelen",
            text: "Bedenk het antwoord en laat het dan zien. Kies “Opnieuw” als je het niet wist, anders “Wist ik”. Wees eerlijk: de tijd op de knoppen laat zien wanneer de kaart terugkomt. Kaarten die je vergeet, komen een paar kaarten later in dezelfde ronde terug. Een nieuw woord dat je al kende, krijgt “Kende ik al”.",
            fine: "<link>{{setting}}</link> voegt “Moeilijk” en “Makkelijk” toe. “Moeilijk” telt nog steeds als geweten.",
        },
        stages: {
            title: "Fases en geheugen",
            text: "Elk woord staat in de fase van zijn zwakste begonnen soort, en op “Nieuw” tot je er een begint: “Aan het leren” zolang de onthoudduur onder een week ligt, “Vertrouwd” tot twee maanden, daarna “Beheerst”.",
            memory: "Geheugen: hoe waarschijnlijk het is dat je de kaart nu kent. Het zakt elke dag een beetje, tot je de kaart herhaalt.",
            span: "Onthoudduur: hoeveel dagen het duurt tot je de kaart nog maar 9 van de 10 keer kent. Elke goede herhaling maakt hem langer.",
            retention:
                "<link>{{setting}}</link>: kaarten komen terug als je geheugen ervan tot deze waarde zakt. Hoger betekent meer herhalingen.",
        },
        fewer: {
            title: "Waarom er minder kaarten komen",
            intro: "Soms toont een lijst minder kaarten die aan de beurt of nieuw zijn dan je verwacht. Het overzicht noemt de redenen:",
            resting:
                "Elk woord komt hoogstens één keer per leerdag aan de beurt. De andere kaarten ervan rusten tot morgen. Een leerdag begint om 4 uur ’s nachts.",
            waiting: "Lees- en oproepkaarten wachten tot je de vorige soort op een eerdere dag hebt geweten.",
            limit: "Nieuwe kaarten stoppen bij de daglimiet van de lijst.",
            backlog:
                "Wachten er meer herhalingen dan twee rondes aankunnen, dan pauzeren nieuwe kaarten tot je bij bent. Kaarten die je waarschijnlijk nog kent, komen eerst. Je kunt nieuwe kaarten toch een dag laten meekomen.",
        },
        practice: {
            title: "Als er niets aan de beurt is",
            ahead: "“Vooruit herhalen” neemt kaarten die nog niet aan de beurt zijn, de wankelste eerst, maar geen die je vandaag al hebt beoordeeld. Het telt als herhaling: gekende kaarten komen wat later terug, vergeten kaarten eerder.",
            browse: "“Alleen bekijken” bladert door de kaarten zonder ze te beoordelen. Het verandert niets.",
        },
        tricky: {
            title: "Lastige woorden",
            text: "Een woord dat je drie keer bent vergeten (aan te passen in de leerinstellingen), wordt als lastig gemarkeerd. Na acht keer stelt de woordenlijst voor om een eigen ezelsbruggetje in de notitie te schrijven. Dat helpt vaak meer dan extra rondes.",
            actions:
                "In de details van een woord kun je het pauzeren, zodat het buiten de rondes blijft, of opnieuw laten beginnen, zodat het als nieuwe kaart start. De geschiedenis blijft bewaard.",
        },
    },
    offline: {
        title: "Zoeken zonder internet",
        lead: "De app kan het woordenboek op je apparaat bewaren, zodat je woorden kunt opzoeken in de trein, in het buitenland of waar dan ook zonder verbinding.",
        download: {
            title: "Het woordenboek downloaden",
            text: "Download het één keer onder <link>Offline woordenboek</link> in het menu. Je ziet de grootte voordat je begint, en via mobiele data vraagt de app het eerst. Er wordt niets vanzelf gedownload.",
        },
        works: {
            title: "Wat er offline werkt",
            intro: "Zodra het op je apparaat staat, werkt dit zonder verbinding:",
            words: "Woorden zoeken, met suggesties tijdens het typen",
            details: "Woorddetails, zonder zinnen zoeken en opnames",
            kanji: "Kanji, de radicalenkiezer en de streekvolgorde",
            voice: "<link>{{setting}}</link>: waar geen opname is, leest de Japanse stem van je apparaat woorden en zinnen voor.",
        },
        needs: {
            title: "Wat internet nodig heeft",
            intro: "Sommige dingen werken alleen online:",
            sentencesNames: "Zinnen zoeken en namen zoeken",
            recordings: "Audio-opnames",
            reader: "Hele zinnen opsplitsen in woorden. Offline zoek je één woord tegelijk.",
            query: "Jokertekens (* en ?), hashtags en aanhalingstekens in een zoekopdracht",
        },
        now: {
            title: "Als je offline bent",
            chip: "Zonder verbinding verschijnt “Offline” boven in het scherm. Tik erop om te zien wat nu werkt.",
            results:
                "De resultaten komen dan van je apparaat en zijn gemarkeerd als offline resultaten. De volgorde kan anders zijn dan online, en spelfouten worden niet gecorrigeerd.",
            english: "Offline zijn de betekenissen voorlopig alleen in het Engels.",
        },
        updates: {
            title: "Updates en opslag",
            text: "De app werkt het woordenboek nooit vanzelf bij. Als er nieuwe gegevens zijn, bieden de startpagina en de pagina Offline woordenboek ze aan, en jij beslist wanneer je ze downloadt.",
            manage: "Onder <link>Offline woordenboek</link> in het menu kun je ook op updates controleren, nagaan of de gegevens volledig zijn, of ze verwijderen om ruimte vrij te maken.",
        },
    },
    moreHelp: {
        title: "Meer hulp",
        lead: "Heb je een vraag waar deze pagina geen antwoord op geeft, of werkt iets niet zoals verwacht?",
        ask: "Stel je vraag op <discord>Discord</discord> of <reddit>Reddit</reddit>. De <trello>roadmap op Trello</trello> laat zien waar we aan werken. Is een woordenboekitem zelf fout, gebruik dan “Bewerken in JMDict” in het ⋮-menu van het woord.",
        tour: "Je kunt de rondleiding altijd opnieuw starten via “{{menu}}” in het menu. Jotoba is ook beschikbaar als <app>Android-app</app>.",
    },
} satisfies PartialDict<typeof en>;
