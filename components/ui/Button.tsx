"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?:
    | "primary"          // dark button on light bg
    | "secondary"        // outline button on light bg
    | "primary-light"    // light button on dark bg
    | "secondary-light"  // outline button on dark bg
    | "ghost";           // text-only
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

/**
 * Button  luxury button with sliding fill animation on hover.
 * The fill slides in from left → right, just like the navbar underlines.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden font-sans uppercase tracking-[0.2em] text-xs border";

  // Each variant defines:
  // - button: base colors (bg, text, border)
  // - fill:   the color that slides in on hover
  // - hoverText: text color AFTER fill arrives
  const variants = {
    primary: {
      button: "bg-ink text-bone border-ink",
      fill: "bg-bone",
      hoverText: "group-hover:text-ink",
    },
    secondary: {
      button: "bg-transparent text-ink border-ink",
      fill: "bg-ink",
      hoverText: "group-hover:text-bone",
    },
    "primary-light": {
      button: "bg-bone text-ink border-bone",
      fill: "bg-ink",
      hoverText: "group-hover:text-bone",
    },
    "secondary-light": {
      button: "bg-transparent text-bone border-bone",
      fill: "bg-bone",
      hoverText: "group-hover:text-ink",
    },
    ghost: {
      button: "bg-transparent text-ink border-transparent hover:border-ink",
      fill: "",
      hoverText: "",
    },
  };

  const sizes = {
    sm: "px-6 py-3",
    md: "px-8 py-4",
    lg: "px-10 py-5",
  };

  const v = variants[variant];
  const classes = cn(base, v.button, sizes[size], className);

  const content = (
    <>
      {/* Sliding fill  origin-left + scale-x-0 → 100 on hover */}
      {v.fill && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
            v.fill
          )}
        />
      )}

      {/* Text  sits on TOP of the sliding fill via z-10 */}
      <span
        className={cn(
          "relative z-10 transition-colors duration-500 ease-out",
          v.hoverText
        )}
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}