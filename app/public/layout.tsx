import { Footer, NavBar } from "./component";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
