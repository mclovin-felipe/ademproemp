import { User2 } from "lucide-react";

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
    <div className="rounded-lg  lg:w-auto bg-card pb-4 flex flex-col gap-y-3 max-w-[400px]  min-h-[26rem]">
      {image === "" ? (
        <User2 />
      ) : (
        <img
          src={image}
          alt="Profesor"
          className=" rounded-edge rounded-t-lg object-cover"
        />
      )}

      <div className="p-4 break-words">
        <p className="text-xl text-black font-bold">{title}</p>
        <p className="text-gray-600 text-md">{ShortText(desc)}</p>
      </div>
    </div>
  );
};

export default CardGenerica;
