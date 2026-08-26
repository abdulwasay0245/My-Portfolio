import type { Metadata } from "next";
import { Outfit, Urbanist, Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import SmoothScroll from "./component/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Creative Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark cursor-default" style={{ colorScheme: 'dark' }}>
      <body
        className={`${outfit.variable} ${urbanist.variable} ${inter.variable} font-sans bg-[#171717] text-[#FCFCFD] antialiased overflow-x-hidden`}
      >
        <SmoothScroll>
          <div className="" />
          <Header />
          {children}
          
        </SmoothScroll>
      </body>
    </html>
  );
}
