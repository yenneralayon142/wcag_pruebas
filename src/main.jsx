import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@progress/kendo-theme-default/dist/all.css";
import "./index.css";
import "./styles.css";

/**
 * Punto de entrada principal de la aplicación.
 *
 * Este archivo configura y renderiza la aplicación React 
 * utilizando el `ReactDOM` de React. Se importa el componente 
 * principal `App` y se aplica el modo estricto de React para 
 * ayudar a identificar problemas potenciales en la aplicación. 
 * También se incluyen estilos de Kendo UI y estilos personalizados 
 * para la aplicación.
 *
 * @returns {void}
 */

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
