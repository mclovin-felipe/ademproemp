import React from "react";
import { ImageOff } from "lucide-react";
const ImagePrueba = ({ children }: { children?: React.ReactNode }) => {
  if (children) {
    return children;
  }
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-xl">
      <ImageOff size={100} />
    </div>
  );
};
export default ImagePrueba;
