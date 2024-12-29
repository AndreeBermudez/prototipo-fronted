import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import logoMunicipalidad from '../assets/logo-municipalidad.svg';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        remember: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de login aquí
    };

    return (
        <div className='container-fluid vh-100 bg-principal'>
            <nav>
                <div className='logo d-flex align-items-center px-3 py-1'>
                    <img src={logoMunicipalidad} alt='Logo Municipalidad' className='img-fluid' />
                    <h1 className='fw-bold text-primary fs-6 mb-0 ms-2'>
                        MUNICIPALIDAD DE NUEVO CHIMBOTE
                    </h1>
                </div>
            </nav>

            <div className='d-flex flex-column align-items-start bg-login mx-auto mt-5 rounded shadow'>
                <h2 className='fw-bold text-primary fs-1 mb-4'>Iniciar Sesión</h2>
                <form className='w-100' onSubmit={handleSubmit}>
                    <div className='d-flex flex-column mb-4 fw-bold gap-2'>
                        <label className='form-label'>Nombre de usuario</label>
                        <input
                            type='text'
                            name='username'
                            placeholder='Ingrese su nombre de usuario'
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='d-flex flex-column mb-4 gap-2'>
                        <div className='d-flex justify-content-between fw-bold'>
                            <label className='form-label'>Contraseña</label>
                            <button 
                                type='button'
                                className='btn btn-link text-primary p-0'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder='Ingrese su contraseña'
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='form-check mb-4'>
                        <input 
                            type='checkbox' 
                            name='remember' 
                            className='form-check-input' 
                            id='remember'
                        />
                        <label className='form-check-label' htmlFor='remember'>
                            Mantener la sesión activa
                        </label>
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};