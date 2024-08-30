export interface DatosProps {
  titulo: string;
  cursos: CursosProps[];
}
export interface CursosProps {
  title: string;
  description: string;
  startDate: string; // ISO 8601 date format
  endDate: string; // ISO 8601 date format
  classesNumber: number;
  createdAt: string; // ISO 8601 date format
  updatedAt: string; // ISO 8601 date format
  price: number;
  media: any | null;
  rutProfesor: string;
  categoryId: number;
  id: number;
  disabled?: boolean;
  days: number[];
  startTime: string;
  endTime: string;
}
export interface Category {
  id: number;
  name: string;
}
export interface CategoryResponse {
  error: boolean;
  message: string;
  data: Category[];
}
