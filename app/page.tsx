import Cta from "./components/Cta";
import Divider from "./components/Divider";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ForWho from "./components/ForWho";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Statement from "./components/Statement";
import Platform from "./components/Platform";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import Video from "./components/Video";
import Workflow from "./components/Workflow";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is Mantsu different from a traditional MES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike monolithic MES platforms that take years to implement, Mantsu is modular and cloud-native. You can start with a single workflow and scale at your own pace — without ripping and replacing existing systems.",
      },
    },
    {
      "@type": "Question",
      name: "How long does implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most customers go live with their first production app within 3 months. Because Mantsu is modular, you don't need to digitize everything at once.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to replace our existing ERP or MES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Mantsu is designed to work alongside your existing systems. Our communication layer integrates with ERP, PLC, SCADA and other platforms — so you can extend rather than replace.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mantsu suitable for complex or unique production processes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Mantsu was built for manufacturers where standard off-the-shelf solutions don't fit. Our platform adapts to your workflows, not the other way around.",
      },
    },
    {
      "@type": "Question",
      name: "How does Mantsu handle machine connectivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mantsu connects to your machines through a secure communication layer supporting common industrial protocols. Data flows in real time from the shop floor to your dashboards.",
      },
    },
    {
      "@type": "Question",
      name: "What about security and data control?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mantsu is built on enterprise-grade cloud infrastructure with role-based access control, encrypted data in transit and at rest, and SOC compliance. Your data stays yours.",
      },
    },
    {
      "@type": "Question",
      name: "Can we start small and expand later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly how Mantsu is designed to work. Start with one line, one workflow, or one plant — and scale as you see results.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Hero />
      <Stats variant="dark" />
      <Divider variant="dark" />
      <Logos />
      <Divider variant="dark" />
      <Statement />
      <Divider />
      <Platform />
      <Divider variant="dark" />
      <Workflow />
      <Divider variant="dark" />
      <Testimonials />
      <Divider variant="dark" />
      <ForWho />
      <Divider />
      <Video />
      <Divider />
      <Faq />
      <Cta />
      <Divider />
      <Footer />
      <Divider variant="dark" />
    </main>
  );
}
