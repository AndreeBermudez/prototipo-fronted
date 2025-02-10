import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ActionsProvider } from './context/ActionsContext';

export const Layout = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<main className='flex-1 my-6 mx-6 sm:mx-9 overflow-x-auto'>
				<ActionsProvider>
					<Outlet />
				</ActionsProvider>
			</main>
		</div>
	);
};
