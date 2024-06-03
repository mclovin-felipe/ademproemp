import {
  CreateResponse,
  User,
  UserResponse,
  UsersResponse,
} from "@/types/user";

import api from "@/lib/api";
export const getAllUsers = async (): Promise<UsersResponse> => {
  const response = await api.get<UsersResponse>("/v1/user/findAllUsers");
  return response.data;
};
export const getUsersByRol = async (rol: number): Promise<UsersResponse> => {
  try {
    const response = await api.post<UsersResponse>("/v1/user/findUsersByRol", {
      rolId: rol,
    });
    return response.data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw error.response.data.message;
    }
    throw error.message;
  }
};

export const getUserByRut = async (id: number): Promise<UserResponse> => {
  const response = await api.post<UserResponse>("/v1/user/findUserByRut", {
    rut: id,
  });
  // Lógica para obtener un usuario por ID
  return response.data;
};

export const createUser = async (
  data: Partial<User>,
): Promise<CreateResponse> => {
  // Lógica para crear un nuevo usuario
  try {
    const response = await api.post<CreateResponse>("/v1/user/create", data);
    return response.data;
  } catch (error: any) {
    console.log(error, "error");
    if (error.response.data.message) {
      throw error.response.data.message;
    }
    throw error.message;
  }
};

export const updateUser = async (
  id: number,
  data: Partial<User>,
): Promise<User> => {
  // Lógica para actualizar un usuario
  return {} as User;
};

export const deleteUser = async (id: number): Promise<void> => {
  // Lógica para eliminar un usuario
};
