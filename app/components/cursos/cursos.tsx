import Tabs from "../home/tabs";
import { Button } from "@/components/ui/button";
const Cursos = () => {
  return (
    <div className="bg-gradient-to-r from-[#0E192B] flex justify-center items-center  via-[#1E1F22]  to-[#193632] py-14 w-full flex-col gap-y-14">
      <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
        Nuestros cursos
      </Button>
      <h1 className="text-white text-4xl px-5">Nustros mejores cursos</h1>
      <Tabs />
    </div>
  );
};
export default Cursos;
