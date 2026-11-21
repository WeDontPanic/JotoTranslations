import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Iščite v obe smeri",
            description:
                "Vnesite angleščino, japonščino, kano ali romadži. Predlogi se prikažejo že med tipkanjem, ključniki, kot je #n5, pa zožijo rezultate. Preizkusite z 猫 (mačka).",
            descriptionVoice:
                "Vnesite angleščino, japonščino, kano ali romadži ali pa se dotaknite mikrofona za glasovno iskanje. Predlogi se prikažejo že med tipkanjem, ključniki, kot je #n5, pa zožijo rezultate. Preizkusite z 猫 (mačka).",
            shortcut: "Skok v iskalno vrstico",
        },
        customize: {
            title: "Nastavite zadetke",
            description: "Izberite jezik pomenov in strnjeni prikaz. Zadetki se spremenijo takoj.",
            descriptionStatic:
                "Izberite jezik pomenov in strnjeni prikaz. Izbira velja za vse zadetke, spremenite jo lahko v nastavitvah.",
        },
        details: {
            title: "Vsaka beseda ima svojo stran",
            description:
                "Izberite besedo, da odprete njeno stran z vsemi pomeni, njenimi kanji, primeri stavkov in spregatvami.",
            descriptionStatic:
                "Izberite besedo med rezultati, da odprete njeno stran z vsemi pomeni, njenimi kanji, primeri stavkov in spregatvami.",
        },
        bookmark: {
            title: "Shranite besede za pozneje",
            description:
                "Gumb za zaznamek shrani besedo na seznam. Pod ⋮ so spregatve, primeri stavkov in povezava za deljenje.",
            descriptionMenu:
                "Odprite ⋮ ob besedi, da jo zaznamujete, si ogledate spregatve, poiščete primere stavkov ali kopirate povezavo.",
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
        type: {
            title: "Izberite, kaj iščete",
            description:
                "Meni ob iskalnem polju preklaplja med besedami, kandžiji, primeri stavkov in imeni. Tu so kanji besede 猫.",
            descriptionStatic: "Meni ob iskalnem polju preklaplja med besedami, kandžiji, primeri stavkov in imeni.",
            shortcut: "Preklapljanje na straneh z rezultati",
        },
        settings: {
            title: "Zaznamki, nastavitve in pomoč",
            description:
                "Odprite meni za zaznamke, novice in pomoč, kjer lahko ta ogled začnete znova. Tam so tudi nastavitve z vsem, kar ste pravkar nastavili. Jezik aplikacije lahko zamenjate kar tukaj.",
            descriptionNoLanguage:
                "Odprite meni za zaznamke, novice in pomoč, kjer lahko ta ogled začnete znova. Tam so tudi nastavitve z vsem, kar ste pravkar nastavili.",
        },
    },
    menuHint: {
        text: "Besede, ki jih zaznamujete, so v Zaznamkih. Tam lahko vsak seznam tudi učite s karticami.",
        done: "Končano",
    },
    customize: {
        group: "Nastavitve zadetkov",
        updated: "Zadetki so posodobljeni.",
        englishLocked: "Vedno vklopljeno, dokler je jezik iskanja angleščina.",
    },
    languages: {
        group: "Jeziki",
    },
    progress: "{{current}} od {{total}}",
    announce: "Korak {{current}} od {{total}}. {{title}}. {{description}}",
    announceResumed: "Spet v ogledu. Korak {{current}} od {{total}}.",
    close: "Zapri ogled",
    back: "Nazaj",
    next: "Naprej",
    done: "Končano",
    searchExample: "Išči {{query}}",
    searching: "Iskanje…",
    loading: "Nalaganje…",
    openMenu: "Odpri meni",
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
            bookmark: "Zaznamuj",
            conjugations: "Spregatve",
            sentenceSearch: "Iskanje stavkov",
            copyLink: "Kopiraj povezavo",
        },
    },
} satisfies PartialDict<typeof en>;
