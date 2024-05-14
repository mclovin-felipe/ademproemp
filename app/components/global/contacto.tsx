import { Button } from "@/components/ui/button";
const Contacto = () => {
  return (
    <div
      className="flex justify-center items-center   h-96 overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg w-full flex-col  "
      style={{ backgroundImage: "url(/jovenes.jpeg)" }}
    >
      <div className="bg-black/70 text-white  h-full w-full flex flex-col lg:flex-row  justify-center lg:justify-between px-[14%] items-start gap-y-5 lg:items-center">
        <div>
          <h1 className="text-xl">
            Somos la respuesta a tus preguntas las 24/7
          </h1>
          <h1 className="text-4xl font-bold mt-5">Necesitas ayuda?</h1>
        </div>
        <Button className="text-xl py-5 px-10 rounded-full">Contactanos</Button>
      </div>
    </div>
  );
};
export default Contacto;
