"use client";
import Link from "next/link";
import Search from "../../Search";
import LinkNav from "./link";
import { Button } from "@/components/ui/button";
import { routes } from "@/app/routes/routes";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import useScrollBeyondFirstScreen from "@/app/hook/firstScreen";
import { Menu, User2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const isBeyondFirstScreen = useScrollBeyondFirstScreen();
  const [visible, setVisible] = useState(false);
  const path = usePathname();

  const ScrollTop = (callback: () => void) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(callback, 100);
  };
  return (
    <nav>
      {/* <div className="h-44"></div> */}
      <div
        className={classNames(
          "flex flex-row justify-between p-14 transition-all  top-0 left-0 fixed w-full  z-50",
          {
            // fixed: pathname === "/home",
            "bg-background p-8 px-14 rounded-b-lg shadow-lg":
              isBeyondFirstScreen,
          }
        )}
      >
        <div className=" relative">logo</div>

        <Button
          className="lg:hidden"
          onClick={() => {
            ScrollTop(() => setVisible(!visible));
          }}
          variant={"link"}
          size={"icon"}
        >
          <Menu
            className={classNames("transition-all duration-300 ", {
              "text-white": !isBeyondFirstScreen && !visible,
              // "text-primary": isBeyondFirstScreen && !visible,
              "text-primary rotate-90": visible,
            })}
          />
        </Button>

        <div className="hidden lg:flex flex-row gap-x-8 items-center">
          {routes.map((route) => (
            <LinkNav
              action={isBeyondFirstScreen}
              key={route.path}
              href={route.path}
              title={route.title}
            />
          ))}
          <Button
            onClick={() => router.push("/dashboard")}
            className={classNames(
              "shadow-lg border  border-white rounded-full",
              {
                "bg-transparent text-white": !isBeyondFirstScreen,
                "bg-primary text-white": isBeyondFirstScreen,
              }
            )}
          >
            Login
          </Button>
        </div>
      </div>
      <div
        className={classNames(
          "lg:hidden  transition-all duration-500 flex flex-col items-center gap-y-5 justify-between  px-5",
          {
            "h-screen pt-36 pb-14 ": visible,
            "h-0": !visible,
          }
        )}
      >
        <div
          className={classNames("flex flex-row w-full ", { hidden: !visible })}
        >
          <div className="flex flex-col animate-fadeIn">
            <h1 className="text-xl font-semibold">ADEMPROEM</h1>
            <h1 className="text-md text-gray-500">
              Agrupación de monitores Pro Emprendimiento
            </h1>
          </div>
        </div>
        <div
          className={classNames(
            "grid grid-cols-3 w-full mx-auto gap-10 h-1/2   items-start justify-between rounded-lg",
            {
              "animate-fadeIn": visible,
              hidden: !visible,
            }
          )}
        >
          {routes.map((route) => (
            <Link
              key={route.path}
              className="mx-auto flex flex-col justify-center gap-y-3 items-center"
              onClick={() => setVisible(false)}
              href={route.path}
            >
              <Button
                key={route.path}
                className="bg-primary h-14 w-14 rounded-full mx-auto drop-shadow-md"
                variant={"link"}
                size={"icon"}
              >
                <route.icon color={"white"} />
              </Button>
              <p className="text-sm text-gray-500 animate-fadeIn ">
                {route.title}
              </p>
            </Link>
          ))}
        </div>
        <div className={classNames("h-14", { hidden: !visible })}></div>
        <div
          className={classNames("flex flex-col gap-y-3 items-center", {
            "animate-fadeIn": visible,
            hidden: !visible,
          })}
        >
          <h1>Todos los derechos reservados</h1>
          <h1>Copyright © {new Date().getFullYear()}</h1>
          <h1>Terminos de uso</h1>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
