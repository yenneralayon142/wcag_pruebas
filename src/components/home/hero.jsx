/**
 * Tarjeta que contiene una imagen y un titulo que da a entender al usuario cual es la principal funcionalidad de la pagina
 * 
 * @component Hero
 * @returns {JSX.Element} Tarjeta de bienvenida que le hace entender al usuario cual es el objetivo de la pagina
 */

export default function Hero() {
    return (
        <section>
            <div className="container hero">
                <figure className="hero__figure">
                    <img
                        src="/ImagenInicio.png"
                        alt="Imagen sobre accesibilidad Web"
                        className="image"
                    />
                </figure>
                <div className="hero__title">
                    <h1 className="text-7xl text--blue"> Aprende a hacer tu sitio web <span className="text-7xl text--green"> accesible <br/>con nosotros </span> </h1>
                </div>
            </div>
        </section>
    );
}
