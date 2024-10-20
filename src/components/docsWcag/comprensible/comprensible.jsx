import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { abbreviations, changeUser, errorsIdentificcation, errorSuggestion, helpFinally, identificationConsistent, instructions, inusualWords, language, levelofRead, navigationConsistent, preventionErrors, pronuntiation, toFocus, toStart } from "./exampleComprensible";

/**
 * Componente que representa los criterios de éxito del principio de "Comprensible" de las WCAG.
 * Este componente muestra diferentes niveles de accesibilidad (A, AA, AAA) y los criterios de éxito
 * relacionados con la comprensibilidad de las interfaces y contenido web.
 *
 * @component Comprensible
 * @returns {JSX.Element} El contenido de los criterios de accesibilidad WCAG para el principio de "Comprensible".
 */

export default function Comprensible() {
    return (
        <>
            <section className="accessibility accessibility--level-a">
                <h3 className="text-2xl text--blue">Nivel A</h3>

                {/* Criterio de Éxito: 3.1.1 Idioma de la Página */}
                <div className="accessibility__item" id="comprensible-language">
                    <p className="text-base text--bolder">3.1.1 Idioma de la Página</p>
                    <p>
                        El idioma predeterminado de cada página web puede ser programáticamente determinado.
                    </p>
                    <ul>
                        <li>Asegurarse de que el atributo `lang` esté correctamente definido en el HTML.</li>
                        <li>Facilitar la comprensión del contenido por parte de usuarios de diferentes idiomas.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {language}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.2.1 Al Foco */}
                <div className="accessibility__item" id="comprensible-focus">
                    <p className="text-base text--bolder">3.2.1 Al Foco</p>
                    <p>
                        Cuando cualquier componente recibe el foco, no inicia un cambio de contexto.
                    </p>
                    <ul>
                        <li>Evitar que el foco lleve a una nueva página sin advertencia.</li>
                        <li>Proveer una experiencia de usuario fluida sin interrupciones inesperadas.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {toFocus}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.2.2 Al Entrada */}
                <div className="accessibility__item" id="comprensible-start">
                    <p className="text-base text--bolder">3.2.2 Al Entrada</p>
                    <p>
                        Cambiar la configuración de cualquier componente de la interfaz no provoca un cambio de contexto.
                    </p>
                    <ul>
                        <li>Asegurar que los cambios de configuración sean predecibles y controlables.</li>
                        <li>Proveer notificaciones claras de los cambios realizados.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {toStart}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.3.1 Identificación de Errores */}
                <div className="accessibility__item" id="comprensible-errors">
                    <p className="text-base text--bolder">3.3.1 Identificación de Errores</p>
                    <p>
                        Si ocurre un error de entrada, es identificado y descrito al usuario en texto.
                    </p>
                    <ul>
                        <li>Proveer mensajes de error claros y específicos.</li>
                        <li>Incluir sugerencias sobre cómo corregir el error.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {errorsIdentificcation}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.3.2 Etiquetas o Instrucciones */}
                <div className="accessibility__item" id="comprensible-instructions">
                    <p className="text-base text--bolder">3.3.2 Etiquetas o Instrucciones</p>
                    <p>
                        Las etiquetas o instrucciones están disponibles cuando el contenido requiere entrada del usuario.
                    </p>
                    <ul>
                        <li>Proveer etiquetas descriptivas para campos de formulario.</li>
                        <li>Asegurarse de que las instrucciones sean claras y fáciles de seguir.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {instructions}
                    </SyntaxHighlighter>
                </div>
            </section>

            <section className="accessibility accessibility--level-aa">
                <h3 className="text-2xl text--blue">Nivel AA</h3>

                {/* Criterio de Éxito: 3.2.3 Navegación Consistente */}
                <div className="accessibility__item" id="comprensible-navigationConsistent">
                    <p className="text-base text--bolder">3.2.3 Navegación Consistente</p>
                    <p>
                        Los mecanismos de navegación que se repiten en múltiples páginas web aparecen en el mismo orden relativo cada vez que se repiten.
                    </p>
                    <ul>
                        <li>Utilizar un menú de navegación coherente en todas las páginas.</li>
                        <li>Facilitar la localización de secciones a través de un diseño uniforme.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {navigationConsistent}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.2.4 Identificación Consistente */}
                <div className="accessibility__item" id="comprensible-identificationConsistent">
                    <p className="text-base text--bolder">3.2.4 Identificación Consistente</p>
                    <p>
                        Los componentes que tienen la misma funcionalidad dentro de un conjunto de páginas web son identificados consistentemente.
                    </p>
                    <ul>
                        <li>Utilizar nombres y etiquetas consistentes para botones y enlaces.</li>
                        <li>Asegurar que los iconos tengan el mismo significado en todas las páginas.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {identificationConsistent}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.3.3 Sugerencias de Error */}
                <div className="accessibility__item" id="comprensible-errorSuggestion">
                    <p className="text-base text--bolder">3.3.3 Sugerencias de Error</p>
                    <p>
                        Si ocurre un error de entrada y se detectan sugerencias, se proporcionan estas sugerencias al usuario.
                    </p>
                    <ul>
                        <li>Incluir consejos sobre cómo corregir errores comunes.</li>
                        <li>Asegurar que las sugerencias sean relevantes y claras.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {errorSuggestion}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.3.4 Prevención de Errores (Legales, Financieros, Datos) */}
                <div className="accessibility__item" id="comprensible-preventionErrors">
                    <p className="text-base text--bolder">3.3.4 Prevención de Errores (Legales, Financieros, Datos)</p>
                    <p>
                        Para páginas web que provocan compromisos legales o financieros, o modificaciones de datos controlables por el usuario, se proveen mecanismos para la revisión, corrección y confirmación de la información antes de finalizar la transacción.
                    </p>
                    <ul>
                        <li>Incluir un resumen antes de la finalización de la transacción.</li>
                        <li>Proveer opciones de edición para revisar información crítica.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {preventionErrors}
                    </SyntaxHighlighter>
                </div>
            </section>

            <section className="accessibility accessibility--level-aaa">
                <h3 className="text-2xl text--blue">Nivel AAA</h3>

                {/* Criterio de Éxito: 3.1.3 Palabras Inusuales */}
                <div className="accessibility__item" id="comprensible-inusualWords">
                    <p className="text-base text--bolder">3.1.3 Palabras Inusuales</p>
                    <p>
                        Proveer un mecanismo para identificar definiciones específicas de palabras o frases inusuales o especializadas.
                    </p>
                    <ul>
                        <li>Incluir glosarios o enlaces a definiciones dentro del contenido.</li>
                        <li>Utilizar herramientas de accesibilidad para facilitar el entendimiento.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {inusualWords}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: Abreviaturas */}
                <div className="accessibility__item" id="comprensible-abbreviations">
                    <p className="text-base text--bolder">Abreviaturas</p>
                    <p>
                        Proveer un mecanismo para identificar las abreviaturas.
                    </p>
                    <ul>
                        <li>Utilizar el elemento `<abbr></abbr>` en HTML para definir abreviaturas.</li>
                        <li>Proveer explicaciones al pasar el mouse sobre las abreviaturas.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {abbreviations}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.1.5 Nivel de Lectura */}
                <div className="accessibility__item" id="comprensible-levelofRead">
                    <p className="text-base text--bolder">3.1.5 Nivel de Lectura</p>
                    <p>
                        Cuando el texto requiere una capacidad de lectura avanzada, se provee contenido suplementario.
                    </p>
                    <ul>
                        <li>Incluir resúmenes o explicaciones para contenidos complejos.</li>
                        <li>Utilizar lenguaje claro y simple siempre que sea posible.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {levelofRead}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.1.6 Pronunciación */}
                <div className="accessibility__item" id="comprensible-pronuntiation">
                    <p className="text-base text--bolder">3.1.6 Pronunciación</p>
                    <p>
                        Proveer un mecanismo para identificar la pronunciación específica de palabras cuando su significado depende de esta.
                    </p>
                    <ul>
                        <li>Utilizar herramientas de síntesis de voz para guiar a los usuarios.</li>
                        <li>Incluir transcripciones fonéticas donde sea necesario.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {pronuntiation}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.2.5 Cambio a Pedido del Usuario */}
                <div className="accessibility__item" id="comprensible-changeUser">
                    <p className="text-base text--bolder">3.2.5 Cambio a Pedido del Usuario</p>
                    <p>
                        Los cambios de contexto solo se realizan a pedido del usuario o se proporciona un mecanismo para que el usuario desactive el cambio automático.
                    </p>
                    <ul>
                        <li>Incluir opciones en la configuración para controlar los cambios de contexto.</li>
                        <li>Asegurar que el usuario esté informado sobre los cambios que ocurren.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {changeUser}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito: 3.3.5 Ayuda */}
                <div className="accessibility__item" id="comprensible-helpFinally">
                    <p className="text-base text--bolder">3.3.5 Ayuda</p>
                    <p>Ayuda contextual está disponible.</p>
                    <ul>
                        <li>Proveer asistencia accesible a través de preguntas frecuentes.</li>
                        <li>Incluir soporte en tiempo real o guías de usuario.</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {helpFinally}
                    </SyntaxHighlighter>
                </div>
            </section>
        </>
    );
}
