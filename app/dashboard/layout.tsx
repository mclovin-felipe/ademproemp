import SideBar from "./component/sideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-7 grid-cols-12 h-screen  md:flex-row md:overflow-hidden bg-black text-white ">
      <div className="col-span-2 lg:col-span-1 ">
        <SideBar />
      </div>
      <div className="  col-span-10 lg:col-span-6 overflow-y-auto p-14">
        {children}
      </div>
    </div>
  );
}
