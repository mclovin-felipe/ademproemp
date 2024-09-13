import { useEffect } from "react";
import { getCourses } from "../../services/course";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CursosProps } from "@/types/cursos";
import { Button } from "@/components/ui/button";
const Curso = ({
  setStep,
  dashboard = false,
  setCurso,
  selectCurso,
}: {
  setStep: any;
  setCurso: any;
  dashboard?: boolean;
  selectCurso: number;
}) => {
  const [cursos, setCursos] = React.useState<CursosProps[]>([]);

  useEffect(() => {
    if (cursos.length === 0) {
      const response = getCourses();
      response
        .then((res) => {
          console.log(res, "popopopo");
          setCursos(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [cursos]);
  if (cursos.length === 0) return <div>Cargando...</div>;
  return (
    <div className="flex flex-col gap-y-3">
      <h1>Cursos</h1>
      <Select value={selectCurso.toString()} onValueChange={(e) => setCurso(e)}>
        <SelectTrigger>
          <SelectValue placeholder={"Selecciona un curso"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Curso</SelectLabel>
            {cursos.map((curso: CursosProps) => (
              <SelectItem value={curso.id.toString()}>{curso.title}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex flex-row justify-end gap-x-3 ">
        <Button onClick={() => setStep(1)} variant={"dashboardOutline"}>
          volver
        </Button>
        <Button onClick={() => setStep(4)} disabled={selectCurso === 0}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};
export default Curso;
