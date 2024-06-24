import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
const useScrollBeyondFirstScreen = () => {
  const home = usePathname() === "/home";
  const [isBeyondFirstScreen, setIsBeyondFirstScreen] = useState(false);

  const checkScrollPosition = () => {
    if (
      window.scrollY > (home ? window.innerHeight / 2 : window.innerHeight / 3)
    ) {
      setIsBeyondFirstScreen(true);
    } else {
      setIsBeyondFirstScreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, [home]);

  return isBeyondFirstScreen;
};

export default useScrollBeyondFirstScreen;
