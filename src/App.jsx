import { ProductListingContent, Header } from "./components";
import { AppRoutes } from "./routes";
import "./styles/index.css";

export default function App() {
	return (
		<div>
			<Header />
			<AppRoutes />
			<ProductListingContent />
		</div>
	);
}
