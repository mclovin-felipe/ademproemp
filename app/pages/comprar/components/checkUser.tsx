"use client";
import { useForm } from "react-hook-form";
import InputCompra from "./inputCompra";
import classNames from "classnames";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getAlumno, getUserByRut } from "@/services/users";
import { getUserByID } from "@/app/dashboard/services/users";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch } from "@/hooks/hook";
import { setUser, setRut } from "@/redux/slices/user";
const CheckUser = ({
  setStep,
  dashboard = false,
}: {
  setStep: any;
  dashboard?: boolean;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  interface IFormInput {
    rut: string;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({});
  const dispatch = useAppDispatch();
  const onSubmit = (data: IFormInput) => {
    console.log(data);
    CheckRut(data.rut);
    // setStep(2);
  };
  // AUTO FORMAT RUT xxxxxxxx-x On change
  const formatRut = (e: any) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{1,8})(\d{0,1})/, "$1-$2");
    e.target.value = value;
    return e;
  };
  const CheckRut = async (rut: string) => {
    setLoading(true);
    try {
      const response = await getAlumno(rut);
      console.log(response);

      if (response.error) {
        throw response;
      }
      dispatch(setUser(response.data));
      console.log("LISTO");
      setStep(3);
    } catch (error: any) {
      if (error?.response?.data?.message === "USER_NOT_FOUND") {
        dispatch(setRut(rut));
        setStep(2);
      }
      // toast({
      //   title: "Error",
      //   description: "El rut no se encuentra registrado",
      // });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="animate-fadeIn flex flex-col gap-y-3 mt-5">
      {!dashboard && (
        <h1 className="text-2xl font-semibold">Antes de comprar</h1>
      )}
      {!dashboard && <p>Por favor indicanos tu rut</p>}
      <InputCompra label="RUT">
        <Input
          className={classNames("border ", {
            "border-red-500": errors.rut,
            "border-gray-300 ": !errors.rut,
          })}
          placeholder="11111111-1"
          {...register("rut", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            pattern: {
              value: /^[0-9]+[-|‐]{1}[0-9kK]{1}$/,
              message: "El rut no es valido",
            },
            maxLength: {
              value: 12,
              message: "El rut no es valido",
            },
          })}
        />
        <p>{errors.rut?.message}</p>
      </InputCompra>
      <Button onClick={handleSubmit(onSubmit)}>Buscar</Button>
      {!dashboard && (
        <Button variant={"outline"} onClick={() => router.back()}>
          Volver
        </Button>
      )}
    </div>
  );
};
export default CheckUser;
