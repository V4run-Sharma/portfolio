import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/header";
import MobileMenu from "@/components/mobile-menu";
import ActiveSectionContextProvider from "@/contexts/active-section-context";

import "./globals.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varun | Portfolio",
  description:
    "Varun Sharma, Software Development Engineer focused on Backend and Full-Stack systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className="theme-blob-a bg-[#c6d4ff] blur-[15rem] fixed -z-10 rounded-full w-120 h-120 md:w-160 md:h-160 md:-top-32 -top-16 sm:-left-32 xl:left-32 md:-left-32 -left-48"></div>
        <div className="theme-blob-b bg-[#a8ffe3] blur-[15rem] fixed -z-10 rounded-full w-120 h-120 md:w-160 md:h-160 md:-top-32 -bottom-16 sm:-right-32 xl:-right-32 md:-right-32 -right-48"></div>

        <ActiveSectionContextProvider>
          <Header />
          <MobileMenu />
          {children}
          <ScrollToTop />
          <Footer />
        </ActiveSectionContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
