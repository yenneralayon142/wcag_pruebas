import Service from "../service";

/**
 * Componente de React que presenta los servicios ofrecidos en la página,
 * incluyendo información relacionada con las directrices WCAG, documentación
 * para una mejor comprensión y modelos de HTML/CSS para facilitar la programación.
 * 
 * El componente incluye un título y una lista de servicios, cada uno representado
 * por el componente `Service`, que muestra una imagen, un título y una descripción.
 * 
 * @component Offer
 * @returns {JSX.Element} Componente que describe los servicios ofrecidos.
 * 
 * @example
 * <Offer />
 * 
 * Componentes incluidos:
 * - `Service`: Componente que representa un servicio específico con imagen, título y descripción.
 */
export default function Offer() {
    return (
        <section>
            <div className="container hero">
                <section className="services">
                    <h2 className="font-bold text-4xl text--blue">¿Qué ofrecemos?</h2>
                    <div className="services__container">
                        <Service image="/gestion-de-la-informacion.png" title="Información" text="Relacionada con las directrices WCAG"/>
                        <Service image="/expediente1.png" title="Documentación" text="Guía para una mejor comprensión" />
                        <Service image="/codificacion2.png" title="HTML / CSS" text="Modelos para programar fácilmente" />
                    </div>
                </section>
            </div>
        </section>
    );
}
