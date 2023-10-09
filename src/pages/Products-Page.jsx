import CedroSection from "../components/sections/Cedro-section";
import ProductsShowcaseSection from "../components/sections/Products-showcase-section";
import ProcessSection from "../components/sections/Process-section";

function ProductsPage({ className }) {
	return (
		<main className={`products-page ${className ? className : ""}`}>
			<ProductsShowcaseSection />
			<CedroSection />
			<ProcessSection />
		</main>
	);
}

export default ProductsPage;
