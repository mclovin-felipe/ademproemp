import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllRols } from "@/services/rol";
import { Rol } from "@/types/rol";

export function Roles({
  value,
  onChange,
  todos = false,
  hideName = false,
}: {
  value: string;
  onChange: any;
  todos?: boolean;
  hideName?: boolean;
}) {
  // fetch rolles
  const [data, setData] = React.useState<Rol[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getAllRols();
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-y-2 w-full bg-[#191919] rounded-2xl ">
      {!hideName && <span className="text-sm">Roles</span>}
      <Select value={value.toString()} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-dashboard rounded-full h-10 border-none">
          <SelectValue placeholder="Selecciona un rol" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Roles</SelectLabel>
            {data.map((item, index) => (
              <SelectItem key={index} value={item.id.toString()}>
                {item.name}
              </SelectItem>
            ))}
            {todos && <SelectItem value={"0"}>Todos</SelectItem>}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
