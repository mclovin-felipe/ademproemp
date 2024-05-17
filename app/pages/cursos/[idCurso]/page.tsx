import { Header } from "@/app/components";
import Image from "next/image";
import { Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Detalle from "./component/detalle";
const Page = ({
  params,
}: {
  params: {
    idCurso: string;
  };
}) => {
  return (
    <section>
      <Header
        image="/profesor.png"
        titulo={`Detalle Curso ${params.idCurso}`}
      />

      <div className="w-5/6 mx-auto grid grid-cols-7 gap-x-5 mt-14">
        <div className="col-span-7 lg:col-span-5 flex flex-col justify-start  gap-y-5">
          <div className="h-[27rem] w-full relative">
            <Image
              src={"/jovenes.jpeg"}
              className="object-cover rounded-2xl"
              alt="jovenes"
              fill
            />
          </div>
          <div className="border border-dotted flex flex-row justify-between w-full rounded-2xl">
            {/* Nombre */}
            <div className="flex flex-row justify-center items-center px-5 py-4 border-r w-1/3 gap-x-2">
              <div className="h-14 w-14 hidden lg:flex bg-black rounded-full"></div>
              <div>
                <h1 className="font-bold ">Laney Gare</h1>
                <h1 className=" ">Instructor</h1>
              </div>
            </div>
            {/* Fecha */}
            <div className="flex flex-row justify-center items-center px-5 py-4 border-r w-1/3 gap-x-2">
              <div className="h-14 w-14  bg-black rounded-full hidden lg:flex"></div>
              <div>
                <h1 className="font-bold ">Laney Gare</h1>
                <h1 className=" ">Instructor</h1>
              </div>
            </div>
            {/* Review */}
            <div className="flex flex-row justify-center items-center px-5 py-4   w-1/3 gap-x-2">
              <div className="h-14 w-14 hidden lg:flex bg-black rounded-full"></div>
              <div>
                <h1 className="font-bold ">Laney Gare</h1>
                <h1 className=" ">Instructor</h1>
              </div>
            </div>
          </div>

          {/* TITULO */}
          <h1 className="font-bold text-4xl text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </h1>
          {/* TABS */}
          <Detalle />
        </div>
        <div className="col-span-7 lg:col-span-2 flex flex-col gap-y-5">
          <div className="w-full bg-primary/5 p-5 flex flex-col rounded-lg ">
            <Image
              src={"/jovenes.jpeg"}
              className="rounded-lg object-cover mb-5"
              alt={"jovenes"}
              height={500}
              width={400}
            />
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex flex-row justify-between py-5 border-b pb-5"
              >
                <div className="flex flex-row">
                  <Timer /> <h1>Duración</h1>
                </div>
                <h1>20 semanas</h1>
              </div>
            ))}
            <div className="flex flex-row justify-between mt-5">
              <div className="text-sm">
                <h1>Costo del curso</h1>
                <h1>Empieza a aprender ahora</h1>
              </div>
              <h1 className="font-bold">$200.000</h1>
            </div>
            <Button className="w-1/3 mx-auto mt-5">Inscribete</Button>
          </div>
          <div className="w-full bg-primary/5 px-10 py-8 gap-y-3 flex flex-col rounded-lg">
            <h1 className="text-4xl font-bold">Horas de trabajo</h1>
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex flex-row px-5 py-4 shadow-lg bg-white my-2 rounded-lg text-gray-600  "
              >
                <Timer className="mr-2" /> Lunes - Viernes 13:00 - 14:000
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Page;
