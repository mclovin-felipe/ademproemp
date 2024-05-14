"use client";
import useHeightToTop from "@/app/hook/useHeight";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { routes } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);
  const heightToTop = useHeightToTop(divRef);
  useEffect(() => {
    console.log();
    if (heightToTop * -1 > 200) return setOpen(false);
  }, [heightToTop]);
  return (
    <nav
      ref={divRef}
      className={`bg-primary  lg:hidden flex flex-col items-center transition-all duration-500 ${
        open ? "h-screen" : "h-24"
      } `}
    >
      <div className="w-5/6 h-24 mx-auto flex flex-row justify-between items-center">
        <h1>logo</h1>
        <Button
          variant={"link"}
          className="transition-all"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X color="white" /> : <Menu color="white" />}
        </Button>
      </div>
      <div
        className={` transition-opacity flex flex-col w-5/6 mx-auto duration-700 h-0 items-start ${
          open ? "opacity-100" : "opacity-0"
        } `}
      >
        {routes.map((item) => (
          <Button
            onClick={() => {
              router.push(item.path);
              setOpen(false);
            }}
            variant={"ghost"}
            className="border-b rounded-none w-full my-3 text-white "
            key={item.title}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </nav>
  );
};
export default NavMobile;
