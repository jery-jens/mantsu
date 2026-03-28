import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "./components/BackToTop";
import Banner from "./components/Banner";
import CookieBanner from "./components/CookieBanner";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://mantsu.com/#organization",
                  name: "Mantsu",
                  url: "https://mantsu.com",
                  logo: "https://mantsu.com/mantsu-logo-new.svg",
                  description:
                    "Mantsu helps manufacturers deploy modular production apps in months, not years. Digitize workflows, reduce downtime, and scale operations.",
                  sameAs: [
                    "https://linkedin.com/company/mantsu",
                    "https://twitter.com/mantsu",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "sales",
                    url: "https://mantsu.com/contact",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mantsu.com/#website",
                  url: "https://mantsu.com",
                  name: "Mantsu",
                  publisher: { "@id": "https://mantsu.com/#organization" },
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://mantsu.com/#product",
                  name: "Mantsu",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description:
                    "Modular production software for modern factories. Deploy production apps in weeks, integrate with ERP, PLC, and SCADA systems, and scale as your operation grows.",
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "EUR",
                    lowPrice: "450",
                    offerCount: 3,
                    url: "https://mantsu.com/pricing",
                  },
                  provider: { "@id": "https://mantsu.com/#organization" },
                  featureList: [
                    "Modular architecture",
                    "Cloud-native foundation",
                    "Multi-device access",
                    "Role-based workflows",
                    "Connected operations",
                    "ERP, PLC, SCADA integration",
                    "Real-time production visibility",
                    "SOC compliant",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <ScrollProgress />
        <div className="fixed top-0 left-0 right-0 z-50">
          <Banner />
          <Header />
        </div>
        <div className="pt-[96px]">
          {children}
        </div>
        <CookieBanner />
        <BackToTop />
      </body>
    </html>
  );
}
