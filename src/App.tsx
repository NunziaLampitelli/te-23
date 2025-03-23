import "./App.css";
import Header from "./componenter/Header";
import Menu from "./pages/menu";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</>
	);
}

export default App;
