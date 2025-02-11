import { CircleCheck, Search } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { InputField } from '../../../components/ui/InputField';
import { useToast } from '../../../context/ToastContext';
/*
dni
nombres
apellidos
telefono
codigo de pago
 */
export const RegistrarCodigo = () => {
    const { registroNotification } = useToast();
	return (
		<>
			<section className='max-w-4xl w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5 mb-5'>
				<h2 className='text-xl md:text-2xl font-bold text-primary'>Registro de código de pago</h2>
				<div className='text-sm'>
					<div className='mb-5 flex items-center gap-5'>
						<InputField name='dni' placeholder='Ingrese el DNI' />
						<Button className='bg-[#F6F6F7] w-20'>
							<Search size={18} />
						</Button>
					</div>
					<div className='grid mb-5 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
						<InputField name='nombre' label='Nombre completo' placeholder='Ingrese su nombre' />
						<InputField name='apellido' label='Apellidos' placeholder='Ingrese sus apellidos' />
						<InputField name='codigo' label='Código de pago' placeholder='Ingrese el código' />
						<InputField name='telefono' label='Teléfono' placeholder='Ingrese su teléfono' />
					</div>
					<div className='flex justify-start'>
						<Button className='bg-primary text-white bg-[#1F7EBE]' onClick={registroNotification}>
							Registrar <CircleCheck size={18} />
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};
