import { Article } from "@/types/news";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const CardBlog = (props: Article) => {
  return (
    <div className="flex flex-col gap-y-3 border rounded-lg  max-w-[400px]">
      <img
        src={props.media || ""}
        alt="imagen"
        className="w-full h-[300px] object-cover"
      />
      <div className="flex flex-col gap-y-3 justify-between p-5">
        <p className="text-3xl font-bold">{props.title}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          accusantium quasi repellendus, asperiores recusandae cumque qui
          corporis dolore.
        </p>
        <Link
          href={`/pages/noticias/${props.id}`}
          className="flex flex-row items-center gap-x-3 bg-adem lg:w-1/3 xl:w-1/2 justify-center rounded-lg py-2 px-4  font-bold cursor-pointer"
        >
          Leer más
          <ArrowRight name="mdi:arrow-right" />
        </Link>
      </div>
    </div>
  );
};
export default CardBlog;
