import type en from "../en/menu";
import type { PartialDict } from "../types";

export default {
    burger: {
        label: "Menú",
        unread: "Menú ({{count}} noticias sin leer)",
    },
    drawer: {
        title: "Menú",
        mainNav: "Principal",
        aboutNav: "Sobre Jotoba",
        development: "Desarrollo",
        unread: "sin leer",
        offlineUpdate: "(actualización disponible)",
        offlineOutdated: "(necesita actualizarse)",
        offlineRemoved: "(ya no está en este dispositivo)",
    },
    links: {
        bookmarks: "Marcadores",
        settings: "Ajustes",
        history: "Búsquedas recientes",
        offline: "Diccionario sin conexión",
        news: "Noticias",
        help: "Ayuda y recorrido",
        components: "Componentes",
        apiTest: "Prueba de API",
        about: "Acerca de",
        licenses: "Licencias de código abierto",
        privacy: "Política de privacidad",
        terms: "Condiciones de uso",
        imprint: "Aviso legal",
        home: "Inicio",
        quit: "Salir de la app",
    },
    news: {
        button: "Noticias",
        buttonUnread: "Noticias, {{count}} sin leer",
        title: "Noticias",
        freshCount: "{{count}} nuevas",
        new: "Nuevo",
        showAll: "Ver todas las noticias",
        close: "Cerrar",
        empty: "No hay noticias",
        error: "Ahora mismo no se pueden cargar las noticias.",
        retry: "Reintentar",
        status: {
            fresh: {
                one: "{{count}} entrada nueva",
                many: "{{count}} entradas nuevas",
                other: "{{count}} entradas nuevas",
            },
            noneFresh: "No hay entradas nuevas",
        },
    },
} satisfies PartialDict<typeof en>;
