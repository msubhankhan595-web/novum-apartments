"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ABOUT } from "@/lib/constants";

/**
 * About  editorial two-column section.
 * Image on left, story + stats on right.
 */
export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 lg:py-40 bg-mist"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone/10">
              <Image
                src={ABOUT.image}
                alt={ABOUT.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT COLUMN */}
          <div className="lg:col-span-6 lg:pl-8">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-stone"
            >
              {ABOUT.eyebrow}
            </motion.p>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-ink leading-[1.05]"
            >
              {ABOUT.title}
            </motion.h2>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="origin-left mt-8 h-px w-20 bg-gold"
            />

            {/* Body paragraphs */}
            <div className="mt-10 space-y-6">
              {ABOUT.body.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-base md:text-lg text-stone leading-relaxed max-w-xl"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="mt-14 grid grid-cols-3 gap-6 md:gap-10 max-w-md border-t border-ink/10 pt-10"
            >
              {ABOUT.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-4xl md:text-5xl font-light text-ink leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-stone">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              className="mt-12"
            >
              <Button href="/about" variant="secondary" size="md">
                Discover More
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}