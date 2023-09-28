import CtaBtn from "../CTA-Btn";

function navHandleClick(event) {
	document.querySelectorAll(".header-nav-link").forEach((link) => {
		link.parentElement.classList.remove("selected");
	});

	event.currentTarget.parentElement.classList.add("selected");
}

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
								src="src/images/job-logo.png"
								alt="job uniformes logo"
							/>
						</button>
					</div>

					<CtaBtn>Faça seu orçamento</CtaBtn>
				</div>
			</div>

			<div className="header-nav-container container flex">
				<nav className="header-nav">
					<ul className="header-nav-list flex">
						<li className="header-nav-item selected">
							<a
								className="header-nav-link"
								href="#"
								onClick={(event) => {
									navHandleClick(event);
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
									navHandleClick(event);
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
									navHandleClick(event);
								}}
							>
								Quem somos
							</a>
						</li>

						<li className="header-nav-item">
							<a
								className="header-nav-link"
								href="#"
								onClick={(event) => {
									navHandleClick(event);
								}}
							>
								Medidas
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
