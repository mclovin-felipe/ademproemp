"use client";

import { Header } from "@/app/pages/component";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Error = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <Header title="No hemos encontrado esta noticia" />
      <div className="flex flex-col p-5 gap-y-5">
        <h1 className="text-xl">No hemos encontrado la noticia</h1>
        <p className="text-center">Volver a las noticas</p>
        <Button onClick={() => router.back()}>Volver</Button>
      </div>
    </div>
  );
};
export default Error;
