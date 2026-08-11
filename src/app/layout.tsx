import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";
import SmoothScroll from "./component/SmoothScroll";
import ExtraordinaryElements from "./component/ExtraordinaryElements";
import Donut3D from "./component/Donut3D";
import { ThemeProvider } from "./component/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-default" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>
            <div className="noise-overlay" />
            <Donut3D />
            <ExtraordinaryElements />
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
