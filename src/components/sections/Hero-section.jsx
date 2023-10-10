import CtaBtn from "../CTA-Btn";
import LazyImg from "../Lazy-Img";
import SecondaryBtn from "../Secondary-Btn";

function HeroSection({ summaryRef }) {
	function scrollToRef(elementRef) {
		window.scrollTo({
			top: elementRef.current.offsetTop - 120,
			behavior: "smooth",
		});
	}

	return (
		<section className="hero-section">
			<div className="hero-section-bg">
				<LazyImg
					src="src/images/hero-bg.jpg"
					alt="Hero background"
					className="hero-bg-img"
					hasSmall={true}
					smallFileType=".jpg"
				/>
			</div>

			<div className="hero-section-container container">
				<div className="hero-section-content">
					<h1>Uniformes profissionais de alta qualidade</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Id diam maecenas ultricies mi eget. Vitae
						nunc sed velit dignissim sodales ut eu sem integer. Arcu
						cursus vitae congue mauris rhoncus aenean vel elit.
					</p>

					<div className="hero-btns flex">
						<CtaBtn>Faça seu orçamento</CtaBtn>
						<SecondaryBtn onClick={() => scrollToRef(summaryRef)}>
							Saiba mais
						</SecondaryBtn>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
