export interface Profesor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rut: string;
  rolId: number;
  media: string;
  createdAt: string;
}

export interface ProfesoresResponse {
  data: Profesor[];
  error: boolean;
  message: string;
}
