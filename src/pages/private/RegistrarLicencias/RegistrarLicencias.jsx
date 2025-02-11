import { FileText } from 'lucide-react';
import { Checkbox } from '../../../components/ui/Checkbox';
import { Button } from '../../../components/ui/Button';
import { InputField } from '../../../components/ui/InputField';
import { SelectField } from '../components/SelectField';
import { ModalCodigo } from './components/ModalCodigo';
import { useActions } from '../context/ActionsContext';
import { TablaRegistro } from './components/TablaRegistro';

const headersRegister = [
	{
		name: 'Fecha',
		key: 'fecha',
	},
	{
		name: 'Cod. Zonificacion',
		key: 'codZonificacion',
	},
	{
		name: 'Cod. Pago',
		key: 'codPago',
	},
	{
		name: 'RUC',
		key: 'ruc',
	},
	{
		name: 'Estado',
		key: 'estado',
	},
	{
		name: 'Documento',
		key: 'documento',
	},
];

const data = [
	{
		id: 1,
		fecha: '12/12/2021',
		codZonificacion: '556020',
		codPago: '123456',
		ruc: '10745623876',
		estado: 'Disponible',
	},
	{
		id: 2,
		fecha: '12/12/2021',
		codZonificacion: '556021',
		codPago: '123456',
		ruc: '10745623876',
		estado: 'Utilizado',
	},
];

export const RegistrarLicencias = () => {
	const { isModalOpen, openModal, code, setCode, hideInput, hideInputField } = useActions();
	return (
		<>
			<section className='max-w-4xl w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5 mb-5'>
				<h2 className='text-xl md:text-2xl font-bold text-primary'>Registro de código de licencia</h2>
				<div className='grid text-sm'>
					<Checkbox label={'Solo código de pago'} className={'mb-4'} onChange={hideInputField} />
					<div className='grid mb-5 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
						{!hideInput && <InputField
							name='codigo'
							placeholder='Ingrese el codigo'
							value={code}
							onChange={(e) => setCode(e.target.value)}
						/>}
						<InputField name='pago' placeholder='Ingrese el codigo de pago' />
						<InputField type='email' name='correo' placeholder='Ingrese el email' />
					</div>
					<div className='flex justify-start'>
						<Button className={'bg-primary text-white bg-[#1F7EBE]'} onClick={openModal} disabled={!code}>
							Registrar <FileText size={18} />
						</Button>
					</div>
				</div>
				{isModalOpen && <ModalCodigo />}
			</section>
			<section className='max-w-4xl w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5'>
				<div className='grid gap-y-5 mt-4 text-sm'>
					<h3 className='text-xl md:text-2xl font-bold text-primary'>Filtrar códigos de licencia</h3>
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
						<InputField name='b-codigo' placeholder='Buscar por código' />
						<InputField type='date' name='b-fecha' />
						<SelectField
							name='b-estado'
							options={[
								{ value: 'todos', label: 'Todos' },
								{ value: 'disponible', label: 'Disponible' },
								{ value: 'utilizado', label: 'Utilizado' },
							]}
						/>
					</div>
				</div>
				<div className='flex justify-start gap-5'>
					<Button className={'bg-[#EEEDED] text-[#677172] shadow-md'}>Limpiar Campos</Button>
				</div>
				<div className='w-full overflow-x-auto'>
					<TablaRegistro headers={headersRegister} data={data} />
				</div>
			</section>
		</>
	);
};
