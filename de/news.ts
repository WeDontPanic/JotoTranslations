import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "News",
    description: "Was es Neues bei Jotoba gibt: neue Funktionen, Datenupdates und Fehlerbehebungen.",
    intro: "Neuigkeiten zu Jotoba, die neuesten zuerst.",
    error: {
        title: "Die News können gerade nicht geladen werden",
        text: "Bitte versuche es gleich noch einmal.",
        retry: "Erneut versuchen",
    },
    empty: {
        title: "Noch keine News",
        text: "Neuigkeiten zu Jotoba erscheinen hier.",
    },
    new: "Neu",
} satisfies PartialDict<typeof en>;
