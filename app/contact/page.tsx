import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_PAGE, CONTACT, LOCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Triad UCity Apartments",
  description:
    "Schedule a private tour or speak with the Triad leasing team. Located at 3748 Lancaster Avenue, Philadelphia.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow={CONTACT_PAGE.hero.eyebrow}
        title={CONTACT_PAGE.hero.title}
        description={CONTACT_PAGE.hero.description}
        image={CONTACT_PAGE.hero.image}
        imageAlt={CONTACT_PAGE.hero.imageAlt}
      />

      {/* Main contact section */}
      <section className="py-20 md:py-24 lg:py-32 bg-bone">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* LEFT  FORM */}
            <div className="lg:col-span-7">
              {/* Form intro */}
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-stone">
                {CONTACT_PAGE.formIntro.eyebrow}
              </p>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-ink leading-[1.05]">
                {CONTACT_PAGE.formIntro.title}
              </h2>
              <div className="origin-left mt-8 h-px w-20 bg-gold" />
              <p className="mt-8 text-base md:text-lg text-stone leading-relaxed max-w-xl">
                {CONTACT_PAGE.formIntro.description}
              </p>

              {/* Form */}
              <div className="mt-14">
                <ContactForm />
              </div>
            </div>

            {/* RIGHT  INFO CARD */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-12">
                {/* Visit */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
                    Visit
                  </p>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      strokeWidth={1.5}
                      className="mt-1 text-gold shrink-0"
                    />
                    <p className="font-serif text-xl md:text-2xl text-ink font-light leading-snug">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
                    Contact
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Phone
                        size={18}
                        strokeWidth={1.5}
                        className="mt-1 text-gold shrink-0"
                      />
                      <a
                        href={CONTACT.phoneHref}
                        className="font-serif text-xl text-ink font-light hover:text-gold transition-colors duration-300"
                      >
                        {CONTACT.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail
                        size={18}
                        strokeWidth={1.5}
                        className="mt-1 text-gold shrink-0"
                      />
                      <a
                        href={CONTACT.emailHref}
                        className="font-serif text-xl text-ink font-light hover:text-gold transition-colors duration-300 break-all"
                      >
                        {CONTACT.email}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
                    Office Hours
                  </p>
                  <ul className="space-y-3">
                    {CONTACT_PAGE.hours.map((slot) => (
                      <li
                        key={slot.day}
                        className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-3"
                      >
                        <span className="flex items-baseline gap-3 text-base text-ink">
                          <Clock
                            size={14}
                            strokeWidth={1.5}
                            className="text-gold shrink-0 self-center"
                          />
                          <span className="font-serif font-light">{slot.day}</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-stone shrink-0">
                          {slot.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Map */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
                    Find Us
                  </p>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone/10 border border-ink/10">
                    <iframe
                      src={LOCATION.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      className="grayscale-[40%] contrast-[0.95]"
                      title="Map of Triad UCity Apartments"
                    />
                  </div>

                  <a
                    href={LOCATION.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink hover:text-gold transition-colors duration-300"
                  >
                    Open in Google Maps
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}