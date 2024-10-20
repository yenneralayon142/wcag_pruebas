import { useState } from "react";
import { TextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import Swal from 'sweetalert2'

// Hooks
import { searchHistorical, searchHistoricalDomain } from "../../services/historical";

// Components
import { UrlsList } from "./utils/urlsList";

/**
 * Componente que muestra el historial de análisis de dominios.
 *
 * Este componente permite a los usuarios ingresar un dominio para buscar su 
 * historial de análisis. También proporciona la opción de ver el historial 
 * total de análisis. Utiliza el estado para manejar el dominio histórico y 
 * los resultados obtenidos de las búsquedas. Incluye controles para realizar 
 * búsquedas y mostrar los resultados.
 * 
 * @component Historic
 * @returns {JSX.Element} Renderiza el componente del historial de análisis 
 * de dominios, incluyendo el formulario para ingresar el dominio y la lista 
 * de resultados.
 */
export default function Historic() {

    /**
     * Estado que almacena el dominio histórico ingresado por el usuario.
     *
     * Este estado se utiliza para capturar el valor del dominio que el usuario 
     * desea buscar en el historial de análisis. El valor inicial es una cadena 
     * vacía.
     *
     * @type {[string, function]} 
     * @default ["", function] 
     */
    const [historicalDomain, setHistoricalDomain] = useState("");

    /**
     * Estado que almacena el historial de análisis total.
     *
     * Este estado se utiliza para guardar una lista de todos los análisis realizados. 
     * El valor inicial es un arreglo vacío.
     *
     * @type {[Array, function]} 
     * @default [[], function] 
     */
    const [historical, setHistorical] = useState([]);

    /**
     * Estado que almacena el historial de un dominio específico.
     *
     * Este estado se utiliza para guardar la información histórica de un dominio
     * que el usuario desea consultar. El valor inicial es un arreglo vacío.
     *
     * @type {[Array, function]} 
     * @default [[], function] 
     */
    const [domainHistorical, setDomainHistorical] = useState([]);

    /**
     * Estado que indica si se está realizando un análisis.
     *
     * Este estado se utiliza para controlar el estado de carga durante el proceso de 
     * análisis de un dominio. El valor inicial es false, indicando que no hay 
     * análisis en curso.
     *
     * @type {[boolean, function]} 
     * @default [false, function] 
    */
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    /**
     * Maneja la acción de enviar el dominio histórico para su análisis.
     *
     * Esta función verifica si se ha ingresado un dominio y, si es así,
     * inicia un proceso de análisis asíncrono para obtener el historial
     * del dominio especificado. Mientras se realiza la búsqueda, se
     * actualiza el estado de carga y se muestran alertas según el resultado.
     * 
     * @async
     * @function
     * @returns {Promise<void>} 
     */

    const handleDomainSearch = async (searchFunction, setData) => {
        try {
            setIsAnalyzing(true); // Inicia el proceso de análisis
            const data = await searchFunction(); // Ejecuta la función de búsqueda
            setData(data); // Asigna los datos al estado correspondiente
        } catch (error) {
            console.error("Error capturado:", error);
    
            // Mostrar un mensaje de error en caso de fallo
            Swal.fire({
                title: 'Error en la búsqueda',
                text: 'Hubo un problema al realizar la búsqueda. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            });
        } finally {
            setIsAnalyzing(false); // Asegúrate de deshabilitar el estado de "análisis"
        }
    }
    
    const handleSubmitHistoricDomain = async () => {
        if (historicalDomain === "") {
            Swal.fire({
                title: 'No ha ingresado ningún dominio',
                text: 'Ingrese un dominio para buscar',
                icon: 'warning',
                confirmButtonText: 'Volver'
            });
            return;
        }
        // Reutiliza la función handleDomainSearch
        await handleDomainSearch(() => searchHistoricalDomain(historicalDomain), setDomainHistorical);
    }

    return (
        <section>
            <div className="container">
                {/* Title */}
                <h2 className="text-3xl text--blue">
                    Histórico de análisis
                </h2>

                {/* Form */}
                <form>
                    <fieldset>
                        <label htmlFor="historical-domain-input" className="font-semibold text--blue">
                            Buscar histórico dominio:
                        </label>
                        <TextBox
                            id="historical-domain-input"
                            placeholder="Ingresa el dominio"
                            value={historicalDomain}
                            onChange={(e) =>
                                setHistoricalDomain(e.target.value)
                            }
                        />
                    </fieldset>

                    <span>
                        <Button
                            onClick={() => handleSubmitHistoricDomain()}
                            type="button"
                            themeColor="primary"
                            disabled={isAnalyzing}
                            className={isAnalyzing ? "button--loading" : ""}
                        >
                            {isAnalyzing ? "Analizando..." : "Ver detalle de la búsqueda de dominio"}                            
                        </Button>
                        <Button 
                            onClick={async () => {
                                await handleDomainSearch(searchHistorical, setHistorical);
                            }} 
                            type="button">
                            Ver histórico
                    </Button>

                    </span>
                </form>

                {/* Results */}
                <div className="search__results">
                    <div>
                        <h4 className="font-bold text--blue text-lg">
                            Resultado de búsqueda por dominio:
                        </h4>
                        <UrlsList urls={domainHistorical} />
                    </div>
                    <div>
                        <h4 className="font-bold text--blue text-lg">
                            Histórico total:
                        </h4>
                        <UrlsList urls={historical} />
                    </div>
                </div>
            </div>
        </section>
    );
}
