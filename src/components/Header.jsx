function Header() {
	const headerNavLinks = document.querySelectorAll(".header-nav-link");

	/////////////////////////////////////////////////////////////////////////////////////////////////

	return (
		<header className="header">
			<div className="header-main-container-wrapper">
				<div className="header-main-container container flex">
					<div className="header-logo-box">
						<button className="header-logo-btn" href="#">
							<img
								className="header-logo-img"
								src="../public/job-logo.png"
								alt="job uniformes logo"
							/>
						</button>
					</div>

					<button className="header-cta-btn">
						Faça seu orçamento!
					</button>
				</div>
			</div>

			<div className="header-nav-container container flex">
				<nav className="header-nav">
					<ul className="header-nav-list flex">
						<li className="header-nav-item">
							<a
								className="header-nav-link"
								href="#"
								onClick={(event) => {
									headerNavLinks.forEach((link) => {
										link.parentElement.classList.remove(
											"selected"
										);
									});

									event.currentTarget.parentElement.classList.add(
										"selected"
									);
								}}
							>
								Home
							</a>
						</li>
						<li className="header-nav-item">
							<a
								className="header-nav-link"
								href="#"
								onClick={(event) => {
									headerNavLinks.forEach((link) => {
										link.parentElement.classList.remove(
											"selected"
										);
									});

									event.currentTarget.parentElement.classList.add(
										"selected"
									);
								}}
							>
								Uniformes
							</a>
						</li>
						<li className="header-nav-item">
							<a
								className="header-nav-link"
								href="#"
								onClick={(event) => {
									headerNavLinks.forEach((link) => {
										link.parentElement.classList.remove(
											"selected"
										);
									});

									event.currentTarget.parentElement.classList.add(
										"selected"
									);
								}}
							>
								Contato
							</a>
						</li>
						<li className="header-nav-item">
							<a
								className="header-nav-link"
								href="#"
								onClick={(event) => {
									headerNavLinks.forEach((link) => {
										link.parentElement.classList.remove(
											"selected"
										);
									});

									event.currentTarget.parentElement.classList.add(
										"selected"
									);
								}}
							>
								Quem somos
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
