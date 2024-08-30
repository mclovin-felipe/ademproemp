import { getCourseById } from "@/app/dashboard/services/course";
import { getUserByID } from "@/app/dashboard/services/users";
import { CardProfesor, Header } from "@/app/pages/component";
import CardGenerica from "@/app/pages/component/CardGenerica";
import { Button } from "@/components/ui/button";
import { CursosProps } from "@/types/cursos";
import { Profesor } from "@/types/profesores";
import Image from "next/image";
import { ButtonInscribir } from "./components/buttonInscribir";

const Page = async ({
  params,
}: {
  params: {
    id: number;
  };
}) => {
  const course: CursosProps = await getCourseById(params.id);
  const Profesor = (await getUserByID(course.rutProfesor)) as Profesor;
  const Days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  return (
    <main>
      <Header title="Cursos" />
      <div className="grid grid-cols-5 mt-5 w-5/6 mx-auto gap-5">
        <div className="col-span-3  rounded-md ">
          <Image
            src={course.media}
            width={400}
            height={400}
            alt="prp"
            className="self-center mx-auto rounded-md"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-y-3">
          <h1 className="text-4xl font-semibold">{course.title}</h1>
          <h3 className="my-4 text-2xl font-semibold">Dias impartidos</h3>
          <div className="flex flex-row gap-x-5">
            {course.days.map((day) => (
              <p>{Days[day]}</p>
            ))}
          </div>
          <ButtonInscribir
            id={course.id}
            title={course.title}
            price={course.price}
          />
        </div>
      </div>
      {/* <div className="flex flex-col gap-y-5 w-5/6 lg:w-4/6 mx-auto py-14">
        <h1 className="font-semibold text-6xl">{course.title}</h1>
        <div className="grid lg:grid-cols-2 gap-x-5 items-center justify-start lg:justify-center gap-y-5">
          <Image
            src={"/arquitecto.png"}
            width={400}
            height={400}
            alt="prp"
            className="self-center mx-auto"
          />
          <div className="  flex flex-col gap-y-5">
            <div className="flex flex-row items-center gap-x-5">
              <div className="h-24 w-24 relative bg-gray-100 rounded-full">
                <Image
                  src={"/arquitecto.png"}
                  fill
                  objectFit="cover"
                  className="z-10 rounded-full"
                  alt="profesor"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Profesor</h2>
                <p>
                  {Profesor.firstName} {Profesor.lastName}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Correo electronico</h3>
              <p>{Profesor.email}</p>
            </div>
            <ButtonInscribir
              id={course.id}
              title={course.title}
              price={course.price}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 ">
          <div className="flex flex-col gap-y-5">
            <h2 className="text-2xl">Descripción del curso</h2>
            <p>{course.description}</p>
            <h2 className="text-2xl">Detalles</h2>
            <div className="flex flex-col gap-x-5  rounded-md">
              <div className="flex flex-row justify-start items-center  p-2 rounded-md  ">
                <p className="text-lg">Duración: </p>
                <p className="text-lg">
                  {course.startDate} - {course.endDate}
                </p>
              </div>
              <div className="flex flex-row justify-start items-center  p-2 rounded-md  ">
                <p className="text-lg">Hora de ingreso y salida: </p>
                <p className="text-lg">
                  {course.startTime.slice(0, 5)} - {course.endTime.slice(0, 5)}
                </p>
              </div>
            </div>
            {/* PROFEOSR */}
    </main>
  );
};
export default Page;
