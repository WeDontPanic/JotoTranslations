import type en from "../en/app";
import type { PartialDict } from "../types";

export default {
    skipLink: "Saltar al contenido",
    header: {
        home: "Inicio de Jotoba",
        signIn: "Iniciar sesión",
        signUp: "Registrarse",
    },
    account: {
        label: "Cuenta",
        labelNamed: "Cuenta, sesión iniciada como {{name}}",
        signedInAs: "Sesión iniciada como {{name}}",
        bookmarks: "Marcadores",
        settings: "Ajustes",
        signOut: "Cerrar sesión",
        signedOut: "Sesión cerrada",
        signOutFailed: "No se pudo cerrar la sesión. Inténtalo de nuevo.",
    },
    footer: {
        label: "Pie de página",
        about: {
            title: "Acerca de",
            credits:
                "Jotoba usa muchas fuentes de datos libres. Entre las principales están <jmdict>JMdict</jmdict>, <kanjidic>KANJIDIC2</kanjidic>, <kradfile>KRADFILE</kradfile> y <jmnedict>JMnedict</jmnedict>, que son propiedad del <edrdg>Electronic Dictionary Research and Development Group</edrdg> y se usan conforme a su <license>licencia</license>.",
            contributors: "Consulta nuestra página <link>Acerca de</link> para ver a todas las personas que colaboran.",
        },
        links: {
            title: "Enlaces",
            androidApp: "App para Android",
            about: "Acerca de",
            privacy: "Política de privacidad",
            terms: "Condiciones de uso",
            imprint: "Aviso legal",
            licenses: "Licencias de código abierto",
        },
        support: {
            title: "Apóyanos",
            paypal: "Los donativos se reparten entre los desarrolladores",
        },
        socials: {
            title: "Redes sociales",
            github: "Código fuente",
            trello: "Nuestra hoja de ruta",
        },
    },
    cookieBanner: {
        title: "Solo una pregunta sobre cookies",
        text: "Jotoba no tiene anuncios ni cookies de seguimiento.",
        necessary: {
            label: "Necesarias",
            description: "Ajustes, marcadores, atajos e inicio de sesión",
            descriptionLocal: "Ajustes, marcadores y atajos",
            badge: "Siempre activas",
        },
        optional: {
            label: "Carga más rápida",
            description: "Guarda los archivos de la app en este dispositivo para que Jotoba cargue más rápido",
        },
        reject: "Rechazar opcionales",
        allow: "Permitir opcionales",
        settingsLink: "Cámbialo cuando quieras en Ajustes",
        privacyLink: "Política de privacidad",
        saved: "Elección guardada. Puedes cambiarla cuando quieras en Ajustes.",
        savedReject: "Elección guardada. La carga más rápida está desactivada. Puedes cambiarlo cuando quieras en Ajustes.",
        announce:
            "Pregunta sobre cookies: puedes rechazar o permitir que se guarden los archivos de la app para que cargue más rápido.",
        pause: ".",
    },
    notFound: {
        title: "Esta página no existe",
        text: "Puede que el enlace esté roto o que la entrada se haya eliminado.",
        home: "Ir a la página de inicio",
        report: "¿Has llegado aquí desde un enlace? <link>Informar de un enlace roto</link>",
    },
    tourHint: {
        newHere: "¿Primera vez aquí?",
        start: "Hacer un recorrido rápido",
        hide: "Ocultar aviso del recorrido",
    },
    loadError: {
        offline: "No tienes conexión. Esto necesita internet.",
        unreachable: "No se puede conectar con Jotoba ahora mismo. Vuelve a intentarlo en un momento.",
        failed: "No se ha podido cargar. Vuelve a intentarlo.",
        page: {
            offlineTitle: "Esta página necesita internet",
            offlineText:
                "No se había cargado antes de que te quedaras sin conexión. Se abrirá cuando vuelvas a tener conexión.",
            title: "No se ha podido cargar esta página",
            text: "Normalmente basta con recargar.",
            reload: "Recargar página",
        },
    },
    common: {
        close: "Cerrar",
        closeDialog: "Cerrar diálogo",
        closeMessage: "Cerrar mensaje",
        loading: "Cargando…",
        opensInNewTab: "(se abre en una pestaña nueva)",
        copyFailed: "No se pudo copiar al portapapeles",
        scrollBack: "Desplazar hacia atrás",
        scrollForward: "Desplazar hacia delante",
        pages: {
            label: "Páginas",
            first: "Primera página",
            previous: "Página anterior",
            page: "Página {{page}}",
            next: "Página siguiente",
            last: "Última página",
        },
    },
} satisfies PartialDict<typeof en>;
