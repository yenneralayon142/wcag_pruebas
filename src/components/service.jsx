/**
 * Componente que representa un servicio ofrecido.
 *
 * @component Service
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.image - La URL de la imagen que representa el servicio.
 * @param {string} props.title - El título del servicio.
 * @param {string} props.text - Una breve descripción del servicio.
 * 
 * @returns {JSX.Element} El servicio que incluye un ícono, un título y una descripción.
 */
export default function Service(props) {
    const { image, title, text } = props;

    return (
        <article className="service">
            <figure className="service__icon">
                <img src={image} alt="Imagen de servicio" className="image" />
            </figure>
            <div>
                <h3 className="text-2xl text--green">{title}</h3>
                <p className="text-sm">{text}</p>
            </div>
        </article>
    );    
}