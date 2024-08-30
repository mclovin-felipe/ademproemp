import Tags from "@/app/dashboard/noticias/crear/components/tags";
import { getNewsById } from "@/app/dashboard/services/news";
import { Header } from "@/app/pages/component";
import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
const Page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const data = await getNewsById(params.id);
  return (
    <main className="min-h-screen flex flex-col items-start   w-full pb-14">
      <Header title={"Noticias"} />

      <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto  h-full flex  gap-y-5 flex-col my-14">
        <h1 className="font-semibold text-6xl">{data.title}</h1>
        <div className="flex flex-row items-center ">
          {format(data.publishDate, "dd 'de' MMMM", { locale: es })}
        </div>
        <Image
          src={data.media || ""}
          alt="Picture of the author"
          width={500}
          className="mx-auto"
          height={500}
        />
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
        <Tags tags={data.tags} home={false} />
      </div>
    </main>
  );
};
export default Page;
