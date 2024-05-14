type I18 = (key: string, params?: Record<string, string>, defaultValue?: string) => any;
type I18Add = (lang: string, table: Record<string, any>) => void;
type I18Locale = (lang?: string) => string;
type I18Dict = (lang: string) => Record<string, Record<string, any>>;