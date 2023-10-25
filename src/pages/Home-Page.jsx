import ClientsSection from "../components/sections/Clients-section";
import HeroSection from "../components/sections/Hero-section";
import ProcessSection from "../components/sections/Process-section";
import ProductsSection from "../components/sections/Products-section";
import SummarySection from "../components/sections/Summary-section";
import TestimonialsSection from "../components/sections/Testimonials-section";

import { useRef } from "react";

function HomePage({ className }) {
	const summaryRef = useRef(null);

	return (
		<main className={`home-page ${className ? className : ""}`}>
			<HeroSection summaryRef={summaryRef} />
			<SummarySection summaryRef={summaryRef} />
			<ClientsSection />
			<ProductsSection />
			<ProcessSection />
			{/* <TestimonialsSection /> */}
		</main>
	);
}

export default HomePage;
