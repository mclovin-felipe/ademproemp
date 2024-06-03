"use client";
import { useEffect } from "react";
const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-dashboard p-10 rounded-2xl flex flex-col gap-y-4 ">
        <h1 className="text-2xl font-semibold">Error</h1>
        <p className="text-md">
          Lo sentimos, por el momento no podemos atender tu solicitud
        </p>
      </div>
    </div>
  );
};
export default Error;
