import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "Röstsökning",
        title: "Röstsökning",
        language: "Språk",
        japanese: "Japanska",
        start: "Börja lyssna",
        stop: "Sluta lyssna",
        engine: {
            device: "Tolkas på din telefon",
            online: "Tolkas online av Android",
            browser: "Tolkas av din webbläsare",
            info: "Vad betyder det?",
            about: {
                device: "Din telefon gör själv om ditt tal till text, offline: ljudet lämnar aldrig telefonen, Jotoba får bara texten. Vill du använda Androids onlinetjänst i stället stänger du av ”Röstinmatning på enheten” under Inställningar › Allmänt.",
                online: "Android skickar ljudet till sin taltjänst (på de flesta telefoner Googles) och får tillbaka texten; Jotoba får bara texten. Din telefon kan också göra det offline: ladda ned språket under Inställningar › Allmänt.",
                browser:
                    "Din webbläsare skickar ljudet till sin taltjänst (i Chrome: Google) och får tillbaka texten; Jotoba får bara texten. I Jotoba-appen för Android kan din telefon göra det offline.",
            },
        },
        status: {
            idle: "Tryck på mikrofonen och säg ett ord.",
            listening: "Lyssnar… säg ett ord.",
            "no-speech": "Jag hörde inte. Försök igen.",
            blocked:
                "Åtkomsten till mikrofonen är blockerad. Tillåt den i webbläsarens webbplatsinställningar och försök sedan igen.",
            "no-microphone": "Ingen mikrofon hittades.",
            "no-language":
                "Det här språket är inte tillgängligt för röstinmatning här. På en telefon kan du installera det i systeminställningarna (Språk › Tal).",
            unsupported: "Röstsökning är inte tillgänglig i den här webbläsaren.",
            failed: "Röstsökningen avbröts oväntat. Försök igen.",
        },
    },
    handwriting: {
        mode: {
            label: "Inmatningsmetod",
            radicals: "Radikaler",
            write: "Handskrift",
        },
        pad: {
            label: "Ritområde",
            placeholder: "Skriv här",
            hint: "Skriv ett ord eller kanji med ett finger. Förslag visas ovanför. Vill du hellre trycka? Byt till Radikaler.",
        },
        candidates: {
            label: "Igenkänt",
            empty: "Förslag visas här",
            busy: "Känner igen…",
        },
        undo: "Ångra",
        delete: "Radera tecken",
        clear: "Rensa ritningen",
        announce: {
            added: "{{text}} har lagts till i sökningen",
            removed: "{{text}} har tagits bort från sökningen",
            stroke: "Strecket har tagits bort",
            candidates: "{{count}} förslag, första {{text}}",
        },
        model: {
            intro: "Handskrift kräver en engångsnedladdning från Google (cirka {{size}}). Sedan fungerar den offline.",
            download: "Ladda ned ({{size}})",
            loading: "Laddar ned handskrift (cirka {{size}})… Du kan redan skriva.",
            ready: "Handskriften är klar",
            failed: "Nedladdningen fungerade inte. Kontrollera anslutningen.",
            retry: "Försök igen",
            cellular: "Du verkar använda mobildata eller databesparing.",
            offline: "Du är offline. Anslut till internet för att ladda ned.",
        },
        consent: {
            intro: "Jotoba känner igen din handskrift på din enhet med Google ML Kit.",
            local: "Din ritning stannar på din enhet. Bara det du söker efter skickas till Jotoba.",
            metrics:
                "ML Kit skickar anonym användningsdata till Google: enhetstyp, appversion och hur bra igenkänningen fungerar.",
            download: "Handskriftsmodellen (cirka {{size}}) laddas ned från Google en gång.",
            change: "Du kan ändra det när som helst under <settings>Inställningar › Integritet</settings>. <policy>Integritetspolicy</policy>",
            decline: "Neka",
            agree: "Godkänn och ladda ned",
            declined: "Handskrift förblir avstängd. Du kan slå på den under Inställningar › Integritet.",
        },
    },
} satisfies PartialDict<typeof en>;
