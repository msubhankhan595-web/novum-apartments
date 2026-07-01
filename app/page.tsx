import Hero from "@/components/sections/Hero";
import FeaturedResidences from "@/components/sections/FeaturedResidences";
import About from "@/components/sections/About";
import Amenities from "@/components/sections/Amenities";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";
import { getOrganizationSchema } from "./schema";

export default async function HomePage() {
  const schema = getOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Hero />

      <FeaturedResidences />
      <About />
      <Amenities />
      <GalleryPreview />
      <Testimonials />
      <Location />
      <FinalCTA />
    </>
  );
}