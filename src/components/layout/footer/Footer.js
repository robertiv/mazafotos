import React from "react";
import Logo from '../../../assets/images/logo.png'
export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-main">
					<div className="footer-brand">
						<div className="footer-logo">
							<img
								src={Logo}
								alt="Logo"
								className="footer-logo-img"
							/>
							<span className="footer-logo-text">Johan Maza</span>
						</div>
						<p className="footer-description">
							Fotógrafo profesional dedicado a capturar los
							momentos más importantes de tu vida con un enfoque
							artístico y emotivo.
						</p>
						<div className="social-links">
							<a
								href="https://instagram.com/mazafotos"
								className="social-link"
								aria-label="Instagram"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
							<a
								href="https://facebook.com"
								className="social-link"
								aria-label="Facebook"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
								</svg>
							</a>
							<a
								href="https://x.com"
								className="social-link"
								aria-label="Twitter"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.244H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
							<a
								href="https://pinterest.com"
								className="social-link"
								aria-label="Pinterest"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
								</svg>
							</a>
						</div>
					</div>

					<div className="footer-column">
						<h4>Mapa del Sitio</h4>
						<ul className="footer-links">
							<li>
								<a href="#portfolio" className="footer-link">
									Portfolio
								</a>
							</li>
							<li>
								<a href="#proyectos" className="footer-link">
									Proyectos
								</a>
							</li>
							<li>
								<a href="#sobre-mi" className="footer-link">
									Sobre Mi
								</a>
							</li>
							<li>
								<a href="#contacto" className="footer-link">
									Contacto
								</a>
							</li>
						</ul>
					</div>

					<div className="footer-column">
						<h4>Servicios</h4>
						<ul className="footer-links">
							<li>
								<a href="#contacto" className="footer-link">
									Retratos
								</a>
							</li>
							<li>
								<a href="#contacto" className="footer-link">
									Bodas
								</a>
							</li>
							<li>
								<a href="#contacto" className="footer-link">
									Corporativo
								</a>
							</li>
							<li>
								<a href="#contacto" className="footer-link">
									Eventos
								</a>
							</li>
						</ul>
					</div>

					<div className="footer-column">
						<h4>Legal</h4>
						<ul className="footer-links">
							<li>
								<a href="#policy" className="footer-link">
									Política de Privacidad
								</a>
							</li>
							<li>
								<a href="#terms" className="footer-link">
									Términos de Servicio
								</a>
							</li>
							<li>
								<a href="#cookies" className="footer-link">
									Cookies
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="footer-bottom">
					<p className="footer-copyright">
						© 2026 Mazafotos. Todos los derechos reservados.
					</p>
					<p className="footer-credits">
						Diseñado y desarrollado por <a href="https://linkedin.com/in/victor-roberti-103304239">V. Roberti</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
