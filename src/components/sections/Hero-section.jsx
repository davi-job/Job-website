import CtaBtn from "../CTA-Btn";
import SecondaryBtn from "../Secondary-Btn";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroSection({ summaryRef }) {
	function scrollToRef(elementRef) {
		window.scrollTo({
			top: elementRef.current.offsetTop - 120,
			behavior: "smooth",
		});
	}

	return (
		<section className="hero-section">
			<div>
				<Carousel
					className="hero-carousel"
					swipeable={true}
					emulateTouch={true}
					showArrows={false}
					showStatus={false}
					showThumbs={false}
					autoPlay={true}
					interval={5000}
					infiniteLoop={true}
					stopOnHover={false}
				>
					<div>
						<img
							className="carousel-img"
							src="/images/Hero/hero-3.jpg"
							alt="homem em roupa reflexiva amarela usando capacete branco"
						/>
					</div>

					<div>
						<img
							className="carousel-img"
							src="/images/Hero/hero-2.jpg"
							alt="interior de um hospital com médicos, enfermeiras e pacientes presentes"
						/>
					</div>

					<div>
						<img
							className="carousel-img"
							src="/images/Hero/hero-1.jpg"
							alt="engenheiro elétrico em uniforme de trabalho e um capacete laranja falando em um rádio"
						/>
					</div>
				</Carousel>
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
