import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    ExpansionPanel,
    ExpansionPanelContent,
} from "@progress/kendo-react-layout";
import { oneDark as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Service
import { searchDomain } from "../../services/historical";

/**
 * Componente que muestra los resultados de accesibilidad para un dominio específico.
 * Utiliza el ID del dominio de los parámetros de la URL para realizar una búsqueda.
 * 
 * @component Url
 * @returns {JSX.Element} El componente Url que renderiza los resultados de accesibilidad.
 */
export default function Url() {

    /**
     * Extrae el ID del dominio de los parámetros de la URL utilizando useParams.
     * @const {string} id - El ID del dominio que se obtiene de la URL.
     */
    const { id } = useParams();

    /**
     * Estado para almacenar la información del dominio.
     * @const {[Object]} domain - Objeto que contiene los datos del dominio.
     * @function setDomain - Función para actualizar el estado de domain.
     */
    const [domain, setDomain] = useState({});

    /**
     * Estado para manejar la expansión de paneles de información.
     * @const {[number]} expanded - Índice del panel actualmente expandido.
     * @function setExpanded - Función para actualizar el estado de expanded.
     */
    const [expanded, setExpanded] = useState(-1);

     /**
     * Función asíncrona que obtiene los datos del dominio.
     * Llama a la API searchDomain con el ID y actualiza el estado de domain.
     */
    const fetchDomain = async () => {
        const response = await searchDomain(id);
        setDomain(response);
        console.log(response);
    };

    useEffect(() => {
        fetchDomain();
    }, []);

    return (
        <section>
            <div className="container">
                <h3 className="text--blue text-6xl">
                    Resultados de accesibilidad de{" "}
                    <a
                        href={domain.url || "#"}
                        className="link"
                        target="_blank"
                    >
                        {domain.url || "cargando..."}
                    </a>
                </h3>
                <div>
                    <p className="text-base font-bold text--blue" style={{padding: '10px 0px'}}> Problemas de accesibilidad: </p>
                    <div className="wrapper">
                        {domain.violations &&
                            domain.violations.map((issue, index) => (
                                <ExpansionPanel
                                    title={`❗ ${issue.problema}`}
                                    expanded={expanded == index}
                                    tabIndex={0}
                                    key={index}
                                    onAction={(event) => {
                                        setExpanded(
                                            event.expanded ? -1 : index
                                        );
                                    }}
                                >
                                    {expanded === index && <ExpansionPanelContent>
                                        <p className="text--large"><span className="text--bold">Solución:</span> {issue.solucion}</p>
                                        <p className="font-bold text--large">Ejemplo código:</p>
                                        <SyntaxHighlighter
                                            language="html"
                                            style={codeTheme}
                                        >
                                            {issue.ejemplo_codigo}
                                        </SyntaxHighlighter>
                                    </ExpansionPanelContent>}
                                </ExpansionPanel>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
