"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { LOCATION } from "@/lib/constants";

/**
 * Location  neighborhood story, stats, map, and nearby places.
 */
export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 lg:py-40 bg-bone">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN  Story + Stats + Nearby */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-stone"
            >
              {LOCATION.eyebrow}
            </motion.p>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-ink leading-[1.05]"
            >
              {LOCATION.title}
            </motion.h2>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="origin-left mt-8 h-px w-20 bg-gold"
            />

            {/* Body */}
            <div className="mt-10 space-y-6">
              {LOCATION.body.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
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

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-ink/10 pt-10"
            >
              {LOCATION.stats.map((stat) => (
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

            {/* Nearby places */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="mt-12"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-6">
                Nearby
              </p>
              <ul className="space-y-3">
                {LOCATION.nearby.map((item) => (
                  <li
                    key={item.place}
                    className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-3"
                  >
                    <span className="font-serif text-lg md:text-xl text-ink font-light">
                      {item.place}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-stone shrink-0">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT COLUMN  Map + Address */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:sticky lg:top-28"
          >
            {/* Map */}
            <div className="relative aspect-square lg:aspect-[4/5] w-full overflow-hidden bg-stone/10 border border-ink/10">
              <iframe
                src={LOCATION.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="grayscale-[40%] contrast-[0.95]"
                title="Map of Novum Apartments location"
              />
            </div>

            {/* Address + directions */}
            <div className="mt-8 flex items-start justify-between gap-6 flex-wrap">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-1 text-gold shrink-0"
                />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
                    Address
                  </p>
                  <p className="mt-2 font-serif text-lg text-ink leading-snug">
                    {LOCATION.address}
                  </p>
                </div>
              </div>

              {/* Directions link */}
              <a
                href={LOCATION.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink hover:text-gold transition-colors duration-300"
              >
                Get Directions
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}