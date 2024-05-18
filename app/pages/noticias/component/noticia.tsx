import { ArrowRight, Timer, User } from "lucide-react";
import ImagePrueba from "@/app/components/layout/Image";
import { NoticiaCardProps } from "../types/noticiaCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Noticia = ({
  fecha,
  autor,
  titulo,
  descripcion,
  imagen,
  link,
}: NoticiaCardProps) => {
  return (
    <div className="h-[35rem] w-full rounded-lg bg-[#F6F7FB] flex flex-col justify-between border drop-shadow-md">
      <div className="2xl:h-96 w-full relative h-80">
        <ImagePrueba />
      </div>

      <div className=" h-3/5 w-full justify-between flex  flex-col p-10">
        <div className="flex flex-row gap-x-10">
          <div className="flex flex-row gap-x-3 items-center">
            <Timer size={15} />
            <h1>{fecha}</h1>
          </div>
          <div className="flex flex-row gap-x-3 items-center">
            <User size={15} />
            <h1>{autor}</h1>
          </div>
        </div>

        {/* TITULO */}
        <h1 className="font-bold text-4xl text-left">{titulo}</h1>
        <p>{descripcion}</p>
        <Link href={"/noticias/noticia/" + link}>
          <Button
            variant={"ghost"}
            className="flex w-1/6  flex-row gap-x-5 items-center"
          >
            <ArrowRight size={30} />
            <p>Leer más</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Noticia;
