"use client";
import { MenubarItem } from "@/components/ui/menubar";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
const Logout = () => {
  return (
    <MenubarItem onClick={() => signOut()}>
      {" "}
      <LogOut className="mr-1" />
      Salir
    </MenubarItem>
  );
};
export default Logout;
