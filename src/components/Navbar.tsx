"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!navbarRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from(navbarRef.current, {
        y: -18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from("[data-nav-brand], [data-nav-link]", {
        opacity: 1,
        y: -2,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.15,
      });
    }, navbarRef);

    return () => context.revert();
  }, []);

  return (
    <header
      ref={navbarRef}
      className={`sticky top-0 z-50 border-b border-[#6b4b3a]/10 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fff5dc]/75 shadow-[0_14px_40px_rgba(59,37,34,0.08)] backdrop-blur-xl"
          : "bg-[#fff5dc]/45 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" data-nav-brand className="group flex items-baseline gap-3 rounded-full border border-transparent px-2 py-1 transition-colors duration-300 hover:border-[#6b4b3a]/10 hover:bg-[#fff5dc]/40">
          <span
            className="text-xl tracking-[0.35em] text-[#3b2522] transition-transform duration-300 group-hover:translate-x-0.5 sm:text-2xl"
            style={{ fontFamily: "var(--font-zaslia)" }}
          >
            NIDHIVAN
          </span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.28em] text-[#7d6254] sm:inline-block">
            Wedding Garden
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[#6b4b3a]/10 bg-[#fff5dc]/50 px-2 py-2 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                data-nav-link
                className={`relative rounded-full px-4 py-2 text-sm uppercase tracking-[0.28em] transition-all duration-300 ${
                  isActive
                    ? "bg-[#3b2522] text-[#fff5dc] shadow-[0_10px_24px_rgba(59,37,34,0.14)]"
                    : "text-[#7d6254] hover:bg-[#3b2522]/5 hover:text-[#3b2522]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          data-nav-item
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#6b4b3a]/15 bg-[#fff5dc]/70 text-[#3b2522] shadow-[0_10px_20px_rgba(59,37,34,0.05)] backdrop-blur-md transition-transform duration-300 hover:scale-105 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#6b4b3a]/10 bg-[#fff5dc]/95 px-4 transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-64 py-4 shadow-[0_20px_40px_rgba(59,37,34,0.08)] backdrop-blur-xl" : "max-h-0 py-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                data-nav-item
                className={`rounded-full px-4 py-3 text-sm uppercase tracking-[0.24em] transition-colors duration-300 ${
                  isActive
                    ? "bg-[#3b2522] text-[#fff5dc]"
                    : "text-[#3b2522] hover:bg-[#3b2522]/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;