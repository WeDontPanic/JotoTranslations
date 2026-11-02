import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Inloggen",
        register: "Registreren",
    },
    email: {
        label: "E-mail",
        placeholder: "jij@example.com",
    },
    username: {
        label: "Gebruikersnaam",
        placeholder: "3–20 tekens",
    },
    password: {
        label: "Wachtwoord",
        placeholderLogin: "Je wachtwoord",
        placeholderRegister: "Minstens 8 tekens",
        forgot: "Wachtwoord vergeten?",
    },
    repeat: {
        label: "Wachtwoord herhalen",
        placeholder: "Herhaal je wachtwoord",
    },
    strength: {
        tooWeak: "Te zwak",
        weak: "Zwak",
        okay: "Redelijk",
        good: "Goed",
        strong: "Sterk",
    },
    errors: {
        emailRequired: "E-mailadres is verplicht",
        emailInvalid: "Voer een geldig e-mailadres in",
        emailTaken: "Dit e-mailadres is al geregistreerd",
        usernameRequired: "Gebruikersnaam is verplicht",
        usernameTooShort: "Gebruikersnaam is te kort",
        usernameTooLong: "Gebruikersnaam is te lang",
        usernameTaken: "Deze gebruikersnaam is al in gebruik",
        passwordRequired: "Wachtwoord is verplicht",
        passwordTooShort: "Moet minstens 8 tekens lang zijn",
        passwordTooLong: "Wachtwoord is te lang",
        passwordWeak: "Dit wachtwoord is te zwak",
        repeatRequired: "Herhaal je wachtwoord",
        repeatMismatch: "Wachtwoorden komen niet overeen",
        wrongLogin: "Onjuist e-mailadres of wachtwoord",
        rateLimited: "Te veel pogingen. Wacht even en probeer het opnieuw.",
        network: "De server is niet bereikbaar. Probeer het opnieuw.",
        unknown: "Er is iets misgegaan. Probeer het opnieuw.",
    },
    submit: {
        login: "Inloggen",
        register: "Account aanmaken",
        loginPending: "Inloggen…",
        registerPending: "Account aanmaken…",
    },
    legal: "Door je te registreren ga je akkoord met de <terms>gebruiksvoorwaarden</terms> en de <privacy>privacyverklaring</privacy>.",
    switch: {
        hasAccount: "Heb je al een account?",
        noAccount: "Nog geen account?",
        login: "Inloggen",
        register: "Registreren",
    },
    toast: {
        welcome: "Welkom bij Jotoba, {{name}}!",
        signedInAs: "Ingelogd als {{name}}",
        signedIn: "Ingelogd",
    },
} satisfies PartialDict<typeof en>;
