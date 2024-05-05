"use client";
import { Button } from "@/components/ui/button";
import { Eye, EyeOffIcon } from "lucide-react";
import { useState } from "react";

const FrequentQuestion = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`flex flex-col transition-all w-4/6 px-5 py-3 rounded-2xl ${
        show ? "border" : "border-none"
      }`}
    >
      <div
        className={`flex flex-row transition-all duration-1000 justify-between w-full  items-center `}
      >
        <h3
          className={`font-bold transition-all duration-750  ${
            show ? "text-primary" : "text-black"
          }`}
        >
          Cuales son los diferentes niveles de educación?
        </h3>
        <Button
          className="rounded-full w-10 h-10 p-0 "
          onClick={() => setShow(!show)}
        >
          {show ? <EyeOffIcon size={20} /> : <Eye size={20} />}
        </Button>
      </div>
      <div
        className={`transition-all ease-out duration-1000 ${
          show ? "h-auto" : "h-0"
        } overflow-hidden`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          perspiciatis sunt placeat aspernatur, fugit minus fuga animi
          laboriosam nam repudiandae blanditiis asperiores neque, numquam
          laborum provident, explicabo nobis labore quis!
        </p>
      </div>
    </div>
  );
};
export default FrequentQuestion;
