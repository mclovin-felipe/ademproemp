import { RolResponse } from "@/types/rol";
import api from "@/lib/api";
export const getAllRols = async (): Promise<RolResponse> => {
  const response = await api.get<RolResponse>("/v1/roles/findAllRoles");
  return response.data;
};
