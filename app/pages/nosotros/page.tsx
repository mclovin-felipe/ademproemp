import { Card, Header, Profesores } from "@/app/components";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CheckCircle2,
  ForwardIcon,
  MessageCircle,
} from "lucide-react";
import ImagePrueba from "@/app/components/layout/Image";
import Feature from "@/app/components/home/Feature";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import Contacto from "@/app/components/global/contacto";

const Page = () => {
  return (
    <section>
      <Header image="/profesor.png" titulo="Nosotros" />
      {/* <div className="absolute h-[30rem]  w-full bg-gray-50"></div> */}
      <div className="mt-14 gap-y-14 flex flex-col justify-start items-center bg-white">
        <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
          Sobre Nosotros
        </Button>
        <Feature />
      </div>
      <div className="grid lg:grid-cols-2 w-5/6 mx-auto my-16  gap-x-5 ">
        <div className="flex flex-col justify-start gap-y-10 ">
          <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
            Sobre Nosotros
          </Button>
          <h1 className="text-4xl font-bold">Nuestro compromiso</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            consequuntur possimus consectetur, cupiditate ab numquam earum,
            laudantium animi dolorum debitis inventore perspiciatis modi illo
            dolor, iusto cum dolorem quos sed.
          </p>
          <div className="grid grid-cols-2 gap-x-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-row items-center gap-x-3">
                <CheckCircle2 size={24} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            ))}
          </div>
          <div className="rounded-md flex flex-row gap-x-5 p-8 bg-[#F3F8FB]">
            <div className="h-full w-1/5  rounded-md">
              <ImagePrueba />
            </div>
            <div className="h-full w-4/5 flex flex-col gap-y-3">
              <h6>
                <strong className="text-primary">Mr. Berroeta</strong> fundador
              </h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                officia sed iure nostrum laboriosam nam dolorem, libero
                voluptatibus laborum dignissimos harum a quam magni veniam
                accusamus repellendus, explicabo perspiciatis deleniti.
              </p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            rerum obcaecati cum excepturi fuga quae vero. Perspiciatis atque
            magni, corrupti libero nesciunt cumque aspernatur accusantium
            reprehenderit dolore natus quaerat earum.
          </p>
        </div>
        <div className="mt-14 lg:mt-14 h-96 lg:h-full w-full ">
          <ImagePrueba />
        </div>
      </div>
      {/* COntacto */}
      <Contacto />
      {/* <Profesores home={false} /> */}
      <section className="flex flex-col items-center gap-y-14 bg-[#F3F8FB] py-14">
        <Button variant={"secondary"} className="rounded-full shadow-lg w-36">
          Nuestro blog
        </Button>
        <h1 className="text-4xl font-bold">Noticias</h1>
        <div className=" w-4/6 ">
          <EmblaCarousel
            slides={[...Array(3)].map((_, i) => (
              <div
                key={i}
                className=" h-[28rem]  bg-white flex flex-col justify-between rounded-2xl"
              >
                <div className="h-1/2 relative w-full">
                  <div className="z-20 absolute bg-primary text-white flex flex-row text-xs px-3 py-1 rounded-lg m-5 ">
                    <Calendar size={14} />
                    <h1>Octubre 10, 2023</h1>
                  </div>
                  <Image
                    src={"/jovenes.jpeg"}
                    className="rounded-t-2xl object-cover"
                    alt={"jovenes"}
                    fill
                  />
                </div>
                <div className="flex flex-col justify-between p-5 gap-y-5">
                  <h1 className="text-2xl font-bold">Titulo de prueba</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita, ex nihil saepe qui autem alias suscipit
                    dignissimos.
                  </p>
                </div>
                <div className="flex flex-row justify-between p-3 border-t">
                  <Button variant={"ghost"} className="font-bold">
                    Leer más <ForwardIcon />
                  </Button>
                  <div className="flex flex-row text-sm items-center gap-x-2">
                    <MessageCircle />
                    Comentarios (10)
                  </div>
                </div>
              </div>
            ))}
          />
        </div>
      </section>
    </section>
  );
};
export default Page;
