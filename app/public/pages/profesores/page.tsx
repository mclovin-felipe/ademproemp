import { CardProfesor, Header, Search } from "../../component";
const Page = () => {
  return (
    <main className="">
      <Header title="Profesores" />
      <div className="w-5/6 mx-auto lg:grid lg:grid-cols-7 p-5">
        <div className="lg:col-span-2 p-3">
          <Search />
        </div>
        <div className="col-span-5 grid lg:grid-cols-2 2xl:grid-cols-3 5xl:grid-cols-5 gap-5">
          <CardProfesor />
          <CardProfesor />
          <CardProfesor />
          <CardProfesor />
          <CardProfesor />
        </div>
      </div>
    </main>
  );
};
export default Page;
