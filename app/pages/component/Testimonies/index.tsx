import Carousel from "@/components/Carousel/EmblaCarousel";
import classNames from "classnames";
import { title } from "process";
import { useEffect, useState } from "react";
import React from "react";
const Testimonies = () => {
  const [select, setSelect] = useState(0);
  const HandleSelect = (index: number) => {
    if (index === 3) {
      return 0;
    }
    return index;
  };
  useEffect(() => {
    // TIMEOUT PARA ANIMAR EL CAROUSEL
    console.log(select + 1);
    const timeout = setTimeout(() => {
      setSelect(HandleSelect(select + 1));
    }, 8000);
    return () => clearTimeout(timeout);
  }, [select]);
  return (
    <>
      <div className="grid w-5/6 lg:w-4/6  min-h-[23rem] gap-x-3   p-5  mx-auto py-14 items-center">
        {/* <img
            src="/profesor.png"
            alt="profesor"
            className="w-full h-[300px] hidden lg:flex mx-auto object-contain rounded-lg border-2"
          /> */}
        <div className="p-4 lg:p-0 gap-y-5 flex flex-col ">
          <div className="flex flex-row justify-between w-full">
            {/* <Badge text="Testimonios" /> */}
          </div>
          <div className={"flex flex-row gap-x-3"}>
            {/* <div className="w-14 h-14 object-contain rounded-full border-2"></div> */}
            <div className="flex flex-col gap-y-1">
              <p className="text-2xl font-semibold">
                {Testimonios[select].title}
              </p>
              <p>{Testimonios[select].subtitle}</p>
            </div>
          </div>

          <p className="italic">{Testimonios[select].desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-3 ">
        {[...Array(3)].map((_, index) => (
          <div
            onClick={() => setSelect(index)}
            className={classNames(
              "w-5 h-5 rounded-full transition-colors duration-300 ease-in-out cursor-pointer",
              {
                "bg-primary": select === index,
                "bg-gray-200": select !== index,
              }
            )}
          ></div>
        ))}
      </div>
    </>
  );
};
export default Testimonies;

const Testimonios = [
  {
    title: "Camila Reyes",
    subtitle: "Técnico en Electricidad",
    image: "/profesor.png",
    link: "https://www.google.com",
    desc: " Gracias a los cursos que compré aquí, logré obtener mi certificación SEC en tiempo récord. La calidad del contenido es excelente, y el apoyo de los instructores fue fundamental. Sin duda, recomiendo este sitio para cualquiera que quiera mejorar susoportunidades laborales.",
  },
  {
    title: "Juan Martínez",
    subtitle: "Emprendedor",
    image: "/profesor.png",
    link: "https://www.google.com",
    desc: "Los cursos que compré no solo me brindaron conocimientos técnicos, sino que también me ayudaron a expandir mi negocio. Todo el proceso de compra fue fácil y rápido, y los materiales de estudio son muy completos.",
  },
  {
    title: "Andrea Ríos",
    subtitle: "Terapeuta Holística",
    image: "",
    link: "",
    desc: "Me sorprendió lo accesibles que son los cursos. Además, la variedad de opciones en áreas holísticas me permitió diversificar mis servicios y ofrecer más alternativas a mis pacientes. Totalmente recomendable.",
  },
];
