import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Fraunces,
  Inter_Tight,
  JetBrains_Mono,
} from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
  weight: "variable",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const TITLE = "Antek Automations | Workflow Automation for Professional Services";
const DESCRIPTION =
  "Custom workflow automation for professional service businesses. We find where manual work drains your team and build the systems that fix it. Book a free audit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: "/Icon.png",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.antekautomations.com/",
    images: [{ url: "https://www.antekautomations.com/Icon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Calendly popup widget styles */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        {/* Calendly popup widget script — loaded after page is interactive */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
