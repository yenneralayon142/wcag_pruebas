/**
 * Un array de objetos que contiene los enlaces y descripciones para la documentación.
 * Cada objeto en el array representa un enlace con su texto visible y su URL asociada.
 * 
 * @type {Array<{ text: string, url: string }>}
 */

export const links = [
    {
        text: "Introduccion",
        url: "/docs",
    },
    {
        text: "Contenido documentación",
        url: "/docs#intro-content",
    },
    {
        text: "Beneficios de la documentación",
        url: "/docs#intro-benefits",
    },
    // Perceptible
    {
        text: "Perceptible",
        url: "/docs/perceptible",
    },
    {
        text: "Contenido No Textual",
        url: "/docs/perceptible#perceptible-textless-content",
    },
    {
        text: "Solo Audio y Solo Video (grabado)",
        url: "/docs/perceptible#perceptible-audio-video",
    },
    {
        text: "Subtítulos (grabado)",
        url: "/docs/perceptible#perceptible-subtitles",
    },
    {
        text: "Información y Relaciones",
        url: "/docs/perceptible#perceptible-dom",
    },
    {
        text: "Secuencia Significativa",
        url: "/docs/perceptible#perceptible-ordered-content",
    },
    {
        text: "Uso del Color",
        url: "/docs/perceptible#perceptible-color",
    },
    {
        text: "Control del Audio",
        url: "/docs/perceptible#perceptible-autoplay",
    },
    {
        text: "Contraste (Mínimo)",
        url: "/docs/perceptible#perceptible-contrast-min",
    },
    {
        text: "Redimensionar Texto",
        url: "/docs/perceptible#perceptible-font-size",
    },
    {
        text: "Imágenes de Texto",
        url: "/docs/perceptible#perceptible-image-text",
    },
    {
        text: "Contraste Mejorado",
        url: "/docs/perceptible#perceptible-better-contrast",
    },
    {
        text: "Sonido de Fondo Bajo Apagado",
        url: "/docs/perceptible#perceptible-off-sound",
    },
    // Operable
    {
        text: "Operable",
        url: "/docs/operable",
    },
    {
        text: "Teclado",
        url: "/docs/operable#operable-keyboard",
    },
    {
        text: "Sin Trampas en el Teclado",
        url: "/docs/operable#operable-keyboard-cheat",
    },
    {
        text: "Ajuste de Tiempo",
        url: "/docs/operable#operable-just-time",
    },
    {
        text: "Pausa, Parar, Ocultar",
        url: "/docs/operable#operable-pause-stop-hide",
    },
    {
        text: "Tres Destellos",
        url: "/docs/operable#operable-three-flash",
    },
    {
        text: "Evitar Bloques",
        url: "/docs/operable#operable-no-blocks",
    },
    {
        text: "Página con Título",
        url: "/docs/operable#operable-page-title",
    },
    {
        text: "Orden del Foco",
        url: "/docs/operable#operable-focus-order",
    },
    {
        text: "Propósito del Enlace (En Contexto)",
        url: "/docs/operable#operable-purpose-link",
    },
    {
        text: "Múltiples Formas",
        url: "/docs/operable#operable-location-page",
    },
    {
        text: "Encabezados y Etiquetas",
        url: "/docs/operable#operable-label",
    },
    {
        text: "Apariencia del Enfoque",
        url: "/docs/operable#operable-appareance-focus",
    },
    {
        text: "Propósito del Enlace (Solo Enlace)",
        url: "/docs/operable#operable-only-purpose",
    },
    {
        text: "Encabezados de Sección",
        url: "/docs/operable#operable-section-header",
    },
    // Comprensible
    {
        text: "Comprensible",
        url: "/docs/comprensible",
    },
    {
        text: "Idioma de la Página",
        url: "/docs/comprensible#comprensible-language",
    },
    {
        text: "Al Foco",
        url: "/docs/comprensible#comprensible-focus",
    },
    {
        text: "Al Entrada",
        url: "/docs/comprensible#comprensible-start",
    },
    {
        text: "Identificación de Errores",
        url: "/docs/comprensible#comprensible-errors",
    },
    {
        text: "Etiquetas o Instrucciones",
        url: "/docs/comprensible#comprensible-instructions",
    },
    {
        text: "Navegación Consistente",
        url: "/docs/comprensible#comprensible-navigationConsistent",
    },
    {
        text: "Identificación Consistente",
        url: "/docs/comprensible#comprensible-identificationConsistent",
    },
    {
        text: "Sugerencias de Error",
        url: "/docs/comprensible#comprensible-errorSuggestion",
    },
    {
        text: "Prevención de Errores (Legales, Financieros, Datos)",
        url: "/docs/comprensible#comprensible-preventionErrors",
    },
    {
        text: "Palabras Inusuales",
        url: "/docs/comprensible#comprensible-inusualWords",
    },
    {
        text: "Abreviaturas",
        url: "/docs/comprensible#comprensible-abbreviations",
    },
    {
        text: "Nivel de Lectura",
        url: "/docs/comprensible#comprensible-levelofRead",
    },
    {
        text: "Pronunciación",
        url: "/docs/comprensible#comprensible-pronuntiation",
    },
    {
        text: "Cambio a Pedido del Usuario",
        url: "/docs/comprensible#comprensible-changeUser",
    },
    {
        text: "Ayuda",
        url: "/docs/comprensible#comprensible-helpFinally",
    },
    // Robusto
    {
        text: "Robusto",
        url: "/docs/robusto",
    },
    {
        text: "Análisis sintáctico",
        url: "/docs/robusto#robusto-syntax",
    },
    {
        text: "Nombre, Rol, Valor",
        url: "/docs/robusto#robusto-aria",
    },
    {
        text: "Uso adecuado de ARIA",
        url: "/docs/robusto#robusto-aria2",
    },
    {
        text: "Contraste de Color",
        url: "/docs/robusto#robusto-contrast",
    },
    {
        text: "Enfoque Visible",
        url: "/docs/robusto#robusto-focus",
    },
    {
        text: "Contraste Mejorado",
        url: "/docs/robusto#robusto-contrast2",
    },
    {
        text: "Enlaces con Propósito Claro",
        url: "/docs/robusto#robusto-links",
    },
];

export const source = links.map((link) => link.text);
