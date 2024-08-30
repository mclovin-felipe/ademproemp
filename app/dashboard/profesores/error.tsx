"use client";
const Error = () => {
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
