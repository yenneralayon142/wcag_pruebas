import Principle from "../principle";

/**
 * Componente Principles que presenta los cuatro principios fundamentales de la WCAG. LLama al componente Principle
 * @component Principles
 * @returns {JSX.Element} Un componente de sección que muestra un título, una descripción y una lista de principios con iconos.
 * @see Principle
 */

export default function Principles() {
    return(
        <section>
            <div className="container principles">
                <h2 className="text-4xl text--blue">Los principios WCAG</h2>
                <p className="text-xl">La wcag se organiza en torno a cuatro principios fundamentales</p>
                <div className="principles__cards__container">
                    <Principle title="Perceptible" image="/icons/eye.png" />
                    <Principle title="Operable" image="/icons/layers.png" />
                    <Principle title="Comprensible" image="/icons/key.png" />
                    <Principle title="Robusto" image="/icons/shield.png" />
                </div>
                <p className="text-xl">Puedes explorar cada uno de estos principios y ver todos los parametros del estándar actualizados en tiempo real y haciendo click en los íconos correspondientes.</p>
            </div>
        </section>
    );
}