import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Menu",
        unread: "Menu (actualités non lues : {{count}})",
    },
    drawer: {
        title: "Menu",
        mainNav: "Menu principal",
        aboutNav: "À propos de Jotoba",
        development: "Développement",
        unread: "à lire",
        offlineUpdate: "(mise à jour disponible)",
        offlineOutdated: "(mise à jour requise)",
        offlineRemoved: "(plus sur cet appareil)",
    },
    links: {
        bookmarks: "Favoris",
        settings: "Paramètres",
        history: "Recherches récentes",
        offline: "Dictionnaire hors ligne",
        news: "Actualités",
        help: "Aide et visite guidée",
        components: "Composants",
        apiTest: "Test de l’API",
        about: "À propos",
        licenses: "Licences open source",
        privacy: "Politique de confidentialité",
        terms: "Conditions d’utilisation",
        imprint: "Mentions légales",
        home: "Accueil",
        quit: "Quitter l’application",
    },
    news: {
        button: "Actualités",
        buttonUnread: "Actualités, non lues : {{count}}",
        title: "Actualités",
        freshCount: "{{count}} non lues",
        new: "Nouveau",
        showAll: "Voir toutes les actualités",
        close: "Fermer",
        empty: "Aucune actualité",
        error: "Impossible de charger les actualités pour le moment.",
        retry: "Réessayer",
        status: {
            fresh: {
                one: "{{count}} nouvel article",
                many: "{{count}} nouveaux articles",
                other: "{{count}} nouveaux articles",
            },
            noneFresh: "Aucun nouvel article",
        },
    },
} satisfies PartialDict<typeof en>;
