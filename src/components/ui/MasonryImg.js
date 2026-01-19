import React from "react";

export default function MasonryImg({ height, directory, index, onClick }) {
	

	return (
		<div className={`masonry-item h-${height}`} onClick={() => onClick(directory)}>
			<img key={index} src={directory} alt={`StudioCactus Portfolio ${index + 1}`} />
		</div>
	);
}
