import { Header } from "@/app/components";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Headset, Mail, MapIcon } from "lucide-react";
const Page = () => {
  return (
    <section>
      <Header image="/profesor.png" titulo="Contacto" />
      <div className="lg:mt-14 grid lg:grid-cols-3 m-auto lg:w-4/6 lg:rounded-2xl  drop-shadow-md ">
        <div className="w-full h-full relative">
          <Image
            src={"/jovenes.jpeg"}
            className="rounded-l-2xl object-cover"
            alt={"jovenes"}
            fill
          />
        </div>
        <div className="lg:rounded-2xl lg:rounded-l-none   lg:rounded-r-2xl col-span-2 py-14 p-10 bg-primary   flex flex-col gap-y-10 text-white ">
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
      <div className=" mt-14 lg:w-4/6 mx-auto gap-x-5  flex flex-col lg:flex-row justify-between items-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="lg:w-1/3 rounded-2xl py-10 px-5  border items-center gap-x-3 justify-center border-gray-100 flex flex-row"
          >
            <Headset size={32} />
            <div className="flex flex-col gap-y-2 text-xl font-bold">
              <h1 className="text-primary">Llamamnos</h1>
              <h1 className="">+569 862568262</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Page;
