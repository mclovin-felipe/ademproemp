import { CursosProps } from "@/types/cursos";
import { TimerIcon } from "lucide-react";
import { getUserByID } from "@/app/dashboard/services/users";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ButtonInscribir } from "../../cursos/[id]/components/buttonInscribir";

const CardCurso = async (props: CursosProps) => {
  const user = await getUserByID(props.rutProfesor);
  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col  gap-y-3 border-white rounded-lg relative min-h-[28rem] hover:scale-105 transition-transform duration-500  shadow-lg bg-white  dark:border-gray-800 group">
          <div className="h-52 bg-primary w-full skew-y-12 flex justify-center items-center rounded-tl-lg">
            <div className="relative h-48 w-48 mx-auto -skew-y-12">
              <Image
                src={props.media}
                alt="profesor"
                fill
                className="w-full  object-contain bg-gray-50 rounded-full  "
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-3 mt-12 p-5">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <div className="grid grid-cols-3 justify-between 5xl:gap-x-5 items-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 drop-shadow-sm relative">
                <Image
                  src={user?.media as string}
                  alt="profesor"
                  fill
                  className="w-full  object-cover rounded-full  "
                />
              </div>
              <p className="text-md">
                {user?.firstName} {user?.lastName}
              </p>
            </div>
          </div>

          {/* <Image
            src={props.media}
            alt="profesor"
            fill
            className="w-full  object-cover rounded-lg "
          />
          <div className="p-5 flex flex-col gap-y-2 bg-white absolute w-4/6 bottom-2 break-words right-0 rounded-l-md ">
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <p className="text-lg text-gray-600">
              ${formatPrice(props.price)}{" "}
            </p>
            <hr />
            <div className="grid grid-cols-3 justify-between 5xl:gap-x-5 items-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 drop-shadow-sm relative"></div>
              <p className="text-md">
                {user?.firstName} {user?.lastName}
              </p>
            </div>
          </div> */}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-5xl my-5">{props.title}</DialogTitle>
          <DialogDescription className="flex flex-col lg:flex-row gap-y-2 lg:gap-y-5">
            <Image
              src={props.media}
              alt="profesor"
              width={400}
              height={400}
              className="w object-contain rounded-lg"
            />
            <div className=" flex flex-col min-w-96 p-5 gap-y-4">
              <p className="col-span-2 w-full">{props.description}</p>
              <div className="lg:w-1/2 bg-gray-100 h-1 rounded-full"></div>
              <h1 className="font-semibold">Profesor</h1>
              <div>
                <p>
                  {user?.firstName} {user?.lastName}
                </p>
                <p>{user?.email}</p>
              </div>
              <h1 className="font-semibold ">Horario</h1>
              <div className="flex flex-row items-center mx-auto lg:ml-0">
                <TimerIcon className="w-5 h-5" />
                <p>
                  {props.startTime} - {props.endTime}
                </p>
              </div>
              <h1 className="font-semibold">Dias de la semana</h1>
              <div className="flex flex-row gap-x-2 mx-auto lg:ml-0">
                {props.days.map((day, index) => (
                  <p key={index}>{days[day]}</p>
                ))}
              </div>
              <div className="w-5/6">
                <ButtonInscribir
                  id={props.id}
                  title={props.title}
                  price={props.price}
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
  //  <div className="flex flex-row justify-between w-5/6 mx-auto ">
  //    <div className="flex flex-col justify-center items-center">
  //      <Users className="w-5 h-5" />
  //      <p className="text-sm">{props.classesNumber} </p>
  //    </div>
  //    <div className="flex flex-col justify-center items-center">
  //      <VideoIcon name="mdi:video" className="w-5 h-5" />
  //      <p className="text-sm">22 hr 30 min</p>
  //    </div>
  //    <div className="flex flex-col justify-center items-center">
  //      <DownloadIcon name="mdi:download" className="w-5 h-5" />
  //      <p className="text-sm">22 hr 30 min</p>
  //    </div>
  //  </div>;
};
export default CardCurso;
