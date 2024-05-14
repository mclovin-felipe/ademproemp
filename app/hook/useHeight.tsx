import { useState, useEffect } from "react";

const useHeightToTop = (ref: React.RefObject<HTMLElement>): number => {
  const [heightToTop, setHeightToTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        setHeightToTop(top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Calcular la altura al cargar la página

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return heightToTop;
};

export default useHeightToTop;
