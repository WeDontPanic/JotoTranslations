import type { Dict } from "../types";

export default {
    title: "News",
    description: "What's new in Jotoba: new features, data updates and fixes.",
    intro: "Updates about Jotoba, newest first.",
    error: {
        title: "News can't be loaded right now",
        text: "Please try again in a moment.",
        retry: "Try again",
    },
    empty: {
        title: "No news yet",
        text: "Updates about Jotoba will show up here.",
    },
    new: "New",
} as const satisfies Dict;
