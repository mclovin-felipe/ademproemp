import { getAllNews } from "../services/news";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CardNew from "../component/news/card";

const Page = async () => {
  const news = await getAllNews();

  return (
    <div className="flex flex-col justify-start gap-y-14  w-full items-start p-14 ">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-4xl font-semibold">Noticias</h1>

        <div>
          <Link href="/dashboard/noticias/crear">
            <Button className="rounded-full text-black">
              Crear un noticias
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full left-0   max-w-lg text-sm font-medium text-center text-gray-500 border-b border-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap  items-start justify-start "></ul>
      </div>
      <div className="grid grid-cols-4 w-full gap-5">
        {news.map((item) => (
          <CardNew key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Page;
