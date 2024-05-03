import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  User,
  AtomIcon,
  MapPin,
  Search,
  Mail,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  PhoneCall,
  ForwardIcon,
} from "lucide-react";
const NavBar = () => {
  return (
    <nav className="w-full">
      <div className="bg-primary px-[14%] h-12 flex flex-row justify-end items-center">
        <User color={"white"} /> <Button>Ingresar/Registrar</Button>
      </div>
      <div className="w-5/6 h-32 mx-auto flex justify-between items-center flex-row">
        <AtomIcon size={"80"} />
        <Button className="flex flex-row gap-x-3 " variant={"link"}>
          <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-full">
            <MapPin color={"white"} />
          </div>
          <div className="flex flex-col  items-start justify-center">
            <h2 className="text-primary text-lg">Ubicanos</h2>
            <h2 className="text-gray-400 text-lg">Direccion</h2>
          </div>
        </Button>
        <div className="w-0.5 h-14 bg-gray-500"></div>
        <Button className="flex flex-row gap-x-3 " variant={"link"}>
          <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-full">
            <Mail color={"white"} />
          </div>
          <div className="flex flex-col  items-start justify-center">
            <h2 className="text-primary text-lg">Dirección Email</h2>
            <h2 className="text-gray-400 text-lg">Direccion</h2>
          </div>
        </Button>
        <div className="w-1/4 h-14 flex flex-row`">
          <Input className="h-14 bg-primary/10" placeholder="Buscar" />
          <Button className="h-full -ml-3">
            <Search color="white" />
          </Button>
        </div>
      </div>
      <div className="text-white px-8 font-semibold h-20 bg-primary w-5/6 mx-auto rounded-2xl flex items-center justify-between transform skew-x-[-10deg]">
        <div className="skew-x-[10deg]">Hola</div>
        <div className="skew-x-[10deg]">Hola</div>
        <div className="skew-x-[10deg]">Hola</div>
        <div className="skew-x-[10deg]">Hola</div>
        <div className="skew-x-[10deg]">Hola</div>
        <div className="skew-x-[10deg]">Hola</div>
        <div className="skew-x-[10deg] flex flex-row gap-x-3">
          <Button className="w-10 h-8 p-0" variant={"secondary"}>
            <FacebookIcon />
          </Button>
          <Button className="w-10 h-8 p-0" variant={"secondary"}>
            <InstagramIcon />
          </Button>
          <Button className="w-10 h-8 p-0" variant={"secondary"}>
            <XIcon />
          </Button>
        </div>
        <div className="flex flex-row">
          <PhoneCall />
          <h3 className="font-semibold">+56 987878723</h3>
        </div>
        <Button
          className="flex flex-row h-14 w-2/12  gap-x-3"
          variant={"secondary"}
        >
          <h1 className="skew-x-[10deg]">Inscribete</h1>
          <ForwardIcon />
        </Button>
      </div>
    </nav>
  );
};
export default NavBar;
