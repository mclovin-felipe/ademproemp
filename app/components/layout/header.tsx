import Image from "next/image";
const Header = ({ titulo, image }: DatosProps) => {
  return (
    <div className="h-[50vh] bg-black flex flex-row  ">
      <div className="w-5/6 mx-auto h-full flex flex-row ">
        <div className="w-2/6 h-full flex  ">
          <Image
            alt="foto"
            src={image}
            className="self-end"
            height={400}
            width={300}
          />
        </div>
        <div className="h-full text-white flex w-2/6 flex-col justify-center items-center">
          <h1 className="font-bold text-4xl">{titulo}</h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
interface DatosProps {
  titulo: string;
  image: string;
}
