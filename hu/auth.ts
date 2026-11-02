import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Bejelentkezés",
        register: "Regisztráció",
    },
    email: {
        label: "E-mail",
        placeholder: "te@example.com",
    },
    username: {
        label: "Felhasználónév",
        placeholder: "3–20 karakter",
    },
    password: {
        label: "Jelszó",
        placeholderLogin: "A jelszavad",
        placeholderRegister: "Legalább 8 karakter",
        forgot: "Elfelejtetted a jelszavad?",
    },
    repeat: {
        label: "Jelszó újra",
        placeholder: "Írd be újra a jelszavad",
    },
    strength: {
        tooWeak: "Túl gyenge",
        weak: "Gyenge",
        okay: "Elfogadható",
        good: "Jó",
        strong: "Erős",
    },
    errors: {
        emailRequired: "Az e-mail-cím kötelező",
        emailInvalid: "Adj meg egy érvényes e-mail-címet",
        emailTaken: "Ez az e-mail-cím már regisztrálva van",
        usernameRequired: "A felhasználónév kötelező",
        usernameTooShort: "A felhasználónév túl rövid",
        usernameTooLong: "A felhasználónév túl hosszú",
        usernameTaken: "Ez a felhasználónév már foglalt",
        passwordRequired: "A jelszó kötelező",
        passwordTooShort: "Legalább 8 karakter legyen",
        passwordTooLong: "A jelszó túl hosszú",
        passwordWeak: "Ez a jelszó túl gyenge",
        repeatRequired: "Írd be újra a jelszavad",
        repeatMismatch: "A jelszavak nem egyeznek",
        wrongLogin: "Hibás e-mail-cím vagy jelszó",
        rateLimited: "Túl sok próbálkozás. Várj egy kicsit, és próbáld újra.",
        network: "A szerver nem érhető el. Próbáld újra.",
        unknown: "Valami hiba történt. Próbáld újra.",
    },
    submit: {
        login: "Bejelentkezés",
        register: "Fiók létrehozása",
        loginPending: "Bejelentkezés…",
        registerPending: "Fiók létrehozása…",
    },
    legal: "A regisztrációval elfogadod a <terms>Felhasználási feltételeket</terms> és az <privacy>Adatvédelmi tájékoztatót</privacy>.",
    switch: {
        hasAccount: "Már van fiókod?",
        noAccount: "Még nincs fiókod?",
        login: "Bejelentkezés",
        register: "Regisztráció",
    },
    toast: {
        welcome: "Üdv a Jotobában, {{name}}!",
        signedInAs: "Bejelentkezve: {{name}}",
        signedIn: "Bejelentkeztél",
    },
} satisfies PartialDict<typeof en>;
