import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Components
import Header from "./header";
import Sidebar from "./sidebarDocumentation";
import SearchFilters from "./searchFilters";
import BreadCrumb from "../components/breadCrumb";
import { AccessibilityWidget } from "sena-accessibility";

/**
 * DocsLayout - Componente de diseño para la sección de documentación.
 * 
 * Este componente organiza la estructura de la sección de documentación de la aplicación, 
 * que incluye un encabezado (Header), un componente de navegación tipo BreadCrumb, 
 * una barra lateral (Sidebar), y el contenido principal de la documentación (manejado por `Outlet`).
 * Además, se incluye un widget de accesibilidad.
 * 
 * Se encarga de manejar el desplazamiento suave al elemento objetivo cuando se navega usando anclas
 * (hash en la URL). El componente también escucha los cambios de hash para actualizar el scroll cuando
 * el hash cambia.
 * 
 * @component DocsLayout
 * 
 * @returns {JSX.Element} La estructura del layout de la sección de documentación con scroll manejado por hash y accesibilidad.
 */ 
 

export default function DocsLayout() {

    /**
     * Se usa para detectar cambios en la ubicación, como el cambio en el pathname o en el hash, y así ejecutar la función de desplazamiento que ajusta la posición del contenedor en función del ancla
     */
    const location = useLocation();

    /**
     * Desplaza hacia un elemento dentro del contenedor basado en el hash actual de la URL.
     * Si hay un hash presente en la URL, se desplaza hacia el elemento correspondiente dentro del contenedor `.docs__content`.
     * Si no se encuentra un hash, se desplaza hacia la parte superior del contenedor.
     */
    const scrollToElementInContainer = () => {
        const hash = window.location.hash;
        const container = document.querySelector(".docs__content");

        if (hash.length > 0) {
            const targetElement = document.querySelector(hash);

            if (targetElement && container) {
                container.scrollTo({
                    top: targetElement.offsetTop - container.offsetTop,
                    behavior: "smooth",
                });
            }
        } else {
            container.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    /**
     * Efecto que ejecuta el desplazamiento basado en el hash de la URL y escucha cambios en el hash.
     * Desplaza al elemento adecuado al cambiar la ruta o el hash.
     */
    useEffect(() => {
        scrollToElementInContainer();

        const handleHashChange = () => {
            scrollToElementInContainer();
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [location.pathname, window.location.hash]);

    return (
        <>
            <div id="docs__container">
                <Header />
                <BreadCrumb />
                <div className="docs__main">
                    <Sidebar />
                    <div className="docs__content">
                        <SearchFilters />
                        <Outlet />
                    </div>
                </div>
            </div>
            <AccessibilityWidget />
        </>
    );
}
