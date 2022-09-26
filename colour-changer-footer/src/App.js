import ColourSelector from "./components/common/ColourSelector";
import { AppProvider } from "./context/AppContext";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
	return (
		<AppProvider>
			<div className="wrapper">
				<ColourSelector />
			</div>
			<Footer />
		</AppProvider>
	);
}

export default App;