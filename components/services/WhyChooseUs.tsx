"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faComments,
  faGem,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const reasons = [
  {
    number: "01",
    title: "Built Around Your Goals",
    description:
      "We understand your needs first and create solutions that fit your business.",
    icon: faBullseye,
  },
  {
    number: "02",
    title: "Quality in Every Detail",
    description:
      "We focus on clean design, reliable performance, and a smooth user experience.",
    icon: faGem,
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "Stay informed throughout your project with straightforward communication.",
    icon: faComments,
  },
  {
    number: "04",
    title: "A Collaborative Approach",
    description:
      "Your ideas matter. We work with you to bring the right solution to life.",
    icon: faHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-(--highlight)" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted) sm:text-xs">
                The DeepWell Difference
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-(--foreground) sm:text-5xl md:text-6xl">
              Good work starts
              <br />
              with <span className="text-(--highlight)">the right approach.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-(--muted) lg:ml-auto lg:pb-1 lg:text-lg">
            Every business is different. We take the time to understand yours
            and focus on creating digital solutions that make sense for your
            goals.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="mt-8 grid grid-cols-1 border-l border-t border-(--border) sm:mt-12 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group relative border-b border-r border-(--border) p-6 transition-colors duration-300 hover:bg-(--card) sm:p-6 lg:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.15em] text-(--muted)">
                  {reason.number}
                </span>

                <FontAwesomeIcon
                  icon={reason.icon}
                  className="text-xl text-(--highlight) transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold tracking-tight text-(--foreground) sm:text-2xl">
                {reason.title}
              </h3>

              <p className="mt-1 max-w-md text-sm leading-7 text-(--muted) sm:text-base">
                {reason.description}
              </p>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-(--highlight) transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Closing statement */}
        
      </div>
    </section>
  );
}
