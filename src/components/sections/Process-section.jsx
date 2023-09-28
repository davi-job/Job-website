import CtaBtn from "../CTA-Btn";

function ProcessSection() {
	return (
		<section className="process-section">
			<div className="process-section-container container">
				<h2 className="process-section-title heading-secondary">
					Faça seu uniforme conosco
				</h2>

				<img
					className="process-img"
					src="/src/images/process.jpg"
					alt="Process"
				/>

				<CtaBtn className="process-btn">Faça seu orçamento</CtaBtn>
			</div>
		</section>
	);
}

export default ProcessSection;
