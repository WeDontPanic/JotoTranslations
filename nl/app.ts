import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "Naar de inhoud",
    header: {
        home: "Jotoba-startpagina",
        signIn: "Inloggen",
        signUp: "Registreren",
    },
    account: {
        label: "Account",
        labelNamed: "Account, ingelogd als {{name}}",
        signedInAs: "Ingelogd als {{name}}",
        bookmarks: "Bladwijzers",
        settings: "Instellingen",
        signOut: "Uitloggen",
        signedOut: "Uitgelogd",
        signOutFailed: "Uitloggen is niet gelukt. Probeer het opnieuw.",
    },
    footer: {
        label: "Voettekst",
        about: {
            title: "Over ons",
            credits:
                "Jotoba gebruikt veel vrije gegevensbronnen. De belangrijkste zijn <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> en <jmnedict>JMnedict</jmnedict>. Die zijn eigendom van de <edrdg>Electronic Dictionary Research and Development Group</edrdg> en worden gebruikt volgens hun <license>licentie</license>.",
            contributors: "Alle bijdragers vind je op onze <link>Over ons-pagina</link>.",
        },
        links: {
            title: "Links",
            androidApp: "Android-app",
            about: "Over ons",
            privacy: "Privacyverklaring",
            terms: "Gebruiksvoorwaarden",
            imprint: "Colofon",
            licenses: "Opensourcelicenties",
        },
        support: {
            title: "Steun ons",
            paypal: "Donaties worden verdeeld onder de ontwikkelaars",
        },
        socials: {
            title: "Sociale media",
            github: "Broncode",
            trello: "Onze roadmap",
        },
    },
    cookieBanner: {
        title: "Even een cookievraag",
        text: "Jotoba heeft geen advertenties en geen trackingcookies.",
        necessary: {
            label: "Noodzakelijk",
            description: "Instellingen, bladwijzers, sneltoetsen en inloggen",
            descriptionLocal: "Instellingen, bladwijzers en sneltoetsen",
            badge: "Altijd aan",
        },
        optional: {
            label: "Sneller laden",
            description: "Slaat de bestanden van de app op dit apparaat op, zodat Jotoba sneller laadt",
        },
        reject: "Alleen noodzakelijk",
        allow: "Alles toestaan",
        settingsLink: "Altijd te wijzigen in Instellingen",
        privacyLink: "Privacyverklaring",
        saved: "Keuze opgeslagen. Je kunt die altijd wijzigen in Instellingen.",
        savedReject: "Keuze opgeslagen. “Sneller laden” staat uit. Je kunt dit altijd wijzigen in Instellingen.",
        announce: "Cookievraag: je kunt het opslaan van de app-bestanden om sneller te laden weigeren of toestaan.",
        pause: ".",
    },
    notFound: {
        title: "Deze pagina bestaat niet",
        text: "De link werkt misschien niet meer, of het item is verwijderd.",
        home: "Naar de startpagina",
        report: "Via een link hier beland? <link>Kapotte link melden</link>",
    },
    tourHint: {
        newHere: "Nieuw hier?",
        start: "Korte rondleiding starten",
        hide: "Rondleidingstip verbergen",
    },
    loadError: {
        offline: "Je bent offline. Hiervoor is internet nodig.",
        unreachable: "Jotoba is nu niet bereikbaar. Probeer het zo opnieuw.",
        failed: "Dit kon niet worden geladen. Probeer het opnieuw.",
        page: {
            offlineTitle: "Deze pagina heeft internet nodig",
            offlineText: "Ze was nog niet geladen toen je offline ging. Ze opent zodra je weer online bent.",
            title: "Deze pagina kon niet worden geladen",
            text: "Opnieuw laden helpt meestal.",
            reload: "Pagina opnieuw laden",
        },
    },
    common: {
        close: "Sluiten",
        closeDialog: "Venster sluiten",
        closeMessage: "Melding sluiten",
        loading: "Laden…",
        opensInNewTab: "(opent in een nieuw tabblad)",
        copyFailed: "Kopiëren naar het klembord mislukt",
        scrollBack: "Terugscrollen",
        scrollForward: "Verder scrollen",
        pages: {
            label: "Pagina’s",
            first: "Eerste pagina",
            previous: "Vorige pagina",
            page: "Pagina {{page}}",
            next: "Volgende pagina",
            last: "Laatste pagina",
        },
    },
} satisfies PartialDict<typeof en>;
