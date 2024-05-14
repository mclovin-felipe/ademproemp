import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ForwardIcon, Quote } from "lucide-react";
import { FrequentQuestion, Card, Cursos, Profesores, Tabs } from "./components";
import ImagePrueba from "./components/layout/Image";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import Feature from "./components/home/Feature";
import Contacto from "./components/global/contacto";
export default function Home() {
  return (
    <main className="  flex min-h-screen flex-col items-center justify-between ">
      <div className="bg-gradient-to-r from-[#193632] flex justify-center items-center  via-[#1E1F22]  to-[#0E192B] py-14 lg:py-44">
        <div className="ml-[8.7%] mx-auto flex w-2/5 flex-col gap-y-5 justify-center items-start h-full">
          <h1 className="text-primary text-md">Aprende hoy</h1>
          <h1 className=" text-2xl lg:text-6xl font-semibold text-white ">
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
        <div className="hidden w-3/5 h-full  relative lg:flex justify-center items-center">
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
      <Feature />
      {/* Seccion3  */}
      <div className="grid lg:grid-cols-2 mb-14 px-5 lg:px-0">
        <div></div>
        <div className="  flex items-center lg:items-start flex-col gap-y-14">
          <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
            Sobre Nosotros
          </Button>
          <h1 className="text-4xl">
            Nosotros nos enfocamos y ofrecemos su plataforma educativa.
          </h1>
          {[...Array(2)].map((item) => (
            <div className="flex flex-row gap-x-5  items-center">
              <div className="h-24 w-24  rounded-2xl">
                <ImagePrueba />
              </div>
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
          <Button className="lg:w-1/6">Leer más</Button>
        </div>
      </div>
      {/* Seccion 4 */}
      <Cursos />

      <div className=" px-5 lg:px-0 flex justify-center items-center  py-14 w-full flex-col ">
        <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
          Como funciona
        </Button>
        <h1 className="text-white text-4xl ">Nustros mejores cursos</h1>
        <h1 className="text-4xl">
          Nosotros nos enfocamos y ofrecemos su plataforma educativa.
        </h1>
      </div>
      <Contacto />
      <div className=" gap-x-5 grid lg:grid-cols-2 w-5/6 min-h-[50vh]" id="FAQ">
        <div className="py-14">
          <ImagePrueba />
        </div>
        <div className=" py-14 flex flex-col gap-y-8">
          <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
            Por que elegirnos
          </Button>
          <h1 className="text-4xl font-bold">Preguntas frecuentes</h1>
          <p className="text-gray-600 lg:w-5/6">
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
      <Profesores />
      <div className="flex flex-col lg:flex-row lg:w-5/6 mx-auto  py-24 gap-y-14">
        <div className="lg:w-2/6 bg-gray-300 rounded-2xl">
          <ImagePrueba />
        </div>
        <div className="lg:w-4/6 flex flex-col px-14 gap-y-8">
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
            <div className="w-14 h-14 p-3 bg-gray-200 rounded-full">
              <ImagePrueba />
            </div>
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
      <div className="bg-[#E9F3F5] min-h-screen w-full">
        <div className="py-24 flex flex-col w-4/6 gap-y-14 mx-auto ">
          <Button
            variant={"secondary"}
            className="rounded-full shadow-lg lg:w-1/6  "
          >
            Nuestro Blog
          </Button>
          <div className="w-full flex flex-row justify-between ">
            <h1 className=" text-4xl self-start font-bold">
              Nustros profesores
            </h1>
            <Button size={"lg"}>Ver más</Button>
          </div>
          <div className="flex flex-col lg:flex-row h-[30rem] gap-x-5">
            <div className="hidden lg:h-full lg:w-1/2 rounded-2xl bg-red-300 relative lg:flex flex-row">
              <ImagePrueba>
                <Image
                  src={"/jovenes.jpeg"}
                  fill
                  className="object-cover rounded-2xl "
                  alt="jovenes"
                />
              </ImagePrueba>
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
            <div className="flex flex-col lg:w-1/2 gap-y-5 ">
              {[...Array(2)].map((item) => (
                <div className="h-1/2 w-full flex flex-col lg:flex-row gap-x-5 bg-white rounded-2xl ">
                  <div className="w-full  lg:w-2/5 rounded-t-2xl lg:rounded-l-2xl h-52 lg:h-full bg-black relative">
                    <Image
                      src={"/jovenes.jpeg"}
                      fill
                      className="object-cover rounded-l-2xl "
                      alt="jovenes"
                    />
                  </div>
                  <div className="lg:w-3/5 h-full flex flex-col justify-between py-14 items-center  ">
                    <div className="flex flex-row gap-x-5 text-primary order-last lg:-order-last">
                      <h1>15 Dic 2023</h1>
                      <h1>Por Felipe</h1>
                    </div>
                    <h1 className="text-2xl font-bold">Titulo de prueba</h1>
                    <p className="text-center">
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
    </main>
  );
}
