import CtaBtn from "../CTA-Btn";
import LazyImg from "../Lazy-Img";

function SummarySection({ summaryRef }) {
	return (
		<section ref={summaryRef} className="summary-section">
			<div className="summary-section-container container grid grid--2-cols">
				<div className="summary-section-text">
					<h2 className="heading-secondary">JOB UNIFORMES</h2>

					<p>
						Mais de <strong>20 anos</strong> definindo qualidade e
						inovação a cada pedido.
					</p>

					<CtaBtn>Faça seu orçamento</CtaBtn>
				</div>

				<div className="summary-section-image-box">
					<LazyImg
						src="/src/images/summary-img.jpg"
						alt="summary-img"
						className="summary-section-image"
					/>
				</div>
			</div>
		</section>
	);
}

export default SummarySection;
