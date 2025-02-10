import { EstadoTramite } from '../components/EstadoTramite';
import { Button } from '../../../components/ui/Button';
import { useState } from 'react';
import { InputField } from '../../../components/ui/InputField';
import { SelectField } from '../components/SelectField';

export const TramitarLicencias = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className='max-w-4xl flex flex-col gap-9'>
			<section className='w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5'>
				<h2 className='text-xl md:text-2xl font-bold text-primary'>
					Licencias en trámite
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 text-sm gap-7'>
					<InputField
						type='text'
						name='b-codigo'
						placeholder='Buscar por código'
					/>
					<InputField
						type='text'
						name='b-codigo'
						placeholder='Buscar por RUC'
					/>
					<SelectField
						name='b-estado'
						options={[
							{ value: 'todos', label: 'Todos los estados' },
							{ value: 'tramite', label: 'En trámite' },
							{ value: 'finalizado', label: 'Finalizado' },
						]}></SelectField>
				</div>
				<div>
					<Button className={'bg-[#EEEDED] text-[#677172] shadow-md'}>
						Limpiar Campos
					</Button>
				</div>
				<div className='w-full overflow-x-auto '>
					<table className='w-full border border-none text-sm'>
						<thead className='bg-[#F9FAFB]'>
							<tr className='font-semibold'>
								<th className='border-b border-gray-300 p-2 whitespace-nowrap'>
									Fecha
								</th>
								<th className='border-b border-gray-300 p-2 whitespace-nowrap'>
									Cod. Zonificacion
								</th>
								<th className='border-b border-gray-300 p-2 whitespace-nowrap'>
									RUC
								</th>
								<th className='border-b border-gray-300 p-2 whitespace-nowrap'>
									Estado
								</th>
								<th className='border-b border-gray-300 p-2 whitespace-nowrap'>
									Documento
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									12/12/2021
								</td>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									556020
								</td>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									10745623876
								</td>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									<div className='flex justify-center items-center'>
										<EstadoTramite type={'tramite'} />
									</div>
								</td>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									<div className='flex justify-center items-center gap-2'>
										<Button
											className={
												'bg-[#DBEAFE] text-[#1E3A8A] shadow-md px-[10px] py-[5px]'
											}
											onClick={() => setIsModalOpen(true)}>
											Completar
										</Button>
									</div>
								</td>
							</tr>
							<tr>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									12/12/2021
								</td>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									556021
								</td>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									10855623878
								</td>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									<div className='flex justify-center items-center'>
										<EstadoTramite type={'finalizado'} />
									</div>
								</td>
								<td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
									<div className='flex justify-center items-center gap-2'>
										<Button
											className={
												'bg-[#DCFCE7] text-[#16A34A] shadow-md px-[10px] py-[5px]'
											}>
											Descargar
										</Button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			{isModalOpen && (
				<div className='fixed inset-0 flex items-center justify-center bg-black/50'>
					<div className='bg-white rounded-lg max-w-96 w-full mx-6 p-10 flex flex-col gap-[18px]'>
						<h2 className='text-lg font-bold'>Completar Licencia</h2>
						<InputField
							placeholder={'Nro de expediente'}
							name={'nro-expediente'}
						/>
						<InputField
							placeholder={'Nro de resolución'}
							name={'nro-resolucion'}
						/>
						<InputField placeholder={'Nro de licencia'} name={'nro-licencia'} />
						<SelectField
							name='b-estado'
							options={[
								{ value: 'nivel', label: 'Nivel de Riesgo' },
								{ value: 'alto', label: 'Alto' },
								{ value: 'medio', label: 'Medio' },
								{ value: 'bajo', label: 'Bajo' },
							]}
						/>
						<div className='flex justify-between gap-3'>
							<Button
								className={'shadow-md'}
								onClick={() => setIsModalOpen(false)}>
								Cancelar
							</Button>
							<Button className={'bg-[#1F7EBE] text-white'}>
								Guardar y generar PDF
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
