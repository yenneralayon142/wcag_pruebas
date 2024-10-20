import React from 'react'
/**
 * Componente que representa una tarjeta de información.
 *
 * @component Infocard
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.title - El título de la tarjeta.
 * @param {string} props.text - El texto descriptivo de la tarjeta.
 * @param {string} [props.color="blue"] - El color de fondo de la tarjeta (opcional, por defecto "blue").
 * 
 * @returns {JSX.Element} La tarjeta de información que incluye un título y un texto descriptivo.
 */
export default function InfoCard(props) {
    const { title, text, color = "blue" } = props;
    return (
        <article className={`infocard ${color == 'green' && 'infocard--green'}`}>
            <div className="infocard__title bg--blue">
                <h3 className='text--white text-3xl text-center font-bold'> {title} </h3>
            </div>
            <div className='infocard__text'>
                <p className='text-lg'>{text}</p>
            </div>
        </article>
    )
}
