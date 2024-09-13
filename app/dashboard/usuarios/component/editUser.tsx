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
import useAxiosInstance from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";
import { RevalidateDashboard } from "@/services/revalidate";

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
      disabled: true,
    },
  });
  const axios = useAxiosInstance();
  const { toast } = useToast();
  const onSubmit = async (data: User) => {
    console.log(data);
    try {
      const response = await axios.post("/v1/user/update", data);
      if (response.data.error) {
        toast({
          title: "Error",
          description: response.data.message,
        });
      } else {
        toast({
          title: "Usuario actualizado",
          description: "Usuario actualizado con éxito",
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Ocurrio un error",
      });
    }
  };

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
          className="grid lg:grid-cols-2  gap-y-2 bg-[#191919] rounded-2xl p-2  "
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
              disabled={true}
              value={user.rolId.toString()}
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
