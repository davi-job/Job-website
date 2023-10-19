import CtaBtn from "../CTA-Btn";

function ProcessSection() {
	return (
		<section className="process-section">
			<div className="process-section-container container flex">
				<h2 className="process-section-title heading-secondary">
					Faça seu uniforme conosco
				</h2>

				<img
					className="process-img"
					src="/images/process.jpg"
					alt="Process"
				/>

				<img
					className="process-img mobile"
					src="/images/mobile process.jpg"
					alt="mobile process"
				/>

				<CtaBtn className="process-btn">Faça seu orçamento</CtaBtn>
			</div>
		</section>
	);
}

export default ProcessSection;
