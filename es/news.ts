import type en from "../en/news";
import type { PartialDict } from "../types";

export default {
    title: "Noticias",
    description: "Novedades de Jotoba: nuevas funciones, actualizaciones de datos y correcciones.",
    intro: "Novedades sobre Jotoba, de la más reciente a la más antigua.",
    error: {
        title: "Ahora mismo no se pueden cargar las noticias",
        text: "Vuelve a intentarlo en un momento.",
        retry: "Reintentar",
    },
    empty: {
        title: "Aún no hay noticias",
        text: "Aquí aparecerán las novedades sobre Jotoba.",
    },
    new: "Nuevo",
} satisfies PartialDict<typeof en>;
