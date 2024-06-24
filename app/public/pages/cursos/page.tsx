import { CardCurso, Header, Search } from "../../component";
const Page = () => {
  return (
    <main className="">
      <Header title="Cursos" />
      <div className="w-5/6 mx-auto  gap-y-5 lg:grid lg:grid-cols-7 p-5">
        <div className="lg:col-span-2 lg:p-3 w-full">
          <Search />
        </div>
        <div className="col-span-5 grid lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-3 5xl:grid-cols-5 gap-5">
          <CardCurso />
          <CardCurso />
          <CardCurso />
          <CardCurso />
          <CardCurso />
        </div>
      </div>
    </main>
  );
};
export default Page;
