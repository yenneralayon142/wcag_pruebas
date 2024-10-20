import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Analyze from "../components/searchUrl/analyze";
import Historic from "../components/searchUrl/historic";
import Url from "../components/url/url";


/**
 * Componente que define las rutas para la búsqueda de URLS.
 *
 * Este componente renderiza dos rutas:
 * 1. La ruta raíz ("/") que muestra los componentes `Analyze` y `Historic`.
 * 2. Una ruta dinámica ("/:id") que muestra el componente `Url` para un ID específico.
 *
 * @function SearchUrl el nombre de la función es SearchUrl
 * @returns {JSX.Element} Un elemento JSX que contiene las rutas para analizar y mostrar información de URLs.
 */

export default function SearchUrl() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <main className="search">
                        <Analyze />
                        <Historic />
                    </main>
                }
            />
            <Route path="/:id" element={
                <main className="url__page">
                    <Url />
                </main> 
            } />
        </Routes>
    );
}
