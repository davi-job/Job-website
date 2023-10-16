import LazyImg from "../Lazy-Img";

import { useState } from "react";

function ProductsSection({ className }) {
	const [activeCard, setActiveCard] = useState(0);

	return (
		<section className={`products-section  ${className ? className : ""}`}>
			<div className="container products-section-title flex">
				<h2 className="products-title heading-secondary">
					Conheça nossos produtos
				</h2>
			</div>

			<div className="products-container container flex">
				<div
					className={`products-card ${
						activeCard === 0 ? "active" : ""
					}`}
					onClick={() => setActiveCard(0)}
				>
					<LazyImg
						className="products-card-bg-image"
						src="/src/images/Produtos/produtos-antichama.jpg"
						alt="hero"
						hasSmall={true}
					/>

					<div className="products-card-shadow"></div>

					<div className="products-card-content">
						<h3 className="products-card-title">Antichama</h3>

						<p className="products-card-text">
							Nossas camisas, calças e balaclavas antichamas
							possuem certificação de aprovação técnica (CA) do
							MTE, garantindo sua segurança no trabalho. Fique
							tranquilo sabendo que você está vestindo roupas
							projetadas para resistir a condições adversas. Sua
							proteção é nossa prioridade.
						</p>
					</div>
				</div>

				<div
					className={`products-card ${
						activeCard === 1 ? "active" : ""
					}`}
					onClick={() => setActiveCard(1)}
				>
					<LazyImg
						className="products-card-bg-image"
						src="/src/images/Produtos/produtos-social.jpg"
						alt="hero"
						hasSmall={true}
					/>

					<div className="products-card-shadow"></div>

					<div className="products-card-content">
						<h3 className="products-card-title">Social</h3>

						<p className="products-card-text">
							Explore nossa variedade de camisas, blusas e calças
							sociais em diversos tecidos e estilos. Do clássico
							ao contemporâneo, nossa coleção oferece opções para
							cada ocasião. Vista-se com estilo e sofisticação em
							peças que combinam perfeitamente com seu gosto
							pessoal.
						</p>
					</div>
				</div>

				<div
					className={`products-card ${
						activeCard === 2 ? "active" : ""
					}`}
					onClick={() => setActiveCard(2)}
				>
					<LazyImg
						className="products-card-bg-image"
						src="/src/images/Produtos/produtos-hospitalar.jpg"
						alt="hero"
						hasSmall={true}
					/>

					<div className="products-card-shadow"></div>

					<div className="products-card-content">
						<h3 className="products-card-title">Hospitalar</h3>

						<p className="products-card-text">
							Oferecemos jalecos, capotes cirúrgicos, camisas e
							calças cirúrgicas, campos cirúrgicos e enxovais de
							alta qualidade. Nossas peças são projetadas para
							profissionais da saúde que exigem o melhor em
							conforto e desempenho. Conte conosco para
							vestimentas hospitalares confiáveis e higiênicas,
							adaptadas às suas necessidades.
						</p>
					</div>
				</div>

				<div
					className={`products-card ${
						activeCard === 3 ? "active" : ""
					}`}
					onClick={() => setActiveCard(3)}
				>
					<LazyImg
						className="products-card-bg-image"
						src="/src/images/Produtos/produtos-profissional.jpg"
						alt="hero"
						hasSmall={true}
					/>

					<div className="products-card-shadow"></div>

					<div className="products-card-content">
						<h3 className="products-card-title">Profissional</h3>

						<p className="products-card-text">
							Oferecemos uma ampla seleção de camisas, calças,
							bermudas e macacões projetados especificamente para
							uso profissional. Nossas peças são duráveis,
							confortáveis e prontas para enfrentar as demandas do
							seu trabalho. Conte conosco para vestimentas que
							combinam funcionalidade e estilo, ajudando você a se
							destacar no ambiente de trabalho.
						</p>
					</div>
				</div>

				<div
					className={`products-card ${
						activeCard === 4 ? "active" : ""
					}`}
					onClick={() => setActiveCard(4)}
				>
					<LazyImg
						className="products-card-bg-image"
						src="/src/images/Produtos/produtos-malha.jpg"
						alt="hero"
						hasSmall={true}
					/>

					<div className="products-card-shadow"></div>

					<div className="products-card-content">
						<h3 className="products-card-title">Malha</h3>

						<p className="products-card-text">
							Descubra nossa coleção de camisas gola polo, gola
							redonda e gola V em uma variedade de malhas e
							padronagens. Encontre o equilíbrio perfeito entre
							conforto e estilo, independentemente da ocasião.
							Nossas opções de malhas garantem que você esteja
							bem-vestido em todas as situações, com uma variedade
							de designs para escolher. Vista-se com confiança e
							elegância.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductsSection;
