import "../styles/tests.css";

import CtaBtn from "../components/CTA-Btn";
import SecondaryBtn from "../components/Secondary-Btn";

function AlternativeHero({ className, summaryRef }) {
	// This function is used to scroll to the reffered section
	function scrollToRef(elementRef) {
		window.scrollTo({
			top: elementRef.current.offsetTop - 120,
			behavior: "smooth",
		});
	}

	return (
		<section
			className={`alt-hero-section  + ${className ? className : ""}`}
		>
			<div className="alt-hero-container container">
				<div className="alt-hero-text-box flex">
					<h1 className="alt-hero-title">
						Uniformes profissionais de alta qualidade
					</h1>

					<p className="alt-hero-description">
						Encontre os melhores uniformes profissionais aqui na
						Job. Nossas roupas de alta qualidade são projetadas para
						profissionais exigentes, oferecendo conforto e estilo
						incomparáveis. Descubra nossos produtos agora.
					</p>

					<div className="hero-btns flex">
						<CtaBtn>Faça seu orçamento</CtaBtn>

						<SecondaryBtn
							className="alt-hero-secondary-btn"
							onClick={() => scrollToRef(summaryRef)}
						>
							Saiba mais
						</SecondaryBtn>
					</div>
				</div>

				<img
					src="/src/images/Hero/hero-bg-1.jpg"
					alt="Hero background"
					className="alt-hero-img"
				/>

				<img
					src="/src/images/Hero/hero-bg-2.jpg"
					alt="Hero background"
					className="alt-hero-img"
				/>

				<img
					src="/src/images/Hero/hero-bg-3.jpg"
					alt="Hero background"
					className="alt-hero-img"
				/>

				<img
					src="/src/images/Hero/hero-bg-4.jpg"
					alt="Hero background"
					className="alt-hero-img"
				/>

				<div className="alt-hero-deco-box n1" />
				<div className="alt-hero-deco-box n2" />
				<div className="alt-hero-deco-box n3" />
			</div>
		</section>
	);
}
export default AlternativeHero;
