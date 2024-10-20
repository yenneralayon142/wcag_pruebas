import { useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb } from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import * as icons from "@progress/kendo-svg-icons";

/**
 * Componente BreadCrumb que muestra una barra de navegación para facilitar la 
 * navegación a través de la aplicación. Muestra la ruta actual basada en la URL.
 * 
 * @component breadCrumb
 * @returns {JSX.Element} Un componente que renderiza una barra de navegación 
 * con enlaces a las diferentes secciones de la aplicación.
 */
export default function BreadCrumb() {

    /**
     * Hook de navegación y ubicación para el componente.
     * 
     * - `useNavigate`: Permite la navegación programática en la aplicación. 
     *                  Se utiliza para cambiar la ruta actual.
     * 
     * - `useLocation`: Proporciona información sobre la ubicación actual del 
     *                  navegador, incluida la URL. 
     *                  Se utiliza para acceder a los segmentos de la ruta.
     * 
     * @returns {void}
     */
    const navigate = useNavigate();
    const location = useLocation();


    /**
     * Segmenta la ruta actual en partes individuales.
     * 
     * Separa la ruta actual (`location.pathname`) en segmentos 
     * basados en el carácter `/` y filtra los segmentos vacíos. 
     * Esto es útil para construir componentes de navegación 
     * como un breadcrumb.
     * 
     * @type {string[]}
     */
    const pathSegments = location.pathname
        .split("/")
        .filter((segment) => segment);

    /**
     * Crea un array de elementos de navegación (breadcrumb).
     * 
     * Cada elemento incluye un identificador único (`id`), un texto 
     * representativo (`text`), una ruta (`path`) y un ícono 
     * correspondiente (`icon`).
     * 
     * @type {Array<{ id: string, text: string, path: string, icon: JSX.Element }>}
     */
    const items = [
        {
            id: "home",
            text: "Inicio",
            path: "/",
            icon: <SvgIcon icon={icons.homeIcon} />,
        },
        ...pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const itemText = segment.charAt(0).toUpperCase() + segment.slice(1);
            return {
                id: segment,
                text:
                    itemText == "Docs"
                        ? "Documentación"
                        : itemText == "Team"
                        ? "Equipo"
                        : itemText == "SearchUrl"
                        ? "Búsqueda url"
                        : itemText,
                path: path,
            };
        }),
    ];

    /**
     * Modifica el texto del tercer elemento en el array `items` 
     * si hay exactamente tres elementos y el segundo es "Búsqueda url".
     *
     * Si se cumplen las condiciones, se cambia el texto del tercer elemento 
     * a "Detalles dominio".
     */
    if (items.length == 3 && items[1].text == "Búsqueda url") {
        items[2].text = "Detalles dominio";
    }

    /**
     * Maneja la selección de un elemento de navegación.
     *
     * @param {Object} event - El evento que contiene información sobre la selección.
     * @param {string} event.id - El identificador del elemento seleccionado.
     */
    const handleItemSelect = (event) => {
        const itemIndex = items.findIndex(
            (curValue) => curValue.id === event.id
        );
        redirect(items[itemIndex]);
    };

    /**
     * Maneja el evento de pulsar una tecla.
     *
     * Si se presiona la tecla "Enter" (código de tecla 13), 
     * redirige al elemento correspondiente.
     *
     * @param {Object} event - El evento de teclado.
     */
    const handleKeyDown = (event) => {
        if (event.nativeEvent.keyCode === 13) {
            const itemIndex = items.findIndex(
                (curValue) => curValue.id === event.id
            );
            redirect(items[itemIndex]);
        }
    }

    /**
     * Redirige a la ruta especificada en el elemento seleccionado.
     *
     * Esta función verifica si el elemento seleccionado tiene una ruta válida 
     * y, si es así, utiliza la función `navigate` para redirigir al usuario 
     * a esa ruta.
     *
     * @param {Object} selectedItem - El elemento seleccionado para redirigir.
     * @param {string} selectedItem.path - La ruta a la que redirigir.
     */
    const redirect = (selectedItem) => {
        if (selectedItem && selectedItem.path) {
            navigate(selectedItem.path);
        }
    }
    
    return (
        <div className="container">
            <Breadcrumb
                data={items}
                onItemSelect={handleItemSelect}
                onKeyDown={handleKeyDown}
                size="large"
            />
        </div>
    );
}
