import type en from "../en/auth";
import type { PartialDict } from "../types";

export default {
    title: {
        login: "Iniciar sesión",
        register: "Registrarse",
    },
    email: {
        label: "Correo electrónico",
        placeholder: "tu@ejemplo.com",
    },
    username: {
        label: "Nombre de usuario",
        placeholder: "3–20 caracteres",
    },
    password: {
        label: "Contraseña",
        placeholderLogin: "Tu contraseña",
        placeholderRegister: "Al menos 8 caracteres",
        forgot: "¿Has olvidado la contraseña?",
    },
    repeat: {
        label: "Repetir contraseña",
        placeholder: "Vuelve a escribir tu contraseña",
    },
    strength: {
        tooWeak: "Demasiado débil",
        weak: "Débil",
        okay: "Aceptable",
        good: "Buena",
        strong: "Fuerte",
    },
    errors: {
        emailRequired: "Falta el correo electrónico",
        emailInvalid: "Escribe un correo electrónico válido",
        emailTaken: "Este correo electrónico ya está registrado",
        usernameRequired: "Falta el nombre de usuario",
        usernameTooShort: "El nombre de usuario es demasiado corto",
        usernameTooLong: "El nombre de usuario es demasiado largo",
        usernameTaken: "Este nombre de usuario ya está ocupado",
        passwordRequired: "Falta la contraseña",
        passwordTooShort: "Debe tener al menos 8 caracteres",
        passwordTooLong: "La contraseña es demasiado larga",
        passwordWeak: "Esta contraseña es demasiado débil",
        repeatRequired: "Repite tu contraseña",
        repeatMismatch: "Las contraseñas no coinciden",
        wrongLogin: "Correo electrónico o contraseña incorrectos",
        rateLimited: "Demasiados intentos. Espera un momento y vuelve a intentarlo.",
        network: "No se puede conectar con el servidor. Inténtalo de nuevo.",
        unknown: "Algo ha fallado. Inténtalo de nuevo.",
    },
    submit: {
        login: "Iniciar sesión",
        register: "Crear cuenta",
        loginPending: "Iniciando sesión…",
        registerPending: "Creando cuenta…",
    },
    legal: "Al registrarte, aceptas las <terms>Condiciones de uso</terms> y la <privacy>Política de privacidad</privacy>.",
    switch: {
        hasAccount: "¿Ya tienes una cuenta?",
        noAccount: "¿Aún no tienes cuenta?",
        login: "Iniciar sesión",
        register: "Registrarse",
    },
    toast: {
        welcome: "¡Te damos la bienvenida a Jotoba, {{name}}!",
        signedInAs: "Sesión iniciada como {{name}}",
        signedIn: "Sesión iniciada",
    },
} satisfies PartialDict<typeof en>;
