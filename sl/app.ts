import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "Preskoči na vsebino",
    header: {
        home: "Domača stran Jotobe",
        signIn: "Prijava",
        signUp: "Registracija",
    },
    account: {
        label: "Račun",
        labelNamed: "Račun, prijavljeni kot {{name}}",
        signedInAs: "Prijavljeni kot {{name}}",
        bookmarks: "Zaznamki",
        settings: "Nastavitve",
        signOut: "Odjava",
        signedOut: "Odjavljeni ste",
        signOutFailed: "Odjava ni uspela. Poskusite znova.",
    },
    footer: {
        label: "Noga strani",
        about: {
            title: "O nas",
            credits:
                "Jotoba uporablja veliko prostih virov podatkov. Med najpomembnejšimi so <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> in <jmnedict>JMnedict</jmnedict>, ki so last skupine <edrdg>Electronic Dictionary Research and Development Group</edrdg> in se uporabljajo v skladu z njeno <license>licenco</license>.",
            contributors: "Seznam vseh sodelujočih najdete na strani <link>O nas</link>.",
        },
        links: {
            title: "Povezave",
            androidApp: "Aplikacija za Android",
            about: "O nas",
            privacy: "Politika zasebnosti",
            terms: "Pogoji uporabe",
            imprint: "Impresum",
            licenses: "Odprtokodne licence",
        },
        support: {
            title: "Podprite nas",
            paypal: "Donacije si razdelijo razvijalci",
        },
        socials: {
            title: "Družbena omrežja",
            github: "Izvorna koda",
            trello: "Naš načrt razvoja",
        },
    },
    cookieBanner: {
        title: "Samo eno vprašanje o piškotkih",
        text: "Jotoba nima oglasov ne sledilnih piškotkov.",
        necessary: {
            label: "Nujno",
            description: "Nastavitve, zaznamki, bližnjice in prijava",
            descriptionLocal: "Nastavitve, zaznamki in bližnjice",
            badge: "Vedno vklopljeno",
        },
        optional: {
            label: "Hitrejše nalaganje",
            description: "Shrani datoteke aplikacije v tej napravi, da se Jotoba nalaga hitreje",
        },
        reject: "Zavrni izbirne",
        allow: "Dovoli izbirne",
        settingsLink: "Spremenite kadar koli v nastavitvah",
        privacyLink: "Politika zasebnosti",
        saved: "Izbira je shranjena. Kadar koli jo lahko spremenite v nastavitvah.",
        savedReject:
            "Izbira je shranjena. „Hitrejše nalaganje“ je izklopljeno. To lahko kadar koli spremenite v nastavitvah.",
        announce:
            "Vprašanje o piškotkih: shranjevanje datotek aplikacije za hitrejše nalaganje lahko zavrnete ali dovolite.",
        pause: ".",
    },
    notFound: {
        title: "Ta stran ne obstaja",
        text: "Povezava morda ne deluje ali pa je bil vnos odstranjen.",
        home: "Na začetno stran",
        report: "Ste sem prišli prek povezave? <link>Prijavite nedelujočo povezavo</link>",
    },
    tourHint: {
        newHere: "Prvič tukaj?",
        start: "Začni kratek ogled",
        hide: "Skrij namig za ogled",
    },
    loadError: {
        offline: "Niste povezani. Za to je potreben internet.",
        unreachable: "Jotoba trenutno ni dosegljiva. Poskusite znova čez trenutek.",
        failed: "Tega ni bilo mogoče naložiti. Poskusite znova.",
        page: {
            offlineTitle: "Ta stran potrebuje internet",
            offlineText: "Ni bila naložena, preden ste izgubili povezavo. Odprla se bo, ko boste spet povezani.",
            title: "Te strani ni bilo mogoče naložiti",
            text: "Običajno pomaga, če jo znova naložite.",
            reload: "Znova naloži stran",
        },
    },
    common: {
        close: "Zapri",
        closeDialog: "Zapri pogovorno okno",
        closeMessage: "Zapri sporočilo",
        loading: "Nalaganje …",
        opensInNewTab: "(odpre se v novem zavihku)",
        copyFailed: "Kopiranje v odložišče ni uspelo",
        scrollBack: "Pomakni nazaj",
        scrollForward: "Pomakni naprej",
        pages: {
            label: "Strani",
            first: "Prva stran",
            previous: "Prejšnja stran",
            page: "Stran {{page}}",
            next: "Naslednja stran",
            last: "Zadnja stran",
        },
    },
} satisfies PartialDict<typeof en>;
