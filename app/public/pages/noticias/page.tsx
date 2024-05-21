import { Header } from "@/app/components";
import Image from "next/image";
import Noticia from "./component/noticia";
import SearchBox from "@/app/components/global/searchBox";
import ImagePrueba from "@/app/components/layout/Image";
import Categoria from "../cursos/component/CAtegory";

const Page = () => {
  return [...Array(3)].map((_, i) => (
    <Noticia
      categoria="Marketing"
      fecha="22 de Julio"
      autor="Vicente Berroeta"
      titulo="UX/UI Diseño para principiantes"
      descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, neque ea! Odit nulla dicta libero hic culpa architecto atque non totam fugit. Totam neque velit eos asperiores ab voluptates corrupti!"
      imagen="/jovenes.jpeg"
      link="1"
    />
  ));
};
export default Page;
