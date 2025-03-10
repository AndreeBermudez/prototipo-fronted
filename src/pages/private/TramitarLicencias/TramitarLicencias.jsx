import { Button } from '../../../components/ui/Button';
import { InputField } from '../../../components/ui/InputField';
import { SelectField } from '../components/SelectField';
import { useActions } from '../context/ActionsContext';
import { ModalTramite } from './components/ModalTramite';
import { TablaTramite } from './components/TablaTramite';

const headersProcess = [
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
		estado: 'En trámite',
	},
	{
		id: 2,
		fecha: '12/12/2021',
		codZonificacion: '556021',
		codPago: '123456',
		ruc: '10745623876',
		estado: 'Finalizado',
	},
];

export const TramitarLicencias = () => {
	const { isModalOpen } = useActions();
	return (
		<div className='max-w-4xl flex flex-col gap-9'>
			<section className='w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5'>
				<h2 className='text-xl md:text-2xl font-bold text-primary'>
					Licencias en trámite
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 text-sm gap-7'>
					<InputField type='text'name='b-codigo'placeholder='Buscar por código'/>
					<InputField type='text' name='b-codigo' placeholder='Buscar por RUC'/>
					<SelectField name='b-estado'
						options={[
							{ value: 'todos', label: 'Todos los estados' },
							{ value: 'tramite', label: 'En trámite' },
							{ value: 'finalizado', label: 'Finalizado' },]}>
					</SelectField>
				</div>
				<div>
					<Button className={'bg-[#EEEDED] text-[#677172] shadow-md'}>
						Limpiar Campos
					</Button>
				</div>
				<div className='w-full overflow-x-auto '>
					<TablaTramite headers={headersProcess} data={data} type='process' />
				</div>
			</section>
			{isModalOpen && (
				<ModalTramite />
			)}
		</div>
	);
};
