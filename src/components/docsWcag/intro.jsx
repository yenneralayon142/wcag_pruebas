/** 
 * El componente incluye una introducción al propósito y objetivo de la documentación, y enlaces 
 * a secciones específicas de los criterios de éxito de WCAG, como Perceptible, Operable, Comprensible y Robusto.
 * 
 * @function Intro El nombre de la función es Intro
 * @returns {JSX.Element} Componente de introducción que presenta el contenido y los beneficios 
 * de seguir los estándares WCAG en el desarrollo web.
 * 
 * @example
 * <Intro />
 * 
 * Contenido incluido:
 * - Introducción a la documentación de WCAG.
 * - Enlaces a las secciones: Perceptible, Operable, Comprensible y Robusto.
 * - Beneficios de implementar las pautas de accesibilidad WCAG.
 */

export default function Intro() {
    return (
        <>
            <div className="accessibility">
                <h3 className="text-xl text--blue">Introducción a la documentación sobre los estándares WCAG</h3>
                
                <div className="accessibility__item">
                    <p>
                        Bienvenido a esta documentación diseñada para desarrolladores web. Aquí encontrarás información clave sobre cómo implementar prácticas de accesibilidad en tus proyectos, garantizando que tu contenido sea accesible para todos los usuarios, independientemente de sus capacidades.
                    </p>
                </div>
                <div className="accessibility__item">
                    <h4 className="text--large text--blue text--bold">Objetivo:</h4>
                    <p>
                        El objetivo de esta documentación es proporcionar herramientas y conocimientos prácticos que faciliten la creación de sitios web accesibles. Queremos empoderar a los desarrolladores para que integren la accesibilidad de manera efectiva en sus procesos de desarrollo, promoviendo una web inclusiva y equitativa.
                    </p>
                </div>
            </div>
            <div className="accessibility" id="intro-content">
                <h3 className="text-xl text--blue">Contenido de la documentación:</h3>
                <ul>
                    <li>
                        <p>
                            <a href="/docs/perceptible" className="font-bold link">Perceptible</a>: Aprende cómo asegurar que toda la información en tu sitio web sea presentada de manera que los usuarios puedan percibirla. Esto incluye el uso de texto alternativo, subtítulos y un diseño que facilite la visualización del contenido.
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="/docs/operable" className="font-bold link">Operable</a>: Descubre cómo hacer que tu sitio web sea navegable y utilizable para todos. Esto abarca el uso de teclados y dispositivos de asistencia, así como la gestión adecuada del enfoque y la navegación coherente.
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="/docs/comprensible" className="font-bold link">Comprensible</a>: Conoce las mejores prácticas para garantizar que el contenido y la interfaz sean fáciles de entender. Esto incluye el uso de un lenguaje claro, instrucciones útiles y la identificación adecuada de errores.
                        </p>
                    </li>
                    <li>
                        <p>
                            <a href="/docs/robusto" className="font-bold link">Robusto</a>: Asegúrate de que tu contenido sea compatible con diversas tecnologías asistivas. Esto implica seguir estándares de codificación y asegurar que tu sitio se mantenga accesible a medida que evoluciona la tecnología.
                        </p>
                    </li>
                </ul>
            </div>

            <div className="accessibility" id="intro-benefits">
                <h3 className="text-xl text--blue">Beneficios de implementar los estándares WCAG:</h3>
                <p>
                    Integrar prácticas de accesibilidad en tu desarrollo web no solo amplía tu audiencia potencial, sino que también mejora la satisfacción del usuario y la calidad general del sitio. Al seguir estas pautas, contribuirás a crear un entorno digital más inclusivo y equitativo.
                </p>
            </div>
        </>
    )
}
