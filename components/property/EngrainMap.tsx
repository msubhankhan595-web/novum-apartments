import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EngrainMap() {
  return (
    <section
      id="availability"
      className="py-20 md:py-24 lg:py-32 bg-mist border-t border-ink/8"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Availability"
          title="Explore available residences."
          description="View available homes, floor plans, pricing, and real-time availability through our interactive SightMap."
          align="center"
        />

        <div className="mt-16 md:mt-20 w-full max-w-7xl mx-auto overflow-hidden border border-ink/10 bg-bone">
          <div
            className="relative w-full"
            style={{
              height: "820px",
              minHeight: "620px",
            }}
          >
            <iframe
              title="SightMap interactive property map showing unit availability"
              src="https://sightmap.com/embed/dqw9dk38vo9"
              className="absolute inset-0 h-full w-full"
              style={{
                border: 0,
              }}
              allow="geolocation; web-share; clipboard-write"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}