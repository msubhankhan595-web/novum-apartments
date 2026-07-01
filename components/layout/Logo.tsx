import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Logo  text-based wordmark for now.
 * Replace with SVG image later if you have a logo file.
 */
export default function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-baseline gap-2 transition-opacity hover:opacity-70",
        className
      )}
      aria-label={`${SITE.fullName}  Home`}
    >
      <span
        className={cn(
          "font-serif text-2xl md:text-3xl font-light tracking-tight",
          variant === "light" ? "text-bone" : "text-ink"
        )}
      >
        {SITE.name}
      </span>
      <span
        className={cn(
          "hidden sm:inline text-[10px] uppercase tracking-[0.25em] mb-0.5",
          variant === "light" ? "text-bone/70" : "text-stone"
        )}
      >
        Apartments
      </span>
    </Link>
  );
}