import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* PAGINA EN CONSTRUCCION */}
      <h1 className="text-6xl font-bold text-center">Página en construcción</h1>
      <p className="text-2xl text-center">Estamos trabajando en ello</p>
      <p className="text-2xl text-center">Vuelve pronto</p>
      <p className="text-2xl text-center">Gracias por tu paciencia</p>
      <p className="text-2xl text-center">🚧🚧🚧</p>
      <Image
        src="/arquitecto.png"
        alt="Página en construcción"
        width={300}
        height={300}
      />
    </main>
  );
}
