import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import HomePage from "./pages/Home-Page";
import ProductsPage from "./pages/Products-Page";
import MeasurementPage from "./pages/Measurement-Page";

function App() {
	return (
		<>
			<Header />
			<HomePage />
			{/* <ProductsPage /> */}
			{/* <MeasurementPage /> */}
			<Footer />
		</>
	);
}

export default App;
