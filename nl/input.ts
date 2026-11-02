import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "Zoeken met je stem",
        title: "Zoeken met je stem",
        language: "Taal",
        japanese: "Japans",
        start: "Beginnen met luisteren",
        stop: "Stoppen met luisteren",
        engine: {
            device: "Herkend op je telefoon",
            online: "Online herkend door Android",
            browser: "Herkend door je browser",
            info: "Wat betekent dit?",
            about: {
                device: "Je telefoon zet je spraak zelf om in tekst, offline: de audio verlaat je telefoon niet, Jotoba krijgt alleen de tekst. Wil je in plaats daarvan de onlinedienst van Android gebruiken, zet dan “Spraakinvoer op het apparaat” uit in Instellingen › Algemeen.",
                online: "Android stuurt de audio naar zijn spraakdienst (op de meeste telefoons die van Google) en krijgt de tekst terug; Jotoba krijgt alleen de tekst. Je telefoon kan dit ook offline: download de taal in Instellingen › Algemeen.",
                browser:
                    "Je browser stuurt de audio naar zijn spraakdienst (in Chrome: Google) en krijgt de tekst terug; Jotoba krijgt alleen de tekst. In de Jotoba-app voor Android kan je telefoon dit offline doen.",
            },
        },
        status: {
            idle: "Druk op de microfoon en zeg een woord.",
            listening: "Ik luister… zeg een woord.",
            "no-speech": "Dat heb ik niet verstaan. Probeer het opnieuw.",
            blocked:
                "Toegang tot de microfoon is geblokkeerd. Sta die toe in de site-instellingen van je browser en probeer het dan opnieuw.",
            "no-microphone": "Geen microfoon gevonden.",
            "no-language":
                "Deze taal is hier niet beschikbaar voor spraakinvoer. Op een telefoon kun je hem installeren in de systeeminstellingen (Talen › Spraak).",
            unsupported: "Zoeken met je stem is niet beschikbaar in deze browser.",
            failed: "Zoeken met je stem is onverwacht gestopt. Probeer het opnieuw.",
        },
    },
    handwriting: {
        mode: {
            label: "Invoermethode",
            radicals: "Radicalen",
            write: "Handschrift",
        },
        pad: {
            label: "Tekenvlak",
            placeholder: "Schrijf hier",
            hint: "Schrijf een woord of kanji met één vinger. Suggesties verschijnen erboven. Liever tikken? Kies Radicalen.",
        },
        candidates: {
            label: "Herkend",
            empty: "Suggesties verschijnen hier",
            busy: "Herkennen…",
        },
        undo: "Ongedaan maken",
        delete: "Teken verwijderen",
        clear: "Tekening wissen",
        announce: {
            added: "{{text}} toegevoegd aan zoekopdracht",
            removed: "{{text}} verwijderd uit zoekopdracht",
            stroke: "Streek verwijderd",
            candidates: "{{count}} suggesties, eerste {{text}}",
        },
        model: {
            intro: "Voor handschrift is eenmalig een download van Google nodig (ongeveer {{size}}). Daarna werkt het offline.",
            download: "Downloaden ({{size}})",
            loading: "Handschrift wordt gedownload (ongeveer {{size}})… Je kunt al schrijven.",
            ready: "Handschrift is klaar",
            failed: "De download is mislukt. Controleer je verbinding.",
            retry: "Opnieuw proberen",
            cellular: "Je lijkt mobiele data of databesparing te gebruiken.",
            offline: "Je bent offline. Maak verbinding met internet om te downloaden.",
        },
        consent: {
            intro: "Jotoba herkent je handschrift op je apparaat met Google ML Kit.",
            local: "Je tekening blijft op je apparaat. Alleen wat je zoekt, gaat naar Jotoba.",
            metrics:
                "ML Kit stuurt anonieme gebruiksgegevens naar Google: apparaattype, app-versie en hoe goed de herkenning werkt.",
            download: "Het handschriftmodel (ongeveer {{size}}) wordt eenmalig bij Google gedownload.",
            change: "Je kunt dit altijd wijzigen in <settings>Instellingen › Privacy</settings>. <policy>Privacyverklaring</policy>",
            decline: "Weigeren",
            agree: "Akkoord en downloaden",
            declined: "Handschrift blijft uit. Je kunt het aanzetten in Instellingen › Privacy.",
        },
    },
} satisfies PartialDict<typeof en>;
