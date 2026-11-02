import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "Dieser Text ist nur auf Englisch verfügbar.",
    imprint: {
        title: "Impressum",
        description: "Impressum und rechtliche Angaben zu Jotoba.",
        contact: "Kontaktdaten",
        email: "E-Mail: <link>{{email}}</link>",
    },
    privacy: {
        title: "Datenschutzerklärung",
        heading: "Datenschutzerklärung für Jotoba.de",
        description: "Welche Daten Jotoba speichert, warum, und wie du sie ändern oder löschen kannst.",
        lastUpdated: "Zuletzt aktualisiert: {{date}}",
    },
    terms: {
        title: "Nutzungsbedingungen",
        heading: "Nutzungsbedingungen",
        description: "Die Bedingungen für die Nutzung des Jotoba-Wörterbuchs und seiner Daten.",
        lastUpdated: "Zuletzt aktualisiert: {{date}}",
    },
} satisfies PartialDict<typeof en>;
