export interface Credentials {
  rut: string;
  password: any;
}
export interface LoginResponse {
  message: string;
  data: {
    token: string;
  };
}
