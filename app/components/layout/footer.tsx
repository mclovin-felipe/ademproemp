import { routes } from "@/app/routes/routes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Footer = () => {
  return [
    <div
      key={0}
      className="w-full bg-gradient-to-r flex-col flex from-[#062B37] via-[#061432] to-[#06282E] pt-32  text-white"
    >
      <div className="hidden py-5  w-4/6 h-44 bg-white border flex-col lg:flex lg:flex-row justify-between px-[5%] items-center shadow-md rounded-2xl absolute  mx-auto self-center -mt-[13rem]">
        <h1 className="text-4xl font-bold  text-black">Inscribete ahora</h1>
        <Button className="text-4xl py-10" size={"lg"}>
          Inscribirse
        </Button>
      </div>

      <div className="w-5/6 mx-auto p-5 lg:p-16 border grid gap-y-14 lg:grid-cols-6 rounded-2xl gap-x-10 border-[#173F40] my-5">
        <div className="flex flex-col justify-between gap-y-3 col-span-2">
          <div>Logo</div>
          <p className="text-sm w-5/6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            ratione vitae ipsa natus. Earum, facere deserunt? Libero maxime rem
            provident, inventore id odit beatae, odio unde veritatis impedit
            velit perspiciatis.
          </p>
          <Button className="w-1/2">Leer más</Button>
        </div>
        <div>
          <h1 className={"text-lg font-bold"}>Acceso rapido</h1>
          <div className="w-1/6 h-1 bg-primary mt-2 "></div>
          <ul className="flex flex-col gap-y-2 mt-5">
            {routes.map((route) => (
              <Link href={route.path}>{route.title}</Link>
            ))}
          </ul>
        </div>
        <div>
          <h1 className={"text-lg font-bold"}>Nuestros cursos</h1>
          <div className="w-1/6 h-1 bg-primary mt-2 "></div>
          <ul className="flex flex-col gap-y-2 mt-5">
            <li>Marketing</li>
            <li>Programación</li>
            <li>Diseño</li>
          </ul>
        </div>
        <div className="col-span-2 w-5/6">
          <h1 className={"text-lg font-bold"}>Encuentranos</h1>
          <div className="w-1/6 h-1 bg-primary mt-2 "></div>
          <div className="flex flex-col gap-y-5 mt-5">
            {[...Array(3)].map((item) => (
              <div className="flex flex-row bg-secondary items-center p-2 gap-x-5 rounded-md  ">
                <div className="h-14 w-14 bg-primary rounded-md  "></div>
                <div className="flex flex-col gap-y-2 justify-center items-start">
                  <h1>Ubicación</h1>
                  <h1 className="font-bold">Calle falsa 123</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    <div
      key={1}
      className="h-16 w-full bg-secondary flex flex-row justify-between items-center px-[14%] text-white"
    >
      <h1>Todos los derechos reservados</h1>
      <div>
        <h1>Terminos y condiciones</h1>
      </div>
    </div>,
  ];
};
export default Footer;
