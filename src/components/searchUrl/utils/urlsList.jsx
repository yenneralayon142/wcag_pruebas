import { Button } from "@progress/kendo-react-buttons";

/**
 * Componente de React que presenta una lista de URLs.
 * 
 * Este componente toma un array de objetos URL y los muestra en una lista.
 * Cada elemento de la lista incluye el dominio, la fecha y la hora de 
 * análisis, así como un enlace a la URL y un botón para ver más información 
 * sobre el análisis correspondiente.
 * 
 * @component ListOfUrls
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.urls - Array de objetos que contienen información 
 * sobre las URLs.
 * @param {string} props.urls[].id - Identificador único de la URL.
 * @param {string} props.urls[].domain - Dominio de la URL.
 * @param {string} props.urls[].url - URL.
 * @param {string} props.urls[].date - Fecha de análisis de la URL.
 * 
 * @returns {JSX.Element} Componente que muestra una lista de URLs.
 * 
 * @example
 * const urlsData = [
 *     { id: 1, domain: 'ejemplo.com', url: 'https://ejemplo.com', date: '2023-09-30T12:00:00Z' },
 *     { id: 2, domain: 'prueba.com', url: 'https://prueba.com', date: '2023-09-30T13:00:00Z' },
 * ];
 * <ListOfUrls urls={urlsData} />
 */

function ListOfUrls({ urls }) {
    return (
        <ul className="url__list">
            {urls.map((url) => (
                <li key={url.id}>
                    <div>
                        <p className="font-bold text-lg text--blue">
                            {url.domain}{" "}
                            <span>
                                - {new Date(url.date).toLocaleDateString("es-CO") + " " + new Date(url.date).toTimeString().split(" ")[0]}
                            </span>
                        </p>
                        <p>
                            <strong>Link:</strong>{" "}
                            <a
                                href={url.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {url.url}
                            </a>
                        </p>
                    </div>
                    <a href={`/searchUrl/${url.id}`}>
                        <Button themeColor={"primary"}>
                            Ver más información
                        </Button>
                    </a>
                </li>
            ))}
        </ul>
    );
}

/**
 * Componente de React que presenta una lista de URLs o un mensaje si no hay resultados.
 * 
 * Este componente verifica si hay URLS disponibles. Si hay, llama al componente 
 * `ListOfUrls` para mostrar la lista. Si no hay resultados, muestra un mensaje indicando 
 * que no se encontraron URLs.
 * 
 * @component
 * @returns {JSX.Element} Componente que muestra una lista de URLs o un mensaje 
 * indicando que no se encontraron resultados.
 * 
 * @example
 * const urlsData = [
 *     { id: 1, domain: 'ejemplo.com', url: 'https://ejemplo.com', date: '2023-09-30T12:00:00Z' },
 *     { id: 2, domain: 'prueba.com', url: 'https://prueba.com', date: '2023-09-30T13:00:00Z' },
 * ];
 * <UrlsList urls={urlsData} />
 */

export function UrlsList({ urls }) {
    return urls.length > 0 ? (
        <ListOfUrls urls={urls} />
    ) : (
        <p>No se encontraron resultados</p>
    );
}
