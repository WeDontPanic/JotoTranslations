import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Busca en cualquier dirección",
            description:
                "Escribe en inglés, en japonés, en kana o en romaji. Las sugerencias aparecen mientras escribes, y hashtags como #n5 acotan los resultados.",
            descriptionVoice:
                "Escribe en inglés, en japonés, en kana o en romaji, o toca el micrófono para buscar por voz. Las sugerencias aparecen mientras escribes, y hashtags como #n5 acotan los resultados.",
            shortcut: "Ir a la barra de búsqueda",
        },
        type: {
            title: "Elige qué buscar",
            description: "El menú junto al campo de búsqueda cambia entre palabras, kanji, oraciones de ejemplo y nombres.",
            shortcut: "Cambiar en las páginas de resultados",
        },
        radicals: {
            title: "Encuentra kanji por sus partes",
            description:
                "¿No sabes leer un kanji? Abre 部, elige los radicales que reconozcas y Jotoba te mostrará los kanji que encajan.",
        },
        reader: {
            title: "Lee oraciones enteras",
            description:
                "Busca una oración japonesa completa y Jotoba la divide en palabras. Selecciona una palabra para ver su forma de diccionario y cómo se ha conjugado.",
        },
        wordMenu: {
            title: "Más sobre cada resultado",
            description:
                "Abre ⋮ junto a una palabra para ver conjugaciones, oraciones de ejemplo, un enlace para compartir y su página de detalles, donde puedes guardarla en marcadores.",
        },
        settings: {
            title: "Ajustes y ayuda",
            description:
                "En el menú están tus marcadores, los ajustes, las noticias y la página de ayuda, donde puedes leer sobre cada función y volver a empezar este recorrido. Prueba aquí mismo los ajustes de idioma: los cambios se aplican al momento.",
            descriptionSearchOnly:
                "En el menú están tus marcadores, los ajustes, las noticias y la página de ayuda, donde puedes leer sobre cada función y volver a empezar este recorrido. Prueba aquí mismo el idioma de búsqueda: los cambios se aplican al momento.",
        },
    },
    languages: {
        group: "Idiomas",
    },
    progress: "{{current}} de {{total}}",
    announce: "Paso {{current}} de {{total}}. {{title}}. {{description}}",
    close: "Cerrar recorrido",
    back: "Atrás",
    next: "Siguiente",
    done: "Listo",
    preview: {
        types: {
            words: "Palabras",
            kanji: "Kanji",
            sentences: "Oraciones",
            names: "Nombres",
        },
        gloss: "comer",
        form: "pasado, cortés",
        wordMenu: {
            conjugations: "Conjugaciones",
            sentenceSearch: "Buscar oraciones",
            copyLink: "Copiar enlace",
            details: "Detalles",
        },
    },
} satisfies PartialDict<typeof en>;
