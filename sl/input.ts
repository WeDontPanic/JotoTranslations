import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "Glasovno iskanje",
        title: "Glasovno iskanje",
        language: "Jezik",
        japanese: "Japonščina",
        start: "Začni poslušati",
        stop: "Nehaj poslušati",
        engine: {
            device: "Prepoznano v vašem telefonu",
            online: "Prepoznano prek spleta (Android)",
            browser: "Prepoznano v brskalniku",
            info: "Kaj to pomeni?",
            about: {
                device: "Vaš telefon sam pretvori govor v besedilo, brez povezave: zvok nikoli ne zapusti telefona, Jotoba dobi samo besedilo. Če želite namesto tega uporabljati spletno storitev Androida, izklopite „Glasovni vnos v napravi“ v Nastavitve › Splošno.",
                online: "Android pošlje zvok svoji storitvi za prepoznavanje govora (v večini telefonov Googlovi) in dobi nazaj besedilo; Jotoba dobi samo besedilo. Vaš telefon zmore to tudi brez povezave: prenesite jezik v Nastavitve › Splošno.",
                browser:
                    "Vaš brskalnik pošlje zvok svoji storitvi za prepoznavanje govora (v Chromu: Googlu) in dobi nazaj besedilo; Jotoba dobi samo besedilo. V aplikaciji Jotoba za Android zmore to vaš telefon brez povezave.",
            },
        },
        status: {
            idle: "Pritisnite mikrofon in izgovorite besedo.",
            listening: "Poslušam … Izgovorite besedo.",
            "no-speech": "Govora ni bilo mogoče razbrati. Poskusite znova.",
            blocked:
                "Dostop do mikrofona je blokiran. Dovolite ga v nastavitvah spletnega mesta v brskalniku in poskusite znova.",
            "no-microphone": "Mikrofona ni mogoče najti.",
            "no-language":
                "Ta jezik tukaj ni na voljo za glasovni vnos. V telefonu ga namestite v sistemskih nastavitvah (Jeziki › Govor).",
            unsupported: "Glasovno iskanje v tem brskalniku ni na voljo.",
            failed: "Glasovno iskanje se je nepričakovano ustavilo. Poskusite znova.",
        },
    },
    handwriting: {
        mode: {
            label: "Način vnosa",
            radicals: "Radikali",
            write: "Rokopis",
        },
        pad: {
            label: "Risalna površina",
            placeholder: "Pišite tukaj",
            hint: "Z enim prstom napišite besedo ali kandži. Predlogi se prikažejo zgoraj. Raje tapkate? Preklopite na Radikali.",
        },
        candidates: {
            label: "Prepoznano",
            empty: "Tukaj se prikažejo predlogi",
            busy: "Prepoznavanje …",
        },
        undo: "Razveljavi",
        delete: "Izbriši znak",
        clear: "Počisti risbo",
        announce: {
            added: "{{text}} dodano v iskanje",
            removed: "{{text}} odstranjeno iz iskanja",
            stroke: "Poteza odstranjena",
            candidates: "Predlogi: {{count}}, prvi {{text}}",
        },
        model: {
            intro: "Za rokopis je potreben enkraten prenos od Googla (približno {{size}}). Nato deluje brez povezave.",
            download: "Prenesi ({{size}})",
            loading: "Prenašanje rokopisa (približno {{size}}) … Pisati že lahko začnete.",
            ready: "Rokopis je pripravljen",
            failed: "Prenos ni uspel. Preverite povezavo.",
            retry: "Poskusi znova",
            cellular: "Videti je, da uporabljate mobilne podatke ali varčevanje s podatki.",
            offline: "Niste povezani. Za prenos se povežite z internetom.",
        },
        consent: {
            intro: "Jotoba vaš rokopis prepozna v vaši napravi z Google ML Kit.",
            local: "Vaša risba ostane v vaši napravi. Jotoba dobi samo to, kar iščete.",
            metrics:
                "ML Kit pošilja Googlu anonimne podatke o uporabi: vrsto naprave, različico aplikacije in kako dobro deluje prepoznavanje.",
            download: "Model za rokopis (približno {{size}}) se enkrat prenese od Googla.",
            change: "To lahko kadar koli spremenite v <settings>Nastavitve › Zasebnost in piškotki</settings>. <policy>Politika zasebnosti</policy>",
            decline: "Zavrni",
            agree: "Strinjam se in prenesi",
            declined: "Rokopis ostane izklopljen. Vklopite ga lahko v Nastavitve › Zasebnost in piškotki.",
        },
    },
} satisfies PartialDict<typeof en>;
