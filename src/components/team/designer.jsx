import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";
import { designerTeam } from "./team";

/**
 * Componente que representa el equipo de diseño.
 *
 * Este componente muestra un título y un carrusel que despliega información
 * sobre los miembros del equipo de diseño. Utiliza el componente `ScrollView`
 * para permitir una visualización deslizante de los elementos del equipo.
 *
 * @component Designer
 * @returns {JSX.Element} Elemento JSX que representa la sección del equipo de diseño.
 */
export default function Designer() {
    return (
        <section>
            <div className="container carousel carousel--blue">
                <h2 className="text-2xl text--green text-center">Equipo de diseño</h2>
                <ScrollView
                    style={{
                        width: '100%',
                        height: 500,
                    }}
                    pageable={false}
                    endless={true}
                >
                    {designerTeam.map((item, index) => {
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
