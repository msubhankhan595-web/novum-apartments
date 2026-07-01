"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}

/**
 * PageHero  reusable hero for sub-pages.
 * Content is bottom-aligned with safe top padding to clear the navbar.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative h-[80svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background image with slow zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.32, 0.72, 0, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/75" />

      {/* Content  safe top padding for navbar, bottom-aligned */}
      <Container
        size="wide"
        className="relative z-10 h-full flex flex-col justify-end pt-32 md:pt-40 pb-16 md:pb-24"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-bone/80"
          >
            {eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-bone leading-[1.05]"
          >
            {title}
          </motion.h1>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="origin-left mt-8 h-px w-20 bg-gold"
          />

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
              className="mt-8 max-w-xl text-base md:text-lg text-bone/80 leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  );
}