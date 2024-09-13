import CheckUser from "@/app/pages/comprar/components/checkUser";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import CreateUser from "@/app/pages/comprar/components/createUser";
import Cursos from "./cursos";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/hook";
import { setReset } from "@/redux/slices/user";
import Review from "./review";
const InscribirUsuario = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [step, setStep] = React.useState<number>(1);
  const [curso, setCurso] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setReset());
    setStep(1);
    setCurso(0);
  }, [isOpen]);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="dashboardOutline">Inscribir Usuario</Button>
      </DialogTrigger>
      <DialogContent className="bg-dashboard text-white border-none ">
        <DialogHeader className="flex flex-col space-y-3 text-center sm:text-left">
          <DialogTitle>Inscribir un usuario existente</DialogTitle>
          <DialogDescription>
            Aqui puedes editar los datos de tu usuario.
          </DialogDescription>
        </DialogHeader>
        {step === 1 && <CheckUser setStep={setStep} dashboard={true} />}
        {step == 2 && <CreateUser setStep={setStep} />}
        {step == 3 && (
          <Cursos setStep={setStep} selectCurso={curso} setCurso={setCurso} />
        )}
        {step === 4 && <Review setStep={setStep} curso={curso} />}
      </DialogContent>
    </Dialog>
  );
};
export default InscribirUsuario;
