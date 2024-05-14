import { Route } from "@/types/routes";

export const routes: Route[] = [
  {
    path: "/",
    title: "Inicio",
  },
  {
    path: "/cursos",
    title: "Cursos",
    subRoutes: [
      {
        path: "/cursos/:id",
        title: "Curso",
        description: "Descripcion del curso",
      },
    ],
  },
  {
    path: "/noticias",
    title: "Noticias",
    subRoutes: [
      {
        path: "/noticias/:id",
        title: "Noticia",
        description: "Descripcion de la noticia",
      },
    ],
  },
  {
    path: "/contacto",
    title: "Contacto",
  },

  {
    path: "/profesores",
    title: "Profesores",
    subRoutes: [
      {
        path: "/profesores/:id",
        title: "Profesor",
        description: "Descripcion del profesor",
      },
    ],
  },
  {
    path: "/nosotros",
    title: "Sobre Nosotros",
  },
];
