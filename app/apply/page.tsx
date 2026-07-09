import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Apply Now | Novum Apartments",
  description:
    "Start your online leasing application for Novum Apartments in Philadelphia.",
};

const primaryButtonClass =
  "group relative inline-flex items-center justify-center overflow-hidden border border-ink bg-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-white transition duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-white before:transition-transform before:duration-500 hover:text-ink hover:before:translate-x-0";

const secondaryButtonClass =
  "group relative inline-flex items-center justify-center overflow-hidden border border-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.3em] text-ink transition duration-500 before:absolute before:inset-0 before:-translate-x-full before:bg-ink before:transition-transform before:duration-500 hover:text-white hover:before:translate-x-0";

export default function ApplyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Apply Now"
        title="Begin your application."
        description="Start your online application through AppFolio."
        image="/images/home/rooftopnvmfinal.jpeg"
        imageAlt="Novum Apartments exterior"
      />

      <section className="py-20 md:py-24 bg-bone">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-ink/50">
            Online Application
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-ink">
            Apply for a Novum residence.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/65">
            Click below to open Novum’s available residences.
          </p>

          <div className="mt-10">
            <a
              href="/apply/listings"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButtonClass}
            >
              <span className="relative z-10">Apply Now</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-ink/50">
            Questions Before Applying?
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-ink">
            Speak with our leasing team.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/65">
            If you have questions about availability, pricing, floor plans, or
            the application process, our leasing team is here to help.
          </p>

          <div className="mt-10">
            <a href="/contact" className={secondaryButtonClass}>
              <span className="relative z-10">Contact Leasing</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}