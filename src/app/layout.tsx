import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Antek Automations | Custom AI Automation for Growing Businesses",
  description:
    "We design and build custom AI automation systems that eliminate operational chaos for service businesses. Less manual work. Tighter margins. Scalable operations.",
  icons: {
    icon: "/Icon.png",
  },
  openGraph: {
    title: "Antek Automations | Custom AI Automation for Growing Businesses",
    description:
      "We design and build custom AI automation systems that eliminate operational chaos for service businesses. Less manual work. Tighter margins. Scalable operations.",
    type: "website",
    url: "https://www.antekautomations.com/",
    images: [{ url: "https://www.antekautomations.com/Icon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antek Automations | Custom AI Automation for Growing Businesses",
    description:
      "We design and build custom AI automation systems that eliminate operational chaos for service businesses. Less manual work. Tighter margins. Scalable operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        {/* Calendly popup widget styles */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        {/* Calendly popup widget script — loaded after page is interactive */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
