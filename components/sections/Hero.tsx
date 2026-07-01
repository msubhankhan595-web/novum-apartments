"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroMedia from "./HeroMedia";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

interface HeroProps {
  heroEyebrow?: string | null;
  heroTitle?: string | null;
  heroDescription?: string | null;
  heroImage?: string | null;
  heroImageAlt?: string | null;
}

// Fallback hero media used when Sanity does not have an uploaded image yet.
const FALLBACK_HERO_MEDIA = {
  type: "image" as "image" | "video",
  src: "/images/home/frontcta.jpg",
  alt: "Luxury Triad UCity Apartments residence",
};

export default function Hero({
  heroEyebrow,
  heroTitle,
  heroDescription,
  heroImage,
  heroImageAlt,
}: HeroProps) {
  const eyebrow = heroEyebrow || "A New Way to Live · Philadelphia";
  const title = heroTitle || `${SITE.name} Apartments`;
  const description =
    heroDescription ||
    "A refined collection of residences where timeless architecture meets contemporary living in the heart of the city.";

  const heroMedia = {
    ...FALLBACK_HERO_MEDIA,
    src: heroImage || FALLBACK_HERO_MEDIA.src,
    alt: heroImageAlt || FALLBACK_HERO_MEDIA.alt,
  };

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      {/* Swappable media image/video */}
      <HeroMedia {...heroMedia} />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/70" />

      {/* Content */}
      <Container
        size="wide"
        className="relative z-10 h-full flex items-end pb-24 md:pb-32"
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

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-bone leading-[0.95]"
          >
            {title}
          </motion.h1>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="origin-left mt-8 h-px w-20 bg-gold"
          />

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="mt-8 max-w-xl text-base md:text-lg text-bone/80 leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/properties" variant="primary-light">
              Explore Residences
            </Button>

            <Button href="/contact" variant="secondary-light">
              Schedule a Tour
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-bone/60">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} strokeWidth={1.5} className="text-bone/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}