import CtaBtn from "../CTA-Btn";

function SummarySection() {
	return (
		<div className="summary-section">
			<div className="summary-section-container container grid grid--2-cols">
				<div className="summary-section-text">
					<h2 className="heading-secondary">JOB UNIFORMES</h2>

					<p>
						Mais de <strong>20 anos</strong> definindo qualidade e
						inovação a cada pedido.
					</p>

					<CtaBtn>Faça seu orçamento</CtaBtn>
				</div>

				<div className="summary-section-image-box"></div>
			</div>
		</div>
	);
}

export default SummarySection;
