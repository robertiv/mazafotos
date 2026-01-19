import React from "react";

export default function ProyectCard( {tipo, nombre, desc, foto} ) {
	return (
		<article className="project-card">
			<div className="project-image">
				<img src={foto} alt={nombre} />
			</div>
			<div className="project-content">
				<span className="project-category">{tipo}</span>
				<h3 className="project-title">{nombre}</h3>
				<p className="project-description">
					{desc}
				</p>
			</div>
		</article>
	);
}
