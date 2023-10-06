import CedroSection from "../components/sections/Cedro-section";
import ProductsShowcaseSection from "../components/sections/Products-showcase-section";

function ProductsPage({ className }) {
	return (
		<main className={`products-page page ${className ? className : ""}`}>
			<ProductsShowcaseSection />
			<CedroSection />
		</main>
	);
}

export default ProductsPage;
