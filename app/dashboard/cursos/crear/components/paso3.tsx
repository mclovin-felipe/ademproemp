"use client";
import { Button } from "@/components/ui/button";
import { CursosProps } from "@/types/cursos";
import { getUserByRut } from "@/services/users";
import { Profesor, ProfesoresResponse } from "@/types/profesores";
import { useEffect, useState } from "react";
import { UserResponse } from "@/types/user";
import Image from "next/image";
import axios from "axios";
import Days from "./days";
import { TimePickerDemo } from "@/components/ui/time-picker-demo";
import useAxiosInstance from "@/lib/axios";
import { formatPrice } from "@/lib/utils";
async function getData(rut: string): Promise<UserResponse> {
  // Simular la obtención de datos de una API.

  const data = await axios.get(``);
  console.log(data, "data");
  return data.data;
}
const Paso3 = ({
  HandlerStep,
  watch,
  handleSubmit,
  loading,
}: {
  HandlerStep: (step: number) => void;
  watch: any;
  handleSubmit: any;
  loading: boolean;
}) => {
  const axios = useAxiosInstance();
  const [profesor, setProfesor] = useState<Profesor | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`/v1/user/findUserByRut`, {
        rut: watch("rutProfesor"),
      });
      setProfesor(result.data.data);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    // Overview
    <div className=" gap-y-5 w-full bg-[#191919] rounded-2xl p-5 grid grid-cols-2 gap-x-5    ">
      <h1 className="col-span-2 text-4xl font-semibold text-center">
        Resumen del curso
      </h1>
      <div className="bg-black rounded-md p-5 col-span-2 lg:col-span-1 grid grid-cols-2 items-center gap-5">
        <h1 className=" col-span-2 font-bold text-center text-xl mx-auto my-5">
          Datos del curso
        </h1>
        <div className="">
          <h1 className="font-bold ">Titulo del curso: </h1>
          <p>{watch("title")}</p>
        </div>
        <div>
          <h1 className="font-bold mt-5">Precio del curso: </h1>
          <p>{formatPrice(watch("price"))}</p>
        </div>
        <div>
          <h1 className="font-bold mt-5">Fecha de inicio del curso: </h1>
          <p>{new Date(watch("startDate")).toLocaleDateString()}</p>
        </div>
        <div>
          <h1 className="font-bold mt-5">Fecha de finalización del curso: </h1>
          <p>{new Date(watch("endDate")).toLocaleDateString()}</p>
        </div>

        <div className="">
          <h1 className="font-bold mt-5">Número de asistentes: </h1>
          <p>{watch("classesNumber")}</p>
        </div>
        <div className="">
          <h1 className="font-bold mt-5">Categoria:</h1>
          <p>{watch("categoryId")}</p>
        </div>
        <div className="col-span-2">
          <h1 className="font-bold mt-5">Descripción del curso: </h1>
          <p>{watch("description")}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 col-span-2 lg:col-span-1">
        {profesor && (
          <div className="bg-black rounded-md p-5 col-span-2 lg:col-span-1 grid grid-cols-2 items-center gap-5 lg:h-1/2">
            <h1 className=" col-span-2 font-bold text-center text-xl mx-auto ">
              Datos del profesor
            </h1>
            <div className="">
              <h1 className="font-bold ">Nombre del profesor: </h1>
              <p>
                {profesor.firstName} {profesor.lastName}
              </p>
            </div>
            <div>
              <h1 className="font-bold">Rut del profesor: </h1>
              <p>{profesor.rut}</p>
            </div>
            <div>
              <h1 className="font-bold ">Email del profesor: </h1>
              <p>{profesor.email}</p>
            </div>
          </div>
        )}
        <div className="bg-dashboard rounded-md h-44 lg:h-1/2 relative">
          <Image
            src={URL.createObjectURL(watch("media"))}
            fill
            alt="arquitecto"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <h1 className=" col-span-2 font-bold text-center text-xl mx-auto my-5">
          Cronograma del curso
        </h1>
        <div className="col-span-2">
          <span>Dias de la semana</span>
          <Days days={watch("days")} setDays={() => {}} />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <h1 className=" col-span-2 font-bold text-center text-xl mx-auto my-5">
          Horarios de inicio y fin
        </h1>
        <div>
          <span>Hora de inicio</span>
          <TimePickerDemo date={watch("startTime")} setDate={() => {}} />
        </div>
        <div>
          <span>Hora de finalización</span>
          <TimePickerDemo date={watch("endTime")} setDate={() => {}} />
        </div>
      </div>

      {/* RESUMEN DEL CURSO
      <h1 className="col-span-2 text-4xl font-semibold">Resumen del curso</h1>
      <p>{`Nombre del curso:${watch("title")}`}</p>
      <p>Precio:{watch("price")}</p>
      <p>Fecha de inicio:{new Date(watch("startDate")).toLocaleDateString()}</p>
      <p>
        Fecha de finalización:{new Date(watch("endDate")).toLocaleDateString()}
      </p>
      <p>Descripción:{watch("description")}</p>
      <p>Numeros de asistentes:{watch("classesNumber")}</p> */}

      <div className="flex flex-row gap-x-5 justify-end self-end bottom-0 col-span-2">
        <Button
          size={"lg"}
          onClick={() => HandlerStep(1)}
          variant={"dashboardOutline"}
        >
          Volver
        </Button>
        <Button
          onClick={() => handleSubmit()}
          size={"lg"}
          type="button"
          disabled={loading}
          variant={"dashboard"}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
export default Paso3;
