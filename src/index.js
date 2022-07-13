import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartProvider, ProductProvider, WishlistProvider } from "./context";
import "./index.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Router>
			<WishlistProvider>
				<CartProvider>
					<ProductProvider>
						<App />
					</ProductProvider>
				</CartProvider>
			</WishlistProvider>
		</Router>
	</StrictMode>
);
