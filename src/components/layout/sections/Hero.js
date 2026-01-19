import React from "react";
import MasonryImg from "../../ui/MasonryImg";

export default function Hero({ onImageClick }) {
	const imagesContext = require.context(
		"../../../assets/images/portfolio/",
		false,
		/\.(png|jpe?g|svg)$/,
	);
	const imageList = imagesContext.keys().map(imagesContext);

	const getHeight = () => {
		const posiblesHeight = ["150", "300", "200", "250"];
		const indiceAleatorio = Math.floor(
			Math.random() * posiblesHeight.length,
		);
		return posiblesHeight[indiceAleatorio];
	};

	const shuffleArray = (array) => {
		let shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	return (
		<>
			<section className="hero" id="portfolio">
				<div className="masonry-grid">
					{shuffleArray(imageList).map((image, index) => (
						<MasonryImg
							height={getHeight()}
							directory={image}
							index={index}
							key={index}
							onClick={onImageClick}
						/>
					))}
				</div>
			</section>
		</>
	);
}
