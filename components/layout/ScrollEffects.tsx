"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollEffects() {
    const pathname = usePathname();

    useEffect(() => {
        const root = document.documentElement;

        // Respect user's motion preferences
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const elements = document.querySelectorAll(
            "main [data-scroll-reveal]"
        );

        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        elements.forEach((element) => {
            element.classList.add("reveal");
            observer.observe(element);
        });

        // Enable reveal CSS only after elements are prepared
        root.classList.add("reveal-ready");

        return () => {
            observer.disconnect();
            root.classList.remove("reveal-ready");

            elements.forEach((element) => {
                element.classList.remove("reveal", "in");
            });
        };
    }, [pathname]);

    return null;
}