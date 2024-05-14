// Profesor not found
// Path: app/pages/profesores/%5BidProfesor%5D/page.tsx
// Compare this snippet from app/pages/contacto/page.tsx:
import { Header, Profesores } from "@/app/components";
const Page = () => {
  return (
    <section>
      <Header image="/profesor.png" titulo="Profesores" />
      <Profesores home={false} />
    </section>
  );
};
export default Page;
