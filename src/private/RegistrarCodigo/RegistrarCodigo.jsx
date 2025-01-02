import { Check, FileText, X } from "lucide-react"
import { InputField } from "../../components/ui/InputField";
import { Button } from "../../components/ui/Button";
import { SelectField } from "../../components/ui/SelectField";

export const RegistrarCodigo = () => {
  // const headers = ["Código", "Fecha de registro", "Estado", "Usado"];
  return (
    <section className="max-w-4xl w-full bg-white px-10 py-5 rounded-lg shadow-md flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-primary">Registro de código de licencia</h2>
      <div className="flex justify-between text-sm gap-9">
      <InputField name="codigo" placeholder="Ingrese el codigo" />
        <Button className={"bg-primary text-white"}>
          Registrar <FileText size={18} />
        </Button>
      </div>
      <div className="flex justify-evenly text-sm gap-7">
        <InputField name="b-codigo" placeholder="Buscar por código" />
        <InputField type="date" name="b-fecha" />
         <SelectField
            name="b-estado"
            options={[
              { value: "todos", label: "Todos" },
              { value: "usado", label: "Usado" },
              { value: "no-usado", label: "No usado" },
            ]}
          />
      </div>
      <div>
          <Button className={"bg-[#EEEDED] text-[#677172] shadow-md"}>Limpiar Campos</Button>
        </div>
      <table className="w-full border border-none text-sm">
        <thead className="bg-[#F9FAFB]">
          <tr className="font-semibold">
            <th className="border-b border-gray-300 p-2">Código</th>
            <th className="border-b border-gray-300 p-2">Fecha de registro</th>
            <th className="border-b border-gray-300 p-2">Estado</th>
            <th className="border-b border-gray-300 p-2">Usado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-gray-300 text-center p-2">123456</td>
            <td className="border-b border-gray-300 text-center p-2">12/12/2021</td>
            <td className="border-b border-gray-300 text-center p-2">No usado</td>
            <td className="border-b border-gray-300 text-center p-2 flex justify-center"><X /></td>
          </tr>
          <tr>
            <td className="border-b border-gray-300 text-center p-2">123456</td>
            <td className="border-b border-gray-300 text-center p-2">12/12/2021</td>
            <td className="border-b border-gray-300 text-center p-2">Usado</td>
            <td className="border-b border-gray-300 text-center p-2 flex justify-center"><Check /></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}