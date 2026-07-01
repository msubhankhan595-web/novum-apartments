"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroMediaProps {
  /** Type of media: "image" or "video" */
  type?: "image" | "video";
  /** URL/path to image (.jpg) or video (.mp4) */
  src: string;
  /** Optional: poster image shown before video loads */
  videoPoster?: string;
  /** Alt text for image (required if type is image) */
  alt?: string;
}

/**
 * HeroMedia  swappable hero background.
 * Supports both <Image> and <video> with the same animations.
 *
 * USAGE:
 *   <HeroMedia type="image" src="/hero.jpg" alt="Luxury living room" />
 *   <HeroMedia type="video" src="/hero.mp4" videoPoster="/hero.jpg" />
 */
export default function HeroMedia({
  type = "image",
  src,
  videoPoster,
  alt = "",
}: HeroMediaProps) {
  return (
    <motion.div
      initial={{ scale: 1.15 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.5, ease: [0.32, 0.72, 0, 1] }}
      className="absolute inset-0"
    >
      {type === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={videoPoster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
    </motion.div>
  );
}