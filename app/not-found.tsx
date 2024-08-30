import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-5xl font-bold text-center">404</h1>
      <p className="text-center">La página que buscas no existe</p>
      <Link
        className="text-center text-white px-5 py-2 rounded-lg bg-primary "
        href="/"
      >
        Ir a la página principal
      </Link>
    </div>
  );
};
export default NotFound;
