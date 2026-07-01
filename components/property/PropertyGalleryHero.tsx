"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PropertyGalleryHeroProps {
  images: string[];
  name: string;
}

/**
 * PropertyGalleryHero  large 3-image gallery for property detail pages.
 * Layout: 1 large left image, 2 stacked right images.
 */
export default function PropertyGalleryHero({
  images,
  name,
}: PropertyGalleryHeroProps) {
  // Take first 3 images
  const [main, secondary, tertiary] = images;

  return (
    <section className="bg-bone pt-24 md:pt-28 lg:pt-32 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 h-[60vh] md:h-[80svh] min-h-[480px]">
        {/* Main image  left side, full height */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full overflow-hidden bg-stone/10"
        >
          {main && (
            <Image
              src={main}
              alt={`${name}  main view`}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </motion.div>

        {/* Right side  2 stacked images */}
        <div className="grid grid-rows-2 gap-2 md:gap-3 h-full">
          {secondary && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden bg-stone/10"
            >
              <Image
                src={secondary}
                alt={`${name}  interior detail`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          )}

          {tertiary && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden bg-stone/10"
            >
              <Image
                src={tertiary}
                alt={`${name}  additional view`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}