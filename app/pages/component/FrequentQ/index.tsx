"use client";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";

const FrequentQ = ({
  id,
  title,
  desc,
}: {
  id: string;
  title: string;
  desc: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-y-3 w-full justify-between toggle-container border rounded-lg py-3 px-4 transition-all duration-300 ease-in-out">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-bold">{title}</h1>
        <Button onClick={() => toggle()} variant={"link"}>
          {isOpen ? <EyeOff /> : <EyeIcon />}
        </Button>
      </div>
      <p
        className={classNames("transition-all duration-300 ease-in-out", {
          "max-h-[300px] overflow-y-auto": isOpen,
          "max-h-0 overflow-y-hidden": !isOpen,
        })}
      >
        {desc}
      </p>
    </div>
  );
};
export default FrequentQ;
