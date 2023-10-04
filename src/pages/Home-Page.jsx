import AwardsSection from "../components/sections/Awards-section";
import ClientsSection from "../components/sections/Clients-section";
import HeroSection from "../components/sections/Hero-section";
import ProcessSection from "../components/sections/Process-section";
import ProductsSection from "../components/sections/Products-section";
import SummarySection from "../components/sections/Summary-section";
import TestimonialsSection from "../components/sections/Testimonials-section";

function HomePage({ className }) {
	return (
		<main className={className ? `home-page ${className}` : "home-page"}>
			<HeroSection />
			<SummarySection />
			<ClientsSection />
			<ProductsSection />
			<ProcessSection />
			<TestimonialsSection />
			<AwardsSection />
		</main>
	);
}

export default HomePage;
