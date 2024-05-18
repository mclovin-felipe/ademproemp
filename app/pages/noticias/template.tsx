import React from "react";
import { Header } from "@/app/components";
import Noticia from "./component/noticia";
import SearchBox from "@/app/components/global/searchBox";
import ImagePrueba from "@/app/components/layout/Image";
import Categoria from "../cursos/component/CAtegory";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header image="/profesor.png" titulo="Noticias" />
      <div className="w-5/6 mx-auto grid grid-cols-7 gap-x-5 mt-14 min-h-screen">
        <div className=" col-span-7 lg:col-span-5 flex flex-wrap justify-center gap-5 mt-14 lg:mt-0 ">
          {children}
        </div>
        <div className=" col-span-7  lg:col-span-2  flex flex-col gap-y-5">
          <div className="flex justify-center items-center p-14 bg-[#F6F7FB] rounded-lg">
            <SearchBox />
          </div>
          <div className="flex flex-col gap-y-5 p-14 bg-[#F6F7FB] rounded-lg ">
            <h1 className="text-3xl font-semibold">Noticias Recientes</h1>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="grid grid-cols-5 gap-x-5 gap-y-5">
                <div className="col-span-2">
                  <ImagePrueba />
                </div>

                <div className="flex flex-col justify-evenly col-span-3">
                  <h1 className="text-xl font-bold">Titulo de prueba</h1>
                  <p>25 de Julio, 2023</p>
                </div>
              </div>
            ))}
          </div>
          <Categoria titulo="Categorias">
            <div></div>
          </Categoria>
        </div>
      </div>
    </section>
  );
};
export default Template;
