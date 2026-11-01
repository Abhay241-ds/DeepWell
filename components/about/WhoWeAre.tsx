import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faBullseye,
    faCode,
    faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const principles = [
    {
        number: "01",
        icon: faBullseye,
        title: "Purposeful Thinking",
        description:
            "We understand your goals before deciding what to build.",
    },
    {
        number: "02",
        icon: faCode,
        title: "Creative Execution",
        description:
            "We turn ideas into useful, engaging digital experiences.",
    },
    {
        number: "03",
        icon: faHandshake,
        title: "Real Partnership",
        description:
            "We keep communication clear and your goals at the center.",
    },
];

export default function WhoWeAre() {
    return (<section
        id="who-we-are"
        className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14"
    > <div className="mx-auto max-w-7xl">
            {/* Top Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />


                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                    Who We Are
                </span>
            </div>

            {/* Editorial Hero */}
            <div className="grid items-center gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
                {/* Main Copy */}
                <div className="relative z-10">
                    <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
                        We think beyond
                        <br />
                        <span className="text-[var(--highlight)]">
                            the ordinary.
                        </span>
                    </h2>

                    <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] sm:mt-9 sm:text-lg sm:leading-9">
                        At DeepWell Digital, we help businesses grow online
                        through creative ideas, thoughtful design, and
                        technology that makes a difference.
                    </p>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                        We listen, understand what matters to you, and build
                        digital solutions around your goals.
                    </p>

                    <Link
                        href="/services"
                        className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--highlight)]"
                    >
                        Discover What We Do

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-[var(--background)]">
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </span>
                    </Link>
                </div>

                {/* Oversized Brand Visual */}
                <div
                    aria-label="DeepWell Digital — Think deeper. Build better."
                    className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex lg:max-w-none"
                >
                    {/* Decorative Rings */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-[8%] rounded-full border border-[var(--border)]"
                    />

                    <div
                        aria-hidden="true"
                        className="absolute inset-[18%] rounded-full border border-dashed border-[var(--border)]"
                    />

                    {/* Accent Orb */}
                    <div
                        aria-hidden="true"
                        className="absolute right-[17%] top-[15%] h-16 w-16 rounded-full bg-[var(--highlight)] opacity-20 blur-2xl sm:h-24 sm:w-24"
                    />

                    {/* Oversized Letter */}
                    <span
                        aria-hidden="true"
                        className="select-none text-[13rem] font-black leading-none tracking-[-0.12em] text-[var(--foreground)] sm:text-[17rem] lg:text-[19rem]"
                    >
                        D
                    </span>

                    {/* Floating Accent */}
                    <div className="absolute right-[5%] top-[22%] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--highlight)] text-sm font-black text-[var(--background)] sm:h-14 sm:w-14">
                        D.
                    </div>

                    {/* Bottom Caption */}
                    <div className="absolute bottom-[9%] left-1/2 w-max -translate-x-1/2 border border-[var(--border)] bg-(--background) px-5 py-3 sm:px-7">
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--muted)] sm:text-[10px]">
                            Think deeper. Build better.
                        </p>
                    </div>

                    {/* Side Label */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)] sm:left-2">
                        DeepWell Digital
                    </span>
                </div>
            </div>

            {/* Principles */}
            <div className="mt-6 border-t border-[var(--border)] sm:mt-24 lg:mt-4">
                <div className="grid md:grid-cols-3">
                    {principles.map((principle, index) => (
                        <article
                            key={principle.number}
                            className={`group py-2 sm:py-8 md:px-4 lg:px-8 ${index === 0
                                ? "md:pl-0"
                                : "border-t border-[var(--border)] md:border-l md:border-t-0"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold tracking-widest text-[var(--highlight)]">
                                    {principle.number}
                                </span>

                                <FontAwesomeIcon
                                    icon={principle.icon}
                                    className="text-lg text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--highlight)]"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3 className="mt-3 text-xl font-bold tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl">
                                {principle.title}
                            </h3>

                            <p className="mt-1 max-w-sm text-sm leading-7 text-[var(--muted)] sm:text-base">
                                {principle.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );


}
