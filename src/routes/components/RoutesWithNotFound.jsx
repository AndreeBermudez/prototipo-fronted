import { Navigate, Route, Routes } from 'react-router-dom';

export const RoutesWithNotFound = ({ children }) => {
	return (
		<Routes>
			{children}
			<Route path='*' element={<Navigate to={'/404'} />} />
            {/* Por mientas manejamos con 404 hasta implementar una pagina 404 */}
            <Route path='/404' element={<h1>404</h1>} />
		</Routes>
	);
};
