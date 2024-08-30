"use client";
import { Check, Circle } from "lucide-react";
import { useState } from "react";
const StepItem = ({
  active = false,
  title,
}: {
  active?: boolean;
  title: string;
}) => {
  return (
    <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
      <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        <div
          className={`relative rounded-full w-8 h-8 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
            active ? "bg-primary" : "bg-transparent"
          }  `}
        >
          <Circle
            className={`h-8 w-8   ${active ? "text-primary " : "text-primary"}`}
          />
          <Check
            className={`h-4 w-4 transition-all duration-1000 ease-in-out ${
              active ? "text-white opacity-100" : "opacity-0"
            } dark:text-blue-500 absolute  `}
          />
        </div>
        <span className="me-2 mx-2"> {title}</span>
      </span>
    </li>
  );
};

export default StepItem;
