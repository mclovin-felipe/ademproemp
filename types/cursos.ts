export interface DatosProps {
  titulo: string;
  cursos: CursosProps[];
}
export interface CursosProps {
  titulo: string;
  precio: number;
  precioAntes: number;
  duracion: string;
  cursos: number;
  ventas: number;
  profesor: string;
  calificacion: number;
  calificaciones: number;
}
