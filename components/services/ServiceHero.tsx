"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faCode,
  faHashtag,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-(--highlight)/5 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="mx-auto max-w-7xl">
        {/* Badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-(--highlight)" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted) sm:text-xs">
            What We Do
          </span>
        </div>

        {/* Main content */}
        <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-(--foreground) sm:text-5xl md:text-6xl lg:text-7xl">
              Digital solutions
              <br />
              for your next
              <br />
              <span className="text-(--highlight)">big move.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-(--muted) sm:text-lg">
              From websites and mobile apps to branding, marketing, and AI
              automation, we help turn your ideas into digital experiences
              that move your business forward.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#all-services"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-(--primary) px-7 py-4 text-sm font-bold text-(--background) transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
              >
                Explore Our Services
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-(--foreground) transition-colors hover:text-(--highlight)"
              >
                Discuss Your Project
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Service preview */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-3xl border border-(--border) bg-(--card) p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-(--border)"
              />

              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-(--border)"
              />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-(--muted)">
                    Our Expertise
                  </span>

                  <span className="text-sm font-semibold text-(--highlight)">
                    01 — 06
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 rounded-2xl border border-(--border) bg-(--background) p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--highlight)/10 text-(--highlight)">
                      <FontAwesomeIcon icon={faCode} />
                    </div>

                    <div>
                      <p className="font-semibold text-(--foreground)">
                        Web Development
                      </p>
                      <p className="mt-1 text-xs text-(--muted)">
                        Websites that work for you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-(--border) bg-(--background) p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--highlight)/10 text-(--highlight)">
                      <FontAwesomeIcon icon={faMobile} />
                    </div>

                    <div>
                      <p className="font-semibold text-(--foreground)">
                        App Development
                      </p>
                      <p className="mt-1 text-xs text-(--muted)">
                        Mobile Application Solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-(--border) bg-(--background) p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--highlight)/10 text-(--highlight)">
                      <FontAwesomeIcon icon={faRobot} />
                    </div>

                    <div>
                      <p className="font-semibold text-(--foreground)">
                        AI & Automation
                      </p>
                      <p className="mt-1 text-xs text-(--muted)">
                        Less repetitive work.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-(--border) pt-5">
                  <span className="text-sm text-(--muted)">
                    Ideas into impact.
                  </span>

                  <span className="text-sm font-bold text-(--foreground)">
                    DeepWell<span className="text-(--highlight)">.</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 -z-10 h-20 w-20 rounded-2xl border border-(--border)"
            />
          </div>
        </div>

        {/* Bottom note */}
        
      </div>
    </section>
  );
}
