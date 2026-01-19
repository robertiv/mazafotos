import React, { useState } from "react";

export default function HamburgerMenu({ open, setOpen }) {
	const [ active, setActive ] = useState("portfolio");

	const handleClick = (navLink) => {
		setOpen(!open);
		setActive(navLink);
	};

	return (
		<>
			<nav className={`nav ${open && "active"}`} >
				<a
					href="#portfolio"
					className={`nav-link  ${active === "portfolio" && "active"}`}
					onClick={() => { handleClick("portfolio")} }
				>
					Portfolio
				</a>
				<a
					href="#proyectos"
					className={`nav-link ${active === "proyectos" && "active"}`}
					onClick={() => { handleClick("proyectos")} }
				>
					Proyectos
				</a>
				<a
					href="#sobre-mi"
					className={`nav-link ${active === "about" && "active"}`}
					onClick={() => { handleClick("about")} }
				>
					Sobre Mi
				</a>
				<a
					href="#contacto"
					className={`nav-link ${active === "contacto" && "active"}`}
					onClick={() => { handleClick("contacto")} }
				>
					Contacto
				</a>
			</nav>
		</>
	);
}
