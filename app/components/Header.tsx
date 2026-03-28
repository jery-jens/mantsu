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
  { href: "/insights", label: "Resources" },
  { href: "https://docs.mantsu.com", label: "Docs", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = pathname === "/";

  return (
    <div className={`border-b ${isDark ? "border-slate-600 bg-slate-800" : "border-slate-200 bg-slate-50"}`}>
      <Wrapper className={isDark ? "border-slate-600" : ""}>
        <header className="relative flex items-center px-4 py-4 font-sans md:px-8">
          <Link href="/">
            <Image
              src={isDark ? "/mantsu-logo-new-white.svg" : "/mantsu-logo-new.svg"}
              alt="Mantsu"
              width={108}
              height={33}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navLinks.map(({ href, label, external }) => {
              const isActive =
                !external && (pathname === href || pathname.startsWith(href + "/"));

              return (
                <Link
                  key={href}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium ${
                    isActive
                      ? isDark
                        ? "bg-white text-slate-900"
                        : "bg-slate-900 text-white"
                      : isDark
                        ? "text-slate-400 hover:bg-slate-700 hover:text-slate-50"
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
            <ButtonOutline href="/contact" variant={isDark ? "dark" : "light"}>Book a demo</ButtonOutline>
            <ButtonGradient href="/contact">
              Talk to us <i className="ri-arrow-right-line" />
            </ButtonGradient>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`ml-auto flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
              isDark ? "text-slate-400 hover:bg-slate-700" : "text-slate-600 hover:bg-slate-100"
            }`}
            aria-label="Toggle menu"
          >
            <i className={menuOpen ? "ri-close-line text-lg" : "ri-menu-line text-lg"} />
          </button>
        </header>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={`border-t px-4 pb-4 md:hidden ${isDark ? "border-slate-600" : "border-slate-200"}`}>
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map(({ href, label, external }) => {
                const isActive =
                  !external && (pathname === href || pathname.startsWith(href + "/"));

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`inline-flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium ${
                      isActive
                        ? isDark
                          ? "bg-white text-slate-900"
                          : "bg-slate-900 text-white"
                        : isDark
                          ? "text-slate-400 hover:bg-slate-700 hover:text-slate-50"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className={`mt-3 flex flex-col gap-2 border-t pt-3 ${isDark ? "border-slate-600" : "border-slate-200"}`}>
              <ButtonOutline href="/contact" variant={isDark ? "dark" : "light"}>Book a demo</ButtonOutline>
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
