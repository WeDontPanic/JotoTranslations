import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "Actualités",
    description: "Les nouveautés de Jotoba : nouvelles fonctionnalités, mises à jour des données et corrections.",
    intro: "Les nouvelles de Jotoba, des plus récentes aux plus anciennes.",
    error: {
        title: "Impossible de charger les actualités pour le moment",
        text: "Veuillez réessayer dans un instant.",
        retry: "Réessayer",
    },
    empty: {
        title: "Aucune actualité pour l’instant",
        text: "Les nouvelles de Jotoba s’afficheront ici.",
    },
    new: "Nouveau",
} satisfies PartialDict<typeof en>;
