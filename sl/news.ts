import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "Novice",
    description: "Kaj je novega v Jotobi: nove funkcije, posodobitve podatkov in popravki.",
    intro: "Novice o Jotobi, najnovejše najprej.",
    error: {
        title: "Novic trenutno ni mogoče naložiti",
        text: "Poskusite znova čez trenutek.",
        retry: "Poskusi znova",
    },
    empty: {
        title: "Še ni novic",
        text: "Novice o Jotobi bodo prikazane tukaj.",
    },
    new: "Novo",
} satisfies PartialDict<typeof en>;
