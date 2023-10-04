import CedroSection from "../components/sections/Cedro-section";

function ProductsPage({ className }) {
	return (
		<main
			className={
				className ? `products-page ${className}` : "products-page"
			}
		>
			<CedroSection />
		</main>
	);
}

export default ProductsPage;
