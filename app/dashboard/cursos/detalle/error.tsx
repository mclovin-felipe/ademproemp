"use client";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const Error = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  console.log(searchParams.get("id"));
  return (
    <div className="flex flex-col justify-center gap-y-14  w-full items-center p-14  h-full">
      <h1 className="text-4xl font-semibold">No se encontro el curso</h1>
      <Button
        onClick={() => {
          router.push("/dashboard/cursos");
        }}
      >
        Volver al inicio
      </Button>
    </div>
  );
};
export default Error;
