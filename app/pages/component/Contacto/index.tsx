import { Button } from "@/components/ui/button";
import Link from "next/link";
const Contacto = () => {
  return (
    <div
      className="w-full 5xl:h-[30vh] flex flex-col gap-y-3 items-center justify-center bg-cover object-center bg-fixed bg-no-repeat bg-gray-200 p-5 lg:p-0"
      style={{ backgroundImage: "url('/contact.jpg')" }}
    >
      <div className="lg:h-96 py-4 lg:py-0 w-full flex flex-col lg:flex-row gap-y-3 lg:justify-between items-center lg:px-52 text-center lg:text-left text-white ">
        <div className="">
          <h1 className="text-xl">
            Somos la respuesta a tus preguntas las 24/7
          </h1>
          <p className="text-4xl font-bold">Necesitas ayuda?</p>
        </div>
        <Link href={"/pages/contacto"}>
          <Button size={"lg"} className=" h-14  rounded-lg text-lg">
            Contactanos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Contacto;
