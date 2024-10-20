import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeExample1, codeExample2, codeExample3, codeExample4, codeExample5, codeExample6, codeExample7 } from "./exampleRobust";

/**
 * Componente de React que presenta criterios de éxito de accesibilidad
 * basados en las pautas WCAG para asegurar que el contenido sea robusto 
 * y accesible para todos los usuarios, incluidas las tecnologías de asistencia.
 * Organizado en niveles A, AA y AAA, cada criterio de éxito tiene su explicación, 
 * buenas prácticas y ejemplos de código.
 * 
 * Este componente cubre varios temas relacionados con la robustez del contenido, 
 * como el análisis sintáctico, el uso de atributos ARIA, el manejo de estados de enfoque, 
 * y el contraste de color mejorado, entre otros.
 * 
 * @component Robusto
 * @returns {JSX.Element} Componente que describe los criterios de accesibilidad robusta 
 * basados en WCAG 2.1.
 * 
 * @example
 * <Robusto />
 * 
 * Criterios de éxito incluidos:
 * - Nivel A: Análisis sintáctico, Nombre/Rol/Valor (ARIA).
 * - Nivel AA: Contraste de Color, Enfoque Visible.
 * - Nivel AAA: Contraste Mejorado, Enlaces con Propósito Claro.
 */

export default function Robusto() {
    return (
        <>
            <section className="accessibility accessibility--level-a">
                <h3 className="text-2xl text--blue">Nivel A</h3>

                {/* Criterio de Exito: 4.1.1 Análisis sintáctico */}
                <div className="accessibility__item" id="robusto-syntax">
                    <p className="text-base text--bolder">
                        Criterio de Exito: 4.1.1 Análisis sintáctico
                    </p>
                    <p>
                        Asegúrate de que el código HTML esté bien estructurado y respete las reglas de marcado. Esto incluye:
                    </p>
                    <ul>
                        <li>Etiquetas bien cerradas</li>
                        <li>Anidación correcta de elementos (no colocar etiquetas dentro de otras de forma incorrecta)</li>
                        <li>Atributos apropiados para cada elemento (como <span className="text--bold">`lang`</span>, <span className="text--bold">`alt`</span>, <span className="text--bold">`title`</span> )</li>
                        <li>Valida el código con herramientas como el <a href="https://validator.w3.org/" className="link" target="_blank">Validador de W3C</a></li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {codeExample1}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Exito: 4.1.2 Nombre, Rol, Valor */}
                <div className="accessibility__item" id="robusto-aria">
                    <p className="text-base text--bolder">
                        Criterio de Exito: 4.1.2 Nombre, Rol, Valor
                    </p>
                    <p>
                        Para todos los componentes de la interfaz de usuario, el nombre y el rol pueden ser determinados programáticamente. Asegúrate de que:
                    </p>
                    <ul>
                        <li>Los elementos interactivos tengan descripciones claras utilizando <span className="text--bold">`aria-label`</span> o <span className="text--bold">`aria-labelledby`</span></li>
                        <li>El rol de cada elemento interactivo, como botones y cuadros de texto, sea claro</li>
                        <li>Las tecnologías de asistencia puedan identificar y notificar los cambios en los estados, propiedades y valores de los elementos</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {codeExample2}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Exito: 4.1.3 Uso adecuado de ARIA */}
                <div className="accessibility__item" id="robusto-aria2">
                    <p className="text-base text--bolder">
                        Criterio de Exito: 4.1.3 Uso adecuado de ARIA
                    </p>
                    <p>
                        Los atributos ARIA se deben utilizar correctamente para mejorar la accesibilidad sin alterar el comportamiento natural del HTML. Asegúrate de que:
                    </p>
                    <ul>
                        <li>No uses atributos ARIA en elementos que ya tienen comportamiento semántico (por ejemplo, no añadas `role="button"` a un botón)</li>
                        <li>Los modales y diálogos usan `role="dialog"` y el foco es gestionado adecuadamente para usuarios de teclado</li>
                        <li>Los atributos ARIA, como `aria-hidden`, se usen para controlar la visibilidad de los elementos que deben ser ignorados por las tecnologías de asistencia</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {codeExample3}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AA */}
            <section className="accessibility accessibility--level-aa">
                <h3 className="text-2xl text--blue">Nivel AA</h3>

                {/* Criterio de Éxito 1.4.3 Contraste de Color */}
                <div className="accessibility__item" id="robusto-contrast">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.4.3 Contraste de Color
                    </p>
                    <p>
                        Asegúrate de que el contraste entre el texto y su fondo sea de al menos 4.5:1 para texto normal y 3:1 para texto grande.
                    </p>
                    <ul>
                        <li>Usa herramientas como <a href="https://webaim.org/resources/contrastchecker/">Contrast Checker</a> para verificar el contraste de tus colores</li>
                        <li>Asegúrate de que las combinaciones de color no dependan solo de la percepción del color (ej., no uses solo color para resaltar información)</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {codeExample4}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito 2.4.7 Enfoque Visible */}
                <div className="accessibility__item" id="robusto-focus">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 2.4.7 Enfoque Visible
                    </p>
                    <p>
                        El estado de enfoque debe ser claramente visible para los usuarios que navegan utilizando el teclado.
                    </p>
                    <ul>
                        <li>Asegúrate de que los elementos interactivos (botones, enlaces, campos de formulario) tienen un indicador de enfoque visible al usar el teclado</li>
                        <li>El indicador de enfoque debe ser fácilmente distinguible, como un borde resaltado o un cambio de color</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {codeExample5}
                    </SyntaxHighlighter>
                </div>
            </section>

            {/* Nivel AAA */}
            <section className="accessibility accessibility--level-aaa">
                <h3 className="text-2xl text--blue">Nivel AAA</h3>

                {/* Criterio de Éxito 1.4.6 Contraste Mejorado */}
                <div className="accessibility__item" id="robusto-contrast2">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 1.4.6 Contraste Mejorado
                    </p>
                    <p>
                        Para usuarios con visión baja, el contraste entre el texto y el fondo debe ser de al menos 7:1 para texto normal y 4.5:1 para texto grande.
                    </p>
                    <ul>
                        <li>Este es un nivel más alto que garantiza mejor legibilidad en condiciones de baja visibilidad</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {codeExample6}
                    </SyntaxHighlighter>
                </div>

                {/* Criterio de Éxito 2.4.9 Enlaces con Propósito Claro */}
                <div className="accessibility__item" id="robusto-links">
                    <p className="text-base text--bolder">
                        Criterio de Éxito: 2.4.9 Enlaces con Propósito Claro
                    </p>
                    <p>
                        Los enlaces deben describir claramente su propósito, incluso cuando se lean fuera de contexto.
                    </p>
                    <ul>
                        <li>Asegúrate de que los enlaces tengan un texto descriptivo que explique a dónde llevará el usuario</li>
                        <li>Evita enlaces con textos genéricos como "haz clic aquí" o "más información"</li>
                    </ul>
                    <SyntaxHighlighter language="html" style={codeTheme}>
                        {codeExample7}
                    </SyntaxHighlighter>
                </div>
            </section>
        </>
    );
}
