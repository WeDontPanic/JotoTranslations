import type en from "../en/search";
import type { PartialDict } from "../types";

export default {
    retry: "Reintentar",
    cancel: "Cancelar",
    newTab: "(se abre en una pestaña nueva)",

    meta: {
        page: "{{title}}, página {{page}}",
        join: "{{first}} {{second}}",
        listSeparator: ", ",
        words: {
            inJapanese: "{{query}} en japonés",
            withTags: "Palabras japonesas con {{query}}",
            forWritten: "Palabras japonesas para {{query}}: {{list}}",
            meaning: "Significado de {{word}}",
            meaningOf: "Significado de {{word}}: {{meaning}}",
            queryMeaning: "Significado de {{query}}: {{word}}",
            queryMeaningOf: "Significado de {{query}}: {{word}}, {{meaning}}",
            translation: "{{query}} en japonés: {{word}}",
            description: "{{name}}: {{meanings}}.",
            descriptionPlain: "{{name}}.",
            leadJapanese: "{{query}}: {{text}}",
            leadLatin: "«{{query}}» en japonés: {{text}}",
            fallback: "Palabras japonesas para «{{query}}» en el diccionario Jotoba.",
        },
        facts: {
            common: "Palabra común.",
            commonJlpt: "Palabra común, JLPT N{{level}}.",
            jlpt: "JLPT N{{level}}.",
        },
        kanji: {
            withMeaning: "Kanji {{kanji}}: {{meaning}}, lecturas y orden de trazos",
            plain: "Kanji {{kanji}}: significado, lecturas, orden de trazos",
            item: "{{kanji}}: {{meanings}}",
            description: "{{kanji}}. Lecturas, radicales, componentes y animaciones del orden de trazos.",
        },
        sentences: {
            title: "Oraciones de ejemplo en japonés con {{query}}",
            titleCount: {
                one: "{{count}} oración de ejemplo en japonés con {{query}}",
                many: "{{count}} oraciones de ejemplo en japonés con {{query}}",
                other: "{{count}} oraciones de ejemplo en japonés con {{query}}",
            },
            description: "Oraciones de ejemplo en japonés con {{query}}, con furigana y traducciones.",
        },
        names: {
            title: "{{query}}: nombres japoneses y lecturas",
            titleReading: "{{query}} ({{reading}}): nombres japoneses y lecturas",
            description: "Nombres japoneses para {{query}}: lecturas, transcripciones y tipos de nombre.",
        },
    },

    heading: {
        page: "página {{page}} de {{pages}}",
        separator: ", ",
        words: {
            some: "Palabras para <query></query>",
            count: {
                one: "{{count}} palabra para <query></query>",
                many: "{{count}} palabras para <query></query>",
                other: "{{count}} palabras para <query></query>",
            },
            none: "No hay palabras para <query></query>",
        },
        kanji: {
            some: "Kanji para <query></query>",
            count: {
                one: "{{count}} kanji para <query></query>",
                many: "{{count}} kanji para <query></query>",
                other: "{{count}} kanji para <query></query>",
            },
            none: "No hay kanji para <query></query>",
            someIn: "Kanji en <query></query>",
            countIn: {
                one: "{{count}} kanji en <query></query>",
                many: "{{count}} kanji en <query></query>",
                other: "{{count}} kanji en <query></query>",
            },
            noneIn: "No hay kanji en <query></query>",
            single: "Kanji <query></query>: {{meaning}}",
            singlePlain: "Kanji <query></query>",
        },
        sentences: {
            some: "Oraciones para <query></query>",
            count: {
                one: "{{count}} oración para <query></query>",
                many: "{{count}} oraciones para <query></query>",
                other: "{{count}} oraciones para <query></query>",
            },
            none: "No hay oraciones para <query></query>",
        },
        names: {
            some: "Nombres para <query></query>",
            count: {
                one: "{{count}} nombre para <query></query>",
                many: "{{count}} nombres para <query></query>",
                other: "{{count}} nombres para <query></query>",
            },
            none: "No hay nombres para <query></query>",
        },
    },

    announce: {
        otherWord: "Resultados para {{query}}",
        results: {
            one: "{{count}} resultado, página {{page}} de {{pages}}",
            many: "{{count}} resultados, página {{page}} de {{pages}}",
            other: "{{count}} resultados, página {{page}} de {{pages}}",
        },
        none: "No hay resultados",
        reloaded: "Recargado en línea. {{results}}",
    },

    invalidSplits: "Los límites de palabra personalizados no eran válidos y se han restablecido",

    languageNotice: {
        text: "Resultados en {{language}} (según el enlace)",
        switch: "Cambiar a {{language}}",
    },

    status: {
        loading: "Cargando resultados…",
        jokes: {
            countingWords: "Contando palabras",
            drawingKanji: "Dibujando kanji",
            infinity: "Contando hasta el infinito",
            features: "Planeando nuevas funciones",
            sandwich: "¿Y si te pides un bocadillo?",
            countToTen: "Cuenta hasta 10",
            wifiCable: "Buscando el cable del wifi",
            pnp: "Demostrando que P=NP",
            misspelled: "Añadiendo palabras mal escritaz al azar",
            elevatorMusic: "TODO: poner música de ascensor",
            premium: "Nuestro plan prémium es más rápido",
            ones: "Quedándonos con todos los unos y quitando todos los ceros",
            trapped: "¡Socorro, estoy atrapado en una pantalla de carga!",
            messages: "Añadiendo mensajes de carga nada útiles",
            yoroshiku: "Traduciendo 「よろしく」",
        },
    },

    message: {
        offline: {
            title: "No tienes conexión",
            text: "Comprueba tu conexión y vuelve a intentarlo cuando vuelvas a estar en línea.",
        },
        invalid: {
            title: "Joto no puede con esta búsqueda",
            text: "Prueba con una búsqueda más corta o distinta.",
        },
        error: {
            title: "Parece que Joto está muy ocupado ahora mismo.",
            text: "Vuelve a intentarlo en un momento.",
        },
        empty: {
            title: "No hemos encontrado lo que buscabas.",
            text: "Revisa la ortografía, prueba con una búsqueda más corta o cambia el tipo de búsqueda.",
            otherResults: "Pero hay resultados en otras categorías:",
        },
        number: {
            title: "Más sobre este número",
            text: "Búscalo en las otras categorías:",
            empty: "No hay entradas de diccionario para este número.",
        },
    },

    easterEgg: {
        title: "¡Te pillé!",
        highlight: "¡Sabíamos que te picaría la curiosidad por nuestro nombre!",
        text: "<strong>Jotoba</strong> no es una palabra real. Viene de <kotoba></kotoba>, cambiando la «K» por una «J» de «japonés».",
    },

    help: {
        otherCategory: "Buscar «{{query}}» en otra categoría:",
        otherResults: "Resultados en otras categorías",
        otherLanguages: "Hay resultados en otros idiomas:",
        count: {
            exact: {
                one: ", {{count}} resultado",
                many: ", {{count}} resultados",
                other: ", {{count}} resultados",
            },
            moreThan: {
                one: ", más de {{count}} resultado",
                many: ", más de {{count}} resultados",
                other: ", más de {{count}} resultados",
            },
            fewerThan: {
                one: ", menos de {{count}} resultado",
                many: ", menos de {{count}} resultados",
                other: ", menos de {{count}} resultados",
            },
        },
    },

    sentences: {
        hidden: "Las traducciones están ocultas",
        showAll: "Mostrar todas las traducciones",
        hideAll: "Ocultar todas las traducciones",
    },

    words: {
        customSplits: "Límites de palabra personalizados",
        resetSplits: "Restablecer",
        grammar: "Gramática",
        inflection: "Flexión",
        inflectionText: {
            one: "Hemos detectado la siguiente flexión para <query></query> (<lexeme></lexeme>):",
            many: "Hemos detectado las siguientes flexiones para <query></query> (<lexeme></lexeme>):",
            other: "Hemos detectado las siguientes flexiones para <query></query> (<lexeme></lexeme>):",
        },
        number: "Número",
        numberText: "<query></query> es <value></value>",
    },

    reader: {
        title: "Lector de oraciones",
        words: "Palabras de la oración",
        selected: "Seleccionado: <word></word>",
        wrap: "Ajustar",
        oneLine: "Una línea",
        edit: "Editar límites de palabra",
    },

    splitEditor: {
        title: "Editar límites de palabra",
        help: "Toca entre dos caracteres para separar o unir palabras.",
        boundaries: "Límites de palabra",
        boundary: "Límite entre {{first}} y {{second}}",
        split: "Separado después de {{character}}",
        joined: "{{first}} y {{second}} unidos",
        save: "Guardar",
        reset: "Separar automáticamente",
    },

    report: {
        question: "¿No es el orden que esperabas?",
        title: "Informar de un problema con el orden",
        sending: "Enviando…",
        send: "Enviar informe",
        alreadyReported: "Ya has informado de esta búsqueda. Envía otro informe solo si hay algo más que no está bien.",
        context: {
            search: "Búsqueda",
            page: "Página",
            word: "Palabra",
            position: "Posición {{position}}",
        },
        reason: {
            label: "¿Qué falla?",
            singleWord: "Para informar de una sola palabra, usa el menú que tiene al lado.",
        },
        reasons: {
            listMissing: "Falta una palabra que esperaba o está demasiado abajo",
            listOther: "Otra cosa sobre el orden",
            wordHigher: "Esta palabra debería estar más arriba",
            wordLower: "Esta palabra debería estar más abajo",
            wordNotRelevant: "Esta palabra no tiene que ver con esta búsqueda",
            wordOther: "Otra cosa",
        },
        expected: {
            label: "Palabra esperada",
            subLabel: "Kanji, kana o romaji",
        },
        comment: {
            label: "Comentario",
            optional: "Comentario (opcional)",
            placeholder: "¿Qué esperabas en su lugar?",
            charsLeft: {
                one: "Queda {{count}} carácter",
                many: "Quedan {{count}} caracteres",
                other: "Quedan {{count}} caracteres",
            },
        },
        errors: {
            reason: "Elige qué falla",
            expected: "Escribe la palabra que esperabas",
            comment: "Describe qué falla",
        },
        privacy:
            "No hace falta cuenta. El informe contiene esta búsqueda, el orden de los resultados de esta página y tus respuestas, y solo se lee para mejorar la búsqueda. No incluyas datos personales. <link>Política de privacidad</link>",
        privacyLocal:
            "El informe contiene esta búsqueda, el orden de los resultados de esta página y tus respuestas, y solo se lee para mejorar la búsqueda. No incluyas datos personales. <link>Política de privacidad</link>",
        outcome: {
            rateLimited: "Demasiados informes en poco tiempo. Vuelve a intentarlo dentro de unos minutos.",
            rejected: "No se pudo enviar el informe. Revisa tus respuestas y vuelve a intentarlo.",
            queueFull: "Hay demasiados informes pendientes de envío. Inténtalo más tarde.",
            sent: "Gracias, tu informe se ha enviado",
            queued: "Informe guardado en este dispositivo. Se enviará en cuanto se puedan enviar informes.",
            offline: "No tienes conexión. El informe se enviará cuando vuelvas a estar en línea.",
            duplicate: "Ya has enviado este informe",
        },
    },

    details: {
        tabs: {
            word: "Palabra",
            kanji: "Kanji",
            sentences: "Oraciones",
            collocations: "Colocaciones",
            conjugations: "Conjugaciones",
            words: "Palabras",
        },
        wordSections: "Secciones de la palabra",
        sentenceSections: "Secciones de la oración",
        editInJmdict: "Editar en JMDict",
        conjugationsOf: "Conjugaciones de {{word}}",
        showTranslation: "Mostrar traducción",
        hideTranslation: "Ocultar traducción",
        analyze: "Analizar palabras",
        notFoundTitle: "No encontrado",
        notFound: {
            word: "Esta palabra no existe",
            sentence: "Esta oración no existe",
        },
        notFoundText: "Puede que el enlace esté roto o que la entrada se haya eliminado.",
        loadFailed: {
            word: "No se pudo cargar la palabra",
            sentence: "No se pudo cargar la oración",
        },
        offline: {
            word: "Esta palabra no está en el diccionario sin conexión",
            sentence: "Esta oración necesita internet",
            text: "Se cargará cuando vuelvas a estar en línea.",
            back: "Volver",
        },
        sentences: {
            title: "Oraciones con {{word}}",
            failed: "No se pudieron cargar las oraciones.",
            offline: "Las oraciones de ejemplo necesitan internet. Se cargarán cuando vuelvas a estar en línea.",
            none: "No hay oraciones de ejemplo para {{word}}.",
            all: "Todas las oraciones con {{word}} ({{pages}} páginas)",
            open: "Abrir en la búsqueda de oraciones",
        },
        meta: {
            wordTitle: "Significado de {{name}}: {{meaning}}",
            conjugationTitle: "Conjugación de {{name}}: todas las formas",
            conjugationDescription:
                "Cómo se conjuga {{name}}, «{{meaning}}»: forma cortés, negativa, pasado, forma te, potencial, pasiva, causativa y más.",
            conjugationDescriptionPlain:
                "Cómo se conjuga {{name}}: forma cortés, negativa, pasado, forma te, potencial, pasiva, causativa y más.",
            sentenceTitle: "{{text}} – «{{translation}}»",
            sentenceDescription: "{{text}} «{{translation}}» – las palabras y los kanji de esta oración en japonés.",
            sentenceDescriptionPlain: "{{text}} – las palabras y los kanji de esta oración en japonés.",
        },
    },

    summary: {
        sentence: "<name></name> es {{kind}} que significa «{{gloss}}».",
        sentenceJlpt: "<name></name> es {{kind}} que significa «{{gloss}}» (JLPT N{{level}}).",
        name: {
            readingRomaji: "<written></written> (<reading></reading>, <romaji></romaji>)",
            reading: "<written></written> (<reading></reading>)",
            romaji: "<written></written> (<romaji></romaji>)",
        },
        kinds: {
            noun: "un sustantivo japonés",
            nounAndSuruVerb: "un sustantivo y verbo suru japonés",
            adverb: "un adverbio japonés",
            auxiliary: "un auxiliar japonés",
            auxiliaryAdjective: "un adjetivo auxiliar japonés",
            auxiliaryVerb: "un verbo auxiliar japonés",
            conjunction: "una conjunción japonesa",
            counter: "un contador japonés",
            expression: "una expresión japonesa",
            interjection: "una interjección japonesa",
            numeral: "un numeral japonés",
            pronoun: "un pronombre japonés",
            prefix: "un prefijo japonés",
            suffix: "un sufijo japonés",
            particle: "una partícula japonesa",
            iAdjective: "un adjetivo -i japonés",
            naAdjective: "un adjetivo -na japonés",
            noAdjective: "un adjetivo -no japonés",
            preNounAdjectival: "un adjetivo prenominal japonés",
            adjective: "un adjetivo japonés",
            ichidanVerb: "un verbo ichidan japonés",
            godanVerb: "un verbo godan japonés",
            yodanVerb: "un verbo yodan japonés",
            nidanVerb: "un verbo nidan japonés",
            suruVerb: "un verbo suru japonés",
            irregularVerb: "un verbo irregular japonés",
            verb: "un verbo japonés",
            word: "una palabra japonesa",
        },
        commonKinds: {
            noun: "un sustantivo japonés frecuente",
            nounAndSuruVerb: "un sustantivo y verbo suru japonés frecuente",
            adverb: "un adverbio japonés frecuente",
            auxiliary: "un auxiliar japonés frecuente",
            auxiliaryAdjective: "un adjetivo auxiliar japonés frecuente",
            auxiliaryVerb: "un verbo auxiliar japonés frecuente",
            conjunction: "una conjunción japonesa frecuente",
            counter: "un contador japonés frecuente",
            expression: "una expresión japonesa frecuente",
            interjection: "una interjección japonesa frecuente",
            numeral: "un numeral japonés frecuente",
            pronoun: "un pronombre japonés frecuente",
            prefix: "un prefijo japonés frecuente",
            suffix: "un sufijo japonés frecuente",
            particle: "una partícula japonesa frecuente",
            iAdjective: "un adjetivo -i japonés frecuente",
            naAdjective: "un adjetivo -na japonés frecuente",
            noAdjective: "un adjetivo -no japonés frecuente",
            preNounAdjectival: "un adjetivo prenominal japonés frecuente",
            adjective: "un adjetivo japonés frecuente",
            ichidanVerb: "un verbo ichidan japonés frecuente",
            godanVerb: "un verbo godan japonés frecuente",
            yodanVerb: "un verbo yodan japonés frecuente",
            nidanVerb: "un verbo nidan japonés frecuente",
            suruVerb: "un verbo suru japonés frecuente",
            irregularVerb: "un verbo irregular japonés frecuente",
            verb: "un verbo japonés frecuente",
            word: "una palabra japonesa frecuente",
        },
    },
} satisfies PartialDict<typeof en>;
