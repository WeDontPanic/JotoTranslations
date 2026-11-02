import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "Hoppa till innehållet",
    header: {
        home: "Jotobas startsida",
        signIn: "Logga in",
        signUp: "Skapa konto",
    },
    account: {
        label: "Konto",
        labelNamed: "Konto, inloggad som {{name}}",
        signedInAs: "Inloggad som {{name}}",
        bookmarks: "Bokmärken",
        settings: "Inställningar",
        signOut: "Logga ut",
        signedOut: "Utloggad",
        signOutFailed: "Det gick inte att logga ut. Försök igen.",
    },
    footer: {
        label: "Sidfot",
        about: {
            title: "Om oss",
            credits:
                "Jotoba använder många fria datakällor. Några av de viktigaste är <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> och <jmnedict>JMnedict</jmnedict>, som ägs av <edrdg>Electronic Dictionary Research and Development Group</edrdg> och används i enlighet med gruppens <license>licens</license>.",
            contributors: "Alla som har bidragit hittar du på vår <link>Om oss-sida</link>.",
        },
        links: {
            title: "Länkar",
            androidApp: "Android-app",
            about: "Om oss",
            privacy: "Integritetspolicy",
            terms: "Användarvillkor",
            imprint: "Kontaktuppgifter",
            licenses: "Licenser för öppen källkod",
        },
        support: {
            title: "Stöd oss",
            paypal: "Donationer delas mellan utvecklarna",
        },
        socials: {
            title: "Sociala medier",
            github: "Källkod",
            trello: "Vår färdplan",
        },
    },
    cookieBanner: {
        title: "Bara en fråga om cookies",
        text: "Jotoba har inga annonser och inga spårningscookies.",
        necessary: {
            label: "Nödvändiga",
            description: "Inställningar, bokmärken, kortkommandon och inloggning",
            descriptionLocal: "Inställningar, bokmärken och kortkommandon",
            badge: "Alltid på",
        },
        optional: {
            label: "Snabbare laddning",
            description: "Sparar appens filer på den här enheten så att Jotoba laddar snabbare",
        },
        reject: "Neka valfria",
        allow: "Tillåt valfria",
        settingsLink: "Ändra när som helst i Inställningar",
        privacyLink: "Integritetspolicy",
        saved: "Valet har sparats. Du kan ändra det när som helst i Inställningar.",
        savedReject: "Valet har sparats. Snabbare laddning är avstängt. Du kan ändra det när som helst i Inställningar.",
        announce: "Fråga om cookies: du kan neka eller tillåta att appens filer sparas för snabbare laddning.",
        pause: ".",
    },
    notFound: {
        title: "Den här sidan finns inte",
        text: "Länken kan vara trasig eller så har posten tagits bort.",
        home: "Gå till startsidan",
        report: "Kom du hit via en länk? <link>Rapportera en trasig länk</link>",
    },
    tourHint: {
        newHere: "Ny här?",
        start: "Ta en snabb rundtur",
        hide: "Dölj tipset om rundturen",
    },
    loadError: {
        offline: "Du är offline. Det här kräver internet.",
        unreachable: "Jotoba går inte att nå just nu. Försök igen om en stund.",
        failed: "Det gick inte att läsa in. Försök igen.",
        page: {
            offlineTitle: "Den här sidan kräver internet",
            offlineText: "Den hade inte lästs in innan du gick offline. Den öppnas när du är online igen.",
            title: "Sidan kunde inte läsas in",
            text: "Det brukar hjälpa att ladda om.",
            reload: "Ladda om sidan",
        },
    },
    common: {
        close: "Stäng",
        closeDialog: "Stäng dialogrutan",
        closeMessage: "Stäng meddelandet",
        loading: "Laddar…",
        opensInNewTab: "(öppnas i en ny flik)",
        copyFailed: "Det gick inte att kopiera till urklipp",
        scrollBack: "Rulla bakåt",
        scrollForward: "Rulla framåt",
        pages: {
            label: "Sidor",
            first: "Första sidan",
            previous: "Föregående sida",
            page: "Sida {{page}}",
            next: "Nästa sida",
            last: "Sista sidan",
        },
    },
} satisfies PartialDict<typeof en>;
