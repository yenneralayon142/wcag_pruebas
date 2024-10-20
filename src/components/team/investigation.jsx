import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";
import { investigationTeam } from "./team";

/**
 * Componente que representa la sección del equipo de investigación de la aplicación.
 *
 * Este componente muestra una lista de investigadores, presentando sus nombres,
 * roles y descripciones a través de un carrusel. Está diseñado para destacar
 * al equipo involucrado en la investigación y el desarrollo de soluciones inclusivas.
 *
 * @component Investigation
 * @returns {JSX.Element} Elemento JSX que representa la sección del equipo de investigación.
 */

export default function Investigation() {
    return (
        <section>
            <div className="container carousel carousel--green">
                <h2 className="text-2xl text--green text-center">Equipo de investigación</h2>
                <ScrollView
                    style={{
                        width: '100%',
                        height: 500,
                    }}
                    pageable={false}
                    endless={true}
                >
                    {investigationTeam.map((item, index) => {
                        return (
                            <CarouselItem
                                key={item.position}
                                position={item.position}
                                url={item.url}
                                name={item.name}
                                role={item.role}
                                description={item.description}
                                email={item.email}
                            />
                        );
                    })}
                </ScrollView>
            </div>
        </section>
    );
}
