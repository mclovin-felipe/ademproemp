const Header = ({ title, image }: { title: string; image?: string }) => {
  return (
    <div className="h-96  5xl:h-[30vh] bg-primary w-full flex justify-end items-start p-14 flex-col ">
      <h1 className="text-white  text-7xl font-bold ">{title}</h1>
      <div className="w-5/6 lg:w-2/5">
        <div className="w-full h-4  rounded-full animate-width-full bg-white"></div>
      </div>
    </div>
  );
};

export default Header;
