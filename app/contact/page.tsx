import type { Metadata } from "next";
import Wrapper from "../components/Wrapper";
import Divider from "../components/Divider";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Mantsu team. We'd love to hear about your factory and how we can help.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <section className="border-b border-slate-200 px-4 py-10 md:border-b-0 md:border-r md:px-8 md:py-16">
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                // Contact
              </p>
              <h1 className="mt-4 max-w-[400px] font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
                Let&apos;s talk about your <span className="text-gradient">factory</span>
              </h1>
              <p className="mt-6 max-w-[380px] text-base font-normal leading-relaxed text-slate-600">
                Whether you&apos;re replacing spreadsheets, connecting legacy
                systems, or building your first production app — we&apos;d love
                to hear what you&apos;re working on.
              </p>
              <div className="mt-8 flex flex-col gap-6 md:mt-12">
                <div>
                  <p className="text-sm font-medium text-slate-900">Email</p>
                  <p className="mt-1 text-sm text-slate-500">
                    hello@mantsu.com
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Response time
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </section>

            <section className="px-4 py-10 md:px-8 md:py-16">
              <ContactForm />
            </section>
          </div>
        </Wrapper>
      </div>

      <Cta />
      <Divider />
      <Footer />
      <Divider variant="dark" />
    </main>
  );
}
