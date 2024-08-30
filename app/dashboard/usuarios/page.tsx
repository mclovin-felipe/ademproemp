"use client";
import { DataTable } from "../component/DataTable/data-table";
import { usersColumns } from "../component/DataTable/columns";
import React, { useEffect, useState } from "react";
import { Roles } from "../component/roles";
import { User } from "@/types/user";
import { getAllUsers } from "@/services/users";
import CreateUser from "./component/createUser";


const Page = () => {
  const [rol, setRol] = React.useState("1");
  const [data, setData] = useState<User[]>([]);
  const [filter, setFilter] = React.useState<User[]>([]);
  const [change, setChange] = React.useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        setData(response.data);
        setFilter(response.data);
      } catch (e: any) {
        console.log(e, "pipipi");
        throw new Error(e);
      }
    };
    fetchData();
  }, [change]);
  useEffect(() => {
    if (rol === "0") {
      setFilter(data);
    } else {
      const filterData = data.filter((item) => item.rolId === parseInt(rol));
      console.log(filterData, "filterData");
      setFilter(filterData);
    }
  }, [rol]);

  return (
    <div className="p-14">
      <h1 className="text-4xl font-semibold mb-5">Usuarios</h1>
      <div className="grid lg:grid-cols-5 items-center gap-x-5 bg-[#191919] w-full rounded-2xl py-4  px-14 gap-y-4">
        <Roles hideName todos value={rol} onChange={setRol} />
        <CreateUser setChange={setChange} />
      </div>
      <div className="w-full p-5 rounded-2xl bg-[#191919] mt-5">
        <DataTable data={filter} columns={usersColumns} />
      </div>
    </div>
  );
};
export default Page;
