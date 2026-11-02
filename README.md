# JotoTranslations

The texts of [Jotoba](https://jotoba.de)'s web app and mobile app, in every UI language. Found a wrong or clumsy
translation? Fix it and open a pull request, we are happy about every correction.

Merged changes reach the app with its next update.

## Structure

```
en/<area>.ts      English source: every key and its meaning
<lang>/<area>.ts  translations, same keys as English
types.ts          types every file is checked against
tsconfig.json     lets TypeScript check the files on their own
```

Each language has one file per area of the app (`settings.ts`, `search.ts`, `study.ts`, …). The app only downloads
the files of the language and areas it is showing. A text missing in a translation shows up in English.

| Language  | Folder | Status | Address |
| --------- | ------ | ------ | ------- |
| English   | `en`   | source | you |
| German    | `de`   | reviewed | du |
| Japanese  | `ja`   | beta | です/ます |
| Spanish   | `es`   | beta | tú |
| French    | `fr`   | beta | vous |
| Dutch     | `nl`   | beta | je |
| Swedish   | `sv`   | beta | du |
| Russian   | `ru`   | beta | вы |
| Hungarian | `hu`   | beta | te |
| Slovenian | `sl`   | beta | vi |

Beta languages are marked as such in the app until a native speaker has reviewed them. Reviewed a whole language?
Say so in your pull request.

## Fixing a translation

1. Find the text in `<lang>/<area>.ts`. The same key in `en/<area>.ts` tells you what it means, and its comments
   say where a text appears.
2. Change the text. Keep these as they are:
   - `{{params}}`: filled in by the app (`{{count}}`, `{{language}}`, …); they may move within the sentence.
   - `<tags>…</tags>`: links and highlights; translate the text between them.
   - Plural forms: `{ one: "…", other: "…" }` has one entry per plural form of your language
     (Russian `one`, `few`, `many`, `other`; Slovenian `one`, `two`, `few`, `other`).
   - Names (Jotoba, Anki, Android, …), hashtags like `#n5`, Japanese examples and search examples.
3. Check the files (needs [Bun](https://bun.sh) or Node): `bunx -p typescript tsc` reports a misspelled or unknown
   key and a broken file. Your editor shows the same while you type. Params, tags and plural forms are checked again
   when the app takes over the translations.
4. Open a pull request.

Keep labels on buttons, tabs and chips about as short as the English: the phone layout is narrow.

## Adding a language

The app's language doesn't have to be one of the search languages: you can bring in any language you would like to
see Jotoba in.

1. Open an issue first and say which language you want to add. A new language also needs changes to the app itself
   (the language list, the language settings, the mobile app's language options) and a release, which takes time
   from the Jotoba developers. Agreeing first makes sure your work gets used.
2. Copy `en/` to a folder named after the language code (`it/`, `pl/`, `pt/`, …).
3. In each file replace the first lines like in `de/`: import `en` and use `PartialDict<typeof en>` instead of `Dict`.
4. Translate. Missing texts show up in English, so you can also open a pull request for a part of the app first.
5. Run the check and open a pull request. The language goes live once the app supports it, and stays marked as
   beta until someone else who speaks it has reviewed it.

## License

MIT, see [LICENSE](LICENSE).
