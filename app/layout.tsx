import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from "./components/Banner";
import CookieBanner from "./components/CookieBanner";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mantsu — Modular Production Software for Modern Factories",
    template: "%s | Mantsu",
  },
  description:
    "Deploy modular production apps in months, not years. Mantsu helps manufacturers digitize workflows, reduce downtime, and scale operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <div className="fixed top-0 left-0 right-0 z-50">
          <Banner />
          <Header />
        </div>
        <div className="pt-[96px]">
          {children}
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
