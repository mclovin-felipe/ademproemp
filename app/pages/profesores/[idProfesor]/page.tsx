import { Header } from "@/app/components";
import Image from "next/image";
import { User } from "lucide-react";
const Page = ({ params }: { params: any }) => {
  return (
    <section>
      <Header image="/profesor.png" titulo="Profesor" />
      <div className="lg:w-4/6 mx-auto border rounded-2xl p-10 mt-14 grid lg:grid-cols-3 ">
        <div className=" flex flex-col justify-center items-center  w-72 h-96  mx-auto lg:h-full lg:w-full bg-[#36B0AC]  relative rounded-2xl">
          <Image
            src={"/profesor.png"}
            className="rounded-full object-contain"
            alt={"profesor"}
            fill
          />
        </div>
        <div className="col-span-2 px-5 py-14 flex flex-col gap-y-5 text-gray-700">
          <div>
            <h1 className="text-4xl font-bold">Vicente Berroeta</h1>
            <p className="text-md ">Ing. civil Informatico</p>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, neque ea! Odit nulla dicta libero hic culpa
            architecto atque non totam fugit. Totam neque velit eos asperiores
            ab voluptates corrupti!
          </p>
          <div className="flex gap-x-5">
            {[...Array(4)].map((_, i) => (
              <div className="h-10 w-10 bg-white drop-shadow-2xl rounded-full"></div>
            ))}
          </div>
          <div className="w-full h-0.5 bg-primary rounded-full flex items-center justify-center"></div>
          <div className="flex justify-between flex-wrap gap-5 w-5/6">
            {[...Array(4)].map((item, index) => (
              <div className="flex flex-row w-[45%] gap-x-3 ">
                <div className="w-14 h-14 rounded-full  shadow-2xl flex items-center justify-center">
                  <User />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-gray-700">Experiencia</h1>
                  <h1 className="font-bold">Mas de 10 ańos</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESC */}

      <div className="flex flex-col gap-y-14 w-4/6 mx-auto mt-14">
        <h1 className="text-4xl font-bold">Sobre Vicente</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
          numquam vel iure perferendis consequuntur omnis ipsum sint, nostrum,
          doloribus dolore velit possimus ad non esse assumenda! Error, eos
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ullam mollitia totam libero voluptas odio laborum suscipit id
          iure ut repellat, enim voluptatem rerum molestias culpa, excepturi
          ratione sunt, esse fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
          numquam vel iure perferendis consequuntur omnis ipsum sint, nostrum,
          doloribus dolore velit possimus ad non esse assumenda! Error, eos
          exercitationem.
        </p>
        <h1 className="text-4xl font-bold">Experiencias previas</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
          numquam vel iure perferendis consequuntur omnis ipsum sint, nostrum,
          doloribus dolore velit possimus ad non esse assumenda! Error, eos
          exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ullam mollitia totam libero voluptas odio laborum suscipit id
          iure ut repellat, enim voluptatem rerum molestias culpa, excepturi
          ratione sunt, esse fugiat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum
          numquam vel iure perferendis consequuntur omnis ipsum sint, nostrum,
          doloribus dolore velit possimus ad non esse assumenda! Error, eos
          exercitationem.
        </p>
      </div>
    </section>
  );
};
export default Page;
