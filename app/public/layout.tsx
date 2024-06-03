import { Footer, NavBar } from "../components";
import NavMobile from "../components/layout/navMobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavBar />
      <NavMobile />
      {children}
      <div className="h-44"></div>
      <Footer />
    </div>
  );
}
