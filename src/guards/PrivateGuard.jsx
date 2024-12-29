import { Navigate, Outlet } from 'react-router-dom';

export const PrivateGuard = () => {
    // Hardcodeado por mientas para validar el login
	const isAuthenticated = true;
	return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};
