import { Printer } from "lucide-react";
import { ButtonIconAction } from "../../components/ui/ButtonIconAction";
import { EstadoTramite } from "../../components/ui/EstadoTramite";
import { Button } from "../../components/ui/Button";

export const TramitarLicencias = () => {
  return (
    <div className="max-w-4xl flex flex-col gap-9">
      <section className="flex gap-20 justify-between ">
        <div className="max-w-72 w-full bg-white p-5 rounded-lg flex flex-col gap-2 shadow-md">
          <h2 className="text-sm font-medium text-[#6B7280]">En trámite</h2>
          <span className="text-xl font-semibold">1</span>
        </div>
        <div className="max-w-72 w-full bg-white p-5 rounded-lg flex flex-col gap-2 shadow-md">
          <h2 className="text-sm font-medium text-[#6B7280]">Aceptadas</h2>
          <span className="text-xl font-semibold">0</span>
        </div>
        <div className="max-w-72 w-full bg-white p-5 rounded-lg flex flex-col gap-2 shadow-md">
          <h2 className="text-sm font-medium text-[#6B7280]">Rechazadas</h2>
          <span className="text-xl font-semibold">1</span>
        </div>
      </section>

      <section className="w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-primary">Licencias en trámite</h2>
        <div className="flex justify-evenly text-sm gap-7">
          <input type="text" name="b-codigo" placeholder="Buscar por código" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          <input type="text" name="b-codigo" placeholder="Buscar por RUC" className="border border-gray-300 rounded-md px-3 py-2 w-full" />
          <select name="b-estado" className="border border-gray-300 rounded-md px-3 py-2 w-full">
            <option value="todos">Todos los estados</option>
            <option value="usado">Usado</option>
            <option value="no-usado">No usado</option>
          </select>
        </div>
        <div>
          <Button className={"bg-[#EEEDED] text-[#677172] shadow-md"}>Limpiar Campos</Button>
        </div>
        <div className="w-full overflow-x-auto ">
          <table className="w-full border border-none text-sm">
            <thead className="bg-[#F9FAFB]">
              <tr className="font-semibold">
                <th className="border-b border-gray-300 p-2 whitespace-nowrap">Fecha</th>
                <th className="border-b border-gray-300 p-2 whitespace-nowrap">Código</th>
                <th className="border-b border-gray-300 p-2 whitespace-nowrap">Razón Social</th>
                <th className="border-b border-gray-300 p-2 whitespace-nowrap">Estado</th>
                <th className="border-b border-gray-300 p-2 whitespace-nowrap">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">12/12/2021</td>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">123456</td>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">Empresa ABC</td>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">
                  <div className="flex justify-center items-center">
                    <EstadoTramite type={'tramite'} />
                  </div>
                </td>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">
                  <div className="flex justify-center items-center">
                    <ButtonIconAction Icon={Printer} colorIcon={'#1F7EBE'} colorBg={'#DBEAFE'} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">12/12/2021</td>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">123456</td>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">Empresa ABC</td>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">
                  <div className="flex justify-center items-center">
                    <EstadoTramite type={'rechazado'} />
                  </div>
                </td>
                <td className="border-b border-gray-300 text-center p-2 whitespace-nowrap">
                  <div className="flex justify-center items-center">
                    <ButtonIconAction Icon={Printer} colorIcon={'#1F7EBE'} colorBg={'#DBEAFE'} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};