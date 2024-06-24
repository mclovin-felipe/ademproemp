"use client";
import { Button } from "@/components/ui/button";
import Stepper from "./components/stepper";
import { useState } from "react";
import Paso1 from "./components/paso1";
import Paso2 from "./components/paso2";
import Paso3 from "./components/paso3";
import Paso4 from "./components/paso4";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CursosProps } from "@/types/cursos";
const Page = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const HandlerStep = (step: number) => {
    setStep(step);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CursosProps>({
    defaultValues: {
      nombre: "",
      descripcion: "",
      categoria: "",
      precio: 0,
      duracion: "0",
      imagen: "",
    },
  });

  return (
    <>
      <form>
        <Stepper step={step} />
        {step === 0 && (
          <Paso1
            watch={watch}
            errors={errors}
            register={register}
            setValues={setValue}
            HandlerStep={HandlerStep}
          />
        )}
        {step === 1 && (
          <Paso2
            // errors={errors}
            HandlerStep={HandlerStep}
          />
        )}
        {step === 2 && <Paso3 HandlerStep={HandlerStep} />}
        {step === 3 && <Paso4 />}
        {/* <div className="flex flex-row justify-between">
        {" "}
        {step <= 2 && (
          <Button
            className="w-1/3 bg-black"
            variant={"outline"}
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            Anterior
          </Button>
        )}
        {step < 2 && (
          <Button
            className="w-1/3"
            variant={"default"}
            disabled={step === 2}
            onClick={() => setStep(step + 1)}
          >
            Siguiente
          </Button>
        )}
        {step === 2 && (
          <Button
            className="w-1/3"
            variant={"default"}
            onClick={() => setStep(step + 1)}
          >
            Crear curso
          </Button>
        )}
        {step === 3 && (
          <Button
            className="w-1/3 mx-auto"
            variant={"default"}
            onClick={() => router.push("/dashboard/cursos")}
          >
            Ver cursos
          </Button>
        )}
      </div> */}
      </form>
    </>
  );
};
export default Page;
