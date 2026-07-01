"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "dark" | "light";
  className?: string;
}

/**
 * SectionHeading  reusable eyebrow + title + gold line + description.
 * Animates in when scrolled into view.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "dark",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "text-[10px] md:text-xs uppercase tracking-[0.4em]",
            isLight ? "text-bone/70" : "text-stone"
          )}
        >
          {eyebrow}
        </motion.p>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className={cn(
          "mt-6 font-serif font-light tracking-tight leading-[1.05]",
          "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
          isLight ? "text-bone" : "text-ink"
        )}
      >
        {title}
      </motion.h2>

      {/* Gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className={cn(
          "origin-left mt-8 h-px w-20 bg-gold",
          isCenter && "origin-center"
        )}
      />

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className={cn(
            "mt-8 max-w-2xl text-base md:text-lg leading-relaxed",
            isLight ? "text-bone/80" : "text-stone"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
} 