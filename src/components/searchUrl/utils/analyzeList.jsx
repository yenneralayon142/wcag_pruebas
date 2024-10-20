import { Button } from "@progress/kendo-react-buttons";

/**
 * Componente de React que presenta una lista de análisis de URLs.
 * 
 * Este componente toma datos de análisis y los muestra en una lista.
 * Cada elemento de la lista incluye el dominio, la fecha y la hora de 
 * análisis, un enlace a la URL analizada, y un botón para ver más 
 * información sobre el análisis correspondiente.
 * 
 * @component AnalyzeList
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.data - Datos que se mostrarán en la lista.
 * @param {Array} props.data.data - Array de objetos que contienen información 
 * sobre las URLs analizadas.
 * @param {string} props.data.data[].id - Identificador único de la URL.
 * @param {string} props.data.data[].domain - Dominio de la URL analizada.
 * @param {string} props.data.data[].url - URL analizada.
 * @param {string} props.data.data[].date - Fecha del análisis.
 * 
 * @returns {JSX.Element} Componente que muestra una lista de análisis de URLs.
 * 
 * @example
 * const analysisData = {
 *     data: [
 *         { id: 1, domain: 'ejemplo.com', url: 'https://ejemplo.com', date: '2023-09-30T12:00:00Z' },
 *         { id: 2, domain: 'prueba.com', url: 'https://prueba.com', date: '2023-09-30T13:00:00Z' },
 *     ]
 * };
 * <AnalyzeList data={analysisData} />
 */

export default function AnalyzeList({ data }) {
    const dataList = data && data.data && data.data.length > 0 ? (
        data.data.map((item) => (
            <li key={item.id}>
                <div>
                    <p className="text--blue font-bold text-lg">
                        {item.domain}{" "}
                        <span>
                            - {new Date(item.date).toLocaleDateString("es-CO") + " " + new Date(item.date).toTimeString().split(" ")[0]}
                        </span>
                    </p>
                    <p>
                        <strong>Link:</strong>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.url}
                        </a>
                    </p>
                </div>
                <a href={`/searchUrl/${item.id}`}>
                    <Button themeColor={"primary"}>Ver más información</Button>
                </a>
            </li>
        ))
    ) : (
        <p>No hay resultados</p>
    );

    return <ul className="url__list">{dataList}</ul>;
}
