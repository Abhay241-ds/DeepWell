import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Code2,
  Layers3,
  Sparkles,
  MoveUpRight,
  CircleDot,
} from "lucide-react";
import Services from "@/components/services/Services";
import type { Metadata } from "next";
import Process from "@/components/home/Process";
import BottomCTA from "@/components/layout/BottomCTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQ from "@/components/home/FAQ";
const capabilities = [
  { label: "Digital experiences", icon: Layers3 },
  { label: "Modern development", icon: Code2 },
  { label: "Intelligent solutions", icon: Sparkles },
];
export const metadata: Metadata = {
  title: "Digital Agency for Web, Apps & AI Solutions",
  
  description:
    "DeepWell Digital helps businesses grow online with professional website development, mobile apps, social media management, AI automation, digital branding, and marketing solutions.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "DeepWell Digital",
    "Digital Agency",
    "Web Development Agency",
    "Website Development Services",
    "Mobile App Development",
    "AI Automation Services",
    "Social Media Management",
    "Digital Branding",
    "Digital Marketing Agency",
    "Business Growth Solutions",
  ],

  openGraph: {
    title: "DeepWell Digital | Dig Deeper. Build Better.",
    description:
      "We help businesses grow online through web development, mobile apps, AI automation, digital branding, and marketing strategies.",
    url: "https://deepwelldigital.vercel.app/",
    siteName: "DeepWell Digital",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DeepWell Digital - Digital Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DeepWell Digital | Dig Deeper. Build Better.",
    description:
      "We build websites, mobile apps, and intelligent digital solutions that help businesses grow.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14">        {/* Background Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl sm:h-96 sm:w-96"
        />

        <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Content */}
          <div>
            {/* Agency Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--highlight)] opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--highlight)]" />
              </span>

              <span className="text-[11px] font-bold tracking-[0.16em] text-[var(--muted)] sm:text-xs">
                INDEPENDENT DIGITAL AGENCY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Dig Deeper.
              <br />
              <span className="text-[var(--highlight)]">
                Build Better.
              </span>
            </h1>

            {/* Description */}
            <h3 className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg sm:leading-9">
              <p className="text-[var(--highlight)] text-2xl">We help your business grow online.</p>

              We build websites, create mobile apps, manage social media, and use AI to make your work easier. Everything you need to grow your business, all in one place.


            </h3>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-7 py-4 text-sm font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--highlight)]/10"
              >
                Start a Project

                <MoveUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/projects"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[var(--border)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--highlight)] hover:bg-[var(--card)]"
              >
                Explore Our Work

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Capabilities */}
            <div className="mt-6 hidden flex-wrap items-center gap-x-6 gap-y-4 border-t border-[var(--border)] pt-4 lg:flex">
              {capabilities.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className="text-[var(--highlight)]"
                  />

                  <span className="text-xs font-medium text-[var(--muted)] sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-lg sm:block lg:max-w-none">
            {/* Main Visual Card */}
            <div className="relative rounded-[1.8rem] border border-[var(--border)] bg-[var(--card)] p-3 shadow-2xl shadow-black/5 transition-colors duration-300 sm:rounded-[2.2rem] sm:p-4">
              {/* Main Design Panel */}
              <div className="relative isolate flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[1.4rem] border border-[var(--border)] bg-[var(--background)] p-6 text-[var(--foreground)] transition-colors duration-300 sm:min-h-[480px] sm:rounded-[1.8rem] sm:p-8">
                {/* Decorative Grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--highlight) 1px, transparent 1px), linear-gradient(90deg, var(--highlight) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />

                {/* Decorative Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-[var(--primary)]/15 blur-3xl sm:h-80 sm:w-80"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-[var(--highlight)]/15 blur-3xl"
                />

                {/* Panel Header */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <CircleDot
                        size={15}
                        className="text-[var(--highlight)]"
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)] sm:text-xs">
                        Ideas into impact
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-[var(--muted)]">
                      Independent thinking. Limitless building.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--highlight)]/25 bg-[var(--highlight)]/10">
                    <Sparkles
                      size={21}
                      className="text-[var(--highlight)]"
                    />
                  </div>
                </div>

                {/* Main Typography */}
                <div className="relative z-10 mt-14 sm:mt-20">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--highlight)] sm:text-xs">
                    Design with purpose
                  </p>

                  <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-[3.5rem]">
                    Make your
                    <br />
                    next move
                    <br />
                    <span className="text-[var(--highlight)]">
                      matter.
                    </span>
                  </h2>

                  {/* Panel Footer Content */}
                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
                    <span className="text-xs leading-6 text-[var(--muted)] sm:text-sm">
                      Strategy. Design.
                      <br />
                      Technology.
                    </span>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--highlight)] text-[var(--background)] transition-transform duration-300 hover:rotate-[-45deg]">
                      <ArrowDownRight size={23} />
                    </div>
                  </div>
                </div>

                {/* Vertical Label */}
                <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 sm:block">
                  <span className="text-[9px] font-medium tracking-[0.35em] text-[var(--muted)]/50">
                    THINK / CREATE / BUILD
                  </span>
                </div>
              </div>

              {/* Browser Footer */}
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4 sm:px-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                    DeepWell Digital
                  </span>
                </div>

                <span className="text-[10px] font-medium text-[var(--muted)]">
                  DESIGN / DEVELOP / GROW
                </span>
              </div>
            </div>

            {/* Floating Accent Card */}
            <div className="absolute -bottom-7 -left-1 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-xl sm:-left-7 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--highlight)] text-[var(--background)]">
                  <Code2 size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[var(--foreground)]">
                    Built with purpose
                  </p>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Thoughtful by design
                  </p>
                </div>
              </div>
            </div>

            {/* Top Floating Label */}
            <div className="absolute -right-1 -top-5 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 shadow-lg sm:-right-4">
              <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />

              <span className="text-[10px] font-bold tracking-wider text-[var(--foreground)] sm:text-xs">
                BUILT FOR WHAT&apos;S NEXT
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}

      </section>


      <Services />
      <Process />
      <WhyChooseUs />
      <FAQ />
      <BottomCTA />


    </main>
  );
}