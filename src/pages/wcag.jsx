import Hero from "../components/wcag/hero"
import Principles from "../components/wcag/principles"
import Criteria from "../components/wcag/criteria"

/**
 * Componente que representa la sección de WCAG (Web Content Accessibility Guidelines).
 *
 * Este componente renderiza varias secciones relacionadas con las directrices de accesibilidad web,
 * incluyendo un héroe, los principios de accesibilidad y los criterios específicos.
 *
 * @function Wcag el nombre de la función es Wcag
 * @returns {JSX.Element} Un elemento JSX que representa la estructura principal de la página de WCAG.
 */

export default function Wcag() {
    return (
        <main>
            <Hero />
            <Principles />
            <Criteria />
        </main>
    );
}