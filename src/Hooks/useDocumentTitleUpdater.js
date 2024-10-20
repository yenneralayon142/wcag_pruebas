import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UseDocumentTitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        // Cambia el título de la página según la ruta actual
        const pathname = location.pathname.startsWith("/searchUrl/") ? "/searchUrl/:id" : location.pathname;
        switch (pathname) {
            case '/':
                document.title = 'Inicio | Web Accesible';
                break;
            case '/wcag':
                document.title = 'Enfermedades y WCAG | Web Accesible';
                break;
            case '/searchUrl':
                document.title = 'Busqueda Url | Web Accesible'
                break;
            case '/searchUrl/:id':
                document.title = 'Detalles dominio | Web Accesible'
                break;
            case '/docs':
                document.title = 'Documentación | Web Accesible';
                break;
            case '/team':
                document.title = 'Quienes somos | Web Accesible';
                break;
            case '/docs/perceptible':
                document.title = 'Perceptible | Web Accesible';
                break;
            case '/docs/operable':
                document.title = 'Operable | Web Accesible';
                break;
            case '/docs/comprensible':
                document.title = 'Comprensible | Web Accesible';
                break;
            case '/docs/robusto':
                document.title = 'Robusto | Web Accesible';
                break;
            default:
                document.title = 'Error | Web Accesible';
                break;
        }
    }, [location.pathname]);

    return null;
}