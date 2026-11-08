import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceCardProps {
  number: string;
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  tag: string;
}

export default function ServiceCard({
  number,
  slug,
  title,
  description,
  icon,
  tag,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--highlight)] hover:shadow-xl hover:shadow-black/5 sm:p-5"
    >
      {/* Card Header */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] transition-all duration-300 group-hover:border-[var(--highlight)] group-hover:bg-[var(--highlight)]">
          <FontAwesomeIcon
            icon={icon}
            className="text-[20px] text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--background)]"
          />
        </div>

        <span className="text-xs font-semibold tracking-widest text-[var(--muted)]/70">
          {number}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--highlight)]">
          {tag}
        </p>

        <h3 className="mb-2 text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-7 text-[var(--muted)]">
          {description}
        </p>

        <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--highlight)] underline decoration-[var(--highlight)] decoration-2 underline-offset-4 transition-colors duration-300 group-hover:text-[var(--foreground)]">
          Tap to Explore

          <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={16} />
          </span>
        </p>
      </div>

      {/* Card Footer */}
    </Link>
  );
}