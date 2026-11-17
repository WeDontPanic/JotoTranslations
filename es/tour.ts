import type en from "../en/tour";
import type { PartialDict } from "../types";

export default {
    steps: {
        search: {
            title: "Busca en cualquier dirección",
            description:
                "Escribe en inglés, en japonés, en kana o en romaji. Las sugerencias aparecen mientras escribes, y hashtags como #n5 acotan los resultados. Pruébalo con 猫 (gato).",
            descriptionVoice:
                "Escribe en inglés, en japonés, en kana o en romaji, o toca el micrófono para buscar por voz. Las sugerencias aparecen mientras escribes, y hashtags como #n5 acotan los resultados. Pruébalo con 猫 (gato).",
            shortcut: "Ir a la barra de búsqueda",
        },
        details: {
            title: "Cada palabra tiene su propia página",
            description:
                "Selecciona una palabra para abrir su página con todos sus significados, sus kanji, oraciones de ejemplo y conjugaciones.",
            descriptionStatic:
                "Selecciona una palabra en los resultados para abrir su página con todos sus significados, sus kanji, oraciones de ejemplo y conjugaciones.",
        },
        bookmark: {
            title: "Guarda palabras para después",
            description:
                "El botón de marcador guarda una palabra en una lista. En ⋮ hay conjugaciones, oraciones de ejemplo y un enlace para compartir.",
            descriptionMenu:
                "Abre ⋮ junto a una palabra para guardarla, ver sus conjugaciones, buscar oraciones de ejemplo o copiar un enlace.",
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
        type: {
            title: "Elige qué buscar",
            description:
                "El menú junto al campo de búsqueda cambia entre palabras, kanji, oraciones de ejemplo y nombres. Aquí están los kanji de 猫.",
            descriptionStatic:
                "El menú junto al campo de búsqueda cambia entre palabras, kanji, oraciones de ejemplo y nombres.",
            shortcut: "Cambiar en las páginas de resultados",
        },
        settings: {
            title: "Marcadores, ajustes y ayuda",
            description:
                "Abre el menú para ver tus marcadores, los ajustes, las noticias y la página de ayuda, donde puedes reiniciar este recorrido. Prueba aquí mismo los ajustes de idioma, los cambios se aplican al instante.",
            descriptionSearchOnly:
                "Abre el menú para ver tus marcadores, los ajustes, las noticias y la página de ayuda, donde puedes reiniciar este recorrido. Prueba aquí mismo el idioma de búsqueda, los cambios se aplican al instante.",
        },
    },
    menuHint: {
        text: "Las palabras que guardas están en Marcadores. Allí también puedes estudiar cada lista con tarjetas.",
        done: "Listo",
    },
    languages: {
        group: "Idiomas",
    },
    progress: "{{current}} de {{total}}",
    announce: "Paso {{current}} de {{total}}. {{title}}. {{description}}",
    announceResumed: "De vuelta en el recorrido. Paso {{current}} de {{total}}.",
    close: "Cerrar recorrido",
    back: "Atrás",
    next: "Siguiente",
    done: "Listo",
    searchExample: "Buscar {{query}}",
    searching: "Buscando…",
    loading: "Cargando…",
    openMenu: "Abrir menú",
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
            bookmark: "Guardar",
            conjugations: "Conjugaciones",
            sentenceSearch: "Buscar oraciones",
            copyLink: "Copiar enlace",
        },
    },
} satisfies PartialDict<typeof en>;
