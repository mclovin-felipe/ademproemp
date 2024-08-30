"use client";
import React from "react";
import { useAppDispatch } from "@/hooks/hook";
import { setBuy } from "@/redux/slices/buy";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export const ButtonInscribir = ({
  id,
  title,
  price,
}: {
  id: number;
  title: string;
  price: number;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClick = () => {
    dispatch(setBuy({ id, title, price }));
    router.push("/pages/comprar");
  };
  return (
    <Button size={"lg"} className="text-xl" onClick={handleClick}>
      Inscribir
    </Button>
  );
};
