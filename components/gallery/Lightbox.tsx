"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

/**
 * Lightbox  full-screen image viewer with keyboard navigation.
 * - ESC closes
 * - ← / → navigates
 * - Click outside closes
 */
export default function Lightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = activeIndex !== null;
  const current = isOpen ? images[activeIndex] : null;

  // Navigation handlers
  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, goNext, goPrev]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute top-5 right-5 md:top-8 md:right-8 inline-flex items-center justify-center w-11 h-11 text-bone hover:text-gold transition-colors duration-300 z-10"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          {/* Previous arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-bone hover:text-gold transition-colors duration-300 z-10 group"
          >
            <ChevronLeft
              size={28}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:-translate-x-1"
            />
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-bone hover:text-gold transition-colors duration-300 z-10 group"
          >
            <ChevronRight
              size={28}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </button>

          {/* Image container  animated */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl mx-4 md:mx-12 aspect-[4/3] md:aspect-[16/10]"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-contain"
            />
          </motion.div>

          {/* Caption + counter */}
          <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center px-12 pointer-events-none">
            <motion.div
              key={`caption-${activeIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="font-serif text-xl md:text-2xl text-bone font-light">
                {current.caption}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-bone/50">
                {activeIndex + 1} / {images.length}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}