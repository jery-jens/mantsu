import Image from "next/image";
import Link from "next/link";
import ButtonGradient from "./ButtonGradient";
import Wrapper from "./Wrapper";

const columns = [
  {
    label: "PRODUCT",
    links: [
      { href: "/product", label: "Product" },
      { href: "/pricing", label: "Pricing" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "LEGAL",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
  {
    label: "CONNECT",
    links: [
      { href: "https://linkedin.com", label: "LinkedIn" },
      { href: "https://twitter.com", label: "Twitter" },
      { href: "https://youtube.com", label: "YouTube" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-slate-800">
      <Wrapper className="border-slate-600">
        <div className="flex flex-col md:grid md:grid-cols-[400px_1fr]">
          {/* Left column */}
          <div className="border-b border-slate-600 md:border-b-0 md:border-r">
            <div className="p-6 md:p-8">
              <Image
                src="/mantsu-logo-new-white.svg"
                alt="Mantsu"
                width={108}
                height={32}
              />
            </div>
            <div className="p-6 pt-0 md:p-8 md:pt-0">
              <p className="text-sm font-medium text-slate-50">
                Stay ahead in manufacturing.
              </p>
              <p className="mt-4 max-w-[336px] text-sm font-normal leading-5 text-slate-400">
                Get insights on production digitalization, modular MES strategies
                and real-world implementation stories — delivered to your inbox.
              </p>
              <div className="mt-6">
                <ButtonGradient href="/contact">
                  Get started <i className="ri-arrow-right-line" />
                </ButtonGradient>
              </div>
            </div>
          </div>

          {/* Right columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3">
            {columns.map((col, i) => (
              <div
                key={col.label}
                className={`p-6 md:p-8 ${
                  i < 2 ? "border-r border-slate-600" : ""
                } ${i === 2 ? "col-span-2 border-t border-slate-600 sm:col-span-1 sm:border-t-0" : ""}`}
              >
                <span className="font-mono text-[10px] uppercase text-slate-400">
                  {col.label}
                </span>
                <div className="mt-6 flex flex-col gap-2.5 md:mt-8">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-normal text-slate-300 hover:text-slate-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
