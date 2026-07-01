"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Building2, 
  Laptop,
  Sofa,
  Package,
  PawPrint,
  Bike,
  WashingMachine,
  Wifi,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { AMENITIES } from "@/lib/constants";

// Map icon names (strings) → actual Lucide icon components
const ICON_MAP: Record<string, LucideIcon> = {
  Dumbbell,
  Building2,
  Laptop, 
  Sofa,
  Package,
  PawPrint,
  Bike,
  WashingMachine,
  Wifi,
  ShieldCheck,
};

/**
 * Amenities  featured rooftop image + icon grid below.
 */
export default function Amenities() {
  return (
    <section
      id="amenities"
      className="py-24 md:py-32 lg:py-40 bg-bone"
    >
      <Container size="wide">
        {/* Heading */}
        <SectionHeading
          eyebrow={AMENITIES.eyebrow}
          title={AMENITIES.title}
          description={AMENITIES.description}
          align="center"
        />

        {/* Featured hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-stone/10">
            <Image
              src={AMENITIES.heroImage}
              alt={AMENITIES.heroImageAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0" />
            <p className="absolute bottom-6 md:bottom-10 left-6 md:left-12 right-6 md:right-12 font-serif text-xl md:text-3xl text-bone font-light leading-tight max-w-2xl">
              {AMENITIES.heroCaption}
            </p>
          </div>
        </motion.div>

        {/* Icon grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-16">
          {AMENITIES.items.map((item, index) => {
            const Icon = ICON_MAP[item.icon];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: (index % 4) * 0.1,
                  ease: "easeOut",
                }}
                className="group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 border border-ink/15 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/5">
                  {Icon && (
                    <Icon
                      size={20}
                      strokeWidth={1.25}
                      className="text-ink transition-colors duration-500 group-hover:text-gold"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-6 font-serif text-2xl font-light text-ink leading-tight">
                  {item.title}
                </h3>

                {/* Gold line */}
                <div className="mt-4 h-px w-8 bg-gold/60" />

                {/* Description */}
                <p className="mt-4 text-sm text-stone leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}