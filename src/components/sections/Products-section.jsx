import PrimaryBtn from "../Primary-Btn";

function ProductsSection() {
	return (
		<section className="products-section">
			<div className="products-section-container container">
				<div className="products-card flex">
					<div className="products-card-image-box">
						<img
							className="products-card-image"
							src="https://source.unsplash.com/random/800x800"
							alt="hero"
						/>
					</div>

					<div className="products-card-content">
						<h3 className="products-card-title">
							Hospitalar com Qualidade Superior
						</h3>

						<p className="products-card-text">
							Oferecemos jalecos, capotes cirúrgicos, camisas e
							calças cirúrgicas, campos cirúrgicos e enxovais de
							alta qualidade. Nossas peças são projetadas para
							profissionais da saúde que exigem o melhor em
							conforto e desempenho. Conte conosco para
							vestimentas hospitalares confiáveis e higiênicas,
							adaptadas às suas necessidades.
						</p>

						<PrimaryBtn>VEJA MAIS</PrimaryBtn>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductsSection;
