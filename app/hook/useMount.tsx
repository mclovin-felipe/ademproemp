import { useEffect } from "react";

const onMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
export default onMount;
