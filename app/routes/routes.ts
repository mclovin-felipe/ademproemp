import { Route } from "@/types/routes";
import {
  Building2,
  Home,
  Library,
  Newspaper,
  Phone,
  Users,
} from "lucide-react";

export const routes: Route[] = [
  {
    path: "/",
    title: "Inicio",
    icon: Home,
  },
  {
    path: "/pages/cursos",
    title: "Cursos",
    icon: Library,
  },
  {
    path: "/pages/noticias",
    title: "Noticias",
    icon: Newspaper,
  },
  {
    path: "/pages/contacto",
    title: "Contacto",
    icon: Phone,
  },

  {
    path: "/pages/profesores",
    title: "Profesores",
    icon: Users,
  },
  {
    path: "/pages/nosotros",
    title: "Sobre Nosotros",
    icon: Building2,
  },
];
