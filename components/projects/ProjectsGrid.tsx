"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    number: "01",
    title: "RDEC Notes",
    category: "Web Development",
    description:
      "A notes-sharing platform that helps students access study materials and previous year question papers.",
    image: "/projects/rdec-notes.png",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "https://abhay-rd-hub.vercel.app/",
  },
  {
    number: "02",
    title: "Anandpur Seva Samiti",
    category: "NGO",
    description:
      "A digital platform for an NGO to showcase its activities, share its mission, and connect with supporters.",
    image: "/projects/anandpur.png",
    technologies: ["Next.js", "Tailwind CSS", "Razorpay"],
    link: "https://www.radharamansevasamiti.in/",
  },
  {
    number: "03",
    title: "Gloss & Glow",
    category: "Web Development",
    description:
      "A modern beauty parlour website designed to showcase services and create a better customer experience.",
    image: "/projects/gloss-glow.png",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://gloss-glow-one.vercel.app",
  },
  {
    number: "04",
    title: "YojnaMitra",
    category: "AI & Automation",
    description:
      "An AI-powered government scheme assistant that helps citizens discover schemes based on their profiles.",
    image: "/projects/yojnamitra.png",
    technologies: ["Next.js", "Supabase", "AI / RAG"],
    link: "https://yojnamitra-rdec.vercel.app/",
  },
];

const categories = [
  "All",
  "Web Development",
  "AI & Automation",
  "NGO",
];

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="all-projects"
      className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-(--highlight)" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted) sm:text-xs">
                Our Portfolio
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-(--foreground) sm:text-5xl md:text-6xl">
              Work that speaks
              <br />
              <span className="text-(--highlight)">for itself.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-(--muted) lg:ml-auto lg:pb-1 lg:text-lg">
            A look at the projects we've worked on, combining
            creativity, technology, and practical solutions.
          </p>
        </div>

        {/* Category filters */}
       

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {filteredProjects.map((project) => (
            <article
              key={project.number}
              className="group"
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-(--border) bg-(--card)">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Project number */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  PROJECT / {project.number}
                </span>

                {/* View button */}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 hover:scale-110 group-hover:opacity-100"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </Link>
                )}
              </div>

              {/* Project details */}
              <div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--highlight)">
                    {project.category}
                  </span>

                  <span className="text-xs text-(--muted)">
                    {project.number} / 04
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-(--foreground) transition-colors duration-300 group-hover:text-(--highlight) sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-(--muted) sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                

                {/* Project link */}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--foreground) transition-colors hover:text-(--highlight)"
                  >
                    View Project
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-xs"
                    />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        
      </div>
    </section>
  );
}
