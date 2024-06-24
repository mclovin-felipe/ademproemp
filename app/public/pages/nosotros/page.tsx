import Carousel from "@/components/Carousel/EmblaCarousel";
import { Card, Contacto, CardBlog, Header } from "../../component";
import Image from "next/image";
const Page = () => {
  return (
    <main className="min-h-screen  flex flex-col justify-start items-center">
      <Header title="Nosotros" />
      {/* <Badge text={"Sobre Nosotros"} /> */}
      <h1 className="text-6xl text-center mt-14 font-bold">
        ¿Por qué elegirnos?
      </h1>
      <p className="w-4/6 lg:w-3/4 mx-auto text-center py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        placeat nihil a itaque minus quidem.
      </p>

      <div className=" mx-auto w-5/6 scroll">
        <Carousel
          slides={[
            <Card
              title="Feature-01"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat nihil a itaque minus quidem."
              image="/profesor.png"
              link="https://www.google.com"
            />,
            <Card
              title="Feature-01"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat nihil a itaque minus quidem."
              image="/profesor.png"
              link="https://www.google.com"
            />,
            <Card
              title="Feature-01"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat nihil a itaque minus quidem."
              image="/profesor.png"
              link="https://www.google.com"
            />,
          ]}
        />
      </div>
      <div className="grid lg:grid-cols-2 w-5/6  mx-auto my-16 gap-x-5">
        <div className="flex flex-col justify-center items-start gap-y-10">
          <h1 className="text-4xl font-bold">Nuestro compromiso</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            consequuntur possimus consectetur, cupiditate ab numquam earum,
            laudantium animi dolorum debitis inventore perspiciatis modi illo
            dolor, iusto cum dolorem quos sed.
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
            <div className="h-full w-1/5 rounded-md items-center justify-center">
              <img
                src="/profesor.png"
                alt="imagen"
                className="w-full h-full object-cover hidden lg:block"
              />
            </div>
            <div className="h-full lg:w-4/5 flex flex-col gap-y-3">
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
        <div className=" h-96 lg:h-full w-full relative">
          <Image
            src="/profesor.png"
            alt="imagen"
            width={1000}
            height={400}
            className="  object-cover"
          />
        </div>
      </div>
      <Contacto />
      <div className="w-full flex flex-col gap-y-3 items-center justify-center mt-14">
        {/* <Badge text="Nuestro blog" /> */}
        <h1 className="text-4xl font-bold py-14">Nuestro blog</h1>

        <div className=" mx-auto w-5/6 scroll">
          <Carousel slides={[<CardBlog />, <CardBlog />, <CardBlog />]} />
        </div>
      </div>
    </main>
  );
};
export default Page;
