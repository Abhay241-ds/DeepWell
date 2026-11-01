import Link from "next/link";
import FooterYear from "@/components/layout/FooterYear";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "App Development",
  "AI & Automation",
  "Digital Branding",
  "Social Media Management",
];

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--footer-bg) text-(--footer-text)">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */} <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-10">
          {/* Brand */} <div className="lg:col-span-5"> <Link
            href="/"

          >
            <img src="/logo.png" alt="DeepWell Digital Agency" className="h-18 w-auto" /> </Link>


            <p className="mt-5  text-white max-w-md text-sm leading-7 text-[var(--background)]/70 sm:text-base">
              We turn thoughtful ideas into meaningful digital experiences.
              Strategy, creativity, and technology come together to help your
              business move forward.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[var(--highlight)] px-5 py-3.5 text-sm font-semibold text-[var(--background)] transition-all duration-300 hover:gap-5"
            >
              Let&apos;s work together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
              Explore
            </h3>

            <ul className="mt-6 text-white font-extralight space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:text-(--background)"
                  >
                    <ArrowDownRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]">
              What We Do
            </h3>

            <ul className="mt-6  text-white font-extralight space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="cursor-default text-sm  transition-colors duration-300 hover:text-(--background)">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col font-bold text-white items-center justify-center gap-2 border-t border-(--background)/15 py-8 text-center text-sm text-(--background)/60">
          <p>
            © <FooterYear /> DeepWell Digital Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

  );
}
