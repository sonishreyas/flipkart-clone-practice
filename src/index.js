import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {
	CartProvider,
	ProductProvider,
	WishlistProvider,
	BillingProvider,
} from "./context";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Router>
			<WishlistProvider>
				<CartProvider>
					<ProductProvider>
						<BillingProvider>
							<App />
						</BillingProvider>
					</ProductProvider>
				</CartProvider>
			</WishlistProvider>
		</Router>
	</StrictMode>
);
