"use client";

import { useEffect, useState } from "react";
import ErrorCard from "../component/errorCard";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.log(error.message);
    setErrorMessage(error.message);
  }, [error]);
  const [errorMessage, setErrorMessage] = useState("");
  if (errorMessage === "USER_NOT_FOUND")
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-primary to-white text-white">
        <h1 className="text-4xl font-bold">
          No hay profesores en este momento
        </h1>
      </div>
    );
  return <ErrorCard />;
}
