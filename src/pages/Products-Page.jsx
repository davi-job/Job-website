import CedroSection from "../components/sections/Cedro-section";
import ProductsShowcaseSection from "../components/sections/Products-showcase-section";

function ProductsPage({ className }) {
	return (
		<main
			className={
				className ? `products-page ${className}` : "products-page"
			}
		>
			<ProductsShowcaseSection />
			<CedroSection />
		</main>
	);
}

export default ProductsPage;
