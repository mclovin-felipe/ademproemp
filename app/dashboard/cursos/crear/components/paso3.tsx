import { Button } from "@/components/ui/button";
const Paso3 = ({ HandlerStep }: { HandlerStep: (step: number) => void }) => {
  return (
    // Overview
    <div className=" gap-y-5 w-full bg-[#191919] rounded-2xl p-5 grid grid-cols-2 gap-x-5  min-h-[60vh]">
      {/* RESUMEN DEL CURSO */}
      <h1 className="col-span-2 text-4xl font-semibold">Resumen del curso</h1>
      <p>Nombre del curso: UX/UI Diseño para principiantes</p>
      <p>Precio: 300.000</p>
      <p>Duración: 22 hr 30 min</p>
      <p>Cursos: 34</p>
      <p>Ventas: 250</p>
      <p>Profesor: Willium carry</p>
      <p>Calificación: 5</p>
      <p>Calificaciones: 40</p>
      <div className="flex flex-row gap-x-5 justify-end self-end bottom-0 col-span-2">
        <Button
          size={"lg"}
          onClick={() => HandlerStep(1)}
          variant={"dashboardOutline"}
        >
          Volver
        </Button>
        <Button
          onClick={() => HandlerStep(3)}
          size={"lg"}
          variant={"dashboard"}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
export default Paso3;
