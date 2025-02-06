import { Download, FileText, Loader} from 'lucide-react';
import { InputField } from '../../components/ui/InputField';
import { Button } from '../../components/ui/Button';
import { SelectField } from '../../components/ui/SelectField';
import { useState } from 'react';
import { toast } from 'sonner';
import { InputEmail } from '../../components/ui/InputEmail';
import { ButtonIconAction } from '../../components/ui/ButtonIconAction';

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

  return (
    <>
      <section className='max-w-4xl w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5 mb-5'>
        <h2 className='text-xl md:text-2xl font-bold text-primary'>
          Registro de código de licencia
        </h2>
        <div className='grid gap-y-5 text-xs sm:text-sm'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InputField
              name='codigo'
              placeholder='Ingrese el codigo'
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <InputField
              name='pago'
              placeholder='Ingrese el codigo de pago'
            />
            <InputEmail name='correo' placeholder={'email'}/>
          </div>
          <div className='flex justify-start'>
            <Button
              className={'bg-primary text-white bg-[#1F7EBE]'}
              onClick={() => setIsModalOpen(true)}
              disabled={!code}>
              Registrar <FileText size={18} />
            </Button>
          </div>
        </div>
        {isModalOpen && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
            <div className='bg-white flex flex-col p-6 mx-12 min-w-96 w-[500px] rounded-lg shadow-lg gap-y-6'>
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
      <section className='max-w-4xl w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5'>
        <div className='grid gap-y-5 mt-4 text-sm'>
          <h3 className='text-xl md:text-2xl font-bold text-primary'>
            Filtrar códigos de licencia
          </h3>
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
          <Button className={'bg-[#EEEDED] text-[#677172] shadow-md'}>
            Limpiar Campos
        </Button>
        </div>
        <div className='w-full overflow-x-auto'>
          <table className='min-w-full border border-none text-xs sm:text-sm'>
            <thead className='bg-[#F9FAFB]'>
              <tr className='font-semibold'>
                <th className='border-b border-gray-300 p-2 whitespace-nowrap'>Fecha de registro</th>
                <th className='border-b border-gray-300 p-2 whitespace-nowrap'>Cod. Zonificacion</th>
                <th className='border-b border-gray-300 p-2 whitespace-nowrap'>Estado</th>
                <th className='border-b border-gray-300 p-2 whitespace-nowrap'>Documento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
                  12/12/2021
                </td>
                <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>556020</td>
                <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
                  Disponible
                </td>
                <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap flex justify-center'>
                  <ButtonIconAction Icon={Loader} colorIcon={'#1F7EBE'} colorBg={'#DBEAFE'} >Pendiente</ButtonIconAction>
                </td>
              </tr>
              <tr>
                <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>
                  12/12/2021
                </td>
                <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>556021</td>
                <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap'>Utilizado</td>
                <td className='border-b border-gray-300 text-center p-2 whitespace-nowrap flex justify-center'>
                <ButtonIconAction Icon={Download} colorIcon={'#16A34A'} colorBg={'#DCFCE7'} >Descargar</ButtonIconAction>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};