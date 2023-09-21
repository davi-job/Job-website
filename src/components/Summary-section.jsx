import PrimaryBtn from "./Primary-Btn";

function SummarySection() {
	return (
		<div className="summary-section">
			<div className="summary-section-container container grid grid--2-cols">
				<div className="summary-section-text">
					<h2>JOB UNIFORMES</h2>

					<p>
						Mais de <strong>20 anos</strong> definindo qualidade e
						inovação a cada pedido.
					</p>

					<PrimaryBtn>Faça seu orçamento</PrimaryBtn>
				</div>

				<div className="summary-section-image-box"></div>
			</div>
		</div>
	);
}

export default SummarySection;
