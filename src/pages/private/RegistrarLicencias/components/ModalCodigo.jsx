import { useActions } from '../../context/ActionsContext';

export const ModalCodigo = () => {
	const { closeModal, code, handleConfirm } = useActions();
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black/50'>
			<div className='bg-white flex flex-col p-6 mx-12 min-w-80 w-[500px] rounded-lg shadow-lg gap-y-6'>
				<h2 className='text-xl font-semibold text-black'>
					El código ingresado es:
				</h2>
				<div className='flex flex-col gap-y-1'>
					<span className='rounded-md bg-[#1F7EBE20] p-6 text-center text-3xl font-semibold text-[#3A4B5B]'>
						{code}
					</span>
					<span className='text-xs text-[#3A4B5B]'>
						*Recuerda que este código es único y no se puede modificar
					</span>
				</div>
				<div className='flex justify-evenly gap-4'>
					<button
						className='text-sm font-bold py-2 px-4 rounded flex items-center justify-center gap-2 bg-[#1F7EBE] text-white  shadow-md w-32'
						onClick={handleConfirm}>
						Confirmar
					</button>
					<button
						className='text-sm font-bold py-2 px-4 rounded flex items-center justify-center gap-2 bg-[#EEEDED] text-[#677172] shadow-md w-32'
						onClick={closeModal}>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
};
