"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FINAL_CTA } from "@/lib/constants";

/**
 * FinalCTA  closing call-to-action with a full-bleed image background.
 * Last section before the footer.
 */
export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative isolate overflow-hidden bg-ink"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={FINAL_CTA.image}
          alt={FINAL_CTA.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/40" />
        {/* Vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </motion.div>

      <Container size="wide">
        <div className="py-32 md:py-40 lg:py-48 max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-bone/70"
          >
            {FINAL_CTA.eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-bone leading-[0.98]"
          >
            {FINAL_CTA.title}
          </motion.h2>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="origin-left mt-10 h-px w-20 bg-gold"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-10 max-w-xl text-base md:text-lg text-bone/80 leading-relaxed"
          >
            {FINAL_CTA.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Button
              href={FINAL_CTA.primaryCta.href}
              variant="primary-light"
            >
              {FINAL_CTA.primaryCta.label}
            </Button>
            <Button
              href={FINAL_CTA.secondaryCta.href}
              variant="secondary-light"
            >
              {FINAL_CTA.secondaryCta.label}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}