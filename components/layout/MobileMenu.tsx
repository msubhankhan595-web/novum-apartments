"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";
import NavLinks from "./NavLinks";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileMenu  slide-in panel from the right.
 */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when menu is open
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

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Sliding panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-bone shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Close button  inside the panel */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 inline-flex items-center justify-center w-10 h-10 text-ink hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Top  branding */}
            <div className="px-8 pt-10 pb-8 border-b border-ink/10">
              <p className="font-serif text-3xl font-light text-ink">
                {SITE.name}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone">
                {SITE.location}
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-8 py-12">
              <NavLinks
                orientation="vertical"
                variant="dark"
                onClick={onClose}
              />
            </nav>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}