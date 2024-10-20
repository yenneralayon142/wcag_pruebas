import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Menu,
    MenuItem,
} from "@progress/kendo-react-layout";
import { Popup } from "@progress/kendo-react-popup";
import { bellIcon, menuIcon } from "@progress/kendo-svg-icons";


/**
 * Componente Header.
 * 
 * Este componente renderiza la barra de navegación con un logo, un menú de navegación y una versión responsive para dispositivos móviles.
 * Incluye enlaces para redirigir a diferentes rutas dentro de la aplicación.
 * 
 * @component Header
 * @returns {JSX.Element} El componente Header que contiene la barra de navegación y el menú.
 */

export default function Header() {
    
    /**
     * Array de objetos que representa los elementos del menú.
     * Cada objeto contiene el texto y la ruta del enlace correspondiente.
     * @type {Array<{ text: string, url: string }>}
     */

    const menuItems = [
        {
            text: "Inicio",
            route: "/",
        },
        {
            text: "WCAG",
            route: "/wcag",
        },
        {
            text: "Quienes somos",
            route: "/team",
        },
        {
            text: "Busqueda Url",
            route: "/searchUrl",
        },
        {
            text: "Documentación",
            route: "/docs",
        },
    ];

    // Estado para controlar la visibilidad del menú responsive
    const [show, setShow] = useState(false);
    const anchor = React.useRef(null);

    /**
     * Función para manejar el clic en el botón del menú responsive.
     * Alterna la visibilidad del menú.
     */
    const handleClick = () => {
        setShow(!show);
    };

    // Funcion para redireccionar
    const navigate = useNavigate();

    /**
     * Función que redirige a la ruta seleccionada en el menú.
     * 
     * @param {Object} event - Evento de selección del menú.
     */
    const onSelect = (event) => {
        navigate(event.item.route);
    };

    /**
     * Efecto secundario que se ejecuta después de que el componente se ha montado.
     * Este efecto agrega la clase 'text-xl' a todos los elementos de texto del menú 
     * que tienen la clase 'k-menu-link-text'. Esto se utiliza para aplicar un 
     * estilo específico (tamaño de fuente más grande) a los enlaces del menú.
     * 
     * La dependencia vacía '[]' significa que este efecto solo se ejecutará una vez
     * al montar el componente, similar a componentDidMount en componentes de clase.
     */
    useEffect(() => {
        document.querySelectorAll(".k-menu-link-text").forEach((element) => {
            element.classList.add("text-xl");
        });
    });

    return (
        <AppBar className="header" positionMode="sticky" themeColor="light">
            <nav className="header__container">
                {/* Logo */}
                <AppBarSection>
                    <Link to="/" className="header__brand">
                        <div className="header__logo">
                            <img
                                src="/logo-sena.png"
                                alt="Logo sena"
                                className="image"
                            />
                        </div>
                    </Link>
                </AppBarSection>

                <AppBarSpacer />

                {/* Menú */}
                <AppBarSection>
                    <div id="header__desktop" className="header__desktop">
                        <Menu onSelect={onSelect} items={menuItems} />
                    </div>
                </AppBarSection>

                {/* Menu Responsive */}
                <AppBarSection>
                    <div ref={anchor} id="header__mobile">
                        <Button
                            fillMode="flat"
                            onClick={handleClick}
                            type="button"
                            svgIcon={menuIcon}
                        />
                    </div>
                    {show && (
                        <Popup
                            anchor={anchor.current}
                            show={show}
                            style={{
                                marginLeft: -10,
                                zIndex: 1000,
                            }}
                        >
                            <Menu
                                items={menuItems}
                                onSelect={onSelect}
                                vertical={true}
                                style={{
                                    display: "inline-block",
                                }}
                            />
                        </Popup>
                    )}
                </AppBarSection>
            </nav>
        </AppBar>
    );
}
