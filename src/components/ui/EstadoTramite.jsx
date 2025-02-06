export const EstadoTramite = ({ type = 'tramite' }) => {
	switch (type) {
		case 'tramite':
			return (
				<div className='font-medium text-xs sm:text-sm text-[#CF940E] bg-[#FEF9C3] px-3 py-1 rounded-full max-w-[100px]'>
					En trámite
				</div>
			);
		case 'finalizado':
			return (
				<div className='font-medium text-xs sm:text-sm text-[#16A34A] bg-[#DCFCE7] px-3 py-1 rounded-full max-w-[100px]'>
					Finalizado
				</div>
			);
		case 'rechazado':
			return (
				<div className='font-medium text-xs sm:text-sm text-[#A92E35] bg-[#FEE2E2] px-3 py-1 rounded-full max-w-[100px]'>
					Rechazado
				</div>
			);
	}
};
