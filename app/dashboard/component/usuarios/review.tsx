import { getCourseById } from "@/services/course";
import { useEffect } from "react";
import React from "react";
import { useAppSelector } from "@/hooks/hook";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import useAxiosInstance from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";
const Review = ({ setStep, curso }: { setStep: any; curso: number }) => {
  const [cursoData, setCursoData] = React.useState<any>();
  const [enviado, setEnviado] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const { toast } = useToast();
  const user = useAppSelector((state) => state.user);
  const axios = useAxiosInstance();
  const getCourse = async () => {
    const response = await getCourseById(curso);
    console.log(response);
    setCursoData(response.data);
  };
  useEffect(() => {
    getCourse();
  }, []);

  const inscribir = async () => {
    try {
      const response = await axios.post("v1/inscription/createPresencial", {
        userRut: user.rut,
        courseId: curso,
      });
      console.log(response);
      setEnviado(true);
      toast({
        title: "Inscrito",
        description: "Usuario inscrito correctamente",
      });
    } catch (error) {
      setError("Error al inscribir");
      toast({
        title: "Error",
        description: "Error al inscribir usuario",
      });
    }
  };
  if (error) {
    return (
      <div className="p-14 flex justify-center items-center font-semibold text-4xl flex-col">
        {error}
      </div>
    );
  }
  if (cursoData && !enviado) {
    return (
      <div className="grid grid-cols-2 p-3 gap-y-4">
        <h1 className="col-span-2 text-3xl font-semibold">Review</h1>
        <div className="">
          <h2 className="text-xl font-semibold">Curso</h2>
          <p>{cursoData?.title}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Usuario</h2>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
        </div>
        <Button onClick={() => setStep(3)} variant={"dashboardOutline"}>
          Volver
        </Button>
        <Button onClick={() => inscribir()}>Inscribir</Button>
      </div>
    );
  }
  if (enviado) {
    return (
      <div className="p-14 flex justify-center items-center font-semibold text-4xl flex-col">
        <h1>Inscrito</h1>
        <Check size={80} />
      </div>
    );
  }
};
export default Review;
