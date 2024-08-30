import {
  createUser,
  getAllUsers,
  getUserByRut,
  getUsersByRol,
} from "@/services/users";
import { User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
  const response = await getAllUsers();
  return response.data;
}

export async function getUser(id: string): Promise<User | null> {
  try {
    const response = await getUserByRut(id, "");
    return response.data;
  } catch (error) {
    return null;
  }
}
export async function getUserByID(rut: string): Promise<User | null> {
  try {
    const response = await getUserByRut(
      rut,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJydXQiOiIxMjM0NTY3OSIsImlhdCI6MTcyNDUzNTgwMSwiZXhwIjoxNzI1MTQwNjAxfQ.BSwBysB4Kgc45uhJQlZjKTx7sKjn0bkPErYH5P7psZY"
    );
    return response.data;
  } catch (error) {
    return null;
  }
}
export async function getUsersRol(rol: number): Promise<User[]> {
  try {
    const response = await getUsersByRol(rol);
    if (response.message === "USER_NOT_FOUND") {
      return [];
    }
    return response.data as User[];
  } catch (error: any) {
    throw Error(error);
  }
}
export async function AddUser(data: Partial<User>): Promise<any> {
  try {
    const response = await createUser(data);
    if (response.error) {
      return response;
    }
    return response.data;
  } catch (error: any) {
    console.log(error, "error");
    throw Error(error);
    // console.log(error, "piopip");
    // return null;
  }
}
