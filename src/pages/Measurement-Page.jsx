import MeasurementSection from "../components/sections/Measurement-section";

function MeasurementPage({ className }) {
	return (
		<main className={`measurements-page ${className ? className : ""}`}>
			<MeasurementSection />
		</main>
	);
}
export default MeasurementPage;
