"use client";

import { useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLocationDot,
    faArrowUpRightFromSquare,
    faCheckCircle,
    faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WHATSAPP_NUMBER = "919027802766";
const CONTACT_EMAIL = "deepwell.digital2026@gmail.com";

const inputClass =
    "w-full rounded-xl border border-(--border) bg-(--background) px-4 py-3.5 text-sm text-(--foreground) outline-none transition-all duration-300 placeholder:text-(--muted)/70 focus:border-(--highlight)";

type FormDetails = {
    name: string;
    email: string;
    phone: string;
    service: string;
    budget: string;
    message: string;
};

export default function ContactForm() {
    const [status, setStatus] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    function getFormDetails(
        event: FormEvent<HTMLFormElement>
    ): FormDetails | null {
        event.preventDefault();
        setStatus(null);

        const form = event.currentTarget;

        if (!form.reportValidity()) {
            return null;
        }

        const formData = new FormData(form);

        return {
            name: String(formData.get("name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            phone: String(formData.get("phone") || "").trim(),
            service: String(formData.get("service") || "").trim(),
            budget: String(formData.get("budget") || "").trim(),
            message: String(formData.get("message") || "").trim(),
        };
    }

    function createMessage(data: FormDetails) {
        return `
NEW WEBSITE ENQUIRY
DeepWell Digital

━━━━━━━━━━━━━━━━━━

CUSTOMER DETAILS

Name: ${data.name}
Email: ${data.email || "Not provided"}
Phone: ${data.phone || "Not provided"}

━━━━━━━━━━━━━━━━━━

PROJECT DETAILS

Interested In: ${data.service}
Estimated Budget: ${data.budget || "Not specified"}

Project Description:
${data.message || "Not provided"}

━━━━━━━━━━━━━━━━━━
Sent via DeepWell Digital Website
        `.trim();
    }

    function handleWhatsApp(event: FormEvent<HTMLFormElement>) {
        const data = getFormDetails(event);

        if (!data) return;

        const whatsappMessage = createMessage(data);

        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        const whatsappWindow = window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    }

    function handleEmail(event: FormEvent<HTMLFormElement>) {
        const data = getFormDetails(event);

        if (!data) return;

        const subject = "New Project Enquiry - DeepWell Digital";
        const body = createMessage(data);

        const mailtoURL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoURL;


    }

    return (
        <section
            id="contact-form"
            className="relative isolate overflow-hidden bg-(--background) px-4 pb-10 pt-10 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-10 before:bg-linear-to-b before:from-(--section-shadow) before:to-transparent sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-14"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-(--highlight)" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--muted) sm:text-xs">
                        Contact Us
                    </span>
                </div>

                {/* Main Layout */}
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">

                    {/* Left Information Card */}


                    {/* Right Form */}
                    <div className="rounded-2xl border border-(--border) bg-(--card) p-6 sm:p-8 lg:p-10">

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold tracking-tight text-(--foreground)">
                                Send us a message
                            </h3>

                            <p className="mt-2 text-sm text-(--muted)">
                                Fill in the details below and tell us about your project.
                            </p>
                        </div>

                        <form className="space-y-6">

                            {/* Name and Email */}
                            <div className="grid gap-5 sm:grid-cols-2">

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-(--foreground)"
                                    >
                                        Full Name <span className="text-(--highlight)">*</span>
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        maxLength={100}
                                        autoComplete="name"
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-semibold text-(--foreground)"
                                >
                                    Phone Number <span className="text-(--highlight)">*</span>
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    placeholder="+91 00000 00000"
                                    autoComplete="tel"
                                    className={inputClass}
                                />
                            </div>

                                

                            </div>

                            {/* Phone and Service */}
                            <div className="grid gap-5 sm:grid-cols-2">



                                <div>
                                    <label
                                        htmlFor="service"
                                        className="mb-2 block text-sm font-semibold text-(--foreground)"
                                    >
                                        Interested In <span className="text-(--highlight)">*</span>
                                    </label>

                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        defaultValue=""
                                        className={`${inputClass} appearance-none`}
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>

                                        <option value="Web Development">
                                            Web Development
                                        </option>

                                        <option value="App Development">
                                            App Development
                                        </option>

                                        <option value="Social Media Management">
                                            Social Media Management
                                        </option>

                                        <option value="AI & Automation">
                                            AI & Automation
                                        </option>

                                        <option value="Digital Branding & Growth">
                                            Digital Branding & Growth
                                        </option>

                                        <option value="Marketing Strategies">
                                            Marketing Strategies
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="budget"
                                        className="mb-2 block text-sm font-semibold text-(--foreground)"
                                    >
                                        Estimated Budget
                                    </label>

                                    <select
                                        id="budget"
                                        name="budget"
                                        defaultValue=""
                                        className={`${inputClass} appearance-none`}
                                    >
                                        <option value="">
                                            Select your budget
                                        </option>
                                        <option value="Below ₹5,000">
                                            Below ₹5,000
                                        </option>

                                        <option value="₹5,000 - ₹10,000">
                                            ₹5,000 - ₹10,000
                                        </option>

                                        <option value="₹10,000 - ₹25,000">
                                            ₹10,000 - ₹25,000
                                        </option>

                                        <option value="₹25,000 - ₹50,000">
                                            ₹25,000 - ₹50,000
                                        </option>

                                        <option value="Above ₹50,000">
                                            Above ₹50,000
                                        </option>

                                        <option value="Not Decided">
                                            Not Decided
                                        </option>
                                    </select>
                                </div>

                            </div>

                            {/* email */}
                           <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-(--foreground)"
                                    >
                                        Email Address 
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        maxLength={254}
                                        autoComplete="email"
                                        className={inputClass}
                                    />
                                </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-(--foreground)"
                                >
                                    Tell Us About Your Project{" "}

                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    maxLength={5000}
                                    placeholder="Describe your idea or project..."
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            {/* Submission Status */}
                            {status && (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${status.type === "success"
                                            ? "border-green-500/30 bg-green-500/10 text-green-600"
                                            : "border-red-500/30 bg-red-500/10 text-red-500"
                                        }`}
                                >
                                    <FontAwesomeIcon
                                        icon={
                                            status.type === "success"
                                                ? faCheckCircle
                                                : faCircleExclamation
                                        }
                                        className="mt-1 shrink-0"
                                    />

                                    <span>{status.message}</span>
                                </div>
                            )}

                            {/* Two Submission Buttons */}
                            <div className="flex flex-col gap-3 pt-2 sm:flex-row">

                                {/* WhatsApp Button */}
                                <button
                                    type="button"
                                    onClick={(event) => {
                                        const form = event.currentTarget.form;
                                        if (form) {
                                            handleWhatsApp({
                                                preventDefault: () => { },
                                                currentTarget: form,
                                            } as FormEvent<HTMLFormElement>);
                                        }
                                    }}
                                    className="group inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-lg"
                                >
                                    <FontAwesomeIcon
                                        icon={faWhatsapp}
                                        className="text-xl transition-transform duration-300 group-hover:scale-110"
                                    />

                                    Send via WhatsApp
                                </button>

                                {/* Email Button */}
                                <button
                                    type="button"
                                    onClick={(event) => {
                                        const form = event.currentTarget.form;
                                        if (form) {
                                            handleEmail({
                                                preventDefault: () => { },
                                                currentTarget: form,
                                            } as FormEvent<HTMLFormElement>);
                                        }
                                    }}
                                    className="group inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-full border border-(--border) bg-(--background) px-6 py-4 text-sm font-bold text-(--foreground) transition-all duration-300 hover:-translate-y-1 hover:border-(--highlight) hover:shadow-lg"
                                >
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="text-lg transition-transform duration-300 group-hover:scale-110"
                                    />

                                    Send via Email
                                </button>

                            </div>

                            <p className="text-xs leading-6 text-(--muted)">
                                Choose WhatsApp or Email to share your enquiry with DeepWell Digital.
                                Review your message and press Send to complete the process.
                            </p>

                        </form>
                    </div>
                    <div className="flex flex-col justify-between rounded-2xl border border-(--border) bg-(--card) p-6 sm:p-8 lg:p-10">

                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-(--highlight)">
                                Let's Connect
                            </span>

                            <h3 className="mt-5 max-w-sm text-3xl font-bold leading-tight tracking-tight text-(--foreground) sm:text-4xl">
                                Great projects begin with a conversation.
                            </h3>

                            <p className="mt-5 max-w-md text-sm leading-7 text-(--muted) sm:text-base">
                                Tell us what you're looking to build. We'll discuss your
                                requirements and find the right way forward.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="mt-12 space-y-6">

                            {/* Email */}
                            <div className="flex items-start gap-4 border-t border-(--border) pt-6">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--background) text-(--highlight)">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-(--muted)">
                                        Email Us
                                    </p>

                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="mt-1 block break-all text-sm font-semibold text-(--foreground) transition-colors hover:text-(--highlight)"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 border-t border-(--border) pt-6">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--background) text-(--highlight)">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-(--muted)">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-(--foreground)">
                                        India · Working Worldwide
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* WhatsApp Contact Buttons */}
                        <div className="mt-10 space-y-3">

                            {/* General Enquiry */}
                            <a
                                href="https://wa.me/919045079796?text=Hi%20DeepWell%20Digital%2C%20I%20have%20a%20general%20enquiry."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact DeepWell Digital on WhatsApp for a general enquiry"
                                className="group flex items-center justify-between rounded-xl border border-(--border) bg-(--background) px-5 py-4 text-(--foreground) transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:shadow-lg"
                            >
                                <span className="flex items-center gap-4">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 transition-transform duration-300 group-hover:scale-110">
                                        <FontAwesomeIcon
                                            icon={faWhatsapp}
                                            className="text-2xl text-[#25D366]"
                                        />
                                    </span>

                                    <span>
                                        <span className="block text-sm font-bold">
                                            General Enquiry
                                        </span>

                                        <span className="mt-1 block text-xs text-(--muted)">
                                            Let's have a conversation
                                        </span>
                                    </span>
                                </span>

                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                            {/* Start a Project */}
                            <a
                                href="https://wa.me/919027802766?text=Hi%20DeepWell%20Digital%2C%20I%20want%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact DeepWell Digital on WhatsApp to start a project"
                                className="group flex items-center justify-between rounded-xl border border-(--border) bg-(--background) px-5 py-4 text-(--foreground) transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:shadow-lg"
                            >
                                <span className="flex items-center gap-4">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 transition-transform duration-300 group-hover:scale-110">
                                        <FontAwesomeIcon
                                            icon={faWhatsapp}
                                            className="text-2xl text-[#25D366]"
                                        />
                                    </span>

                                    <span>
                                        <span className="block text-sm font-bold">
                                            Start a Project
                                        </span>

                                        <span className="mt-1 block text-xs text-(--muted)">
                                            Discuss your next big idea
                                        </span>
                                    </span>
                                </span>

                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                        </div>

                        {/* Footer */}
                        <div className="mt-10 flex items-center justify-between border-t border-(--border) pt-6">
                            <span className="text-xs font-medium text-(--muted)">
                                DeepWell Digital
                            </span>

                            <span className="text-xs font-medium text-(--muted)">
                                Ideas into Impact.
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}