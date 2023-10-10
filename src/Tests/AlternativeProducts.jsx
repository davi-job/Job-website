import LazyImg from "../components/Lazy-Img";

import "/src/styles/tests.css";

function AlternativeProducts({ className }) {
	return (
		<section
			className={`alt-products-section  ${className ? className : ""}`}
		>
			<div className="alt-products-container container flex">
				<div className="alt-products-card">
					<LazyImg
						className="alt-products-card-bg-image"
						src="src\images\produtos-hospitalar.jpg"
						alt="hero"
					/>

					<div className="alt-products-card-shadow"></div>

					<div className="alt-products-card-content">
						<h3 className="alt-products-card-title">Hospitalar</h3>

						<p className="alt-products-card-text">
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
			</div>
		</section>
	);
}
export default AlternativeProducts;
