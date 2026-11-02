import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "Hírek",
    description: "Újdonságok a Jotobában: új funkciók, adatfrissítések és javítások.",
    intro: "Hírek a Jotobáról, a legújabbak elöl.",
    error: {
        title: "A hírek most nem tölthetők be",
        text: "Próbáld újra egy kicsit később.",
        retry: "Újrapróbálás",
    },
    empty: {
        title: "Még nincsenek hírek",
        text: "A Jotobával kapcsolatos hírek itt jelennek meg.",
    },
    new: "Új",
} satisfies PartialDict<typeof en>;
