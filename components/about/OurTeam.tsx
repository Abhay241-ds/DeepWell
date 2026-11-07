"use client";

import Image from "next/image";
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
        icon: faCode,
        name: "Web Development",
        description: "Building modern, responsive and high-performing websites.",
    },
    {
        icon: faMobileScreenButton,
        name: "App Development",
        description: "Creating user-friendly mobile applications.",
    },
    {
        icon: faBullhorn,
        name: "Social Media",
        description: "Growing brands through creative social media strategies.",
    },
    {
        icon: faRobot,
        name: "AI & Automation",
        description: "Making businesses smarter with intelligent automation.",
    },
    {
        icon: faPalette,
        name: "Digital Branding",
        description: "Creating memorable identities and digital experiences.",
    },
    {
        icon: faChartLine,
        name: "Marketing Strategy",
        description: "Helping businesses reach the right audience and grow.",
    },
];

const members = [
   
    {
        name: "Abhay Pratap Singh",
        role: "Technical Head",
        image: "/team/founder.png",
        description:
            "Leading technology, development and innovation to build powerful digital solutions.",
    },
    {
        name: "Harshit Kaushik",
        role: "Business Head",
        image: "/team/member.png",
        description:
            "Leading business strategy, client relationships and growth opportunities at DeepWell Digital.",
    },

];

export default function OurTeam() {
    return (
        <section className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14">

            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">

                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-(--muted)">
                            <span className="h-2 w-2 rounded-full bg-(--highlight)" />
                            Our Team Structure
                        </span>

                        <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-(--foreground) sm:text-4xl lg:text-5xl">
                            Different Teams.
                            <span className="block text-(--highlight)">
                                Shared Vision.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-lg text-sm leading-7 text-(--muted) sm:text-base lg:justify-self-end">
                        At DeepWell Digital, every service has a dedicated team
                        of people with specialized skills and creativity.
                        Different expertise comes together with one shared goal
                        — helping your business grow.
                    </p>

                </div>

                {/* Dedicated Teams */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {teams.map((team, index) => (
                        <div
                            key={team.name}
                            className="group rounded-2xl border border-(--border) bg-(--card) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--highlight) hover:shadow-lg"
                        >
                            <div className="flex items-center justify-between">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--highlight)/10 text-(--highlight) transition-transform duration-300 group-hover:scale-110">
                                    <FontAwesomeIcon
                                        icon={team.icon}
                                        className="text-xl"
                                    />
                                </div>

                                <span className="text-xs font-semibold text-(--muted)">
                                    0{index + 1}
                                </span>

                            </div>

                            <h3 className="mt-6 text-lg font-bold text-(--foreground)">
                                {team.name}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-(--muted)">
                                {team.description}
                            </p>

                            <div className="mt-5 h-px w-full bg-(--border)" />

                            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-(--highlight)">
                                <span>Dedicated Team</span>

                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>

                        </div>
                    ))}

                </div>

                {/* Team Members */}
                <div className="mt-20">

                    <div className="mb-8">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-(--highlight)">
                            The People Behind DeepWell
                        </span>

                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-(--foreground) sm:text-3xl">
                            Meet Our Teams Head
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-(--muted)">
                            The people bringing ideas to life through creativity,
                            collaboration and technology.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">

                        {members.map((member, index) => (
                            <div
                                key={member.name}
                                className="group flex flex-col gap-5 rounded-2xl border border-(--border) bg-(--card) p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:p-6"
                            >

                                {/* Member Image */}
                                <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-xl border border-(--border) bg-(--background) sm:w-40">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 160px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Member Details */}
                                <div className="flex flex-1 flex-col justify-center">

                                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-(--highlight)">
                                        Team Member 0{index + 1}
                                    </span>

                                    <h4 className="mt-3 text-xl font-bold text-(--foreground)">
                                        {member.name}
                                    </h4>

                                    <p className="mt-1 text-sm font-semibold text-(--highlight)">
                                        {member.role}
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-(--muted)">
                                        {member.description}
                                    </p>

                                    <div className="mt-5 h-1 w-12 rounded-full bg-(--highlight) transition-all duration-300 group-hover:w-20" />

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}