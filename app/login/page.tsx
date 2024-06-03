"use client";
import { Button } from "@/components/ui/button";
import InputEdit from "../dashboard/usuarios/component/InputEdit";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import onMount from "../hook/useMount";
const Page = () => {
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  onMount(() => {
    setVisible(true);
  });
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-6 h-screen w-full">
      <div className=" h-1/2 lg:h-full col-span-4 w-full bg-black drop-shadow-2xl flex flex-col justify-center items-center  ">
        <Link className="absolute self-start top-0 m-5 flex gap-x-3" href="/">
          <Button variant={"dashboardOutline"}>
            <ArrowLeft /> Volver
          </Button>
        </Link>
        <h1 className="text-3xl lg:text-5xl 2xl:text-9xl text-white font-semibold break-words tracking-[.20em] ">
          Bienvenido
        </h1>
        <p className="text-white text-md lg:text-2xl font-semibold mt-4">
          A la plataforma de manejo educativo
        </p>
      </div>
      <div className="flex flex-col justify-center items-center col-span-2 h-full w-full  p-14 lg:p-5  ">
        <div
          className={`bg-dashboard p-4 rounded-2xl text-white w-full transition-all duration-1000
            ease-out ${visible ? "opacity-100" : "opacity-0"}  drop-shadow-2xl`}
        >
          <form className="flex flex-col  bg-black rounded-2xl p-4">
            <InputEdit
              title={"Correo"}
              register={register}
              errors={errors}
              name={"email"}
              placeholder={"Correo"}
              rules={{}}
            />
            <InputEdit
              title={"Contraseña"}
              register={register}
              errors={errors}
              name={"password"}
              placeholder={"Contraseña"}
              rules={{}}
            />
            <Button
              title={"Iniciar sesión"}
              onClick={handleSubmit((data) => console.log(data))}
              className="mt-4"
              variant={"dashboard"}
            >
              Iniciar sesión
            </Button>
            <Button
              title={"Registrarse"}
              onClick={() => console.log("Registrarse")}
              className="mt-4"
              variant={"dashboardOutline"}
            >
              Registrarse
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Page;
