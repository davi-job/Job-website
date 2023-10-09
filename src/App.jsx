import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";

import HomePage from "./pages/Home-Page";
import MeasurementPage from "./pages/Measurement-Page";
import ProductsPage from "./pages/Products-Page";
import DebugPage from "./pages/DebugPage";

import ScrollToTop from "./components/ScrollToTop";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();

	return (
		<>
			<ScrollToTop />

			<Header />

			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<HomePage />} />
				<Route path="/uniformes" element={<ProductsPage />} />
				<Route path="/medidas" element={<MeasurementPage />} />
				<Route path="/debug" element={<DebugPage />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
