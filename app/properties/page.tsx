"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import ResidenceCard from "@/components/property/ResidenceCard";
import FinalCTA from "@/components/sections/FinalCTA";
import { RESIDENCES, RESIDENCE_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import EngrainMap from "@/components/property/EngrainMap";

export default function PropertiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter residences based on selected category
  const filteredResidences =
    activeCategory === "all"
      ? RESIDENCES
      : RESIDENCES.filter((r) => r.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="The Residences"
        title="Modern residences. Thoughtfully designed."
        description="Explore newly constructed apartments designed with quality interiors, practical comforts, and a connected Philadelphia address."
        image="/images/home/facadegallery.jpg"
        imageAlt="Novum Apartments residence interior"
      />

      {/* Filter Bar */}
      <section className="bg-bone border-b border-ink/8">
        <Container size="wide">
          <div className="py-8 md:py-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-8">
            {RESIDENCE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "group relative px-1 py-2 text-[11px] md:text-xs uppercase tracking-[0.25em] transition-colors duration-300",
                  activeCategory === cat.id
                    ? "text-ink"
                    : "text-stone hover:text-ink"
                )}
              >
                {cat.label}

                {/* Active underline */}
                <span
                  className={cn(
                    "absolute -bottom-0 left-0 right-0 h-px transition-all duration-500 ease-out",
                    activeCategory === cat.id
                      ? "bg-gold scale-x-100"
                      : "bg-ink scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Residences Grid */}
      <section className="py-20 md:py-24 lg:py-28 bg-bone">
        <Container size="wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-16 md:gap-y-20"
            >
              {filteredResidences.length > 0 ? (
                filteredResidences.map((residence, index) => (
                  <ResidenceCard
                    key={residence.slug}
                    {...residence}
                    index={index}
                  />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-serif text-2xl text-stone">
                    No residences match this category.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Result count */}
          <p className="mt-16 text-center text-[10px] uppercase tracking-[0.3em] text-stone">
            Showing {filteredResidences.length} of {RESIDENCES.length} residences
          </p>
        </Container>
      </section>

      {/* Engrain / Avialablility Map */}
      <EngrainMap />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}