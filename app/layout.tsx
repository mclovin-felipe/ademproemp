import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/providers/reduxProvider";
import { auth } from "@/auth";
import { AuthProvider } from "@/providers/authProvider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AdempRoem",
  description: "...",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <ReduxProvider>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased  ",
            fontSans.variable
          )}
        >
          <AuthProvider session={session}>
            {children}
            <Toaster />
          </AuthProvider>
        </body>
      </ReduxProvider>
    </html>
  );
}
