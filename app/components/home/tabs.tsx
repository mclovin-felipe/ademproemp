"use client";
import { useState } from "react";
import Tab from "./tab";
import { CursosProps, DatosProps } from "@/types/cursos";
import CardCurso from "../global/cardCurso";
import Carousel from "@/components/Carousel/EmblaCarousel";
const Tabs = () => {
  const [active, setActive] = useState(0);

  const Cards = () => {
    if (active === 0) {
      return datos.map((item, index) =>
        item.cursos.map((curso, index) => (
          <CardCurso key={index} item={curso} home={true} />
        ))
      );
    }
    return datos[active - 1]?.cursos.map((item: CursosProps, index) => (
      <CardCurso key={index} item={item} home={true} />
    ));
  };
  return (
    <div className="w-5/6 mx-auto">
      <div className=" mx-auto max-w-lg text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap  justify-center">
          <Tab
            active={active === 0}
            title="Todos"
            setActive={setActive}
            index={0}
          />
          {datos.map((tab: DatosProps, index: number) => (
            <Tab
              active={active === index + 1}
              title={tab.titulo || ""}
              setActive={setActive}
              key={index}
              index={index + 1}
            />
          ))}
        </ul>
      </div>

      <div>
        <Carousel slides={Cards()} />
      </div>
    </div>
  );
};
interface TabProps {
  active: boolean;
  title: string;
  setActive: (index: number) => void;
  index: number;
}

const datos: DatosProps[] = [
  {
    titulo: "Marketing",
    cursos: [
      {
        titulo: "UX/UI Diseño para principiantes",
        precio: 300000,
        precioAntes: 200000,
        duracion: "22 hr 30 min",
        cursos: 34,
        ventas: 250,
        profesor: "Willium carry",
        calificacion: 5,
        calificaciones: 40,
      },
    ],
  },
  {
    titulo: "Diseño",
    cursos: [
      {
        titulo: "UX/UI Diseño para principiantes",
        precio: 500000,
        precioAntes: 200000,
        duracion: "22 hr 30 min",
        cursos: 34,
        ventas: 250,
        profesor: "Willium carry",
        calificacion: 5,
        calificaciones: 40,
      },
    ],
  },
  {
    titulo: "Programación",
    cursos: [
      {
        titulo: "UX/UI Diseño para principiantes",
        precio: 900000,
        precioAntes: 200000,
        duracion: "22 hr 30 min",
        cursos: 34,
        ventas: 250,
        profesor: "Willium carry",
        calificacion: 5,
        calificaciones: 40,
      },
    ],
  },
];
const tabsArray = ["Todos", "Marketing", "Diseño", "Programación", "Negocios"];
export default Tabs;
