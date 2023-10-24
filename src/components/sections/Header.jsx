import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CtaBtn from "../CTA-Btn";
import MobileNav from "../Mobile-nav";
import MobileNavBtn from "../Mobile-nav-btn";

function Header() {
	const location = useLocation();
	const [mobileNavActive, setMobileNavActive] = useState(false);

	function toggleMobileNav(event) {
		if (event.target.checked) {
			setMobileNavActive(true);
		} else {
			setMobileNavActive(false);
		}
	}

	useEffect(() => {
		setMobileNavActive(false);
	}, [location]);

	return (
		<header className="header">
			<div className="header-main-container-wrapper">
				<div className="header-main-container container flex">
					<div className="header-logo-box">
						<Link className="header-logo-btn" to={"/"}>
							<img
								className="header-logo-img"
								src="/images/job-logo.webp"
								alt="job uniformes logo"
							/>
						</Link>
					</div>

					<MobileNavBtn onClickFunc={toggleMobileNav} />

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
								Blog
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

			<MobileNav className={mobileNavActive ? "active" : ""} />
		</header>
	);
}

export default Header;
