import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Вход",
        register: "Регистрация",
    },
    email: {
        label: "Эл. почта",
        placeholder: "you@example.com",
    },
    username: {
        label: "Имя пользователя",
        placeholder: "3–20 символов",
    },
    password: {
        label: "Пароль",
        placeholderLogin: "Ваш пароль",
        placeholderRegister: "Не менее 8 символов",
        forgot: "Забыли пароль?",
    },
    repeat: {
        label: "Повторите пароль",
        placeholder: "Введите пароль ещё раз",
    },
    strength: {
        tooWeak: "Слишком слабый",
        weak: "Слабый",
        okay: "Средний",
        good: "Хороший",
        strong: "Надёжный",
    },
    errors: {
        emailRequired: "Укажите эл. почту",
        emailInvalid: "Введите корректный адрес эл. почты",
        emailTaken: "Этот адрес уже зарегистрирован",
        usernameRequired: "Укажите имя пользователя",
        usernameTooShort: "Имя пользователя слишком короткое",
        usernameTooLong: "Имя пользователя слишком длинное",
        usernameTaken: "Это имя пользователя уже занято",
        passwordRequired: "Введите пароль",
        passwordTooShort: "Не менее 8 символов",
        passwordTooLong: "Пароль слишком длинный",
        passwordWeak: "Этот пароль слишком слабый",
        repeatRequired: "Повторите пароль",
        repeatMismatch: "Пароли не совпадают",
        wrongLogin: "Неверная эл. почта или пароль",
        rateLimited: "Слишком много попыток. Подождите немного и попробуйте снова.",
        network: "Сервер недоступен. Попробуйте ещё раз.",
        unknown: "Что-то пошло не так. Попробуйте ещё раз.",
    },
    submit: {
        login: "Войти",
        register: "Создать аккаунт",
        loginPending: "Вход…",
        registerPending: "Создание аккаунта…",
    },
    legal: "Регистрируясь, вы принимаете <terms>Условия использования</terms> и <privacy>Политику конфиденциальности</privacy>.",
    switch: {
        hasAccount: "Уже есть аккаунт?",
        noAccount: "Ещё нет аккаунта?",
        login: "Войти",
        register: "Регистрация",
    },
    toast: {
        welcome: "Добро пожаловать в Jotoba, {{name}}!",
        signedInAs: "Вы вошли как {{name}}",
        signedIn: "Вы вошли",
    },
} satisfies PartialDict<typeof en>;
