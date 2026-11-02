import type en from "../en/legal";
import type { PartialDict } from "../types";

export default {
    englishOnly: "Este texto solo está disponible en inglés.",
    imprint: {
        title: "Aviso legal",
        description: "Aviso legal e información jurídica sobre Jotoba.",
        contact: "Datos de contacto",
        email: "Correo electrónico: <link>{{email}}</link>",
    },
    privacy: {
        title: "Política de privacidad",
        heading: "Política de privacidad de Jotoba.de",
        description: "Qué datos guarda Jotoba, por qué y cómo puedes cambiarlos o borrarlos.",
        lastUpdated: "Última actualización: {{date}}",
    },
    terms: {
        title: "Condiciones de uso",
        heading: "Condiciones de uso",
        description: "Las condiciones para usar el diccionario Jotoba y sus datos.",
        lastUpdated: "Última actualización: {{date}}",
    },
} satisfies PartialDict<typeof en>;
