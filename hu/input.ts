import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "Hangalapú keresés",
        title: "Hangalapú keresés",
        language: "Nyelv",
        japanese: "Japán",
        start: "Hallgatás indítása",
        stop: "Hallgatás leállítása",
        engine: {
            device: "A telefonod ismerte fel",
            online: "Az Android ismerte fel online",
            browser: "A böngésződ ismerte fel",
            info: "Mit jelent ez?",
            about: {
                device: "A telefonod maga alakítja szöveggé a beszédedet, offline: a hang sosem hagyja el, a Jotoba csak a szöveget kapja meg. Ha inkább az Android online szolgáltatását használnád, kapcsold ki a „Hangbevitel az eszközön” opciót a Beállítások › Általános részben.",
                online: "Az Android elküldi a hangot a beszédszolgáltatásának (a legtöbb telefonon a Google-ének), és visszakapja a szöveget; a Jotoba csak a szöveget kapja meg. A telefonod ezt offline is meg tudja csinálni: töltsd le a nyelvet a Beállítások › Általános részben.",
                browser:
                    "A böngésződ elküldi a hangot a beszédszolgáltatásának (Chrome-ban: a Google-nek), és visszakapja a szöveget; a Jotoba csak a szöveget kapja meg. Az Androidos Jotoba appban ezt a telefonod offline is meg tudja csinálni.",
            },
        },
        status: {
            idle: "Nyomd meg a mikrofont, és mondj egy szót.",
            listening: "Figyelek… mondj egy szót.",
            "no-speech": "Nem értettem. Próbáld újra.",
            blocked:
                "A mikrofonhoz való hozzáférés le van tiltva. Engedélyezd a böngésződ webhelybeállításaiban, majd próbáld újra.",
            "no-microphone": "Nem található mikrofon.",
            "no-language":
                "Ez a nyelv itt nem érhető el hangbevitelhez. Telefonon telepítsd a rendszerbeállításokban (Nyelvek › Beszéd).",
            unsupported: "A hangalapú keresés ebben a böngészőben nem érhető el.",
            failed: "A hangalapú keresés váratlanul leállt. Próbáld újra.",
        },
    },
    handwriting: {
        mode: {
            label: "Beviteli mód",
            radicals: "Gyökök",
            write: "Kézírás",
        },
        pad: {
            label: "Rajzterület",
            placeholder: "Írj ide",
            hint: "Írj egy szót vagy kandzsit egy ujjal. A jelöltek fent jelennek meg. Inkább koppintanál? Válts a Gyökökre.",
        },
        candidates: {
            label: "Felismerve",
            empty: "Itt jelennek meg a jelöltek",
            busy: "Felismerés…",
        },
        undo: "Visszavonás",
        delete: "Karakter törlése",
        clear: "Rajz törlése",
        announce: {
            added: "{{text}} hozzáadva a kereséshez",
            removed: "{{text}} eltávolítva a keresésből",
            stroke: "Vonás eltávolítva",
            candidates: "{{count}} jelölt, az első: {{text}}",
        },
        model: {
            intro: "A kézíráshoz egyszeri letöltés kell a Google-től (kb. {{size}}). Utána offline is működik.",
            download: "Letöltés ({{size}})",
            loading: "A kézírás letöltése (kb. {{size}})… Már írhatsz is.",
            ready: "A kézírás használatra kész",
            failed: "A letöltés nem sikerült. Ellenőrizd a kapcsolatot.",
            retry: "Újrapróbálás",
            cellular: "Úgy tűnik, mobiladatot vagy adatforgalom-csökkentőt használsz.",
            offline: "Offline vagy. A letöltéshez csatlakozz az internethez.",
        },
        consent: {
            intro: "A Jotoba az eszközödön, a Google ML Kittel ismeri fel a kézírásodat.",
            local: "A rajzod az eszközödön marad. A Jotoba csak azt kapja meg, amire rákeresel.",
            metrics:
                "Az ML Kit névtelen használati adatokat küld a Google-nek: az eszköz típusát, az app verzióját és azt, hogy mennyire jól működik a felismerés.",
            download: "A kézírásmodell (kb. {{size}}) egyszer töltődik le a Google-től.",
            change: "Ezt bármikor módosíthatod a <settings>Beállítások › Adatvédelem és sütik</settings> részben. <policy>Adatvédelmi tájékoztató</policy>",
            decline: "Elutasítás",
            agree: "Elfogadás és letöltés",
            declined: "A kézírás kikapcsolva marad. Bekapcsolhatod a Beállítások › Adatvédelem és sütik részben.",
        },
    },
} satisfies PartialDict<typeof en>;
