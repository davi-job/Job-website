import LazyImg from "../Lazy-Img";

function CedroSection() {
	return (
		<section className="cedro-section">
			<div className="cedro-section-container container flex">
				<div className="cedro-section-content">
					<p className="cedro-section-content-title">
						Nosso parceiro em tecidos
					</p>
					<p className="cedro-section-content-text">
						Com mais de 140 anos de tradição, a Cedro Textil é uma
						das principais empresas têxteis do país, com capital
						100% brasileiro e capacidade de produção de 168 milhões
						de metros quadrados de tecidos por ano. Nossos
						principais produtos são denims, brins e telas, que
						compõem o mix tanto na linha Moda quanto na linha
						Profissional e nos Tecidos Técnicos. Para assegurar a
						qualidade dos produtos, a excelência no atendimento e
						uma política fundamentada em tradição, grande
						versatilidade e alta tecnologia.
					</p>

					<a
						href="src\PDFs\Catálogo Cedro.pdf"
						target="_blank"
						rel="noreferrer"
						className="cedro-section-content-link"
					>
						Confira o catálogo de cores e tecidos da Cedro &rarr;
					</a>

					<LazyImg
						src="src\images\cedro-workwear.jpeg"
						alt="cedro workwear"
						className="cedro-section-content-img"
					/>
				</div>
			</div>
		</section>
	);
}

export default CedroSection;
