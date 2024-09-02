import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CursosProps } from "@/types/cursos";
import { getUserByID } from "../../services/users";
import { getCategories } from "../../services/course";
import Link from "next/link";
import classNames from "classnames";
const Curso = async ({ curso }: { curso: CursosProps }) => {
  const user = await getUserByID(curso.rutProfesor);
  const category = await getCategories();
  return (
    <div
      key={curso.id}
      className="flex flex-col items-center gap-x-5 justify-between  bg-[#181818] rounded-xl relative"
    >
      {/*  */}
      <div
        className={classNames(
          "z-40 absolute w-0 h-0 border-l-[0px] rounded-tl-md border-l-transparent border-t-[100px]  border-r-[100px] border-r-transparent right-0 rotate-90 text-white",
          {
            "border-t-red-500": curso.disabled,
            "border-t-green-500": !curso.disabled,
          }
        )}
      ></div>
      <div className="h-44 w-full relative bg-gray-50 rounded-md">
        <Image
          src={curso.media}
          className="object-contain"
          fill
          alt="arquitecto"
        />
      </div>
      <div className="flex flex-col py-3 gap-y-3 w-full">
        <div>
          <h1 className="text-xl font-bold">{curso.title}</h1>
          // <p className="text-md w-3/4 text-gray-500"></p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-3 w-full">
        <h6>{curso.classesNumber} Estudiantes</h6>
        <div className="h-1 w-1 bg-gray-50/20"></div>
        <h6>{category.find((item) => item.id === curso.categoryId)?.name}</h6>
      </div>
      <Link
        className="w-full"
        href={`/dashboard/cursos/detalle?id=${curso.id}`}
      >
        <Button className="w-full  py-7 mt-5">Ver más</Button>
      </Link>
    </div>
  );
};
export default Curso;
