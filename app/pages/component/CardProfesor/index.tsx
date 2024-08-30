import { CursosProps } from "@/types/cursos";
import { User } from "@/types/user";

const CardProfesor = (props: User) => {
  const ShortText = (text: string) => {
    if (typeof text !== "string") return "";
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    }
    return text;
  };
  return (
    <div className="rounded-lg  lg:w-auto bg-card p-4 flex flex-col gap-y-3 max-w-[400px] ">
      <img src="/arquitecto.png" alt="Profesor" className="rounded-t-lg" />
      <div className="p-4 break-words">
        <p className="text-lg text-black font-bold">
          {props.firstName + " " + props.lastName}
        </p>
        <p className="text-gray-600">{ShortText(props.email)}</p>
      </div>
    </div>
  );
};

export default CardProfesor;
