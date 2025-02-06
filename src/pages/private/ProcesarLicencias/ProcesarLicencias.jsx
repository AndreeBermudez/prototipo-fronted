import { Download } from "lucide-react"
import { InputField } from "../../../components/ui/InputField"
import { EstadoTramite } from "../../../components/ui/EstadoTramite"
import { SelectField } from "../../../components/ui/SelectField"
import { useState } from "react"
import { Button } from "../../../components/ui/Button"
import { ButtonIconAction } from "../../../components/ui/ButtonIconAction"

export const ProcesarLicencias = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="max-w-4xl w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-primary">Licencias aceptadas</h2>
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
        <table className="w-full border border-none text-sm">
          <thead className="bg-[#F9FAFB]">
            <tr className="font-semibold">
              <th className="border-b border-gray-300 p-2">Fecha</th>
              <th className="border-b border-gray-300 p-2">Código</th>
              <th className="border-b border-gray-300 p-2">Razón Social</th>
              <th className="border-b border-gray-300 p-2">Estado</th>
              <th className="border-b border-gray-300 p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 text-center p-2">12/12/2021</td>
              <td className="border-b border-gray-300 text-center p-2">123456</td>
              <td className="border-b border-gray-300 text-center p-2">Empresa ABC</td>
              <td className="border-b border-gray-300 text-center p-2">
                <div className="flex justify-center items-center">
                  <EstadoTramite type={'aceptado'} />
                </div>
              </td>
              <td className="border-b border-gray-300 text-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Button 
                    className={"bg-[#DBEAFE] text-[#1F7EBE] shadow-md px-[10px] py-[5px]"}
                    onClick={() => setIsModalOpen(true)}>
                      Completar
                  </Button>
                  <ButtonIconAction Icon={Download} colorIcon={'#16A34A'} colorBg={'#DCFCE7'} />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 text-center p-2">12/12/2021</td>
              <td className="border-b border-gray-300 text-center p-2">123456</td>
              <td className="border-b border-gray-300 text-center p-2">Empresa ABC</td>
              <td className="border-b border-gray-300 text-center p-2">
                <div className="flex justify-center items-center">
                  <EstadoTramite type={'aceptado'} />
                </div>
              </td>
              <td className="border-b border-gray-300 text-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <Button 
                    className={"bg-[#DBEAFE] text-[#1F7EBE] shadow-md px-[10px] py-[5px]"}
                    onClick={() => setIsModalOpen(true)}>
                      Completar
                  </Button>
                  <ButtonIconAction Icon={Download} colorIcon={'#16A34A'} colorBg={'#DCFCE7'} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg max-w-96 w-full p-10 flex flex-col gap-[18px]">
              <h2 className="text-lg font-bold">Completar Licencia</h2>
              <InputField placeholder={"Nro de expediente"} name={"nro-expediente"} />
              <InputField placeholder={"Nro de resolución"} name={"nro-resolucion"} />
              <InputField placeholder={"Nro de licencia"} name={"nro-licencia"} />
              <SelectField 
                name="b-estado" 
                options={[
                    { value: "nivel", 
                      label: "Nivel de Riesgo" 
                    }, 
                    { value: "alto", 
                    label: "Alto" 
                    }, 
                    { value: "medio", 
                    label: "Medio" 
                    },
                    { value: "bajo",
                      label: "Bajo"
                    }
                  ]} />
                  <div className="flex justify-between gap-3">
                    <Button className={"shadow-md"} onClick={() => setIsModalOpen(false)}>Cancelar</Button>
                    <Button className={"bg-[#1F7EBE] text-white"}>Guardar y generar PDF</Button>
                  </div>
          </div>
        </div>
        )}

      </section>

  )
}