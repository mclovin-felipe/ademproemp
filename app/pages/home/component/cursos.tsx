"use client";
import Carousel from "@/components/Carousel/EmblaCarousel";
import useCourse from "@/app/hook/content/useCourse";
import CardGenerica from "@/app/pages/component/CardGenerica";
import ErrorCard from "@/app/pages/component/errorCard";
import Link from "next/link";
const Cursos = () => {
  const { course, loading, error } = useCourse();
  if (error) return <ErrorCard />;
  if (loading) return <div>Loading...</div>;
  if (course.length === 0)
    return <div className="text-3xl my-14">No hay cursos en este momento</div>;
  return (
    <div className="  mx-auto w-5/6 scroll">
      <Carousel
        slides={course
          .reverse()
          .slice(0, 3)
          .map((item) => (
            <Link href={`/pages/cursos`} key={item.id}>
              <CardGenerica
                key={item.id}
                title={item.title}
                desc={item.description}
                image={item.media as string}
              />
            </Link>
          ))}
      />
    </div>
  );
};
export default Cursos;
