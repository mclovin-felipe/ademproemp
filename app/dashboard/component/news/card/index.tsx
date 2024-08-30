import { Button } from "@/components/ui/button";
import { Article } from "@/types/news";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const CardNew = (props: Article) => {
  return (
    <div className="h-96 w-full bg-gray-600 rounded-md flex flex-col">
      <div className="h-2/3 relative">
        <Image
          src={props.media || ""}
          alt="prueba"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="h-1/3 bg-white rounded-b-md flex flex-col justify-between items-start text-black p-3">
        <h1 className="font-semibold">{props.title}</h1>
        <Link href={`/dashboard/noticias/editar/${props.id}`}>
          <Button className="gap-x-4" variant={"ghost"}>
            <ArrowRightIcon />
            Editar
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default CardNew;
