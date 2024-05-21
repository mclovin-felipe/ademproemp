import { Input } from "@/components/ui/input";
import InputCurso from "./inputCurso";
import Divider from "@/app/components/global/divider";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";
const Paso1 = ({ HandlerStep }: { HandlerStep: (step: number) => void }) => {
  return (
    <div className="flex flex-col gap-y-5 w-full bg-[#191919] rounded-2xl p-5 min-h-[40vh]">
      <h1 className="col-span-2 text-4xl font-semibold">Detalle del curso</h1>
      <Divider />
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
          <InputCurso />

          <div className="grid grid-cols-2">
            <div>
              <span>Categoria de curso</span>
              <InputCurso />
            </div>
            <div>
              <span>Nivel del curso</span>
              <InputCurso />
            </div>
          </div>
          <div className="flex flex-row gap-x-5 justify-end bottom-0">
            <Button size={"lg"} variant={"dashboardOutline"}>
              Cancelar
            </Button>
            <Button
              onClick={() => HandlerStep(1)}
              size={"lg"}
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
export default Paso1;
