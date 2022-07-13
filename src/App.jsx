import { Header } from "./components";
import { AppRoutes } from "./routes";
import "./styles/index.css";

export default function App() {
	return (
		<div className="grid-3-rows w-100">
			<Header />
			<AppRoutes />
		</div>
	);
}
