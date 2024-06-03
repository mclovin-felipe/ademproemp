import { getAllCategories } from "@/services/course";
import { Category } from "@/types/cursos";

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await getAllCategories();
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
}
