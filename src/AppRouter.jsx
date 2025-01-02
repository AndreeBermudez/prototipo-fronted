import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RoutesWithNotFound } from './components/RoutesWithNotFound';
import { Login } from './public/Login';
import { PrivateRouter } from './private/PrivateRouter';
import { PrivateGuard } from './guards/PrivateGuard';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='/login' element={<Login />} />
				<Route element={<PrivateGuard />}>
					{/* Cualquier ruta que empiece con /admin/ va a ser privada y 
					    manejada por PrivateRouter */}
					<Route path='/admin/*' element={<PrivateRouter />} />
				</Route>
			</RoutesWithNotFound>
		</BrowserRouter>
	);
};
