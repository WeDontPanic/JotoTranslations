import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "Recherche vocale",
        title: "Recherche vocale",
        language: "Langue",
        japanese: "Japonais",
        start: "Commencer l’écoute",
        stop: "Arrêter l’écoute",
        engine: {
            device: "Reconnu sur votre téléphone",
            online: "Reconnu en ligne par Android",
            browser: "Reconnu par votre navigateur",
            info: "Qu’est-ce que cela signifie ?",
            about: {
                device: "Votre téléphone transforme lui-même votre voix en texte, hors ligne : l’audio ne le quitte jamais, Jotoba ne reçoit que le texte. Pour utiliser plutôt le service en ligne d’Android, désactivez « Saisie vocale sur l’appareil » dans Paramètres › Général.",
                online: "Android envoie l’audio à son service de reconnaissance vocale (celui de Google sur la plupart des téléphones) et reçoit le texte en retour ; Jotoba ne reçoit que le texte. Votre téléphone peut aussi le faire hors ligne : téléchargez la langue dans Paramètres › Général.",
                browser:
                    "Votre navigateur envoie l’audio à son service de reconnaissance vocale (dans Chrome : Google) et reçoit le texte en retour ; Jotoba ne reçoit que le texte. Dans l’application Jotoba pour Android, votre téléphone peut le faire hors ligne.",
            },
        },
        status: {
            idle: "Appuyez sur le micro et dites un mot.",
            listening: "À l’écoute… dites un mot.",
            "no-speech": "Je n’ai pas compris. Réessayez.",
            blocked:
                "L’accès au micro est bloqué. Autorisez-le dans les paramètres du site de votre navigateur, puis réessayez.",
            "no-microphone": "Aucun micro trouvé.",
            "no-language":
                "Cette langue n’est pas disponible ici pour la saisie vocale. Sur un téléphone, installez-la dans les paramètres système (Langues › Reconnaissance vocale).",
            unsupported: "La recherche vocale n’est pas disponible dans ce navigateur.",
            failed: "La recherche vocale s’est arrêtée de façon inattendue. Réessayez.",
        },
    },
    handwriting: {
        mode: {
            label: "Mode de saisie",
            radicals: "Radicaux",
            write: "Écriture manuscrite",
        },
        pad: {
            label: "Zone de dessin",
            placeholder: "Écrivez ici",
            hint: "Écrivez un mot ou un kanji avec un doigt. Les propositions apparaissent au-dessus. Vous préférez toucher ? Passez à Radicaux.",
        },
        candidates: {
            label: "Reconnu",
            empty: "Les propositions apparaissent ici",
            busy: "Reconnaissance…",
        },
        undo: "Annuler",
        delete: "Supprimer le caractère",
        clear: "Effacer le dessin",
        announce: {
            added: "{{text}} ajouté à la recherche",
            removed: "{{text}} retiré de la recherche",
            stroke: "Trait supprimé",
            candidates: "{{count}} propositions, la première est {{text}}",
        },
        model: {
            intro: "L’écriture manuscrite nécessite un téléchargement unique depuis Google (environ {{size}}). Ensuite, elle fonctionne hors ligne.",
            download: "Télécharger ({{size}})",
            loading: "Téléchargement de l’écriture manuscrite (environ {{size}})… Vous pouvez déjà écrire.",
            ready: "L’écriture manuscrite est prête",
            failed: "Le téléchargement a échoué. Vérifiez votre connexion.",
            retry: "Réessayer",
            cellular: "Vous semblez utiliser les données mobiles ou l’économiseur de données.",
            offline: "Vous êtes hors ligne. Connectez-vous à Internet pour télécharger.",
        },
        consent: {
            intro: "Jotoba reconnaît votre écriture manuscrite sur votre appareil avec Google ML Kit.",
            local: "Votre dessin reste sur votre appareil. Seul ce que vous recherchez est envoyé à Jotoba.",
            metrics:
                "ML Kit envoie des données d’utilisation anonymes à Google : type d’appareil, version de l’application et qualité de la reconnaissance.",
            download: "Le modèle d’écriture manuscrite (environ {{size}}) est téléchargé une seule fois depuis Google.",
            change: "Vous pouvez modifier ce choix à tout moment dans <settings>Paramètres › Confidentialité</settings>. <policy>Politique de confidentialité</policy>",
            decline: "Refuser",
            agree: "Accepter et télécharger",
            declined: "L’écriture manuscrite reste désactivée. Vous pouvez l’activer dans Paramètres › Confidentialité.",
        },
    },
} satisfies PartialDict<typeof en>;
