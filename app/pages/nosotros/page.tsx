import Carousel from "@/components/Carousel/EmblaCarousel";
import { Card, Contacto, CardBlog, Header } from "../component";
import Image from "next/image";
import { getAllNews } from "@/app/dashboard/services/news";
import NosotrosCards from "../component/NosotrosCards";

const Page = async () => {
  const data = await getAllNews();
  return (
    <main className="min-h-screen  flex flex-col justify-start items-center">
      <Header title="Nosotros" />
      {/* <Badge text={"Sobre Nosotros"} /> */}
      <h1 className="text-6xl text-center mt-14 font-bold">
        ¿Por qué elegirnos?
      </h1>
      <p className="w-4/6 lg:w-3/4 mx-auto text-center py-5">
        Somos una organización comprometida con tu éxito. Nos destacamos por
        ofrecer.
      </p>

      <div className=" mx-auto w-5/6 scroll">
        <NosotrosCards />
      </div>
      <div className="grid lg:grid-cols-2 w-5/6  mx-auto my-16 gap-x-5">
        <div className="flex flex-col justify-center items-start gap-y-10">
          <h1 className="text-4xl font-bold">Nuestro compromiso</h1>
          <p>
            En nuestra organización, nos comprometemos a ofrecer siempre los
            mejores cursos y programas educativos, diseñados para proporcionar
            un aprendizaje efectivo y accesible para todos. Creemos firmemente
            en la importancia de la educación de calidad como un medio para
            mejorar las oportunidades laborales y personales de nuestros
            estudiantes.
          </p>
          {/* <div className="grid grid-cols-2 gap-x-3">
          <!-- {
            [...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-row items-center gap-x-3">
                <CheckCircle2 size={24} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            ))
          } -->
        </div> */}
          <div className="rounded-md flex flex-row gap-x-5 p-8 bg-[#F3F8FB]">
            <div className="h-full lg:w-4/5 flex flex-col gap-y-3 items-center justify-center">
              <p>
                Desde nuestros inicios en 2018, hemos trabajado incansablemente
                para asegurar que cada uno de nuestros estudiantes reciba la
                atención, el apoyo y los conocimientos que necesitan para
                triunfar. Nuestro enfoque se basa en la excelencia y en la
                dedicación hacia nuestros alumnos, para que puedan alcanzar sus
                metas.
              </p>
            </div>
          </div>
        </div>
        <div className=" h-96 lg:h-full w-full relative">
          <Image
            src="/manos.jpg"
            alt="imagen"
            fill
            className="  object-contain"
          />
        </div>
      </div>
      <Contacto />
      <div className="w-full flex flex-col gap-y-3 items-center justify-center mt-14">
        {/* <Badge text="Nuestro blog" /> */}
        <h1 className="text-4xl font-bold py-14">Noticias</h1>

        <div className=" mx-auto w-5/6 scroll">
          <Carousel
            slides={data.map((item) => (
              <CardBlog {...item} />
            ))}
          />
        </div>
      </div>
    </main>
  );
};
export default Page;
