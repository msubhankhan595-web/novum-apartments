import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import { ABOUT_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story | Triad UCity Apartments",
  description:
    "Discover the story behind Triad  a luxurious residence in Philadelphia, built with intention, craft, and a deep respect for the Lancaster Avenue corridor.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow={ABOUT_PAGE.hero.eyebrow}
        title={ABOUT_PAGE.hero.title}
        description={ABOUT_PAGE.hero.description}
        image={ABOUT_PAGE.hero.image}
        imageAlt={ABOUT_PAGE.hero.imageAlt}
      />

      {/* INTRODUCTION */}
      <section className="py-24 md:py-32 lg:py-40 bg-bone">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left  Eyebrow */}
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-stone lg:sticky lg:top-32">
                {ABOUT_PAGE.introduction.eyebrow}
              </p>
            </div>

            {/* Right  Title + paragraphs */}
            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-ink leading-[1.05]">
                {ABOUT_PAGE.introduction.title}
              </h2>
              <div className="origin-left mt-8 h-px w-20 bg-gold" />
              <div className="mt-12 space-y-6">
                {ABOUT_PAGE.introduction.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-stone leading-relaxed max-w-2xl"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PILLARS */}
      <section className="py-24 md:py-32 bg-mist">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
            {ABOUT_PAGE.pillars.map((pillar) => (
              <div key={pillar.number} className="border-t border-ink/15 pt-8">
                <p className="font-serif text-3xl font-light text-gold">
                  {pillar.number}
                </p>
                <h3 className="mt-6 font-serif text-3xl md:text-4xl font-light text-ink leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-6 text-base text-stone leading-relaxed max-w-sm">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DESIGN  image + text split */}
      <section className="py-24 md:py-32 lg:py-40 bg-bone">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone/10">
                <Image
                  src={ABOUT_PAGE.design.image}
                  alt={ABOUT_PAGE.design.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-6 lg:pl-8">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-stone">
                {ABOUT_PAGE.design.eyebrow}
              </p>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-ink leading-[1.05]">
                {ABOUT_PAGE.design.title}
              </h2>
              <div className="origin-left mt-8 h-px w-20 bg-gold" />
              <div className="mt-10 space-y-6">
                {ABOUT_PAGE.design.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-stone leading-relaxed max-w-xl"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32 bg-ink text-bone">
        <Container size="wide">
          <SectionHeading
            eyebrow="The Journey"
            title="From land to landmark."
            align="center"
            variant="light"
          />

          <div className="mt-20 md:mt-24 max-w-4xl mx-auto">
            {ABOUT_PAGE.timeline.map((item, index) => {
              const isLast = index === ABOUT_PAGE.timeline.length - 1;
              return (
                <div
                  key={item.year}
                  className="relative grid grid-cols-12 gap-6 md:gap-10 pb-12 md:pb-16"
                >
                  {/* Year */}
                  <div className="col-span-4 md:col-span-3">
                    <p className="font-serif text-3xl md:text-4xl font-light text-gold">
                      {item.year}
                    </p>
                  </div>

                  {/* Vertical line + dot */}
                  <div className="hidden md:flex md:col-span-1 relative justify-center">
                    {/* Line */}
                    {!isLast && (
                      <span className="absolute top-3 bottom-[-64px] w-px bg-bone/20" />
                    )}
                    {/* Dot */}
                    <span className="relative z-10 mt-1.5 h-3 w-3 rounded-full bg-gold" />
                  </div>

                  {/* Title + description */}
                  <div className="col-span-8 md:col-span-8">
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-bone leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base text-bone/70 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}