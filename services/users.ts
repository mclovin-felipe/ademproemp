import {
  Alumno,
  CreateResponse,
  User,
  UserResponse,
  UsersResponse,
} from "@/types/user";
import apiAuth from "@/lib/apiAuth";
import { ProfesoresResponse } from "@/types/profesores";

import api from "@/lib/api";
import { Profesor } from "@/types/profesores";
export const getAllUsers = async (): Promise<UsersResponse> => {
  const response = await api.get<UsersResponse>("/v1/user/findAllUsers");
  return response.data;
};
export const createAlumno = async (
  data: Partial<Alumno>
): Promise<CreateResponse> => {
  const response = await api.post<CreateResponse>(
    "/v1/user/createAlumno",
    data
  );
  return response.data;
};
export const getUsersByRol = async (
  rol: number
): Promise<ProfesoresResponse> => {
  try {
    const response = await api.post<ProfesoresResponse>(
      "/v1/user/findUserByRolId",
      {
        rolId: rol,
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw error.response.data.message;
    }
    throw error.message;
  }
};

export const getUserByRut = async (
  id: string,
  token: string
): Promise<UserResponse> => {
  const response = await apiAuth.post<UserResponse>(
    "/v1/user/findUserByRut",
    {
      rut: id,
    },
    {
      Authorization: `Bearer ${token}`,
    }
  );
  // Lógica para obtener un usuario por ID
  return response.data;
};
export const getAlumno = async (id: string): Promise<UserResponse> => {
  try {
    const response = await api.post<UserResponse>("/v1/user/findUserByRut", {
      rut: id,
    });
    // Lógica para obtener un usuario por ID
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (
  data: Partial<User>
): Promise<CreateResponse> => {
  // Lógica para crear un nuevo usuario
  try {
    const response = await api.post<CreateResponse>(
      "/v1/user/create",
      data,
      {}
    );
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
  data: Partial<User>
): Promise<User> => {
  // Lógica para actualizar un usuario
  return {} as User;
};

export const deleteUser = async (id: number): Promise<void> => {
  // Lógica para eliminar un usuario
};
