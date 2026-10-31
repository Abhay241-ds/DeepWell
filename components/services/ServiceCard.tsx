import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  tag,
}: ServiceCardProps) {
  return (
    <Link
      href="/contact"
      className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--highlight)] hover:shadow-xl hover:shadow-black/5 sm:p-7"
    >
      {/* Card Header */}
      <div className="mb-10 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] transition-all duration-300 group-hover:border-[var(--highlight)] group-hover:bg-[var(--highlight)]">
          <Icon
            size={22}
            strokeWidth={1.7}
            className="text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--background)]"
          />
        </div>

        <span className="text-xs font-semibold tracking-widest text-[var(--muted)]/70">
          {number}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--highlight)]">
          {tag}
        </p>

        <h3 className="mb-3 text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-7 text-[var(--muted)]">
          {description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
        <span className="text-xs font-semibold text-[var(--foreground)]">
          Explore service
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--highlight)] group-hover:bg-[var(--highlight)]">
          <ArrowUpRight
            size={17}
            className="text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--background)]"
          />
        </div>
      </div>
    </Link>
  );
}