import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "next-auth/jwt";

class Api {
  private axiosInstance: AxiosInstance;

  constructor(private baseURL: string) {
    this.baseURL = baseURL;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Registrar el interceptor de solicitud
    this.axiosInstance.interceptors.request.use(
      async (config: any) => {
        console.log(config, "configPIPIPI");
        const token = await getToken({
          req: config as any,
          secret: process.env.NEXTAUTH_SECRET || "",
          salt: process.env.NEXTAUTH_SALT || "",
        });
        console.log(token, "token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // (Opcional) Registrar el interceptor de respuesta
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, params?: object): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance.get<T>(url, {
      headers: params,
    });
    console.log(response, "pipipi");
    return response;
  }

  async post<T>(
    url: string,
    data: object,
    params?: object
  ): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance.post<T>(url, data, {
      headers: params,
    });
    return response;
  }
}

export default new Api(process.env.NEXT_PUBLIC_API_BASE_URL as string);
