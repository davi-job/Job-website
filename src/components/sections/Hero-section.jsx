import CtaBtn from "../CTA-Btn";
import LazyImg from "../Lazy-Img";
import SecondaryBtn from "../Secondary-Btn";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroSection({ summaryRef }) {
	function scrollToRef(elementRef) {
		let remValue = parseFloat(
			getComputedStyle(document.documentElement).fontSize
		);

		window.scrollTo({
			top: elementRef.current.offsetTop - 12 * remValue,
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
						<LazyImg
							className="carousel-img"
							src="/images/Hero/hero-1.webp"
							alt="homem em roupa reflexiva amarela usando capacete branco"
							hasSmall={true}
						/>
					</div>

					<div>
						<LazyImg
							className="carousel-img"
							src="/images/Hero/hero-2.webp"
							alt="interior de um hospital com médicos, enfermeiras e pacientes presentes"
							hasSmall={true}
						/>
					</div>

					<div>
						<LazyImg
							className="carousel-img"
							src="/images/Hero/hero-3.webp"
							alt="engenheiro elétrico em uniforme de trabalho e um capacete laranja falando em um rádio"
							hasSmall={true}
						/>
					</div>
				</Carousel>
			</div>

			<div className="hero-section-container container">
				<div className="hero-section-content">
					<h1>Uniformes profissionais de alta qualidade</h1>

					<p>
						A Job Uniformes oferece uniformes profissionais
						personalizados de alta qualidade, projetados
						especificamente para atender às necessidades únicas de
						cada empresa. Com uma ampla gama de opções de
						personalização e designs exclusivos, nossos uniformes
						são a escolha ideal para empresas que buscam qualidade e
						segurança.
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
