import React from "react";
import ServiceCard from "../../ui/ServiceCard";
import CamaraIcon from '../../../assets/svg/camara.svg';
import CorazonIcon from '../../../assets/svg/corazon.svg';
import MaletinIcon from '../../../assets/svg/maletin.svg';
import EstrellasIcon from '../../../assets/svg/estrellas.svg';

export default function Servicios() {
	
	return (
		<section className="services">
			<div className="services-container">
				<div className="services-header">
					<span className="section-label">Servicios</span>
					<h2 className="section-title">Lo que ofrezco</h2>
				</div>

				<div className="services-grid">
					<ServiceCard
						nombre="Retratos"
						desc="Sesiones personalizadas que capturan tu esencia y personalidad única."
						icon={CamaraIcon}
					/>
					<ServiceCard
						nombre="Bodas"
						desc="Documentación completa de tu día especial con un
							enfoque emotivo y artístico."
						icon={CorazonIcon}
					/>
					<ServiceCard
						nombre="Corporativo"
						desc="Fotografía profesional para empresas, eventos y comunicación corporativa."
						icon={MaletinIcon}
					/>
					<ServiceCard
						nombre="Eventos"
						desc="Cobertura integral de eventos sociales, fiestas y celebraciones especiales."
						icon={EstrellasIcon}
					/>					
				</div>
			</div>
		</section>
	);
}
