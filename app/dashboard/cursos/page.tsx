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
      <div className="w-5/6 flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-3">
          <div className="flex flex-row gap-2">
            <div className="h-6 w-6 rounded-full bg-green-500"></div>
            <p>Activos</p>
          </div>
          <div className="flex flex-row gap-2">
            <div className="h-6 w-6 rounded-full bg-red-500"></div>
            <p>Inactivos</p>
          </div>
        </div>
        <div className=" left-0  w-full text-sm font-medium text-center text-gray-500 border-b border-gray-500 dark:text-gray-400 dark:border-gray-700"></div>
      </div>
      <Cursos cursos={data} />
    </div>
  );
};
export default Page;
