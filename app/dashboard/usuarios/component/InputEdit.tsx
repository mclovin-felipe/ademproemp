import { Input } from "@/components/ui/input";

const InputEdit = ({
  register,
  errors,
  name,
  placeholder,
  rules,
  noVisible,
  title,
}: any) => {
  console.log(noVisible);
  if (noVisible) return <></>;
  return (
    <div className="flex flex-col gap-y-2 w-full bg-[#191919] rounded-2xl p-2">
      <span className="text-sm">{title}</span>
      <Input
        className="bg-dashboard rounded-full h-10"
        {...register(name, rules)}
        type="text"
        placeholder={placeholder}
        // className="w-full border bg-dashboard rounded-md py-2 px-3 text-sm"
      />
      <p className="text-xs">{errors[name]?.message}</p>
    </div>
  );
};

export default InputEdit;
