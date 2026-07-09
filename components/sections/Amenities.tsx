"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
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
  CookingPot,
  type LucideProps,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { AMENITIES } from "@/lib/constants";

function ElevatorIcon({
  size = 20,
  strokeWidth = 1.25,
  className,
}: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 10h10v10H7z" />
      <path d="M12 10v10" />
      <path d="M9 7l3-3 3 3" />
      <path d="M18.5 12.5h1.5v5h-1.5z" />
      <path d="M19.25 14h.01" />
      <path d="M19.25 16h.01" />
    </svg>
  );
}

// Map icon names from lib/constants.ts to actual icon components
const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
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
  CookingPot,
  ElevatorIcon,
};

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 lg:py-40 bg-bone">
      <Container size="wide">
        <SectionHeading
          eyebrow={AMENITIES.eyebrow}
          title={AMENITIES.title}
          description={AMENITIES.description}
          align="center"
        />

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

            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0" />

            <p className="absolute bottom-6 md:bottom-10 left-6 md:left-12 right-6 md:right-12 font-serif text-xl md:text-3xl text-bone font-light leading-tight max-w-2xl">
              {AMENITIES.heroCaption}
            </p>
          </div>
        </motion.div>

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
                <div className="inline-flex items-center justify-center w-12 h-12 border border-ink/15 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/5">
                  {Icon && (
                    <Icon
                      size={20}
                      strokeWidth={1.25}
                      className="text-ink transition-colors duration-500 group-hover:text-gold"
                    />
                  )}
                </div>

                <h3 className="mt-6 font-serif text-2xl font-light text-ink leading-tight">
                  {item.title}
                </h3>

                <div className="mt-4 h-px w-8 bg-gold/60" />

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