"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { PROMO_BAR } from "@/lib/constants";

const DISMISS_KEY = "serpentine_promo_dismissed";

/**
 * PromoBar  slim luxury announcement bar above the navbar.
 */
export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const messages = PROMO_BAR.messages;

  useEffect(() => {
    if (!PROMO_BAR.enabled) return;
    const wasDismissed = localStorage.getItem(DISMISS_KEY);
    if (!wasDismissed) setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible || messages.length <= 1 || PROMO_BAR.rotationMs === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, PROMO_BAR.rotationMs);
    return () => clearInterval(timer);
  }, [isVisible, messages.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(DISMISS_KEY, "true");
    window.dispatchEvent(new Event("promo:dismissed"));
  };

  if (!PROMO_BAR.enabled || messages.length === 0) return null;

  const current = messages[index];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-40 bg-ink text-bone overflow-hidden"
        >
          <div className="relative flex items-center justify-center px-12 py-2.5 md:py-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center"
              >
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-bone/85">
                  {current.text}
                </span>

                {current.linkText && current.href && (
                  <>
                    <span className="hidden sm:inline text-bone/30">·</span>
                    <Link
                      href={current.href}
                      className="group inline-flex items-center gap-1.5 text-[11px] md:text-xs uppercase tracking-[0.25em] text-gold hover:text-gold-light transition-colors duration-300"
                    >
                      {current.linkText}
                      <ArrowRight
                        size={12}
                        strokeWidth={1.5}
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      />
                    </Link>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={handleDismiss}
              aria-label="Dismiss announcement"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-7 h-7 text-bone/60 hover:text-bone transition-colors duration-300"
            >
              <X size={14} strokeWidth={1.5} />
            </button>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}