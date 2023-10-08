import { Link } from "react-router-dom";
import CtaBtn from "../CTA-Btn";
import { useLocation } from "react-router-dom";

function Header() {
	const location = useLocation();

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
								location.pathname === "/" ? "selected" : ""
							}`}
						>
							<Link className="header-nav-link" to={"/"}>
								Home
							</Link>
						</li>

						<li
							className={`header-nav-item ${
								location.pathname === "/uniformes"
									? "selected"
									: ""
							}`}
						>
							<Link className="header-nav-link" to={"/uniformes"}>
								Uniformes
							</Link>
						</li>

						<li className="header-nav-item">
							<a
								className="header-nav-link"
								target="_blank"
								href="https://workwear.cedro.com.br/blog/"
							>
								Blog Cedro
							</a>
						</li>

						<li
							className={`header-nav-item ${
								location.pathname === "/medidas"
									? "selected"
									: ""
							}`}
						>
							<Link className="header-nav-link" to={"/medidas"}>
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
