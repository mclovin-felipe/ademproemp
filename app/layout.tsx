import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Footer, NavBar } from "./components";
import NavMobile from "./components/layout/navMobile";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AdempRoem",
  description: "...",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <NavMobile />
        <NavBar />
        {children}
        <div className="h-44"></div>
        <Footer />
      </body>
    </html>
  );
}
