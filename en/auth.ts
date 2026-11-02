import type { Dict } from "../types";

export default {
    title: {
        login: "Sign in",
        register: "Sign up",
    },
    email: {
        label: "Email",
        placeholder: "you@example.com",
    },
    username: {
        label: "Username",
        placeholder: "3–20 characters",
    },
    password: {
        label: "Password",
        placeholderLogin: "Your password",
        placeholderRegister: "At least 8 characters",
        forgot: "Forgot password?",
    },
    repeat: {
        label: "Repeat password",
        placeholder: "Repeat your password",
    },
    strength: {
        tooWeak: "Too weak",
        weak: "Weak",
        okay: "Okay",
        good: "Good",
        strong: "Strong",
    },
    errors: {
        emailRequired: "Email is required",
        emailInvalid: "Enter a valid email address",
        emailTaken: "This email is already registered",
        usernameRequired: "Username is required",
        usernameTooShort: "Username is too short",
        usernameTooLong: "Username is too long",
        usernameTaken: "This username is already taken",
        passwordRequired: "Password is required",
        passwordTooShort: "Must be at least 8 characters",
        passwordTooLong: "Password is too long",
        passwordWeak: "This password is too weak",
        repeatRequired: "Please repeat your password",
        repeatMismatch: "Passwords don't match",
        wrongLogin: "Wrong email or password",
        rateLimited: "Too many attempts. Please wait a moment and try again.",
        network: "Can't reach the server. Please try again.",
        unknown: "Something went wrong. Please try again.",
    },
    submit: {
        login: "Sign in",
        register: "Create account",
        loginPending: "Signing in…",
        registerPending: "Creating account…",
    },
    legal: "By signing up you agree to the <terms>Terms of Use</terms> & <privacy>Privacy Policy</privacy>.",
    switch: {
        hasAccount: "Already have an account?",
        noAccount: "No account yet?",
        login: "Sign in",
        register: "Sign up",
    },
    toast: {
        welcome: "Welcome to Jotoba, {{name}}!",
        signedInAs: "Signed in as {{name}}",
        signedIn: "Signed in",
    },
} as const satisfies Dict;
