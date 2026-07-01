import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE, CONTACT, FOOTER_LINKS } from "@/lib/constants";

/**
 * Footer  luxury multi-column footer.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bone">
      <Container size="wide">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 py-20 md:py-28">
          {/* Brand column */}
          <div className="md:col-span-5">
            <p className="font-serif text-4xl md:text-5xl font-light tracking-tight">
              {SITE.name}
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-bone/60">
              Apartments · {SITE.location}
            </p>
            <p className="mt-8 text-bone/70 leading-relaxed max-w-md">
              A refined collection of residences where modern architecture
              meets contemporary living in the heart of Philadelphia.
            </p>
          </div>

          {/* Explore links */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-6">
              Explore
            </p>
            <ul className="space-y-4">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bone/80 hover:text-bone transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50 mb-6">
              Get in Touch
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-1 text-gold shrink-0" />
                <span className="text-bone/80 leading-relaxed">
                  {CONTACT.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} strokeWidth={1.5} className="mt-1 text-gold shrink-0" />
                <a
                  href={CONTACT.phoneHref}
                  className="text-bone/80 hover:text-bone transition-colors duration-300"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="mt-1 text-gold shrink-0" />
                <a
                  href={CONTACT.emailHref}
                  className="text-bone/80 hover:text-bone transition-colors duration-300 break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-bone/10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8">
          <p className="text-xs text-bone/50">
            © {year} {SITE.fullName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-bone/50 hover:text-bone transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}