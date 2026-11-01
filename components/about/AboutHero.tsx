import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faCompass,
    faLightbulb,
    faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
    {
        icon: faCompass,
        title: "Purposeful Strategy",
        description: "Every project starts with understanding your goals.",
    },
    {
        icon: faWandMagicSparkles,
        title: "Thoughtful Design",
        description: "Digital experiences built around people.",
    },
    {
        icon: faLightbulb,
        title: "Smart Technology",
        description: "Modern solutions designed to move you forward.",
    },
];

export default function AboutHero() {
    return (
        <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-5 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-10">
            <div className="mx-auto max-w-7xl">
                {/* Hero Header */}
                <div className="mb-14 grid gap-7 md:mb-16 md:grid-cols-2 md:items-end">
                    <div>
                        {/* Section Badge */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />


                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                                About DeepWell Digital
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
                            We turn ideas into
                            <br />
                            <span className="text-[var(--highlight)]">
                                digital impact.
                            </span>
                        </h1>
                    </div>

                    {/* Introduction */}
                    <div className="md:justify-self-end">
                        <p className="max-w-lg text-base leading-8 text-[var(--muted)] md:text-lg">
                            We bring strategy, design, and technology together
                            to help businesses build a stronger digital presence
                            and turn ambitious ideas into meaningful experiences.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-semibold text-[var(--background)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                        >
                            Let's Work Together

                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>

                {/* Visual Statement */}
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-9 lg:p-12">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[var(--highlight)] opacity-[0.08] blur-3xl sm:h-80 sm:w-80"
                    />

                    <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                                What drives us
                            </span>

                            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-[-0.05em] text-[var(--foreground)] sm:text-4xl md:text-5xl">
                                Good ideas deserve{" "}
                                <span className="text-[var(--highlight)]">
                                    great execution.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                                We believe effective digital solutions should
                                do more than look good. They should solve real
                                problems, create better experiences, and help
                                businesses take their next step with confidence.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                            {highlights.map((item, index) => (
                                <article
                                    key={item.title}
                                    className="group rounded-xl border border-[var(--border)] bg-(--background) p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--highlight)]/50 sm:p-5 lg:flex lg:items-center lg:gap-5"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--highlight)] transition-colors duration-300 group-hover:border-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-[var(--background)]">
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            className="text-lg"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="mt-4 lg:mt-0">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[15px] font-bold tracking-widest text-[var(--muted)]">
                                                0{index + 1}
                                            </span>

                                            <h3 className="text-sm font-bold text-[var(--foreground)] sm:text-base">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="mt-1 text-xs leading-6 text-[var(--muted)] sm:text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Statement */}

            </div>
        </section>
    );


}
