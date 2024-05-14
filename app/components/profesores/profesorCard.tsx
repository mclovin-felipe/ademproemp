import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
const ProfesorCard = ({
  profesor,
  home = true,
}: {
  profesor?: any;
  home?: boolean;
}) => {
  if (home) {
    return (
      <Link href="/profesores/1">
        <div className="  rounded-2xl lg:w-96 font-bold bg-white pt-8  pb-3 flex flex-col justify-between">
          <div className="w-full h-72 bg-black lg:rounded-2xl flex flex-row">
            <Image
              src={"/profesor.png"}
              width={100}
              height={100}
              alt="profesor"
              className="self-end mx-auto h-[19rem] w-auto"
            />
          </div>
          <h1 className="mx-auto text-xl mt-5">Vicente Berroeta</h1>
          <p className="mx-auto font-semibold text-primary">
            Prof. de Programación
          </p>
        </div>
      </Link>
    );
  }
  return (
    <Link href={"/profesores/1"}>
      <div className="lg:p-5 rounded-2xl  flex flex-col lg:w-96 ">
        <div className="w-full h-96 relative bg-gray-300 rounded-t-2xl flex flex-row ">
          <div className="h-32 w-10 bg-black absolute z-40 self-end rounded-lg hover:bg-primary mb-10  flex flex-col justify-between ">
            <Facebook size={20} className="text-white mx-auto my-2" />
            <Instagram size={20} className="text-white mx-auto my-2" />
            <Linkedin size={20} className="text-white mx-auto my-2" />
          </div>
          <Image
            src={"/profesor.png"}
            fill
            alt="profesor"
            className="object-contain rounded-t-2xl"
          />
        </div>
        <div className="z-30 -mt-5 h-24 w-full rounded-2xl bg-black flex flex-col items-start px-5 border-t border-t-white justify-center text-white transition-all duration-750 ease-out hover:bg-primary  hover:border-t-4">
          <h1 className="font-bold">Vicente Berroeta</h1>
          <h6 className="font-light">Instructor</h6>
        </div>
      </div>
    </Link>
  );
};
export default ProfesorCard;
