"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

import { useForm } from "react-hook-form";
import { User } from "@/types/user";
import { Input } from "@/components/ui/input";
import InputEdit from "./InputEdit";
import { inputs } from "./inputs";
import { Roles } from "../../component/roles";
import { AddUser } from "../../services/users";
import React from "react";
import useAxiosInstance from "@/lib/axios";
const CreateUser = ({ setChange }: { setChange: any }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { toast } = useToast();
  const axios = useAxiosInstance();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,

    formState: { errors, isSubmitting, isDirty },
  } = useForm<User>({
    defaultValues: {
      rolId: 1,
      file: "///",
      disabled: false,
    },
  });
  const onSubmit = (data: User) => {
    let dataSubmit = data;
    let form = new FormData();
    form.append("file", data.file);
    delete (dataSubmit as Partial<User>).file;
    form.append("json", JSON.stringify(dataSubmit));
    axios
      .post("/v1/user/create", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res) {
          if (res.data.error) {
            setLoading(false);
            toast({
              title: "Error al crear usuario",
              description: res.data.message,
              duration: 3000,
            });
            // CLOSE DIALOG

            return;
          }
          setLoading(false);
          toast({
            title: "Usuario creado correctamente",
            description: "",
            duration: 3000,
          });
          // CLOSE DIALOG
        } else {
          setLoading(false);

          toast({
            title: "Error al crear usuario",
            description: "",
            duration: 3000,
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        toast({
          title: "Error al crear usuario",
          description: "Lo sentimos, hubo un error al crear el usuario",
          duration: 3000,
        });
      })
      .finally(() => {
        setIsOpen(false);
        setChange((prev: boolean) => !prev);
      });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="dashboardOutline">Crear usuario</Button>
      </DialogTrigger>
      <DialogContent className="bg-dashboard text-white border-none ">
        <DialogHeader className="flex flex-col space-y-3 text-center sm:text-left">
          <DialogTitle>Editar usuario</DialogTitle>
          <DialogDescription>
            Aqui puedes editar los datos de tu usuario.
          </DialogDescription>
        </DialogHeader>
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200 border-t-gray-300 border-b-gray-300"></div>
            <div className="text-center ml-5">
              <p className="text-gray-500 text-4xl">Cargando ...</p>
            </div>
          </div>
        ) : (
          <form
            className="grid grid-cols-2   gap-y-2 bg-[#191919] rounded-2xl p-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputs.map((item) => (
              <InputEdit
                key={item.name}
                title={item.title}
                register={register}
                errors={errors}
                name={item.name}
                placeholder={item.placeholder}
                rules={item.rules}
              />
            ))}
            <div className="p-2">
              <Roles
                value={watch("rolId").toString()}
                onChange={(id: string) =>
                  setValue("rolId", parseInt(id), {
                    shouldValidate: true,
                    shouldDirty: true,
                  })
                }
              />
            </div>
            <div className="p-2 flex items-start flex-col justify-start">
              <span className="text-sm">Imagen</span>
              <label
                htmlFor="file-upload"
                className="bg-dashboard   rounded-full w-full h-14 flex items-center px-4 text-white"
              >
                Subir imagen
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={(e) => {
                  if (e?.target?.files) {
                    setValue("file", e.target.files[0]);
                  }
                }}
              />
            </div>
            <Button
              type="button"
              className="col-span-2"
              disabled={isSubmitting || !isDirty}
              onClick={handleSubmit(onSubmit)}
              variant="dashboard"
            >
              Guardar
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default CreateUser;
