"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourseById } from "../../services/course";
import { CursosProps } from "@/types/cursos";
import Image from "next/image";
const Page = () => {
  const searchParams = useSearchParams();
  const [curso, setCurso] = useState<CursosProps>({} as CursosProps);
  console.log(searchParams.get("id"));
  const fetchData = async () => {
    const response = await getCourseById(
      parseInt(searchParams.get("id") as string)
    );
    console.log(response);
    if (response.error) throw new Error("Error");
    setCurso(response);
  };
  if (searchParams.get("id") === null) throw new Error("Error");
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col justify-start gap-y-14  w-full items-start p-14 ">
      <h1 className="text-4xl font-bold">{curso.title}</h1>
      <div className="grid lg:grid-cols-2 gap-5 w-full">
        <div className="flex flex-col gap-y-5 w-full">
          <h1 className="text-xl font-bold">Descripción</h1>
          <p className="text-md w-3/4 text-gray-500">{curso.description}</p>
        </div>

        <div className="flex flex-col gap-y-5 w-full">
          <h1 className="text-xl font-bold">Clases</h1>
          <p className="text-md w-3/4 text-gray-500">
            {curso.classesNumber} Clases
          </p>
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <h1 className="text-xl font-bold">Fecha de inicio</h1>
          <p className="text-md w-3/4 text-gray-500">{curso.startDate}</p>
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <h1 className="text-xl font-bold">Fecha de finalización</h1>
          <p className="text-md w-3/4 text-gray-500">{curso.endDate}</p>
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <h1 className="text-xl font-bold">N de estudiantes</h1>
          <p className="text-md w-3/4 text-gray-500">{curso.classesNumber}</p>
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <h1 className="text-xl font-bold">Precio</h1>
          <p className="text-md w-3/4 text-gray-500">${curso.price}</p>
        </div>
        <div className="h-96 w-full relative">
          <Image
            src={"/arquitecto.png"}
            className="object-contain"
            alt="curso"
            fill
          />
        </div>
      </div>
    </div>
  );
};
export default Page;
