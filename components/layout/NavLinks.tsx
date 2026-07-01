"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

interface NavLinksProps {
  orientation?: "horizontal" | "vertical";
  variant?: "dark" | "light";
  onClick?: () => void;
  className?: string;
}

/**
 * NavLinks  renders the navigation menu items.
 * Used by both desktop Navbar and MobileMenu.
 */
export default function NavLinks({
  orientation = "horizontal",
  variant = "dark",
  onClick,
  className,
}: NavLinksProps) {
  return (
    <ul
      className={cn(
        "flex",
        orientation === "horizontal"
          ? "flex-row items-center gap-8 lg:gap-10"
          : "flex-col items-start gap-6",
        className
      )}
    >
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onClick}
            className={cn(
              "group relative inline-block font-sans text-xs uppercase tracking-[0.25em] transition-colors duration-300",
              orientation === "vertical" && "text-2xl tracking-[0.15em] normal-case font-serif font-light",
              variant === "light"
                ? "text-bone hover:text-bone"
                : "text-ink hover:text-ink"
            )}
          >
            {link.label}

            {/* Animated underline  slides in from left on hover */}
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
                variant === "light" ? "bg-bone" : "bg-ink"
              )}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}