const CardProfesor = () => {
  return (
    <div className="rounded-lg  lg:w-auto bg-card p-4 flex flex-col gap-y-3 max-w-[400px] ">
      <img src="/profesor.png" alt="Profesor" className="rounded-t-lg" />
      <div className="p-4 break-words">
        <p className="text-lg text-black font-bold">Felipe Ponce</p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          placeat nihil a itaque minus quidem.
        </p>
      </div>
    </div>
  );
};

export default CardProfesor;
