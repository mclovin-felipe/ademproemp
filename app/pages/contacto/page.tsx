import Header from "@/app/components/layout/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const Page = () => {
  return (
    <section>
      <Header image="/profesor.png" titulo="Contacto" />
      <div className="mt-14 grid md:grid-cols-3 m-auto w-4/6 rounded-2xl  drop-shadow-md ">
        <div className="w-full h-full relative">
          <Image
            src={"/jovenes.jpeg"}
            className="rounded-l-2xl object-cover"
            alt={"jovenes"}
            fill
          />
        </div>
        <div className="rounded-2xl md:rounded-l-none   md:rounded-r-2xl col-span-2 py-14 p-10 bg-primary   flex flex-col gap-y-10 text-white ">
          <Button
            variant={"secondary"}
            className="rounded-full shadow-lg lg:w-1/5 "
          >
            Contactanos
          </Button>
          <h1 className="text-4xl">Formulario de contacto </h1>
          <div className="grid grid-cols-2 gap-5">
            <Input placeholder="Nombre" className="bg-white text-primary" />
            <Input placeholder="Email" className="bg-white text-primary" />
            <Input className="col-span-2 text-primary bg-white" />
            <Textarea
              placeholder="Mensaje"
              className="col-span-2 text-primary bg-white"
            />
          </div>
          <Button variant={"secondary"} className="w-1/2">
            Enviar
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Page;
