import { Check, Circle } from "lucide-react";
import StepItem from "./stepItem";
const Stepper = ({ step = 0 }: { step?: number }) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base mb-5">
      <StepItem active={step >= 0} title="Crear" />
      <StepItem active={step >= 1} title="Profesores" />
      <StepItem active={step >= 2} title="Revisión" />
      <div
        className={` rounded-full w-8 h-8 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
          step === 3 ? "bg-primary" : "bg-transparent"
        }  `}
      >
        <Circle
          className={`h-8 w-8   ${
            step === 3 ? "text-primary " : "text-primary"
          }`}
        />
        <Check
          className={`h-4 w-4 transition-all duration-1000 ease-in-out ${
            step === 3 ? "text-white opacity-100" : "opacity-0"
          } dark:text-blue-500  absolute  `}
        />
      </div>
    </ol>
  );
};
export default Stepper;
