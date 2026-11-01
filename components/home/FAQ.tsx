"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faChevronDown,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const faqs = [
    {
        question: "What services does DeepWell Digital offer?",
        answer:
            "We offer website development, mobile app development, social media management, AI and automation, digital branding, and marketing strategy services. We tailor our solutions to your business goals and requirements.",
    },
    {
        question: "How much does a website cost?",
        answer:
            "Website pricing depends on your requirements, design complexity, features, and project scope. Contact us with your idea, and we can discuss a suitable solution and provide a project estimate.",
    },
    {
        question: "How long does it take to build a website?",
        answer:
            "The timeline depends on the size and complexity of your project. A simple business website generally takes less time than a large website with custom features. We establish the timeline after understanding your requirements.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Yes. We can help improve your existing website's design, responsiveness, user experience, performance, and functionality based on your needs.",
    },
    {
        question: "Do you provide website maintenance and support?",
        answer:
            "Maintenance and support requirements can be discussed based on your project. Contact us to explain what you need, and we can explore the appropriate support arrangement.",
    },

    {
        question: "How do I get started with DeepWell Digital?",
        answer:
            "Getting started is simple. Visit our contact page and tell us about your business, project idea, goals, and requirements. We'll take it from there and discuss the next steps with you.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                    {/* Left: Section Introduction */}
                    <div>
                        <div className=" lg:mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs">
                                Frequently Asked Questions
                            </span>
                        </div>

                        <h2 className="max-w-xl hidden lg:block text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
                            Got questions?
                            <br />
                            <span className="text-[var(--highlight)]">
                                We have answers.
                            </span>
                        </h2>

                        <p className="mt-6 hidden lg:block  max-w-md text-base leading-8 text-[var(--muted)] sm:text-lg">
                            Everything you need to know about working with
                            DeepWell Digital. Can't find what you're looking
                            for? Get in touch with us.
                        </p>

                        <a href="/contact" className="mt-8 hidden items-center gap-3 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-semibold text-[var(--background)] transition-opacity duration-200 hover:opacity-80 lg:inline-flex" > Ask Us Anything
                            <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare} aria-hidden="true"
                            />
                        </a>

                        {/* Supporting Note */}
                        <div className="mt-12 hidden items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:flex">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--background)] text-[var(--highlight)]">
                                <FontAwesomeIcon
                                    icon={faCircleQuestion}
                                    className="text-xl"
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h3 className="font-bold text-[var(--foreground)]">
                                    Have a unique project?
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                                    Tell us about your idea, and let's explore
                                    how we can bring it to life.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: FAQ Accordion */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            const answerId = `faq-answer-${index}`;

                            return (
                                <article
                                    key={faq.question}
                                    className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${isOpen
                                        ? "border-[var(--highlight)]/50 bg-[var(--card)]"
                                        : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--highlight)]/40"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={answerId}
                                        onClick={() =>
                                            setOpenIndex(
                                                isOpen ? null : index
                                            )
                                        }
                                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                                    >
                                        <span
                                            className={`text-sm font-bold leading-6 transition-colors sm:text-base ${isOpen
                                                ? "text-[var(--highlight)]"
                                                : "text-[var(--foreground)]"
                                                }`}
                                        >
                                            <span className="mr-3 text-xs font-semibold text-[var(--muted)]">
                                                {(index + 1)
                                                    .toString()
                                                    .padStart(2, "0")}
                                            </span>
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-200 ${isOpen
                                                ? "rotate-180 border-[var(--highlight)] bg-[var(--highlight)] text-[var(--background)]"
                                                : "text-[var(--muted)]"
                                                }`}
                                        >
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className="text-xs"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </button>

                                    <div
                                        id={answerId}
                                        aria-hidden={!isOpen}
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-5 pb-6 pl-12 text-sm leading-7 text-[var(--muted)] sm:px-6 sm:pb-6 sm:pl-16 sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
