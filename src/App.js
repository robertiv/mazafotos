import { useState } from "react";
import Header from "./components/layout/header/Header";
import Hero from "./components/layout/sections/Hero";
import About from "./components/layout/sections/About";
import Proyectos from "./components/layout/sections/Proyectos";
import Servicios from "./components/layout/sections/Servicios";
import Contacto from "./components/layout/sections/Contacto";
import Footer from "./components/layout/footer/Footer";
import Lightbox from "./components/ui/Lightbox";

function App() {
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [activeImage, setActiveImage] = useState(null);

	const openLightbox = (image) => {
		setActiveImage(image);
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => {
		setIsLightboxOpen(false);
		setActiveImage(null);
	};

	return (
		<>
			<Header />
			<Hero onImageClick={openLightbox} />
			<About />
			<Proyectos />
			<Servicios />
			<Contacto />
			<Footer />
			<Lightbox
				isOpen={isLightboxOpen}
				image={activeImage}
				onClose={closeLightbox}
			/>
		</>
	);
}

export default App;
