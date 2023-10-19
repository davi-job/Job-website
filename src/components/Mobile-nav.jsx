import { Link } from "react-router-dom";

import CtaBtn from "./CTA-Btn.jsx";

function MobileNav({ className }) {
	return (
		<div className={`mobile-nav ${className ? className : ""}`}>
			<nav className="header-mobile-nav">
				<ul className="header-mobile-nav-list flex">
					<li
						className={`header-mobile-nav-item ${
							location.pathname === "/" ? "selected" : ""
						}`}
					>
						<Link className="header-mobile-nav-link" to={"/"}>
							Home
						</Link>
					</li>

					<li
						className={`header-mobile-nav-item ${
							location.pathname === "/uniformes" ? "selected" : ""
						}`}
					>
						<Link
							className="header-mobile-nav-link"
							to={"/uniformes"}
						>
							Uniformes
						</Link>
					</li>

					<li className="header-mobile-nav-item">
						<a
							className="header-mobile-nav-link"
							target="_blank"
							href="https://workwear.cedro.com.br/blog/"
						>
							Blog Cedro
						</a>
					</li>

					<li
						className={`header-mobile-nav-item ${
							location.pathname === "/medidas" ? "selected" : ""
						}`}
					>
						<Link
							className="header-mobile-nav-link"
							to={"/medidas"}
						>
							Medidas
						</Link>
					</li>

					<li
						className={`header-mobile-nav-item ${
							location.pathname === "/medidas" ? "selected" : ""
						}`}
					>
						<CtaBtn className="mobile-nav-cta">
							Faça seu orçamento
						</CtaBtn>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default MobileNav;
