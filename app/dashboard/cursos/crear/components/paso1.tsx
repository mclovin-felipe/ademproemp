import { Input } from "@/components/ui/input";
import InputCurso from "./inputCurso";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";
import { Pasos } from "../types";
import InputEdit from "@/app/dashboard/usuarios/component/InputEdit";
import { Inputs } from "@/types/input";
import { Categories } from "@/app/dashboard/component/category";
const Paso1 = ({
  HandlerStep,
  register,
  errors,
  watch,
  setValues = () => {},
}: Pasos) => {
  return (
    <div className="flex flex-col gap-y-5 w-full bg-[#191919] rounded-2xl p-5 min-h-[40vh]">
      <h1 className="col-span-2 text-4xl font-semibold">Detalle del curso</h1>
      <div className="grid lg:grid-cols-4 gap-x-8">
        <div className="bg-[#282626] w-full rounded-2xl flex flex-col justify-center items-center p-10 lg:p-0">
          <Image size={70} />
          <p>
            Dejar o <span className="text-primary">buscar</span>
          </p>
          <p className="text-gray-600">PNG, JPEG (max 4mb)</p>
        </div>
        <div className="col-span-3 flex flex-col gap-y-5">
          <span>Titulo del curso</span>
          <InputEdit
            title={inputs.titulo.title}
            name={inputs.titulo.name}
            placeholder={inputs.titulo.placeholder}
            register={register}
            rules={inputs.titulo.rules}
            errors={errors}
          />

          <div className="grid grid-cols-2">
            <div>
              <span>Categoria de curso</span>
              <InputCurso />
              <Categories
                value={watch("categoria")}
                onChange={(id: string) =>
                  setValues("categoria", parseInt(id), {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              />
            </div>
            <div>
              <span>Nivel del curso</span>
              <InputCurso />
            </div>
          </div>
          <div className="flex flex-row gap-x-5 justify-end bottom-0">
            <Button size={"lg"} type="button" variant={"dashboardOutline"}>
              Cancelar
            </Button>
            <Button
              onClick={() => HandlerStep(1)}
              size={"lg"}
              type="button"
              variant={"dashboard"}
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
interface InputInterface {
  [key: string]: Inputs;
}
const inputs: InputInterface = {
  titulo: {
    title: "Titulo del curso",
    name: "titulo",
    placeholder: "Titulo del curso",
    rules: {
      required: { value: true, message: "El titulo es requerido" },
    },
  },
  categoria: {
    title: "Categoria de curso",
    name: "categoria",
    placeholder: "Categoria de curso",
    rules: {
      required: { value: true, message: "La categoria es requerida" },
    },
  },
  nivel: {
    title: "Nivel del curso",
    name: "nivel",
    placeholder: "Nivel del curso",
    rules: {
      required: { value: true, message: "El nivel es requerido" },
    },
  },
};
// const inputs: Inputs[] = [
//   {
//     title: "Titulo del curso",
//     name: "titulo",
//     placeholder: "Titulo del curso",
//     rules: {
//       required: { value: true, message: "El titulo es requerido" },
//     },
//   },
//   {
//     title: "Categoria de curso",
//     name: "categoria",
//     placeholder: "Categoria de curso",
//     rules: {
//       required: { value: true, message: "La categoria es requerida" },
//     },
//   },
//   {
//     title: "Nivel del curso",
//     name: "nivel",
//     placeholder: "Nivel del curso",
//     rules: {
//       required: { value: true, message: "El nivel es requerido" },
//     },
//   },
// ];
export default Paso1;
