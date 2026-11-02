import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Se connecter",
        register: "S’inscrire",
    },
    email: {
        label: "E-mail",
        placeholder: "vous@exemple.fr",
    },
    username: {
        label: "Nom d’utilisateur",
        placeholder: "3 à 20 caractères",
    },
    password: {
        label: "Mot de passe",
        placeholderLogin: "Votre mot de passe",
        placeholderRegister: "Au moins 8 caractères",
        forgot: "Mot de passe oublié ?",
    },
    repeat: {
        label: "Confirmer le mot de passe",
        placeholder: "Saisissez à nouveau votre mot de passe",
    },
    strength: {
        tooWeak: "Trop faible",
        weak: "Faible",
        okay: "Moyen",
        good: "Bon",
        strong: "Fort",
    },
    errors: {
        emailRequired: "L’e-mail est obligatoire",
        emailInvalid: "Saisissez une adresse e-mail valide",
        emailTaken: "Cet e-mail est déjà enregistré",
        usernameRequired: "Le nom d’utilisateur est obligatoire",
        usernameTooShort: "Le nom d’utilisateur est trop court",
        usernameTooLong: "Le nom d’utilisateur est trop long",
        usernameTaken: "Ce nom d’utilisateur est déjà pris",
        passwordRequired: "Le mot de passe est obligatoire",
        passwordTooShort: "Au moins 8 caractères",
        passwordTooLong: "Le mot de passe est trop long",
        passwordWeak: "Ce mot de passe est trop faible",
        repeatRequired: "Veuillez confirmer votre mot de passe",
        repeatMismatch: "Les mots de passe ne correspondent pas",
        wrongLogin: "E-mail ou mot de passe incorrect",
        rateLimited: "Trop de tentatives. Patientez un instant, puis réessayez.",
        network: "Impossible de joindre le serveur. Veuillez réessayer.",
        unknown: "Une erreur s’est produite. Veuillez réessayer.",
    },
    submit: {
        login: "Se connecter",
        register: "Créer un compte",
        loginPending: "Connexion…",
        registerPending: "Création du compte…",
    },
    legal: "En vous inscrivant, vous acceptez les <terms>Conditions d’utilisation</terms> et la <privacy>Politique de confidentialité</privacy>.",
    switch: {
        hasAccount: "Vous avez déjà un compte ?",
        noAccount: "Pas encore de compte ?",
        login: "Se connecter",
        register: "S’inscrire",
    },
    toast: {
        welcome: "Bienvenue sur Jotoba, {{name}} !",
        signedInAs: "Connecté en tant que {{name}}",
        signedIn: "Connecté",
    },
} satisfies PartialDict<typeof en>;
