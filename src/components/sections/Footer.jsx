import CtaBtn from "../CTA-Btn";

function Footer({ className }) {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={className ? `footer ${className}` : "footer"}>
			<div className="footer-main-container flex">
				<div className="footer-logo-nav-box">
					<img
						src="src\images\job-logo.png"
						alt="Logo"
						className="footer-logo"
					/>

					<nav className="footer-nav">
						<ul className="footer-nav-list flex">
							<li className="footer-nav-item">
								<a href="#" className="footer-nav-link">
									Home
								</a>
							</li>
							<li className="footer-nav-item">
								<a href="#" className="footer-nav-link">
									Sobre
								</a>
							</li>
							<li className="footer-nav-item">
								<a href="#" className="footer-nav-link">
									Serviços
								</a>
							</li>
							<li className="footer-nav-item">
								<a href="#" className="footer-nav-link">
									Contato
								</a>
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
							<a href="#" className="footer-social-link">
								<ion-icon
									class="footer-social-icon"
									name="logo-facebook"
								></ion-icon>
							</a>
						</li>
						<li className="footer-social-item">
							<a href="#" className="footer-social-link">
								<ion-icon
									class="footer-social-icon"
									name="logo-instagram"
								></ion-icon>
							</a>
						</li>
						<li className="footer-social-item">
							<a href="#" className="footer-social-link">
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
