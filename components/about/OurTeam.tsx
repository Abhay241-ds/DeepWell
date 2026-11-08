"use client";

import Link from "next/link";

import {
    faCode,
    faMobileScreenButton,
    faBullhorn,
    faRobot,
    faPalette,
    faChartLine,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const teams = [
    {
        slug: "web-development",
        icon: faCode,
        name: "Web Development",
        description: "Building modern, responsive and high-performing websites.",
    },
    {
        slug: "app-development",
        icon: faMobileScreenButton,
        name: "App Development",
        description: "Creating user-friendly mobile applications.",
    },
    {
        slug: "social-media-management",
        icon: faBullhorn,
        name: "Social Media",
        description: "Growing brands through creative social media strategies.",
    },
    {
        slug: "ai-automation",
        icon: faRobot,
        name: "AI & Automation",
        description: "Making businesses smarter with intelligent automation.",
    },
    {
        slug: "digital-branding",
        icon: faPalette,
        name: "Digital Branding",
        description: "Creating memorable identities and digital experiences.",
    },
    {
        slug: "marketing-strategies",
        icon: faChartLine,
        name: "Marketing Strategy",
        description: "Helping businesses reach the right audience and grow.",
    },
];

const members = [
    {
        initials: "AS",
        name: "Abhay Pratap Singh",
        role: "Technical Head",
        description:
            "Leading technology, development and innovation to build powerful digital solutions.",
        number: "01",
    },
    {
        initials: "HK",
        name: "Harshit Kaushik",
        role: "Business Head",
        description:
            "Leading business strategy, client relationships and growth opportunities at DeepWell Digital.",
        number: "02",
    },
];

export default function OurTeam() {
    return (
        <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14">

            <div className="mx-auto max-w-7xl">

                {/* SECTION HEADING */}

                <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">

                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-(--muted)">
                            <span className="h-2 w-2 rounded-full bg-(--highlight)" />
                            The People Behind DeepWell
                        </span>

                        <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-(--foreground) sm:text-4xl lg:text-5xl">
                            Great Ideas.
                            <span className="block text-(--highlight)">
                                Great People.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-7 text-(--muted) sm:text-base lg:justify-self-end">
                        A team of creative thinkers, developers and strategists
                        working together to turn ambitious ideas into meaningful
                        digital experiences.
                    </p>

                </div>

                {/* OUR TEAMS */}

                <div className="mb-16">

                    <div className="mb-7 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-(--foreground)">
                            What We Do
                        </h3>

                        <span className="text-xs font-semibold text-(--muted)">
                            06 Specializations
                        </span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {teams.map((team, index) => (
                            <Link
                                key={team.slug}
                                href={`/services/${team.slug}`}
                                className="group rounded-2xl border border-(--border) bg-(--card) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--highlight) hover:shadow-lg"
                            >

                                <div className="flex items-center justify-between">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--highlight)/10 text-(--highlight) transition-all duration-300 group-hover:bg-(--highlight) group-hover:text-(--background)">
                                        <FontAwesomeIcon
                                            icon={team.icon}
                                            className="text-lg"
                                        />
                                    </div>

                                    <span className="text-xs font-semibold tracking-widest text-(--muted)">
                                        0{index + 1}
                                    </span>

                                </div>

                                <h4 className="mt-6 text-lg font-bold text-(--foreground)">
                                    {team.name}
                                </h4>

                                <p className="mt-2 text-sm leading-6 text-(--muted)">
                                    {team.description}
                                </p>

                                <div className="mt-5 flex items-center justify-between border-t border-(--border) pt-4">

                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-(--muted)">
                                        Our Expertise
                                    </span>

                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="text-sm text-(--highlight) transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

                {/* LEADERSHIP */}

                <div className="border-t border-(--border) pt-12">

                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-(--highlight)">
                                Meet The Leadership
                            </span>

                            <h3 className="mt-3 text-2xl font-bold tracking-tight text-(--foreground) sm:text-3xl">
                                The People Behind The Vision.
                            </h3>
                        </div>

                        <p className="max-w-sm text-sm leading-6 text-(--muted)">
                            Bringing together technical expertise and business
                            vision to move every project forward.
                        </p>

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">

                        {members.map((member) => (
                            <div
                                key={member.name}
                                className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--card) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--highlight) hover:shadow-lg sm:p-8"
                            >

                                {/* Background Decoration */}

                                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-(--border) transition-transform duration-500 group-hover:scale-125" />

                                <div className="relative flex items-start justify-between gap-4">

                                    {/* Initials */}

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-(--border) bg-(--background) text-xl font-extrabold tracking-tight text-(--highlight) transition-all duration-300 group-hover:border-(--highlight) sm:h-20 sm:w-20 sm:text-2xl">
                                        {member.initials}
                                    </div>

                                    <span className="text-xs font-bold tracking-widest text-(--muted)">
                                        {member.number}
                                    </span>

                                </div>

                                {/* Details */}

                                <div className="relative mt-7">

                                    <span className="inline-flex rounded-full border border-(--highlight)/30 bg-(--highlight)/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-(--highlight)">
                                        {member.role}
                                    </span>

                                    <h4 className="mt-4 text-xl font-bold tracking-tight text-(--foreground) sm:text-2xl">
                                        {member.name}
                                    </h4>

                                    <p className="mt-3 max-w-md text-sm leading-7 text-(--muted)">
                                        {member.description}
                                    </p>

                                    <div className="mt-7 h-1 w-10 rounded-full bg-(--highlight) transition-all duration-300 group-hover:w-20" />

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

                {/* BOTTOM MESSAGE */}

                <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-(--border) bg-(--card) p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

                    <div>
                        <h3 className="text-lg font-bold text-(--foreground)">
                            Different Skills. One Vision.
                        </h3>

                        <p className="mt-2 text-sm text-(--muted)">
                            Together, we build digital solutions that make a difference.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="inline-flex shrink-0 items-center gap-3 text-sm font-bold text-(--highlight) transition-colors hover:text-(--foreground)"
                    >
                        Work With Us
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>

                </div>

            </div>

        </section>
    );
}