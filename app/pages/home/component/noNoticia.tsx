import classNames from "classnames";

const NoNoticia = ({ type }: { type?: string }) => {
  return (
    <div
      className={classNames(
        "flex-row gap-x-3  bg-gray-300 rounded-lg w-full flex items-center justify-center text-gray-800",
        {
          "h-1/2": type === "side",
          "h-full ": type !== "side",
        }
      )}
    >
      No hay noticias
    </div>
  );
};
export default NoNoticia;
