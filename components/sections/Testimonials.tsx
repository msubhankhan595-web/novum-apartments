"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 6000;

/**
 * Testimonials  auto-rotating resident quotes with manual dots.
 * Sized to fit in a single viewport on most desktops.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const quotes = TESTIMONIALS.quotes;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const current = quotes[index];

  return (
    <section
      id="testimonials"
      className="py-14 md:py-18 lg:py-20 bg-ink text-bone overflow-hidden"
    >
      <Container size="default">
        {/* Heading  tighter spacing */}
        <SectionHeading
          eyebrow={TESTIMONIALS.eyebrow}
          title={TESTIMONIALS.title}
          align="center"
          variant="light"
        />

        {/* Quote area  reduced min-height */}
        <div className="mt-8 md:mt-10 relative min-h-[160px] md:min-h-[180px] flex flex-col items-center justify-center text-center">
          {/* Decorative quote mark  smaller */}
          <Quote
            size={28}
            strokeWidth={1}
            className="text-gold opacity-60 mb-4 md:mb-6"
          />

          {/* Animated quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              {/* Smaller scale: 2xl → 4xl instead of 2xl → 5xl */}
              <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-bone">
                &ldquo;{current.text}&rdquo;
              </p>

              <div className="mt-8 md:mt-10 flex flex-col items-center gap-1">
                <p className="font-serif text-base md:text-lg text-bone">
                   {current.author}
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
                  {current.meta}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots  tighter spacing */}
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-4">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="group p-2"
            >
              <span
                className={cn(
                  "block h-px transition-all duration-500 ease-out",
                  i === index
                    ? "w-10 bg-gold"
                    : "w-6 bg-bone/30 group-hover:bg-bone/60"
                )}
              />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}