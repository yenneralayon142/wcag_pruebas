import InfoCard from "../infoCard";

/**
 * Componente de React que presenta el objetivo principal de la página,
 * facilitando a los desarrolladores web la creación de sitios accesibles
 * cumpliendo con los estándares WCAG. El objetivo es garantizar que el
 * contenido sea accesible para todos los usuarios, incluidas personas con discapacidades.
 * 
 * El componente utiliza un componente `InfoCard` para mostrar el título y la descripción
 * del objetivo en una tarjeta informativa dentro de una sección.
 * 
 * @component Objective
 * @returns {JSX.Element} Componente que muestra el objetivo de la página.
 * 
 * @example
 * <Objective />
 * 
 * Componentes incluidos:
 * - `InfoCard`: Componente reutilizable que presenta un título y un texto en una tarjeta.
 * 
 * @see InfoCard
 */
export default function Objective() {
    return (
        <section>
            <div className="container hero">
                <InfoCard title="¿Cuál es nuestro objetivo?" text="Esta página facilita a los desarrolladores web la creación de sition que cumplan con los estándares WCAG garantizando la accesibilidad para todos los usuarios, incluidas personas con discapacidades." />
            </div>
        </section>
    );
}
