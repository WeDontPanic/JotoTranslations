import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "ログイン",
        register: "新規登録",
    },
    email: {
        label: "メールアドレス",
        placeholder: "you@example.com",
    },
    username: {
        label: "ユーザー名",
        placeholder: "3～20文字",
    },
    password: {
        label: "パスワード",
        placeholderLogin: "パスワード",
        placeholderRegister: "8文字以上",
        forgot: "パスワードを忘れた場合",
    },
    repeat: {
        label: "パスワード（確認）",
        placeholder: "もう一度パスワードを入力",
    },
    strength: {
        tooWeak: "弱すぎる",
        weak: "弱い",
        okay: "普通",
        good: "良い",
        strong: "強い",
    },
    errors: {
        emailRequired: "メールアドレスを入力してください",
        emailInvalid: "有効なメールアドレスを入力してください",
        emailTaken: "このメールアドレスはすでに登録されています",
        usernameRequired: "ユーザー名を入力してください",
        usernameTooShort: "ユーザー名が短すぎます",
        usernameTooLong: "ユーザー名が長すぎます",
        usernameTaken: "このユーザー名はすでに使われています",
        passwordRequired: "パスワードを入力してください",
        passwordTooShort: "8文字以上にしてください",
        passwordTooLong: "パスワードが長すぎます",
        passwordWeak: "このパスワードは弱すぎます",
        repeatRequired: "パスワードをもう一度入力してください",
        repeatMismatch: "パスワードが一致しません",
        wrongLogin: "メールアドレスまたはパスワードが違います",
        rateLimited: "試行回数が多すぎます。しばらく待ってから、もう一度お試しください。",
        network: "サーバーに接続できませんでした。もう一度お試しください。",
        unknown: "問題が発生しました。もう一度お試しください。",
    },
    submit: {
        login: "ログイン",
        register: "アカウントを作成",
        loginPending: "ログイン中…",
        registerPending: "アカウントを作成中…",
    },
    legal: "登録すると、<terms>利用規約</terms>と<privacy>プライバシーポリシー</privacy>に同意したことになります。",
    switch: {
        hasAccount: "アカウントをお持ちですか？",
        noAccount: "アカウントをお持ちでないですか？",
        login: "ログイン",
        register: "新規登録",
    },
    toast: {
        welcome: "Jotobaへようこそ、{{name}}さん！",
        signedInAs: "{{name}}としてログインしました",
        signedIn: "ログインしました",
    },
} satisfies PartialDict<typeof en>;
