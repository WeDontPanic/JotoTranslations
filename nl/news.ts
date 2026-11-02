import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "Nieuws",
    description: "Wat er nieuw is in Jotoba: nieuwe functies, gegevensupdates en oplossingen.",
    intro: "Updates over Jotoba, nieuwste eerst.",
    error: {
        title: "Het nieuws kan nu niet worden geladen",
        text: "Probeer het zo meteen opnieuw.",
        retry: "Opnieuw proberen",
    },
    empty: {
        title: "Nog geen nieuws",
        text: "Updates over Jotoba verschijnen hier.",
    },
    new: "Nieuw",
} satisfies PartialDict<typeof en>;
