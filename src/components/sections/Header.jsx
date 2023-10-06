import CtaBtn from "../CTA-Btn";
import { useState } from "react";

function Header() {
	const [pageIndex, setPageIndex] = useState(0);

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
						<li
							className={`header-nav-item ${
								pageIndex === 0 ? "selected" : ""
							}`}
						>
							<button
								className="header-nav-link"
								onClick={() => {
									setPageIndex(0);
								}}
							>
								Home
							</button>
						</li>

						<li
							className={`header-nav-item ${
								pageIndex === 1 ? "selected" : ""
							}`}
						>
							<button
								className="header-nav-link"
								onClick={() => {
									setPageIndex(1);
								}}
							>
								Uniformes
							</button>
						</li>

						<li className="header-nav-item">
							<a
								className="header-nav-link"
								target="_blank"
								href="https://workwear.cedro.com.br/blog/"
								onClick={() => {}}
							>
								Blog Cedro
							</a>
						</li>

						<li
							className={`header-nav-item ${
								pageIndex === 3 ? "selected" : ""
							}`}
						>
							<button
								className="header-nav-link"
								onClick={() => {
									setPageIndex(3);
								}}
							>
								Medidas
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
