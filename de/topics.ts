import type en from "../en/topics";
import type { PartialDict } from "../types";

export default {
    title: "Themen",
    intro: "Wortlisten zum Stöbern: der Wortschatz jedes JLPT-Niveaus, Redensarten und Lautwörter sowie die drei Formen des Keigo, der höflichen Sprache.",
    metaTitle: "Japanische Wortlisten nach Thema",
    metaDescription: "Stöbere im japanischen Wortschatz nach JLPT-Niveau oder Thema: Vier-Kanji-Ausdrücke, Sprichwörter, Redewendungen, Lautmalereien und Keigo.",
    back: "Themen",
    groups: {
        jlpt: "JLPT-Wortschatz",
        sayings: "Redensarten und Lautwörter",
        keigo: "Keigo (höfliche Sprache)",
    },
    openSearch: "Als Suche öffnen",
    exampleLabel: "Beispiel",
    more: "Weitere Themen",
    topWords: "Angezeigt werden die 1000 häufigsten Wörter.",
    notFound: "Dieses Thema gibt es nicht.",
    allTopics: "Alle Themen",
    showTopic: "Alle Wörter: {{name}}",
    items: {
        "jlpt-n5": {
            name: "JLPT-N5-Wortschatz",
            short: "Die ersten Wörter: Grundlagen für den Alltag.",
            intro: "Wörter des leichtesten Niveaus des Japanese-Language Proficiency Test (JLPT): Zahlen, Familie, Essen und die Verben des Alltags. Ein guter Einstieg, sobald du Hiragana und Katakana kannst.",
        },
        "jlpt-n4": {
            name: "JLPT-N4-Wortschatz",
            short: "Grundwortschatz für einfache Gespräche.",
            intro: "Wörter des zweitleichtesten JLPT-Niveaus. Mit ihnen erzählst du in einfachen Sätzen von deinem Tag, deinen Plänen und Gefühlen.",
        },
        "jlpt-n3": {
            name: "JLPT-N3-Wortschatz",
            short: "Alltagsjapanisch zwischen Grundlagen und fließendem Sprechen.",
            intro: "Wörter des mittleren JLPT-Niveaus. Damit folgst du alltäglichen Texten und Gesprächen in natürlichem Tempo, mit etwas Hilfe.",
        },
        "jlpt-n2": {
            name: "JLPT-N2-Wortschatz",
            short: "Wörter für Nachrichten, Beruf und längere Texte.",
            intro: "Wörter des zweithöchsten JLPT-Niveaus. Sie decken Nachrichten, das Berufsleben und längere Texte zu allgemeinen Themen ab.",
        },
        "jlpt-n1": {
            name: "JLPT-N1-Wortschatz",
            short: "Fortgeschrittener und förmlicher Wortschatz.",
            intro: "Wörter des höchsten JLPT-Niveaus: abstraktes, förmliches und literarisches Vokabular für anspruchsvolle Texte.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Ausdrücke aus vier Kanji.",
            intro: "Zusammensetzungen aus vier Kanji, viele davon aus chinesischen Klassikern. Sie fassen eine Lehre oder ein Bild in vier Zeichen und sind in Reden, in der Schule und in Quizshows beliebt.",
            example: "einmalige Begegnung im Leben",
        },
        onomatopoeia: {
            name: "Lautmalereien",
            short: "Wörter, die Geräusche, Zustände und Gefühle nachahmen.",
            intro: "Das Japanische kennt Tausende Lautwörter (Giongo) und Wörter, die zeigen, wie etwas aussieht oder sich anfühlt (Gitaigo). In Gesprächen und Manga begegnen sie dir ständig, oft mit と oder する.",
            example: "funkelnd, glitzernd",
        },
        proverbs: {
            name: "Sprichwörter",
            short: "Redensarten, die eine Lebensweisheit weitergeben.",
            intro: "Kotowaza sind Sprichwörter mit einer Lehre, die man meist als Ganzes zitiert. Viele haben ein deutsches Gegenstück, nur mit japanischen Bildern.",
            example: "Auch Affen fallen von Bäumen.",
        },
        idioms: {
            name: "Redewendungen",
            short: "Ausdrücke, deren Bedeutung nicht in ihren Wörtern steckt.",
            intro: "Kan'yōku sind feste Wendungen, oft mit Körperteilen oder Tieren, deren Sinn sich nicht Wort für Wort erschließt. Lerne sie am besten als Ganzes.",
            example: "so beschäftigt, dass man sogar eine Katze um Hilfe bitten würde",
        },
        sonkeigo: {
            name: "Sonkeigo (Respektsprache)",
            short: "Wörter, die die handelnde Person erhöhen.",
            intro: "Respektvolle Wörter erhöhen die Person, die handelt, meist dein Gegenüber oder jemanden mit höherem Status. Verwende sie nie für dich selbst.",
            example: "kommen, gehen, sein (respektvoll)",
        },
        kenjougo: {
            name: "Kenjōgo (Bescheidenheitssprache)",
            short: "Wörter, mit denen du dich aus Respekt zurücknimmst.",
            intro: "Bescheidene Wörter stellen dich oder deine Gruppe zurück, um deinem Gegenüber Respekt zu zeigen. Verwende sie nur für deine eigenen Handlungen.",
            example: "gehen, kommen (bescheiden)",
        },
        teineigo: {
            name: "Teineigo (Höflichkeitssprache)",
            short: "Der höfliche Stil für Menschen, die du nicht gut kennst.",
            intro: "Höfliche Wörter und Formen wie です und ます für Fremde, Kundschaft und Kollegen. Die sichere Wahl, wenn du unsicher bist.",
            example: "es gibt, es ist (höflich)",
        },
    },
} satisfies PartialDict<typeof en>;
