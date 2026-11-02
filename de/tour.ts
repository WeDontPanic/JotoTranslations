import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "In alle Richtungen suchen",
            description:
                "Gib Englisch, Japanisch, Kana oder Romaji ein. Schon beim Tippen erscheinen Vorschläge, und Hashtags wie #n5 grenzen die Ergebnisse ein.",
            descriptionVoice:
                "Gib Englisch, Japanisch, Kana oder Romaji ein oder tippe aufs Mikrofon, um per Sprache zu suchen. Schon beim Tippen erscheinen Vorschläge, und Hashtags wie #n5 grenzen die Ergebnisse ein.",
            shortcut: "Zur Suchleiste springen",
        },
        type: {
            title: "Wählen, was du suchst",
            description: "Das Menü neben dem Suchfeld wechselt zwischen Wörtern, Kanji, Beispielsätzen und Namen.",
            shortcut: "Auf Ergebnisseiten wechseln",
        },
        radicals: {
            title: "Kanji über ihre Teile finden",
            description:
                "Du kannst ein Kanji nicht lesen? Öffne 部, wähle die Radikale, die du erkennst, und Jotoba zeigt passende Kanji.",
        },
        reader: {
            title: "Ganze Sätze lesen",
            description:
                "Suche nach einem ganzen japanischen Satz und Jotoba zerlegt ihn in Wörter. Wähle ein Wort, um seine Grundform und seine Konjugation zu sehen.",
        },
        wordMenu: {
            title: "Mehr zu jedem Ergebnis",
            description:
                "Öffne ⋮ neben einem Wort für Konjugationen, Beispielsätze, einen Link zum Teilen und die Detailseite, auf der du es als Lesezeichen speichern kannst.",
        },
        settings: {
            title: "Einstellungen und Hilfe",
            description:
                "Im Menü findest du deine Lesezeichen, die Einstellungen, News und die Hilfeseite. Dort kannst du alles über jede Funktion nachlesen und diese Tour neu starten. Die Spracheinstellungen kannst du gleich hier ausprobieren, Änderungen wirken sofort.",
            descriptionSearchOnly:
                "Im Menü findest du deine Lesezeichen, die Einstellungen, News und die Hilfeseite. Dort kannst du alles über jede Funktion nachlesen und diese Tour neu starten. Die Suchsprache kannst du gleich hier ausprobieren, Änderungen wirken sofort.",
        },
    },
    languages: {
        group: "Sprachen",
    },
    progress: "{{current}} von {{total}}",
    announce: "Schritt {{current}} von {{total}}. {{title}}. {{description}}",
    close: "Tour schließen",
    back: "Zurück",
    next: "Weiter",
    done: "Fertig",
    preview: {
        types: {
            words: "Wörter",
            kanji: "Kanji",
            sentences: "Sätze",
            names: "Namen",
        },
        gloss: "essen",
        form: "Vergangenheit, höflich",
        wordMenu: {
            conjugations: "Konjugationen",
            sentenceSearch: "Satzsuche",
            copyLink: "Link kopieren",
            details: "Details",
        },
    },
} satisfies PartialDict<typeof en>;
