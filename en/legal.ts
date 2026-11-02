import type { Dict } from "../types";

export default {
    englishOnly: "This text is only available in English.",
    imprint: {
        title: "Imprint",
        description: "Imprint and legal information about Jotoba.",
        contact: "Contact information",
        email: "Email: <link>{{email}}</link>",
    },
    privacy: {
        title: "Privacy policy",
        heading: "Privacy Policy for Jotoba.de",
        description: "What data Jotoba stores, why, and how you can change or delete it.",
        lastUpdated: "Last updated: {{date}}",
    },
    terms: {
        title: "Terms of use",
        heading: "Terms of Use",
        description: "The terms for using the Jotoba dictionary and its data.",
        lastUpdated: "Last updated: {{date}}",
    },
} as const satisfies Dict;
