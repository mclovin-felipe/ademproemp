import { getUsersRol } from "@/app/dashboard/services/users";
import { CardProfesor, Header, Search } from "../component";
const getProfesores = async () => {
  try {
    const response = await getUsersRol(2);
    const data = response;
    return data;
  } catch (error) {
    return [];
  }
};
const Page = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  const profesores = await getProfesores();
  const query = searchParams?.query || "";
  return (
    <main className="">
      <Header title="Profesores" />
      <div className="w-5/6 mx-auto gap-y-5 lg:grid lg:grid-cols-7 p-5">
        <div className="lg:col-span-2 lg:p-3">
          <Search />
        </div>
        {profesores.filter((item) =>
          item.firstName.toLowerCase().includes(query.toLowerCase())
        ).length === 0 ? (
          <div className="flex col-span-5 flex-col items-center justify-center w-full gap-y-5 text-center">
            <h1 className="text-4xl font-bold">No hay profesores</h1>
            <p className="text-gray-600">
              No hay profesores que coincidan con tu búsqueda
            </p>
          </div>
        ) : (
          <div className="col-span-5 grid lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-3 5xl:grid-cols-5 gap-5">
            {profesores
              .filter((item) =>
                item.firstName.toLowerCase().includes(query.toLowerCase())
              )
              .map((item) => (
                <CardProfesor key={item.id} {...item} />
              ))}
          </div>
        )}
      </div>
    </main>
  );
};
export default Page;
