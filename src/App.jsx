import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import HomePage from "./pages/Home-Page";
import ProductsPage from "./pages/Products-Page";
import MeasurementPage from "./pages/Measurement-Page";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();

	return (
		<>
			<Header />

			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<HomePage />} />
				<Route path="/produtos" element={<ProductsPage />} />
				<Route path="/medidas" element={<MeasurementPage />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
