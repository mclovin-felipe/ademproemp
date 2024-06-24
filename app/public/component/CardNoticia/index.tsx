import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";
const CardNoticia = () => {
  return (
    <div className="flex flex-col border gap-y-3 w-full border-gray-200 rounded-lg shadow-lg">
      <div className="w-full h-96">
        <Image
          src="/contact.jpg"
          alt="noticia"
          width={1000}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-y-3 w-5/6 mx-auto p-5">
        <div className="flex flex-row justify-start gap-x-8">
          <div className="flex flex-row items-center gap-x-3">
            <Calendar name="mdi:calendar" className="w-5 h-5" />
            <p className="text-lg">22 de julio</p>
          </div>
          <div className="flex flex-row items-center lg:gap-x-3">
            <User name="mdi:user" className="w-5 h-5" />
            <p className="text-lg">22 de julio</p>
          </div>
        </div>
        <h2 className="text-3xl font-bold">UX/UI Diseño para principiantes</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          accumsan, nisl id porta porttitor, orci nibh porttitor nisi, a
          pellentesque nisl nisi et nibh. Donec nec nisi nec elit porttitor
          tincidunt. Donec a diam velit,
        </p>
        <div className="flex flex-row gap-x-5 items-center">
          <ArrowRight name="mdi:arrow-right" className="w-5 h-5" />
          <p className="text-md">Leer más</p>
        </div>
      </div>
    </div>
  );
};
export default CardNoticia;
