"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import FinalCTA from "@/components/sections/FinalCTA";
import Lightbox from "@/components/gallery/Lightbox";
import { GALLERY_PAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Map size → Tailwind classes (same pattern as homepage gallery preview)
const SIZE_CLASSES: Record<string, string> = {
  tall: "aspect-[3/4] md:row-span-2",
  short: "aspect-[4/3]",
  medium: "aspect-square",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images by category
  const filteredImages =
    activeCategory === "all"
      ? GALLERY_PAGE.images
      : GALLERY_PAGE.images.filter((img) => img.category === activeCategory);

  // Strip down to just what Lightbox needs (src, alt, caption)
  const lightboxImages = filteredImages.map(({ src, alt, caption }) => ({
    src,
    alt,
    caption,
  }));

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow={GALLERY_PAGE.hero.eyebrow}
        title={GALLERY_PAGE.hero.title}
        description={GALLERY_PAGE.hero.description}
        image={GALLERY_PAGE.hero.image}
        imageAlt={GALLERY_PAGE.hero.imageAlt}
      />

      {/* Filter Bar */}
      <section className="bg-bone border-b border-ink/8">
        <Container size="wide">
          <div className="py-8 md:py-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-8">
            {GALLERY_PAGE.categories.map((cat) => (
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

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-bone">
        <Container size="wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[180px] md:auto-rows-[240px] lg:auto-rows-[280px]"
            >
              {filteredImages.length > 0 ? (
                filteredImages.map((img, index) => (
                  <motion.figure
                    key={`${activeCategory}-${img.src}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: (index % 6) * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => setLightboxIndex(index)}
                    className={cn(
                      "group relative overflow-hidden bg-stone/10 cursor-pointer h-full",
                      SIZE_CLASSES[img.size] || SIZE_CLASSES.medium
                    )}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Hover caption */}
                    <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-bone/70">
                        Novum
                      </p>
                      <p className="mt-1 font-serif text-xl md:text-2xl text-bone font-light leading-tight">
                        {img.caption}
                      </p>
                    </figcaption>
                  </motion.figure>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-serif text-2xl text-stone">
                    No images in this category yet.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Result count */}
          <p className="mt-16 text-center text-[10px] uppercase tracking-[0.3em] text-stone">
            Showing {filteredImages.length} of {GALLERY_PAGE.images.length} images
          </p>
        </Container>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}