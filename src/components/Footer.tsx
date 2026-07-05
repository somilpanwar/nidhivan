import Link from "next/link";
import {  Instagram, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Email", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#6b4b3a]/10 bg-[#f7ead0] text-[#3b2522]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <div>
            <p
              className="text-3xl tracking-[0.35em]"
              style={{ fontFamily: "var(--font-zaslia)" }}
            >
              NIDHIVAN
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#7d6254]">
              A serene wedding garden designed for timeless celebrations, quiet luxury,
              and moments that feel beautifully unhurried.
            </p>
          </div>

          <div className="space-y-3 text-sm text-[#7d6254]">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              <a
              target="_blank"
              href="https://maps.app.goo.gl/TAmCcyKi26Vi6pH98"
              >Nidhivan garden</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4" />
              <a
              href="tel:+917851945466"
              >+91 78519 45466</a>
            </div>
          </div>
        </div>

        <div>
          <h2
            className="text-[0.7rem] uppercase tracking-[0.35em] text-[#7d6254]"
            style={{ fontFamily: "var(--font-orange)" }}
          >
            Navigation
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.24em] text-[#3b2522] transition-colors duration-300 hover:text-[#7d6254]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2
            className="text-[0.7rem] uppercase tracking-[0.35em] text-[#7d6254]"
            style={{ fontFamily: "var(--font-orange)" }}
          >
            Social
          </h2>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#6b4b3a]/15 bg-[#fff5dc] text-[#3b2522] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(59,37,34,0.08)]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-[#6b4b3a]/10 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 text-xs uppercase tracking-[0.28em] text-[#7d6254] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Nidhivan. All rights reserved.</p>
          <p>Crafted for refined celebrations.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;