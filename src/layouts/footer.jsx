/**
 * Componente Footer.
 * 
 * Este componente renderiza el pie de página para la aplicación.
 * Muestra el texto de derechos reservados con el año actual.
 * 
 * @component Footer
 * @returns {JSX.Element} El componente Footer que contiene un pie de página simple.
 */
export default function Footer () {
    return (
        <footer className="text-2xl">
            &copy; SENA, 2024.
        </footer>
    )
}