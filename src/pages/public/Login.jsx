import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '../../components/ui/Logo';
import { InputField } from '../../components/ui/InputField';
import { Button } from '../../components/ui/Button';
import { Checkbox } from '../../components/ui/Checkbox';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'

export const Login = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		remember: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		toast.success('Bienvenido al sistema',{
			style: {padding: '20px', color: '#1F7EBE'},
		});
		navigate('/admin');
	};

	return (
		<div className='w-full min-h-screen p-3 sm:p-5'>
			{/* Header con logo */}
			<section className='flex items-center justify-start space-x-2 md:space-x-4'>
				<Logo className='h-12 sm:h-14' /> {/* Ajustar tamaño del logo */}
				<h1 className='text-sm sm:text-base md:text-lg font-bold text-blue-600 leading-tight'>
					MUNICIPALIDAD DE NUEVO CHIMBOTE
				</h1>
			</section>
			{/* Contenedor del formulario */}
			<section className='flex justify-center mt-8 sm:mt-10 md:mt-12'>
				<div className='w-full max-w-[320px] sm:max-w-[380px] md:max-w-sm px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 space-y-6 sm:space-y-7 md:space-y-8 bg-white rounded-lg shadow-md'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600'>
						Iniciar Sesión
					</h2>
					<form className='space-y-6' onSubmit={handleSubmit}>
						<InputField
							type='text'
							name='username'
							placeholder='Ingrese su nombre de usuario'
							label='Nombre de usuario'
							required
						/>
						<div className='space-y-2'>
							<div className='flex items-center justify-between'>
								<label className='block text-sm font-bold text-gray-700'>
									Contraseña
								</label>
								<button
									type='button'
									className='text-blue-600 focus:outline-none'
									onClick={() => setShowPassword(!showPassword)}>
									{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
								</button>
							</div>
							<InputField
								type={showPassword ? 'text' : 'password'}
								name='password'
								placeholder='Ingrese su contraseña'
								required
							/>
						</div>
						<Checkbox name='remember' label='Mantener la sesión activa' />
						<Button type='submit' className='w-full bg-[#1F7EBE] text-white'>
							Iniciar Sesión
						</Button>
					</form>
				</div>
			</section>
		</div>
	);
};
