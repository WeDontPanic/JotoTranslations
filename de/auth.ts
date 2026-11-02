import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Anmelden",
        register: "Registrieren",
    },
    email: {
        label: "E-Mail",
        placeholder: "du@beispiel.de",
    },
    username: {
        label: "Benutzername",
        placeholder: "3–20 Zeichen",
    },
    password: {
        label: "Passwort",
        placeholderLogin: "Dein Passwort",
        placeholderRegister: "Mindestens 8 Zeichen",
        forgot: "Passwort vergessen?",
    },
    repeat: {
        label: "Passwort wiederholen",
        placeholder: "Passwort noch einmal eingeben",
    },
    strength: {
        tooWeak: "Zu schwach",
        weak: "Schwach",
        okay: "Okay",
        good: "Gut",
        strong: "Stark",
    },
    errors: {
        emailRequired: "E-Mail fehlt",
        emailInvalid: "Gib eine gültige E-Mail-Adresse ein",
        emailTaken: "Diese E-Mail ist schon registriert",
        usernameRequired: "Benutzername fehlt",
        usernameTooShort: "Benutzername ist zu kurz",
        usernameTooLong: "Benutzername ist zu lang",
        usernameTaken: "Dieser Benutzername ist schon vergeben",
        passwordRequired: "Passwort fehlt",
        passwordTooShort: "Mindestens 8 Zeichen",
        passwordTooLong: "Passwort ist zu lang",
        passwordWeak: "Dieses Passwort ist zu schwach",
        repeatRequired: "Bitte wiederhole dein Passwort",
        repeatMismatch: "Die Passwörter stimmen nicht überein",
        wrongLogin: "E-Mail oder Passwort falsch",
        rateLimited: "Zu viele Versuche. Bitte warte kurz und versuche es dann noch einmal.",
        network: "Der Server ist nicht erreichbar. Bitte versuche es noch einmal.",
        unknown: "Etwas ist schiefgelaufen. Bitte versuche es noch einmal.",
    },
    submit: {
        login: "Anmelden",
        register: "Konto erstellen",
        loginPending: "Wird angemeldet…",
        registerPending: "Konto wird erstellt…",
    },
    legal: "Mit der Registrierung stimmst du den <terms>Nutzungsbedingungen</terms> und der <privacy>Datenschutzerklärung</privacy> zu.",
    switch: {
        hasAccount: "Schon ein Konto?",
        noAccount: "Noch kein Konto?",
        login: "Anmelden",
        register: "Registrieren",
    },
    toast: {
        welcome: "Willkommen bei Jotoba, {{name}}!",
        signedInAs: "Angemeldet als {{name}}",
        signedIn: "Angemeldet",
    },
} satisfies PartialDict<typeof en>;
