import type en from "../en/help";
import type { PartialDict } from "../types";

export default {
    title: "Ayuda",
    description:
        "Cómo buscar en Jotoba en inglés, japonés o romaji, leer oraciones enteras, filtrar resultados con hashtags como #n5 y usar atajos de teclado.",
    intro: "Jotoba es un diccionario de palabras japonesas, kanji, oraciones de ejemplo y nombres. Esta página te muestra todo lo que puedes hacer con él, desde tu primera búsqueda hasta los atajos que más adelante te ahorrarán tiempo. Los ejemplos son enlaces, así que puedes probar cada uno al momento.",
    contents: "En esta página",
    nav: {
        search: "Buscar",
        reading: "Leer",
        hashtags: "Hashtags",
        results: "Resultados",
        shortcuts: "Atajos",
        bookmarks: "Marcadores y ajustes",
        flashcards: "Tarjetas",
        offline: "Sin conexión",
        moreHelp: "Más ayuda",
    },
    tour: {
        title: "¿Prefieres que te lo enseñemos?",
        text: "El recorrido te señala la barra de búsqueda, los tipos de búsqueda, el selector de radicales y el menú en la página en la que estás, y de paso te deja elegir tus idiomas.",
        button: "Hacer el recorrido",
    },
    topic: {
        try: "Probar",
    },
    queryLink: {
        searchFor: "Buscar ",
        in: " en ",
        types: {
            kanji: "Kanji",
            sentences: "Oraciones",
            names: "Nombres",
        },
    },
    search: {
        title: "Empieza con una búsqueda",
        lead: "Escribe en la barra de búsqueda lo que sepas. No tiene por qué estar en japonés.",
        directions: {
            title: "Busca en cualquier dirección",
            text: "Busca en inglés, en japonés (kanji o kana) o en romaji, la escritura del japonés con letras latinas. Si eliges otro idioma de búsqueda en los <link>ajustes</link>, por ejemplo español, también puedes buscar en ese idioma.",
        },
        types: {
            title: "Elige qué buscar",
            text: "El menú junto al campo de búsqueda cambia entre palabras, kanji, oraciones de ejemplo y nombres. Al cambiarlo, tu búsqueda se repite. Si otro tipo tiene resultados para tu consulta, la página de resultados te lo indica.",
        },
        wildcards: {
            title: "Rellena huecos con comodines",
            text: "¿Solo conoces parte de una palabra? En una búsqueda en japonés, * equivale a cualquier número de caracteres: <ja>*車</ja> encuentra palabras que terminan en <ja>車</ja>, <ja>車*</ja> las que empiezan por él y <ja>*車*</ja> todas las que lo contienen. Un ? equivale a exactamente un carácter, así que <ja>宇宙?行士</ja> encuentra <ja>宇宙飛行士</ja>.",
            boundaries:
                "Si el lector de oraciones divide una búsqueda así en varias palabras, únelas con «Editar límites de palabra». Los comodines funcionan con kanji y kana, no con inglés ni romaji.",
        },
        suggestions: {
            title: "Elige entre las sugerencias",
            text: "Las sugerencias aparecen mientras escribes. Selecciona una para buscarla. Si escribes #, las sugerencias pasan a ser hashtags, que se explican <hashtags>más abajo</hashtags>. Con el teclado puedes moverte por ellas y abrir una búsqueda en una pestaña nueva; consulta los <shortcuts>atajos de teclado</shortcuts>.",
        },
    },
    reading: {
        title: "Lee textos en japonés",
        lead: "¿Has encontrado una oración que aún no sabes leer? Jotoba puede dividirla en palabras, reconocer formas conjugadas y ayudarte a encontrar los kanji que no conoces.",
        sentences: {
            title: "Lee oraciones enteras",
            text: "Busca una oración japonesa completa y Jotoba la divide en palabras. Selecciona una palabra para ver su forma de diccionario y cómo se ha conjugado.",
            boundaries:
                "Si una oración se divide por el sitio equivocado, usa el botón del lápiz para marcar tú los límites de palabra. Se guardan en el enlace, así que puedes compartir la oración tal como la has dividido.",
        },
        conjugations: {
            title: "Consulta palabras conjugadas",
            text: "No necesitas la forma de diccionario. Busca la palabra tal como la encontraste y Jotoba te muestra la palabra base junto con las formas que ha detectado, por ejemplo negativa y pasado.",
        },
        numbers: {
            title: "Lee números",
            text: "Busca un número escrito en japonés para ver su valor en cifras.",
        },
        radicals: {
            title: "Encuentra kanji por sus partes",
            text: "¿No sabes leer un kanji? Abre <ja>部</ja> junto al campo de búsqueda y elige los radicales que reconozcas, es decir, las partes de las que se compone un kanji. Las pestañas los ordenan por número de trazos. Cada radical que añades acota los kanji que encajan, y las sugerencias de búsqueda también siguen tu selección.",
            search: "¿No sabes qué radical estás viendo? Escribe en el campo de búsqueda del selector: un kanji muestra sus radicales, el kana muestra los radicales de las palabras que coinciden, y el inglés o el romaji encuentran radicales por su nombre.",
        },
    },
    hashtags: {
        title: "Acota con hashtags",
        lead: "Los hashtags empiezan por # y se escriben en la barra de búsqueda, antes o después de lo que buscas. Cambian el tipo de búsqueda o filtran los resultados, por ejemplo a un nivel del JLPT o solo a verbos.",
        how: {
            title: "Cómo funcionan los hashtags",
            suggest: "Escribe # y la barra de búsqueda te sugiere hashtags, así que no tienes que memorizarlos.",
            case: "Da igual si usas mayúsculas o minúsculas: #N5 y #n5 son lo mismo.",
            combine: "Puedes combinarlos: #n5 #verb encuentra verbos del N5.",
            withoutTerm: "Los filtros funcionan sin término de búsqueda: #n5 por sí solo muestra todas las palabras del N5.",
        },
        types: {
            title: "Cambia el tipo de búsqueda",
            text: "#word, #kanji, #sentence y #name tienen prioridad sobre el menú junto al campo de búsqueda. Son prácticos si prefieres seguir escribiendo, o en un enlace que envías a alguien.",
        },
        hidden: {
            title: "Practica con las traducciones ocultas",
            text: "Añade #hidden a una búsqueda de oraciones y las traducciones permanecerán ocultas hasta que las descubras, oración por oración. Para ocultarlas en todas las búsquedas de oraciones, activa <link>{{setting}}</link> en los ajustes.",
        },
        jlpt: {
            title: "Filtra por nivel del JLPT",
            text: "De #n5 a #n1 limitan palabras, kanji y oraciones a un nivel del Japanese-Language Proficiency Test, siendo N5 el más fácil. De #jlpt5 a #jlpt1 también funcionan.",
        },
        all: {
            title: "Todos los hashtags de filtro",
            text: "La mayoría de los filtros se aplican a la búsqueda de palabras. Selecciona un hashtag para ver todas las palabras que lo tienen.",
        },
        list: "Hashtags: {{group}}",
        showAll: {
            one: "Mostrar los {{count}} campos temáticos",
            many: "Mostrar los {{count}} campos temáticos",
            other: "Mostrar los {{count}} campos temáticos",
        },
        showFewer: "Mostrar menos campos temáticos",
        groups: {
            partOfSpeech: {
                title: "Categoría gramatical",
                description: "Qué tipo de palabra es.",
            },
            verbs: {
                title: "Verbos y escritura",
                description: "Clases de verbos, verbos suru y cómo se suele escribir una palabra.",
            },
            register: {
                title: "Registro y tono",
                description: "Lo cortés, coloquial o delicada que es una palabra, y quién suele usarla.",
            },
            old: {
                title: "Palabras antiguas y poco frecuentes",
                description: "Palabras anticuadas, históricas o que hoy apenas se usan.",
            },
            sayings: {
                title: "Dichos y tipos de palabra",
                description: "Refranes, modismos, compuestos de cuatro kanji, onomatopeyas y abreviaturas.",
            },
            names: {
                title: "Nombres y cosas",
                description:
                    "Nombres propios del diccionario de palabras, como lugares, empresas u obras. Para consultar el nombre de una persona, usa la búsqueda de nombres.",
            },
            subjects: {
                title: "Campos temáticos",
                description: "Palabras de un campo concreto, como la medicina, el derecho o el sumo.",
            },
            kanji: {
                title: "Kanji",
                description: "Los kokuji son kanji creados en Japón.",
            },
        },
    },
    results: {
        title: "Saca más partido a los resultados",
        lead: "Cada entrada contiene más que su primera línea.",
        labels: {
            title: "Qué significan las etiquetas",
            common: "Una palabra común",
            jlpt: "El nivel del JLPT, de N5 (el más fácil) a N1",
            sentenceFrom: "Una oración de {{source}}",
            ownSentence: "Una oración añadida por el equipo de Jotoba",
            sources: "De dónde vienen las palabras, las oraciones y el audio se indica en la página <link>Acerca de</link>.",
        },
        words: {
            title: "Palabras",
            text: "Reproduce el audio, consulta el acento tonal y otras grafías, y selecciona una burbuja de kanji para abrir ese kanji. Debajo de un significado puedes desplegar una oración de ejemplo.",
            menu: "El menú ⋮ junto a una palabra tiene el resto: la tabla de conjugación, las colocaciones, su pareja transitiva o intransitiva, oraciones que usan la palabra, una descarga del audio, «Editar en JMdict», «Copiar enlace» y la página de detalles.",
            furigana:
                "Haz doble clic en el furigana sobre una palabra para copiar su lectura. «{{setting}}» en los <link>ajustes</link> lo activa o desactiva.",
        },
        kanji: {
            title: "Kanji",
            text: "Reproduce el orden de trazos, avanza paso a paso o cambia su velocidad. Selecciona el kanji grande para ver las partes de las que se compone. Los compuestos se agrupan por lectura, y al seleccionar una lectura se muestran las palabras que la usan. El radical, los componentes y los kanji parecidos son enlaces, así que puedes seguir explorando. También se pueden mostrar las lecturas en chino, coreano y vietnamita.",
        },
        sentences: {
            title: "Oraciones",
            text: "La etiqueta indica de dónde viene una oración. Su menú abre la oración en el lector de oraciones para consultar sus palabras, la abre en Tatoeba o copia un enlace a ella.",
        },
        names: {
            title: "Nombres",
            text:
                "Los resultados de nombres muestran la lectura, una transcripción y, si se conocen, el género y el tipo de nombre.",
        },
        sharing: {
            title: "Páginas de detalles y enlaces",
            pages: "Las palabras y las oraciones tienen su propia página de detalles, con pestañas de kanji, oraciones, colocaciones y conjugaciones, y un botón para compartir.",
            links: "Los enlaces de búsqueda conservan el tipo de búsqueda, la página, la palabra que seleccionaste en el lector de oraciones y tus límites de palabra. Con «{{setting}}» activado en los ajustes, quien abra tu enlace verá el mismo idioma de búsqueda que usaste tú.",
        },
    },
    shortcuts: {
        title: "Trabaja más rápido con el teclado",
        lead: "En un ordenador puedes usar casi todo Jotoba sin ratón. Los atajos de una sola tecla no funcionan mientras escribes en un campo de texto.",
        off: "Los atajos de teclado están desactivados en este navegador. Las teclas estándar siguen funcionando.",
        turnOn: "Activarlos",
        anywhere: "En cualquier lugar",
        results: "En las páginas de resultados",
        searchBar: "En la barra de búsqueda",
        playAudio: "Reproducir el primer audio de la página",
        pages: "Ir a las páginas 1 a 9",
        change: "Puedes cambiar estos atajos o desactivarlos en <link>{{page}}</link>. Los cambios solo se aplican a este navegador.",
        standard: {
            title: "Teclas estándar",
            text: "Estas teclas siguen las convenciones habituales del teclado, así que funcionan igual que en otros sitios y no se pueden cambiar.",
        },
        list: {
            off: "Desactivado",
            or: "o",
            to: "a",
        },
    },
    bookmarks: {
        title: "Guarda palabras y adapta Jotoba",
        lead: "Dos apartados del menú adaptan Jotoba a tu forma de estudiar.",
        bookmarks: {
            title: "Marcadores",
            text: "Guarda palabras y oraciones en tus propias listas y añádeles notas. Sin cuenta, se quedan en este navegador; con cuenta, se sincronizan con todos los dispositivos en los que inicies sesión. Usa el botón de marcador en una página de detalles y encontrarás tus listas en <link>{{menu}}</link>, en el menú.",
            textLocal:
                "Guarda palabras y oraciones en tus propias listas y añádeles notas. Se quedan en este navegador. Usa el botón de marcador en una página de detalles y encontrarás tus listas en <link>{{menu}}</link>, en el menú.",
        },
        settings: {
            title: "Ajustes",
            intro: "Algunas opciones que vale la pena conocer:",
            language:
                "<link>{{setting}}</link>: busca y lee los significados en otro idioma, como el español. «{{alwaysEnglish}}» añade además los significados en inglés.",
            hideTranslation: "<link>{{setting}}</link>: lee cada oración de ejemplo antes de ver su traducción.",
            kanji: "<link>{{setting}}</link>: qué partes de las palabras y los kanji se muestran, como las lecturas, el acento tonal o el orden de trazos, y cómo se reproduce la animación del orden de trazos.",
            theme: "<link>{{setting}}</link>: seguir al sistema, o siempre claro u oscuro.",
            languageInLinks: "<link>{{setting}}</link>: los enlaces que compartes se abren en el mismo idioma de búsqueda.",
        },
    },
    flashcards: {
        title: "Estudia con tarjetas",
        lead: "Cualquier lista de marcadores puede convertirse en un mazo. Jotoba planifica las tarjetas con FSRS, para que cada una vuelva justo antes de que la olvides.",
        start: {
            title: "Empezar una lista",
            text: "Abre una lista y elige «Empezar a aprender». Tú decides cuántas tarjetas nuevas se añaden al día. El progreso pertenece solo a esa lista: una palabra que está en dos listas se estudia en cada una.",
            kinds: "Una palabra tiene hasta tres tipos de tarjeta: significado, lectura y evocación. El siguiente tipo solo empieza cuando has sabido el anterior en un día anterior.",
        },
        rating: {
            title: "Valorar una tarjeta",
            text: "Piensa la respuesta y luego muéstrala. Elige «Otra vez» si no la sabías y, si no, «Lo sabía». Sinceridad ante todo: el tiempo que aparece en los botones indica cuándo vuelve la tarjeta. Las tarjetas que olvidas vuelven unas cuantas tarjetas después en la misma ronda. A una palabra nueva que ya conocías dale «Ya lo conocía».",
            fine: "<link>{{setting}}</link> añade «Difícil» y «Fácil». «Difícil» sigue contando como sabida.",
        },
        stages: {
            title: "Fases y memoria",
            text: "Cada palabra está en la fase del tipo más débil que hayas empezado, y en «Nueva» hasta que empiezas uno: «Aprendiendo» mientras su duración en memoria es de menos de una semana, «Conocida» hasta dos meses y «Dominada» a partir de ahí.",
            memory: "Memoria: la probabilidad de que sepas la tarjeta ahora mismo. Baja un poco cada día hasta que la repasas.",
            span: "Duración en memoria: cuántos días pasan hasta que solo sabrías la tarjeta 9 de cada 10 veces. Cada repaso acertado la alarga.",
            retention:
                "<link>{{setting}}</link>: las tarjetas vuelven cuando tu recuerdo de ellas baja hasta este valor. Cuanto más alto, más repasos.",
        },
        fewer: {
            title: "Por qué salen menos tarjetas",
            intro: "A veces una lista muestra menos tarjetas pendientes o nuevas de las que esperas. El resumen indica los motivos:",
            resting:
                "Cada palabra sale como mucho una vez por día de estudio. Sus otras tarjetas pendientes descansan hasta mañana. Un día de estudio empieza a las 4 de la madrugada.",
            waiting:
                "Las tarjetas de lectura y de evocación esperan hasta que hayas sabido el tipo anterior en un día anterior.",
            limit: "Las tarjetas nuevas se detienen al llegar al límite diario de la lista.",
            backlog:
                "Si hay más repasos pendientes de los que caben en dos rondas, las tarjetas nuevas se pausan hasta que te pongas al día. Primero van las tarjetas que más probablemente aún sabes. Aun así, puedes dejar que salgan tarjetas nuevas durante un día.",
        },
        practice: {
            title: "Cuando no hay nada pendiente",
            ahead: "«Adelantar repaso» toma tarjetas que aún no están pendientes, las menos seguras primero, pero ninguna que ya hayas valorado hoy. Cuenta como un repaso: las sabidas vuelven algo más tarde y las olvidadas, antes.",
            browse: "«Solo hojear» pasa las tarjetas sin valorarlas. No cambia nada.",
        },
        tricky: {
            title: "Palabras rebeldes",
            text: "Una palabra que has olvidado tres veces (puedes cambiarlo en los ajustes de aprendizaje) se marca como rebelde. A la octava vez, la lista de palabras te sugiere escribir en la nota tu propio truco para recordarla, que suele ayudar más que otras rondas.",
            actions:
                "En los detalles de una palabra puedes pausarla, para que quede fuera de las rondas, o restablecerla, para que vuelva a empezar como tarjeta nueva. Su historial se mantiene.",
        },
    },
    offline: {
        title: "Busca sin internet",
        lead: "La app puede guardar el diccionario en tu dispositivo, para que puedas consultar palabras en el tren, en el extranjero o en cualquier sitio sin conexión.",
        download: {
            title: "Descarga el diccionario",
            text: "Descárgalo una vez en <link>Diccionario sin conexión</link>, en el menú. Verás su tamaño antes de empezar y, con datos móviles, la app te pregunta primero. Nada se descarga por sí solo.",
        },
        works: {
            title: "Qué funciona sin conexión",
            intro: "Una vez en tu dispositivo, esto funciona sin conexión:",
            words: "Buscar palabras, con sugerencias mientras escribes",
            details: "Detalles de palabras, sin búsqueda de oraciones ni grabaciones",
            kanji: "Kanji, el selector de radicales y el orden de trazos",
            voice: "<link>{{setting}}</link>: cuando no hay grabación, la voz japonesa de tu dispositivo lee en voz alta palabras y oraciones.",
        },
        needs: {
            title: "Qué necesita internet",
            intro: "Algunas cosas solo funcionan en línea:",
            sentencesNames: "La búsqueda de oraciones y la de nombres",
            recordings: "Las grabaciones de audio",
            reader: "Dividir oraciones enteras en palabras. Sin conexión, busca palabra por palabra.",
            query: "Comodines (* y ?), hashtags y comillas en una búsqueda",
        },
        now: {
            title: "Cuando no tienes conexión",
            chip: "Sin conexión, aparece «Sin conexión» en la parte superior de la pantalla. Tócalo para ver qué funciona en ese momento.",
            results:
                "Los resultados vienen entonces de tu dispositivo y se marcan como resultados sin conexión. Su orden puede ser distinto del de en línea, y los errores ortográficos no se corrigen.",
            english:
                "Los significados en inglés siempre están incluidos. Para algunos idiomas puedes descargar un paquete de idioma con sus significados.",
        },
        updates: {
            title: "Actualizaciones y almacenamiento",
            text: "La app nunca actualiza el diccionario por sí sola. Cuando hay datos nuevos, la página de inicio y la página del diccionario sin conexión te los ofrecen, y tú decides cuándo descargarlos.",
            manage: "En <link>Diccionario sin conexión</link>, en el menú, también puedes buscar actualizaciones, comprobar que los datos están completos o borrarlos para liberar espacio.",
        },
    },
    moreHelp: {
        title: "Más ayuda",
        lead: "¿Tienes una pregunta que esta página no responde, o algo no funciona como esperabas?",
        ask: "Pregunta en <discord>Discord</discord> o en <reddit>Reddit</reddit>. La <trello>hoja de ruta en Trello</trello> muestra en qué estamos trabajando. Si lo que está mal es una entrada del diccionario, usa «Editar en JMdict» en el menú ⋮ de la palabra.",
        tour: "Puedes volver a empezar el recorrido desde «{{menu}}», en el menú. Jotoba también está disponible como <app>app para Android</app>.",
    },
} satisfies PartialDict<typeof en>;
