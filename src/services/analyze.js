
/**
 * URL base de la API utilizada para hacer solicitudes HTTP.
 * En este caso, apunta al servidor local que corre en el puerto 5000.
 * @constant {String}
 */
const API_URL = "http://127.0.0.1:5000";

/**
 * Realiza un análisis de una lista de URLs, procesando cada una para extraer su dominio y otros datos.
 * @function analyzeUrl
 * @param {Array<String>} urls - Una lista de URLs a analizar.
 * @returns {Promise<Object>} Una promesa que resuelve en un objeto que contiene el estado de la operación (`status`), 
 * un mensaje (`message`), y los datos procesados en caso de éxito. Cada entrada de `data` incluye `id`, `url`, `domain` y `date`.
 * Retorna un objeto con `status: "error"` y un array vacío si la operación falla.
 */

export const analyzeUrl = async (urls) => {
    try {
        const data = await Fetchdata("/analyze", urls);

        // Verificar la respuesta de la API
        if (data.status === "success") {
            const response = data.data.map((result) => {
                let domain = result.url;

                // Eliminar el prefijo "http://" o "https://" del dominio
                if (domain.startsWith("http://")) {
                    domain = domain.slice(7);
                } else if (domain.startsWith("https://")) {
                    domain = domain.slice(8);
                }

                domain = domain.split("/")[0];

                return {
                    id: result.unique_id,
                    url: result.url,
                    domain: domain,
                    date: result.date,
                };
            });

            return {
                status: "success",
                message: "Análisis completado",
                data: response,
            };
        } else {
            // Manejo de error cuando la respuesta no es exitosa
            return { status: "error", message: data.message || "Error en la respuesta del servidor", data: [] };
        }
    } catch (error) {
        // Manejo de errores de red o de ejecución
        console.error("Error al analizar la URL:", error); // Para depuración
        return { status: "error", message: error.message || "Ocurrió un error inesperado", data: [] };
    }
};


/**
 * Realiza una solicitud POST a un endpoint específico enviando una lista de URLs en el cuerpo de la petición.
 * @function Fetchdata el nombre de la función es FetchData
 * @param {String} endpoint - El endpoint que se concatenará a la URL base para formar la URL de la solicitud.
 * @param {Array<String>} urls - Una lista de URLs que se enviarán en el cuerpo de la solicitud.
 * @returns {Promise<Object|Array>} Una promesa que resuelve en los datos en formato JSON si la solicitud es exitosa, 
 * o un array vacío si ocurre un error.
 * @throws {Error} Lanzará un error si la respuesta HTTP no es exitosa (código de estado fuera del rango 2xx).
 */

const Fetchdata = async (endpoint, urls) => {
    try {
        const response = await fetch(API_URL + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ urls: urls }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (e) {
        console.error("Error buscando URLs:", e.message || e);
        return [];
    }
};
