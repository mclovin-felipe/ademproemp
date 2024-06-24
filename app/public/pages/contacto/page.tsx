import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Header } from "../../component";
const Page = () => {
  return (
    <main className={""}>
      <Header title="Contacto" />
      <div className="grid lg:mt-14 lg:grid-cols-5 bg-adem lg:w-4/6 mx-auto rounded-lg border 5xl:max-w-[80vh] bg-card">
        <div className="hidden col-span-2 lg:flex text-center bg-white relative">
          <img src="/laptop-table.jpg" className="w-full object-cover" />
        </div>
        <div className="col-span-3 flex flex-col justify-between p-10 min-h-[50vh]">
          {/* <Badge text={"Contactanos"} /> */}
          <h1 className="text-4xl font-bold text-gray-600 ">
            Formulario de contacto
          </h1>
          <div className="flex flex-row justify-between gap-x-5">
            <Input
              type="text"
              className="w-full p-3 rounded-lg"
              placeholder="Nombre"
            />
            <Input
              type="text"
              className="w-full p-3 rounded-lg"
              placeholder="Apellido"
            />
          </div>
          <Input
            type="text"
            className="w-full p-3 rounded-lg"
            placeholder="Email"
          />
          <Textarea
            className="w-full p-3 rounded-lg"
            placeholder="Mensaje"
          ></Textarea>
          <Button className=" text-white rounded-lg ">Enviar</Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-7 w-full lg:flex-row justify-between lg:w-4/6 mx-auto mt-14">
        <div className="flex flex-row justify-between border text-4xl items-center py-5 px-10 rounded-lg">
          <Facebook name="mdi:facebook" className={"h-16 w-16"} />
          <p>Facebook</p>
        </div>
        <div className="flex flex-row border justify-between text-4xl items-center py-5 px-10 rounded-lg">
          <Instagram name="mdi:instagram" className={"h-16 w-16"} />
          <p>Instagram</p>
        </div>
        <div className="flex flex-row border justify-between text-4xl items-center py-5 px-10 rounded-lg">
          <Twitter name="mdi:twitter" className={"h-16 w-16"} />
          <p>Twitter</p>
        </div>
      </div>
    </main>
  );
};
export default Page;
