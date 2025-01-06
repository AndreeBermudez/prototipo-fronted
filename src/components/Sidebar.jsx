import  { useState } from 'react';
import { CircleCheckBig, FilePlus2, LayoutDashboard, LogOut, Menu, PanelLeftOpen, PanelRightOpen } from 'lucide-react';
import logoMunicipalidad from '../assets/logo-municipalidad.svg';
import { ButtonSidebar } from './sidebar/ButtonSidebar';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };
    const toggleButtonSidebar = () => {
        isMobileMenuOpen && setIsMobileMenuOpen(false);
    }
    return (
        <>
            <button className='md:hidden fixed top-4 left-4 z-50'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu color='#1f7ebe'/>
            </button>
            <div className={`
              md:flex md:flex-col justify-between h-screen bg-white transition-all duration-200
              ${isMobileMenuOpen ? 'z-40 fixed top-0 left-0 w-56' : 'hidden'} 
              ${isCollapsed ? 'lg:w-20' : 'lg:w-56'}`}>
                <section className='flex flex-col items-center p-4'>
                    <div className='flex items-center mb-6'>
                        <img
                            src={logoMunicipalidad}
                            alt='Logo Municipalidad'
                            className='w-10 h-10'
                        />
                        <span className={`ml-2 font-bold text-blue-600 md:hidden lg:block ${isCollapsed && 'lg:hidden'}`}>
                            Municipalidad de Nuevo Chimbote
                        </span>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <Link to="/admin/registro"><ButtonSidebar titulo='Registrar Código' Icon={FilePlus2} isCollapsed={isCollapsed} onClick={toggleButtonSidebar} /></Link>
                        <Link to="/admin/tramite"><ButtonSidebar titulo='Tramitar Licencias' Icon={CircleCheckBig} isCollapsed={isCollapsed} onClick={toggleButtonSidebar} /></Link>
                        <Link to="/admin/procesar"><ButtonSidebar titulo='Procesar Licencias' Icon={LayoutDashboard} isCollapsed={isCollapsed} onClick={toggleButtonSidebar} /></Link>
                    </div>
                </section>
                <section className='flex flex-col items-center gap-4 p-4'>
                    <ButtonSidebar titulo='Cerrar Sesión' Icon={LogOut} isCollapsed={isCollapsed} />
                    <div className={`mt-4 ${isCollapsed ? 'flex justify-center w-full' : 'flex justify-end w-full'}`}>
                        <button className='hidden lg:block p-1 bg-blue-600 text-white rounded hover:bg-blue-700' onClick={toggleSidebar}>
                            {isCollapsed ? <PanelLeftOpen /> : <PanelRightOpen />}
                        </button>
                    </div>
                </section>
            </div>
            {isMobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsMobileMenuOpen(false)}  
                />
            )}
        </>
    );
};