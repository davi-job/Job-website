import MeasurementSection from "../components/sections/Measurement-section";

function MeasurementPage({ className }) {
	return (
		<main
			className={
				className ? `measurement-page ` + className : `measurement-page`
			}
		>
			<MeasurementSection />
		</main>
	);
}
export default MeasurementPage;
