import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Logga in",
        register: "Skapa konto",
    },
    email: {
        label: "E-post",
        placeholder: "du@exempel.se",
    },
    username: {
        label: "Användarnamn",
        placeholder: "3–20 tecken",
    },
    password: {
        label: "Lösenord",
        placeholderLogin: "Ditt lösenord",
        placeholderRegister: "Minst 8 tecken",
        forgot: "Glömt lösenordet?",
    },
    repeat: {
        label: "Upprepa lösenordet",
        placeholder: "Skriv lösenordet igen",
    },
    strength: {
        tooWeak: "För svagt",
        weak: "Svagt",
        okay: "Okej",
        good: "Bra",
        strong: "Starkt",
    },
    errors: {
        emailRequired: "E-post krävs",
        emailInvalid: "Ange en giltig e-postadress",
        emailTaken: "Den här e-postadressen är redan registrerad",
        usernameRequired: "Användarnamn krävs",
        usernameTooShort: "Användarnamnet är för kort",
        usernameTooLong: "Användarnamnet är för långt",
        usernameTaken: "Det här användarnamnet är redan upptaget",
        passwordRequired: "Lösenord krävs",
        passwordTooShort: "Måste vara minst 8 tecken",
        passwordTooLong: "Lösenordet är för långt",
        passwordWeak: "Det här lösenordet är för svagt",
        repeatRequired: "Upprepa ditt lösenord",
        repeatMismatch: "Lösenorden matchar inte",
        wrongLogin: "Fel e-post eller lösenord",
        rateLimited: "För många försök. Vänta en stund och försök igen.",
        network: "Det går inte att nå servern. Försök igen.",
        unknown: "Något gick fel. Försök igen.",
    },
    submit: {
        login: "Logga in",
        register: "Skapa konto",
        loginPending: "Loggar in…",
        registerPending: "Skapar konto…",
    },
    legal: "Genom att skapa ett konto godkänner du <terms>användarvillkoren</terms> och <privacy>integritetspolicyn</privacy>.",
    switch: {
        hasAccount: "Har du redan ett konto?",
        noAccount: "Inget konto än?",
        login: "Logga in",
        register: "Skapa konto",
    },
    toast: {
        welcome: "Välkommen till Jotoba, {{name}}!",
        signedInAs: "Inloggad som {{name}}",
        signedIn: "Inloggad",
    },
} satisfies PartialDict<typeof en>;
