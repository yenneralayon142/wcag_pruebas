/**
 * Componente que representa el objetivo de la pagina.
 *
 * @component Principle
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.image - La URL de la imagen que representa el principio.
 * @param {string} props.title - El título del principio.
 * 
 * @returns {JSX.Element} El principio que incluye una imagen y un título.
 */
export default function Principle(props) {
    const { image, title } = props;
    return(
        <article className="principles__card">
            <figure className="principles__card__image">
                <img src={image} alt="Imagen principio" className="image" />
            </figure>   
            <h2 className="text-2xl text--green">{title}</h2>
        </article>        
    );
}