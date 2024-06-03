import { Copy } from "lucide-react";

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
import { useForm } from "react-hook-form";
import { User } from "@/types/user";
import { Input } from "@/components/ui/input";
import InputEdit from "./InputEdit";
import { inputs } from "./inputs";
import { Roles } from "../../component/roles";

export function EditUser({ user }: { user: User }) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,

    formState: { errors, isSubmitting, isDirty },
  } = useForm<User>({
    defaultValues: {
      rut: user.rut,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      rolId: user.rolId,
    },
  });
  const onSubmit = (data: User) => console.log(data);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="dashboardOutline">Editar</Button>
      </DialogTrigger>
      <DialogContent className=" bg-dashboard text-white border-none">
        <DialogHeader className="flex flex-col space-y-3 text-center sm:text-left">
          <DialogTitle>Editar usuario</DialogTitle>
          <DialogDescription>
            Aqui puedes editar los datos de tu usuario.
          </DialogDescription>
        </DialogHeader>
        {/*  */}
        <form
          className="grid  gap-y-2 bg-[#191919] rounded-2xl p-2  "
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputs.map((item) => (
            <InputEdit
              title={item.title}
              key={item.name}
              register={register}
              errors={errors}
              name={item.name}
              placeholder={item.placeholder}
              rules={item.rules}
              noVisible={item.noVisible}
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
      </DialogContent>
    </Dialog>
  );
}
