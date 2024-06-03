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

export async function getUser(id: number): Promise<User | null> {
  try {
    const response = await getUserByRut(id);
    return response.data;
  } catch (error) {
    return null;
  }
}
export async function getUsersRol(rol: number): Promise<User[]> {
  try {
    const response = await getUsersByRol(rol);
    return response.data;
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
