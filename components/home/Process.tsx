import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCompass,
    faLightbulb,
    faWandMagicSparkles,
    faRocket,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const processSteps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We understand your business, audience, and goals to identify what will make the biggest impact.",
        icon: faCompass,
        label: "Understand the vision",
    },
    {
        number: "02",
        title: "Strategize",
        description:
            "We turn your ideas into a clear plan with the right direction, priorities, and approach.",
        icon: faLightbulb,
        label: "Define the direction",
    },
    {
        number: "03",
        title: "Create",
        description:
            "We design and develop your digital solution with a focus on performance, quality, and experience.",
        icon: faWandMagicSparkles,
        label: "Bring ideas to life",
    },
    {
        number: "04",
        title: "Launch",
        description:
            "We deliver your project and help you take the next step toward growing your business online.",
        icon: faRocket,
        label: "Make your move",
    },
];

export default function Process() {
    return (
        <section
            id="process"
            className="relative isolate bg-(--background) px-4 pb-10 pt-12 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-15 lg:pt-16"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-14 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                                How We Work
                            </span>
                        </div>

                        <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
                            From idea to
                            <br />
                            <span className="text-[var(--highlight)]">
                                real impact.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-base leading-8 text-[var(--muted)] md:justify-self-end md:text-lg">
                        Great work starts with a clear process. We combine strategy,
                        creativity, and technology to turn your vision into something
                        meaningful.
                    </p>
                </div>

                {/* Process Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, index) => (
                        <article
                            key={step.number}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--highlight)]/50 hover:shadow-xl sm:p-7"
                        >
                            {/* Number and Font Awesome Icon */}
                            <div className="flex items-start justify-between">
                                <span className="text-5xl font-extrabold tracking-[-0.07em] text-[var(--border)] transition-colors duration-300 group-hover:text-[var(--highlight)] sm:text-6xl">
                                    {step.number}
                                </span>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 group-hover:border-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-[var(--background)]">
                                    <FontAwesomeIcon
                                        icon={step.icon}
                                        className="text-xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="mt-7 text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                                {step.title}
                            </h3>

                            <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)] sm:text-base">
                                {step.description}
                            </p>

                            {/* Bottom Label */}
                            <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                                <span className="text-xs font-semibold text-[var(--muted)]">
                                    {step.label}
                                </span>

                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="text-lg text-[var(--highlight)] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Desktop Connecting Indicator */}
                            {index < processSteps.length - 1 && (
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute right-0 top-[3.25rem] z-10 hidden translate-x-1/2 text-[var(--highlight)] lg:block"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
