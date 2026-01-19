import React from 'react'
import about from '../../../assets/images/about.jpg'

export default function About() {
  return (
    <>
      <section className="about" id="sobre-mi">
			<div className="about-container">
				<div className="about-image">
					<div className="about-image-accent"></div>
					<img src={about} alt="Johan Maza trabajando" />
				</div>

				<div className="about-content">
					<span className="section-label">Sobre Mi</span>
					<h2 className="section-title">
						Más de una década capturando historias
					</h2>
					<p className="about-text">
						Soy Johan Maza, un fotógrafo apasionado con más de 10
						años de experiencia capturando los momentos más
						significativos de la vida. Mi enfoque combina técnica
						profesional con una visión artística única que busca
						revelar la belleza en cada instante.
					</p>
					<p className="about-text">
						Desde bodas íntimas hasta grandes eventos corporativos,
						cada proyecto es una oportunidad para contar una
						historia visual que perdure en el tiempo. Mi compromiso
						es ofrecer un trabajo de excelencia que supere las
						expectativas.
					</p>

					<div className="about-stats">
						<div className="stat">
							<div className="stat-number">10+</div>
							<div className="stat-label">Años de experiencia</div>
						</div>
						<div className="stat">
							<div className="stat-number">150+</div>
							<div className="stat-label">Proyectos completados</div>
						</div>
						<div className="stat">
							<div className="stat-number">50+</div>
							<div className="stat-label">Clientes satisfechos</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}
