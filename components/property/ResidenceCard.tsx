"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ResidenceCardProps {
  slug: string;
  name: string;
  type: string;
  sqft: string;
  priceFrom: string;
  image: string;
  description: string;
  index?: number;
}

/**
 * ResidenceCard — luxury unit-type card.
 * Image zooms on hover, arrow slides, overlay deepens.
 */
export default function ResidenceCard({
  slug,
  name,
  type,
  sqft,
  priceFrom,
  image,
  description,
  index = 0,
}: ResidenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,        // stagger cards
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/properties/${slug}`}
        className="group block"
        aria-label={`${name} — ${type}`}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist">
          <Image
            src={image}
            alt={`${name} interior`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />

          {/* Gradient overlay — deepens on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/0 to-ink/0 opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

          {/* Top-right arrow */}
          <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-bone/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight size={16} strokeWidth={1.5} className="text-ink" />
          </div>

          {/* Price tag — bottom-left */}
          <div className="absolute bottom-5 left-5 text-bone">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/70">
              Starting
            </p>
            <p className="mt-1 font-serif text-2xl font-light">
              {priceFrom}
            </p>
          </div>
        </div>

        {/* Text below image */}
        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-ink leading-tight">
              {name}
            </h3>
            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone">
              {type} · {sqft}
            </p>
            <p className="mt-4 text-sm text-stone leading-relaxed max-w-xs">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}