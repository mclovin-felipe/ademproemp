const KPI = ({
  title,
  value,
  color,
  icon,
}: {
  title: string;
  value: number;
  color: string;
  icon: any;
}) => {
  return (
    <div className=" py-5 px-3 w-auto bg-[#191919] rounded-2xl grid grid-cols-3 gap-x-5  justify-center items-center">
      <div
        style={{
          backgroundColor: color,
        }}
        className={`h-14 w-14 rounded-full  flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className="col-span-2">
        <h1 className="text-md">{title} </h1>
        <h1 className="text-xl font-bold ">{value}</h1>
      </div>
    </div>
  );
};
export default KPI;
