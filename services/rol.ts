import { RolResponse } from "@/types/rol";
import apiAuth from "@/lib/apiAuth";
export const getAllRols = async (token: string): Promise<RolResponse> => {
  const response = await apiAuth.get<RolResponse>("v1/roles/findAllRoles", {
    Authorization: `Bearer ${token}`,
  });
  return response.data;
};
