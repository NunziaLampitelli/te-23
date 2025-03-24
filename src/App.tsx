import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./componenter/Header";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Checkout from "./pages/checkout";
import PrivateRoute from "./componenter/PrivateRoute";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false); // this is the state for login status

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/menu" element={<Menu />} />
				<Route
					path="/login"
					element={<Login setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/checkout"
					element={
						<PrivateRoute isAuthenticated={isLoggedIn}>
							<Checkout />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;