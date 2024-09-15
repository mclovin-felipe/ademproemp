export interface Route {
  path: string;
  title: string;
  subRoutes?: Route[];
  description?: string;
  icon: any;
}
