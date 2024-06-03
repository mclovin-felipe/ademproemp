import { NextApiRequest, NextApiResponse } from "next";
import { getAllUsers, createUser } from "../../../services/users";
import { User } from "@/types/user";
export async function GET(request: Request) {
  const response = await getAllUsers();
  return new Response(JSON.stringify(response));
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await createUser(body);
  return new Response(JSON.stringify(user));
}
