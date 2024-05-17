"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { Route } from "@/types/routes";
import Link from "next/link";
const Menu = ({
  titulo,
  subMenu,
  href,
}: {
  titulo: string;
  subMenu: Route[];
  href: string;
}) => {
  if (subMenu.length === 0) {
    // RETURN A SIMPLE MENU ITEM
    return (
      <NavigationMenu className="skew-x-[10deg]">
        <NavigationMenuLink href={href}>
          {" "}
          <div
            className={cn(
              "block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            )}
          >
            <div className="text-md font-medium leading-none">{titulo}</div>
          </div>
        </NavigationMenuLink>
      </NavigationMenu>
    );
  }
  return (
    <NavigationMenu className="skew-x-[10deg]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" bg-primary text-md ">
            {titulo}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6  lg:w-[500px] ">
              {subMenu.map((item: Route, index) => (
                <ListItem href="/#faq" key={index} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Menu;
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
