import { DataTable } from "../component/DataTable/data-table";
import { columns, Payment } from "../component/DataTable/columns";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
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
  ];
}
const Page = async () => {
  const data = await getData();
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-5">Usuarios</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
};
export default Page;
