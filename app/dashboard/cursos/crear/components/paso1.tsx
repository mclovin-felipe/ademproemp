import { Input } from "@/components/ui/input";
import InputCurso from "./inputCurso";
import { Button } from "@/components/ui/button";
import { Pasos } from "../types";
import Image from "next/image";

import { DatePicker } from "@/components/ui/datapicker";
import { Textarea } from "@/components/ui/textarea";
import { TimePickerDemo } from "@/components/ui/time-picker-demo";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { IFSTEP1 } from "@/types/course/steps";
const Paso1 = ({ setStep, HandlerStep }: Pasos) => {
  const [file, setFile] = useState<any>("");
  const [fileError, setFileError] = useState<boolean>(false);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    setError,
    formState: { errors, isValidating, isSubmitted, isDirty },
  } = useForm<IFSTEP1>({
    defaultValues: {
      media: "",
      price: 1000,
    },
  });

  useEffect(() => {
    if (watch("media") === "") {
      return;
    }
    console.log(watch("media"));
    setFile(URL.createObjectURL(watch("media")));
  }, [watch("media")]);
  const onSubmit = (data: IFSTEP1) => {
    console.log(data, "aca");
    setStep(data);
    HandlerStep(1);
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

  return (
    <div className="flex flex-col gap-y-5 w-full  border border-gray-800 rounded-2xl p-5 ">
      <h1 className="col-span-2 text-4xl font-semibold">Detalle del curso</h1>
      <div className="grid lg:grid-cols-4 gap-x-8">
        <div
          className={classNames(
            "bg-[#282626] w-full col-span-4 lg:col-span-1 rounded-2xl flex flex-col justify-center items-center p-10 lg:p-0 relative",
            {
              "border-red-800 border": fileError,
            },
          )}
        >
          {watch("media") !== "" ? (
            <>
              <Image alt="asdsa" fill className="object-contain" src={file} />
              <Button
                className="absolute bottom-2 z-40"
                onClick={() => {
                  setValue("media", "", { shouldValidate: true });
                }}
              >
                Cambiar
              </Button>
            </>
          ) : (
            [
              // <Image key={0} size={70} />,
              <input
                key={1}
                type="file"
                accept="image/*"
                className="w-1/2"
                onChange={(e) => {
                  if (e?.target?.files) {
                    setValue("media", e.target.files[0]);
                  }
                }}
                placeholder="Seleccionar imagen"
              />,

              <p key={2}>
                Dejar o <span className="text-primary">buscar</span>
              </p>,
              <p key={3} className="text-gray-600">
                PNG, JPEG (max 4mb)
              </p>,
            ]
          )}
        </div>
        <div className="col-span-3 flex flex-col gap-y-5">
          <span>Titulo del curso</span>

          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <span>Categoria de curso</span>
              <InputCurso>
                <Input
                  {...register("title", {
                    required: {
                      value: true,
                      message: "El titulo es requerido",
                    },
                  })}
                  placeholder={"Titulo del curso"}
                  className={classNames("bg-dashboard rounded-full h-12 ", {
                    "border-red-800 border": errors.title,
                  })}
                />
                {errors.title && <p>{errors.title.message}</p>}
              </InputCurso>
            </div>
            <div>
              <span>Fecha de inicio</span>
              <DatePicker
                date={watch("startDate")}
                setDate={handleDate}
                name={"startDate"}
                className={classNames("bg-dashboard  ", {
                  "border-red-800 border": errors.startDate,
                })}
              />
            </div>
            <div>
              <span>Fecha de finalización</span>
              <DatePicker
                delta={120000}
                date={watch("endDate")}
                minDate={new Date(watch("startDate")).setDate(
                  new Date(watch("startDate")).getDate() + 1,
                )}
                setDate={handleDate2}
                name={"endDate"}
                className={classNames("bg-dashboard  ", {
                  "border-red-800 border": errors.endDate,
                })}
              />
            </div>
            <div className="col-span-2">
              <span>Descripción del curso</span>
              <Textarea
                {...register("description", {
                  required: {
                    value: true,
                    message: "La descripción es requerida",
                  },
                })}
                className={classNames("bg-dashboard border-0 ", {
                  "border-red-800 border": errors.description,
                })}
                placeholder={"Descripción del curso"}
              />
              {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div>
              <span>Numero de asistentes</span>
              <InputCurso>
                <Input
                  {...register("classesNumber", {
                    required: {
                      value: true,
                      message: "El numero de asistentes es requerido",
                    },
                    min: {
                      value: 5,
                      message: "El numero de asistentes debe ser mayor a 5",
                    },
                  })}
                  type={"number"}
                  maxLength={10}
                  minLength={1}
                  placeholder={"Numero de asistentes"}
                  className={classNames("bg-dashboard rounded-full h-12 ", {
                    "border-red-800 border": errors.classesNumber,
                  })}
                />
                {errors.classesNumber && <p>{errors.classesNumber.message}</p>}
              </InputCurso>
            </div>
            <div>
              <span>Precio del curso</span>
              <InputCurso>
                <Input
                  {...register("price", {
                    required: {
                      value: true,
                      message: "El precio es requerido",
                    },
                    min: {
                      value: 1000,
                      message: "El precio debe ser mayor a 1000",
                    },
                  })}
                  minLength={1}
                  placeholder={"Precio del curso"}
                  className={classNames("bg-dashboard rounded-full  h-12", {
                    "border-red-800  border": errors.price,
                  })}
                />
                {errors.price && <p>{errors.price.message}</p>}
              </InputCurso>
            </div>
            <div>
              <span>Hora de inicio</span>
              <InputCurso>
                <TimePickerDemo
                  date={watch("startTime")}
                  setDate={handleTIme}
                />
              </InputCurso>
            </div>
            <div>
              <span>Hora de finalización</span>
              <InputCurso>
                <TimePickerDemo date={watch("endTime")} setDate={handleTIme2} />
              </InputCurso>
            </div>
          </div>
          <div className="flex flex-row gap-x-5 justify-end bottom-0">
            <Button size={"lg"} type="button" variant={"dashboardOutline"}>
              Cancelar
            </Button>
            <Button
              // onClick={() => HandlerStep(1)}
              // disabled={!isValidating}
              onClick={handleSubmit(onSubmit)}
              size={"lg"}
              type="button"
              variant={"dashboard"}
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso1;
