import type { Metadata } from "next";
import { Outfit, Urbanist, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
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

import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.client";


export async function generateMetadata(): Promise<Metadata> {
  const settingsArray = await client.fetch(`*[_type == "siteSettings"]`);
  const settings = settingsArray[0] || {};
  
  const title = settings.seoTitle || "Abdul Wasay | Portfolio";
  const description = settings.seoDescription || "Portfolio of Abdul Wasay. Designing and building AI-powered agents and automated workflows using modern web technologies.";
  const imageUrl = settings.seoImage ? urlFor(settings.seoImage).width(1200).height(630).url() : "/og-image.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://wasaydevops.vercel.app",
      siteName: "Abdul Wasay Portfolio",
      images: [
        {
          url: imageUrl,
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
      title,
      description,
      images: [imageUrl],
    },
    metadataBase: new URL("https://wasaydevops.vercel.app"),
  };
}

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
          
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
