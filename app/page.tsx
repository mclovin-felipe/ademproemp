import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ForwardIcon, Quote } from "lucide-react";
import Tabs from "./components/home/tabs";
import FrequentQuestion from "./components/home/frequentQuestion";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="bg-gradient-to-r from-[#193632] flex justify-center items-center  via-[#1E1F22]  to-[#0E192B] py-44 w-full">
        <div className="ml-[8.7%] mx-auto flex w-2/5 flex-col gap-y-5 justify-center items-start h-full">
          <h1 className="text-primary text-md">Aprende hoy</h1>
          <h1 className="text-6xl font-semibold text-white ">
            Aula Global: Conectando Conocimientos Expandiendo Horizonte
          </h1>
          <p className="text-gray-300 text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            placeat nihil a itaque minus quidem.
          </p>
          <Button className="flex gap-x-2" size={"lg"}>
            Nuestros horarios
            <ForwardIcon />{" "}
          </Button>
        </div>
        <div className="w-3/5 h-full  relative flex justify-center items-center">
          <div className="absolute h-full w-1/2 mx-auto bg-blue-100/30 z-20 blur-3xl rounded-full"></div>
          <Image
            src={"/profesor.png"}
            height={300}
            width={300}
            objectFit="cover"
            className="z-40"
            alt="profesor"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-center pb-24">
        <div className="absolute h-1/2 bg-gray-50 w-full shadow-md -z-40 "></div>
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
      <div
        className="flex justify-center items-center   h-96 overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg w-full flex-col  "
        style={{ backgroundImage: "url(/jovenes.jpeg)" }}
      >
        <div className="bg-black/70 text-white  h-full w-full flex flex-row justify-between px-[14%] items-center">
          <div>
            <h1 className="text-xl">
              Somos la respuesta a tus preguntas las 24/7
            </h1>
            <h1 className="text-4xl font-bold mt-5">Necesitas ayuda?</h1>
          </div>
          <Button className="text-xl py-5 px-10 rounded-full">
            Contactanos
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 min-h-[50vh]">
        <div></div>
        <div className=" py-14 flex flex-col gap-y-8">
          <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
            Por que elegirnos
          </Button>
          <h1 className="text-4xl font-bold">Preguntas frecuentes</h1>
          <p className="text-gray-600 w-4/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor
            pariatur numquam! Nesciunt voluptate assumenda, modi magni accusamus
            adipisci! Exercitationem nihil mollitia dicta non sit adipisci
            officiis saepe laudantium possimus.
          </p>
          <FrequentQuestion />
          <FrequentQuestion />
          <FrequentQuestion />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0E192B] flex justify-center items-center  via-[#1E1F22]  to-[#193632] py-14 w-full flex-col gap-y-14 px-[14%]">
        <Button
          variant={"secondary"}
          className="rounded-full shadow-lg w-36 self-start"
        >
          Nuestros cursos
        </Button>
        <h1 className="text-white text-4xl self-start">Nustros profesores</h1>
        <div className="flex flex-wrap justify-center gap-5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-96  rounded-2xl font-bold bg-white pt-8 px-8 pb-3 flex flex-col justify-between"
            >
              <div className="w-full h-72 bg-black rounded-2xl flex flex-row">
                <Image
                  src={"/profesor.png"}
                  width={100}
                  height={100}
                  alt="profesor"
                  className="self-end mx-auto h-[19rem] w-auto"
                />
              </div>
              <h1 className="mx-auto text-xl mt-5">Vicente Berroeta</h1>
              <p className="mx-auto font-semibold text-primary">
                Prof. de Programación
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row w-5/6 mx-auto  py-24">
        <div className="w-2/6 bg-gray-300 rounded-2xl"></div>
        <div className="w-4/6 flex flex-col px-14 gap-y-8">
          <div className="self-end absolute">
            <Quote size={70} fill="#169CD4" color="#169CD4" />
          </div>
          <Button
            variant={"secondary"}
            className="rounded-full shadow-lg  self-start "
          >
            Nuestros Estudiantes
          </Button>
          <h1 className="text-4xl">Testimonios</h1>
          <div className="flex flex-row gap-x-5">
            <div className="w-14 h-14 bg-black rounded-full"></div>
            <div className="flex flex-col">
              <h1 className="text-primary font-bold">Por Felipe Ponce</h1>
              <p className="text-gray-500">Estudiante de informatica</p>
            </div>
          </div>
          <p className="italic">
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            libero dolores vel nam consequuntur doloremque impedit atque
            sapiente eveniet explicabo autem et deserunt! Voluptas hic cum nisi
            perferendis nihil cumque?"
          </p>
        </div>
      </div>
      <div className="bg-[#E9F3F5] w-full">
        <div className="py-24 flex flex-col w-4/6 gap-y-14 mx-auto ">
          <Button
            variant={"secondary"}
            className="rounded-full shadow-lg w-1/6  "
          >
            Nuestro Blog
          </Button>
          <div className="w-full flex flex-row justify-between ">
            <h1 className=" text-4xl self-start font-bold">
              Nustros profesores
            </h1>
            <Button size={"lg"}>Ver más</Button>
          </div>
          <div className="flex flex-row h-[30rem] gap-x-5">
            <div className="h-full w-1/2 rounded-2xl bg-red-300 relative flex flex-row">
              <Image
                src={"/jovenes.jpeg"}
                fill
                className="object-cover rounded-2xl "
                alt="jovenes"
              />
              <div className="h-full w-full bg-gradient-to-t rounded-2xl from-black/100 absolute"></div>
              <div className="w-full absolute h-1/5 self-end  px-14 ">
                <div className="flex flex-row gap-x-5 text-primary">
                  <h1>15 Dic 2023</h1>
                  <h1>Por Felipe</h1>
                </div>
                <h1 className="text-2xl text-white font-bold">
                  Titulo de prueba
                </h1>
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-y-5 ">
              {[...Array(2)].map((item) => (
                <div className="h-1/2 w-full flex flex-row gap-x-5 bg-white rounded-2xl ">
                  <div className="w-2/5 rounded-l-2xl h-full bg-black relative">
                    <Image
                      src={"/jovenes.jpeg"}
                      fill
                      className="object-cover rounded-l-2xl "
                      alt="jovenes"
                    />
                  </div>
                  <div className="w-3/5 h-full flex flex-col justify-between py-14  ">
                    <div className="flex flex-row gap-x-5 text-primary">
                      <h1>15 Dic 2023</h1>
                      <h1>Por Felipe</h1>
                    </div>
                    <h1 className="text-2xl font-bold">Titulo de prueba</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-44"></div>
      </div>
      <div className="w-full bg-gradient-to-r flex-col flex from-[#062B37] via-[#061432] to-[#06282E] pt-32  text-white">
        <div className="w-4/6 h-44 bg-white border flex flex-row justify-between px-[5%] items-center shadow-md rounded-2xl absolute  mx-auto self-center -mt-[13rem]">
          <h1 className="text-4xl font-bold  text-black">Inscribete ahora</h1>
          <Button className="text-4xl py-10" size={"lg"}>
            Inscribirse
          </Button>
        </div>

        <div className="w-5/6 mx-auto p-16 border grid grid-cols-6 rounded-2xl gap-x-10 border-[#173F40] my-5">
          <div className="flex flex-col justify-between gap-y-3 col-span-2">
            <div>Logo</div>
            <p className="text-sm w-5/6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              ratione vitae ipsa natus. Earum, facere deserunt? Libero maxime
              rem provident, inventore id odit beatae, odio unde veritatis
              impedit velit perspiciatis.
            </p>
            <Button className="w-1/2">Leer más</Button>
          </div>
          <div>
            <h1 className={"text-lg font-bold"}>Acceso rapido</h1>
            <div className="w-1/6 h-1 bg-primary mt-2 "></div>
            <ul className="flex flex-col gap-y-2 mt-5">
              <li>Inicio</li>
              <li>Cursos</li>
              <li>Profesores</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div>
            <h1 className={"text-lg font-bold"}>Nuestros cursos</h1>
            <div className="w-1/6 h-1 bg-primary mt-2 "></div>
            <ul className="flex flex-col gap-y-2 mt-5">
              <li>Marketing</li>
              <li>Programación</li>
              <li>Diseño</li>
            </ul>
          </div>
          <div className="col-span-2 w-5/6">
            <h1 className={"text-lg font-bold"}>Encuentranos</h1>
            <div className="w-1/6 h-1 bg-primary mt-2 "></div>
            <div className="flex flex-col gap-y-5 mt-5">
              {[...Array(3)].map((item) => (
                <div className="flex flex-row bg-secondary items-center p-2 gap-x-5 rounded-md  ">
                  <div className="h-14 w-14 bg-primary rounded-md  "></div>
                  <div className="flex flex-col gap-y-2 justify-center items-start">
                    <h1>Ubicación</h1>
                    <h1 className="font-bold">Calle falsa 123</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 w-full bg-secondary flex flex-row justify-between items-center px-[14%] text-white">
        <h1>Todos los derechos reservados</h1>
        <div>
          <h1>Terminos y condiciones</h1>
        </div>
      </div>
    </main>
  );
}
