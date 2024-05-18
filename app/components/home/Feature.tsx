import React from "react";
import { Card } from "@/app/components";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";

const Feature = () => {
  return (
    <div className="flex  flex-col justify-start items-center  ">
      {/* <div className="absolute h-1/2 bg-gray-50 w-5/6 shadow-md -z-40 "></div> */}
      <div className=" mt-24 flex flex-col items-center ">
        <h1 className="text-4xl">Por qué elegirnos?</h1>
        <p className="w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero
          soluta natus vel delectus molestias alias.
        </p>
        <div className="px-5">
          <EmblaCarousel
            slides={[...Array(3)].map((_, i) => (
              <Card key={i} />
            ))}
          />
        </div>
      </div>
    </div>
  );
};
export default Feature;
