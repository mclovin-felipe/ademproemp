import { CategoryResponse } from "@/types/cursos";

import api from "@/lib/api";
export const getAllCategories = async (): Promise<CategoryResponse> => {
  const response = await api.get<CategoryResponse>(
    "/v1/category/findAllCategories",
  );
  return response.data;
};
