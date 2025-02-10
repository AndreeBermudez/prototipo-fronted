import { createContext, useContext } from 'react';
import { toast, Toaster } from 'sonner';

const ToastContext = createContext();
// Implementar notificaciones con promesas para la API

export const ToastProvider = ({ children }) => {
	// Notificacion para iniciar sesion
	const loginNotification = () => {
		toast.success('Bienvenido al sistema');
	};
	// Notificacion para registrar
	const registroNotification = () => {
		toast.info('Registro exitoso');
	};
	// Notificacion de error
	const errorNotification = () => {
		toast.error('Ha sucedido un error');
	};
	// Notificacion para descargar un archivo
	const dowloadNotification = () => {
		toast.success('El archivo se ha descargado correctamente');
	};
	return (
		<ToastContext.Provider
			value={{ loginNotification, registroNotification, errorNotification, dowloadNotification }}>
			<Toaster richColors position='top-right' style={{ padding: '20px', color: '#1F7EBE' }} />
			{children}
		</ToastContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);
