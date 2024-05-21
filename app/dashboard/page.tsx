import { Button } from "@/components/ui/button";
import { Users, Bell } from "lucide-react";
import { DataTable } from "./component/DataTable/data-table";
import { columns, Payment } from "./component/DataTable/columns";
import Chart from "./component/chart";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  setTimeout(() => {}, 1000);
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "728ed52f2",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },

          // ...
        ]),
      1000
    );
  });
}
const Page = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col justify-start gap-y-5 items-center">
      <div className="grid lg:grid-cols-2">
        <h1 className="text-4xl font-semibold text-center">
          Panel de administración
        </h1>
        <div className="flex flex-row items-center gap-x-3  justify-end -order-last lg:order-last ">
          {/* Notification icnn */}
          <Button
            variant={"unstyled"}
            className="w-14 h-14 rounded-full p-0 active:bg-slate-500/45"
          >
            <Bell size={30} />
          </Button>
          <div className="w-10 h-10 rounded-full bg-purple-50"></div>
        </div>
      </div>
      <div className="mt-14 w-5/6 mx-auto flex flex-wrap gap-x-5 gap-y-5 justify-between">
        {Tabs.map((_: KPI, i) => (
          <div className=" py-5 px-3 w-auto bg-[#191919] rounded-2xl grid grid-cols-3 gap-x-5  justify-center items-center">
            <div
              className={`h-14 w-14 rounded-full ${
                i % 2 == 0 ? "bg-[#9B87FF]" : "bg-[#7AE26A]"
              }  flex items-center justify-center`}
            >
              <Users color="black" size={20} />
            </div>
            <div className="col-span-2">
              <h1 className="text-md">{_.title} </h1>
              <h1 className="text-xl font-bold ">{_.value}</h1>
            </div>
          </div>
        ))}
      </div>
      <Chart />
      <div className="w-5/6 p-5 rounded-2xl bg-[#191919]">
        <DataTable columns={columns} data={data} />
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
