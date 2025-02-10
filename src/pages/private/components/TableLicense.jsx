import { ButtonIconAction } from './ButtonIconAction';
import { iconsForState } from '../data/iconos.data';

export const TableLicense = ({ headers, data }) => {
	return (
		<table className='min-w-full border border-none text-sm'>
			<thead className='bg-[#F9FAFB]'>
				<tr className='font-semibold'>
					{headers.map((header) => (
						<th
							key={header.key}
							className='border-b border-gray-300 p-2 whitespace-nowrap'>
							{header.name}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item) => {
					const {icon, colorIcon, colorBg} = iconsForState[item.estado];
                    return (
                        <tr key={item.id}>
                            <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
                                {item.fecha}
                            </td>
                            <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
                                {item.codZonificacion}
                            </td>
                            <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
                                {item.codPago}
                            </td>
                            <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
                                {item.ruc}
                            </td>
                            <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
                                {item.estado.charAt(0).toUpperCase() + item.estado.slice(1)}
                            </td>
                            <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap flex justify-center'>
                                <ButtonIconAction
                                    Icon={icon}
                                    colorIcon={colorIcon}
                                    colorBg={colorBg}>
                                    {item.documento}
                                </ButtonIconAction>
                            </td>
                        </tr>
                    );
				})}
			</tbody>
		</table>
	);
};
