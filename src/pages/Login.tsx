import { useState } from "react";
import { Navigate } from "react-router-dom";

interface LoginProps {
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ setIsLoggedIn }: LoginProps) {
	const [isLoggedIn, setLocalLogin] = useState(false);

	function handleLogin() {
		// Simulate login logic and update the login state in the parent component
		setIsLoggedIn(true); // Update the parent component state to logged in
		setLocalLogin(true); // Update local state for immediate UI change
	};

	if (isLoggedIn) {
		// Redirect to checkout after successful login
		return <Navigate to="/checkout" />;
	}

	return (
		<div>
			<h2>Login</h2>
			<button onClick={handleLogin}>Log In</button>
		</div>
	);
}

export default Login;
