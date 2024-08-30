"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Cursos from "../component/cursos";
import { useRouter } from "next/navigation";
import { getCourses } from "../services/course";
import { useEffect } from "react";
import Loading from "../loading";
import Link from "next/link";

const Page = async () => {
  const data = await getCourses();

  return (
    <div className="flex flex-col justify-start gap-y-14  w-full items-start p-14 ">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-4xl font-semibold">Cursos</h1>

        <div>
          <Link href="/dashboard/cursos/crear">
            <Button className="rounded-full text-black">Crear un curso</Button>
          </Link>
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
      <Cursos cursos={data} />
    </div>
  );
};
export default Page;
