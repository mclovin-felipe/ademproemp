import { getAllNews } from "@/app/dashboard/services/news";
import { CardNoticia, Header, Search } from "../component";
import { Article } from "@/types/news";
const Page = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  const query = searchParams?.query || "";
  const news = await getAllNews();
  return (
    <main>
      {/* <Header title="Noticias" image="/profesor.png" /> */}
      <Header title="Noticias" />
      <div className="flex flex-col gap-y-5 lg:grid lg:grid-cols-7 p-5 lg:w-5/6 mx-auto">
        <div className="flex flex-col col-span-5 lg:p-14 gap-5">
          {news
            .filter((item: Article) =>
              item.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((item: Article) => (
              <CardNoticia {...item} />
            ))}
          {news.length === 0 && (
            <div className="flex col-span-5 flex-col items-center justify-center w-full gap-y-5 text-center">
              <h1 className="text-4xl font-bold">No hay noticias</h1>
              <p className="text-gray-600">
                No hay noticias que coincidan con tu búsqueda
              </p>
            </div>
          )}
        </div>
        <div className="col-span-2 lg:p-3 -order-last lg:order-last">
          <Search />
        </div>
      </div>
    </main>
  );
};
export default Page;
