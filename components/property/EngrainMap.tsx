import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EngrainMap() {
  return (
    <section id="availability" className="py-20 md:py-24 lg:py-32 bg-bone">
      <Container size="wide">
        <SectionHeading
          eyebrow="Availability"
          title="Explore current availability."
          description="Use the interactive map below to view available residences, layouts, and location within the building."
          align="center"
        />

        <div className="mt-14 overflow-hidden border border-ink/10 bg-mist shadow-sm">
          <div className="w-full" style={{ height: "820px", minHeight: "620px" }}>
            <iframe
              title="SightMap interactive property map showing Novum availability"
              width="100%"
              height="100%"
              src="https://sightmap.com/embed/d7p1x01xvkx"
              frameBorder="0"
              allow="geolocation; web-share; clipboard-write"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}