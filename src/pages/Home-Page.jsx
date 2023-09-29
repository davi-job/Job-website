import HeroSection from "../components/sections/Hero-section";
import SummarySection from "../components/sections/Summary-section";
import ClientsSection from "../components/sections/Clients-section";
import ProductsSection from "../components/sections/Products-section";
import ProcessSection from "../components/sections/Process-section";
import TestimonialsSection from "../components/sections/Testimonials-section";

function HomePage() {
	return (
		<>
			<HeroSection />
			<SummarySection />
			<ClientsSection />
			<ProductsSection />
			<ProcessSection />
			<TestimonialsSection />
		</>
	);
}

export default HomePage;
