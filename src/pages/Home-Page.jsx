import AwardsSection from "../components/sections/Awards-section";
import ClientsSection from "../components/sections/Clients-section";
import HeroSection from "../components/sections/Hero-section";
import ProcessSection from "../components/sections/Process-section";
import ProductsSection from "../components/sections/Products-section";
import SummarySection from "../components/sections/Summary-section";
import TestimonialsSection from "../components/sections/Testimonials-section";

import AlternativeHero from "../Tests/AlternativeHero";
import AlternativeProducts from "../Tests/AlternativeProducts";

import { useRef } from "react";

function HomePage({ className }) {
	const summaryRef = useRef(null);

	return (
		<main className={`home-page ${className ? className : ""}`}>
			<HeroSection summaryRef={summaryRef} />
			{/* <AlternativeHero summaryRef={summaryRef} /> */}
			<SummarySection summaryRef={summaryRef} />
			<ClientsSection />
			{/* <ProductsSection /> */}
			<AlternativeProducts />
			<ProcessSection />
			<TestimonialsSection />
			{/* <AwardsSection /> */}
		</main>
	);
}

export default HomePage;
