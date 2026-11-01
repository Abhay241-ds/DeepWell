"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCompass,
    faLightbulb,
    faWandMagicSparkles,
    faRocket,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We learn about your business, goals, and audience.",
        icon: faCompass,
    },
    {
        number: "02",
        title: "Strategize",
        description:
            "We create a clear plan to achieve your goals.",
        icon: faLightbulb,
    },
    {
        number: "03",
        title: "Create",
        description:
            "We design and build your digital solution.",
        icon: faWandMagicSparkles,
    },
    {
        number: "04",
        title: "Launch",
        description:
            "We launch your project and help your business grow.",
        icon: faRocket,
    },
];

export default function ServicesProcess() {
    return (
        <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14">
            <div className=" max-w-7xl">
                {/* Heading */}
               
                <div className="mb-4 grid gap-6 sm:mb-8 lg:grid-cols-2 lg:items-end">
                    {/* Left: Heading */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-(--highlight)" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted) sm:text-xs">
                                How We Work
                            </span>
                        </div>

                        <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-(--foreground) sm:text-5xl md:text-6xl">
                            From first idea
                            <br />
                            to <span className="text-(--highlight)">final launch.</span>
                        </h2>
                    </div>

                    {/* Right: Description */}
                    <p className="max-w-xl text-base leading-8 text-(--muted) lg:ml-auto lg:pb-1 lg:text-lg">
                        A straightforward process that keeps your project focused,
                        organized, and moving in the right direction.
                    </p>
                </div>
                

                {/* Process steps */}
                <div className="relative mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {steps.map((step, index) => (
                        <article
                            key={step.number}
                            className="group relative rounded-2xl border border-(--border) bg-(--card) p-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--highlight) sm:p-5"
                        >
                            {/* Number and icon */}
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold tracking-[0.18em] text-(--muted)">
                                    Step {step.number}
                                </span>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--background) text-(--highlight) transition-colors duration-300 group-hover:border-(--highlight) group-hover:bg-(--highlight)/10">
                                    <FontAwesomeIcon icon={step.icon} />
                                </div>
                            </div>

                            {/* Step content */}
                            <h3 className="mt-2 text-xl font-bold tracking-tight text-(--foreground) sm:text-2xl">
                                {step.title}
                            </h3>

                            <p className=" text-sm leading-7 text-(--muted) sm:text-base">
                                {step.description}
                            </p>

                            {/* Bottom indicator */}
                            

                            {/* Hover accent */}
                            <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-(--highlight) transition-all duration-500 group-hover:w-full" />
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                
            </div>
        </section>
    );
}
