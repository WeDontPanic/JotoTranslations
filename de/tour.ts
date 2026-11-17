import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "In alle Richtungen suchen",
            description:
                "Gib Englisch, Japanisch, Kana oder Romaji ein. Schon beim Tippen erscheinen Vorschläge, und Hashtags wie #n5 grenzen die Ergebnisse ein. Probier es mit 猫 (Katze) aus.",
            descriptionVoice:
                "Gib Englisch, Japanisch, Kana oder Romaji ein oder tippe aufs Mikrofon, um per Sprache zu suchen. Schon beim Tippen erscheinen Vorschläge, und Hashtags wie #n5 grenzen die Ergebnisse ein. Probier es mit 猫 (Katze) aus.",
            shortcut: "Zur Suchleiste springen",
        },
        details: {
            title: "Jedes Wort hat eine eigene Seite",
            description:
                "Wähle ein Wort, um seine Seite mit allen Bedeutungen, seinen Kanji, Beispielsätzen und Konjugationen zu öffnen.",
            descriptionStatic:
                "Wähle in den Ergebnissen ein Wort, um seine Seite mit allen Bedeutungen, seinen Kanji, Beispielsätzen und Konjugationen zu öffnen.",
        },
        bookmark: {
            title: "Wörter für später merken",
            description:
                "Der Lesezeichen-Knopf speichert ein Wort in einer Liste. Unter ⋮ findest du Konjugationen, Beispielsätze und einen Link zum Teilen.",
            descriptionMenu:
                "Öffne ⋮ neben einem Wort, um ein Lesezeichen zu setzen, seine Konjugationen zu sehen, Beispielsätze zu finden oder einen Link zu kopieren.",
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
        type: {
            title: "Wählen, was du suchst",
            description:
                "Das Menü neben dem Suchfeld wechselt zwischen Wörtern, Kanji, Beispielsätzen und Namen. Hier siehst du die Kanji von 猫.",
            descriptionStatic: "Das Menü neben dem Suchfeld wechselt zwischen Wörtern, Kanji, Beispielsätzen und Namen.",
            shortcut: "Auf Ergebnisseiten wechseln",
        },
        settings: {
            title: "Lesezeichen, Einstellungen und Hilfe",
            description:
                "Öffne das Menü für deine Lesezeichen, die Einstellungen, News und die Hilfeseite, auf der du diese Tour neu starten kannst. Die Spracheinstellungen kannst du gleich hier ausprobieren, Änderungen wirken sofort.",
            descriptionSearchOnly:
                "Öffne das Menü für deine Lesezeichen, die Einstellungen, News und die Hilfeseite, auf der du diese Tour neu starten kannst. Die Suchsprache kannst du gleich hier ausprobieren, Änderungen wirken sofort.",
        },
    },
    menuHint: {
        text: "Wörter, die du als Lesezeichen speicherst, findest du unter Lesezeichen. Dort kannst du jede Liste auch mit Karteikarten lernen.",
        done: "Fertig",
    },
    languages: {
        group: "Sprachen",
    },
    progress: "{{current}} von {{total}}",
    announce: "Schritt {{current}} von {{total}}. {{title}}. {{description}}",
    announceResumed: "Zurück in der Tour. Schritt {{current}} von {{total}}.",
    close: "Tour schließen",
    back: "Zurück",
    next: "Weiter",
    done: "Fertig",
    searchExample: "{{query}} suchen",
    searching: "Suche läuft…",
    loading: "Wird geladen…",
    openMenu: "Menü öffnen",
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
            bookmark: "Lesezeichen setzen",
            conjugations: "Konjugationen",
            sentenceSearch: "Satzsuche",
            copyLink: "Link kopieren",
        },
    },
} satisfies PartialDict<typeof en>;
