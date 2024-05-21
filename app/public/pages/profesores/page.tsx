// Profesor not found
// Path: app/pages/profesores/%5BidProfesor%5D/page.tsx
// Compare this snippet from app/pages/contacto/page.tsx:
import { Header, ProfesorCard, Profesores } from "@/app/components";
const Page = () => {
  return (
    <section>
      <Header image="/profesor.png" titulo="Profesores" />
      <div className="hidden lg:flex justify-center flex-wrap w-5/6 mx-auto mt-14">
        {[...Array(5)].map((_, i) => (
          <ProfesorCard home={false} key={i} />
        ))}
      </div>
      <div className="lg:hidden">
        <Profesores home={false} />
      </div>
    </section>
  );
};
export default Page;
