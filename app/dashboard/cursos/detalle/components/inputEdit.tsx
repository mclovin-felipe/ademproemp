import React from "react";
import { Label } from "@/components/ui/label";

const InputEdit = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex flex-col text-gray-900 gap-y-3 ">
      <Label>{label}</Label>
      {children}
    </div>
  );
};

export default InputEdit;
