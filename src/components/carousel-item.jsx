/**
 * Componente que representa un elemento individual en un carrusel.
 * @component CarouselItem
 * @param {Object} props - Las propiedades del componente.
 * @param {number} props.position - La posición del elemento en el carrusel.
 * @param {string} props.url - La URL de la imagen a mostrar.
 * @param {string} props.name - El nombre de la persona representada.
 * @param {string} props.role - El rol o título de la persona.
 * @param {string} props.description - Una descripción breve sobre la persona.
 * 
 * @returns {JSX.Element} El elemento del carrusel que incluye una imagen, nombre, rol y descripción.
 */

export default function CarouselItem(props) {
    const { position, url, name, role, description,email} = props;

    return (    
        <div className="carousel__item text-center">
            <div>
                <figure className="carousel__item__image">
                    <img src={url} alt={`Foto de ${name}`} className="image image--cover" />
                </figure>
                <h4 className="text-xl">{name}</h4>
                <p>{role}</p>
            </div>
            <div className="carousel__card text--black">
                <p>{description}</p>
                <a href={`mailto:${email}`}>
                    <button>Contacto</button>
                </a>
            </div>
        </div>
    );
}