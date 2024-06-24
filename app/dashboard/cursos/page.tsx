"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Cursos from "../component/cursos";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col justify-start gap-y-14  w-full items-start ">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-4xl font-semibold">Cursos</h1>

        <div>
          <Button
            onClick={() => router.push("/dashboard/cursos/crear")}
            className="rounded-full text-black"
          >
            Crear un curso
          </Button>
        </div>
      </div>

      <div className="w-full left-0   max-w-lg text-sm font-medium text-center text-gray-500 border-b border-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap  items-start justify-start ">
          {/* <Tab
            active={active === 0}
            title="Todos los cursos"
            setActive={setActive}
            index={0}
          />
          <Tab
            active={active === 1}
            title="Publicados"
            setActive={setActive}
            index={1}
          />
          <Tab
            active={active === 2}
            title="Draft"
            setActive={setActive}
            index={2}
          /> */}
        </ul>
      </div>
      {/* {active === 0 && (
        <Cursos
          cursos={[
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
          ]}
        />
      )} */}
      {active === 1 && <Cursos />}
      {active === 2 && <Cursos />}
    </div>
  );
};
export default Page;
