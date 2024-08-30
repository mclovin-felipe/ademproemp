import React from "react";
const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-start gap-y-3  w-full h-full p-14 ">
      <h1 className="text-4xl font-semibold">Crear curso</h1>

      {children}
    </div>
  );
};
export default Template;
