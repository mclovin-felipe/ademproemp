interface Props {
  src: string;
  title: string;
  desc: string;
}
const Nostros = ({ src, title, desc }: Props) => {
  return (
    <div className="grid grid-cols-3 justify-center items-center">
      <img
        src={src}
        className="w-full h-[120px] object-cover border rounded-t-lg rounded-lg"
      />
      <div className="col-span-2 p-4 gap-y-5 flex flex-col justify-center">
        <p className="text-gray-800">{title}</p>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};
export default Nostros;
