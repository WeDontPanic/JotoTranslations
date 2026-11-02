/** Forms of a text that depends on a count; `other` is required, the others depend on the language. */
export type PluralText = { other: string } & Partial<Record<Exclude<Intl.LDMLPluralRule, "other">, string>>;

/** Texts of one namespace: nested groups with texts or plural forms as leaves. */
export interface Dict {
    [key: string]: string | PluralText | Dict;
}

/** Translation of a namespace: like the English source, but every text may be missing (English is shown then). */
export type PartialDict<T> = {
    [K in keyof T]?: T[K] extends string
        ? string
        : T[K] extends { other: string }
          ? Partial<Record<Intl.LDMLPluralRule, string>>
          : PartialDict<T[K]>;
};
