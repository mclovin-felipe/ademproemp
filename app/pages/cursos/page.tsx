import { Header, Search } from "../component";
import { getCourses } from "@/app/dashboard/services/course";
import CardCurso from "@/app/pages/component/CardCurso";
import { CursosProps } from "@/types/cursos";
const Page = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  const course = await getCourses();
  const query = searchParams?.query || "";
  return (
    <main className="">
      <Header title="Cursos" />
      <div className="w-5/6 mx-auto  gap-y-5 lg:grid lg:grid-cols-5 5xl:grid-cols-7 p-5">
        <div className="lg:col-span-2 lg:p-3 w-full">
          <Search />
        </div>

        {course.filter(
          (item: CursosProps) =>
            item.title.toLowerCase().includes(query.toLowerCase()) &&
            item.disabled === false
        ).length === 0 ? (
          <div className="flex col-span-5 flex-col items-center justify-center w-full gap-y-5 text-center">
            <h1 className="text-4xl font-bold">No hay cursos</h1>
            <p className="text-gray-600">
              No hay cursos que coincidan con tu búsqueda
            </p>
          </div>
        ) : (
          <div className="col-span-5 grid lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 5xl:grid-cols-6 gap-5">
            {course
              .filter((item: CursosProps) =>
                item.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((item: CursosProps) => (
                <CardCurso key={item.id} {...item} />
              ))}
          </div>
        )}
      </div>
    </main>
  );
};
export default Page;
