import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "Ugrás a tartalomra",
    header: {
        home: "Jotoba kezdőlap",
        signIn: "Bejelentkezés",
        signUp: "Regisztráció",
    },
    account: {
        label: "Fiók",
        labelNamed: "Fiók, bejelentkezve: {{name}}",
        signedInAs: "Bejelentkezve: {{name}}",
        bookmarks: "Könyvjelzők",
        settings: "Beállítások",
        signOut: "Kijelentkezés",
        signedOut: "Kijelentkeztél",
        signOutFailed: "Nem sikerült kijelentkezni. Próbáld újra.",
    },
    footer: {
        label: "Lábléc",
        about: {
            title: "Rólunk",
            credits:
                "A Jotoba sok szabad adatforrást használ. A legfontosabbak közé tartozik a <jmdict>JMdict</jmdict>, a <kanjidic>KANJIDIC2</kanjidic>, a <kradfile>KRADFILE</kradfile> és a <jmnedict>JMnedict</jmnedict>, amelyek az <edrdg>Electronic Dictionary Research and Development Group</edrdg> tulajdonában vannak, és a csoport <license>licence</license> szerint használjuk őket.",
            contributors: "Az összes közreműködőt megtalálod a <link>Rólunk oldalon</link>.",
        },
        links: {
            title: "Linkek",
            androidApp: "Android-app",
            about: "Rólunk",
            privacy: "Adatvédelmi tájékoztató",
            terms: "Felhasználási feltételek",
            imprint: "Impresszum",
            licenses: "Nyílt forráskódú licencek",
        },
        support: {
            title: "Támogass minket",
            paypal: "Az adományokon a fejlesztők osztoznak",
        },
        socials: {
            title: "Közösségi média",
            github: "Forráskód",
            trello: "Ütemtervünk",
        },
    },
    cookieBanner: {
        title: "Csak egy kérdés a sütikről",
        text: "A Jotobában nincs reklám és nincsenek követősütik.",
        necessary: {
            label: "Szükséges",
            description: "Beállítások, könyvjelzők, billentyűparancsok és bejelentkezés",
            descriptionLocal: "Beállítások, könyvjelzők és billentyűparancsok",
            badge: "Mindig be",
        },
        optional: {
            label: "Gyorsabb betöltés",
            description: "Az app fájljait ezen az eszközön tárolja, hogy a Jotoba gyorsabban töltsön be",
        },
        reject: "Opcionálisak elutasítása",
        allow: "Opcionálisak engedélyezése",
        settingsLink: "Bármikor módosítható a Beállításokban",
        privacyLink: "Adatvédelmi tájékoztató",
        saved: "Választás mentve. Bármikor módosíthatod a Beállításokban.",
        savedReject: "Választás mentve. A gyorsabb betöltés ki van kapcsolva. Ezt bármikor módosíthatod a Beállításokban.",
        announce:
            "Kérdés a sütikről: elutasíthatod vagy engedélyezheted, hogy az app fájljai a gyorsabb betöltés érdekében tárolódjanak.",
        pause: ".",
    },
    notFound: {
        title: "Ez az oldal nem létezik",
        text: "Lehet, hogy hibás a link, vagy a bejegyzést eltávolították.",
        home: "Ugrás a kezdőlapra",
        report: "Egy linkről jöttél ide? <link>Hibás link jelentése</link>",
    },
    tourHint: {
        newHere: "Új vagy itt?",
        start: "Rövid bemutató",
        hide: "Bemutató-tipp elrejtése",
    },
    loadError: {
        offline: "Offline vagy. Ehhez internet kell.",
        unreachable: "A Jotoba most nem érhető el. Próbáld újra egy kicsit később.",
        failed: "Ezt nem sikerült betölteni. Próbáld újra.",
        page: {
            offlineTitle: "Ehhez az oldalhoz internet kell",
            offlineText: "Még nem töltődött be, amikor offline lettél. Amint újra online vagy, megnyílik.",
            title: "Az oldalt nem sikerült betölteni",
            text: "Az újratöltés általában segít.",
            reload: "Oldal újratöltése",
        },
    },
    common: {
        close: "Bezárás",
        closeDialog: "Párbeszédablak bezárása",
        closeMessage: "Üzenet bezárása",
        loading: "Betöltés…",
        opensInNewTab: "(új lapon nyílik meg)",
        copyFailed: "Nem sikerült a vágólapra másolni",
        scrollBack: "Görgetés vissza",
        scrollForward: "Görgetés előre",
        pages: {
            label: "Oldalak",
            first: "Első oldal",
            previous: "Előző oldal",
            page: "{{page}}. oldal",
            next: "Következő oldal",
            last: "Utolsó oldal",
        },
    },
} satisfies PartialDict<typeof en>;
