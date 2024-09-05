import { User2 } from "lucide-react";
import Image from "next/image";

const CardGenerica = ({
  title,
  desc,
  image = "",
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  console.log(image, "ACACACCAA");
  const ShortText = (text: string) => {
    if (typeof text !== "string") return "";
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    }
    return text;
  };
  return (
    <div className="rounded-lg   bg-card   gap-y-3 min-h-[300px] min-w-[200px] grid grid-cols-5 ">
      <div className="col-span-1 rounded-l-lg bg-primary grid items-center justify-center w-full ">
        <h1 className="text-white break-words rotate-[270deg] w-[250px] font-semibold ">
          {title}
        </h1>
      </div>
      <div className="col-span-4 relative">
        <Image
          src={image}
          alt="Picture of the author"
          className="rounded-r-lg object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default CardGenerica;
