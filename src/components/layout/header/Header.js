import { useState } from "react";
import logoblack from "../../../assets/images/logob.png";
import HamburgerMenu from "../../ui/HamburguerMenu";

export default function Header() {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<header className="header">
				<div className="header-container">
					<a href="#portfolio" className="logo">
						<img src={logoblack} alt="Logo" className="logo-img" />
						<span className="logo-text">MAZAFOTOS</span>
					</a>

					<button className={`menu-toggle ${open && "active"}`} onClick={handleClick}>
						<span></span>
						<span></span>
						<span></span>
					</button>

					<HamburgerMenu open={open} setOpen={setOpen} />
				</div>
			</header>
		</>
	);
}
