import { Button } from '../../../../components/ui/Button';
import { TableCell } from '../../components/TableCell';
import { useActions } from '../../context/ActionsContext';

export const TablaTramite = ({ headers, data }) => {
	const { openModal, downloadTramitarLicencias } = useActions();
	return (
		<table className='w-full border border-none text-sm'>
			<thead className='bg-[#F9FAFB]'>
				<tr className='font-semibold'>
					{headers.map((header) => (
						<TableCell key={header.key}>{header.name}</TableCell>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row) => (
					<tr key={row.id}>
						<TableCell>{row.fecha}</TableCell>
						<TableCell>{row.codZonificacion}</TableCell>
						<TableCell>{row.codPago}</TableCell>
						<TableCell>{row.ruc}</TableCell>
						<TableCell>{row.estado}</TableCell>
						<TableCell className='flex justify-center'>
							{row.estado === 'En trámite' ? (
								<Button className='bg-[#DBEAFE] text-[#1E3A8A] shadow-md px-[10px] py-[5px]' onClick={openModal}>
									Completar
								</Button>
							) : row.estado === 'Finalizado' ? (
								<Button
									className='bg-[#DCFCE7] text-[#16A34A] shadow-md px-[10px] py-[5px]'
									onClick={downloadTramitarLicencias}>
									Descargar
								</Button>
							) : null}
						</TableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
};
