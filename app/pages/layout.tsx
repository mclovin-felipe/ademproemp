import { Footer, NavBar } from "./component";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavBar />
      <div className="min-h-[75.3vh]">{children}</div>
      <Footer />
    </div>
  );
}
