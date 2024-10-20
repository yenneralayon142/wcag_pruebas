import { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import Swal from 'sweetalert2'

// Hooks
import { analyzeUrl } from "../../services/analyze";

// Components
import AnalyzeList from "./utils/analyzeList";


/**
 * Componente de React que permite a los usuarios analizar la accesibilidad de 
 * sitios web ingresando dominios. Los usuarios pueden agregar o eliminar dominios 
 * y solicitar un análisis de accesibilidad.
 * 
 * Este componente gestiona una lista de dominios y su estado de análisis. Incluye 
 * funcionalidades para manejar cambios en los dominios, añadir y eliminar dominios, 
 * y realizar el análisis de accesibilidad. Muestra los resultados del análisis 
 * en el componente `AnalyzeList`.
 * 
 * @component Analyze
 * @returns {JSX.Element} Componente que proporciona un formulario para analizar 
 * la accesibilidad de dominios web y muestra los resultados del análisis.
 * 
 * @example
 * <Analyze />
 */

export default function Analyze() {

    /**
     * Maneja el estado de los dominios a analizar.
     * 
     * Este estado inicializa una lista con un dominio vacío, permitiendo
     * al usuario agregar múltiples dominios para el análisis de accesibilidad.
     * 
     * @type {[string[], function]} domains - Array de dominios a analizar.
     * @type {function} setDomains - Función para actualizar el estado de los dominios.
     */
    const [domains, setDomains] = useState([""]);

    /**
     * Maneja el estado de la respuesta del análisis de accesibilidad.
     * 
     * Este estado inicializa un objeto vacío, que se actualizará
     * con la respuesta del análisis una vez que se complete la operación.
     * 
     * @type {[Object, function]} analyzeResponse - Objeto que contiene la respuesta del análisis.
     * @type {function} setAnalyzeResponse - Función para actualizar el estado de la respuesta del análisis.
     */
    const [analyzeResponse, setAnalyzeResponse] = useState({});

    /**
     * Maneja el estado de la operación de análisis de accesibilidad.
     * 
     * Este estado se inicializa en `false`, indicando que no se
     * está realizando un análisis en curso. Se actualizará a `true`
     * cuando se inicie el análisis y volverá a `false` una vez
     * completado.
     * 
     * @type {[boolean, function]} isAnalyzing - Booleano que indica si el análisis está en curso.
     * @type {function} setIsAnalyzing - Función para actualizar el estado del análisis.
     */
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    /**
     * Maneja el cambio en el valor de un dominio en la lista de dominios.
     * 
     * Esta función actualiza el estado de `domains` al modificar el valor
     * del dominio en el índice especificado. Se crea una copia del array
     * de dominios existente, se actualiza el valor en el índice proporcionado,
     * y se establece el nuevo array en el estado.
     * 
     * @param {number} index - El índice del dominio a actualizar.
     * @param {string} value - El nuevo valor del dominio.
     * @returns {void}
     */
    const handleDomainChange = (index, value) => {
        const newDomains = [...domains];
        newDomains[index] = value;
        setDomains(newDomains);
    };

    /**
     * Agrega un nuevo dominio a la lista de dominios.
     * 
     * Esta función actualiza el estado de `domains` al añadir un nuevo
     * elemento vacío al final de la lista. Esto permite al usuario
     * ingresar un nuevo dominio en el formulario.
     * 
     * @returns {void}
     */
    const handleAddDomain = () => {
        setDomains([...domains, ""]);
    };

    /**
     * Elimina el último dominio de la lista de dominios.
     * 
     * Esta función actualiza el estado de `domains` eliminando el último 
     * elemento de la lista, siempre que haya más de un dominio en la lista.
     * Si solo hay un dominio, se muestra una alerta indicando que no se
     * puede eliminar el último dominio.
     * 
     * @returns {void}
     */
    const handleRemoveDomain = () => {
        if (domains.length > 1) {
            setDomains(domains.slice(0, -1));
        } else if (domains.length === 1){
            Swal.fire({
                title: 'No se puede eliminar el campo Dominio',
                text: 'El campo de ingresar dominio no se eliminará',
                icon: 'error',
                confirmButtonText: 'Volver'
              })
        }else{
            Swal.fire({
                title: 'Ha ocurrido un error eliminando el campo',
                text: 'Ha ocurrido un error',
                icon: 'error',
                confirmButtonText: 'Volver'
              })
        }
    };

    /**
     * Maneja la acción de analizar la accesibilidad de los dominios ingresados.
     * 
     * Esta función verifica si se ha ingresado al menos un dominio. Si no, 
     * muestra una alerta. Si hay dominios válidos, establece el estado `isAnalyzing`
     * a verdadero y llama a la función `analyzeUrl` después de un breve retraso. 
     * Al recibir la respuesta, actualiza el estado de `analyzeResponse` y muestra
     * una alerta de que el análisis ha finalizado.
     * 
     * @returns {Promise<void>} No devuelve ningún valor, pero realiza operaciones 
     * asíncronas para el análisis de dominios.
     */

    const handleAnalyze = async () => {
        if (domains[0] === "") {
            Swal.fire({
                title: 'No ha ingresado ningún dominio',
                text: 'Ingrese un dominio para analizar',
                icon: 'warning',
                confirmButtonText: 'Volver'
            });
            return;
        }
    
        setIsAnalyzing(true);
    
        setTimeout(async () => {
            try {
                const response = await analyzeUrl(domains);
                setAnalyzeResponse(response);
                
                // Manejar la respuesta según el estado
                if (response.status === "success") {
                    Swal.fire({
                        title: 'Proceso completado',
                        text: 'Análisis realizado con éxito',
                        icon: 'success',
                        confirmButtonText: 'Continuar'
                    });
                } else {
                    // Si hay un error en la respuesta, muéstralo
                    Swal.fire({
                        title: 'Error en el análisis',
                        text: response.message || 'Error desconocido.',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                }
            } catch (error) {
                console.error("Error al analizar la URL:", error); // Para depuración
                Swal.fire({
                    title: 'Error en el análisis',
                    text: error.message || 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo.',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            } finally {
                setIsAnalyzing(false);
            }
        }, 450);
    };
    

    return (
        <section>
            <div className="container">
                {/* Title */}
                <h2 className="text-3xl text--blue">
                    Analizar accesibilidad sitios web
                </h2>

                {/* Form */}
                <form>
                    <fieldset>
                        <label htmlFor="new-domain-input" className="font-semibold text--blue">
                            Analizar dominio nuevo:
                        </label>
                        {domains.map((domain, index) => (
                            <TextBox
                                key={index}
                                id={`domain-input-${index}`}
                                placeholder={`Ingresa el dominio No. ${
                                    index + 1
                                }`}
                                value={domain}
                                onChange={(e) =>
                                    handleDomainChange(index, e.target.value)
                                }
                            />
                        ))}
                    </fieldset>

                    <span>
                       <Button
                            onClick={handleAnalyze} // Aquí pasas la referencia a la función directamente
                            type="button"
                            themeColor="primary"
                            disabled={isAnalyzing}
                            className={isAnalyzing ? "button--loading" : ""}>
                            {isAnalyzing ? "Analizando..." : "Analizar dominio"}
                        </Button>
                        <Button type="button" onClick={handleAddDomain}>
                            Añadir otro dominio
                        </Button>
                        <Button type="button" onClick={handleRemoveDomain}>
                            Eliminar el último dominio
                        </Button>
                    </span>
                </form>

                {/* Results */}
                <div className="search__results">
                    <div>
                        <h4 className="font-bold text--blue text-lg">
                            Resultado del análisis:
                        </h4>
                        <AnalyzeList data={analyzeResponse} />
                    </div>
                </div>
            </div>
        </section>
    );
}
