"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { PROMO_BAR } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(false);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track promo bar state
  useEffect(() => {
    if (!PROMO_BAR.enabled) return;
    const wasDismissed = localStorage.getItem("serpentine_promo_dismissed");
    setPromoVisible(!wasDismissed);

    const onDismiss = () => setPromoVisible(false);
    window.addEventListener("promo:dismissed", onDismiss);
    return () => window.removeEventListener("promo:dismissed", onDismiss);
  }, []);

  // Promo bar adds ~40px on mobile, ~44px on desktop
  const topOffset = promoVisible ? "var(--promo-h, 40px)" : "0px";

  return (
    <>
      <header
        style={{ top: topOffset }}
        className={cn(
          "fixed left-0 right-0 z-30 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-bone/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)] py-4"
            : "bg-transparent py-6"
        )}
      >
        <Container size="wide">
          <nav
            className="flex items-center justify-between"
            aria-label="Primary navigation"
          >
            <Logo variant={isScrolled ? "dark" : "light"} />

            <div className="hidden lg:block">
              <NavLinks variant={isScrolled ? "dark" : "light"} />
            </div>

            <button
              onClick={() => setIsMobileOpen(true)}
              className={cn(
                "lg:hidden inline-flex items-center justify-center w-10 h-10 hover:opacity-70 transition-opacity",
                isScrolled ? "text-ink" : "text-bone"
              )}
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}