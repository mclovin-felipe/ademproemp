"use client";
import React, { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./carouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";

// import '@/styles/sandbox.css'
import "./css/embla.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PropType = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container py-5">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{item}</div>
            </div>
          ))}
        </div>
      </div>
      {prevBtnDisabled && nextBtnDisabled ? (
        <div></div>
      ) : (
        <div className="flex justify-end mt-3 ">
          <div className="flex gap-x-2">
            <Button
              size={"icon"}
              className="flex items-cente justify-center rounded-full bg-primary"
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            >
              <ChevronLeft />
            </Button>
            <Button
              size={"icon"}
              className="flex items-cente justify-center rounded-full bg-primary"
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
