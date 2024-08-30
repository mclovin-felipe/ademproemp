import useAxiosInstance from "@/lib/axios";
export const fetchData = async () => {
  const axiosInstance = useAxiosInstance();
  try {
    const response = await axiosInstance.get("/api/users/getRoles");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
