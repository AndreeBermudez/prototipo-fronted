import { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';
import { useToast } from '../../../context/ToastContext';

const ActionsContext = createContext();

export const ActionsProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [code, setCode] = useState('');
	const {dowloadNotification} = useToast();
	const [hideInput, setHideInput] = useState(false); //Por mientras para ocultar inputs

	const handleConfirm = () => {
		setIsModalOpen(false);
		toast.success('Registrado con éxito', {
			style: { padding: '20px', color: '#1F7EBE' },
		});
		setCode('');
	};
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	// Función de descarga para RegistroLicencias
	const downloadRegistroLicencias = () => {
		dowloadNotification();
	};
	// Función de descarga para TramitarLicencias
	const downloadTramitarLicencias = () => {
		dowloadNotification();
		closeModal();
	};
	//Funcion para el imput
	const hideInputField = (e) => {
		setHideInput(e.target.checked)
	};

	return (
		<ActionsContext.Provider
			value={{
				isModalOpen,
				openModal,
				closeModal,
				downloadTramitarLicencias,
				downloadRegistroLicencias,
                code,
                setCode,
                handleConfirm,
				hideInput,
				hideInputField
			}}>
			{children}
		</ActionsContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useActions = () => useContext(ActionsContext);
