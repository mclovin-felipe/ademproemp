import { Label } from "@/components/ui/label";
const InputCompra = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  );
};

export default InputCompra;
