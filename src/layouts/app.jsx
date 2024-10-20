import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import BreadCrumb from "../components/breadCrumb";
import { AccessibilityWidget } from "sena-accessibility";

/**
 * AppLayout - Componente de diseño principal de la aplicación.
 * 
 * Este componente envuelve la estructura principal de la aplicación, 
 * incluyendo el encabezado (Header), un componente de navegación tipo BreadCrumb, 
 * el contenido de la página (manejado a través de `Outlet`), y el pie de página (Footer).
 * Además, integra un widget de accesibilidad importado desde "sena-accessibility".
 * 
 * @component AppLayout
 * 
 * @returns {JSX.Element} La estructura del layout de la aplicación con accesibilidad incluida.
 * 
 * @example
 * // Uso en una configuración de rutas
 * import { BrowserRouter, Routes, Route } from "react-router-dom";
 *
 */
export default function AppLayout() {
    return (
        <>
            <div id="app__container">
                <Header />
                <BreadCrumb />
                <Outlet />
                <Footer />
                <AccessibilityWidget />
            </div>
        </>
    );
}
