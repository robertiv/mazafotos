import React from "react";

export default function ServiceCard({ nombre, desc, icon }) {
	return (
		<div className="service-card">
			<div className="service-icon">
				<img src={icon} alt="Service Icon" width="28" height="28"/>
			</div>
			<h3 className="service-title">{nombre}</h3>
			<p className="service-description">
				{desc}
			</p>
		</div>
	);
}
