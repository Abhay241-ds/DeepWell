import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faArrowRight,
    faCheck,
    faClock,
    faShieldHalved,
    faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { services } from "@/components/services/servicesData";

const WHATSAPP_NUMBER = "919027802766";

type Props = {
    params: Promise<{ slug: string }>;
};

// Normalize slug before matching
function normalizeSlug(value: string) {
    return decodeURIComponent(value)
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");
}

// Find service
function findService(slug: string) {
    const normalizedSlug = normalizeSlug(slug);

    return services.find(
        (item) =>
            normalizeSlug(item.slug) === normalizedSlug
    );
}

// WhatsApp URL
function getWhatsAppLink(
    serviceName: string,
    optionName?: string,
    price?: string
) {
    const message = `
Hi DeepWell Digital,

I am interested in your ${serviceName} service.

${optionName ? `Service / Package: ${optionName}` : ""}
${price ? `Starting Price: ${price}` : ""}

Please share more details about pricing and the process.

Thank you.
    `.trim();

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Generate static routes
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

// SEO Metadata
// Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = findService(slug);

  // SEO for invalid service URLs
  if (!service) {
    return {
      title: "Service Not Found | DeepWell Digital",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageTitle = `${service.title} Services`;
  const pageDescription =
    service.description ||
    service.intro ||
    `Explore ${service.title} services by DeepWell Digital. Discover our solutions, pricing, and packages for your business.`;

  const canonicalUrl = `https://deepwelldigital.vercel.app/services/${service.slug}`;

  return {
    title: pageTitle,

    description: pageDescription,

    keywords: [
      service.title,
      `${service.title} services`,
      `${service.title} agency`,
      `${service.title} solutions`,
      "DeepWell Digital",
      "Digital Agency",
      "Business Growth",
    ],

    alternates: {
      canonical: `/services/${service.slug}`,
    },

    openGraph: {
      title: `${pageTitle} | DeepWell Digital`,
      description: pageDescription,
      url: canonicalUrl,
      siteName: "DeepWell Digital",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - DeepWell Digital`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | DeepWell Digital`,
      description: pageDescription,
      images: ["/og-image.png"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function ServiceDetailPage({
    params,
}: Props) {
    const { slug } = await params;

    // DEBUG INFORMATION
    console.log("========== SERVICE DEBUG ==========");
    console.log("Requested slug:", slug);

    console.log(
        "Available services:",
        services.map((item) => ({
            title: item.title,
            slug: item.slug,
        }))
    );

    const service = findService(slug);

    console.log(
        "Matched service:",
        service?.title ?? "NOT FOUND"
    );

    console.log("===================================");

    // Temporary diagnostic page instead of 404
    if (!service) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-(--background) px-5 py-20">
                <div className="w-full max-w-2xl rounded-3xl border border-(--border) bg-(--card) p-8 sm:p-10">

                    <span className="text-xs font-bold uppercase tracking-widest text-(--highlight)">
                        Service Debug
                    </span>

                    <h1 className="mt-4 text-3xl font-extrabold text-(--foreground)">
                        Service Not Found
                    </h1>

                    <p className="mt-4 text-sm leading-7 text-(--muted)">
                        The requested service could not be matched
                        with the available services.
                    </p>

                    <div className="mt-7 rounded-xl border border-(--border) bg-(--background) p-5">

                        <p className="text-xs font-bold uppercase tracking-wider text-(--muted)">
                            Requested Slug
                        </p>

                        <p className="mt-2 break-all font-mono text-sm text-(--highlight)">
                            {slug}
                        </p>

                    </div>

                    <div className="mt-6">

                        <p className="text-xs font-bold uppercase tracking-wider text-(--muted)">
                            Available Slugs
                        </p>

                        <div className="mt-3 space-y-2">

                            {services.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/services/${item.slug}`}
                                    className="block rounded-lg border border-(--border) bg-(--background) px-4 py-3 text-sm font-medium text-(--foreground) transition-colors hover:border-(--highlight) hover:text-(--highlight)"
                                >
                                    {item.title}
                                    <span className="ml-2 text-xs text-(--muted)">
                                        ({item.slug})
                                    </span>
                                </Link>
                            ))}

                        </div>

                    </div>

                    <Link
                        href="/services"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-(--highlight) px-6 py-3 text-sm font-bold text-(--background)"
                    >
                        <FontAwesomeIcon icon={faArrowRight} className="rotate-180" />
                        Back to Services
                    </Link>

                </div>
            </main>
        );
    }

    const whatsappLink = getWhatsAppLink(service.title);

    return (
        <main className="overflow-hidden bg-(--background) transition-colors duration-300">

            {/* HERO SECTION */}

            <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-6">

                <div className="mx-auto max-w-7xl">

                    <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

                        <div>

                            <Link
                                href="/services"
                                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-(--muted) transition-colors hover:text-(--highlight)"
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="rotate-180"
                                />
                                All Services
                            </Link><br />

                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2">

                                <span className="h-2 w-2 rounded-full bg-(--highlight)" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted)">
                                    {service.tag}
                                </span>

                            </div>

                            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-(--foreground) sm:text-5xl lg:text-6xl">
                                {service.title}
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">
                                {service.intro}
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">

                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 rounded-full bg-(--highlight) px-7 py-4 text-sm font-bold text-(--background) transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    Get a Free Quote
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>

                                <a
                                    href="#pricing"
                                    className="inline-flex items-center gap-2 rounded-full border border-(--border) px-7 py-4 text-sm font-bold text-(--foreground) transition-colors hover:border-(--highlight)"
                                >
                                    View Pricing
                                </a>

                            </div>

                            <p className="mt-5 text-xs text-(--muted)">
                                Starting at {service.startingPrice} · Final price depends on requirements.
                            </p>

                        </div>

                        {/* SERVICE VISUAL */}

                        <div className="relative">

                            <div className="absolute -inset-5 rounded-full bg-(--highlight)/10 blur-3xl" />

                            <div className="relative rounded-3xl border border-(--border) bg-(--card) p-8 sm:p-12">

                                <div className="flex h-18 w-18 items-center justify-center rounded-3xl border border-(--border) bg-(--background) text-4xl text-(--highlight) shadow-sm sm:h-32 sm:w-32 sm:text-5xl">
                                    <FontAwesomeIcon icon={service.icon} />
                                </div>

                                <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-(--muted)">
                                    DeepWell Digital
                                </p>

                                <h2 className="mt-3 text-2xl font-bold leading-tight text-(--foreground) sm:text-3xl">
                                    Let's build something meaningful.
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-(--muted)">
                                    Practical solutions, thoughtful design and technology that helps your business move forward.
                                </p>

                                <div className="mt-8 h-1 w-20 rounded-full bg-(--highlight)" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* SERVICE TYPES */}

            <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 max-w-2xl">

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-(--highlight)" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted) sm:text-xs">
                                What we provide
                            </span>
                        </div>


                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
                            Explore our {service.title.toLowerCase()} services.
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-(--muted) sm:text-base">
                            Choose the service that matches your requirements. Each option includes a clear starting price and details of what's included.
                        </p>

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {service.types.map((type, index) => (

                            <article
                                key={type.name}
                                className="flex flex-col rounded-2xl border border-(--border) bg-(--background) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--highlight) hover:shadow-lg"
                            >

                                <span className="text-xs font-bold tracking-widest text-(--muted)">
                                    OPTION {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-5 text-xl font-bold text-(--foreground)">
                                    {type.name}
                                </h3>

                                <p className="mt-3 min-h-14 text-sm leading-7 text-(--muted)">
                                    {type.description}
                                </p>

                                <div className="mt-5 border-t border-(--border) pt-5">

                                    <span className="text-xs text-(--muted)">
                                        Starting at
                                    </span>

                                    <p className="mt-1 text-2xl font-extrabold text-(--foreground)">
                                        {type.price}
                                    </p>

                                </div>

                                <div className="mt-5 space-y-3">

                                    {type.features.map((feature) => (

                                        <div
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-(--muted)"
                                        >
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="mt-1 text-xs text-(--highlight)"
                                            />

                                            <span>{feature}</span>
                                        </div>

                                    ))}

                                </div>

                                <a
                                    href={getWhatsAppLink(
                                        service.title,
                                        type.name,
                                        type.price
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-(--highlight) transition-colors hover:text-(--foreground)"
                                >
                                    Enquire Now
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>

                            </article>

                        ))}

                    </div>

                </div>

            </section>

            {/* PRICING PACKAGES */}

            <section
                id="pricing"
                className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            >

                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto mb-12 max-w-2xl text-center">

                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-(--highlight)">
                            Simple & Transparent Pricing
                        </span>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl">
                            Choose the right package.
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-(--muted) sm:text-base">
                            Flexible options for different needs and budgets. Not sure which package is right? Contact us and we'll help you decide.
                        </p>

                    </div>

                    <div className="grid items-stretch gap-5 lg:grid-cols-3">

                        {service.packages.map((pkg) => {

                            const isPopular =
                                "popular" in pkg && pkg.popular === true;

                            const packageLink = getWhatsAppLink(
                                service.title,
                                `${pkg.name} Package`,
                                pkg.price
                            );

                            return (

                                <article
                                    key={pkg.name}
                                    className={`relative flex flex-col rounded-2xl border bg-(--card) p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isPopular
                                        ? "border-(--highlight) shadow-lg"
                                        : "border-(--border)"
                                        }`}
                                >

                                    {isPopular && (
                                        <span className="absolute -top-3 left-7 rounded-full bg-(--highlight) px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-(--background)">
                                            Most Popular
                                        </span>
                                    )}

                                    <h3 className="mt-2 text-xl font-bold text-(--foreground)">
                                        {pkg.name}
                                    </h3>

                                    <p className="mt-3 min-h-12 text-sm leading-6 text-(--muted)">
                                        {pkg.description}
                                    </p>

                                    <div className="mt-7 border-b border-(--border) pb-7">

                                        <span className="text-xs text-(--muted)">
                                            Starting at
                                        </span>

                                        <p className="mt-1 text-3xl font-extrabold tracking-tight text-(--foreground)">
                                            {pkg.price}
                                        </p>

                                    </div>

                                    <div className="mt-7 flex-1 space-y-4">

                                        {pkg.features.map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-start gap-3 text-sm text-(--muted)"
                                            >
                                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--highlight)/10 text-(--highlight)">
                                                    <FontAwesomeIcon
                                                        icon={faCheck}
                                                        className="text-[10px]"
                                                    />
                                                </span>

                                                {feature}

                                            </div>

                                        ))}

                                    </div>

                                    <a
                                        href={packageLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-9 flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${isPopular
                                            ? "bg-(--highlight) text-(--background) hover:opacity-90"
                                            : "border border-(--border) text-(--foreground) hover:border-(--highlight)"
                                            }`}
                                    >
                                        Choose Package
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </a>

                                </article>

                            );
                        })}

                    </div>

                    <p className="mt-8 text-center text-xs leading-6 text-(--muted)">
                        Prices are starting estimates. Final pricing may vary depending on project requirements, features and third-party services.
                    </p>

                </div>

            </section>

            {/* WHY CHOOSE US */}

            <section className="border-y border-(--border) bg-(--card) px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 max-w-2xl">

                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-(--highlight)">
                            Why DeepWell Digital
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-(--foreground) sm:text-4xl">
                            Good work starts with the right team.
                        </h2>

                    </div>

                    <div className="grid gap-8 sm:grid-cols-3">

                        {[
                            {
                                icon: faShieldHalved,
                                title: "Quality Work",
                                description: "We focus on useful solutions, thoughtful design and attention to detail.",
                            },
                            {
                                icon: faClock,
                                title: "Clear Process",
                                description: "We keep you informed about project progress and important milestones.",
                            },
                            {
                                icon: faHeadset,
                                title: "Ongoing Support",
                                description: "We help you understand your solution and provide support as agreed.",
                            },
                        ].map((item) => (

                            <div key={item.title}>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--highlight)/10 text-(--highlight)">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-(--foreground)">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-(--muted)">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* FINAL CTA */}

            <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-(--border) bg-(--card) p-8 text-center sm:p-14 lg:p-20">

                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-(--highlight)">
                        Let's Work Together
                    </span>

                    <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-(--foreground) sm:text-4xl lg:text-5xl">
                        Ready to get started with {service.title.toLowerCase()}?
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--muted) sm:text-base">
                        Tell us about your idea. We'll discuss your requirements and help you find the right solution for your business.
                    </p>

                    <div className="mt-9 flex flex-wrap justify-center gap-4">

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full bg-(--highlight) px-7 py-4 text-sm font-bold text-(--background) transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                            Let's Talk
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 rounded-full border border-(--border) px-7 py-4 text-sm font-bold text-(--foreground) transition-all duration-300 hover:border-(--highlight)"
                        >
                            Contact Us
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}