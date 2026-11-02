import type en from "../en/help";
import type { PartialDict } from "../types";

export default {
    title: "Hilfe",
    description:
        "So suchst du in Jotoba auf Englisch, Japanisch oder in Romaji, liest ganze Sätze, filterst Ergebnisse mit Hashtags wie #n5 und nutzt Tastenkürzel.",
    intro: "Jotoba ist ein Wörterbuch für japanische Wörter, Kanji, Beispielsätze und Namen. Diese Seite zeigt dir, was du damit machen kannst, von deiner ersten Suche bis zu den Tastenkürzeln, die dir später Zeit sparen. Die Beispiele sind Links, du kannst also jedes sofort ausprobieren.",
    contents: "Auf dieser Seite",
    nav: {
        search: "Suchen",
        reading: "Lesen",
        hashtags: "Hashtags",
        results: "Ergebnisse",
        shortcuts: "Tastenkürzel",
        bookmarks: "Lesezeichen und Einstellungen",
        flashcards: "Karteikarten",
        offline: "Offline",
        moreHelp: "Weitere Hilfe",
    },
    tour: {
        title: "Lieber herumgeführt werden?",
        text: "Die Tour zeigt dir die Suchleiste, die Suchtypen, die Radikalsuche und das Menü auf der Seite, auf der du gerade bist. Unterwegs stellst du gleich deine Sprachen ein.",
        button: "Tour starten",
    },
    topic: {
        try: "Ausprobieren",
    },
    queryLink: {
        searchFor: "Suche nach ",
        in: " in ",
        types: {
            kanji: "Kanji",
            sentences: "Sätze",
            names: "Namen",
        },
    },
    search: {
        title: "Mit einer Suche beginnen",
        lead: "Gib in die Suchleiste ein, was du weißt. Es muss nicht Japanisch sein.",
        directions: {
            title: "In jede Richtung suchen",
            text: "Suche auf Englisch, auf Japanisch (Kanji oder Kana) oder in Romaji, der lateinischen Schreibweise des Japanischen. Wählst du in den <link>Einstellungen</link> eine andere Suchsprache, zum Beispiel Deutsch, kannst du auch in dieser Sprache suchen.",
        },
        types: {
            title: "Auswählen, was du suchst",
            text: "Das Menü neben dem Suchfeld wechselt zwischen Wörtern, Kanji, Beispielsätzen und Namen. Wenn du es änderst, läuft deine Suche erneut. Hat ein anderer Typ Treffer für deine Suche, weist dich die Ergebnisseite darauf hin.",
        },
        wildcards: {
            title: "Lücken mit Platzhaltern füllen",
            text: "Du kennst nur einen Teil eines Worts? In einer japanischen Suche steht * für beliebig viele Zeichen: <ja>*車</ja> findet Wörter, die auf <ja>車</ja> enden, <ja>車*</ja> Wörter, die damit beginnen, und <ja>*車*</ja> jedes Wort, das es enthält. Ein ? steht für genau ein Zeichen, <ja>宇宙?行士</ja> findet also <ja>宇宙飛行士</ja>.",
            boundaries:
                "Zerlegt die Satzzerlegung eine solche Suche in mehrere Wörter, fügst du sie mit „Wortgrenzen bearbeiten“ zusammen. Platzhalter funktionieren mit Kanji und Kana, nicht mit Englisch oder Romaji.",
        },
        suggestions: {
            title: "Aus Vorschlägen wählen",
            text: "Beim Tippen erscheinen Vorschläge. Wähle einen aus, um danach zu suchen. Tippst du #, zeigen die Vorschläge Hashtags, die <hashtags>weiter unten</hashtags> erklärt sind. Mit der Tastatur kannst du durch sie gehen und eine Suche in einem neuen Tab öffnen, siehe <shortcuts>Tastenkürzel</shortcuts>.",
        },
    },
    reading: {
        title: "Japanische Texte lesen",
        lead: "Du hast einen Satz gefunden, den du noch nicht lesen kannst? Jotoba zerlegt ihn in Wörter, erkennt konjugierte Formen und hilft dir, Kanji zu finden, die du nicht kennst.",
        sentences: {
            title: "Ganze Sätze lesen",
            text: "Suche einen ganzen japanischen Satz, und Jotoba zerlegt ihn in Wörter. Wähle ein Wort aus, um seine Wörterbuchform zu sehen und wie es konjugiert wurde.",
            boundaries:
                "Ist ein Satz an der falschen Stelle getrennt, setzt du die Wortgrenzen mit dem Stift-Button selbst. Sie werden im Link gespeichert, du kannst den Satz also so teilen, wie du ihn getrennt hast.",
        },
        conjugations: {
            title: "Konjugierte Wörter nachschlagen",
            text: "Du brauchst die Wörterbuchform nicht. Suche ein Wort so, wie du es gefunden hast, und Jotoba zeigt das Grundwort zusammen mit den erkannten Formen, zum Beispiel Verneinung und Vergangenheit.",
        },
        numbers: {
            title: "Zahlen lesen",
            text: "Suche eine auf Japanisch geschriebene Zahl, um ihren Wert in Ziffern zu sehen.",
        },
        radicals: {
            title: "Kanji über ihre Bestandteile finden",
            text: "Du kannst ein Kanji nicht lesen? Öffne <ja>部</ja> neben dem Suchfeld und wähle die Radikale, die du erkennst, also die Teile, aus denen ein Kanji besteht. Die Tabs sortieren sie nach Strichzahl. Jedes Radikal, das du hinzufügst, grenzt die passenden Kanji weiter ein, und auch die Suchvorschläge folgen deiner Auswahl.",
            search: "Du weißt nicht, welches Radikal du vor dir hast? Tippe in das Suchfeld der Radikalsuche: Ein Kanji zeigt seine Radikale, Kana zeigen die Radikale passender Wörter, und Englisch oder Romaji finden Radikale über ihren Namen.",
        },
    },
    hashtags: {
        title: "Mit Hashtags eingrenzen",
        lead: "Hashtags beginnen mit # und kommen in die Suchleiste, vor oder nach deinen Suchbegriff. Sie wechseln den Suchtyp oder filtern die Ergebnisse, zum Beispiel auf ein JLPT-Niveau oder nur auf Verben.",
        how: {
            title: "So funktionieren Hashtags",
            suggest: "Tippe #, und die Suchleiste schlägt Hashtags vor, du musst sie dir also nicht merken.",
            case: "Groß- und Kleinschreibung spielt keine Rolle: #N5 und #n5 sind dasselbe.",
            combine: "Du kannst sie kombinieren: #n5 #verb findet Verben aus N5.",
            withoutTerm: "Filter funktionieren ohne Suchbegriff: #n5 allein listet alle Wörter aus N5.",
        },
        types: {
            title: "Den Suchtyp wechseln",
            text: "#word, #kanji, #sentence und #name übergehen das Menü neben dem Suchfeld. Das ist praktisch, wenn du lieber weitertippst, oder in einem Link, den du jemandem schickst.",
        },
        hidden: {
            title: "Mit versteckten Übersetzungen üben",
            text: "Füge #hidden zu einer Satzsuche hinzu, und die Übersetzungen bleiben verborgen, bis du sie aufdeckst, Satz für Satz. Um sie in jeder Satzsuche zu verbergen, schalte in den Einstellungen <link>{{setting}}</link> ein.",
        },
        jlpt: {
            title: "Nach JLPT-Niveau filtern",
            text: "#n5 bis #n1 beschränken Wörter, Kanji und Sätze auf ein Niveau des Japanese-Language Proficiency Test, N5 ist das leichteste. #jlpt5 bis #jlpt1 funktionieren ebenso.",
        },
        all: {
            title: "Alle Filter-Hashtags",
            text: "Die meisten Filter gelten für die Wortsuche. Wähle einen Hashtag aus, um alle Wörter zu sehen, die ihn haben.",
        },
        list: "Hashtags: {{group}}",
        showAll: {
            one: "Alle {{count}} Fachgebiete anzeigen",
            other: "Alle {{count}} Fachgebiete anzeigen",
        },
        showFewer: "Weniger Fachgebiete anzeigen",
        groups: {
            partOfSpeech: {
                title: "Wortart",
                description: "Was für ein Wort es ist.",
            },
            verbs: {
                title: "Verben und Schreibung",
                description: "Verbklassen, Suru-Verben und wie ein Wort üblicherweise geschrieben wird.",
            },
            register: {
                title: "Sprachebene und Ton",
                description: "Wie höflich, umgangssprachlich oder heikel ein Wort ist und wer es eher benutzt.",
            },
            old: {
                title: "Alte und seltene Wörter",
                description: "Wörter, die veraltet oder historisch sind oder heute selten benutzt werden.",
            },
            sayings: {
                title: "Redewendungen und Wortarten",
                description: "Sprichwörter, Redewendungen, Vier-Kanji-Komposita, Lautmalereien und Abkürzungen.",
            },
            names: {
                title: "Namen und Dinge",
                description:
                    "Eigennamen im Wörterbuch, etwa Orte, Firmen oder Werke. Den Namen einer Person schlägst du über die Namenssuche nach.",
            },
            subjects: {
                title: "Fachgebiete",
                description: "Wörter aus einem Fachgebiet, etwa Medizin, Recht oder Sumo.",
            },
            kanji: {
                title: "Kanji",
                description: "Kokuji sind Kanji, die in Japan entstanden sind.",
            },
        },
    },
    results: {
        title: "Mehr aus den Ergebnissen holen",
        lead: "Jeder Eintrag enthält mehr als seine erste Zeile.",
        labels: {
            title: "Was die Labels bedeuten",
            common: "Ein häufiges Wort",
            jlpt: "Das JLPT-Niveau, von N5 (am leichtesten) bis N1",
            sentenceFrom: "Ein Satz von {{source}}",
            ownSentence: "Ein Satz, den das Jotoba-Team hinzugefügt hat",
            sources: "Woher Wörter, Sätze und Audio stammen, steht auf der Seite <link>Über uns</link>.",
        },
        words: {
            title: "Wörter",
            text: "Spiele das Audio ab, sieh dir Tonhöhenakzent und andere Schreibungen an und wähle eine Kanji-Kachel, um dieses Kanji zu öffnen. Unter einer Bedeutung kannst du einen Beispielsatz aufklappen.",
            menu: "Das ⋮-Menü neben einem Wort hat den Rest: die Konjugationstabelle, Kollokationen, das transitive oder intransitive Gegenstück, Sätze mit dem Wort, einen Audio-Download, „In JMdict bearbeiten“, „Link kopieren“ und die Detailseite.",
            furigana:
                "Doppelklicke auf die Furigana über einem Wort, um seine Lesung zu kopieren. „{{setting}}“ in den <link>Einstellungen</link> schaltet das ein oder aus.",
        },
        kanji: {
            title: "Kanji",
            text: "Spiele die Strichfolge ab, gehe sie Schritt für Schritt durch oder ändere ihr Tempo. Wähle das große Kanji aus, um seine Bestandteile zu sehen. Komposita sind nach Lesung gruppiert, und eine Lesung auszuwählen listet die Wörter, die sie nutzen. Radikal, Bestandteile und ähnliche Kanji sind Links, du kannst also weiterstöbern. Lesungen auf Chinesisch, Koreanisch und Vietnamesisch lassen sich ebenfalls anzeigen.",
        },
        sentences: {
            title: "Sätze",
            text: "Das Label zeigt, woher ein Satz stammt. Sein Menü öffnet den Satz in der Satzzerlegung, um seine Wörter nachzuschlagen, öffnet ihn auf Tatoeba oder kopiert einen Link darauf.",
        },
        names: {
            title: "Namen",
            text: "Namensergebnisse zeigen die Lesung, eine Umschrift und, wo bekannt, das Geschlecht und die Herkunft des Namens.",
        },
        sharing: {
            title: "Detailseiten und Links",
            pages: "Wörter und Sätze haben eine eigene Detailseite mit Tabs für Kanji, Sätze, Kollokationen und Konjugationen sowie einem Teilen-Button.",
            links: "Suchlinks behalten den Suchtyp, die Seite, das in der Satzzerlegung gewählte Wort und deine Wortgrenzen. Ist „{{setting}}“ in den Einstellungen eingeschaltet, sehen alle, die deinen Link öffnen, dieselbe Suchsprache wie du.",
        },
    },
    shortcuts: {
        title: "Schneller mit der Tastatur",
        lead: "Am Computer kannst du das meiste in Jotoba ohne Maus bedienen. Einzeltasten-Kürzel funktionieren nicht, während du in ein Textfeld tippst.",
        off: "Tastenkürzel sind in diesem Browser ausgeschaltet. Die Standardtasten funktionieren weiterhin.",
        turnOn: "Einschalten",
        anywhere: "Überall",
        results: "Auf Ergebnisseiten",
        searchBar: "In der Suchleiste",
        playAudio: "Das erste Audio auf der Seite abspielen",
        pages: "Zu Seite 1 bis 9 springen",
        change: "Du kannst diese Kürzel unter <link>{{page}}</link> ändern oder ausschalten. Änderungen gelten nur für diesen Browser.",
        standard: {
            title: "Standardtasten",
            text: "Diese Tasten folgen üblichen Tastaturkonventionen, funktionieren deshalb wie auf anderen Seiten und lassen sich nicht ändern.",
        },
        list: {
            off: "Aus",
            or: "oder",
            to: "bis",
        },
    },
    bookmarks: {
        title: "Wörter speichern und Jotoba anpassen",
        lead: "Zwei Stellen im Menü passen Jotoba an die Art an, wie du lernst.",
        bookmarks: {
            title: "Lesezeichen",
            text: "Speichere Wörter und Sätze in eigenen Listen und füge Notizen hinzu. Ohne Konto bleiben sie in diesem Browser, mit Konto werden sie mit jedem Gerät synchronisiert, auf dem du dich anmeldest. Nutze den Lesezeichen-Button auf einer Detailseite und finde deine Listen unter <link>{{menu}}</link> im Menü.",
            textLocal:
                "Speichere Wörter und Sätze in eigenen Listen und füge Notizen hinzu. Sie bleiben in diesem Browser. Nutze den Lesezeichen-Button auf einer Detailseite und finde deine Listen unter <link>{{menu}}</link> im Menü.",
        },
        settings: {
            title: "Einstellungen",
            intro: "Ein paar Optionen, die sich lohnen:",
            language:
                "<link>{{setting}}</link>: Bedeutungen in einer anderen Sprache suchen und lesen, etwa auf Deutsch. „{{alwaysEnglish}}“ ergänzt zusätzlich die englischen Bedeutungen.",
            hideTranslation: "<link>{{setting}}</link>: jeden Beispielsatz erst lesen, bevor du seine Übersetzung siehst.",
            kanji: "<link>{{setting}}</link>: welche Teile von Wörtern und Kanji angezeigt werden, etwa Lesungen, Tonhöhenakzent oder die Strichfolge, und wie die Strichfolge-Animation abläuft.",
            theme: "<link>{{setting}}</link>: dem System folgen oder immer hell oder dunkel.",
            languageInLinks: "<link>{{setting}}</link>: Links, die du teilst, öffnen sich in derselben Suchsprache.",
        },
    },
    flashcards: {
        title: "Mit Karteikarten lernen",
        lead: "Jede Lesezeichenliste kann ein Kartenstapel werden. Jotoba plant die Karten mit FSRS, damit jede kurz bevor du sie vergessen würdest wiederkommt.",
        start: {
            title: "Eine Liste starten",
            text: "Öffne eine Liste und wähle „Lernen starten“. Du legst fest, wie viele neue Karten pro Tag dazukommen. Der Fortschritt gilt nur für diese Liste: Ein Wort in zwei Listen lernst du in jeder.",
            kinds: "Ein Wort hat bis zu drei Arten von Karten: Bedeutung, Lesung und Abruf. Die nächste Art beginnt erst, wenn du die vorige an einem früheren Tag gewusst hast.",
        },
        rating: {
            title: "Eine Karte bewerten",
            text: "Überleg dir die Antwort und deck sie dann auf. Wähle „Nochmal“, wenn du sie nicht wusstest, sonst „Gewusst“. Sei ehrlich: Die Zeit auf den Buttons zeigt, wann die Karte wiederkommt. Vergessene Karten kommen ein paar Karten später in derselben Runde wieder. Ein neues Wort, das du schon kanntest, bekommt „Kannte ich schon“.",
            fine: "<link>{{setting}}</link> ergänzt „Schwer“ und „Leicht“. „Schwer“ zählt als gewusst.",
        },
        stages: {
            title: "Stufen und Erinnerung",
            text: "Jedes Wort steht in der Stufe seiner schwächsten begonnenen Art, bis zur ersten auf „Neu“: „Am Lernen“, solange die Merkdauer unter einer Woche liegt, „Sitzt“ bis zu zwei Monaten, danach „Gemeistert“.",
            memory: "Erinnerung: wie wahrscheinlich du die Karte gerade weißt. Sie sinkt jeden Tag etwas, bis du die Karte wiederholst.",
            span: "Merkdauer: wie viele Tage es dauert, bis du die Karte nur noch 9 von 10 Mal weißt. Jede richtige Wiederholung macht sie länger.",
            retention:
                "<link>{{setting}}</link>: Karten kommen wieder, wenn deine Erinnerung an sie auf diesen Wert sinkt. Höher heißt mehr Wiederholungen.",
        },
        fewer: {
            title: "Warum weniger Karten kommen",
            intro: "Manchmal zeigt eine Liste weniger fällige oder neue Karten, als du erwartest. Die Übersicht nennt die Gründe:",
            resting:
                "Jedes Wort kommt höchstens einmal pro Lerntag dran. Seine anderen fälligen Karten ruhen bis morgen. Ein Lerntag beginnt um 4 Uhr.",
            waiting: "Lesungs- und Abrufkarten warten, bis du die vorige Art an einem früheren Tag gewusst hast.",
            limit: "Neue Karten enden beim Tageslimit der Liste.",
            backlog:
                "Warten mehr Wiederholungen, als zwei Runden schaffen, pausieren neue Karten, bis du aufgeholt hast. Zuerst kommen die Karten, die du am ehesten noch weißt. Für einen Tag kannst du neue Karten trotzdem zulassen.",
        },
        practice: {
            title: "Wenn nichts fällig ist",
            ahead: "„Karten vorziehen“ nimmt Karten, die noch nicht fällig sind, die wackeligsten zuerst, aber keine, die du heute schon bewertet hast. Das zählt wie eine Wiederholung: Gewusste kommen etwas später wieder, Vergessene früher.",
            browse: "„Nur ansehen“ blättert durch die Karten, ohne sie zu bewerten. Das ändert nichts.",
        },
        tricky: {
            title: "Knifflige Wörter",
            text: "Ein Wort, das du dreimal vergessen hast (änderbar in den Lern-Einstellungen), gilt als knifflig. Nach acht Mal schlägt die Wortliste vor, eine eigene Eselsbrücke in die Notiz zu schreiben. Das hilft oft mehr als weitere Runden.",
            actions:
                "In den Details eines Worts kannst du es pausieren, dann kommt es nicht mehr in Runden, oder zurücksetzen, dann beginnt es als neue Karte von vorn. Sein Verlauf bleibt.",
        },
    },
    offline: {
        title: "Ohne Internet suchen",
        lead: "Die App kann das Wörterbuch auf deinem Gerät speichern. Dann schlägst du Wörter auch im Zug, im Ausland oder überall ohne Verbindung nach.",
        download: {
            title: "Das Wörterbuch herunterladen",
            text: "Lade es einmal unter <link>Offline-Wörterbuch</link> im Menü herunter. Die Größe siehst du vor dem Start, und über mobile Daten fragt die App vorher nach. Von selbst wird nichts heruntergeladen.",
        },
        works: {
            title: "Was offline geht",
            intro: "Sobald es auf deinem Gerät ist, geht das ohne Verbindung:",
            words: "Wörter suchen, mit Vorschlägen beim Tippen",
            details: "Wortdetails, ohne Satzsuche und Aufnahmen",
            kanji: "Kanji, die Radikalsuche und die Strichfolge",
            voice: "<link>{{setting}}</link>: Wo es keine Aufnahme gibt, liest die japanische Stimme deines Geräts Wörter und Sätze vor.",
        },
        needs: {
            title: "Was Internet braucht",
            intro: "Manches geht nur online:",
            sentencesNames: "Die Satz- und die Namenssuche",
            recordings: "Audio-Aufnahmen",
            reader: "Ganze Sätze in Wörter zerlegen. Offline suchst du Wort für Wort.",
            query: "Platzhalter (* und ?), Hashtags und Anführungszeichen in einer Suche",
        },
        now: {
            title: "Wenn du offline bist",
            chip: "Ohne Verbindung erscheint oben „Offline“. Tipp darauf, um zu sehen, was gerade geht.",
            results:
                "Die Ergebnisse kommen dann von deinem Gerät und sind als Offline-Ergebnisse markiert. Die Reihenfolge kann online anders sein, und Tippfehler werden nicht korrigiert.",
            english: "Offline gibt es die Bedeutungen vorerst nur auf Englisch.",
        },
        updates: {
            title: "Updates und Speicher",
            text: "Die App aktualisiert das Wörterbuch nie von selbst. Gibt es neue Daten, bieten die Startseite und die Seite Offline-Wörterbuch sie an, und du entscheidest, wann du sie herunterlädst.",
            manage: "Unter <link>Offline-Wörterbuch</link> im Menü kannst du außerdem nach Updates suchen, prüfen, ob die Daten vollständig sind, oder sie löschen, um Speicher freizugeben.",
        },
    },
    moreHelp: {
        title: "Weitere Hilfe",
        lead: "Du hast eine Frage, die diese Seite nicht beantwortet, oder etwas funktioniert nicht wie erwartet?",
        ask: "Frag auf <discord>Discord</discord> oder <reddit>Reddit</reddit>. Die <trello>Roadmap auf Trello</trello> zeigt, woran wir gerade arbeiten. Ist ein Wörterbucheintrag selbst falsch, nutze „In JMdict bearbeiten“ im ⋮-Menü des Worts.",
        tour: "Die Tour startest du jederzeit wieder über „{{menu}}“ im Menü. Jotoba gibt es auch als <app>Android-App</app>.",
    },
} satisfies PartialDict<typeof en>;
