/**
 * Componente Hero que presenta información introductoria sobre los estándares WCAG.
 * @component hero
 * @returns {JSX.Element} Un componente de sección que muestra un título y una descripción sobre las WCAG, junto con una imagen.
 */
export default function Hero() {
    return(
        <section>
            <div className="container hero__wcag">
                <div className="hero__wcag__title">
                    <h1 className="text-7xl text--blue"> ¿Qué son los estándares <span className="text-7xl text--green">WCAG</span>? </h1>
                    <p className="text-xl">
                        Las pautas de accesibilidad para el contenido web (WCAG por sus siglas en inglés) son recomendaciones del W3C que buscan 
                        hacer la web más accesible, asegurando que todo en una página sea fácil de usar y comprender.
                    </p>
                </div>
                <figure className="hero__wcag__image">
                    <img src="/hero_wcag.png" alt="Imagen de incio sobre las WCAG" className="image" />
                </figure>
            </div>
        </section>
    );
}