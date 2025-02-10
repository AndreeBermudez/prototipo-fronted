import { Navigate, Route } from 'react-router-dom';
import { RoutesWithNotFound } from './components/RoutesWithNotFound';
import { RegistrarCodigo } from '../pages/private/RegistrarCodigo/RegistrarCodigo';
import { TramitarLicencias } from '../pages/private/TramitarLicencias/TramitarLicencias';
import { Layout } from '../pages/private/Layout';

export const PrivateRouter = () => {
	return (
		<RoutesWithNotFound>
			<Route path='/' element={<Navigate to='registro' />} />
			<Route element={<Layout />}>
				<Route path='registro' element={<RegistrarCodigo />} />
				<Route path='tramite' element={<TramitarLicencias />} />
				<Route path='historial' element={<div>Comming Soon</div>} />
			</Route>
		</RoutesWithNotFound>
	);
};
