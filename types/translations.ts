/* ---  Translation files  --- */
interface RadPickerTranslation {
    select_kanji: string;
    search_placeholder: string;
    select_kanji_placeholder: string;
}

interface ImageOverlayTranslation {
    select: string;
    picture: string;
    error: string;
}

interface VoiceOverlayTranslation {
    start: string;
    stop: string;
    listening: string;
    not_listening: string;
    perm_denied: string;
}

interface CategoriesTranslation {
    words: string;
    kanji: string;
    sentences: string;
    names: string;
}

interface NavbarTitleTranslation {
    profile: string;
    settings: string;
    links: string;
}

interface NavbarActionButtonTranslation {
    language: string;
    search: string;
    display: string;
    qol: string;
    privacy: string;
    github: string;
    donation: string;
    discord: string;
    instagram: string;
    about: string;
    help: string;
    news: string;
}

interface NavbarButtonTranslation {
    home: string;
    back: string;
    exit: string;
}

interface NavbarTranslation {
    title: NavbarTitleTranslation;
    action_button: NavbarActionButtonTranslation;
    nav_button: NavbarButtonTranslation;
}

interface SettingsLanguageTranslation {
    title_language: string;
    title_langSelect: string;
    select_search: string;
    select_page: string;
    title_ordering: string;
    checkbox_alwaysEnglish: string;
    checkbox_englishOnTop: string;
}

interface SettingsSearchTranslation {
    title_words: string;
    checkbox_showExampleSentences: string;
    checkbox_showKanjiTranslation: string;
    checkbox_showKanjiBubbles: string;
    title_sentences: string;
    checkbox_showFuri: string;
    checkbox_hideTranslation: string;
    title_kanji: string;
    show_other_langs: string;
    show_kanji: string;
    show_numbers: string;
    anim_speed: string;
}

interface SettingsDisplayTranslation {
    title_user_pref: string;
    title_theme: string;
    option_auto: string;
    option_dark: string;
    option_light: string;
    title_jlpt: string;
    n5: string;
    n4: string;
    n3: string;
    n2: string;
    n1: string;
    title_itemsPerPage: string;
    words_per_page: string;
    kanji_per_page: string;
    names_per_page: string;
    sentences_per_page: string;
}

interface SettingsQolTranslation {
    title_search: string;
    checkbox_search_anim: string;
    checkbox_index_keyboard: string;
    checkbox_focusAfterSearch: string;
    checkbox_focusInputAfterSearch: string;
    title_other: string;
    checkbox_use_japanese_fonts: string;
    checkbox_enable_furi_copy: string;
}

interface SettingsPrivacyTranslation {
    title_privacy: string;
    allow_cookie: string;
    explanation: string;
}

interface SettingsTranslation {
    language: SettingsLanguageTranslation;
    search: SettingsSearchTranslation;
    display: SettingsDisplayTranslation;
    qol: SettingsQolTranslation;
    privacy: SettingsPrivacyTranslation;
}

interface SearchbarTranslation {
    placeholder: string;
    rad_picker: RadPickerTranslation;
    image_overlay: ImageOverlayTranslation;
    voice_overlay: VoiceOverlayTranslation;
    categories: CategoriesTranslation;
    ai_preview: AiPreviewTranslation;
}

interface AiPreviewTranslation {
    beta: string;
    message: string;
    enabled: string;
    disabled: string;
}

interface LoaderMessagesTranslation {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
}

interface IndexTranslation {
    search: string;
    radicals: string;
    misc_links: MiscLinks;
}

interface MiscLinks {
    tour_text: string;
    tour_link: string;
}

interface ThreeDotTranslation {
    show_collocations: string;
    show_conjugations: string;
    suffix_transitivity: string;
    sentence_search: string;
    download_audio_tofugu: string;
    download_audio_kanjialive: string;
    edit: string;
    direct_reference: string;
}

interface NounTranslation {
    Normal: string;
    Adverbial: string;
    Prefix: string;
    Suffix: string;
    Temporal: string;
}

interface AdjectiveTranslation {
    PreNounVerb: string;
    Keiyoushi: string;
    KeiyoushiYoiIi: string;
    Ku: string;
    Na: string;
    Nari: string;
    No: string;
    PreNoun: string;
    Shiku: string;
    Taru: string;
}

interface NidanVerbClass {
    Upper: string;
    Lower: string;
}

interface NidanVerbTranslation {
    class: NidanVerbClass;
}

interface YodanVerbTranslation {
    Bu: string;
    Dzu: string;
    Gu: string;
    Hu: string;
    Ku: string;
    Mu: string;
    Nu: string;
    Ru: string;
    Su: string;
    Tsu: string;
    U: string;
    Yu: string;
    Zu: string;
}

interface GodanVerbTranslation {
    Bu: string;
    Gu: string;
    Ku: string;
    Mu: string;
    Nu: string;
    Ru: string;
    Su: string;
    Tsu: string;
    U: string;
    Aru: string;
    USpecial: string;
    Uru: string;
    RuIrreg: string;
    IkuYuku: string;
}

interface IrregularVerbTranslation {
    Nu: string;
    Ru: string;
    Su: string;
    NounOrAuxSuru: string;
    Suru: string;
    SuruSpecial: string;
}

interface VerbTranslation {
    Unspecified: string;
    Intransitive: string;
    Transitive: string;
    Ichidan: string;
    IchidanZuru: string;
    IchidanKureru: string;
    Kuru: string;
    Nidan: NidanVerbTranslation;
    Yodan: YodanVerbTranslation;
    Godan: GodanVerbTranslation;
    Irregular: IrregularVerbTranslation;
}

type PosTranslation =
    | PartOfSpeechMap
    | {
          Noun: NounTranslation;
          Adjective: AdjectiveTranslation;
          Verb: VerbTranslation;
      };

interface WordClassTranslation {
    PreNoun: string;
    Noun: string;
    Pronoun: string;
    Adjective: string;
    Verb: string;
    Adverb: string;
    Particle: string;
    Interjection: string;
    Symbol: string;
    Conjunction: string;
    Suffix: string;
    Prefix: string;
    Space: string;
    Expr: string;
}

interface FieldTranslation extends FieldMap {
    term: string;
}

interface WordAudioTranslation {
    tofugu: string;
    kanjialive: string;
}

interface WordsTranslation {
    common: string;
    jlpt: string;
    audio: WordAudioTranslation;
    number: string;
    inflection: string;
    inflections: string;
    sentence_show: string;
    sentence_hide: string;
    garaigo: string;
    pitches: string;
    other_forms: string;
    xref: string;
    three_dot: ThreeDotTranslation;
    pos: PosTranslation;
    word_class: WordClassTranslation;
    field: FieldTranslation;
    misc: MiscMap;
}

interface KanjiTranslation {
    strokes: string;
    jlpt: string;
    grade: string;
    radical: string;
    parts: string;
    kun: string;
    on: string;
    title_kun: string;
    title_on: string;
    tooltip_jouyou: string;
    tooltip_kokuji: string;
    tooltip_stroke: string;
    tooltip_grade: string;
    tooltip_jlpt: string;
    tooltip_frequency: string;
    similar_kanji: string;
    reading_chinese: string;
    reading_korean: string;
    reading_vietnamese: string;
    anim_reset: string;
}

interface NamesTranslation {
    full_name: string;
    sex: string;
    origin: string;
}

interface SentenceThreeDotTranslation {
    sentence_search: string;
    tatoeba_search: string;
    direct_reference: string;
}

interface SentencesTranslation {
    source_kevin: string;
    source_tatoeba: string;
    sentence_show: string;
    sentence_hide: string;
    three_dot: SentenceThreeDotTranslation;
}

interface DetailsCommonTranslation {
    share: string;
}

interface DetailsTabTranslation {
    word: string;
    words: string;
    kanji: string;
    sentenceTl: string;
    sentences: string;
    collocations: string;
    conjugations: string;
    more: string;
}

interface WordDetailsConjugationsTranslation {
    affirmative: string;
    negative: string;
    present: string;
    present_polite: string;
    past: string;
    past_polite: string;
    te_form: string;
    potential: string;
    passive: string;
    causative: string;
    causative_passive: string;
    imperative: string;
    ba: string;
    tara: string;
    zu: string;
}

interface WordDetailsAudioTranslation {
    tofugu: string;
    kanjialive: string;
}

interface WordDetailsTranslation {
    conjugations: WordDetailsConjugationsTranslation;
    audio: WordDetailsAudioTranslation;
    switch: string;
    Transitive: string;
    Intransitive: string;
    jlpt: string;
    frequency: string;
    edit: string;
}

interface SentenceDetailsTranslation {
    source_tatoeba: string;
    source_kevin: string;
}

interface DetailsTranslation {
    common: DetailsCommonTranslation;
    tabs: DetailsTabTranslation;
    words: WordDetailsTranslation;
    sentences: SentenceDetailsTranslation;
}

interface TourTranslation {
    title_dropdown: string;
    description_dropdown: string;
    description_dropdown_mobile: string;
    title_multilang: string;
    description_multilang: string;
    title_sentencereader: string;
    description_sentencereader: string;
    title_3dot: string;
    title_3dot_mobile: string;
    description_3dot: string;
    description_3dot_mobile: string;
    title_kanjigraphs: string;
    description_kanjigraphs: string;
    action_next: string;
    action_get_started: string;
    action_previous: string;
}

interface TourTranslation {
    title_dropdown: string;
    description_dropdown: string;
    description_dropdown_mobile: string;
    title_multilang: string;
    description_multilang: string;
    title_sentencereader: string;
    description_sentencereader: string;
    title_3dot: string;
    title_3dot_mobile: string;
    description_3dot: string;
    description_3dot_mobile: string;
    title_kanjigraphs: string;
    description_kanjigraphs: string;
    action_next: string;
    action_get_started: string;
    action_previous: string;
}

interface BookmarksTranslation {
    undo: string;
    no_content: string;
}

interface AboutTranslation {
    title_about: string;
    content_about: string;
    dev_preview_backend: string;
    dev_preview_frontend: string;
    title_jotoKun: string;
    content_jotoKun: string;
    title_wkn: string;
    content_wkn: string;
    title_audio: string;
    content_audio: string;
    title_sentences: string;
    content_sentences: string;
    title_anim: string;
    content_anim: string;
    title_jlpt: string;
    content_jlpt: string;
    title_furigana: string;
    content_furigana: string;
}

interface InfoCategoryTranslation {
    title: string;
    description: string;
}

interface InfoTourTranslation extends InfoCategoryTranslation {}

interface InfoShortcutsTranslation extends InfoCategoryTranslation {
    shortcuts: {
        global: {
            title: string;
            wsnk: string;
            slash: string;
        };
        words: {
            title: string;
            p: string;
        };
    };
}

interface InfoSearchbarShortcutsTranslation extends InfoCategoryTranslation {
    shortcuts: {
        arrowsUpDown: string;
        tab: string;
        enter: string;
    };
}

interface InfoRadicalSearchTranslation extends InfoCategoryTranslation {
    explanations: {
        kanji: InfoCategoryTranslation;
        kana: InfoCategoryTranslation;
        romaji: InfoCategoryTranslation;
    };
}

interface InfoPageAlteringHashtagsTranslation extends InfoCategoryTranslation {
    headers: {
        hashtag: string;
        description: string;
        types: string;
    };
    explanations: {
        word: string;
        sentence: string;
        name: string;
        kanji: string;
        hidden: string;
    };
    allTypes: string;
}

interface InfoTranslation {
    tour: InfoTourTranslation;
    shortcuts: InfoShortcutsTranslation;
    searchbarShortcuts: InfoSearchbarShortcutsTranslation;
    radicalSearch: InfoRadicalSearchTranslation;
    hashtags: InfoPageAlteringHashtagsTranslation;
    filterHashtags: InfoCategoryTranslation;
}

interface ImprintTranslation {
    title: string;
    sub_title: string;
    address: string;
    contact: string;
    eu_law: string;
}

interface PagesTranslation {
    loader_messages: LoaderMessagesTranslation;
    index: IndexTranslation;
    words: WordsTranslation;
    kanji: KanjiTranslation;
    names: NamesTranslation;
    sentences: SentencesTranslation;
    details: DetailsTranslation;
    bookmarks: BookmarksTranslation;
    tour: TourTranslation;
    about: AboutTranslation;
    info: InfoTranslation;
    imprint: ImprintTranslation;
}

interface FooterTranslation {
    socials: string;
    trello: string;
    discord: string;
    instagram: string;
    reddit: string;
    support_us: string;
    donations: string;
    credits_title: string;
    credits: string;
    credits_about: string;
    links_title: string;
    about: string;
    applink: string;
    privacy: string;
    imprint: string;
}

interface MessageNoResultTranslation {
    message: string;
    message_alt: string;
    highlight: string;
}

interface MessageDefaultErrorTranslation {
    message: string;
    highlight: string;
}

interface MessageErrorCodeTranslation {
    reason: string;
    hint: string;
}

interface MessageJotobaTranslation {
    header: string;
    highlight: string;
    message: string;
}

interface MessagePartsTranslation {
    default_error: MessageDefaultErrorTranslation;
    no_result: MessageNoResultTranslation;
    303: MessageErrorCodeTranslation;
    400: MessageErrorCodeTranslation;
    401: MessageErrorCodeTranslation;
    404: MessageErrorCodeTranslation;
    408: MessageErrorCodeTranslation;
    unknownCode: MessageErrorCodeTranslation;
    jotoba: MessageJotobaTranslation;
}

interface ToastTranslations {
    direct_reference_copied: string;
    furigana_copied: string;
    audio_copied: string;
    url_copied: string;
    error: ToastErrorTranslation;
    language_preview: LanguagePreviewTranslation;
}

interface ToastErrorTranslation {
    default: string;
}

interface LanguagePreviewTranslation {
    title: string;
    description: string;
    swap: string;
    stay: string;
}

interface PaginatorTranslation {
    first: string;
    last: string;
}

interface LoginTranslation {
    email: string;
    username: string;
    password: string;
    password_repeat: string;
    login: string;
    register: string;
    logout: string;
    not_registered: string;
    already_registered: string;
    sign_in: string;
    create_account: string;
    login_success: string;
    register_success: string;
    logout_success: string;
    error: LoginErrorTranslation;
}

interface LoginErrorTranslation {
    origin: LoginErrorOriginTranslation;
    simple: LoginErrorSimpleTranslation;
    constructed: LoginErrorConstructedTranslation;
}

interface LoginErrorOriginTranslation {
    Email: string;
    Username: string;
}

interface LoginErrorSimpleTranslation {
    default_toast: string;
    invalid_login: string;
    password_repeat: string;
}

interface LoginErrorConstructedTranslation {
    AlreadyExisting: string;
}

interface NotificationsTranslation {
    title: string;
    show: string;
    close: string;
    none_available: string;
}

interface ShareTranslation {
    title: string;
}

interface Translation {
    lang_value: LanguageCode;
    lang_names: TranslationLangName;
    searchbar: SearchbarTranslation;
    navbar: NavbarTranslation;
    settings: SettingsTranslation;
    pages: PagesTranslation;
    paginator: PaginatorTranslation;
    login: LoginTranslation;
    notifications: NotificationsTranslation;
    footer: FooterTranslation;
    toast: ToastTranslations;
    message_pages: MessagePartsTranslation;
    share: ShareTranslation;
}

type TranslationLangName = {
    [x in LanguageCode]: string;
};

type FieldMap = {
    [x in Field]: string;
};

type MiscMap = {
    [x in Misc]: string;
};

type PartOfSpeechMap = {
    [x in PartOfSpeech]: string;
};
