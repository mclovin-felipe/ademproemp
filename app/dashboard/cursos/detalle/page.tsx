"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourseById } from "../../services/course";
import { CursosProps } from "@/types/cursos";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/datapicker";
import { TimePickerDemo } from "@/components/ui/time-picker-demo";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import InputEdit from "./components/inputEdit";
import useAxiosInstance from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";

const Page = () => {
  const searchParams = useSearchParams();
  const [curso, setCurso] = useState<CursosProps>({} as CursosProps);
  const [loading, setLoading] = useState<boolean>(true);
  const axios = useAxiosInstance();
  const { toast } = useToast();
  const conversionDate = (key: string, key2: string) => {
    return new Date(
      parseFecha(key)["year"],
      parseFecha(key)["month"],
      parseFecha(key)["day"],
      parseInt(key2.split(":")[0]),
      parseInt(key2.split(":")[1])
    );
  };
  const fetchData = async () => {
    try {
      const response = await getCourseById(
        parseInt(searchParams.get("id") as string)
      );
      console.log(response);
      if (response.error) throw new Error("Error");

      setCurso(response);
      setValue("id", response.id);
      setValue("title", response.title);
      setValue("description", response.description);
      setValue("price", response.price);
      setValue("classesNumber", response.classesNumber);
      setValue("disabled", response.disabled);
      setValue(
        "startDate",
        conversionDate(response.startDate, response.startTime)
      );
      setValue("endDate", conversionDate(response.endDate, response.endTime));
      // setValue(
      //   "startTime",
      //   conversionDate(response.startDate, response.startTime)
      // );
      // setValue("endTime", conversionDate(response.endDate, response.endTime));
    } catch (error) {
      throw new Error("Error");
    } finally {
      setLoading(false);
    }
  };
  if (searchParams.get("id") === null) throw new Error("Error");
  useEffect(() => {
    fetchData();
  }, []);
  const { setValue, register, watch, handleSubmit } = useForm({});
  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("/v1/course/update", data);
      if (response.data.error) throw new Error("Error");
      toast({
        title: "Curso actualizado",
        description: "El curso se ha actualizado correctamente",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Error al actualizar curso",
        description: "Intente nuevamente",
        duration: 3000,
      });
    }
    console.log(data);
  };
  const handleTIme = (date: Date | undefined) => {
    setValue("startTime", date as Date);
  };
  const handleTIme2 = (date: Date | undefined) => {
    setValue("endTime", date as Date);
  };
  const handleDate = (date: Date | undefined) => {
    setValue("startDate", date as Date);
    setValue("endDate", null);
  };
  const handleDate2 = (date: Date | undefined) => {
    setValue("endDate", date as Date);
  };
  const parseFecha = (str: string) => {
    if (!str) return { year: 0, month: 0, day: 0 };
    const date = str.split("-");
    return {
      year: parseInt(date[0]),
      month: parseInt(date[1]) - 1,
      day: parseInt(date[2]),
    };
  };
  if (loading) return <p>Cargando...</p>;

  return (
    <form className="bg-white h-full w-full py-14 flex flex-col gap-y-5 ">
      <div className="flex flex-row items-center relative w-5/6 mx-auto bg-gray-100 rounded-xl p-5 drop-shadow-md">
        <Image
          src={curso.media}
          className="object-contain rounded-full h-52 w-52 bg-gray-300"
          alt="curso"
          width={200}
          height={200}
        />
        <h1 className="text-gray-900 text-4xl font-semibold ">
          {watch("title")}
        </h1>
      </div>
      <div className="w-5/6 mx-auto bg-gray-100 rounded-xl drop-shadow-md p-5 grid lg:grid-cols-2 gap-5">
        <InputEdit label="Titulo">
          <Input {...register("title")} />
        </InputEdit>
        <InputEdit label="Descripción">
          <Textarea {...register("description")} />
        </InputEdit>
        <InputEdit label="Fecha de inicio">
          <DatePicker
            date={watch("startDate") as Date}
            setDate={handleDate}
            className={"rounded-md text-gray-900"}
          />
        </InputEdit>
        <InputEdit label="Fecha de finalización">
          <DatePicker
            date={watch("endDate") as Date}
            minDate={new Date(watch("startDate")).setDate(
              new Date(watch("starDate")).getDate() + 1
            )}
            setDate={handleDate2}
            className={"rounded-md text-gray-900"}
          />
        </InputEdit>
        <InputEdit label="Precio">
          <Input {...register("price")} />
        </InputEdit>
        <InputEdit label="Número de asistentes">
          <Input {...register("classesNumber")} />
        </InputEdit>
        <InputEdit label="Estado del curso ">
          <div className="flex items-center gap-x-2">
            <Switch
              checked={!watch("disabled")}
              onCheckedChange={(e) => {
                console.log(e);
                setValue("disabled", !watch("disabled"));
              }}
            />
            <p>{watch("disabled") ? "Inactivo" : "Activo"}</p>
          </div>
        </InputEdit>

        {/* TODOL:PREGUNTARLE A VICENTE */}

        {/* <InputEdit label="Hora de inicio">
          <TimePickerDemo date={watch("startTime")} setDate={handleTIme} />
        </InputEdit>
        <InputEdit label="Hora de finalización">
          <TimePickerDemo date={watch("endTime")} setDate={handleTIme2} />
        </InputEdit> */}
        <div className="flex flex-row col-span-2 justify-end gap-x-3">
          <Button variant={"outline"} className="text-gray-700">
            Cancelar
          </Button>
          <Button type="button" onClick={handleSubmit(onSubmit)}>
            Guardar
          </Button>
        </div>
      </div>
    </form>
  );
};
export default Page;
