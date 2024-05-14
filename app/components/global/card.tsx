import { Button } from "@/components/ui/button";
import ImagePrueba from "../layout/Image";
const Card = () => {
  return (
    <div className="  h-[30rem] bg-white  rounded-2xl  shadow-md flex justify-between items-center flex-col">
      <div className="h-3/5 w-full bg-red-200 rounded-t-2xl">
        <ImagePrueba />
      </div>
      <div className="h-2/5 w-full flex flex-col justify-between py-5 ">
        <h4 className="text-sm">Feature-01</h4>
        <h1 className="text-2xl font-bold">Highly Expert Team Member line</h1>
        <Button variant={"ghost"}>Leer más</Button>
      </div>
    </div>
  );
};
export default Card;
