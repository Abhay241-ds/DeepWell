import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
    return (
        <section
            id="services"
            className="relative border-t border-(--border) bg-(--background) px-4 pb-20 pt-8 transition-colors duration-300 sm:px-6 sm:pb-24 sm:pt-6 lg:px-8 lg:pb-15 lg:pt-8"    >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-14 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                                What We Do
                            </span>
                        </div>

                        <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
                            Ideas into
                            <br />
                            <span className="text-[var(--highlight)]">
                                digital impact.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-base leading-8 text-[var(--muted)] md:justify-self-end md:text-lg">
                        From building powerful digital products to growing your brand,
                        we bring strategy, creativity, and technology together to move
                        your business forward.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.number}
                            {...service}
                            icon={service.icon as unknown as ComponentProps<typeof ServiceCard>["icon"]}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:flex-row sm:items-center sm:p-8">
                    <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                            Have a project in mind?
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                            Let&apos;s turn your next big idea into reality.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-bold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Let&apos;s Talk

                        <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}