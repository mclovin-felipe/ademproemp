export interface User {
  id: number;
  rut: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  rolId: number;
  file: any;
  disabled?: boolean;
}

export interface Alumno {
  rut: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  rolId: number;
  disabled: boolean;
}
export interface UsersResponse {
  data: User[];
  error: boolean;
  message: string;
}
export interface UserResponse {
  data: User;
  error: boolean;
  message: string;
}

export interface CreateResponse {
  data?: {
    id: number;
  };
  error: boolean;
  message: string;
}
