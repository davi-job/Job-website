import { useState } from "react";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import HomePage from "./pages/Home-Page";
import MeasurementPage from "./pages/Measurement-Page";
import ProductsPage from "./pages/Products-Page";

function App() {
	const [pageIndex, setPageIndex] = useState(0);

	return (
		<>
			<Header pageIndex={pageIndex} setPageIndex={setPageIndex} />

			<HomePage className={pageIndex === 0 ? "page-selected" : ""} />

			<ProductsPage className={pageIndex === 1 ? "page-selected" : ""} />

			<MeasurementPage
				className={pageIndex === 3 ? "page-selected" : ""}
			/>

			{/* {pageIndex === 0 ? <HomePage /> : null}
			{pageIndex === 1 ? <ProductsPage /> : null}
			{pageIndex === 3 ? <MeasurementPage /> : null} */}

			<Footer />
		</>
	);
}

export default App;
