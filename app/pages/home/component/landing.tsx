import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const Landing = () => {
  return (
    <div className=" h-screen w-full p-14 bg-gradient-to-b from-primary via-primary/50 to-background">
      {/* BODY */}
      <div className="grid lg:grid-cols-2 w-5/6 mx-auto items-center h-full justify-center">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-7xl font-bold text-black dark:text-white">
            Ahora es mas fácil{" "}
            <span className="text-primary">estudiar online</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius saepe
            nam nisi inventore esse deserunt corporis.
          </p>
          <div className="flex gap-x-5 justify-start animate-fadeIn">
            <Button size={"lg"} className="shadow-lg h-12 rounded-full">
              <span className="text-background">
                <ArrowRight />
              </span>
              Ver más
            </Button>
            <Link href="/cursos">
              <Button
                variant={"outline"}
                size={"lg"}
                className="shadow-lg  h-12 rounded-full bg-transparent border-primary text-primary"
              >
                Ver cursos
              </Button>
            </Link>
          </div>
        </div>
        <div className=" hidden lg:block h-5/6 w-full relative">
          <Image
            src={"/woman.png"}
            alt="profesor"
            fill
            className="w-full h-[300px] object-contain rounded-lg drop-shadow-lg landingImage"
          />
        </div>
      </div>
    </div>
  );
};
export default Landing;
