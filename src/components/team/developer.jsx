import { ScrollView } from "@progress/kendo-react-scrollview";
import CarouselItem from "../carousel-item";
import { developerTeam } from "./team";

/**
 * Componente que representa el equipo de desarrollo de software.
 *
 * Este componente muestra un título y un carrusel que despliega información
 * sobre los miembros del equipo de desarrollo. Utiliza el componente `ScrollView`
 * para permitir una visualización deslizante de los elementos del equipo.
 *
 * @component Developer
 * @returns {JSX.Element} Elemento JSX que representa la sección del equipo de desarrollo de software.
 */
export default function Developer() {
    
    return (
        <section>
            <div className="container carousel">
                <h2 className="text-2xl text--blue text-center">Equipo de desarrollo de software</h2>
                <ScrollView
                    style={{
                        width: '100%',
                        height: 500,
                    }}
                    pageable={false}
                    endless={true}
                >
                    {developerTeam.map((item, index) => {
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
