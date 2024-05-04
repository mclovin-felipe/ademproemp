import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ForwardIcon } from "lucide-react";
import Tabs from "./components/home/tabs";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="bg-gradient-to-r from-[#193632] flex justify-center items-center  via-[#1E1F22]  to-[#0E192B] h-[78vh] w-full">
        <div className="ml-[8.7%] mx-auto flex flex-col gap-y-5 justify-center items-start h-full">
          <h1 className="text-primary text-md">Aprende hoy</h1>
          <h1 className="text-6xl font-semibold text-white w-1/2">
            Aula Global: Conectando Conocimientos Expandiendo Horizonte
          </h1>
          <p className="text-gray-300 text-xl w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            placeat nihil a itaque minus quidem.
          </p>
          <Button className="flex gap-x-2" size={"lg"}>
            Nuestros horarios
            <ForwardIcon />{" "}
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-screen">
        <div className="absolute h-[70vh] bg-gray-50 w-full shadow-md -z-40 "></div>
        <div className="z-10 mt-24 flex flex-col items-center gap-y-10">
          <h1 className="text-4xl">Por qué elegirnos?</h1>
          <p className="w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero
            soluta natus vel delectus molestias alias.
          </p>
          <div className="flex flex-row gap-x-14">
            {[...Array(3)].map((_, i) => (
              <div className="w-96 h-[30rem] bg-white z-40 rounded-2xl drop-shadow-xl border-b flex justify-between items-center flex-col">
                <div className="h-3/5 w-full bg-red-200 rounded-t-2xl"></div>
                <div className="h-2/5 w-full flex flex-col justify-between py-5 px-10">
                  <h4 className="text-sm">Feature-01</h4>
                  <h1 className="text-2xl font-bold">
                    Highly Expert Team Member line
                  </h1>
                  <Button variant={"ghost"}>Leer más</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Seccion3  */}
      <div className="grid grid-cols-2 mb-14">
        <div></div>
        <div className="flex flex-col gap-y-14">
          <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
            Sobre Nosotros
          </Button>
          <h1 className="text-4xl">
            Nosotros nos enfocamos y ofrecemos su plataforma educativa.
          </h1>
          {[...Array(2)].map((item) => (
            <div className="flex flex-row gap-x-5  items-center">
              <div className="h-24 w-24 bg-black rounded-2xl"></div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">1985</h1>
                <h2 className="text-lg ">Texto prueba</h2>
                <p className="text-md w-3/4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate obcaecati.
                </p>
              </div>
            </div>
          ))}
          <Button className="w-1/6">Leer más</Button>
        </div>
      </div>
      {/* Seccion 4 */}
      <div className="bg-gradient-to-r from-[#0E192B] flex justify-center items-center  via-[#1E1F22]  to-[#193632] py-14 w-full flex-col gap-y-14">
        <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
          Nuestros cursos
        </Button>
        <h1 className="text-white text-4xl">Nustros mejores cursos</h1>
        <Tabs />
      </div>
      <div className=" flex justify-center items-center  py-14 w-full flex-col ">
        <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
          Como funciona
        </Button>
        <h1 className="text-white text-4xl">Nustros mejores cursos</h1>
        <h1 className="text-4xl">
          Nosotros nos enfocamos y ofrecemos su plataforma educativa.
        </h1>
      </div>
    </main>
  );
}
