"use client";

import { useEffect } from "react";

const Page = () => {
  // REDIRECT to /home
  useEffect(() => {
    // Redirect to /home
    window.location.href = "/home";
  }, []);
  return (
    <div>
      <h1>Inicio</h1>
    </div>
  );
};
export default Page;
