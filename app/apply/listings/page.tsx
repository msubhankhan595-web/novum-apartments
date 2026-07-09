import type { Metadata } from "next";
import AppFolioListing from "@/components/property/AppFolioListing";

export const metadata: Metadata = {
  title: "Available Residences | Novum Apartments",
  description:
    "View available Novum residences and begin your application through AppFolio.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-bone py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-ink/50">
            Availability
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-serif text-ink">
            Available Novum Residences
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/65">
            Browse current Novum availability below and begin your application
            directly through AppFolio.
          </p>
        </div>

        <AppFolioListing propertyGroup="Novum Apartments" />
      </div>
    </main>
  );
}