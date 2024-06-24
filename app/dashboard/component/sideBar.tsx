"use client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
const SideBar = () => {
  const path = usePathname();
  const router = useRouter();
  console.log(path);
  const ButtonSide = ({
    children,
    pathButton,
  }: {
    children: React.ReactNode;
    pathButton: string;
  }) => {
    const Path = () => {
      if (pathButton === "dashboard" && path === "/dashboard") {
        return true;
      }
      if (path.split("/")[2] === pathButton) {
        return true;
      } else {
        return false;
      }
    };
    return (
      <Button
        onClick={() =>
          router.push(
            pathButton === "dashboard"
              ? "/dashboard"
              : "/dashboard/" + pathButton
          )
        }
        variant={"unstyled"}
        className={`rounded-full mx-auto w-14 h-14 lg:w-full  shadow-lg flex flex-row justify-center lg:justify-start lg:gap-x-5 lg:px-5 lg:py-6 transition-all  duration-750 ${
          Path() ? "bg-primary text-black" : " hover:text-primary "
        }`}
      >
        {children}
      </Button>
    );
  };
  return (
    <div className="w-full flex flex-col border-r h-full border-gray-200 border-opacity-30 shadow-md">
      <h1 className="text-2xl text-center mx-auto py-5 font-semibold  hidden lg:flex">
        ADEMPROEM
      </h1>
      <div className="flex flex-col gap-y-5 lg:px-5">
        <ButtonSide pathButton="dashboard">
          <LayoutDashboard /> <span className="hidden lg:flex">Dashboard</span>
        </ButtonSide>
        <ButtonSide pathButton="usuarios">
          <Users /> <span className="hidden lg:flex">Usuarios</span>
        </ButtonSide>
        <ButtonSide pathButton="cursos">
          <Users /> <span className="hidden lg:flex">Cursos</span>
        </ButtonSide>
        <ButtonSide pathButton="profesores">
          <Users /> <span className="hidden lg:flex">Profesores</span>
        </ButtonSide>
        <ButtonSide pathButton="configuracion">
          <Settings /> <span className="hidden lg:flex">Configuración</span>
        </ButtonSide>
      </div>
    </div>
  );
};
export default SideBar;
