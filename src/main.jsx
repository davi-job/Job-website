import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// STYLES /////////////////////////////////////////////////////////////////////

// general styles

import "/src/styles/index.css";
import "/src/styles/utility.css";

import "/src/styles/header-footer.css";

// page styles

import "/src/styles/pages/products-page.css";

// section styles

import "/src/styles/sections/cedro-section.css";
import "/src/styles/sections/hero-section.css";
import "/src/styles/sections/measurements-section.css";
import "/src/styles/sections/process-section.css";
import "/src/styles/sections/products-section.css";
import "/src/styles/sections/products-showcase.css";
import "/src/styles/sections/summary-clients-section.css";
import "/src/styles/sections/testimonials-section.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/*" element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
