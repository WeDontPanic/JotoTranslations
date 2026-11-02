import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "Nyheter",
    description: "Nytt i Jotoba: nya funktioner, datauppdateringar och rättningar.",
    intro: "Uppdateringar om Jotoba, nyaste först.",
    error: {
        title: "Nyheterna kan inte laddas just nu",
        text: "Försök igen om en stund.",
        retry: "Försök igen",
    },
    empty: {
        title: "Inga nyheter än",
        text: "Uppdateringar om Jotoba visas här.",
    },
    new: "Ny",
} satisfies PartialDict<typeof en>;
