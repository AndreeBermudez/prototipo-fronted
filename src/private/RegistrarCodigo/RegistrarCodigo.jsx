import { Check, FileText, X } from 'lucide-react';
import { InputField } from '../../components/ui/InputField';
import { Button } from '../../components/ui/Button';
import { SelectField } from '../../components/ui/SelectField';
import { useState } from 'react';
import { toast } from 'sonner';

export const RegistrarCodigo = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [code, setCode] = useState('');
	const handleConfirm = () => {
		setIsModalOpen(false);
		toast.success('Registrado con éxito', {
			style: { padding: '20px', color: '#1F7EBE' },
		});
		setCode('');
	};
	// const headers = ["Código", "Fecha de registro", "Estado", "Usado"];
	return (
		<section className='max-w-4xl w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5'>
			<h2 className='text-2xl font-bold text-primary'>
				Registro de código de licencia
			</h2>
			<div className='flex justify-between text-sm gap-9'>
				<InputField
					name='codigo'
					placeholder='Ingrese el codigo'
					value={code}
					onChange={(e) => setCode(e.target.value)}
				/>
				<Button
					className={'bg-primary text-white bg-[#1F7EBE]'}
					onClick={() => setIsModalOpen(true)}
					disabled={!code}>
					Registrar <FileText size={18} />
				</Button>
			</div>
			<div className='flex justify-evenly text-sm gap-7'>
				<InputField name='b-codigo' placeholder='Buscar por código' />
				<InputField type='date' name='b-fecha' />
				<SelectField
					name='b-estado'
					options={[
						{ value: 'todos', label: 'Todos' },
						{ value: 'usado', label: 'Usado' },
						{ value: 'no-usado', label: 'No usado' },
					]}
				/>
			</div>
			<div>
				<Button className={'bg-[#EEEDED] text-[#677172] shadow-md'}>
					Limpiar Campos
				</Button>
			</div>
			<table className='w-full border border-none text-sm'>
				<thead className='bg-[#F9FAFB]'>
					<tr className='font-semibold'>
						<th className='border-b border-gray-300 p-2'>Código</th>
						<th className='border-b border-gray-300 p-2'>Fecha de registro</th>
						<th className='border-b border-gray-300 p-2'>Estado</th>
						<th className='border-b border-gray-300 p-2'>Usado</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='border-b border-gray-300 text-center p-2'>123456</td>
						<td className='border-b border-gray-300 text-center p-2'>
							12/12/2021
						</td>
						<td className='border-b border-gray-300 text-center p-2'>
							No usado
						</td>
						<td className='border-b border-gray-300 text-center p-2 flex justify-center'>
							<X />
						</td>
					</tr>
					<tr>
						<td className='border-b border-gray-300 text-center p-2'>123456</td>
						<td className='border-b border-gray-300 text-center p-2'>
							12/12/2021
						</td>
						<td className='border-b border-gray-300 text-center p-2'>Usado</td>
						<td className='border-b border-gray-300 text-center p-2 flex justify-center'>
							<Check />
						</td>
					</tr>
				</tbody>
			</table>
			{/* Para abrir la modal */}
			{isModalOpen && (
				<div className='fixed inset-0 flex items-center justify-center bg-black/50'>
					<div className='bg-white flex flex-col p-6 w-[500px] rounded-lg shadow-lg gap-y-6'>
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
								onClick={() => setIsModalOpen(false)}>
								Cancelar
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
