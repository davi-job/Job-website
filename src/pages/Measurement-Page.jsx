import MeasurementSection from "../components/sections/Measurement-section";

function MeasurementPage({ className }) {
	return (
		<main className={`measurement-page page ${className ? className : ""}`}>
			<MeasurementSection />
		</main>
	);
}
export default MeasurementPage;
