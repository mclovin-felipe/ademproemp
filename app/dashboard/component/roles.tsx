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
import { Rol } from "@/types/rol";
import useAxiosInstance from "@/lib/axios";
import { useEffect } from "react";
export function Roles({
  value,
  onChange,
  todos = false,
  hideName = false,
  disabled = false,
}: {
  value: string;
  onChange: any;
  todos?: boolean;
  hideName?: boolean;
  disabled?: boolean;
}) {
  const [data, setData] = React.useState<Rol[]>([]);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/v1/roles/findAllRoles");
        console.log(response.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-y-2 w-full bg-[#191919] rounded-2xl ">
      {!hideName && <span className="text-sm">Roles</span>}
      <Select
        disabled={disabled}
        value={value.toString()}
        onValueChange={onChange}
      >
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
