import CtaBtn from "../CTA-Btn";
import LazyImg from "../Lazy-Img";

function MeasurementSection({ className }) {
	return (
		<div
			className={
				className
					? `measurement-section ` + className
					: `measurement-section`
			}
		>
			<div className="measurement-title-container container">
				<h2 className="measurement-section-heading">
					Tabelas de medidas
				</h2>
			</div>

			<div className="measurement-section-container container grid grid--2-cols">
				<div className="measurement-tables-box">
					<p className="measurement-tables-title">Masculino</p>

					<ul className="measurement-tables-list flex">
						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Manequim Masculino.pdf"
								target="_blank"
							>
								<span>Manequim Social</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>

						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Manequim Masculino - plus size.pdf"
								target="_blank"
							>
								<span>Manequim Social - Plus size</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>
					</ul>
				</div>

				<img src="" alt="" className="measurement-section-img" />

				<div className="measurement-tables-box">
					<p className="measurement-tables-title">Feminino</p>

					<ul className="measurement-tables-list flex">
						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Manequim Feminino.pdf"
								target="_blank"
							>
								<span>Manequim Social</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>

						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Manequim Feminino - plus size.pdf"
								target="_blank"
							>
								<span>Manequim Social - Plus size</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>

						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Blazers.pdf"
								target="_blank"
							>
								<span>Blazer</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>

						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Vestidos.pdf"
								target="_blank"
							>
								<span>Vestido</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>
					</ul>
				</div>

				<div className="measurement-tables-box">
					<p className="measurement-tables-title">Unissex</p>

					<ul className="measurement-tables-list flex">
						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Malhas.pdf"
								target="_blank"
							>
								<span>Malhas</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>

						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Coletes.pdf"
								target="_blank"
							>
								<span>Colete Profissional</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>

						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Macacões.pdf"
								target="_blank"
							>
								<span>Macacão Profissional</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>

						<li className="measurement-tables-item">
							<a
								className="measurement-tables-link"
								href="\PDFs\Measurement Tables\Conjuntos Profissionais.pdf"
								target="_blank"
							>
								<span>Conjunto Profissional</span>

								<ion-icon
									class="measurement-tables-download-icon"
									name="download"
								></ion-icon>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="measurement-image-container container flex">
				<LazyImg
					src="\images\Medidas.webp"
					alt="how to take measurements"
					className="measurement-image"
					hasSmall={true}
				/>

				<CtaBtn className="measurement-cta-btn">
					Faça seu orçamento
				</CtaBtn>
			</div>
		</div>
	);
}
export default MeasurementSection;
