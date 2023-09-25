import PrimaryBtn from "../Primary-Btn";
import SecondaryBtn from "../secondary-Btn";

function HeroSection() {
	return (
		<div className="hero-section">
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
						<PrimaryBtn>Faça seu orçamento</PrimaryBtn>
						<SecondaryBtn>Saiba mais</SecondaryBtn>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
