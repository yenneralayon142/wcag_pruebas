import Hero from "../components/team/hero";
import Investigation from "../components/team/investigation";
import Developer from "../components/team/developer";
import Designer from "../components/team/designer";
import Formuler from "../components/team/formuler";

/**
 * Componente que muestra la sección del equipo.
 *
 * Este componente renderiza varias secciones relacionadas con el equipo,
 * incluyendo un hero y carruseles para los diferentes equipos:
 * - Equipo de investigación
 * - Equipo de desarrollo de software
 * - Equipo de diseño
 *
 * @function Team el nombre de la función es Team
 * @returns {JSX.Element} Un elemento JSX que representa la estructura principal de la página del equipo.
 */

export default function Team() {
    return(
        <main>
            {/* Sección hero */}
            <Hero />

            {/*Carrousel equipo formulador*/}
            <Formuler/>

            {/* Carrousel equipo de investigación */}
            <Investigation />

            {/* Carrousel equipo de desarrollo de software */}
            <Developer />

            {/* Carrousel equipo de diseño */}
            <Designer />
            
        </main>
    )
}