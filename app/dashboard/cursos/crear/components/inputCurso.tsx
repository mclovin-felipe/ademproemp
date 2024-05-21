import { Input } from "@/components/ui/input";

const InputCurso = () => {
  return (
    <div className="flex flex-col gap-y-5 w-full bg-[#191919] rounded-2xl p-2">
      <Input
        placeholder="Nombre del curso"
        className="bg-dashboard rounded-full h-12"
      />
    </div>
  );
};
export default InputCurso;
