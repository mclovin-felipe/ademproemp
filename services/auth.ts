import { Credentials, LoginResponse } from "@/types/auth";
import api from "@/lib/api";
export const login = async (data: Credentials): Promise<LoginResponse> => {
  console.log(data);
  const response = await api.post<LoginResponse>("/v1/auth/login", data);
  console.log(response.data, "response232323");
  return response.data;
};
