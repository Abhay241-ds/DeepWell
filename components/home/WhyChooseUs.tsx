import {
    faBullseye,
    faCode,
    faComments,
    faRocket,
    faShieldHalved,
    faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const reasons = [
    {
        number: "01",
        title: "Business-First Approach",
        description:
            "We focus on understanding your goals and creating digital solutions that support your business growth.",
        icon: faBullseye,
    },
    {
        number: "02",
        title: "Modern Technology",
        description:
            "We use modern tools and technologies to build responsive, reliable, and user-friendly digital experiences.",
        icon: faCode,
    },
    {
        number: "03",
        title: "Clear Communication",
        description:
            "We keep you informed throughout the project, from the initial discussion to the final delivery.",
        icon: faComments,
    },
    {
        number: "04",
        title: "Growth-Focused Solutions",
        description:
            "Our approach combines design, technology, and strategy to help your business build a stronger online presence.",
        icon: faRocket,
    },
    {
        number: "05",
        title: "Attention to Detail",
        description:
            "We care about the details that shape a better user experience, from visual consistency to functionality.",
        icon: faShieldHalved,
    },
    {
        number: "06",
        title: "Creative Thinking",
        description:
            "We look for practical and creative ways to turn your ideas into meaningful digital experiences.",
        icon: faLightbulb,
    },
];

export default function WhyChooseUs() {
    return (
        <section
            id="why-us"
            className="relative isolate border-t border-[var(--border)] bg-[var(--background)] px-4 py-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:py-10 lg:px-8 lg:py-15"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                                Why DeepWell Digital
                            </span>
                        </div>

                        <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
                            More than a service.
                            <br />
                            <span className="text-[var(--highlight)]">
                                A growth partner.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-base leading-8 text-[var(--muted)] md:justify-self-end md:text-lg">
                        We bring design, technology, and strategy together to
                        help businesses build a stronger digital presence and
                        move toward their goals.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason) => (
                        <article
                            key={reason.number}
                            className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--highlight)]/50 hover:shadow-xl sm:p-7"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--foreground)] transition-colors duration-300 group-hover:border-[var(--highlight)] group-hover:bg-[var(--highlight)] group-hover:text-[var(--background)]">
                                    <FontAwesomeIcon
                                        icon={reason.icon}
                                        className="text-xl"
                                        aria-hidden="true"
                                    />
                                </div>

                                <span className="text-4xl font-extrabold tracking-[-0.07em] text-[var(--border)] transition-colors duration-300 group-hover:text-[var(--highlight)]">
                                    {reason.number}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
                                {reason.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                                {reason.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
