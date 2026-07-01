"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { GALLERY_PREVIEW } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Map each "size" to a Tailwind aspect ratio + column span
const SIZE_CLASSES: Record<string, string> = {
  tall: "aspect-[3/4] md:row-span-2",      // tall portrait
  short: "aspect-[4/3]",                    // landscape
  medium: "aspect-square",                  // square
};

/**
 * GalleryPreview  asymmetric masonry of 6 lifestyle images.
 */
export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 lg:py-40 bg-mist"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow={GALLERY_PREVIEW.eyebrow}
          title={GALLERY_PREVIEW.title}
          description={GALLERY_PREVIEW.description}
          align="center"
        />

        {/* Masonry grid */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[180px] md:auto-rows-[240px] lg:auto-rows-[280px]">
          {GALLERY_PREVIEW.images.map((img, index) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                delay: (index % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative overflow-hidden bg-stone/10 h-full",
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

              {/* Gradient overlay  deepens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Caption  slides up on hover */}
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-[10px] uppercase tracking-[0.3em] text-bone/70">
                  Triad
                </p>
                <p className="mt-1 font-serif text-xl md:text-2xl text-bone font-light leading-tight">
                  {img.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <Button href="/gallery" variant="secondary" size="md">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}