import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Profesor } from "@/types/profesores";
async function getData() {
  // Fetch data from your API here.
  setTimeout(() => {}, 1000);
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            idProfesor: 1,
            nombre: "Vicente",
            apellido: "Berroeta",
            email: "vberroeta@gmail.com",

            telefono: "+56 987878723",
            direccion: "Calle falsa 123",
            fechaNacimiento: "19 de Julio, 2023",
            profesor: "Mr. Berroeta",
            calificacion: 5,
            calificaciones: 40,
            imagen: "/profesor.png",
            descripcion:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, neque ea! Odit nulla dicta libero hic culpa architecto atque non totam fugit. Totam neque velit eos asperiores ab voluptates corrupti!",
            cursos: 34,
          },
        ]),
      500
    );
  });
}
const Paso2 = async ({
  HandlerStep,
}: {
  HandlerStep: (step: number) => void;
}) => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-y-5 w-full bg-[#191919] rounded-2xl p-5  min-h-[60vh]">
      {/*  */}
      <h1 className="col-span-2 text-4xl font-semibold">
        Seleccionar un profesor
      </h1>
      <p>
        A continuación, se le solicita que el usuario elija un profesor para el
        curso.
      </p>
      <Select>
        <SelectTrigger className="w-5/6 bg-dashboard border-0">
          <SelectValue placeholder="Selecciona un profesor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Profesores</SelectLabel>
            {data.map((item: Profesor) => (
              <SelectItem value={item.idProfesor.toString()}>
                {item.nombre} {item.apellido}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex flex-row gap-x-5 justify-end self-end bottom-0">
        <Button
          size={"lg"}
          onClick={() => HandlerStep(0)}
          variant={"dashboardOutline"}
        >
          Volver
        </Button>
        <Button
          onClick={() => HandlerStep(2)}
          size={"lg"}
          variant={"dashboard"}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
export default Paso2;
