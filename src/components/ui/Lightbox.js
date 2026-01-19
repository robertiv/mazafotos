import React, { useEffect } from "react";

export default function Lightbox({ isOpen, image, onClose }) {
	useEffect(() => {
		if (!isOpen) return;

		// Bloquear scroll
		document.body.style.overflow = "hidden";

		// Cerrar con ESC
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};

		window.addEventListener("keydown", handleKeyDown);

		window.addEventListener("click", (e) => {
            const lightbox = document.getElementById('lightbox');
			if (e.target === lightbox) {
				onClose();
			}
		});

		// Cleanup
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	return (
		<div className={`lightbox ${isOpen && "active"}`} id="lightbox">
			<button
				className="lightbox-close"
				id="lightboxClose"
				aria-label="Cerrar"
				onClick={onClose}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<img
				src={image}
				alt="Imagen ampliada"
				className="lightbox-image"
				id="lightboxImage"
			/>
		</div>
	);
}
