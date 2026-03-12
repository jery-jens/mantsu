"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonOutline from "./ButtonOutline";
import ButtonGradient from "./ButtonGradient";
import Wrapper from "./Wrapper";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/insights", label: "Insights" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <header className="relative flex items-center px-4 py-4 font-sans md:px-8">
          <Link href="/">
            <Image src="/mantsu-logo-new.svg" alt="Mantsu" width={108} height={33} />
          </Link>

          {/* Desktop nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map(({ href, label }) => {
              const isActive =
                pathname === href || pathname.startsWith(href + "/");

              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="ml-auto hidden items-center gap-1 md:flex">
            <ButtonOutline href="#">Sign in</ButtonOutline>
            <ButtonGradient href="/contact">
              Talk to us <i className="ri-arrow-right-line" />
            </ButtonGradient>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            <i className={menuOpen ? "ri-close-line text-lg" : "ri-menu-line text-lg"} />
          </button>
        </header>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-slate-200 px-4 pb-4 md:hidden">
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map(({ href, label }) => {
                const isActive =
                  pathname === href || pathname.startsWith(href + "/");

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-4 py-2.5 text-sm font-medium ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
              <ButtonOutline href="#">Sign in</ButtonOutline>
              <ButtonGradient href="/contact">
                Talk to us <i className="ri-arrow-right-line" />
              </ButtonGradient>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
