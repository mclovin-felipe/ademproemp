"use client";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { useRouter, usePathname } from "next/navigation";

const LinkNav = ({
  href,
  title,
  action,
}: {
  href: string;
  title: string;
  action?: boolean;
}) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Button
      // size={"sm"}
      variant={"ghost"}
      // variant={pathname === href ? "secondary" : "default"}
      className={classNames("shadow-none rounded-full hover:text-primary cursor-pointer ", {
        "text-primary": pathname.includes(href),
        "text-white": !action,
        "bg-white text-primary":
          !action && href === "/" ? false : pathname.includes(href),
      })}
      onClick={() => router.push(href)}
    >
      {title}
    </Button>
  );
};
export default LinkNav;
