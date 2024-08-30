import { getAllCourses } from "@/services/course";
import { CursosProps } from "@/types/cursos";
import { useState, useEffect } from "react";

const useCourse = () => {
  const [course, setCourse] = useState<CursosProps[]>(
    null as unknown as CursosProps[]
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as unknown as Error);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCourses();
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { course, loading, error };
};

export default useCourse;
