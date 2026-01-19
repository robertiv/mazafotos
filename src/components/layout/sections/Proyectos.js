import React from "react";
import ProyectCard from "../../ui/ProyectCard";
import Wedding from "../../../assets/images/wedding.jpg";
import Evento from "../../../assets/images/evento.jpeg";
import Moda from "../../../assets/images/moda.jpg";

export default function Proyectos() {
	return (
		<section className="projects" id="proyectos">
			<div className="projects-container">
				<div className="projects-header">
					<span className="section-label">Proyectos Destacados</span>
					<h2 className="section-title">Trabajos Recientes</h2>
				</div>

				<div className="projects-grid">
					<ProyectCard
						tipo="Boda"
						nombre="Boda en Playa del Carmen"
						desc="Una celebración íntima junto al mar con una
								atmósfera romántica y elegante."
						foto={Wedding}
					/>

					<ProyectCard
						tipo="Corporativo"
						nombre="Conferencia Tech Summit"
						desc="Cobertura completa del evento tecnológico más
								importante del año."
						foto={Evento}
					/>

					<ProyectCard
						tipo="Corporativo"
						nombre="Editorial Vogue México"
						desc="Sesión editorial para la edición primavera de la
								prestigiosa revista.Cobertura completa del evento tecnológico más
								importante del año."
						foto={Moda}
					/>
				</div>
			</div>
		</section>
	);
}
