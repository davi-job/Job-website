import { useState } from "react";
import CTABtn from "../CTA-Btn.jsx";

const products = [
	{
		title: "Uniforme Hospitalar",
		imageUrl: "https://source.unsplash.com/random/1600x900",
		description:
			"Os uniformes hospitalares são indicados para clínicas, hospitais, laboratórios e unidades de saúde, confeccionado  com tecidos profissionais técnicos e modernos,  com alto padrão de qualidade e resistência.",
	},
	{
		title: "Uniforme Social",
		imageUrl: "https://source.unsplash.com/random/1600x900",
		description:
			"Confeccionados com qualidade e tecnologia, os uniformes sociais são indicados para áreas administrativas, recepção, segurança, limpeza e serviços diversos.",
	},
	{
		title: "Uniforme Antichama (FR)",
		imageUrl: "https://source.unsplash.com/random/1600x900",
		description:
			"Os uniformes retardantes a chama (FR), são indicados para profissionais que trabalham expostos em áreas de risco de fogo repentino e arco elétrico, com tecidos especialmente desenvolvidos com alta tecnologia, além de passar por um rigoroso teste de aprovação, oferecendo mais segurança e proteção no ambiente de trabalho.",
	},
	{
		title: "Uniforme Profissional",
		imageUrl: "https://source.unsplash.com/random/1600x900",
		description:
			"Confeccionados com qualidade e tecnologia, os uniformes profissionais são indicados para serviços, transporte e logística, construção civil e indústrias em geral. Esse tipo de uniforme tem uma maior resistência em seus tecidos, que foram especialmente desenvolvidos para suportar cargas de trabalho, maior resistência a rasgo e com proteção UVA/UVB.",
	},
	{
		title: "Uniforme de Malha",
		imageUrl: "https://source.unsplash.com/random/1600x900",
		description:
			"As camisas confeccionadas em malha PV, DRY, DRY FIT, PP e PIQUET. Esse tipo de fardamento é bastante usado em praticamente todos os postos de trabalho por sua versatilidade e conforto, trazendo um aspecto mais leve e simples ao ambiente de trabalho. Esse tipo de produto  também é utilizado para realização de eventos e campanhas de marketing",
	},
];

function ProductsShowcaseSection({ className }) {
	const [productIndex, setProductIndex] = useState(0);

	return (
		<div
			className={
				className
					? `products-showcase-section ` + className
					: `products-showcase-section`
			}
		>
			<div className="products-showcase-section-container container grid">
				<div className="products-showcase-section-content">
					<h2 className="products-showcase-section-heading heading-secondary">
						{products[productIndex].title}
					</h2>

					<img
						src={products[productIndex].imageUrl}
						alt=""
						className="products-showcase-section-img"
					/>

					<div className="products-showcase-section-text">
						<p>{products[productIndex].description}</p>
					</div>
				</div>

				<div className="products-showcase-section-nav flex">
					<p className="products-showcase-nav-title">Uniformes</p>

					<ul className="products-showcase-nav-list flex">
						<li className="products-showcase-nav-item">
							<button
								className={`products-showcase-nav-button ${
									productIndex === 0 ? "selected" : ""
								}`}
								onClick={() => setProductIndex(0)}
							>
								Hospitalar
							</button>
						</li>

						<li className="products-showcase-nav-item">
							<button
								className={`products-showcase-nav-button ${
									productIndex === 1 ? "selected" : ""
								}`}
								onClick={() => setProductIndex(1)}
							>
								Social
							</button>
						</li>

						<li className="products-showcase-nav-item">
							<button
								className={`products-showcase-nav-button ${
									productIndex === 2 ? "selected" : ""
								}`}
								onClick={() => setProductIndex(2)}
							>
								Antichama
							</button>
						</li>

						<li className="products-showcase-nav-item">
							<button
								className={`products-showcase-nav-button ${
									productIndex === 3 ? "selected" : ""
								}`}
								onClick={() => setProductIndex(3)}
							>
								Profissional
							</button>
						</li>

						<li className="products-showcase-nav-item">
							<button
								className={`products-showcase-nav-button ${
									productIndex === 4 ? "selected" : ""
								}`}
								onClick={() => setProductIndex(4)}
							>
								Malhas
							</button>
						</li>
					</ul>

					<CTABtn className="products-showcase-section-cta-btn">
						Faça seu orçamento
					</CTABtn>
				</div>
			</div>
		</div>
	);
}
export default ProductsShowcaseSection;
