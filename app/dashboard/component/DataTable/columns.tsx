"use client";

import { User } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";
import { EditUser } from "../../usuarios/component/editUser";
import { useSession } from "next-auth/react";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
const reverseSort = (rowA: User, rowB: User) => {
  if (rowA.id < rowB.id) return 1;
  if (rowA.id > rowB.id) return -1;
  return 0;
};
export const usersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    sortDescFirst: false,
    enableSorting: true,
    invertSorting: true,
    enableMultiSort: true,
  },
  {
    accessorKey: "rut",
    header: "RUT",
  },
  {
    accessorKey: "firstName",
    header: "Nombre",
  },
  {
    accessorKey: "lastName",
    header: "Apellido",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
  },
  // NEED USE ID TO EDIT
  {
    header: "Edit",
    cell(props) {
      return <EditUser user={props.row.original as User} />;
    },
  },
];
