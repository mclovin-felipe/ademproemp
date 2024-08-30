"use client";
import useProfesores from "@/app/hook/content/useProfesores";
import CardGenerica from "@/app/pages/component/CardGenerica";
import ErrorCard from "@/app/pages/component/errorCard";
import Carousel from "@/components/Carousel/EmblaCarousel";
const Professores = () => {
  const { profesores, loading, error } = useProfesores();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <ErrorCard />;
  }
  return (
    <div className="  mx-auto w-5/6 scroll">
      <Carousel
        slides={profesores.slice(0, 3).map((item) => (
          <CardGenerica
            key={item.id}
            title={item.firstName + " " + item.lastName}
            desc={item.email}
            image={item.media as string}
          />
        ))}
      />
    </div>
  );
};
export default Professores;
