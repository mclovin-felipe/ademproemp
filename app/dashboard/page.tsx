import { Button } from "@/components/ui/button";
import { Users, Bell, User } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DataTable } from "./component/DataTable/data-table";
import { usersColumns } from "./component/DataTable/columns";
import Chart from "./component/chart";
import { getUsers } from "./services/users";
const Page = async () => {
  const data = await getUsers();
  return (
    <div className="flex flex-col justify-start gap-y-5 items-center">
      <div className="grid lg:grid-cols-2">
        <h1 className="text-4xl font-semibold text-center">
          Panel de administración
        </h1>
        <div className="flex flex-row items-center gap-x-3  justify-end -order-last lg:order-last ">
          {/* Notification icnn */}
          <Button
            // variant={"unstyled"}
            variant={"ghost"}
            size={"icon"}
            className="rounded-full"
          >
            <Bell size={30} />
          </Button>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className={"text-white "}>
                <User size={30} />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Salir</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className="mt-14 w-5/6 mx-auto flex flex-wrap gap-x-5 gap-y-5 justify-between">
        <div className=" py-5 px-3 w-auto bg-[#191919] rounded-2xl grid grid-cols-3 gap-x-5  justify-center items-center">
          <div
            className={`h-14 w-14 rounded-full bg-[#9B87FF]  flex items-center justify-center`}
          >
            <Users color="black" size={20} />
          </div>
          <div className="col-span-2">
            <h1 className="text-md">Total de usuarios </h1>
            <h1 className="text-xl font-bold ">{data.length}</h1>
          </div>
        </div>
      </div>
      {/* <Chart /> */}
      <div className="w-5/6 p-5 rounded-2xl bg-[#191919]">
        <DataTable columns={usersColumns} sizePage={5} data={data} />
      </div>
    </div>
  );
};
interface KPI {
  title: string;
  value: number;
  color: string;
}
const Tabs: KPI[] = [
  {
    title: "Total de usuarios",
    value: 10,
    color: "#9B87FF",
  },
  {
    title: "Total de cursos",
    value: 10,
    color: "#7AE26A",
  },
  {
    title: "Total de profesores",
    value: 10,
    color: "#F6DC65",
  },
  {
    title: "Total de noticias",
    value: 10,
    color: "#D976BD",
  },
];
export default Page;
