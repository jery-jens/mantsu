import type { Metadata } from "next";
import Image from "next/image";
import Cta from "../components/Cta";
import Divider from "../components/Divider";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Templates from "../components/Templates";
import Testimonials from "../components/Testimonials";
import Wrapper from "../components/Wrapper";

export const metadata: Metadata = {
  title: "Product",
  description: "A modular platform for modern factories. Production apps that deploy in weeks and scale as your operation grows.",
};

export default function ProductPage() {
  return (
    <main>
      {/* Hero */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <section className="flex flex-col items-center px-4 pt-12 text-center md:px-8 md:pt-16">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              // Product
            </p>
            <h1 className="mt-4 max-w-[560px] font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
              A modular platform for <span className="text-gradient">modern</span> factories
            </h1>
            <p className="mt-6 max-w-[480px] text-base font-normal text-slate-600">
              Production apps that deploy in weeks, integrate with what you have,
              and scale as your operation grows.
            </p>
          </section>

          <div className="mt-10 border-t border-slate-200 md:mt-16">
            <div className="mx-auto max-w-[834px] overflow-hidden border-x border-slate-200 bg-white">
              <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="relative h-[180px] bg-slate-50 md:h-[400px]">
                <Image
                  src="/location.png"
                  alt="Product interface"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <Divider />

      <Product />
      <Divider variant="dark" />
      <Templates />
      <Divider variant="dark" />
      <Features />
      <Divider variant="dark" />
      <Testimonials />
      <Divider variant="dark" />
      <Cta />
      <Divider />
      <Footer />
      <Divider variant="dark" />
    </main>
  );
}
