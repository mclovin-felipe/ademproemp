import { CategoryResponse } from "@/types/cursos";
import apiAuth from "@/lib/apiAuth";
import api from "@/lib/api";
export const getAllCategories = async (): Promise<CategoryResponse> => {
  const response = await api.get<CategoryResponse>(
    "/v1/category/findAllCategories"
  );
  return response.data;
};

export const addCourse = async (data: any, token: string): Promise<any> => {
  const response = await apiAuth.post("/v1/course/create", data, {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  });
  return response.data;
};
export const getAllCourses = async (): Promise<any> => {
  const response = await api.get("/v1/course/findAll");
  return response.data;
};
export const getCourseById = async (id: number): Promise<any> => {
  const response = await api.get(`/v1/course/findOne/${id}`);
  return response.data;
};
