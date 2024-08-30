import { ArrowRight } from "lucide-react";
interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}
const Card = ({ title, subtitle, image, link }: CardProps) => {
  return (
    <div className="flex  lg:w-auto flex-col gap-y-3 col-span-2 lg:col-span-1 text-lg w-full mx-auto rounded-lg  animate-fadeIn  bg-card">
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-contain rounded-t-lg"
      />
      <div className="p-4 gap-y-5 flex flex-col">
        <p className="text-gray-800">{title}</p>
        <p className="text-gray-600">{subtitle}</p>
        <a
          href={link}
          className="flex flex-row items-center gap-x-3 bg-adem   justify-center rounded-lg py-2 px-4 text-black font-bold cursor-pointer"
        >
          {title}
          <ArrowRight />
        </a>
      </div>
    </div>
  );
};
export default Card;
