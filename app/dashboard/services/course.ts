import {
  getAllCategories,
  addCourse,
  getAllCourses,
  getAllInscriptions,
} from "@/services/course";
import { Category, CursosProps } from "@/types/cursos";
export async function getInscription(): Promise<any> {
  try {
    const response = await getAllInscriptions();
    console.log(response);
    return response.data;
  } catch (error: Error | any) {
    throw Error(error);
  }
}
export async function getCourses(): Promise<any> {
  try {
    const response = await getAllCourses();
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
}
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await getAllCategories();
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
}
export async function addCourseService(data: any): Promise<any> {
  try {
    const response = await addCourse(data, "");
    if (response.error) {
      return response;
    }
    return response.data;
  } catch (error: any) {
    throw Error(error);
  }
}
export async function getCourseById(id: number): Promise<any> {
  try {
    const response = await getAllCourses();
    if (response.error) {
      return response;
    } else {
      return response.data.find(
        (item: CursosProps) => item.id === parseInt(id.toString())
      );
    }
  } catch (error: any) {
    throw Error(error);
  }
}
