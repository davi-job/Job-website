import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import CtaBtn from "../CTA-Btn";

function Footer({ className }) {
	const currentYear = new Date().getFullYear();

	const location = useLocation();

	return (
		<footer className={className ? `footer ${className}` : "footer"}>
			<div className="footer-main-container flex">
				<div className="footer-logo-nav-box">
					<Link to={"/"} className="footer-logo-logo-link">
						<img
							src="\images\job-logo.webp"
							alt="Logo"
							className="footer-logo"
						/>
					</Link>

					<nav className="footer-nav">
						<ul className="footer-nav-list flex">
							<li
								className={`footer-nav-item ${
									location.pathname === "/" ? "selected" : ""
								}`}
							>
								<Link className="footer-nav-link" to={"/"}>
									Home
								</Link>
							</li>

							<li
								className={`footer-nav-item ${
									location.pathname === "/uniformes"
										? "selected"
										: ""
								}`}
							>
								<Link
									className="footer-nav-link"
									to={"/uniformes"}
								>
									Uniformes
								</Link>
							</li>

							<li className="footer-nav-item">
								<a
									className="footer-nav-link"
									target="_blank"
									href="https://workwear.cedro.com.br/blog/"
								>
									Blog
								</a>
							</li>

							<li
								className={`footer-nav-item ${
									location.pathname === "/medidas"
										? "selected"
										: ""
								}`}
							>
								<Link
									className="footer-nav-link"
									to={"/medidas"}
								>
									Medidas
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<CtaBtn className="footer-cta-btn">Faça seu orçamento</CtaBtn>
			</div>

			<div className="footer-bottom-container flex">
				<div className="footer-socials">
					<ul className="footer-social-list flex">
						<li className="footer-social-item">
							<a
								href="https://pt-br.facebook.com/jobroupasprofissionais/"
								target="_blank"
								className="footer-social-link"
							>
								<ion-icon
									class="footer-social-icon"
									name="logo-facebook"
								></ion-icon>
							</a>
						</li>

						<li className="footer-social-item">
							<a
								href="https://www.instagram.com/jobroupasprofissionais/"
								target="_blank"
								className="footer-social-link"
							>
								<ion-icon
									class="footer-social-icon"
									name="logo-instagram"
								></ion-icon>
							</a>
						</li>

						<li className="footer-social-item">
							<a
								href="https://br.linkedin.com/company/job-roupas-profissionais"
								target="_blank"
								className="footer-social-link"
							>
								<ion-icon
									class="footer-social-icon"
									name="logo-linkedin"
								></ion-icon>
							</a>
						</li>
					</ul>
				</div>

				<p className="footer-copy">
					© {`${currentYear}`} - Todos os direitos reservados a Job
					Roupas Profissionais LTDA
				</p>
			</div>
		</footer>
	);
}

export default Footer;
