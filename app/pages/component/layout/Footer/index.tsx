import { routes } from "@/app/routes/routes";
import { Button } from "@/components/ui/button";
import { PhoneCall, MapPin } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer w-full bg-gradient-to-r pt-14 from-[#193632] via-[#1E1F22] to-[#0E192B] text-white">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-24 mb-5 gap-y-5 lg:mx-40 py-10 border border-[#193632] rounded-lg p-5">
        <div className="flex flex-col justify-between col-span-2 gap-y-5">
          <div className="w-24 h-24 relative bg-white flex items-center justify-center rounded-full">
            <img src="/logo.svg" alt="logo" className="w-14 h-14" />
          </div>
          <h2>
            Somos una organización dedicada a ofrecer cursos de alta calidad en
            diversas áreas técnicas y terapéuticas. Nos enfocamos en brindar una
            experiencia de aprendizaje accesible, efectiva y respaldada por
            profesionales con amplia experiencia. Nuestro compromiso es ayudar a
            que cada estudiante alcance sus metas profesionales.
          </h2>
          <Link href="/pages/contacto" className="w-full">
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
            <div className="w-14 h-14 bg-adem rounded-lg flex items-center justify-center">
              <MapPin className="w-10 h-10" />
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-white">Santiago Centro</p>
              <a
                href="https://www.google.com.gt/maps/place/San+Diego+232,+8330309+Santiago,+Regi%C3%B3n+Metropolitana/@-33.4479937,-70.6534371,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c50a2f9d8955:0x75938d93902e15ba!8m2!3d-33.4479982!4d-70.6508622!16s%2Fg%2F11cskjcsw1?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                San Diego 232, oficina 202
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 py-5 w-full flex flex-col items-center gap-y-3 lg:flex-row justify-between text-white px-[14%] lg:px-[20%]">
        <h1>Todos los derechos reservados</h1>
        <h1>Copyright © {new Date().getFullYear()}</h1>
        <Link href={"/pages/terminos-uso"}>
          <h1>Terminos de uso</h1>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
