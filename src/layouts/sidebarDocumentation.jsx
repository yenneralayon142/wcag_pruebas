import { Link } from "react-router-dom";

/**
 * Componente de barra lateral que proporciona navegación 
 * a diferentes secciones de la documentación.
 *
 * Este componente renderiza un menú con enlaces a varias 
 * páginas de documentación, permitiendo a los usuarios 
 * navegar fácilmente entre las secciones de contenido.
 *
 * @returns {JSX.Element} Un elemento JSX que representa 
 * la barra lateral de navegación.
 */

export default function Sidebar() {
    return (
        <div className="docs__sidebar">
            <h3 className="text-3xl text--blue text-center">Menú</h3>
            <div className="docs__sidebar__list">
                <Link to="/docs">Introducción</Link>
                <Link to="/docs/perceptible">Perceptible</Link>
                <Link to="/docs/operable">Operable</Link>
                <Link to="/docs/comprensible">Comprensible</Link>
                <Link to="/docs/robusto">Robusto</Link>
            </div>
        </div>
    );
}
