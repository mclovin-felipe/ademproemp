import { ArrowRight } from "lucide-react";
interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}
const Card = ({ title, subtitle, image, link }: CardProps) => {
  return (
    <div className="flex min-h-[36rem] justify-start  lg:w-auto flex-col gap-y-3 col-span-2 lg:col-span-1 text-lg w-full mx-auto rounded-lg  animate-fadeIn  bg-card">
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-contain rounded-t-lg"
      />
      <p className="text-gray-800 font-semibold p-5">{title}</p>
      <p className="text-gray-600 p-5">{subtitle}</p>
    </div>
  );
};
export default Card;
