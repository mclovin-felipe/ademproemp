"use client";
import { Button } from "@/components/ui/button";
import Stepper from "./components/stepper";
import { useEffect, useState } from "react";
import Paso1 from "./components/paso1";
import Paso2 from "./components/paso2";
import Paso3 from "./components/paso3";
import Paso4 from "./components/paso4";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CursosProps } from "@/types/cursos";
import { addCourseService } from "../../services/course";
import { format } from "date-fns";
import useAxiosInstance from "@/lib/axios";

const Page = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const axios = useAxiosInstance();
  const HandlerStep = (step: number) => {
    setStep(step);
  };
  const onSubmit = (data: CursosProps) => {
    // CREATE A FORMDATA OBJECT
    let form = new FormData();
    // ADD MEDIA TO FORMDATA
    form.append("media", data.media);
    // CONSOLE LOG FORMDATA
    // let form = new FormData();
    // console.log(data.media);
    // if (data.media instanceof File) {
    //   form.append("media", data.media);
    //   console.log("aca");
    // } else {
    //   console.error("El campo 'media' no es un archivo válido.");
    //   return;
    // }
    let newData = {
      ...data,
      endTime: format(data.endTime as unknown as Date, "HH:mm"),
      startTime: format(data.startTime as unknown as Date, "HH:mm"),
      media: data.media,
    };
    delete newData.media;
    form.append("json", JSON.stringify(newData));
    // // console.log("FormData antes de enviar:", form);
    axios
      .post("/v1/course/create", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (!res.data.error) {
          HandlerStep(3);
        }
      })
      .catch((err) => {
        console.log(err, "errorrr");
      });
    // axios
    //   .post("/api/course/addCourse", newData)
    //   .then((res) => {
    //     console.log(res);
    //     if (!res.data.error) {
    //       HandlerStep(3);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<CursosProps>({
    defaultValues: {
      media: "",
      title: "",
      description: "",
      disabled: false,
      days: [],
    },
  });
  useEffect(() => {
    console.log(watch("media"));
  }, [watch("media")]);
  const setStep1 = (data: CursosProps) => {
    setValue("title", data.title);
    setValue("description", data.description);
    setValue("price", data.price);
    setValue("media", data.media);
    setValue("startDate", data.startDate);
    setValue("endDate", data.endDate);
    setValue("classesNumber", data.classesNumber);
    setValue("startTime", data.startTime);
    setValue("endTime", data.endTime);
  };
  const setStep2 = (data: CursosProps) => {
    setValue("categoryId", data.categoryId);
    setValue("rutProfesor", data.rutProfesor);
    setValue("days", data.days);
  };
  return (
    <>
      <form>
        <Stepper step={step} />
        {step === 0 && (
          <Paso1
            setStep={setStep1}
            watch={watch}
            errors={errors}
            register={register}
            setValues={setValue}
            HandlerStep={HandlerStep}
          />
        )}
        {step === 1 && (
          <Paso2
            setStep={setStep2}
            // errors={errors}
            watch={watch}
            setValues={setValue}
            HandlerStep={HandlerStep}
          />
        )}
        {step === 2 && (
          <Paso3
            HandlerStep={HandlerStep}
            watch={getValues}
            handleSubmit={handleSubmit(onSubmit)}
          />
        )}
        {step === 3 && <Paso4 />}
      </form>
    </>
  );
};
export default Page;
