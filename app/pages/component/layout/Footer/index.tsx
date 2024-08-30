import { routes } from "@/app/routes/routes";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer w-full bg-gradient-to-r pt-14 from-[#193632] via-[#1E1F22] to-[#0E192B] text-white">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-24 mb-5 gap-y-5 lg:mx-40 py-10 border border-[#193632] rounded-lg p-5">
        <div className="flex flex-col justify-between col-span-2 gap-y-5">
          <h1>Logo</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            quaerat earum ex dolorum, ducimus iste sint odit reiciendis saepe
            soluta amet, atque et, assumenda autem necessitatibus fugit quod id
            eligendi?
          </h2>
          <Link href="/contacto" className="w-full">
            <Button className=" h-14 px-4 w-full rounded-lg">
              <PhoneCall className="mr-2" />
              Contactanos
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-xl font-bold">Acceso rapido</h1>
          <div className="w-1/5 bg-adem rounded-full h-0.5"></div>
          {routes.map((route) => (
            <Link href={route.path} key={route.path}>
              {route.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-y-4 col-span-2">
          <h1 className="text-xl font-bold">Encuentranos</h1>
          <div className="w-1/5 bg-adem rounded-full h-0.5"></div>
          <div className="w-full rounded-lg bg-slate-800 p-3 flex flex-row gap-x-5">
            <div className="w-14 h-14 bg-adem rounded-lg"></div>
            <div className="flex flex-col gap-y-1">
              <p className="text-white">Felipe Ponce</p>
              <p className="text-white">Estudiante</p>
            </div>
          </div>
          <div className="w-full rounded-lg bg-slate-800 p-3 flex flex-row gap-x-5">
            <div className="w-14 h-14 bg-adem rounded-lg"></div>
            <div className="flex flex-col gap-y-1">
              <p className="text-white">Felipe Ponce</p>
              <p className="text-white">Estudiante</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 py-5 w-full flex flex-col gap-y-3 lg:flex-row justify-between text-white px-[14%] lg:px-[20%]">
        <h1>Todos los derechos reservados</h1>
        <h1>Copyright © {new Date().getFullYear()}</h1>
        <h1>Terminos de uso</h1>
      </div>
    </footer>
  );
};
export default Footer;
