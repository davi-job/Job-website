import HeroSection from "../components/sections/Hero-section";
import SummarySection from "../components/sections/Summary-section";
import ClientsSection from "../components/sections/Clients-section";
import ProductsSection from "../components/sections/Products-section";

function HomePage() {
	return (
		<>
			<HeroSection />
			<SummarySection />
			<ClientsSection />
			<ProductsSection />
		</>
	);
}

export default HomePage;
