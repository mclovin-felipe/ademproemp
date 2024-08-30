"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Profesor } from "@/types/profesores";
import { getUsersByRol } from "@/services/users";
import { getCategories } from "@/app/dashboard/services/course";
import { Category } from "@/types/cursos";
import Days from "./days";
import { IFSTEP2 } from "@/types/course/steps";
import { useForm } from "react-hook-form";
async function getCategory(): Promise<Category[]> {
  const data = await getCategories();
  console.log(data, "data");
  return data;
}
async function getData(): Promise<Profesor[]> {
  try {
    // Simular la obtención de datos de una API.
    const data = await getUsersByRol(2);
    console.log(data, "data");
    if (data.message === "USER_NOT_FOUND") return [];
    return data.data;
  } catch (error) {
    return [];
  }
}

const Paso2 = ({
  HandlerStep,
  setStep,
}: // watch,
{
  HandlerStep: (step: number) => void;
  setValues: any;
  watch: any;
  setStep: any;
}) => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFSTEP2>();
  const [data, setData] = useState<Profesor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };
    fetchData();
    getCategory().then((res) => {
      console.log(res);
      setCategories(res);
    });
  }, []);
  const handleDays = (e: any) => {
    setValue("days", e, { shouldValidate: true });
  };
  const onSubmit = (data: IFSTEP2) => {
    console.log(data, "aca");
    setStep(data);
    HandlerStep(2);
  };

  return (
    <div className="flex flex-col gap-y-5 w-full bg-[#191919] rounded-2xl p-5 min-h-[60vh] ">
      <h1 className="col-span-2 text-4xl font-semibold">
        Seleccionar un profesor
      </h1>
      <p>
        A continuación, se le solicita que el usuario elija un profesor para el
        curso.
      </p>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        [
          <Select
            value={watch("rutProfesor")}
            {...register("rutProfesor", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
            onValueChange={(e) =>
              setValue("rutProfesor", e, {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger className="w-5/6 bg-dashboard border-0">
              <SelectValue placeholder="Selecciona un profesor" />
            </SelectTrigger>
            <SelectContent
              {...register("rutProfesor", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              })}
              onChange={(e: any) => setValue("rutProfesor", e)}
            >
              <SelectGroup>
                <SelectLabel>Profesores</SelectLabel>
                {data.map((item) => (
                  <SelectItem key={item.id} value={item.rut.toString()}>
                    {item.firstName} {item.lastName}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>,
          <Select
            value={watch("categoryId")}
            onValueChange={(e) =>
              setValue("categoryId", e, {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger className="w-5/6 bg-dashboard border-0">
              <SelectValue placeholder="Selecciona una categoria" />
            </SelectTrigger>
            <SelectContent onChange={(e: any) => setValue("categoryId", e)}>
              <SelectGroup>
                <SelectLabel>Categorias</SelectLabel>
                {categories.map((item) => (
                  <SelectItem key={item.id} value={item.id.toString()}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>,
        ]
      )}
      <div className="flex flex-col w-1/2 gap-y-5">
        <span>Dias de la semana</span>
        <Days days={watch("days")} setDays={handleDays} />
      </div>
      <div className="flex flex-row gap-x-5 justify-end self-end bottom-0">
        <Button
          size="lg"
          onClick={() => HandlerStep(0)}
          variant="dashboardOutline"
        >
          Volver
        </Button>
        <Button onClick={handleSubmit(onSubmit)} size="lg" variant="dashboard">
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Paso2;
