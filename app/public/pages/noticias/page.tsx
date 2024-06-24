import { CardNoticia, Header, Search } from "../../component";

const Page = () => {
  return (
    <main>
      {/* <Header title="Noticias" image="/profesor.png" /> */}
      <Header title="Noticias" />
      <div className="flex flex-col gap-y-5 lg:grid lg:grid-cols-7 p-5 w-5/6 mx-auto">
        <div className="flex flex-col col-span-5 lg:-14 gap-5">
          <CardNoticia />
          <CardNoticia />
          <CardNoticia />
        </div>
        <div className="col-span-2 lg:p-3 -order-last lg:order-last">
          <Search />
        </div>
      </div>
    </main>
  );
};
export default Page;
