import { CursosProps } from "@/types/cursos";
import Curso from "./curso";
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
          <Curso key={i} curso={_} />
        ))}
      </div>
    </div>
  );
};
export default Cursos;
