import LazyImg from "../Lazy-Img";

function AwardsSection() {
	return (
		<section className="awards-section">
			<div className="awards-section-container container grid">
				<h2 className="awards-section-heading heading-secondary">
					Prêmiações e Certificados
				</h2>

				<div className="awards-section-card">
					<LazyImg
						className="award-LazyImg"
						src="src\images\Awards\c5.png"
						alt="Award"
						hasSmall={true}
					/>
					<p className="award-title">MPE - Vencedor Estadual </p>
				</div>

				<div className="awards-section-card">
					<LazyImg
						className="award-LazyImg"
						src="src\images\Awards\DG.png"
						alt="Award"
						hasSmall={true}
					/>
					<p className="award-title">O POVO - Delmiro Gouveia</p>
				</div>

				<div className="awards-section-card">
					<LazyImg
						className="award-LazyImg"
						src="src\images\Awards\MPE.jpg"
						alt="Award"
						hasSmall={true}
					/>
					<p className="award-title">MPE - Prêmio destaque</p>
				</div>

				<div className="awards-section-card">
					<LazyImg
						className="award-LazyImg"
						src="src\images\Awards\SEBRAE.png"
						alt="Award"
						hasSmall={true}
					/>
					<p className="award-title">FGA - Empresa Destaque</p>
				</div>

				<div className="awards-section-card">
					<LazyImg
						className="award-LazyImg long"
						src="src\images\Awards\BANCO NORDESTE.jpg"
						alt="Award"
						hasSmall={true}
					/>
					<p className="award-title">BANCO DO NORDESTE</p>
				</div>

				<div className="awards-section-card">
					<LazyImg
						className="award-LazyImg long"
						src="src\images\Awards\c1.jpg"
						alt="Award"
						hasSmall={true}
					/>
					<p className="award-title">
						CEDRO - Certificado de Homologação
					</p>
				</div>

				<div className="awards-section-card">
					<LazyImg
						className="award-LazyImg long"
						src="src\images\Awards\COMPE.jpg"
						alt="Award"
						hasSmall={true}
					/>
					<p className="award-title">MPE - Finalista Estadual</p>
				</div>
			</div>
		</section>
	);
}

export default AwardsSection;
