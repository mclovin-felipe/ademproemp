import { ArrowRight } from "lucide-react";
const CardBlog = () => {
  return (
    <div className="flex flex-col gap-y-3 border rounded-lg  max-w-[400px]">
      <img
        src="/profesor.png"
        alt="imagen"
        className="w-full h-[300px] object-cover"
      />
      <div className="flex flex-col gap-y-3 justify-between p-5">
        <p className="text-4xl font-bold">Titulo de la noticia</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          accusantium quasi repellendus, asperiores recusandae cumque qui
          corporis dolore.
        </p>
        <a
          href="https://www.google.com"
          className="flex flex-row items-center gap-x-3 bg-adem lg:w-1/3 xl:w-1/2 justify-center rounded-lg py-2 px-4 text-white font-bold cursor-pointer"
        >
          Leer más
          <ArrowRight name="mdi:arrow-right" />
        </a>
      </div>
    </div>
  );
};
export default CardBlog;
