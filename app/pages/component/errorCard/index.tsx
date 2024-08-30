import { XCircle } from "lucide-react";

const ErrorCard = () => {
  return (
    <div className="flex mt-5 flex-col gap-y-5 items-center justify-center">
      <XCircle size={100} className="text-red-500" />
      <h1 className="text-2xl font-bold">
        Lo sentimos, no pudimos encontrar la página que buscas
      </h1>
    </div>
  );
};

export default ErrorCard;
