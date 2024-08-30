import SideBar from "./component/sideBar";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div className="grid lg:grid-cols-7 grid-cols-12 h-screen  md:flex-row md:overflow-hidden bg-black text-white ">
      <div className="col-span-2 lg:col-span-1 ">
        <SideBar />
      </div>
      <div className="  col-span-10 lg:col-span-6 overflow-y-auto ">
        {children}
      </div>
    </div>
  );
}
