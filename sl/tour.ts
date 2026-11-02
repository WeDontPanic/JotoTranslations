import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Iščite v obe smeri",
            description:
                "Vnesite angleščino, japonščino, kano ali romadži. Predlogi se prikažejo že med tipkanjem, ključniki, kot je #n5, pa zožijo rezultate.",
            descriptionVoice:
                "Vnesite angleščino, japonščino, kano ali romadži ali pa se dotaknite mikrofona za glasovno iskanje. Predlogi se prikažejo že med tipkanjem, ključniki, kot je #n5, pa zožijo rezultate.",
            shortcut: "Skok v iskalno vrstico",
        },
        type: {
            title: "Izberite, kaj iščete",
            description: "Meni ob iskalnem polju preklaplja med besedami, kandžiji, primeri stavkov in imeni.",
            shortcut: "Preklapljanje na straneh z rezultati",
        },
        radicals: {
            title: "Iščite kandžije po delih",
            description:
                "Kandžija ne znate prebrati? Odprite 部, izberite radikale, ki jih prepoznate, in Jotoba prikaže ustrezne kandžije.",
        },
        reader: {
            title: "Berite cele stavke",
            description:
                "Poiščite cel japonski stavek in Jotoba ga razdeli na besede. Izberite besedo, da vidite njeno slovarsko obliko in kako je bila spregana.",
        },
        wordMenu: {
            title: "Več o vsakem rezultatu",
            description:
                "Odprite ⋮ ob besedi za spregatve, primere stavkov, povezavo za deljenje in stran s podrobnostmi, kjer jo lahko dodate med zaznamke.",
        },
        settings: {
            title: "Nastavitve in pomoč",
            description:
                "V meniju so vaši zaznamki, nastavitve, novice in stran s pomočjo, kjer lahko preberete o vsaki funkciji in znova začnete ta ogled. Jezikovne nastavitve lahko preizkusite kar tukaj, spremembe veljajo takoj.",
            descriptionSearchOnly:
                "V meniju so vaši zaznamki, nastavitve, novice in stran s pomočjo, kjer lahko preberete o vsaki funkciji in znova začnete ta ogled. Jezik iskanja lahko preizkusite kar tukaj, spremembe veljajo takoj.",
        },
    },
    languages: {
        group: "Jeziki",
    },
    progress: "{{current}} od {{total}}",
    announce: "Korak {{current}} od {{total}}. {{title}}. {{description}}",
    close: "Zapri ogled",
    back: "Nazaj",
    next: "Naprej",
    done: "Končano",
    preview: {
        types: {
            words: "Besede",
            kanji: "Kandži",
            sentences: "Stavki",
            names: "Imena",
        },
        gloss: "jesti",
        form: "preteklik, vljudno",
        wordMenu: {
            conjugations: "Spregatve",
            sentenceSearch: "Iskanje stavkov",
            copyLink: "Kopiraj povezavo",
            details: "Podrobnosti",
        },
    },
} satisfies PartialDict<typeof en>;
