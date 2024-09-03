"use client";

import { useRouter } from "next/navigation";
import { Footer, NavBar } from "./pages/component";
import Landing from "./pages/home/component/landing";
import Carousel from "@/components/Carousel/EmblaCarousel";
import { Card } from "./pages/component";
import Image from "next/image";
import { Nostros } from "./pages/component";
import { ArrowRight } from "lucide-react";
import Cursos from "./pages/home/component/cursos";
import { Contacto } from "./pages/component";
import { FrequentQ } from "./pages/component";
import Professores from "./pages/home/component/profesores";
const Page = () => {
  return (
    <main>
      <NavBar />
      <div>
        <Landing />
        {/* FEATURES */}

        <div className="  mx-auto w-5/6 ">
          <Carousel
            slides={[
              <Card
                title="Feature-01"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat nihil a itaque minus quidem."
                image="/profesor.png"
                link="https://www.google.com"
              />,
              <Card
                title="Feature-01"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat nihil a itaque minus quidem."
                image="/profesor.png"
                link="https://www.google.com"
              />,
              <Card
                title="Feature-01"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat nihil a itaque minus quidem."
                image="/profesor.png"
                link="https://www.google.com"
              />,
            ]}
          />
        </div>
        <div className="grid h-auto lg:grid-cols-2 w-5/6 mx-auto items-center gap-y-6 gap-x-10 max-h-[55rem]">
          <div className="h-full w-full relative">
            <Image
              src="/symbols-come-out-bulb-top-book.jpg"
              alt="profesor"
              fill
              className="w-full h-[250px] lg:h-full object-cover rounded-lg border"
            />
          </div>
          <div className="p-4 gap-y-5 flex flex-col">
            {/* <Badge text="Sobre nosotros" /> */}
            <p className="text-gray-600 text-4xl lg:text-7xl font-extrabold ">
              Nosotros nos <span className="text-primary">enfocamos</span> y
              ofrecemos su plataforma educativa.
            </p>

            <Nostros
              src="/profesor.png"
              title="feature-01"
              desc="Lorem ipsum dolor sit amet."
            />
            <Nostros
              src="/profesor.png"
              title="feature-01"
              desc="Lorem ipsum dolor sit amet."
            />
            <a
              href="https://www.google.com"
              className="flex flex-row items-center gap-x-3 bg-adem lg:w-1/3 xl:w-1/2 justify-center rounded-lg py-2 px-4 text-white font-bold cursor-pointer"
            >
              Leer más
              <ArrowRight />
            </a>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#193632] via-[#1E1F22] to-[#0E192B] py-14 w-full flex flex-col gap-y-3 items-center justify-center text-lg text-white">
          {/* <Badge text="Nuestros cursos" /> */}
          <h1 className="text-4xl font-bold">Nustros mejores cursos</h1>
          <Cursos />
        </div>
        <Contacto />
        <div className="grid lg:grid-cols-2 w-5/6 mx-auto items-center gap-y-6 gap-x-10 min-h-[50vh] ">
          <div className="p-4 gap-y-5 flex flex-col h-full">
            {/* <Badge text="Por qué elegirnos?" /> */}
            <h1 className="text-4xl font-bold">Preguntas frecuentes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dolor pariatur numquam! Nesciunt voluptate assumenda, modi magni
              accusamus adipisci! Exercitationem nihil mollitia dicta non sit
              adipisci officiis saepe laudantium possimus.
            </p>
            <div className="mx-auto grid gap-y-5 w-full">
              <FrequentQ
                id="1"
                title="Pregunta prubea 1"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor pariatur numquam! Nesciunt voluptate assumenda, modi magni accusamus adipisci! Exercitationem nihil mollitia dicta non sit adipisci officiis saepe laudantium possimus."
              />
              <FrequentQ
                id="2"
                title="Pregunta prubea 1"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor pariatur numquam! Nesciunt voluptate assumenda, modi magni accusamus adipisci! Exercitationem nihil mollitia dicta non sit adipisci officiis saepe laudantium possimus."
              />
              <FrequentQ
                id="3"
                title="Pregunta prubea 1"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor pariatur numquam! Nesciunt voluptate assumenda, modi magni accusamus adipisci! Exercitationem nihil mollitia dicta non sit adipisci officiis saepe laudantium possimus."
              />
            </div>
          </div>
          <div className="h-full w-full relative">
            <Image
              src="/frequent.jpg"
              alt="profesor"
              fill
              className="w-full h-[250px] lg:h-full object-contain rounded-lg border-2"
            />
          </div>
        </div>
        {/* FREQueSN */}
        <div className=" bg-gradient-to-r from-[#193632] via-[#1E1F22] to-[#0E192B] py-14 w-full flex flex-col gap-y-3 items-center justify-center text-lg text-white">
          {/* <Badge text="Nuestros profesores" /> */}
          <h1 className="text-4xl font-bold text-white">Nustros profesores</h1>
          <Professores />
        </div>
        {/* TESTIMONIOS */}
        <div className="grid lg:grid-cols-3 gap-x-3 w-5/6  mx-auto py-14 items-center">
          <img
            src="/profesor.png"
            alt="profesor"
            className="w-full h-[300px] hidden lg:flex mx-auto object-contain rounded-lg border-2"
          />
          <div className="p-4 gap-y-5 flex flex-col col-span-2">
            <div className="flex flex-row justify-between w-full">
              {/* <Badge text="Testimonios" /> */}
            </div>
            <h1 className="text-4xl font-bold">Testimonios</h1>
            <div className={"flex flex-row gap-x-3"}>
              <div className="w-14 h-14 object-contain rounded-full border-2"></div>
              <div className="flex flex-col gap-y-1">
                <p className="">Felipe Ponce</p>
                <p>Estudiante</p>
              </div>
            </div>

            <p className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              incidunt reprehenderit nobis ipsum repellendus eligendi vero
              molestias mollitia ullam nesciunt doloremque exercitationem
              corrupti iure delectus. Culpa quis ipsam enim porro.
            </p>
          </div>
        </div>
        <div className="bg-blue-50 w-full py-14">
          <div className="w-5/6 mx-auto flex flex-col gap-y-5 items-start justify-center">
            {/* <Badge text="Noticias" /> */}
            <h1 className="text-4xl font-bold">Noticias</h1>
            <div className="grid lg:grid-cols-2 gap-x-5 h-[650px] w-full">
              <div className="h-full w-full bg-gray-300 rounded-lg"></div>
              <div className="flex flex-col gap-y-5 lg:mt-0 mt-5">
                <div className="flex flex-row gap-x-3 h-full bg-gray-300 rounded-lg w-full"></div>
                <div className="flex flex-row gap-x-3 h-full bg-gray-300 rounded-lg w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Page;
