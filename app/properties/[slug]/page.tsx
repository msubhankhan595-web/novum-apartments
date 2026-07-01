import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PropertyGalleryHero from "@/components/property/PropertyGalleryHero";
import InquiryForm from "@/components/property/InquiryForm";
import ResidenceCard from "@/components/property/ResidenceCard";
import FinalCTA from "@/components/sections/FinalCTA";
import { RESIDENCES } from "@/lib/constants";
import { getResidenceSchema } from "@/app/schema";

export async function generateStaticParams() {
  return RESIDENCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const residence = RESIDENCES.find((r) => r.slug === slug);

  if (!residence) {
    return { title: "Residence Not Found | Triad UCity Apartments" };
  }

  return {
    title: `${residence.name} — ${residence.type}`,
    description: residence.description,
    openGraph: {
      title: `${residence.name} | Triad UCity Apartments`,
      description: residence.description,
      images: [{ url: residence.image }],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const residence = RESIDENCES.find((r) => r.slug === slug);

  if (!residence) notFound();

  const otherResidences = RESIDENCES.filter(
    (r) => r.slug !== slug
  ).slice(0, 3);

  const schema = getResidenceSchema(residence);

  return (
    <>
      {/* Schema markup for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Gallery Hero */}
      <PropertyGalleryHero
        images={residence.gallery}
        name={residence.name}
      />

      {/* Main content */}
      <section className="py-20 md:py-24 lg:py-32 bg-bone">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT — Story */}
            <div className="lg:col-span-7">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-stone">
                {residence.tagline}
              </p>

              <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-ink leading-[1.02]">
                {residence.name}
              </h1>

              <div className="origin-left mt-8 h-px w-20 bg-gold" />

              <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
                  {residence.type}
                </p>
                <p className="font-serif text-2xl font-light text-ink">
                  {residence.priceFrom}
                </p>
              </div>

              <div className="mt-12 space-y-6">
                {residence.longDescription.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-stone leading-relaxed max-w-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div className="mt-16">
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-8">
                  Key Details
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
                  {residence.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-baseline gap-3 border-b border-ink/8 pb-3"
                    >
                      <span className="h-1 w-1 bg-gold rounded-full shrink-0 translate-y-[-3px]" />
                      <span className="font-serif text-base text-ink font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — Sticky inquiry form */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <InquiryForm
                  residenceName={residence.name}
                  priceFrom={residence.priceFrom}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Floor Plan */}
      <section className="py-20 md:py-24 lg:py-32 bg-mist">
        <Container size="wide">
          <SectionHeading
            eyebrow="The Floor Plan"
            title="Designed for how you live."
            description="Generous proportions and a layout that flows. See how every square foot has been considered."
            align="center"
          />

          {residence.floorPlan && (
            <div className="mt-16 md:mt-20 relative aspect-square w-full max-w-5xl mx-auto bg-bone border border-ink/8">
              <Image
                src={residence.floorPlan}
                alt={`${residence.name} floor plan`}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain p-6"
              />
            </div>
          )}

          <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-stone">
            Plans are representative. Final dimensions may vary.
          </p>
        </Container>
      </section>

      {/* Other Residences */}
      <section className="py-20 md:py-24 lg:py-32 bg-bone border-t border-ink/8">
        <Container size="wide">
          <SectionHeading
            eyebrow="Continue Exploring"
            title="Other residences to consider."
            align="center"
          />

          <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {otherResidences.map((other, index) => (
              <ResidenceCard
                key={other.slug}
                {...other}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <Button href="/properties#availability" variant="primary" size="md">
              Explore Availability
            </Button>

            <Button href="/properties" variant="secondary" size="md">
              View All Residences
            </Button>
          </div>

        </Container>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}