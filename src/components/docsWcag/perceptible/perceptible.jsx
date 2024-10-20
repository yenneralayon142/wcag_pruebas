import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importando el tema con un alias
import { imgExample, audioExample, textExample, domExample, ordenContent, colorExample, autoplay, exampleContrats, exampleFontSize, sizeImage, betterContrast, offSound } from "./exampleperceptible";

/**
 * Componente de React que presenta criterios de éxito de accesibilidad
 * basados en las pautas WCAG para asegurar que el contenido sea perceptible 
 * para todos los usuarios. Organizado en niveles A, AA y AAA, cada criterio de éxito 
 * tiene su explicación, buenas prácticas y ejemplos de código.
 * 
 * Este componente cubre varios temas relacionados con el contenido no textual,
 * manejo de audio/video, contraste de colores, redimensionado de texto, entre otros.
 * 
 * @component Perceptible
 * @returns {JSX.Element} Componente que describe los criterios de accesibilidad perceptible 
 * basados en WCAG 2.1.
 * 
 * @example
 * <Perceptible />
 * 
 * Criterios de éxito incluidos:
 * - Nivel A: Contenido No Textual, Solo Audio y Solo Video (grabado), Subtítulos (grabado), 
 *   Información y Relaciones, Secuencia Significativa, Uso del Color, Control del Audio.
 * - Nivel AA: Contraste Mínimo, Redimensionar Texto, Imágenes de Texto.
 * - Nivel AAA: Contraste Mejorado, Sonido de Fondo Bajo Apagado.
 */

export default function Perceptible() {
    return (
        <>
            <section className="accessibility accessibility--level-a">
                <h3 className="text-2xl text--blue">Nivel A</h3>

                {/* Criterio de Éxito: 1.1.1 Contenido No Textual */}
                <div className="accessibility__item" id="perceptible-textless-content">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.1.1 Contenido No Textual
                    </p>
                    <p>
                        Proveer texto alternativo para cualquier contenido no textual.
                    </p>
                    <ul>
                        <li>Usar <span className="text--bold">`alt`</span> para imágenes.</li>
                        <li>Asegurarse de que el texto alternativo sea descriptivo.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {imgExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.2.1 Solo Audio y Solo Video (grabado) */}
                <div className="accessibility__item" id="perceptible-audio-video">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.2.1 Solo Audio y Solo Video (grabado)
                    </p>
                    <p>
                        Proveer una alternativa para el contenido solo de audio o solo de video.
                    </p>
                    <ul>
                        <li>Incluir transcripciones para audio.</li>
                        <li>Agregar descripciones para videos.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {audioExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.2.2 Subtítulos (grabado) */}
                <div className="accessibility__item" id="perceptible-subtitles">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.2.2 Subtítulos (grabado)
                    </p>
                    <p>
                        Proveer texto alternativo para cualquier contenido no textual.
                    </p>
                    <ul>
                        <li>Incluir subtítulos sincronizados en videos.</li>
                        <li>Asegurarse de que los subtítulos sean fáciles de leer.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {textExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.3.1 Información y Relaciones */}
                <div className="accessibility__item" id="perceptible-dom">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.3.1 Información y Relaciones
                    </p>
                    <p>
                        La información, estructura y relaciones transmitidas a través de la presentación pueden ser determinadas por software.
                    </p>
                    <ul>
                        <li>Usar etiquetas semánticas HTML correctamente.</li>
                        <li>Verificar que los elementos relacionados estén agrupados correctamente.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {domExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.3.2 Secuencia Significativa */}
                <div className="accessibility__item" id="perceptible-ordered-content">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.3.2 Secuencia Significativa
                    </p>
                    <p>
                        Presentar el contenido en un orden que preserve el significado y la operabilidad.
                    </p>
                    <ul>
                        <li>Usar un orden lógico en el contenido.</li>
                        <li>Asegurarse de que los elementos interactivos sean accesibles.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {ordenContent}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.1 Uso del Color */}
                <div className="accessibility__item">
                    <p className="text-base text--bolder" id="perceptible-color">
                        Criterio de Éxito: 1.4.1 Uso del Color
                    </p>
                    <p>
                        No usar el color como único medio visual para transmitir información, indicar una acción, pedir una respuesta, o distinguir un elemento visual.
                    </p>
                    <ul>
                        <li>Utilizar etiquetas o símbolos además del color.</li>
                        <li>Asegurarse de que el contenido sea comprensible sin color.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {colorExample}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.2 Control del Audio */}
                <div className="accessibility__item" id="perceptible-autoplay">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.4.2 Control del Audio
                    </p>
                    <p>
                        Si el audio en una página web se reproduce automáticamente por más de 3 segundos, proporcionar una manera de pausar, detener, o controlar el volumen.
                    </p>
                    <ul>
                        <li>Agregar controles de audio visibles.</li>
                        <li>Permitir que el usuario pause el audio fácilmente.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {autoplay}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AA */}
            <section className="accessibility accessibility--level-aa">
                <h3 className="text-2xl text--blue">Nivel AA</h3>

                {/* Criterio de Éxito: 1.4.3 Contraste (Mínimo) */}
                <div className="accessibility__item" id="perceptible-contrast-min">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.4.3 Contraste (Mínimo)
                    </p>
                    <p>
                        Proveer suficiente contraste entre el texto y el fondo.
                    </p>
                    <ul>
                        <li>Asegurarse de que el contraste sea de al menos 4.5:1.</li>
                        <li>Utilizar herramientas para verificar el contraste de colores.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {exampleContrats}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.4 Redimensionar Texto */}
                <div className="accessibility__item" id="perceptible-font-size">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.4.4 Redimensionar Texto
                    </p>
                    <p>
                        Proveer la capacidad de redimensionar el texto hasta un 200% sin pérdida de contenido o funcionalidad.
                    </p>
                    <ul>
                        <li>Asegurarse de que el diseño se ajuste al texto redimensionado.</li>
                        <li>Verificar que todos los elementos sigan siendo accesibles.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {exampleFontSize}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.5 Imágenes de Texto */}
                <div className="accessibility__item" id="perceptible-image-text">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.4.5 Imágenes de Texto
                    </p>
                    <p>
                        Evitar el uso de imágenes de texto siempre que sea posible.
                    </p>
                    <ul>
                        <li>Utilizar texto real en lugar de imágenes.</li>
                        <li>Asegurarse de que el texto sea escalable.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {sizeImage}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AAA */}
            <section className="accessibility accessibility--level-aaa">
                <h3 className="text-2xl text--blue">Nivel AAA</h3>

                {/* Criterio de Éxito: 1.4.6 Contraste Mejorado */}
                <div className="accessibility__item" id="perceptible-better-contrast">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.4.6 Contraste Mejorado
                    </p>
                    <p>
                        Proveer un contraste mejorado (mínimo 7:1) entre el texto y el fondo.
                    </p>
                    <ul>
                        <li>Asegurarse de que los colores elegidos cumplan con este estándar.</li>
                        <li>Utilizar herramientas de contraste para verificar los colores.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {betterContrast}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 1.4.7 Sonido de Fondo Bajo Apagado */}
                <div className="accessibility__item" id="perceptible-off-sound">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.4.7 Sonido de Fondo Bajo Apagado
                    </p>
                    <p>
                        Asegurarse de que cualquier sonido de fondo sea bajo o pueda ser apagado.
                    </p>
                    <ul>
                        <li>Proveer controles para desactivar sonidos de fondo.</li>
                        <li>Asegurarse de que los sonidos no interfieran con el contenido principal.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {offSound}
                    </SyntaxHighlighter>
                </div>
            </section>
        </>
    );
}
