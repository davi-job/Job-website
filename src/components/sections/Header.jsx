import { Link } from "react-router-dom";
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
							<Link
								className="header-nav-link"
								to={"/"}
								onClick={() => {
									setPageIndex(0);
								}}
							>
								Home
							</Link>
						</li>

						<li
							className={`header-nav-item ${
								pageIndex === 1 ? "selected" : ""
							}`}
						>
							<Link
								className="header-nav-link"
								to={"/produtos"}
								onClick={() => {
									setPageIndex(1);
								}}
							>
								Uniformes
							</Link>
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
							<Link
								className="header-nav-link"
								to={"/medidas"}
								onClick={() => {
									setPageIndex(3);
								}}
							>
								Medidas
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
