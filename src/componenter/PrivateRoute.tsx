import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
	isAuthenticated: boolean;
	children: React.ReactNode; // <-- Add this line to accept children as props
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
	isAuthenticated,
	children,
}) => {
	// If the user is not authenticated, redirect to login
	if (!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	// If the user is authenticated, render the children (outlet or any nested routes)
	return <>{children}</>;
};

export default PrivateRoute;
