import { Inter } from "next/font/google";

import { Header } from "@/components/Header";
import { SideBar } from "@/components/Sidebar";
import { HeroPattern } from "@/components/HeroPattern";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Protocol",
  description: "Welcome to protocol",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-900">
        <SideBar />

        <div className="ml-80 relative h-screen">
          <Header />
          <HeroPattern />

          <div className="py-24 max-w-4xl px-8 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
