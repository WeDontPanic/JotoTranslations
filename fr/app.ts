import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "Aller au contenu",
    header: {
        home: "Accueil de Jotoba",
        signIn: "Se connecter",
        signUp: "S’inscrire",
    },
    account: {
        label: "Compte",
        labelNamed: "Compte, connecté en tant que {{name}}",
        signedInAs: "Connecté en tant que {{name}}",
        bookmarks: "Favoris",
        settings: "Paramètres",
        signOut: "Se déconnecter",
        signedOut: "Déconnecté",
        signOutFailed: "La déconnexion a échoué. Veuillez réessayer.",
    },
    footer: {
        label: "Pied de page",
        about: {
            title: "À propos",
            credits:
                "Jotoba s’appuie sur de nombreuses sources de données libres. Parmi les principales figurent <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> et <jmnedict>JMnedict</jmnedict>, propriété de l’<edrdg>Electronic Dictionary Research and Development Group</edrdg>, utilisées conformément à sa <license>licence</license>.",
            contributors: "Retrouvez tous les contributeurs sur notre <link>page À propos</link>.",
        },
        links: {
            title: "Liens",
            androidApp: "Application Android",
            about: "À propos",
            privacy: "Politique de confidentialité",
            terms: "Conditions d’utilisation",
            imprint: "Mentions légales",
            licenses: "Licences open source",
        },
        support: {
            title: "Nous soutenir",
            paypal: "Les dons sont partagés entre les développeurs",
        },
        socials: {
            title: "Réseaux sociaux",
            github: "Code source",
            trello: "Notre feuille de route",
        },
    },
    cookieBanner: {
        title: "Juste une question sur les cookies",
        text: "Jotoba n’a ni publicité ni cookies de suivi.",
        necessary: {
            label: "Nécessaires",
            description: "Paramètres, favoris, raccourcis et connexion",
            descriptionLocal: "Paramètres, favoris et raccourcis",
            badge: "Toujours actifs",
        },
        optional: {
            label: "Chargement plus rapide",
            description: "Enregistre les fichiers de l’application sur cet appareil pour que Jotoba se charge plus vite",
        },
        reject: "Refuser les optionnels",
        allow: "Autoriser les optionnels",
        settingsLink: "Modifiable à tout moment dans les paramètres",
        privacyLink: "Politique de confidentialité",
        saved: "Choix enregistré. Vous pouvez le modifier à tout moment dans les paramètres.",
        savedReject:
            "Choix enregistré. Le chargement plus rapide est désactivé. Vous pouvez le modifier à tout moment dans les paramètres.",
        announce:
            "Question sur les cookies : vous pouvez refuser ou autoriser l’enregistrement des fichiers de l’application pour un chargement plus rapide.",
        /** Read out between a description and its badge */
        pause: ".",
    },
    notFound: {
        title: "Cette page n’existe pas",
        text: "Le lien est peut-être cassé, ou l’entrée a été supprimée.",
        home: "Aller à l’accueil",
        report: "Arrivé ici par un lien ? <link>Signaler un lien cassé</link>",
    },
    tourHint: {
        newHere: "Nouveau ici ?",
        start: "Faire une visite rapide",
        hide: "Masquer l’invitation à la visite",
    },
    loadError: {
        offline: "Vous êtes hors ligne. Cette action nécessite Internet.",
        unreachable: "Jotoba est injoignable pour le moment. Réessayez dans un instant.",
        failed: "Impossible de charger ce contenu. Réessayez.",
        page: {
            offlineTitle: "Cette page nécessite Internet",
            offlineText:
                "Elle n’était pas encore chargée quand vous êtes passé hors ligne. Elle s’ouvrira dès que vous serez de nouveau en ligne.",
            title: "Impossible de charger cette page",
            text: "Recharger la page suffit généralement.",
            reload: "Recharger la page",
        },
    },
    common: {
        close: "Fermer",
        closeDialog: "Fermer la boîte de dialogue",
        closeMessage: "Fermer le message",
        loading: "Chargement…",
        opensInNewTab: "(s’ouvre dans un nouvel onglet)",
        copyFailed: "Impossible de copier dans le presse-papiers",
        scrollBack: "Défiler vers l’arrière",
        scrollForward: "Défiler vers l’avant",
        pages: {
            label: "Pages",
            first: "Première page",
            previous: "Page précédente",
            page: "Page {{page}}",
            next: "Page suivante",
            last: "Dernière page",
        },
    },
} satisfies PartialDict<typeof en>;
