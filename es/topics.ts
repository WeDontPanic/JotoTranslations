import type en from "../en/topics";
import type { PartialDict } from "../types";

export default {
    title: "Temas",
    intro: "Listas de palabras para explorar: el vocabulario de cada nivel del JLPT, dichos, onomatopeyas y las tres formas del japonés cortés.",
    metaTitle: "Listas de palabras en japonés por tema",
    metaDescription: "Explora vocabulario japonés por nivel del JLPT, yojijukugo de cuatro kanji, refranes, expresiones idiomáticas, onomatopeyas y keigo.",
    back: "Temas",
    groups: {
        jlpt: "Vocabulario del JLPT",
        sayings: "Dichos y onomatopeyas",
        keigo: "Keigo (lenguaje respetuoso)",
    },
    openSearch: "Abrir como búsqueda",
    exampleLabel: "Ejemplo",
    more: "Más temas",
    topWords: "Se muestran las 1000 palabras más comunes.",
    notFound: "Este tema no existe.",
    allTopics: "Todos los temas",
    showTopic: "Todas las palabras: {{name}}",
    items: {
        "jlpt-n5": {
            name: "Vocabulario del JLPT N5",
            short: "Las primeras palabras: lo básico del día a día.",
            intro: "Palabras del nivel más fácil del Examen de Aptitud del Idioma Japonés (JLPT): números, familia, comida y los verbos de la vida cotidiana. Un buen punto de partida cuando ya sabes hiragana y katakana.",
        },
        "jlpt-n4": {
            name: "Vocabulario del JLPT N4",
            short: "Palabras básicas para conversaciones sencillas.",
            intro: "Palabras del segundo nivel del JLPT. Con ellas puedes hablar de tu día, tus planes y lo que sientes con frases sencillas.",
        },
        "jlpt-n3": {
            name: "Vocabulario del JLPT N3",
            short: "Japonés cotidiano, entre lo básico y la fluidez.",
            intro: "Palabras del nivel intermedio del JLPT. Te permiten seguir textos y conversaciones del día a día a velocidad natural, con algo de ayuda.",
        },
        "jlpt-n2": {
            name: "Vocabulario del JLPT N2",
            short: "Palabras para noticias, trabajo y textos largos.",
            intro: "Palabras del penúltimo nivel del JLPT. Abarcan las noticias, el ámbito laboral y textos más extensos sobre temas generales.",
        },
        "jlpt-n1": {
            name: "Vocabulario del JLPT N1",
            short: "Vocabulario avanzado y formal.",
            intro: "Palabras del nivel más alto del JLPT: vocabulario abstracto, formal y literario para textos complejos.",
        },
        yojijukugo: {
            name: "Yojijukugo",
            short: "Expresiones de cuatro kanji.",
            intro: "Compuestos de cuatro kanji, muchos procedentes de los clásicos chinos. Encierran una enseñanza o una imagen en solo cuatro caracteres y son habituales en discursos, en la escuela y en los concursos de televisión.",
            example: "encuentro único en la vida",
        },
        onomatopoeia: {
            name: "Onomatopeyas",
            short: "Palabras que imitan sonidos, estados y sensaciones.",
            intro: "El japonés tiene miles de palabras que imitan sonidos (giongo) o expresan cómo se ve o se siente algo (gitaigo). Aparecen constantemente en la conversación y en el manga, a menudo con と o する.",
            example: "reluciente",
        },
        proverbs: {
            name: "Refranes",
            short: "Dichos que transmiten un poco de sabiduría.",
            intro: "Los kotowaza son refranes con moraleja que suelen citarse completos. Muchos tienen un equivalente en español, aunque con imágenes muy japonesas.",
            example: "Hasta los monos se caen de los árboles.",
        },
        idioms: {
            name: "Expresiones idiomáticas",
            short: "Frases cuyo significado no está en sus palabras.",
            intro: "Los kan'yōku son frases hechas, a menudo con partes del cuerpo o animales, cuyo significado no se deduce palabra por palabra. Apréndelas como un todo.",
            example: "tan ocupado que aceptarías la ayuda de un gato",
        },
        sonkeigo: {
            name: "Sonkeigo (lenguaje honorífico)",
            short: "Palabras que elevan a quien realiza la acción.",
            intro: "El lenguaje honorífico eleva a quien realiza la acción, normalmente tu interlocutor o alguien de mayor rango. Nunca lo uses para hablar de ti.",
            example: "venir, ir, estar (honorífico)",
        },
        kenjougo: {
            name: "Kenjōgo (lenguaje humilde)",
            short: "Palabras con las que te rebajas por respeto.",
            intro: "El lenguaje humilde te rebaja a ti o a tu grupo para mostrar respeto hacia la otra persona. Úsalo solo para tus propias acciones.",
            example: "ir, venir (humilde)",
        },
        teineigo: {
            name: "Teineigo (lenguaje cortés)",
            short: "El estilo cortés para personas que no conoces bien.",
            intro: "Palabras y formas corteses, como です y ます, para dirigirte a desconocidos, clientes y compañeros de trabajo. La opción segura cuando tienes dudas.",
            example: "hay, es (cortés)",
        },
    },
} satisfies PartialDict<typeof en>;
