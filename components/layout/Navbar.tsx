"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md"> <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
    >
        <Link
            href="/"
            className="shrink-0 text-2xl font-extrabold tracking-tight text-[var(--foreground)]"
            onClick={() => setMenuOpen(false)}
        >
            DeepWell<span className="text-[var(--accent)]">.digital</span> </Link>


        <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                    {link.label}
                </Link>
            ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
            <div className="hidden sm:block">
                <ThemeToggle />
            </div>

            <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-80 sm:flex"
            >
                Start a Project
                <ArrowUpRight size={16} />
            </Link>

            <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] md:hidden"
            >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
    </nav>

        {menuOpen && (
            <div className="border-t border-[var(--border)] px-4 py-5 sm:px-6 md:hidden">
                <div className="mx-auto flex max-w-7xl flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--card)]"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="mt-3 flex items-center justify-between border-t border-[var(--border)] pt-4">
                        <span className="text-sm text-[var(--muted)]">
                            Appearance
                        </span>
                        <ThemeToggle />
                    </div>

                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]"
                    >
                        Start a Project
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        )}
    </header>


    );
}
