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
import NoNoticia from "./pages/home/component/noNoticia";
import Noticias from "./pages/home/component/noticias";
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
                title="Compromiso con la calidad"
                subtitle="Nos dedicamos a ofrecer una formación de excelencia, guiados por profesionales calificados que garantizan un aprendizaje efectivo."
                image="/profesor.png"
                link="https://www.google.com"
              />,
              <Card
                title="	Atención personalizada"
                subtitle="Cada estudiante es importante para nosotros. Ofrecemos un acompañamiento cercano y personalizado en cada etapa de su formación."
                image="/profesor.png"
                link="https://www.google.com"
              />,
              <Card
                title="Certificaciones reconocidas"
                subtitle="Nuestra misión es que obtengas certificaciones que te abran puertas en el mundo laboral, respaldadas por las mejores instituciones."
                image="/profesor.png"
                link="https://www.google.com"
              />,
            ]}
          />
        </div>
        <div className="grid h-auto lg:grid-cols-2 w-5/6 mx-auto items-center gap-y-6 gap-x-10 py-5 min-h-[40rem]">
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
              Nos <span className="text-primary">enfocamos</span> y en tu
              crecimiento y éxito profesional.
            </p>

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
        <div className="grid lg:grid-cols-2 w-5/6 mx-auto items-center my-5 gap-y-6 gap-x-10 min-h-[50vh] ">
          <div className="p-4 gap-y-5 flex flex-col h-full">
            {/* <Badge text="Por qué elegirnos?" /> */}
            <h1 className="text-4xl font-bold">Preguntas frecuentes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dolor pariatur numquam! Nesciunt voluptate assumenda, modi magni
              accusamus adipisci! Exercitationem nihil mollitia dicta non sit
              adipisci officiis saepe laudantium possimus.
            </p>
            <div className="mx-auto grid gap-y-5 w-full ">
              <FrequentQ
                id="1"
                title="¿Cómo puedo inscribirme en uno de los cursos?"
                desc="Para inscribirte en cualquiera de nuestros cursos, simplemente visita la página de “ Cursos”, selecciona el curso de tu interés y sigue los pasos indicados para realizar la compra. Una vez confirmado el pago, recibirás un correo con toda la información necesaria para comenzar."
              />
              <FrequentQ
                id="2"
                title="¿Puedo comprar los cursos de manera presencial?"
                desc="Sí, puedes comprar nuestros cursos de manera presencial en nuestras oficinas. Solo debes acercarte a nuestras instalaciones, donde te brindaremos toda la información necesaria y podrás realizar el pago en efectivo o mediante otros métodos disponibles."
              />
              <FrequentQ
                id="3"
                title="¿Qué métodos de pago aceptan?"
                desc="Aceptamos diferentes métodos de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias. También trabajamos con plataformas de pago seguras para garantizar la protección de tus datos."
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
                <p className="">Camila Reyes</p>
                <p>Técnico en Electricidad</p>
              </div>
            </div>

            <p className="italic">
              Gracias a los cursos que compré aquí, logré obtener mi
              certificación SEC en tiempo récord. La calidad del contenido es
              excelente, y el apoyo de los instructores fue fundamental. Sin
              duda, recomiendo este sitio para cualquiera que quiera mejorar sus
              oportunidades laborales.
            </p>
          </div>
        </div>
        <Noticias />
      </div>
      <Footer />
    </main>
  );
};
export default Page;
