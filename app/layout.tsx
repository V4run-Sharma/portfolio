import type { Metadata } from "next";

import { Inter } from "next/font/google";

import Header from "@/components/header";
import MobileMenu from "@/components/mobile-menu";

import "./globals.css";
import Header2 from "@/components/header";
import ActiveSectionContextProvider from "@/contexts/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varun | Portfolio",
  description:
    "Varun Sharma, Full Stack Developer, Web Designer, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#c6d4ff] darkbg-[#676394] blur-[15rem] fixed -z-10 rounded-full w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] md:top-[-8rem] top-[-4rem] sm:left-[-8rem] xl:left-[8rem] md:left-[-8rem] left-[-12rem]"></div>
        <div className="bg-[#a8ffe3] darkbg-[#589380] blur-[15rem] fixed -z-10 rounded-full w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] md:top-[-8rem] bottom-[-4rem] sm:right-[-8rem] xl:right-[8rem] md:right-[-8rem] right-[-12rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          <MobileMenu />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
