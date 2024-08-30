"use client";
import { CheckCircle } from "lucide-react";
import ConfettiButton from "./confetti";
import { useEffect, useState } from "react";
const Paso4 = () => {
  const [isConfettiActive, setConfettiActive] = useState(false);
  const handleClick = () => {
    setConfettiActive(true);
    // Reset the confetti after a short delay
    setTimeout(() => {
      setConfettiActive(false);
    }, 4000);
  };
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] gap-y-5 ">
      <ConfettiButton
        isConfettiActive={isConfettiActive}
        setConfettiActive={setConfettiActive}
      />
      <CheckCircle size={200} color={"#00FF00"} />
      <h1 className="text-4xl font-bold">Curso creado correctamente</h1>
    </div>
  );
};

export default Paso4;
