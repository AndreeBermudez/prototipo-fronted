import { App } from './App';
import { AppRouter } from './routes/AppRouter';
import { ToastProvider } from './context/ToastContext';

export const AppContainer = () => {
	return (
		<App>
			<ToastProvider>
				<AppRouter />
			</ToastProvider>
		</App>
	);
};
