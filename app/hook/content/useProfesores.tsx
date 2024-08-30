import { getUsersRol } from "@/app/dashboard/services/users";
import { User } from "@/types/user";
import React from "react";
const useProfesores = () => {
  const [profesores, setProfesores] = React.useState<User[]>([]);
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProfesores = async () => {
      try {
        const response = await getUsersRol(2);

        setProfesores(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };
    fetchProfesores();
  }, []);

  return {
    profesores,
    loading,
    error,
  };
};

export default useProfesores;
