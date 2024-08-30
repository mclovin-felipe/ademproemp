"use client";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/hook";
import { getCourseById } from "@/services/course";
import { CursosProps } from "@/types/cursos";
import Image from "next/image";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const PayOrder = () => {
  function generateBuyOrder(): string {
    const timestamp = Date.now(); // Obtiene la marca de tiempo actual en milisegundos
    const randomNumber = Math.floor(Math.random() * 1000000); // Número aleatorio de 6 dígitos
    return `ORD-${timestamp}-${randomNumber}`;
  }
  function generateSessionID(): string {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `SESSION-${timestamp}-${randomNumber}`;
  }
  const curso = useAppSelector((state) => state.buy);
  const user = useAppSelector((state) => state.user);
  const [course, setCourse] = useState<CursosProps>();
  const [buyOrder, setBuyOrder] = useState(generateBuyOrder());
  const [sessionId, setSessionId] = useState(generateSessionID());
  const [amount, setAmount] = useState("");
  const [returnUrl, setReturnUrl] = useState(
    "http://localhost:3000/pages/return"
  );
  const getCourse = async () => {
    try {
      const response = await getCourseById(1);
      console.log(response);
      setCourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}v1/transaction/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userRut: "20063709-7",
          courseId: 1,
        }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      // Redirige al usuario a la URL de WebpayPlus
      // window.location.href = data.url;
      window.location.href = `${data.data.url}?token_ws=${data.data.statusToken}`;
    } else {
      console.error("Error:", data.error);
    }
  };
  useEffect(() => {
    console.log(curso);
    getCourse();
    setAmount("5000");
    console.log(user);
  }, []);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-semibold">Finaliza tu compra</h1>
      <p>
        Estimado(a) {user.firstName} {user.lastName} por favor revisa los datos
        de tu compra
      </p>
      <div className="grid grid-cols-2 bg-gray-50 rounded-md p-4">
        <div className="flex flex-col">
          <p className="font-semibold">Nombre del curso</p>
          <p> {course?.title}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Precio</p>
          <p> ${course?.price}</p>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-200"></div>
      <h3 className="font-semibold">Metodo de pago</h3>
      <Image
        alt="webpay"
        src={"/webpay.svg"}
        width={200}
        className="mx-auto"
        height={200}
      />

      <Button type="submit">Pagar</Button>
    </form>
  );
};
export default PayOrder;
