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
const CreateUser = ({ setChange }: { setChange: any }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { toast } = useToast();

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
    },
  });
  const onSubmit = (data: User) => {
    AddUser(data)
      .then((res) => {
        if (res) {
          if (res.error) {
            setLoading(false);
            toast({
              title: "Error al crear usuario",
              description: res.message,
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
        // console.log(err, "resssdddds");
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
      <DialogContent className="bg-dashboard text-white border-none">
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
            className="grid  gap-y-2 bg-[#191919] rounded-2xl p-2"
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

            <Button
              type="button"
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
