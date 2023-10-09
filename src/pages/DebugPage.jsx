import LazyImg from "../components/Lazy-Img";

function DebugPage({ className }) {
	return (
		<main className={`debug-page flex  ${className ? classname : ""}`}>
			<h1>Debug Page</h1>

			<LazyImg
				className="debug-lazy-img"
				src="https://via.placeholder.com/300"
				alt="Placeholder"
			/>
		</main>
	);
}
export default DebugPage;
