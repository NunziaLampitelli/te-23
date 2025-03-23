import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div>
			{/* Common Layout for Menu, Login, and Checkout */}
			<h1>Welcome to the Purrfect Restaurant</h1>
			<Outlet /> {/* This is where nested routes will render */}
		</div>
	);
}

export default Layout;
