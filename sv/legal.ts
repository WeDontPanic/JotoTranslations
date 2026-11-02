import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "Den här texten finns bara på engelska.",
    imprint: {
        title: "Kontaktuppgifter",
        description: "Kontaktuppgifter och juridisk information om Jotoba.",
        contact: "Kontakt",
        email: "E-post: <link>{{email}}</link>",
    },
    privacy: {
        title: "Integritetspolicy",
        heading: "Integritetspolicy för Jotoba.de",
        description: "Vilka data Jotoba sparar, varför, och hur du kan ändra eller radera dem.",
        lastUpdated: "Senast uppdaterad: {{date}}",
    },
    terms: {
        title: "Användarvillkor",
        heading: "Användarvillkor",
        description: "Villkoren för att använda Jotobas ordbok och dess data.",
        lastUpdated: "Senast uppdaterad: {{date}}",
    },
} satisfies PartialDict<typeof en>;
