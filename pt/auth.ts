import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Entrar",
        register: "Criar conta",
    },
    email: {
        label: "E-mail",
        placeholder: "voce@exemplo.com",
    },
    username: {
        label: "Nome de usuário",
        placeholder: "3–20 caracteres",
    },
    password: {
        label: "Senha",
        placeholderLogin: "Sua senha",
        placeholderRegister: "Pelo menos 8 caracteres",
        forgot: "Esqueceu a senha?",
    },
    repeat: {
        label: "Repetir senha",
        placeholder: "Digite a senha de novo",
    },
    strength: {
        tooWeak: "Fraca demais",
        weak: "Fraca",
        okay: "Razoável",
        good: "Boa",
        strong: "Forte",
    },
    errors: {
        emailRequired: "Informe o e-mail",
        emailInvalid: "Digite um endereço de e-mail válido",
        emailTaken: "Este e-mail já está cadastrado",
        usernameRequired: "Informe o nome de usuário",
        usernameTooShort: "O nome de usuário é curto demais",
        usernameTooLong: "O nome de usuário é longo demais",
        usernameTaken: "Este nome de usuário já está em uso",
        passwordRequired: "Informe a senha",
        passwordTooShort: "Precisa ter pelo menos 8 caracteres",
        passwordTooLong: "A senha é longa demais",
        passwordWeak: "Esta senha é fraca demais",
        repeatRequired: "Repita sua senha",
        repeatMismatch: "As senhas não coincidem",
        wrongLogin: "E-mail ou senha incorretos",
        rateLimited: "Tentativas demais. Espere um pouco e tente de novo.",
        network: "Não foi possível acessar o servidor. Tente de novo.",
        unknown: "Algo deu errado. Tente de novo.",
    },
    submit: {
        login: "Entrar",
        register: "Criar conta",
        loginPending: "Entrando…",
        registerPending: "Criando conta…",
    },
    legal: "Ao criar uma conta, você concorda com os <terms>Termos de uso</terms> e a <privacy>Política de privacidade</privacy>.",
    switch: {
        hasAccount: "Já tem uma conta?",
        noAccount: "Ainda não tem conta?",
        login: "Entrar",
        register: "Criar conta",
    },
    toast: {
        welcome: "Boas-vindas ao Jotoba, {{name}}!",
        signedInAs: "Conectado como {{name}}",
        signedIn: "Você entrou na conta",
    },
} satisfies PartialDict<typeof en>;
