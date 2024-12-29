import {
	CircleCheckBig,
	FilePlus2,
	LayoutDashboard,
	LogOut,
} from 'lucide-react';
import logoMunicipalidad from '../assets/logo-municipalidad.svg';
import { ButtonSidebar } from './sidebar/ButtonSidebar';

export const Sidebar = () => {

	return (
		<div className='sidebar'>
			<section className='section_sup'>
				<div className='logo_sidebar'>
					<img
						src={logoMunicipalidad}
						alt='Logo Municipalidad'
						className='img-fluid'
					/>
					<span className='fw-bold mb-0 ms-2'>
						Municipalidad de Nuevo Chimbote
					</span>
				</div>
				<div className='d-flex flex-column gap-2'>
					<ButtonSidebar titulo='Registrar Código' Icon={FilePlus2} />
					<ButtonSidebar titulo='Tramitar Licencias' Icon={CircleCheckBig} />
					<ButtonSidebar titulo='Procesar Licencias' Icon={LayoutDashboard} />
				</div>
			</section>
			<section className='section_inf'>
				<ButtonSidebar titulo='Cerrar Sesión' Icon={LogOut} />
			</section>
		</div>
	);
};
