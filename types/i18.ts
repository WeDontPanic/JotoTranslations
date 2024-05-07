type I18 = (key: string, params?: Record<string, string>, defaultValue?: string) => any;

type I18ProviderValue = [
    I18,
    {
        add: (lang: string, table: Record<string, any>) => void;
        locale: (lang?: string) => string;
        dict: (lang: string) => Record<string, Record<string, any>>;
    }
];
