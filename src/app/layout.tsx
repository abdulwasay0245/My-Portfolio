import type { Metadata } from "next";
import { Outfit, Urbanist, Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import SmoothScroll from "./component/SmoothScroll";
import CustomCursor from "./component/CustomCursor";

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
  title: "Abdul Wasay | Creative Developer & AI Integrator",
  description: "Portfolio of Abdul Wasay. Designing and building AI-powered agents and automated workflows using modern web technologies.",
  openGraph: {
    title: "Abdul Wasay | Portfolio",
    description: "Designing and building AI-powered agents and automated workflows.",
    url: "https://wasaydevops.vercel.app", // Adjust if actual domain is known
    siteName: "Abdul Wasay Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We can use the hero png or leave it assuming they upload one
        width: 1200,
        height: 630,
        alt: "Abdul Wasay Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Wasay | Portfolio",
    description: "Designing and building AI-powered agents and automated workflows.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://wasaydevops.vercel.app"), // Fallback base URL
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark cursor-default" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="google-site-verification" content="qSEpLxScPq9ydu-1ku3fpki4fJR3folCuFM8yzlErOU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abdul Wasay",
              "url": "https://wasaydevops.vercel.app",
              "jobTitle": "Creative Developer & AI Integrator",
              "description": "Designing and building AI-powered agents and automated workflows using modern web technologies.",
              "sameAs": [
                "https://github.com/abdulwasay0245",
                "https://linkedin.com/in/your-linkedin"
              ],
              "knowsAbout": ["Web Development", "AI Integration", "Agentic AI", "Automation", "Workflow Optimization", "React", "Next.js"]
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${urbanist.variable} ${inter.variable} font-sans bg-[#171717] text-[#FCFCFD] antialiased overflow-x-hidden cursor-none`}
      >
        <CustomCursor />
        <SmoothScroll>
          <div className="" />
          <Header />
          {children}
          
        </SmoothScroll>
      </body>
    </html>
  );
}
