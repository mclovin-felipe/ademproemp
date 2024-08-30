"use client";
import { Input } from "@/components/ui/input";
import InputCompra from "./inputCompra";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { Alumno } from "@/types/user";
import { createAlumno, getAlumno } from "@/services/users";
import { useToast } from "@/components/ui/use-toast";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { setUser } from "@/redux/slices/user";
const CreateUser = ({ setStep }: { setStep: any }) => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Alumno>({
    defaultValues: {
      rolId: 3,
      disabled: false,
      password: "pipipip",
      rut: user.rut,
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await createAlumno(data);
      console.log(response);
      if (response.error) {
        toast({
          title: "Error",
          description: response.message,
        });
      } else {
        toast({
          title: "Usuario creado",
          description: "Usuario creado con éxito",
        });
        getAlumno(data.rut).then((response) => {
          dispatch(setUser(response.data));
          setStep(3);
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Error al crear el usuario",
      });
    }
  };
  return (
    <div className="animate-fadeIn">
      <h1 className="text-2xl font-semibold">Antes de comprar</h1>
      <p>Te pediremos algunos datos personales</p>
      <div className="grid lg:grid-cols-2 gap-5 mt-5 ">
        <InputCompra label="RUT">
          <Input
            className={classNames("border ", {
              "border-red-500": errors.rut,
              "border-gray-300 ": !errors.rut,
            })}
            placeholder="RUT"
            {...register("rut", { required: true })}
          />
        </InputCompra>
        <InputCompra label="Nombre">
          <Input
            className={classNames("border", {
              " border-gray-300": !errors.firstName,
              " border-red-500": errors.firstName,
            })}
            placeholder="Nombre"
            {...register("firstName", { required: true })}
          />
        </InputCompra>
        <InputCompra label="Apellido">
          <Input
            className={classNames("border", {
              " border-gray-300": !errors.lastName,
              " border-red-500": errors.lastName,
            })}
            placeholder="Apellido"
            {...register("lastName", { required: true })}
          />
        </InputCompra>
        <InputCompra label="Teléfono">
          <Input
            type="number"
            maxLength={9}
            className={classNames("border", {
              " border-gray-300": !errors.phone,
              " border-red-500": errors.phone,
            })}
            placeholder="Teléfono"
            {...register("phone", { required: true })}
          />
        </InputCompra>
        <InputCompra label="Correo">
          <Input
            className={classNames("border", {
              " border-gray-300": !errors.email,
              " border-red-500": errors.email,
            })}
            placeholder="Correo"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
        </InputCompra>
      </div>
      <Button
        onClick={handleSubmit(onSubmit)}
        type="button"
        className="mt-5 w-full"
      >
        Siguiente
      </Button>
    </div>
  );
};
export default CreateUser;
