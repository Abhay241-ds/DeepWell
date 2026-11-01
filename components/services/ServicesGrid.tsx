"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/components/services/servicesData";

export default function ServicesGrid() {
  return (
    <section
      id="all-services"
      className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-(--highlight)" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted) sm:text-xs">
                What We Offer
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-(--foreground) sm:text-5xl md:text-6xl">
              Everything you need
              <br className="hidden sm:block" />
              <span className="text-(--highlight)"> to grow digitally.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-(--muted) md:pb-1">
            Practical digital solutions designed to help your business
            build its presence, reach more people, and grow.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex  flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--card) p-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--highlight) sm:p-5"
            >
              {/* Number and tag */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold tracking-widest text-(--muted)">
                  {service.number}
                </span>

                <span className="rounded-full border border-(--border) px-3 py-1 text-[9px] font-bold tracking-[0.12em] text-(--muted)">
                  {service.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--background) text-lg text-(--highlight) transition-all duration-300 group-hover:border-(--highlight) group-hover:bg-(--highlight)/10">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              {/* Content */}
              <div className="mt-3">
                <h3 className="text-xl font-bold tracking-tight text-(--foreground) sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-1 text-sm leading-7 text-(--muted)">
                  {service.description}
                </p>
              </div>

              {/* Bottom link */}
              <Link
                href="/contact"
                aria-label={`Discuss ${service.title} with us`}
                className=" inline-flex w-fit items-center gap-2 pt-4 text-sm font-semibold text-(--highlight) transition-colors duration-300 hover:text-(--foreground)"
              >
                Tap to Details
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-(--highlight) transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom note */}
        
      </div>
    </section>
  );
}
