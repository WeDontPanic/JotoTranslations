import type en from "../en/input";
import type { PartialDict } from "../types";

export default {
    voice: {
        button: "Búsqueda por voz",
        title: "Búsqueda por voz",
        language: "Idioma",
        japanese: "Japonés",
        start: "Empezar a escuchar",
        stop: "Dejar de escuchar",
        engine: {
            device: "Reconocido en tu móvil",
            online: "Reconocido en línea por Android",
            browser: "Reconocido por tu navegador",
            info: "¿Qué significa esto?",
            about: {
                device: "Tu móvil convierte tu voz en texto por sí mismo, sin conexión: el audio nunca sale de él y Jotoba solo recibe el texto. Para usar el servicio en línea de Android, desactiva «Entrada de voz en el dispositivo» en Ajustes › General.",
                online: "Android envía el audio a su servicio de voz (en la mayoría de los móviles, el de Google) y recibe el texto; Jotoba solo recibe el texto. Tu móvil también puede hacerlo sin conexión: descarga el idioma en Ajustes › General.",
                browser:
                    "Tu navegador envía el audio a su servicio de voz (en Chrome, Google) y recibe el texto; Jotoba solo recibe el texto. En la app de Jotoba para Android, tu móvil puede hacerlo sin conexión.",
            },
        },
        status: {
            idle: "Pulsa el micrófono y di una palabra.",
            listening: "Escuchando… Di una palabra.",
            "no-speech": "No te he entendido. Inténtalo de nuevo.",
            blocked:
                "El acceso al micrófono está bloqueado. Permítelo en los ajustes del sitio de tu navegador y vuelve a intentarlo.",
            "no-microphone": "No se ha encontrado ningún micrófono.",
            "no-language":
                "Este idioma no está disponible aquí para la entrada de voz. En un móvil, instálalo en los ajustes del sistema (Idiomas › Voz).",
            unsupported: "La búsqueda por voz no está disponible en este navegador.",
            failed: "La búsqueda por voz se ha detenido inesperadamente. Inténtalo de nuevo.",
        },
    },
    handwriting: {
        mode: {
            label: "Método de entrada",
            radicals: "Radicales",
            write: "Escritura a mano",
        },
        pad: {
            label: "Área de dibujo",
            placeholder: "Escribe aquí",
            hint: "Escribe una palabra o un kanji con un dedo. Las propuestas aparecen arriba. ¿Prefieres tocar? Cambia a Radicales.",
        },
        candidates: {
            label: "Reconocido",
            empty: "Aquí aparecen las propuestas",
            busy: "Reconociendo…",
        },
        undo: "Deshacer",
        delete: "Borrar carácter",
        clear: "Borrar dibujo",
        announce: {
            added: "{{text}} añadido a la búsqueda",
            removed: "{{text}} quitado de la búsqueda",
            stroke: "Trazo borrado",
            candidates: "{{count}} propuestas, la primera {{text}}",
        },
        model: {
            intro: "La escritura a mano necesita una única descarga de Google (unos {{size}}). Después funciona sin conexión.",
            download: "Descargar ({{size}})",
            loading: "Descargando la escritura a mano (unos {{size}})… Ya puedes escribir.",
            ready: "La escritura a mano está lista",
            failed: "La descarga no ha funcionado. Comprueba tu conexión.",
            retry: "Reintentar",
            cellular: "Parece que usas datos móviles o el ahorro de datos.",
            offline: "No tienes conexión. Conéctate a internet para descargar.",
        },
        consent: {
            intro: "Jotoba reconoce tu escritura a mano en tu dispositivo con Google ML Kit.",
            local: "Tu dibujo se queda en tu dispositivo. Solo lo que buscas se envía a Jotoba.",
            metrics:
                "ML Kit envía datos de uso anónimos a Google: tipo de dispositivo, versión de la app y lo bien que funciona el reconocimiento.",
            download: "El modelo de escritura a mano (unos {{size}}) se descarga de Google una sola vez.",
            change: "Puedes cambiarlo cuando quieras en <settings>Ajustes › Privacidad y cookies</settings>. <policy>Política de privacidad</policy>",
            decline: "Rechazar",
            agree: "Aceptar y descargar",
            declined: "La escritura a mano sigue desactivada. Puedes activarla en Ajustes › Privacidad y cookies.",
        },
    },
} satisfies PartialDict<typeof en>;
