import { Button } from "@/components/ui/button";

import ProfesorCard from "./profesorCard";
import Carousel from "@/components/Carousel/EmblaCarousel";
const Profesores = ({ home = true }: { home?: boolean }) => {
  return (
    <div
      className={`${
        home
          ? "bg-gradient-to-r from-[#0E192B] via-[#1E1F22]  to-[#193632]"
          : ""
      }  flex justify-center items-center   py-14 w-full flex-col gap-y-14 px-[14%]`}
    >
      <Button
        variant={"secondary"}
        className={`rounded-full shadow-lg w-36 ${home && "self-start"}`}
      >
        Nuestros cursos
      </Button>
      <h1
        className={`${
          home ? "text-white self-start " : "text-normal"
        } text-4xl `}
      >
        Nustros profesores
      </h1>
      <div className="flex flex-wrap w-4/6 justify-center gap-5">
        <Carousel
          slides={[...Array(3)].map((_, i) => (
            <ProfesorCard home={home} />
          ))}
        />
      </div>
    </div>
  );
};
export default Profesores;
