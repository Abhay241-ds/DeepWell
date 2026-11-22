"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const pathname = usePathname();

    // Scroll Progress
    useEffect(() => {
        let animationFrame = 0;

        const updateProgress = () => {
            cancelAnimationFrame(animationFrame);

            animationFrame = requestAnimationFrame(() => {
                const scrollTop = window.scrollY;

                const scrollableHeight =
                    document.documentElement.scrollHeight -
                    window.innerHeight;

                const progress =
                    scrollableHeight > 0
                        ? (scrollTop / scrollableHeight) * 100
                        : 0;

                setScrollProgress(Math.min(100, Math.max(0, progress)));
            });
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });

        window.addEventListener("resize", updateProgress);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, [pathname]);

    // Check active page
    const isActivePage = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 shadow-[0_2px_10px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-300">

            {/* Scroll Progress Bar */}
            <div
                className="absolute left-0 top-0 z-60 h-1 bg-[var(--highlight)]"
                style={{
                    width: `${scrollProgress}%`,
                    transition: "width 100ms linear",
                }}
                role="progressbar"
                aria-label="Page scroll progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(scrollProgress)}
            />

            {/* Navbar */}
            <nav
                aria-label="Main navigation"
                className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 lg:px-8"
            >
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="shrink-0 text-xl font-extrabold tracking-tight text-[var(--foreground)] transition-colors sm:text-2xl"
                >
                    DeepWell
                    <span className="text-[var(--accent)]">.digital</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => {
                        const isActive = isActivePage(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`relative font-bold text-sm transition-colors duration-200 ${
                                    isActive
                                        ? "text-[var(--highlight)]"
                                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                                }`}
                            >
                                {link.label}

                                {isActive && (
                                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--highlight)]" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right-side Actions */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">

                    {/* Desktop Theme Toggle */}
                    <div className="hidden sm:block">
                        <ThemeToggle />
                    </div>

                    {/* Desktop CTA */}
                    <Link
                        href="/contact"
                        className="hidden items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-80 sm:flex"
                    >
                        Start a Project
                        <ArrowUpRight size={16} />
                    </Link>

                    {/* Mobile Theme Toggle */}
                    <div className="sm:hidden">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors hover:bg-[var(--card)] md:hidden"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-5 transition-colors duration-300 sm:px-6 md:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">

                        {/* Mobile Links */}
                        {navLinks.map((link) => {
                            const isActive = isActivePage(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "bg-[var(--card)] text-[var(--highlight)]"
                                            : "text-[var(--foreground)] hover:bg-[var(--card)]"
                                    }`}
                                >
                                    <span>{link.label}</span>

                                    {isActive && (
                                        <span className="h-2 w-2 rounded-full bg-[var(--highlight)]" />
                                    )}
                                </Link>
                            );
                        })}

                        {/* Mobile CTA */}
                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-80"
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