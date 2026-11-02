import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "Ce texte n’est disponible qu’en anglais.",
    imprint: {
        title: "Mentions légales",
        description: "Mentions légales et informations juridiques sur Jotoba.",
        contact: "Coordonnées",
        email: "E-mail : <link>{{email}}</link>",
    },
    privacy: {
        title: "Politique de confidentialité",
        heading: "Politique de confidentialité de Jotoba.de",
        description: "Les données que Jotoba enregistre, pourquoi, et comment les modifier ou les supprimer.",
        lastUpdated: "Dernière mise à jour : {{date}}",
    },
    terms: {
        title: "Conditions d’utilisation",
        heading: "Conditions d’utilisation",
        description: "Les conditions d’utilisation du dictionnaire Jotoba et de ses données.",
        lastUpdated: "Dernière mise à jour : {{date}}",
    },
} satisfies PartialDict<typeof en>;
