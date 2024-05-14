import { CursosProps } from "@/types/cursos";
import { Timer, Video, Download, StarHalf, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImagePrueba from "../layout/Image";

const CardCurso = ({
  item,
  home = false,
  horizontal = false,
}: {
  item: CursosProps;
  home?: boolean;
  horizontal?: boolean;
}) => {
  if (horizontal) {
    return (
      <div className="flex mx-auto flex-col lg:flex-row   rounded-2xl border gap-x-5 w-full ">
        <div className="lg:w-2/5 rounded-l-2xl  relative">
          <ImagePrueba />
        </div>

        <div className="py-5 px-5 lg:grid lg:grid-cols-2 items-center">
          <div className="col-span-2">
            <h1 className="text-lg font-bold w-5/6">{item.titulo}</h1>
            <div className="flex flex-row gap-x-2 font-semibold">
              <h2 className="text-primary">${item.precio}</h2>
              <h2>/</h2>
              <h2>${item.precioAntes}</h2>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between   w-full">
            <div className="flex flex-row items-center gap-x-2">
              <div className="rounded-full h-10 w-10 bg-gray-300"></div>
              <h4 className="text-primary text-md font-semibold">
                {item.profesor}
              </h4>
            </div>

            <div className="flex flex-row items-center gap-x-1">
              <p className="text-primary text-sm"> {item.calificacion}</p>
              <StarIcon fill="yellow" color="gray" size={15} />
              <StarIcon fill="yellow" color="gray" size={15} />
              <StarIcon fill="yellow" color="gray" size={15} />
              <StarHalf fill="yellow" color="gray" size={15} />
              <p className=" text-sm text-gray-400"> ({item.calificaciones})</p>
            </div>
          </div>
          <div className="flex justify-between w-5/6 lg:w-full mx-auto flex-row lg:flex-col lg:items-end">
            <div className="flex flex-row items-center gap-x-1">
              <Timer size={15} />
              <p className="text-sm">{item.duracion}</p>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <Video size={15} />
              <p className="text-sm">{item.cursos} cursos</p>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <Download size={15} />
              <p className="text-sm">{item.cursos} ventas</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`bg-card   h-[30rem] rounded-2xl flex flex-col  justify-between ${
          home ? " pt-2 px-2" : " w-[43%] lg:w-1/4 border pt-4 px-4 shadow-md"
        } `}
      >
        <div className="rounded-2xl h-44 w-full relative">
          <ImagePrueba />
        </div>

        <div className="flex flex-row justify-between pt-2 ">
          <div className="flex flex-col items-center gap-x-1">
            <Timer size={18} />
            <p className="text-sm text-center">{item.duracion}</p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <Video size={18} />
            <p className="text-sm text-center">{item.cursos} cursos</p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <Download size={18} />
            <p className="text-sm text-center">{item.cursos} ventas</p>
          </div>
        </div>
        <h1 className="text-lg font-bold w-5/6">{item.titulo}</h1>
        <div className="flex flex-row gap-x-2 font-semibold">
          <h2 className="text-primary">${item.precio}</h2>
          <h2>/</h2>
          <h2>${item.precioAntes}</h2>
        </div>
        <div className="bg-gray-200 w-full h-0.5 rounded-full"></div>
        <div className="flex flex-row items-center justify-between  w-full">
          <div className="flex flex-row items-center gap-x-2">
            {/* TODO:CAMBIAR p-3 solo para demo */}
            <div className="p-3 rounded-full h-10 w-10 bg-gray-300">
              <ImagePrueba />
            </div>
            <h4 className="text-primary text-md font-semibold">
              {item.profesor}
            </h4>
          </div>

          <div className="flex flex-row items-center gap-x-1">
            <p className="text-primary text-sm"> {item.calificacion}</p>
            <StarIcon fill="yellow" color="gray" size={15} />
            <StarIcon fill="yellow" color="gray" size={15} />
            <StarIcon fill="yellow" color="gray" size={15} />
            <StarHalf fill="yellow" color="gray" size={15} />
            <p className=" text-sm text-gray-400"> ({item.calificaciones})</p>
          </div>
        </div>
        <div className="h-8"></div>
        {home && (
          <Button className="absolute self-center mt-[28rem] text-xl rounded-full px-10">
            Inscribete
          </Button>
        )}
      </div>
    );
  }
};
export default CardCurso;
