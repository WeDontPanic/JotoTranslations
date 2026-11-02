import type { Dict } from "../types";

export default {
    skipLink: "Skip to content",
    header: {
        home: "Jotoba home",
        signIn: "Sign in",
        signUp: "Sign up",
    },
    account: {
        label: "Account",
        labelNamed: "Account, signed in as {{name}}",
        signedInAs: "Signed in as {{name}}",
        bookmarks: "Bookmarks",
        settings: "Settings",
        signOut: "Sign out",
        signedOut: "Signed out",
        signOutFailed: "Couldn't sign out. Please try again.",
    },
    footer: {
        label: "Footer",
        about: {
            title: "About",
            credits:
                "Jotoba uses a lot of free data sources. Some of the major ones are <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> and <jmnedict>JMnedict</jmnedict> which are the property of the <edrdg>Electronic Dictionary Research and Development Group</edrdg>, and are used in conformance with the Group's <license>licence</license>.",
            contributors: "Check out our <link>About Page</link> for a list of all contributors.",
        },
        links: {
            title: "Links",
            androidApp: "Android App",
            about: "About Page",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
            imprint: "Imprint",
            licenses: "Open source licenses",
        },
        support: {
            title: "Support us",
            paypal: "Donations are shared between the developers",
        },
        socials: {
            title: "Socials",
            github: "Source code",
            trello: "Our roadmap",
        },
    },
    cookieBanner: {
        title: "Just one cookie question",
        text: "Jotoba has no ads and no tracking cookies.",
        necessary: {
            label: "Necessary",
            description: "Settings, bookmarks, shortcuts and sign-in",
            descriptionLocal: "Settings, bookmarks and shortcuts",
            badge: "Always on",
        },
        optional: {
            label: "Faster loading",
            description: "Saves the app's files on this device, so Jotoba loads faster",
        },
        reject: "Reject optional",
        allow: "Allow optional",
        settingsLink: "Change anytime in Settings",
        privacyLink: "Privacy policy",
        saved: "Choice saved. You can change it anytime in Settings.",
        savedReject: "Choice saved. Faster loading is off. You can change this anytime in Settings.",
        announce: "Cookie question: you can reject or allow saving the app's files for faster loading.",
        /** Read out between a description and its badge */
        pause: ".",
    },
    notFound: {
        title: "This page doesn't exist",
        text: "The link may be broken or the entry was removed.",
        home: "Go to the start page",
        report: "Followed a link here? <link>Report a broken link</link>",
    },
    tourHint: {
        newHere: "New here?",
        start: "Take a quick tour",
        hide: "Hide tour hint",
    },
    // Something the user asked for couldn't load (toast), or a page couldn't (in place of the page)
    loadError: {
        offline: "You're offline. This needs internet.",
        unreachable: "Jotoba can't be reached right now. Try again in a moment.",
        failed: "This couldn't be loaded. Try again.",
        page: {
            offlineTitle: "This page needs internet",
            offlineText: "It wasn't loaded before you went offline. It opens once you're back online.",
            title: "This page couldn't be loaded",
            text: "Reloading usually helps.",
            reload: "Reload page",
        },
    },
    common: {
        close: "Close",
        closeDialog: "Close dialog",
        closeMessage: "Close message",
        loading: "Loading…",
        opensInNewTab: "(opens in a new tab)",
        copyFailed: "Couldn't copy to clipboard",
        scrollBack: "Scroll back",
        scrollForward: "Scroll forward",
        pages: {
            label: "Pages",
            first: "First page",
            previous: "Previous page",
            page: "Page {{page}}",
            next: "Next page",
            last: "Last page",
        },
    },
} as const satisfies Dict;
