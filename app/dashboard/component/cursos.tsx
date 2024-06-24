import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CursosProps } from "@/types/cursos";
const Cursos = ({ cursos = [] }: { cursos?: CursosProps[] }) => {
  if (cursos.length === 0)
    return (
      <div className="flex flex-col w-full justify-center items-start text-4xl font-semibold">
        No hay cursos
      </div>
    );
  return (
    <div className="flex flex-col w-full">
      <div className=" w-1/2 lg:w-1/3 ">{/* <SearchBox /> */}</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 5xl:grid-cols-4 6xl:grid-cols-5  gap-x-5 gap-y-5">
        {cursos.map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-x-5 justify-between p-3 bg-[#181818] rounded-xl"
          >
            <div className="h-44 w-full">{/* <ImagePrueba /> */}</div>
            <div className="flex flex-col py-3 gap-y-3 w-full">
              <div className="flex flex-row gap-x-3">
                <Badge variant={"dashboard"}>Hola</Badge>
                <Badge variant={"dashboardActive"}>Hola</Badge>
              </div>
              <div>
                <h1 className="text-xl font-bold">Curso 1</h1>
                <p className="text-md w-3/4 text-gray-500">
                  Impartido por Vicente Berroeta
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-3 w-full">
              <h6>24 Estudiantes</h6>
              <div className="h-1 w-1 bg-gray-50/20"></div>
              <h6>Principiante</h6>
            </div>
            <Button className="w-full rounded-full py-7 mt-5">Ver más</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cursos;
