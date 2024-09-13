import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DataItem, ClassifiedData } from "@/types/cursos";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return price.toLocaleString("es-CL");
};
export const classifyByMonth = (data: DataItem[]): ClassifiedData[] => {
  const monthMap = new Map<string, number>();

  // Clasificar por mes (formato "YYYY-MM")
  data.forEach((item) => {
    const month = new Date(item.created_at).toISOString().slice(0, 7); // "YYYY-MM"

    // Si el mes no existe en el Map, inicializamos con 0
    if (!monthMap.has(month)) {
      monthMap.set(month, 0);
    }

    // Incrementamos el contador de inscripciones para el mes correspondiente
    monthMap.set(month, (monthMap.get(month) || 0) + 1);
  });

  // Obtener los últimos 6 meses (incluyendo los vacíos)
  const lastSixMonths = getLastSixMonths();

  // Construir el arreglo con el mes y el conteo de inscripciones, llenando con 0 si el mes no tiene inscripciones
  const monthSummary: ClassifiedData[] = lastSixMonths.map((month) => ({
    month,
    count: monthMap.get(month) || 0,
  }));

  return monthSummary;
};

// Función para obtener los últimos 6 meses en formato "YYYY-MM"
const getLastSixMonths = (): string[] => {
  const months = [];
  const today = new Date();

  for (let i = 0; i < 6; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const monthString = date.toISOString().slice(0, 7); // Formato "YYYY-MM"
    months.push(monthString);
  }

  return months.reverse(); // Para devolver los meses en orden cronológico ascendente
};
