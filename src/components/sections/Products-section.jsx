import PrimaryBtn from "../Primary-Btn";

function ProductsSection() {
	return (
		<section className="products-section">
			<div className="products-section-container container flex">
				<h2 className="products-section-title heading-secondary">
					Conheça nossos produtos
				</h2>

				<div className="products-card grid grid--2-cols">
					<div className="products-card-image-box flex">
						<img
							className="products-card-image"
							src="https://source.unsplash.com/random/800x1040"
							alt="hero"
						/>
					</div>

					<div className="products-card-content">
						<h3 className="products-card-title">
							<span>Hospitalar</span> com Qualidade Superior
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

				<div className="products-card grid grid--2-cols">
					<div className="products-card-image-box">
						<img
							className="products-card-image"
							src="https://source.unsplash.com/random/800x800"
							alt="hero"
						/>
					</div>

					<div className="products-card-content">
						<h3 className="products-card-title">
							Elegância <span>Social</span> Variada
						</h3>

						<p className="products-card-text">
							Explore nossa variedade de camisas, blusas e calças
							sociais em diversos tecidos e estilos. Do clássico
							ao contemporâneo, nossa coleção oferece opções para
							cada ocasião. Vista-se com estilo e sofisticação em
							peças que combinam perfeitamente com seu gosto
							pessoal.
						</p>

						<PrimaryBtn>VEJA MAIS</PrimaryBtn>
					</div>
				</div>

				<div className="products-card grid grid--2-cols">
					<div className="products-card-image-box">
						<img
							className="products-card-image"
							src="https://source.unsplash.com/random/800x800"
							alt="hero"
						/>
					</div>

					<div className="products-card-content">
						<h3 className="products-card-title">
							Proteção <span>Antichama</span> Certificada
						</h3>

						<p className="products-card-text">
							Nossas camisas, calças e balaclavas antichamas
							possuem certificação de aprovação técnica (CA) do
							MTE, garantindo sua segurança no trabalho. Fique
							tranquilo sabendo que você está vestindo roupas
							projetadas para resistir a condições adversas. Sua
							proteção é nossa prioridade.
						</p>

						<PrimaryBtn>VEJA MAIS</PrimaryBtn>
					</div>
				</div>

				<div className="products-card grid grid--2-cols">
					<div className="products-card-image-box">
						<img
							className="products-card-image"
							src="https://source.unsplash.com/random/800x800"
							alt="hero"
						/>
					</div>

					<div className="products-card-content">
						<h3 className="products-card-title">
							Roupas <span>Profissionais</span> de Alta Qualidade
						</h3>

						<p className="products-card-text">
							Oferecemos uma ampla seleção de camisas, calças,
							bermudas e macacões projetados especificamente para
							uso profissional. Nossas peças são duráveis,
							confortáveis e prontas para enfrentar as demandas do
							seu trabalho. Conte conosco para vestimentas que
							combinam funcionalidade e estilo, ajudando você a se
							destacar no ambiente de trabalho.
						</p>

						<PrimaryBtn>VEJA MAIS</PrimaryBtn>
					</div>
				</div>

				<div className="products-card grid grid--2-cols">
					<div className="products-card-image-box">
						<img
							className="products-card-image"
							src="https://source.unsplash.com/random/800x800"
							alt="hero"
						/>
					</div>

					<div className="products-card-content">
						<h3 className="products-card-title">
							Versatilidade em <span>Malhas</span>
						</h3>

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

						<PrimaryBtn>VEJA MAIS</PrimaryBtn>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductsSection;
