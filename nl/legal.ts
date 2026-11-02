import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "Deze tekst is alleen in het Engels beschikbaar.",
    imprint: {
        title: "Colofon",
        description: "Colofon en juridische informatie over Jotoba.",
        contact: "Contactgegevens",
        email: "E-mail: <link>{{email}}</link>",
    },
    privacy: {
        title: "Privacyverklaring",
        heading: "Privacyverklaring van Jotoba.de",
        description: "Welke gegevens Jotoba opslaat, waarom, en hoe je ze kunt wijzigen of verwijderen.",
        lastUpdated: "Laatst bijgewerkt: {{date}}",
    },
    terms: {
        title: "Gebruiksvoorwaarden",
        heading: "Gebruiksvoorwaarden",
        description: "De voorwaarden voor het gebruik van het Jotoba-woordenboek en zijn gegevens.",
        lastUpdated: "Laatst bijgewerkt: {{date}}",
    },
} satisfies PartialDict<typeof en>;
