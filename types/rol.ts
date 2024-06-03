export interface Rol {
  id: number;
  name: string;
}
export interface RolResponse {
  data: Rol[];
  error: boolean;
  message: string;
}
