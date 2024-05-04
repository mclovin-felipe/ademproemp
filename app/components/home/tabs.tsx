"use client";
import { useState } from "react";
import Tab from "./tab";
import { Timer, Video, Download, StarHalf, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-5/6 mx-auto">
      <div className=" mx-auto max-w-lg text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
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
      <div className="flex flex-wrap mt-14 gap-14 justify-center">
        {datos[active - 1]?.cursos.map((item: CursosProps, index) => (
          <div
            key={index}
            className="bg-card w-80 h-[30rem] rounded-2xl flex flex-col pt-2 px-2 justify-between"
          >
            <div className="rounded-2xl h-44 w-full relative bg-black"></div>

            <div className="flex flex-row justify-between pt-2 ">
              <div className="flex flex-row items-center gap-x-1">
                <Timer size={15} />
                <p className="text-sm">{item.duracion}</p>
              </div>
              <div className="flex flex-row items-center gap-x-1">
                <Video size={15} />
                <p className="text-sm">{item.cursos} cursos</p>
              </div>
              <div className="flex flex-row items-center gap-x-1">
                <Download size={15} />
                <p className="text-sm">{item.cursos} ventas</p>
              </div>
            </div>
            <h1 className="text-lg font-bold w-5/6">{item.titulo}</h1>
            <div className="flex flex-row gap-x-2 font-semibold">
              <h2 className="text-primary">${item.precio}</h2>
              <h2>/</h2>
              <h2>${item.precioAntes}</h2>
            </div>
            <div className="bg-gray-200 w-full h-0.5 rounded-full"></div>
            <div className="flex flex-row items-center justify-between  w-full">
              <div className="flex flex-row items-center gap-x-2">
                <div className="rounded-full h-10 w-10 bg-gray-300"></div>
                <h4 className="text-primary text-md font-semibold">
                  {item.profesor}
                </h4>
              </div>

              <div className="flex flex-row items-center gap-x-1">
                <p className="text-primary text-sm"> {item.calificacion}</p>
                <StarIcon fill="yellow" color="gray" size={15} />
                <StarIcon fill="yellow" color="gray" size={15} />
                <StarIcon fill="yellow" color="gray" size={15} />
                <StarHalf fill="yellow" color="gray" size={15} />
                <p className=" text-sm text-gray-400">
                  {" "}
                  ({item.calificaciones})
                </p>
              </div>
            </div>
            <div className="h-8"></div>
            <Button className="absolute self-center mt-[28rem] text-xl rounded-full px-10">
              Inscribete
            </Button>
          </div>
        ))}
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
interface DatosProps {
  titulo: string;
  cursos: CursosProps[];
}
interface CursosProps {
  titulo: string;
  precio: number;
  precioAntes: number;
  duracion: string;
  cursos: number;
  ventas: number;
  profesor: string;
  calificacion: number;
  calificaciones: number;
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
