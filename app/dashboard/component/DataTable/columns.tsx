"use client";

import { User } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";
import { EditUser } from "../../usuarios/component/editUser";

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
  // {
  //   accessorKey: "createdAt",
  //   header: "Fecha de creación",
  //   cell: (info) => new Date(info.getValue() as string).toLocaleDateString(),
  // },
  // {
  //   accessorKey: "updatedAt",
  //   header: "Fecha de actualización",
  //   cell: (info) => new Date(info.getValue() as string).toLocaleDateString(),
  // },

  // {
  //   accessorKey: "status",
  //   header: "Status",
  // },
  // {
  //   accessorKey: "email",
  //   header: "Email",
  // },
  // {
  //   accessorKey: "amount",
  //   header: "Amount",
  // },
];
