import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importando el tema con un alias
import { accesibleKeypad, appareanceFocus, focusOrder, justTime, label, locationPage, noBlocks, onlyPurpose, outSpan, pageWithTittle, pause, purposeLink, sectionHeader, threeFlash } from "./exampleoperable";
/**
 * Componente de React que muestra una serie de criterios de éxito
 * para la accesibilidad web, basados en las pautas WCAG (Web Content Accessibility Guidelines).
 * 
 * Cada criterio de éxito está documentado con su explicación, lista de buenas prácticas
 * y ejemplos de código resaltados utilizando `react-syntax-highlighter`.
 * 
 * @component Operable
 * @returns {JSX.Element} Componente Operable que incluye múltiples secciones de accesibilidad
 * divididas en niveles A, AA y AAA.
 * 
 * @example
 * <Operable />
 * 
 * Criterios de éxito incluidos:
 * - Nivel A: Teclado, Sin Trampas en el Teclado, Ajuste de Tiempo, Pausa, Parar, Ocultar, Tres Destellos, Evitar Bloques, Página con Título, Orden del Foco, Propósito del Enlace.
 * - Nivel AA: Múltiples Formas, Encabezados y Etiquetas, Apariencia del Enfoque.
 * - Nivel AAA: Propósito del Enlace (Solo Enlace), Encabezados de Sección.
 */

export default function Operable() {
    return (
        <>
            <section className="accessibility accessibility--level-a">
                <h3 className="text-2xl text--blue">Nivel A</h3>
                
                {/* Criterio de Éxito: 2.1.1 Teclado */}
                <div className="accessibility__item" id="operable-keyboard">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.1.1 Teclado</p>
                    <p>
                        Todo el contenido debe ser accesible mediante un teclado.
                    </p>
                    <ul>
                        <li>Asegurarse de que todos los elementos interactivos se puedan acceder con la tecla Tab.</li>
                        <li>Proveer accesibilidad completa para usuarios que no utilizan mouse.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {accesibleKeypad}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.1.2 Sin Trampas en el Teclado */}
                <div className="accessibility__item" id="operable-keyboard-cheat">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.1.2 Sin Trampas en el Teclado</p>
                    <p>
                        No colocar trampas en el teclado que impidan salir de elementos interactivos.
                    </p>
                    <ul>
                        <li>Asegurarse de que los usuarios puedan salir fácilmente de todos los controles.</li>
                        <li>Proveer una navegación lógica y fluida entre los elementos.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {outSpan}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.2.1 Ajuste de Tiempo */}
                <div className="accessibility__item" id="operable-just-time">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.2.1 Ajuste de Tiempo</p>
                    <p>
                        Proveer mecanismos para ajustar los límites de tiempo en actividades.
                    </p>
                    <ul>
                        <li>Ofrecer opciones para extender o desactivar límites de tiempo.</li>
                        <li>Notificar a los usuarios sobre los tiempos límites antes de que se agoten.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {justTime}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.2.2 Pausa, Parar, Ocultar */}
                <div className="accessibility__item" id="operable-pause-stop-hide">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.2.2 Pausa, Parar, Ocultar</p>
                    <p>
                        Proveer mecanismos para pausar, detener o ocultar contenido en movimiento, parpadeo o desplazamiento.
                    </p>
                    <ul>
                        <li>Incluir botones visibles para pausar o detener animaciones.</li>
                        <li>Asegurarse de que el contenido en movimiento no distraiga a los usuarios.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {pause}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.3.2 Tres Destellos */}
                <div className="accessibility__item" id="operable-three-flash">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.3.2 Tres Destellos</p>
                    <p>No provocar destellos, de cualquier tipo.</p>
                    <ul>
                        <li>Evitar contenido que parpadee o destelle más de tres veces en un segundo.</li>
                        <li>Proveer alternativas a los elementos que puedan provocar convulsiones.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {threeFlash}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.1 Evitar Bloques */}
                <div className="accessibility__item" id="operable-no-blocks">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.1 Evitar Bloques</p>
                    <p>Proveer mecanismos para saltar bloques repetitivos de contenido.</p>
                    <ul>
                        <li>Incluir enlaces para saltar directamente al contenido principal.</li>
                        <li>Usar técnicas de diseño para evitar la repetición innecesaria.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {noBlocks}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.2 Página con Título */}
                <div className="accessibility__item" id="operable-page-title">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.2 Página con Título</p>
                    <p>Cada página web tiene un título que describe su tema o propósito.</p>
                    <ul>
                        <li>Usar títulos claros y descriptivos para cada página.</li>
                        <li>Asegurarse de que los títulos sean únicos dentro del mismo sitio.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {pageWithTittle}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.3 Orden del Foco */}
                <div className="accessibility__item" id="operable-focus-order">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.3 Orden del Foco</p>
                    <p>Asegurar que el orden del foco sigue una secuencia que preserve el significado y la operabilidad.</p>
                    <ul>
                        <li>Definir un orden lógico para el foco de los elementos.</li>
                        <li>Probar el flujo de navegación para asegurar que sea intuitivo.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {focusOrder}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.4 Propósito del Enlace (En Contexto) */}
                <div className="accessibility__item" id="operable-purpose-link">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.4 Propósito del Enlace (En Contexto)</p>
                    <p>El propósito de cada enlace puede determinarse a partir del texto del enlace solo.</p>
                    <ul>
                        <li>Utilizar descripciones claras y específicas en el texto del enlace.</li>
                        <li>Asegurarse de que el texto del enlace sea comprensible fuera de contexto.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {purposeLink}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AA */}
            <section className="accessibility accessibility--level-aa">
                <h3 className="text-2xl text--blue">Nivel AA</h3>

                {/* Criterio de Éxito: 2.4.5 Múltiples Formas */}
                <div className="accessibility__item" id="operable-location-page">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.5 Múltiples Formas</p>
                    <p>Proveer múltiples formas para localizar una página web dentro de un conjunto de páginas.</p>
                    <ul>
                        <li>Incluir un mapa del sitio o un menú de navegación claro.</li>
                        <li>Permitir búsquedas efectivas en el sitio web.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {locationPage}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.6 Encabezados y Etiquetas */}
                <div className="accessibility__item" id="operable-label">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.6 Encabezados y Etiquetas</p>
                    <p>Los encabezados y etiquetas describen el tema o propósito.</p>
                    <ul>
                        <li>Usar encabezados en un formato jerárquico.</li>
                        <li>Asegurarse de que las etiquetas de formulario sean descriptivas.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {label}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.7 Apariencia del Enfoque */}
                <div className="accessibility__item" id="operable-appareance-focus">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.7 Apariencia del Enfoque</p>
                    <p>Asegurar que cualquier interfaz tiene un modo de operabilidad por teclado visible.</p>
                    <ul>
                        <li>Usar estilos CSS claros para el enfoque de elementos.</li>
                        <li>Probar la visibilidad del enfoque en diferentes navegadores.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {appareanceFocus}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AAA */}
            <section className="accessibility accessibility--level-aaa">
                <h3 className="text-2xl text--blue">Nivel AAA</h3>

                {/* Criterio de Éxito: 2.4.9 Propósito del Enlace (Solo Enlace) */}
                <div className="accessibility__item" id="operable-only-purpose">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.9 Propósito del Enlace (Solo Enlace)</p>
                    <p>El propósito de cada enlace se puede determinar a partir del enlace solo.</p>
                    <ul>
                        <li>Utilizar el texto del enlace de manera descriptiva y autónoma.</li>
                        <li>Asegurarse de que el enlace no dependa de contexto adicional.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {onlyPurpose}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 2.4.10 Encabezados de Sección */}
                <div className="accessibility__item" id="operable-section-header">
                    <p className="text-base text--bolder">Criterio de Éxito: 2.4.10 Encabezados de Sección</p>
                    <p>Proveer encabezados para organizar el contenido.</p>
                    <ul>
                        <li>Usar encabezados claros y descriptivos para secciones del contenido.</li>
                        <li>Asegurarse de que los encabezados ayuden en la navegación.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {sectionHeader}
                    </SyntaxHighlighter>
                </div>
            </section>
        </>
    );
}
