import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Prijava",
        register: "Registracija",
    },
    email: {
        label: "E-pošta",
        placeholder: "ime@primer.si",
    },
    username: {
        label: "Uporabniško ime",
        placeholder: "3–20 znakov",
    },
    password: {
        label: "Geslo",
        placeholderLogin: "Vaše geslo",
        placeholderRegister: "Vsaj 8 znakov",
        forgot: "Ste pozabili geslo?",
    },
    repeat: {
        label: "Ponovite geslo",
        placeholder: "Še enkrat vnesite geslo",
    },
    strength: {
        tooWeak: "Prešibko",
        weak: "Šibko",
        okay: "Sprejemljivo",
        good: "Dobro",
        strong: "Močno",
    },
    errors: {
        emailRequired: "Vnesite e-pošto",
        emailInvalid: "Vnesite veljaven e-poštni naslov",
        emailTaken: "Ta e-pošta je že registrirana",
        usernameRequired: "Vnesite uporabniško ime",
        usernameTooShort: "Uporabniško ime je prekratko",
        usernameTooLong: "Uporabniško ime je predolgo",
        usernameTaken: "To uporabniško ime je že zasedeno",
        passwordRequired: "Vnesite geslo",
        passwordTooShort: "Vsaj 8 znakov",
        passwordTooLong: "Geslo je predolgo",
        passwordWeak: "To geslo je prešibko",
        repeatRequired: "Ponovite geslo",
        repeatMismatch: "Gesli se ne ujemata",
        wrongLogin: "Napačna e-pošta ali geslo",
        rateLimited: "Preveč poskusov. Počakajte trenutek in poskusite znova.",
        network: "Strežnik ni dosegljiv. Poskusite znova.",
        unknown: "Prišlo je do napake. Poskusite znova.",
    },
    submit: {
        login: "Prijava",
        register: "Ustvari račun",
        loginPending: "Prijavljanje …",
        registerPending: "Ustvarjanje računa …",
    },
    legal: "Z registracijo se strinjate s <terms>pogoji uporabe</terms> in <privacy>politiko zasebnosti</privacy>.",
    switch: {
        hasAccount: "Že imate račun?",
        noAccount: "Še nimate računa?",
        login: "Prijava",
        register: "Registracija",
    },
    toast: {
        welcome: "Dobrodošli v Jotobi, {{name}}!",
        signedInAs: "Prijavljeni kot {{name}}",
        signedIn: "Prijavljeni ste",
    },
} satisfies PartialDict<typeof en>;
