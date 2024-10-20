import { useEffect, useState } from "react";
import { DropDownList, AutoComplete } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";
import { useNavigate } from "react-router-dom";
import { source, links } from "./docsSearch";

/**
 * Componente de filtros de búsqueda para la documentación.
 * 
 * Este componente permite a los usuarios buscar y filtrar temas en la documentación 
 * a través de un campo de autocompletado y un menú desplegable para seleccionar 
 * niveles de accesibilidad.
 *
 * @component SearchFilters
 * @returns {JSX.Element} Elemento del componente SearchFilters.
 */

export default function SearchFilters() {

    /**
     * Hook que proporciona la función de navegación para redirigir a diferentes rutas en la aplicación.
     * 
     * Este hook permite la navegación programática entre diferentes rutas utilizando la función
     * `navigate`. Se puede utilizar para redirigir a los usuarios a nuevas páginas, pasar 
     * parámetros de estado y manejar redirecciones basadas en eventos o lógica de negocio.
     * 
    /**
     * @typedef {function} NavigateFunction
     * @param {string} to - La ruta a la que se desea navegar.
     * @param {Object} [options] - Opciones adicionales para la navegación.
     * @param {boolean} [options.replace] - Si se debe reemplazar la entrada actual en el historial.
     * @param {Object} [options.state] - Estado adicional que se puede pasar a la nueva ubicación.
     *
     * @returns {NavigateFunction} La función de navegación para cambiar de ruta.
    */
    const navigation = useNavigate();

  /**
 * Hook de estado que gestiona los datos y la entrada del usuario para el componente de búsqueda.
 * 
 * @typedef {Object} SearchFiltersState
 * @property {Array} data - La lista de datos filtrados que se utilizará para autocompletar las búsquedas.
 * @property {string} value - El valor actual de entrada del usuario en el campo de búsqueda.
 * @property {string} suggest - La sugerencia actual basada en la entrada del usuario.
 * 
 */
const [state, setState] = useState({
    data: source,
    value: "",
    suggest: "",
});

    /**
     * Filtra los datos de la fuente según el valor proporcionado.
     *
     * Esta función utiliza el operador "startswith" para devolver elementos que comienzan con 
     * el valor especificado, ignorando mayúsculas y minúsculas.
     *
     * @param {string} value - El valor que se utilizará para filtrar los datos.
     * @returns {Array} - Un array de datos filtrados que coinciden con el valor proporcionado, 
     *                    o la fuente completa si no se proporciona ningún valor.
     */
    const filterData = (value) => {
        const data = source;
        const filter = {
            value: value,
            operator: "startswith",
            ignoreCase: true,
        };
        return value ? filterBy(data, filter) : data;
    };

    /**
     * Maneja el cambio en el campo de búsqueda y actualiza el estado con los datos filtrados.
     *
     * Esta función se activa cuando el usuario cambia el valor del campo de búsqueda. 
     * Filtra los datos utilizando la función `filterData` y actualiza el estado 
     * con el valor actual, los datos filtrados y una sugerencia, si está disponible.
     *
     * @param {Object} event - El evento de cambio que contiene el nuevo valor del campo de búsqueda.
     * @param {string} event.value - El nuevo valor del campo de búsqueda.
     * @param {Object} [event.suggestion] - Un objeto que contiene una sugerencia basada en el valor ingresado.
     * @param {string} event.suggestion.value - El valor de la sugerencia, si existe.
     */

    const handleSearchChange = (event) => {
        const value = event.value;
        setState({
            data: filterData(value),
            value: value,
            suggest: event.suggestion ? event.suggestion.value : "",
        });
    };


    /**
     * Maneja el cierre del campo de búsqueda y navega a la URL correspondiente.
     *
     * Esta función se ejecuta cuando el usuario cierra el campo de búsqueda. 
     * Busca en la lista de enlaces si el texto ingresado por el usuario (o una sugerencia)
     * coincide con alguno de los elementos en `links`. Si se encuentra una coincidencia, 
     * navega a la URL asociada. Si no se encuentra una coincidencia, se registra un 
     * mensaje de error en la consola.
     */
    const handleSearchClose = () => {
        const index = links.findIndex(x => x.text.toLowerCase() == state.value.toLowerCase() || x.text.toLocaleLowerCase() == state.suggest.toLowerCase() )
        if (index >= 0) {
            navigation( links[index].url );
        } else {
            console.error("Elemento no encontrado: " + state.value)
        }
    }

    /**
     * Filtros de nivel de accesibilidad.
     *
     * Esta constante define un conjunto de filtros que representan los niveles 
     * de accesibilidad según las directrices WCAG (Web Content Accessibility Guidelines).
     * Cada filtro contiene un texto descriptivo, un identificador único y un valor asociado.
     *
     * @constant {Array<Object>} leverFilter
     * @property {string} text - El texto que se muestra al usuario para el filtro.
     * @property {string} id - Un identificador único para el filtro.
     * @property {string} value - El valor asociado al filtro, utilizado en la lógica de filtrado.
     */
    const leverFilter = [
        {
            text: "Nivel A",
            id: "nivel-a",
            value: "a",
        },
        {
            text: "Nivel AA",
            id: "nivel-aa",
            value: "aa",
        },
        {
            text: "Nivel AAA",
            id: "nivel-aaa",
            value: "aaa",
        },
    ];

    /**
     * Elemento por defecto para los filtros de búsqueda.
     *
     * Esta constante representa un elemento predeterminado que se utiliza en los 
     * filtros de búsqueda para seleccionar todos los niveles de accesibilidad.
     * Se muestra al usuario como una opción que permite ver todos los resultados.
     *
     * @constant {Object} defaultItem
     * @property {string} text - El texto que se muestra al usuario para el elemento por defecto.
     * @property {string} id - Un identificador único para el elemento por defecto.
     * @property {string} value - El valor asociado al elemento por defecto, utilizado en la lógica de filtrado.
    */
    const defaultItem = {
        text: "Todos",
        id: "todos",
        value: "todos",
    };

    /**
     * Efecto secundario que se ejecuta una vez al montar el componente.
     *
     * Este efecto se encarga de marcar todos los checkboxes de filtro 
     * como seleccionados al inicializar el componente. Utiliza el 
     * método `setAttribute` para establecer el atributo "checked" 
     * en todos los elementos de checkbox que tienen la clase "filter-check".
     *
     * @function useEffect
     * @returns {void}
     */
    useEffect(() => {
        document.querySelectorAll(".filter-check").forEach((element) => {
            element.setAttribute("checked", true);
        });
    }, []);

    /**
     * Maneja los cambios en el filtro de búsqueda.
     *
     * Esta función se ejecuta cuando el usuario selecciona un nuevo 
     * filtro en el componente `DropDownList`. Elimina el atributo 
     * "checked" de todos los checkboxes de filtro y establece el 
     * "checked" en el checkbox correspondiente al filtro seleccionado.
     *
     * @param {Object} event - El evento de cambio que contiene información 
     * sobre la selección del usuario.
     * @param {Object} event.value - El valor del elemento seleccionado, 
     * que incluye un identificador (`id`) que se usa para determinar 
     * qué checkbox debe ser marcado.
     *
     * @returns {void}
     */
    const handleInputChange = (event) => {
        document.querySelectorAll(".filter-check").forEach((element) => {
            element.removeAttribute("checked");
        });

    /**
     * Maneja el cambio en la selección del filtro y actualiza el estado 
     * de los checkboxes de filtro correspondientes.
     *
     * Esta estructura de control se ejecuta cuando el usuario selecciona un nuevo filtro 
     * en el componente `DropDownList`. Marca el checkbox correspondiente 
     * al filtro seleccionado o marca todos los checkboxes si se elige 
     * la opción "Todos".
     *
     * @param {Object} event - El evento de cambio que contiene información 
     * sobre la selección del usuario.
     * @param {Object} event.value - El valor del elemento seleccionado, 
     * que incluye un identificador (`id`) para determinar qué checkbox 
     * debe ser marcado.
     *
     */
        switch (event.value.id) {
            case "nivel-a":
                document.getElementById("c-a").setAttribute("checked", true);
                break;
            case "nivel-aa":
                document.getElementById("c-aa").setAttribute("checked", true);
                break;
            case "nivel-aaa":
                document.getElementById("c-aaa").setAttribute("checked", true);
                break;
            case "todos":
                document
                    .querySelectorAll(".filter-check")
                    .forEach((element) => {
                        element.setAttribute("checked", true);
                    });
                break;
            default:
                break;
        }
    };

    return (
        <div className="docs__search-filters">
            <input type="checkbox" className="hidden filter-check" id="c-a" />
            <input type="checkbox" className="hidden filter-check" id="c-aa" />
            <input type="checkbox" className="hidden filter-check" id="c-aaa" />

            <h2 className="font-bold text-3xl text--blue text--truncate">
                Documentacion
            </h2>

            <AutoComplete
                data={links}
                value={state.value}
                suggest={true}
                onChange={handleSearchChange}
                onClose={handleSearchClose}
                textField="text"
                placeholder="Buscar tema..."
            />
            <div className="docs__filters">
                <h4 className="font-bold text-xl text--blue">
                    Filtros de búsqueda
                </h4>
                <DropDownList
                    data={leverFilter}
                    textField="text"
                    dataItemKey="id"
                    onChange={handleInputChange}
                    defaultItem={defaultItem}
                    id="level-filter"
                />
            </div>
        </div>
    );
}
