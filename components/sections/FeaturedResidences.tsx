import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ResidenceCard from "@/components/property/ResidenceCard";
import Button from "@/components/ui/Button";
import { RESIDENCES } from "@/lib/constants";

/**
 * FeaturedResidences  homepage section showcasing 4 unit types.
 */
export default function FeaturedResidences() {
  return (
    <section
      id="residences"
      className="py-24 md:py-32 lg:py-40 bg-bone"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="The Residences"
          title="Forty refined residences. One address worth calling home."
          description="A modern collection of newly constructed residences, thoughtfully designed with quality interiors, practical comforts, and a calm sense of home."
          align="center"
        />

        {/* Cards grid */}
        <div className="mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 md:gap-y-20">
          {RESIDENCES.map((residence, index) => (
            <ResidenceCard
              key={residence.slug}
              {...residence}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <Button href="/properties" variant="secondary" size="md">
            View All Residences
          </Button>
        </div>
      </Container>
    </section>
  );
}