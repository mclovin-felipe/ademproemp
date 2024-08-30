"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import classNames from "classnames";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

const Page: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();
  // const { token_ws } = router.query;
  const token_ws =
    searchParams.get("token_ws") || searchParams.get("TBK_TOKEN");
  useEffect(() => {
    // Llama a tu API para confirmar la transacción

    const confirmPayment = async () => {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}v1/inscription/create`, {
          TToken: token_ws,
        })
        .then((response) => {
          console.log("Pago confirmado:", response.data);
          setResponse(response.data);
        })
        .catch((error) => {
          setError(true);
          console.error("Error:", error);
        });
      //   const response = await fetch(
      //     "http://localhost:3003/v1/inscription/create",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ TToken: token_ws }),
      //     }
      //   );

      //   const data = await response.json();
      //   if (response.ok) {
      //     console.log("Pago confirmado:", data);
      //     setResponse(data);
      //   } else {
      //     setError(true);
      //     console.error("Error:", data.error);
      //   }
      // };
    };
    try {
      confirmPayment();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-white ">
      <div
        className={classNames(
          " bg-white p-10 lg:p-14 rounded-md transition-transform duration-300 ease-out flex flex-col items-center justify-center",
          {
            " w-5/6 mx-auto lg:min-w-[40rem] lg:min-h-[20rem]": !loading,
          }
        )}
      >
        {loading && (
          <>
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            <div className="mt-5">Procesando pago...</div>
          </>
        )}
        {response && (
          <div className="gap-y-5 flex flex-col">
            <div>
              <h1 className="text-3xl font-semibold">Pago confirmado</h1>
              <p className="text-sm">Nº Orden: {response.data.buyOrder}</p>
            </div>

            <div>
              <p>Felicitaciones, has comprado tu curso con exito</p>
              <p>
                en breve te llegara un correo electronico de bienvenida, con los
                pasos a seguir.
              </p>
            </div>

            <h5>Muchas gracias</h5>
            <div className="flex flex-row gap-x-5">
              <Link href="/pages/cursos">
                <Button>Ir a cursos</Button>
              </Link>
              <Link href="/pages/home">
                <Button variant={"outline"}>Ir a Inicio</Button>
              </Link>
            </div>
          </div>
        )}
        {error && (
          <div className="flex flex-col gap-y-5">
            <h1 className="text-4xl font-bold lg:w-1/2">
              Lo sentimos, no pudimos completar tu transacción :(
            </h1>
            <p>Vuelve a intentarlo mas tarde</p>
            <div className="flex flex-row gap-x-5">
              <Link href="/pages/cursos">
                <Button>Ir a cursos</Button>
              </Link>
              <Link href="/pages/home">
                <Button variant={"outline"}>Ir a Inicio</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
