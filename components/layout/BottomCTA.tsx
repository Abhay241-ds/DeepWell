import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function BottomCTA() {
    return (<section className=" mb-8  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8   ">
        <div className="group relative isolate overflow-hidden rounded-3xl border border-(--border) bg-(--card) px-6 py-8 transition-all duration-300 hover:border-(--primary)/40 sm:px-10 sm:py-10 lg:px-12">
            {/* Subtle decorative background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-[var(--primary)] opacity-[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]"
            />


            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                {/* CTA Content */}
                <div className="max-w-xl">
                    

                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl lg:text-4xl">
                        Let&apos;s build something{" "}
                        <span className="text-[var(--primary)]">remarkable.</span>
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--muted)] sm:text-base">
                        Have an idea for your business? Let&apos;s turn it into a digital
                        experience that makes an impact.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="shrink-0">
                    <Link
                        href="/contact"
                        className="group/button inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-bold text-[var(--background)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--card)]"
                    >
                        Start a Project

                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                        />
                    </Link>

                   

                </div>
            </div>
        </div>
    </section>


    );
}
