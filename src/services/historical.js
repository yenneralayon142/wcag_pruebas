
/**
 * URL base de la API utilizada para hacer solicitudes HTTP.
 * En este caso, apunta al servidor local que corre en el puerto 5000.
 * @constant {String}
 */
const API_URL = "http://127.0.0.1:5000"

/**
 * Realiza una búsqueda del historial completo de dominios y URLs.
 * @function searchHistorical el nombre de la función es searchHistorical
 * @returns {Promise<Array<Object>>} Una promesa que resuelve en un array de objetos que contienen el historial de dominios.
 * Cada objeto incluye `id`, `domain`, `url` y `date`. Retorna un array vacío si no hay resultados o si ocurre un error.
 */

export const searchHistorical = async () => {
    try {
        const data = await Fetchdata("/history"); // Hacer la solicitud

        // Si la solicitud es exitosa y el status es "success"
        if (data.status === "success") {
            const response = data.data.map((url) => ({
                id: url._id,
                domain: url.domain,
                url: url.url,
                date: url.date,
            }));

            return response;
        } else {
            // Si el estado no es "success", lanzar un error
            throw new Error('Error en la respuesta: estado no exitoso');
        }
    } catch (error) {
        // Captura cualquier error durante el fetch
        console.error('Error al buscar el historial:', error);
        throw error; // Vuelve a lanzar el error para manejarlo en otro lugar
    }
};


/**
 * Busca el historial de un dominio específico eliminando prefijos "http://" o "https://", y consultando un endpoint de historial.
 * @function searchHistoricalDomain El nombre de la función es searchHistoricalDomain
 * @param {String} domain - El nombre de dominio que se desea buscar. Se puede pasar con o sin prefijos "http://" o "https://".
 * @returns {Promise<Array<Object>|null>} Una promesa que resuelve en un array de objetos con los datos históricos del dominio
 * (incluyendo id, dominio, URL y fecha) si la búsqueda es exitosa. Retorna `null` si el dominio está vacío, y un array vacío si no hay resultados o hay un error.
 */

export const searchHistoricalDomain = async (domain) => {
    if (domain === "") return null;

    if (domain.startsWith("http://")) {
        domain = domain.slice(7);
    } else if (domain.startsWith("https://")) {
        domain = domain.slice(8);
    }

    domain = domain.split("/")[0];

    const data = await Fetchdata(`/history/domain/${domain}`);

    // const data = domain_historic;

    if (data.status === "success") {
        const response = data.data.map((url) => ({
            id: url._id,
            domain: url.domain,
            url: url.url,
            date: url.date,
        }));

        return response;
    } else {
        return []
    }
}

/**
 * Busca el historial de un dominio por su ID y retorna los detalles del historial si se encuentra.
 * @function searchDomain El nombre de la función es searchDomain
 * @param {String} id - El identificador único del historial de dominio a buscar.
 * @returns {Promise<Object>} Una promesa que resuelve con un objeto que contiene los detalles del historial de dominio si el estado es "success".
 * Si no se encuentra, retorna un objeto vacío.
 */

export const searchDomain = async (id) => {
    const data = await Fetchdata(`/history/${id}`);

    // const data = response_id;

    if (data.status === "success") {
        const response = {
            id: data.data._id,
            date: data.data.date,
            status: data.status,
            domain: data.data.domain,
            url: data.data.url,
            violations: data.data.suggestions.violations,
        };

        return response;
    } else {
        return {}
    }
}

/**
 * Realiza una solicitud HTTP a un endpoint específico y retorna los datos en formato JSON.
 * @function Fetchdata El nombre de la función es FetchData
 * @param {String} endpoint - El endpoint que se concatenará a la URL base para formar la URL de la solicitud.
 * @returns {Promise<Object|Array>} Una promesa que resuelve con los datos en formato JSON si la solicitud es exitosa,
 * o un array vacío si ocurre un error.
 * @throws {Error} Lanzará un error si la respuesta HTTP no es exitosa (código de estado fuera del rango 2xx).
 */

const Fetchdata = async (endpoint) => {
    try {
        const response = await fetch(API_URL + endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        return await response.json()
    } catch (e) {
        console.error("Error buscando URLs:", e.message || e)
        return [];
    }
}
