import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const Layout = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<main className='flex-1 my-12 mx-9 overflow-x-auto'>
				<Outlet />
			</main>
		</div>
	);
};
