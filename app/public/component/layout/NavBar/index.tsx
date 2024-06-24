"use client";
import Link from "next/link";
import Search from "../../Search";
import LinkNav from "./link";
import { Button } from "@/components/ui/button";
import { routes } from "@/app/routes/routes";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import useScrollBeyondFirstScreen from "@/app/hook/firstScreen";
import { Menu } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  const isBeyondFirstScreen = useScrollBeyondFirstScreen();
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

        <Button className="lg:hidden" variant={"link"} size={"icon"}>
          <Menu
            className={classNames("", {
              "text-white": !isBeyondFirstScreen,
              "text-primary": isBeyondFirstScreen,
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
            onClick={() => router.push("/login")}
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
    </nav>
  );
};
export default NavBar;
