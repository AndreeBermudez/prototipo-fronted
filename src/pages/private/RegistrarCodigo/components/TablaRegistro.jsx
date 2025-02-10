import { Download, Loader } from 'lucide-react';
import { ButtonIconAction } from '../../components/ButtonIconAction';
import { TableCell } from '../../components/TableCell';
import { useActions } from '../../context/ActionsContext';

export const TablaRegistro = ({ headers, data }) => {
	const { downloadRegistroLicencias } = useActions();
	return (
		<table className='min-w-full border border-none text-sm'>
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
						<TableCell className={'flex justify-center'}>
							{row.estado === 'Disponible' ? (
								<ButtonIconAction Icon={Loader} colorIcon='#1F7EBE' colorBg='#DBEAFE'>
									Pendiente
								</ButtonIconAction>
							) : row.estado === 'Utilizado' ? (
								<ButtonIconAction Icon={Download} colorIcon='#16A34A' colorBg='#DCFCE7' onClick={downloadRegistroLicencias}>
									Descargar
								</ButtonIconAction>
							) : null}
						</TableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
};
