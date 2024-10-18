import Carousel from "@/components/Carousel/EmblaCarousel";
import Card from "../Card";
const NosotrosCards = () => {
  return (
    <Carousel
      slides={[
        <Card
          title="Compromiso con la calidad"
          subtitle="Nos dedicamos a ofrecer una formación de excelencia, guiados por profesionales calificados que garantizan un aprendizaje efectivo."
          image="/grafico.png"
          link="https://www.google.com"
        />,
        <Card
          title="	Atención personalizada"
          subtitle="Cada estudiante es importante para nosotros. Ofrecemos un acompañamiento cercano y personalizado en cada etapa de su formación."
          image="/manos.png"
          link="https://www.google.com"
        />,
        <Card
          title="Certificaciones reconocidas"
          subtitle="Nuestra misión es que obtengas certificaciones que te abran puertas en el mundo laboral, respaldadas por las mejores instituciones."
          image="/certificado.png"
          link="https://www.google.com"
        />,
      ]}
    />
  );
};
export default NosotrosCards;
