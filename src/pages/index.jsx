import Hero from '../components/home/hero';
import Objective from '../components/home/objective';
import Offer from '../components/home/offer';
import ContactForm from '../components/home/contactForm';

/**
 * Componente principal de la página de inicio.
 *
 * Este componente agrupa varios componentes secundarios, incluyendo 
 * el hero, los objetivos, las ofertas y el formulario de contacto.
 *
 * @function Home el nombre de la función es Home
 * @returns {JSX.Element} Un elemento JSX que representa la estructura principal de la página de inicio.
 */

export default function Home() {
    return (
        <main>
            <Hero />
            <Objective />
            <Offer />
            <ContactForm />
        </main>
    )
}