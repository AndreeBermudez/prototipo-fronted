import { Navigate, Route } from 'react-router-dom';
import { RoutesWithNotFound } from '../components/RoutesWithNotFound';
import { RegistrarCodigo } from './RegistrarCodigo/RegistrarCodigo';
import { ProcesarLicencias } from './ProcesarLicencias/ProcesarLicencias';
import { TramitarLicencias } from './TramitarLicencias/TramitarLicencias';

export const PrivateRouter = () => {
	return (
		<RoutesWithNotFound>
			<Route path='/' element={<Navigate to='/registro' />} />
			<Route path='registro' element={<RegistrarCodigo />} />
			<Route path='tramite' element={<TramitarLicencias />} />
			<Route path='procesar' element={<ProcesarLicencias />} />
		</RoutesWithNotFound>
	);
};
